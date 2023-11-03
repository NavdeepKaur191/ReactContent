// function totalAsDollarAmount(numbers) {
//   // Calculate the total value of the numbers
//   const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//   // Format the total as a dollar amount with two decimal places
//   const formattedTotal = "$" + total.toFixed(2);

//   // Return the formatted total
//   return formattedTotal;
// }

// console.log(totalAsDollarAmount([])); // "$172.50"

function formatEventData(events) {
  // Loop through each event in the array
  for (let i = 0; i < events.length; i++) {
    // Get the event date and time as a JavaScript Date object
    const eventDate = new Date(events[i].eventDateTime);

    // Format the event date and time as a human-readable string
    const formattedDateTime = eventDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    // Add the formatted date and time to the event object
    events[i].formattedDateTime = formattedDateTime;
  }

  // Return the updated events array with the formatted date and time
  return events;
}

const data = {
  "events": [
    {
      "bandName": "The Rolling Stones",
      "genre": "Rock",
      "eventDateTime": "2023-05-15T20:00:00",
      "ticketCost": 100.00,
      "venue": "Madison Square Garden"
    },
    {
      "bandName": "Daft Punk",
      "genre": "Electronic",
      "eventDateTime": "2023-06-20T19:30:00",
      "ticketCost": 75.50,
      "venue": "Barclays Center"
    }
  ]
};

const formattedData = formatEventData(data.events);
console.log(formattedData);