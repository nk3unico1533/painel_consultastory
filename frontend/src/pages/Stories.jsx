import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ConsultaCard from "../components/ConsultaCard";

export default function Stories() {
  const stories = [
    { titulo: "CPF", rota: "consulta/cpf" },
    { titulo: "CEP", rota: "consulta/cep" },
    { titulo: "CNPJ", rota: "consulta/cnpj" },
    { titulo: "Nome", rota: "consulta/nome" },
    { titulo: "Telefone", rota: "consulta/telefone" },
    { titulo: "Placa", rota: "consulta/placa" },
    { titulo: "Email", rota: "consulta/email" },
  ];

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="h-full"
      >
        {stories.map((s, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center h-full"
          >
            <ConsultaCard titulo={s.titulo} rota={s.rota} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}