export type THomeSlide = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image: string;
};

export const homeSlides: THomeSlide[] = [
  {
    title: "Laboratorio enologico dal 1971",
    description:
      "Da oltre 50 anni il laboratorio enologico all'avanguardia, affidabile e indipendente.",
    href: "/laboratorio/",
    linkLabel: "Scopri di più",
    image: "/images/home2.jpg",
  },
  {
    title: "Certificazioni",
    description: "Laboratorio certificato ACCREDIA con 63 prove accreditate.",
    href: "/certificazioni/",
    linkLabel: "Scopri di più",
    image: "/images/signature.png",
  },
  {
    title: "Chi Siamo",
    description: "Dal 1971 al servizio dell'enologia.",
    href: "/chi-siamo/",
    linkLabel: "Scopri la nostra storia",
    image: "/images/italo.jpg",
  },
  {
    title: "CEM Service",
    description:
      "Consulenza in servizi tecnici, legislativi, amministrativi e sportello CAA.",
    href: "/cem-service/",
    linkLabel: "Scopri di più",
    image: "/images/vineyard.jpg",
  },
];
