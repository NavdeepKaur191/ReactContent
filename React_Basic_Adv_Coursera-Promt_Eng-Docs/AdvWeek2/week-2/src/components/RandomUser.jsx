import { useState, useEffect } from "react";

function RandomUser(){
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(jsonData => setUser(jsonData));
  }

  useEffect(() => {
    fetchData();    
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data Returned From API</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Data Pending...</h1>  
  )

}
export default RandomUser;