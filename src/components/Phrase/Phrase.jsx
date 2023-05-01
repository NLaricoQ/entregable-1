import "./Phrase.css";
const Phrase = ({ phrase, img, author }) => {
  return (
    <section className="phrase_container">
      <h3>
        <mark>Autor: {author}</mark>
      </h3>
      <img src={img}></img>

      <p>{phrase}</p>
    </section>
  );
};

export default Phrase;
