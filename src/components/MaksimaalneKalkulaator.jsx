import { useRef, useState } from "react";
import "./styles/MaksimaalneKalkulaator.css";

function MaksimaalneKalkulaator() {
  const kooselusRef = useRef(true); // true === abielus või vabaabielus
  const ulalpeetavadRef = useRef(1);
  const netosissetulekRef = useRef(900);
  const kohustusedRef = useRef(0); // igakuised

  const [maksimaalneLaen, setMaksimaalneLaen] = useState(0)

  function arutaMaksimaalneLaen() {
    const married = Number(kooselusRef.current.checked);
    const dependents = Number(ulalpeetavadRef.current.value);
    const income = Number(netosissetulekRef.current.value);
    const obligations = Number(kohustusedRef.current.value);
    setMaksimaalneLaen(maxLoanLinear(married, dependents, income, obligations))
  }

  function maxLoanLinear(married, dependents, income, obligations) {
    // Kratil palusin lineaarregressiooni teha. Pole täpne, aga siin võiks sobida.
    // Fitted parameters
    const alpha = 84.66464769; // base loan-per-euro-of-income
    const gamma = 10.8522748; // dependent penalty per (income * effectiveDependents)
    const beta = 170.42277873; // euro penalty per euro of obligations
    
    // abielu/vabaabielu vähendab ülalpeetavatest tulenevat penaltyt
    const marriedReduction = 0.763;

    const effDependents = dependents * (1 - (married ? marriedReduction : 0));

    // Lineaarmudel
    const loan =
      income * alpha - income * gamma * effDependents - beta * obligations;

    if (income < 900) return 0; // hard minimum
    if (loan <= 0) return 0;
    return Math.max(0, loan);
  }

  return (
    <div>
      <div className="flexXContainer">
        <div className="maxLaenuSisend">
          <div className="inputRow perekonnaSeis">
            <label>Perekonnaseis</label>
            <label>
              <input 
                type="checkbox"
                ref={kooselusRef}
                onChange={arutaMaksimaalneLaen}
              />abielus või vabaabielus
            </label>
          </div>
          <label>Ülalpeetavad</label>
          <select
            ref={ulalpeetavadRef}
            onChange={arutaMaksimaalneLaen}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6+</option>
          </select>{" "}
          <br />
          <label>Netosissetulek</label>
          <input 
            ref={netosissetulekRef}
            onChange={arutaMaksimaalneLaen} 
            type="text" 
          /> <br />
          <label>Kohustused (kuus)</label>
          <input 
            ref={kohustusedRef}
            onChange={arutaMaksimaalneLaen}
            type="text" /> 
          <br />
        </div>
        <div className="MaxLaenuTulemus">
          <p>
            Maksimaalne antav laen: {maksimaalneLaen.toFixed(2)}€
          </p>
        </div>
      </div>
    </div>
  );
}

export default MaksimaalneKalkulaator;
