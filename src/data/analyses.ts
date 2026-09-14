export type TAnalysisGroup = {
  name: string;
  subtitle?: string;
  analyses: string[];
};

export const analyses: TAnalysisGroup[] = [
  {
    name: "Analisi di processo",
    analyses: [
      "controlli preventivi e contestuali alle fermentazioni",
      "solforose, acidità ed acidi organici",
      "estratto, colore, antociani, polifenoli, catechine",
      "flavani, flavonoli (UV/Vis-HPLC)",
      "carbammato di etile",
      "azoto totale, azoto prontamente assimilabile",
    ],
  },
  {
    name: "Certificazioni ufficiali",
    analyses: [
      "esportazione",
      "commercializzazione, concorsi",
      "esami chimico-fisici di idoneità DOP e IGP",
      "sottoprodotti di vinificazione: fecce e vinacce (Agenzia delle Dogane)",
      "tabella nutrizionale",
    ],
  },
  {
    name: "Contaminanti",
    analyses: [
      "metalli pesanti",
      "metanolo",
      "pesticidi",
      "glicoli",
      "ocratossina",
      "ammine biogene",
      "ftalati",
      "bisfenolo A",
    ],
  },
  {
    name: "Prove enologiche e saggi",
    analyses: [
      "stabilità proteica, tartarica, del colore",
      "riboflavina",
      "dosaggi ausiliari stabilizzanti (bentonite, CMC, poliaspartato)",
      "indice di ossidabilità, pinking",
    ],
  },
  {
    name: "Composti volatili",
    analyses: [
      "anidride carbonica, ossigeno",
      "fenoli volatili",
      "acetaldeide",
    ],
  },
  {
    name: "Allergeni",
    analyses: ["caseina, albumina, istamina"],
  },
  {
    name: "Anioni e cationi",
    analyses: ["solfati, cloruri, fosfati, nitrati", "K, Ca, Mg, Na, Li"],
  },
  {
    name: "Olio di oliva",
    subtitle: "certificazioni ufficiali",
    analyses: [
      "esportazione",
      "commercializzazione",
      "analisi chimico-fisica di idoneità DOP e IGP",
    ],
  },
];

export const analysisLinks: Record<string, Record<string, string>> = {
  Contaminanti: { pesticidi: "/laboratorio/pesticidi/" },
};
