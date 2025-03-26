import React, { useState } from "react";
import UserList from "./Contact"; // Import UserList

export default function Add({ addUser, users }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    if (name && email) {
      addUser({ name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAdd}>Add</button>

      {/* Display user list below input fields */}
 
    </div>
  );
}