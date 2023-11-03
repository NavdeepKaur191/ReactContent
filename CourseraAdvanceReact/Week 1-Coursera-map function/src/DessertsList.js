function DessertsList(props) {
  // Implement the component here.
  const desserts = props.data.filter(dessert => dessert.calories <= 500)
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => {
      return (<li>{dessert.name} - {dessert.calories} cal</li>);
    });
    

  return (<ul>
    {desserts}
  </ul>);
}

export default DessertsList;
