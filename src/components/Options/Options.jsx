import css from "./Options.module.css";
export default function Options({ addReview, total, resetFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => addReview("good")}>Good</button>
      <button onClick={() => addReview("neutral")}>Neutral</button>
      <button onClick={() => addReview("bad")}>Bad</button>
      {!!total && <button onClick={resetFeedback}> Reset </button>}
    </div>
  );
}
