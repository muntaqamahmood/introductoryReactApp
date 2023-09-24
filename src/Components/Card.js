import { v4 as uuidv4 } from 'uuid';

function Card(props) {
  return (
    <li key={uuidv4()} className="concept">
      <img src={props.concept.image} alt={props.concept.title} />
      <h2>{props.concept.title}</h2>
      <p>{props.concept.description}</p>
    </li>
  );
}

export default Card;
