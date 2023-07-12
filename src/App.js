import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", prace: "12999" },
  { name: "Мужские Кроссовки Nike Air Max 270", prace: "15777" },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title="Мужские Кроссовки Nike Blazer Mid Suede"
              price={12999}
              imageUrl="/img/sneakers/1.jpg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
