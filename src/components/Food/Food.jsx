import "./Food.css";
const Food = ({ url, title, description }) => {
  return (
    <section className="food_container">
      <h3>
        <mark>{title}</mark>
      </h3>
      <img src={url}></img>
      <p>{description}</p>
    </section>
  );
};

export default Food;
