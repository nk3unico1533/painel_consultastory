export const API_URL = "https://SEU_BACKEND.onrender.com";

export async function getConsultas() {
  const res = await fetch(`${API_URL}/consultas`);
  return await res.json();
}
