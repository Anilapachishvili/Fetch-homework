import React, { useEffect, useState } from "react";

import "./DataArray.css";
const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.log("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
       
        
    <div>
      {users.length > 0 ? (
        <ul className="flex">
          {users.map(user => (
            <li key={user.id}>
            <div className="users-name">
                
       {user.name && <span>{user.name}  </span>}
              
            </div>


            
            <div className="user-company">
              
              {user.company && user.company.name && (
                <span>{user.company.name}</span>
              )}
              </div>
              
           {user.phone && <span>{user.phone}</span>}
           {user.email && <span>{user.email}</span>}
           {user.address && user.address.street && (
                <span>{user.address.street}</span>
              )} 
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
    </div>
  );
};

export default App;