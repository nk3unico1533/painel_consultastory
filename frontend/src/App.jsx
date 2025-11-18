import { useEffect, useState } from "react";
import Stories from "./components/Stories";
import { getConsultas } from "./api";

export default function App() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getConsultas();
      setConsultas(data);
    }
    load();
  }, []);

  return (
    <div className="app">
      <h1>Painel de Consultas</h1>
      <Stories consultas={consultas} />
    </div>
  );
}
