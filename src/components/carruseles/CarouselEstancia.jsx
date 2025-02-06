// Import Swiper core and required modules
import { Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./CarouselEstancia.css";
import { useEffect, useState } from "react";

const estancias = [
  {
    descripcion:
      "Tú decides los días de estancia, sin dejar de disfrutar los servicios.",
    title: "Temporal",

    servicios: [
      "Habitaciones con baño privado y televisión con cable.",
      "Servicio de lavandería.",
      "Servicio de limpieza.",
      "Cámaras de vigilancia las 24 horas, con acceso de los familiares a través de una app.",
      "Enfermería 24 horas.",
      "Alimentación.",
      "Valoración médica.",
      "Terapias físicas, cognitiva y ocupacional.",
    ],
    image: "./images/seccionEstancia/estancia_temporal.webp",
  },
  {
    descripcion:
      "Estancia de 4 a 12 horas con horario abierto de entrada y salida.",
    title: "Casa de Día",

    servicios: [
      "Servicios de vigilancia y de enfermería las 24 horas",
      "Servicios de vigilancia las 24 horas, con acceso de los familiares a través de una app",
      "Alimentación",
      "Terapias físicas, cognitivas y ocupacionales.",
    ],
    image: "./images/seccionEstancia/estancia_casadia.webp",
  },
  {
    descripcion:
      "Descubre la calidad de vida plena para adultos mayores con cuidado integral.",
    title: "Permanente",

    servicios: [
      "Habitaciones con baño privado y televisión con cable.",
      "Servicio de lavandería.",
      "Servicio de limpieza.",
      "Cámaras de vigilancia las 24 horas, con acceso de los familiares a través de una app.",
      "Enfermería 24 horas.",
      "Alimentación.",
      "Valoración médica.",
      "Terapias físicas, cognitiva y ocupacional.",
      "Sábado de buffet y desayuno familiar.",
    ],
    image: "./images/seccionEstancia/estancia_permanente.webp",
  },
];

// Componente para el contenido del slide
const SlideContentMd = ({ estancia, showData, setShowData }) => {
  if (showData) {
    return (
      <div className="w-full h-full relative z-10 p-4 bg-brick bg-opacity-95 text-white rounded-md transition-all duration-300">
        <h1 className="text-[2rem] font-normal">Servicios que incluye:</h1>
        <ul>
          {estancia.servicios.map((servicio, i) => (
            <li className="font-light text-[20px] ml-4" key={i}>
              - {servicio}
            </li>
          ))}
        </ul>
        <button
          className="text-[1rem] font-light border-white border rounded-lg px-6 mt-5 text-center"
          onClick={() => setShowData(false)}
        >
          Mostrar menos
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative z-10 p-4 bg-brick bg-opacity-70 text-white rounded-md transition-all duration-300">
      <h1 className="text-[1.8rem] font-normal leading-9">{estancia.title}</h1>
      <button
        className="text-[1rem] font-light border-white border rounded-lg px-6 mt-5 text-center"
        onClick={() => setShowData(true)}
      >
        Saber más
      </button>
    </div>
  );
};

const SlideContentLg = ({ estancia }) => {
  const [hover, setHover] = useState(false);

  if (hover) {
    return (
      <div
        onMouseLeave={() => setHover(false)}
        className=" w-full h-full relative z-10 p-4 bg-brick bg-opacity-95 text-white rounded-md transition-all duration-300"
      >
        <h1 className="text-[1.8rem] xl:text-[2rem]  font-normal pt-2 ml-3 text-center">
          Servicios que incluye:
        </h1>
        <ul className="translate-y-8">
          {estancia.servicios.map((servicio, i) => (
            <li className="font-light text-[20px] ml-4" key={i}>
              - {servicio}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      className="flex flex-col justify-center items-center w-full h-full relative z-10 p-4 bg-brick bg-opacity-70 text-white rounded-md transition-all duration-300 "
    >
      <h1 className="text-[1.8rem] xl:text-[2rem]  font-normal leading-9">
        {estancia.title}
      </h1>
      <h2 className=" translate-y-20 font-light text-center text-[26px] max-w-72">
        {estancia.descripcion}
      </h2>
    </div>
  );
};

export const Carousel = () => {
  const [showData, setShowData] = useState(false);
  const [windoWidth, setWindoWidth] = useState(0);

  useEffect(() => {
    setWindoWidth(window.innerWidth);
  }, [windoWidth]);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      speed={500}
      allowSlideNext={!showData}
      allowSlidePrev={!showData}
      className="w-full h-full flex justify-center items-center  mx-4"
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: false,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {estancias.map((estancia, i) => (
        <SwiperSlide key={i} className="flex justify-center pb-12 ">
          <div className="font-spartan max-w-80 h-[540px] sm:max-w-96 sm:h-[550px]  left-1/2 -translate-x-1/2 relative flex justify-center items-center  ">
            <img
              src={estancia.image}
              alt={estancia.title}
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md "
            />
            {windoWidth >= 1024 ? (
              <SlideContentLg estancia={estancia} />
            ) : (
              <SlideContentMd
                estancia={estancia}
                showData={showData}
                setShowData={setShowData}
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
