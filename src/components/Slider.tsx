import type { ComponentProps } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export function SliderHomepage() {
  var settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  } satisfies ComponentProps<typeof Slider>;
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div
            className="flex h-[700px] w-full flex-col items-center justify-end gap-4 bg-[url('images/home2.jpg')] bg-cover
          bg-center bg-no-repeat pb-10"
          >
            <div className="flex flex-col gap-4 bg-white bg-opacity-70 p-10">
              <h2 className="text-5xl uppercase">Laboratorio</h2>
              <p className="text-3xl">
                Da oltre 50 anni il laboratorio enologico all'avanguardia,
                affidabile e indipendente.
              </p>
              <div>
                <button className=" rounded-lg bg-red-500 px-4 py-2 text-2xl text-white">
                  Scopri di più
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex h-[700px] w-full items-center justify-center bg-red-500">
            <h1>Il Laboratorio</h1>
          </div>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
