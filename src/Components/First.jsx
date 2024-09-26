import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function First() {
  return (
    <div className="first">
      <h1>
        <img src="src/IMG/2.webp" className="first_img" alt="logo" />
        <div className="first_pDIV">
          <img src="src/IMG/2.png" className="first_img_p" alt="logo" />
          <p className="first_p">
            ¡Bienvenido a mi canal de YouTube, TRT Indoor Cycling!
            <br /> Donde te ofrezco una variedad de recursos para ayudarte a
            transformar tu vida y mantener una rutina activa y saludable. Como
            un apoyo a tu objetivo de cambiar y cuidarte, te proporciono
            contenido educativo y práctico en diferentes áreas, incluyendo
            spinning, running, ciclismo, nutrición y más.
          </p>
        </div>
      </h1>

      <div className='swipe'>
      <Swiper
      
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
        <SwiperSlide ><img src="src/IMG/pub1.png" alt="logo" className='swipe-img'/></SwiperSlide>
        <SwiperSlide ><img src="src/IMG/pub2.png" alt="logo" className='swipe-img'/></SwiperSlide>
        <SwiperSlide ><img src="src/IMG/pub3.png" alt="logo" className='swipe-img'/></SwiperSlide>
        <SwiperSlide ><img src="src/IMG/pub4.png" alt="logo" className='swipe-img'/></SwiperSlide>
        <SwiperSlide ><img src="src/IMG/pub4.png" alt="logo" className='swipe-img'/></SwiperSlide>
        <SwiperSlide ><img src="src/IMG/pub4.png" alt="logo" className='swipe-img'/></SwiperSlide>
        <SwiperSlide ><img src="src/IMG/pub4.png" alt="logo" className='swipe-img'/></SwiperSlide>
      </Swiper>
      </div>

      
      
        <iframe className="first_video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JNZGYWYGHjQ?si=cnxpJJgUwgaqfNL6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      
    </div>
  );
}

export default First;
