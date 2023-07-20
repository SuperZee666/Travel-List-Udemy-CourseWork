//eslint-disable-next-line
import { useState } from "react";
import "./index.css";
// Create a Travel List App
// eslint-disable-next-line
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌅</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !quantity) {
      return;
    }

    const newItems = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    console.log(newItems);

    setDescription("");
    setQuantity("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        type="number"
        name="quantity"
        required
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder=" Items you need?"
        required
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input
        onChange={() => (item.packed = !item.packed)}
        type="checkbox"
        checked={item.packed}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X (X%){" "}
    </footer>
  );
}
