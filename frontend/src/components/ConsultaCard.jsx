import { useState } from "react";

export default function ConsultaCard({ titulo, rota }) {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const consultar = async () => {
    setLoading(true);
    setResultado(null);

    try {
      const res = await fetch(`https://SEU-BACKEND.onrender.com/${rota}?q=${input}`);
      const data = await res.json();
      setResultado(data);
    } catch (err) {
      setResultado({ erro: "Falha na consulta" });
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-900 border border-gray-700 p-5 rounded-2xl shadow-lg w-[90%] mx-auto h-full flex flex-col justify-between">
      
      {/* Título */}
      <h2 className="text-3xl font-bold mb-4 text-center">{titulo}</h2>

      {/* Input */}
      <input
        type="text"
        placeholder={`Digite o ${titulo}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-3 rounded-xl bg-gray-800 border border-gray-600 outline-none text-white"
      />

      {/* Botão */}
      <button
        onClick={consultar}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 w-full py-3 rounded-xl font-semibold"
      >
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {/* Resultado */}
      <div className="mt-4 p-3 bg-gray-800 rounded-xl h-40 overflow-auto">
        {resultado ? (
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(resultado, null, 2)}
          </pre>
        ) : (
          <p className="text-gray-400 text-center">O resultado aparece aqui…</p>
        )}
      </div>
    </div>
  );
}