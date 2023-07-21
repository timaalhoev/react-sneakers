import styles from "./Card.module.scss";

console.log(styles);
function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unlaked.svg" alt="unlaked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="кроссовок"></img>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <p>{props.price} руб.</p>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="Плюс"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
