import {
  accrediaLink,
  masafCertificationLink,
  masafOrganicLabsLink,
} from "../config/externalLinks";

export type TCertification = {
  title: string;
  description: string;
  link: string;
  linkCaption: string;
};

export const certifications: TCertification[] = [
  {
    title: "Accreditamento ACCREDIA n° 302",
    description:
      "(Ente Italiano Per L’accreditamento Dei Laboratori) per le analisi elencate nel sito del ACCREDIA",
    link: accrediaLink,
    linkCaption: "Visita Pagina",
  },
  {
    title: "Certificazione Vitivinicola",
    description:
      "Autorizzazione del Ministero dell'Agricoltura, della Sovranità Alimentare e delle Foreste al Rilascio di Certificati di analisi nel settore vitivinicolo aventi valore ufficiali anche ai fini delle Esportazioni (D.M. 03/06/2022, G.U. 139 del 16/06/2022",
    link: masafCertificationLink,
    linkCaption: "Visita Pagina",
  },
  {
    title: "Certificazione Oleicola",
    description:
      "Autorizzazione del Ministero dell'Agricoltura, della Sovranità Alimentare e delle Foreste al rilascio dei certificati di analisi nel settore oleicolo aventi valore ufficiale (D.M. 03/06/2022, G.U. 157 del 07/07/2022",
    link: masafCertificationLink,
    linkCaption: "Visita Pagina",
  },
  {
    title: "Agricoltura Biologica: Lista laboratori abilitati per analisi BIO",
    description:
      "Inserimento nell’elenco del Ministero dell'Agricoltura, della Sovranità Alimentare e delle Foreste dei Laboratori designati all'analisi dei prodotti biologici",
    link: masafOrganicLabsLink,
    linkCaption: "Visita Pagina",
  },
  {
    title: "Autocontrollo delle industrie alimentari",
    description:
      "Inserimento nell’elenco regionale dei laboratori di analisi ai fini dell’Autocontrollo (HACCP) delle industrie alimentari DG/11/57 del 12 marzo 2007.",
    link: "/HACCP_CEM.pdf",
    linkCaption: "Apri Documento",
  },
  {
    title: "Accreditamento UNI CEI EN ISO/IEC 17025:2018",
    description: "Stampa certificato ACCREDIA",
    link: "/certificato-accredia.pdf",
    linkCaption: "Apri Documento",
  },
  {
    title:
      "Registrazione nella lista del Ministero della salute giapponese per l’analisi di alimenti esportati in Giappone",
    description:
      "Registrazione presso il Ministero della Salute giapponese per l’abilitazione a svolgere analisi di alimenti destinati all’esportazione in Giappone. Numero di iscrizione IT10133",
    link: "/registrazione-mhlw-giappone.pdf",
    linkCaption: "Apri Documento",
  },
  {
    title:
      "Registrazione nel registro brasiliano di laboratori esteri per l’analisi di vini, bevande alcoliche, olio di oliva e prodotti derivati dall’uva e dal vino",
    description:
      "Registrazione presso il SISCOLE (Sistema de Cadastro de Organismos e Laboratórios Estrangeiros) per l’abilitazione a svolgere analisi di prodotti destinati all’esportazione in Brasile",
    link: "/registrazione-siscole-brasile.pdf",
    linkCaption: "Apri Documento",
  },
];
