import styles from "./Card.module.scss";
import React from "react";

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unlaked.svg" alt="unlaked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="кроссовок"></img>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <p>{price} руб.</p>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
          alt="Плюс"
        ></img>
      </div>
    </div>
  );
}

export default Card;
