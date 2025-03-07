import { useEffect, useState } from "react";
import "./StyleCard.css";

function Card() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCoffees(data.coffees));
  }, []);

  return (
    <div className="produtos">
      {coffees.map((coffee) => (
        <div key={coffee.id} className="BordaCafe">
          <img src={coffee.image} alt={coffee.title} />
          <h3>{coffee.title}</h3>
          <p>{coffee.description}</p>
          <span>R$ {coffee.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}
export default Card;
