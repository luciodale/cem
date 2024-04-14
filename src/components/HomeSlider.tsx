import type { ComponentProps } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { navbarHeight } from "../globals";
import { Link } from "./Link";

const slides = [
  {
    title: "Laboratorio",
    description:
      " Da oltre 50 anni il laboratorio enologico all'avanguardia, affidabile e indipendente.",
    link: "/laboratorio",
    image: "bg-[url('images/home2.jpg')]",
  },
  {
    title: "Chi Siamo",
    description: "Scopri di più su di noi e sulla nostra storia.",
    link: "/chi-siamo",
    image: "bg-[url('images/home.jpg)']",
  },
  {
    title: "Certificazioni",
    description:
      "Certificazioni di qualità e sicurezza alimentare per la tua azienda.",
    link: "/certificazioni",
    image: "bg-[url('images/home.jpg')]",
  },
  {
    title: "CEM Service",
    description:
      "Servizi di consulenza e assistenza tecnica per la tua azienda.",
    link: "/cem-service",
    image: "bg-[url('images/home3.jpg')]",
  },
];

function SliderEntry({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div>
      <div
        style={{
          height: `calc(100dvh - ${navbarHeight}px`,
        }}
        className="flex flex-col items-center justify-end gap-4 overflow-hidden bg-[url('images/home2.jpg')] bg-cover
          bg-center bg-no-repeat pb-10"
      >
        <div className="flex flex-col gap-4 bg-white bg-opacity-70 p-10">
          <h2 className="text-5xl uppercase">{title}</h2>
          <p className="text-3xl">{description}</p>
          <div className="pt-4">
            <Link label="Scopri di più" href={link} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SliderHomepage() {
  const settings = {
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  } satisfies ComponentProps<typeof Slider>;
  return (
    <div className="w-full pb-7">
      <Slider {...settings}>
        {slides.map((slide) => (
          <SliderEntry
            key={slide.title}
            title={slide.title}
            description={slide.description}
            link={slide.link}
          />
        ))}
      </Slider>
    </div>
  );
}
