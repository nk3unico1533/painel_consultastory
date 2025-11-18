import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Stories({ consultas }) {
  if (!consultas || consultas.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="stories-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {consultas.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="story">
              <img src={c.imagem_url} alt={c.titulo} />
              <h3>{c.titulo}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
