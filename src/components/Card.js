function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unlaked.svg" alt="unlaked" />
      </div>
      <img
        width={133}
        height={112}
        src="/img/sneakers/image1.jpg"
        alt="кроссовок"
      ></img>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <p>12 999 руб.</p>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Плюс"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;