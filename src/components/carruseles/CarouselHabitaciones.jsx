// Import Swiper core and required modules
import { Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./CarouselHabitaciones.css";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const habitaciones = [
  {
    descripcion:
      "Incluye: baño privado, telefonía, internet, TV con cable, aire acondicionado.",
    title: "Estandar",
    images: [
      { image1: "./images/seccionHabitaciones/estandar/estandar1.webp" },
      { image2: "./images/seccionHabitaciones/estandar/estandar2.webp" },
      { image3: "./images/seccionHabitaciones/estandar/estandar3.webp" },
    ],
  },
  {
    descripcion:
      "Incluye: baño privado, telefonía, internet, TV con cable, aire acondicionado, sala de recibidor.",
    title: "Mini suite",
    images: [
      { image1: "./images/seccionHabitaciones/minisuite/minisuite1.webp" },
      { image2: "./images/seccionHabitaciones/minisuite/minisuite2.webp" },
      { image3: "./images/seccionHabitaciones/minisuite/minisuite3.webp" },
    ],
  },
  {
    descripcion:
      "Incluye: baño privado, telefonía, internet, TV con cable, aire acondicionado, sala de recibidor (compartida).",
    title: "Duplex",
    images: [
      { image1: "./images/seccionHabitaciones/duplex/duplex1.webp" },
      { image2: "./images/seccionHabitaciones/duplex/duplex2.webp" },
      { image3: "./images/seccionHabitaciones/duplex/duplex3.webp" },
    ],
  },
];

// Componente para el contenido del slide

const SlideContentLg = ({ habitacion }) => {
  const [imgBig, setImgBig] = useState([
    habitacion.images[0].image1,
    habitacion.images[1].image2,
    habitacion.images[2].image3,
  ]);

  const handleReplaceImg = (cuadrante) => {
    const newImgBig = [...imgBig];
    if (cuadrante === 2) {
      [newImgBig[0], newImgBig[1]] = [newImgBig[1], newImgBig[0]];
    } else if (cuadrante === 3) {
      [newImgBig[0], newImgBig[2]] = [newImgBig[2], newImgBig[0]];
    }
    setImgBig(newImgBig);
  };

  return (
    <div className="-translate-y-8 w-[70%] h-full flex flex-col justify-center p-4 transition-all duration-300 ">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full max-h-[420px]  z-30">
        <div className="col-span-2 row-span-2 shadow-md rounded-md ">
          <motion.img
            src={imgBig[0]}
            alt="Imagen 1"
            className="rounded-md w-full h-full object-cover aspect-square"
            initial={{ opacity: 0, scale: 0.9 }} // Comienza más pequeño
            animate={{ opacity: 1, scale: 1 }} // Transición de escala
            transition={{
              duration: 0.6, // Aumenta la duración
              ease: "easeInOut", // Easing más dramático
            }}
          />
        </div>
        <div className="row-start-1 col-start-3 shadow-md rounded-md">
          <motion.img
            src={imgBig[1]}
            alt="Imagen 2"
            className="rounded-md w-full h-full object-cover aspect-square cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }} // Comienza más pequeño
            animate={{ opacity: 1, scale: 1 }} // Transición de escala
            transition={{
              duration: 0.6, // Aumenta la duración
              ease: "easeInOut", // Easing más dramático
            }}
            onClick={() => {
              handleReplaceImg(2);
            }}
          />
        </div>
        <div className="row-start-2 col-start-3 shadow-md rounded-md">
          <motion.img
            src={imgBig[2]}
            alt="Imagen 3"
            className="rounded-md w-full h-full object-cover aspect-square cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }} // Comienza más pequeño
            animate={{ opacity: 1, scale: 1 }} // Transición de escala
            transition={{
              duration: 0.6, // Aumenta la duración
              ease: "easeInOut", // Easing más dramático
            }}
            onClick={() => {
              handleReplaceImg(3);
            }}
          />
        </div>
      </div>
      <h3 className="font-medium text-lg text-start w-[80%] mt-4">
        {habitacion.descripcion}
      </h3>
    </div>
  );
};

const SlideContentMd = ({ habitacion }) => {
  const [imgBig, setImgBig] = useState([
    habitacion.images[0].image1,
    habitacion.images[1].image2,
    habitacion.images[2].image3,
  ]);

  const handleReplaceImg = (cuadrante) => {
    const newImgBig = [...imgBig];
    if (cuadrante === 2) {
      [newImgBig[0], newImgBig[1]] = [newImgBig[1], newImgBig[0]];
    } else if (cuadrante === 3) {
      [newImgBig[0], newImgBig[2]] = [newImgBig[2], newImgBig[0]];
    }
    setImgBig(newImgBig);
  };

  return (
    <div className="-translate-y-8 w-full h-full flex flex-col items-center justify-center p-4 transition-all duration-300">
      <h1 className="text-[1.3rem] font-normal text-orange-600 pt-1 ml-3">
        {habitacion.title}
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:w-[600px] md:w-[800px] lg:w-[1000px] max-h-[400px] ">
        <div className="col-span-2 shadow-lg shadow-gray-500 rounded-md ">
          <img
            src={imgBig[0]}
            alt="Imagen 1"
            className="rounded-md w-full h-full object-cover aspect-square "
          />
        </div>
        <div className="shadow-md rounded-md shadow-gray-500">
          <img
            src={imgBig[1]}
            alt="Imagen 2"
            className="rounded-md w-full h-full object-cover aspect-square "
            onClick={() => {
              handleReplaceImg(2);
            }}
          />
        </div>
        <div className="shadow-md rounded-md shadow-gray-500">
          <img
            src={imgBig[2]}
            alt="Imagen 3"
            className="rounded-md w-full h-full object-cover aspect-square "
            onClick={() => {
              handleReplaceImg(3); // Solo pasar el número del cuadrante
            }}
          />
        </div>
      </div>
      <h3 className="translate-y-4 ">{habitacion.descripcion}</h3>
    </div>
  );
};

export const Carousel = () => {
  const [windoWidth, setWindoWidth] = useState(0);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setWindoWidth(window.innerWidth);
  }, []);

  return (
    <>
      {windoWidth >= 1024 && (
        <div className="flex z-30">
          <div className="-translate-y-[4%] translate-x-[80%] 2xl:translate-x-[180%] flex flex-col justify-around w-28 h-80 transition-all">
            {habitaciones.map((habitacion, index) => (
              <h1
                key={index}
                // Se utiliza una clase condicional según el índice activo
                className={`text-[1.3rem] font-normal pt-1 ml-30 cursor-pointer w-60 h-20 ${
                  activeIndex === index ? "text-brick" : "text-orange-600" // o el color que desees para inactivo
                }`}
                onClick={() => swiperRef.current?.slideToLoop(index)} // Usamos slideToLoop para trabajar con loop
              >
                {habitacion.title}
              </h1>
            ))}
          </div>
        </div>
      )}

      <Swiper
        ref={swiperRef} // Asigna la referencia
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        speed={500}
        className="w-full h-full lg:max-w-[1400px] flex justify-center items-center lg:-translate-x-[2%]"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Guarda la instancia de Swiper
      >
        {habitaciones.map((habitacion, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex justify-center"
          >
            <div className=" max-w-96 h-[550px] sm:min-h-full sm:min-w-full left-1/2 -translate-x-1/2 lg:-translate-x-[51%] lg:z-10 relative flex justify-center items-center">
              {windoWidth >= 1024 ? (
                <SlideContentLg habitacion={habitacion} />
              ) : (
                <SlideContentMd habitacion={habitacion} />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
