import React from "react";

function ListItem({ item }) {
  return (
    <li className="capitalize flex justify-between border-b-2">
      <span>{item.name}</span>
      <span>{item.price}</span>
    </li>
  );
}

export default ListItem;
