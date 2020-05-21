import Card from "./Card";

const cities = ["Singapore", "San Francisco", "Timisoara", "Oradea", "Berlin", "Barcelona", "Oslo", "London"];

function Cards() {
  return (
    <>
      {cities.map((city) => {
        return <Card title={city} />;
      })}
    </>
  );
}

export default Cards;
