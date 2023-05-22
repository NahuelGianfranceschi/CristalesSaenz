import FabricaInterior from "./images/FabricaInterior.jpeg";
import FabricaInteriorVidrios from "./images/FabricaInteriorVidrios.jpeg";
import MaquinaDVH from "./images/MaquinaDVH.jpeg";
//Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carrusel.css"

const Trabajos = () => {
    return (
        <>
            <main>
                <div className="carrouselSwiper">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        className={"mySwipper"}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        grabCursor="true"
                        slidesPerView={1}
                        style={{"--swiper-pagination-color": "#fff",}}
                    >
                        <SwiperSlide><img src={FabricaInterior} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={FabricaInteriorVidrios} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={MaquinaDVH} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </main>
        </>
    );
}

export default Trabajos; 