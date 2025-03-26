import React from "react";


function UserList({ users, deleteUser }) {
    return (
      <div>
        <h2>Members Added</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoDQJqLNZK1gxPQp1LM7bMdYnYRgEko1URg&s"
                  alt="User Avatar" 
                  width="50" 
                  height="50" 
                  style={{ borderRadius: "50%" }} 
                />
                <div>
                  <strong>Name:</strong> {user.name} <br />
                  <strong>Email:</strong> {user.email}
                </div>
                <button onClick={() => deleteUser(index)} style={{ marginLeft: "10px", background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No members added yet.</p>
        )}
      </div>
    );
  }

export default UserList;