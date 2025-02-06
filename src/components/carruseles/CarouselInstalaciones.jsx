// Import Swiper core and required modules
import { Pagination, EffectCreative, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./CarouselInstalaciones.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const instalaciones = [
  {
    title: "Alberca",
    image: "./images/seccionInstalaciones/alberca.webp",
  },
  {
    title: "Biblioteca",
    image: "./images/seccionInstalaciones/biblioteca.webp",
  },
  {
    title: "Capilla",
    image: "./images/seccionInstalaciones/capilla.webp",
  },
  {
    title: "Restaurante",
    image: "./images/seccionInstalaciones/restaurante.webp",
  },
  {
    title: "Gimnasio",
    image: "./images/seccionInstalaciones/gimnasio.webp",
  },
  {
    title: "Jardín",
    image: "./images/seccionInstalaciones/jardin.webp",
  },
  {
    title: "Spa",
    image: "./images/seccionInstalaciones/spa.webp",
  },
];

const SlideContentMd = ({ instalacion }) => {
  return (
    <div className="w-full h-full relative rounded-lg flex justify-center shadow-md  shadow-gray-500">
      <img
        src={instalacion.image}
        alt="casa otoño"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg shadow-md  shadow-gray-500"
      />
      <div className=" flex items-center justify-center bg-brick opacity-90 rounded-lg z-10 w-36 h-10 mt-10 ">
        <h1 className="text-white text-[1.6rem] mx-4 my-1 opacity-100">
          {instalacion.title}
        </h1>
      </div>
    </div>
  );
};

export const Carousel = () => {
  const [windoWidth, setWindoWidth] = useState(0);
  const [imgBig, setImgBig] = useState([
    instalaciones[0],
    instalaciones[1],
    instalaciones[2],
    instalaciones[3],
    instalaciones[4],
    instalaciones[5],
    instalaciones[6],
  ]);

  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    setWindoWidth(window.innerWidth);
  }, [windoWidth]);

  const handleReplaceImg = (cuadrante) => {
    const newImgBig = [...imgBig];
    if (cuadrante === 2) {
      [newImgBig[0], newImgBig[1]] = [newImgBig[1], newImgBig[0]];
    } else if (cuadrante === 3) {
      [newImgBig[0], newImgBig[2]] = [newImgBig[2], newImgBig[0]];
    } else if (cuadrante === 5) {
      [newImgBig[3], newImgBig[4]] = [newImgBig[4], newImgBig[3]];
    } else if (cuadrante === 6) {
      [newImgBig[3], newImgBig[5]] = [newImgBig[5], newImgBig[3]];
    } else if (cuadrante === 7) {
      [newImgBig[3], newImgBig[6]] = [newImgBig[6], newImgBig[3]];
    }
    setImgBig(newImgBig);
  };

  return (
    <>
      {" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper rounded-lg"
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          1024: {
            loop: false,
          },

          320: {
            loop: true,
          },
        }}
      >
        {windoWidth >= 1024 ? (
          <>
            <SwiperSlide>
              <div className="font-spartan min-h-full min-w-full left-1/2 -translate-x-[51%]  relative flex justify-center items-center  rounded-lg ">
                <div
                  className="grid grid-cols-3 grid-rows-2 gap-4 max-w-[1200px] max-h-[500px] "
                  onMouseEnter={() => swiperInstance?.autoplay.stop()}
                  onMouseLeave={() => swiperInstance?.autoplay.start()}
                >
                  <div className="relative row-start-1 col-start-1 flex justify-center shadow-lg rounded-md shadow-gray-500">
                    <div className=" absolute  flex items-center justify-center bg-brick rounded-2xl z-10 w-32 h-8 mt-2 ">
                      <h1 className="text-white text-[1.2rem] mx-4 ">
                        {imgBig[1].title}
                      </h1>
                    </div>
                    <img
                      src={imgBig[1].image}
                      alt="Imagen 2"
                      className="rounded-md w-full h-full object-cover aspect-square "
                      onClick={() => {
                        handleReplaceImg(2);
                      }}
                    />
                  </div>
                  <div className="relative row-start-2 col-start-1 flex justify-center shadow-md rounded-md shadow-gray-500">
                    <div className=" absolute  flex items-center justify-center bg-brick rounded-2xl z-10 w-32 h-8 mt-2 ">
                      <h1 className="text-white text-[1.2rem] mx-4 ">
                        {imgBig[2].title}
                      </h1>
                    </div>
                    <img
                      src={imgBig[2].image}
                      alt="Imagen 2"
                      className="rounded-md w-full h-full object-cover aspect-square "
                      onClick={() => {
                        handleReplaceImg(3);
                      }}
                    />
                  </div>
                  <div className="relative col-span-2 row-span-2 flex justify-center shadow-md rounded-md shadow-gray-500">
                    <div className=" absolute  flex items-center justify-center bg-brick  rounded-2xl z-10 w-56 h-12 mt-4 ">
                      <h1 className="text-white text-[2rem] mx-4">
                        {imgBig[0].title}
                      </h1>
                    </div>
                    <img
                      src={imgBig[0].image}
                      alt="Imagen 1"
                      className="rounded-md w-full h-full object-cover aspect-square "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="font-spartan min-h-full min-w-full left-1/2 -translate-x-[51%]  relative flex justify-center items-center  rounded-lg ">
                <div
                  className="grid grid-cols-3 grid-rows-3 gap-4  max-w-[1200px] max-h-[500px] "
                  onMouseEnter={() => swiperInstance?.autoplay.stop()}
                  onMouseLeave={() => swiperInstance?.autoplay.start()}
                >
                  <div className="relative col-span-2 row-span-3 flex justify-center shadow-lg rounded-md shadow-gray-500">
                    <div className=" absolute  flex items-center justify-center bg-brick rounded-2xl z-10 w-56 h-12 mt-4 ">
                      <h1 className="text-white text-[2rem] mx-4 ">
                        {imgBig[3].title}
                      </h1>
                    </div>
                    <img
                      src={imgBig[3].image}
                      alt="Imagen 1"
                      className="rounded-md w-full h-full object-cover aspect-square "
                    />
                  </div>
                  <div className="relative flex justify-center shadow-md rounded-md shadow-gray-500">
                    <div className=" absolute  flex items-center justify-center bg-brick rounded-2xl z-10 w-32 h-8 mt-2 ">
                      <h1 className="text-white text-[1.2rem] mx-4 ">
                        {imgBig[4].title}
                      </h1>
                    </div>
                    <img
                      src={imgBig[4].image}
                      alt="Imagen 2"
                      className="rounded-md w-full h-full object-cover aspect-square "
                      onClick={() => {
                        handleReplaceImg(5);
                      }}
                    />
                  </div>
                  <div className="relative flex justify-center shadow-md rounded-md shadow-gray-500">
                    <div className=" absolute  flex items-center justify-center bg-brick rounded-2xl z-10 w-32 h-8 mt-2 ">
                      <h1 className="text-white text-[1.2rem] mx-4 ">
                        {imgBig[5].title}
                      </h1>
                    </div>
                    <img
                      src={imgBig[5].image}
                      alt="Imagen 2"
                      className="rounded-md w-full h-full object-cover aspect-square "
                      onClick={() => {
                        handleReplaceImg(6);
                      }}
                    />
                  </div>
                  <div className="relative flex justify-center shadow-md rounded-md shadow-gray-500">
                    <div className=" absolute  flex items-center justify-center bg-brick rounded-2xl z-10 w-32 h-8 mt-2 ">
                      <h1 className="text-white text-[1.2rem] mx-4 ">
                        {imgBig[6].title}
                      </h1>
                    </div>
                    <img
                      src={imgBig[6].image}
                      alt="Imagen 2"
                      className="rounded-md w-full h-full object-cover aspect-square "
                      onClick={() => {
                        handleReplaceImg(7);
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ) : (
          instalaciones.map((instalacion) => (
            <SwiperSlide key={instalacion.title}>
              <div className="font-spartan max-w-96 h-[535px] sm:min-h-full sm:min-w-full left-1/2 -translate-x-1/2  relative flex justify-center items-center  rounded-lg ">
                <SlideContentMd instalacion={instalacion} />
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};
