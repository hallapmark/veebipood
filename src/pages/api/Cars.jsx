import { useEffect, useState } from "react";

function Cars() {
  const [totalCars, setTotalCars] = useState(0);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100")
      .then(r => r.json())
      .then(json => {
        setCars(json.results);
        setTotalCars(json.total_count);
      })
  });

  return (
    <div>
      <div>Total number of cars: {totalCars}</div>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Drive</th>
            <th>Transmission</th>
            <th>Fuel</th>
            <th>Engine Description</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => 
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.drive}</td>
              <td>{car.trany}</td>
              <td>{car.fueltype1}</td>
              <td>{car.eng_dscr && car.eng_dscr.length > 0 ? car.eng_dscr[0] : "Not available"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Cars

//https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100