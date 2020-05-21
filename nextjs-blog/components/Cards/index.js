import Card from "./Card";

const cities = ["Singapore", "San Francisco", "London", "Madrid", "Berlin", "Barcelona"];

function Cards() {
  return (
    <main className="flex justify-center flex-wrap">
      {cities.map((city) => {
        return <Card title={city} />;
      })}
    </main>
  );
}

export default Cards;
