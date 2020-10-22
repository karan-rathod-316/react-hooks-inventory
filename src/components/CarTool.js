import React, { useState } from "react";

export const CarTool = ({ cars: initialCars }) => {
  let [carForm, setCarForm] = useState({
    make: " ",
    model: " ",
    year: 1990,
    color: " ",
    price: 0,
  });

  const [cars, setCars] = useState(initialCars.concat());

  const change = ({ target: { name, type, value } }) => {
    return setCarForm({
      ...carForm,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const addCar = () => {
    setCars(
      cars.concat({ ...carForm, id: Math.max(...cars.map((c) => c.id)) + 1 })
    );
    setCarForm({
      make: " ",
      model: " ",
      year: " ",
      color: " ",
      price: " ",
    });
  };

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <div>
          <label htmlFor="make-input">Make:</label>
          <input
            value={carForm.make}
            type="text"
            onChange={change}
            id="make-input"
            name="make"
          />
        </div>
        <div>
          <label htmlFor="model-input">Model:</label>
          <input
            type="text"
            value={carForm.model}
            onChange={change}
            id="model-input"
            name="model"
          />
        </div>
        <div>
          <label htmlFor="year-input">Year:</label>
          <input
            type="number"
            value={carForm.year}
            onChange={change}
            id="year-input"
            name="year"
          />
        </div>
        <div>
          <label htmlFor="color-input">Color:</label>
          <input
            type="text"
            value={carForm.color}
            onChange={change}
            id="color-input"
            name="color"
          />
        </div>
        <div>
          <label htmlFor="price-input">Price:</label>
          <input
            type="number"
            value={carForm.price}
            onChange={change}
            id="price-input"
            name="price"
          />
        </div>
        <button type="button" onClick={addCar}>
          Add Car
        </button>
      </form>
    </>
  );
};
