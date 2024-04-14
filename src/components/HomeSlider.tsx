import classnames from "classnames";
import type { ComponentProps } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { navbarHeight } from "../globals";
import { Link } from "./Link";

type TSlide = {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  image: string;
  customStyle: React.CSSProperties;
};

const slides = [
  {
    title: "Laboratorio",
    description:
      " Da oltre 50 anni il laboratorio enologico all'avanguardia, affidabile e indipendente.",
    link: "/laboratorio",
    linkLabel: "Scopri di più",
    image: "bg-[url('/images/home2.jpg')]",
    customStyle: { backgroundPosition: "center" },
  },
  {
    title: "Certificazioni",
    description: "Laboratorio certificato ACCREDIA con 63 prove accreditate.",
    link: "/certificazioni",
    linkLabel: "Scopri di più",
    image: "bg-[url('images/signature.png')]",
    customStyle: { backgroundPosition: "center" },
  },
  {
    title: "Chi Siamo",
    description: "Dal 1971 al servizio dell'enologia.",
    link: "/chi-siamo",
    linkLabel: "Scopri la nostra storia",
    image: "bg-[url('/images/italo.jpg')]",
    customStyle: { backgroundPosition: "center" },
  },
  {
    title: "CEM Service",
    description:
      "Cosulenza in servizi tecnici, legislativi, amministrativi e sportello CAA.",
    link: "/cem-service",
    linkLabel: "Scopri di più",
    image: "bg-[url('images/vineyard.jpg')]",
    customStyle: { backgroundPosition: "center" },
  },
] satisfies TSlide[];

function SliderEntry({
  title,
  description,
  link,
  image,
  customStyle,
  linkLabel,
}: TSlide) {
  console.log(customStyle, "yoo");
  return (
    <div>
      <div
        style={{
          height: `calc(100dvh - ${navbarHeight}px`,
          ...customStyle,
        }}
        className={classnames(
          image,
          "flex flex-col items-center justify-end gap-4 overflow-hidden bg-cover bg-no-repeat pb-10",
        )}
      >
        <div className="flex flex-col gap-4 bg-white bg-opacity-70 p-10">
          <h2 className="text-center text-2xl uppercase sm:text-left sm:text-5xl">
            {title}
          </h2>
          <p className="text-center text-xl sm:text-left sm:text-3xl">
            {description}
          </p>
          <div className="mx-auto pt-4 sm:mx-0">
            <Link label={linkLabel} href={link} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SliderHomepage() {
  const settings = {
    infinite: true,
    autoplay: false,
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
            image={slide.image}
            customStyle={slide.customStyle}
            linkLabel={slide.linkLabel}
          />
        ))}
      </Slider>
    </div>
  );
}
