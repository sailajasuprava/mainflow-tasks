import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

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
      <List items={items} />
    </div>
  );
}

export default App;
