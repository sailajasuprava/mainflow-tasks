import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function Form({ setItems }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      price,
    };
    setItems((prev) => [...prev, data]);
    setName("");
    setPrice("");
  };

  return (
    <form className="flex flex-col gap-4 items-center p-4 bg-slate-100">
      <div className="flex gap-3">
        <label htmlFor="">Item</label>
        <input
          className="border-2 border-black p-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex gap-3">
        <label htmlFor="">Price</label>
        <input
          className="border-2 border-black p-1"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="bg-green-400 px-4 py-1" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default Form;
