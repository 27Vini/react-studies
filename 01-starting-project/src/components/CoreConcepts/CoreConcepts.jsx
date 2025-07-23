import "./CoreConcepts.css";

export function CoreConcepts({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
