import css from "./Feedback.module.css";
export default function Feedback({ good, neutral, bad, total }) {
  return (
    <ul className={css.feedback}>
      <li>
        Good: <span> {good}</span>
      </li>
      <li>
        Neutral: <span> {neutral}</span>
      </li>
      <li>
        Bad: <span> {bad}</span>
      </li>
      <li>
        Total: <span> {total}</span>
      </li>
      <li>
        Positive:
        <span> {Math.round(((good + neutral) / total) * 100)}% </span>
      </li>
    </ul>
  );
}
