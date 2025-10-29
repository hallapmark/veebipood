import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Kinkekaardid() {
  const [summa, setSumma] = useState(20); // muudab automaatselt html-i ka
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();

  function lisa() {
    // if (emailRef.current.value.includes("@") === false) {
    //   alert("Email pole õigel kujul!");
    // } else if (emailRef.current.value.length < 7) {
    //   alert("Email liiga lühike!");
    // } else {
    //   alert("Email lisatud!");
    // }

    if (emailRef.current.value.includes("@") === false) {
      toast.error("Email pole õigel kujul!");
      return;
    } 

    if (emailRef.current.value.length < 7) {
      toast.error("Email liiga lühike!");
      return;
    } 
    toast.success("Email lisatud!");
  }

  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className={summa === 50 ? "summa-aktiivne" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => setSumma(100)}>100€</button>

      <div>Kinkekaart {summa} €</div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => setKogus(prev => prev - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(prev => prev + 1)}>+</button>

      <br /><br />

      <div>{summa * kogus}€</div>

      <br /><br />

      <label>Email</label> <br />
      <input ref={emailRef} type="text"/> <br />
      <button onClick={lisa}>Lisa</button>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  );
}

export default Kinkekaardid;
