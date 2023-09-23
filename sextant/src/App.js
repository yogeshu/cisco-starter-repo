import "./App.css";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Webso from "./components/Webso";

function App() {
  const [ip, setIp] = useState("");
  const [universalIp, setUniversalIp] = useState("");

  const fetchIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUniversalIp = async () => {
    try {
      const response = await fetch("https://api64.ipify.org?format=json	");
      const data = await response.json();
      setUniversalIp(data.ip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIp();
    fetchUniversalIp();
  }, []);

  return (
    <>
      <Banner />

      <div className="cards-container">
        <Card ip={ip} universalIp={universalIp} />
      </div>
      <Webso />
    </>
  );
}

export default App;
