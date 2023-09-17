import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Banner />

      <div className="cards-container">
        <Card />
      </div>
    </>
  );
}

export default App;
