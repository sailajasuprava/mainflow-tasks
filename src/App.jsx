import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [items, setItems] = useState([
    { name: "rent", price: "14500" },
    { name: "electricity", price: "1500" },
  ]);
  console.log(items);

  return (
    <div className="w-80 mx-auto space-y-10 pt-10 text-center ">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>
      <Form setItems={setItems} />
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="capitalize flex justify-between border-b-2"
          >
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
