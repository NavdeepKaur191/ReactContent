import React, { useState, useEffect } from 'react';
import "../App"


// When using async/await with useEffect, you cannot make the effect function 
// asynchronous because it's not supposed to return a promise. Instead, 
// you'll typically define an inner async function within the effect and call that:
function AsyncAwaitComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Using async/await with useEffect()</h2>
      {data ? (
        <div>
        <strong>ID:</strong> {data.id}<br />
        <strong>Name:</strong> {data.name}<br />
        <strong>City:</strong> {data.address.city}<br />
        <strong>Phone:</strong> {data.phone}<br />
        <strong>Company:</strong> {data.company.name}<br />
      </div>       
      ) : (
        'Loading...'
      )}
    </div>
  );
}



// This approach utilizes Promises directly and is easier:
// It uses the fetch API's fetch function which returns a promise that resolves
// with the Response object that completes the fetch operation
function ThenComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Initiates and returns a promise/response
      .then(result => setData(result)) // Handles the JSON data
      .catch(error => console.error('Error fetching the data', error));
  }, []);

  return (
    <div>
      <h2>Using .then() with useEffect()</h2>
      {data ? (
        <ul className="no-bullets">
          {data.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}<br />
            </li>
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

function FetchExamples(){
  return(
    <>
      <ThenComponent />
      <AsyncAwaitComponent />
    </>
  )
};
export default FetchExamples;