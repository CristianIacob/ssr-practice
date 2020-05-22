import Card from "./Card";

const cities = ["Singapore", "San Francisco", "Timisoara", "Oradea", "Berlin", "Barcelona", "Oslo", "London"];

function Cards(props) {
  console.log("Cards -> props", props);
  return (
    <>
      {props.searchValue ? (
        <Card key={`weather-card-solo`} title={props.searchValue} />
      ) : (
        cities.map((city, i) => {
          return <Card key={`weather-card-${i}`} title={city} />;
        })
      )}
    </>
  );
}

export default Cards;
