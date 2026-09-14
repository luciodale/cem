import home2 from "../assets/images/home2.jpg";
import italo from "../assets/images/italo.jpg";
import signature from "../assets/images/signature.png";
import vineyard from "../assets/images/vineyard.jpg";

export type THomeSlide = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image: ImageMetadata;
};

export const homeSlides: THomeSlide[] = [
  {
    title: "Laboratorio enologico dal 1971",
    description:
      "Da oltre 50 anni il laboratorio enologico all'avanguardia, affidabile e indipendente.",
    href: "/laboratorio/",
    linkLabel: "Scopri di più",
    image: home2,
  },
  {
    title: "Certificazioni",
    description: "Laboratorio certificato ACCREDIA con 63 prove accreditate.",
    href: "/certificazioni/",
    linkLabel: "Scopri di più",
    image: signature,
  },
  {
    title: "Chi Siamo",
    description: "Dal 1971 al servizio dell'enologia.",
    href: "/chi-siamo/",
    linkLabel: "Scopri la nostra storia",
    image: italo,
  },
  {
    title: "CEM Service",
    description:
      "Consulenza in servizi tecnici, legislativi, amministrativi e sportello CAA.",
    href: "/cem-service/",
    linkLabel: "Scopri di più",
    image: vineyard,
  },
];
