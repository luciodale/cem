import classNames from "classnames";
import { useState, type ReactNode } from "react";
import { Bulb, Leaf, Whiteboard } from "./Icons";

type TBannerContent = {
  title: string;
  subtitle: string;
  icon: ReactNode;
};

type TBanner = { elements: [TBannerContent, TBannerContent, TBannerContent] };

const elements = [
  {
    id: "progettazione",
    title: "Progettazione",
  },
  {
    id: "consulenza",
    title: "Consulenza",
  },
  {
    id: "caa",
    title: "CAA – Centro Assistenza Agricol",
  },
] as const;

function ProgettazioneContent() {
  return (
    <div className="flex flex-col gap-10 p-20 text-xl">
      <div>
        La divisione “Progetti” si occupa di pianificare e coordinare la
        realizzazione di impianti produttivi per aziende vitivinicole, gestendo
        anche le pratiche e i bandi di finanziamento per l’accesso ai fondi
        europei, che permettono di sostenere gli investimenti e sono legati, in
        particolare:
      </div>
      <ul className="flex list-inside list-disc flex-col gap-4">
        <li className="ml-6 -indent-6">
          all’OCM Vino (Organizzazione Comune del Mercato Vitivinicolo), ovvero
          la regolamentazione unica dell’Unione Europea che disciplina i
          finanziamenti al comparto vitivinicolo
        </li>
        <li className="ml-6 -indent-6">
          al PSR (Programma di Sviluppo Rurale), un altro meccanismo di
          finanziamento utilizzato dagli Stati membri dell’UE
        </li>
      </ul>
      <div>
        Con più di 120 progetti realizzati per oltre 170 milioni di euro
        investiti, il lavoro di progettazione e di interfaccia con gli Enti
        Territoriali svolto da Cem Service contribuisce in maniera decisiva allo
        sviluppo del settore vitivinicolo.
      </div>
      <ul className="flex list-inside list-disc flex-col gap-4">
        <li className="ml-6 -indent-6">Studio di fattibilità</li>
        <li className="ml-6 -indent-6">Business-Plan</li>
        <li className="ml-6 -indent-6">Progettazione logistica</li>
        <li className="ml-6 -indent-6">Progettazione impianti tecnologici</li>
        <li className="ml-6 -indent-6">Progettazione architettonica</li>
        <li className="ml-6 -indent-6">
          Studio, presentazione e collaudo di Pratiche di Finanziamento
        </li>
      </ul>
    </div>
  );
}

function ConsulenzaContent() {
  return (
    <div className="flex flex-col gap-10 p-20 text-xl">
      <div>
        Attraverso la sua attività di consulenza in servizi scientifici,
        tecnici, legislativi e amministrativi, Cem Service fornisce alle aziende
        vitivinicole ulteriore supporto, facendo valere le proprie competenze e
        la propria esperienza nel settore del vino.
      </div>
      <ul className="flex list-inside list-disc flex-col gap-4">
        <li className="ml-6 -indent-6">
          Consulenza per identificare lo stile del vino del territorio
        </li>
        <li className="ml-6 -indent-6">
          Consulenza nelle scelte colturali e vendemmiali
        </li>
        <li className="ml-6 -indent-6">
          Consulenza nella tecnologia di vinificazione ed affinamento che
          assicura il massimo rispetto della qualità e personalità dei vini
        </li>
        <li className="ml-6 -indent-6">
          Consulenza legale in materia vitivinicola
        </li>
        <li className="ml-6 -indent-6">
          Consulenza amministrativa nella gestione specifica delle aziende
          vitivinicole
        </li>
        <li className="ml-6 -indent-6">
          Consulenza nell’avviamento di nuove iniziative produttive nel mondo
          del vino
        </li>
      </ul>
    </div>
  );
}

function CAAContent() {
  return (
    <div className="flex flex-col gap-10 p-20 text-xl">
      <div>
        In qualità di Centro Assistenza Agricola C.A.N.A.P.A. la società Cem
        Service è autorizzata da AGEA (Agenzia per le Erogazioni in Agricoltura)
        a gestire i fascicoli aziendali e le domande per l’accesso a specifiche
        misure di sostegno comunitario, in particolare ai fondi relativi all’OCM
        Vino (Organizzazione Comune del Mercato Vitivinicolo) e al PSR
        (Programma di Sviluppo Rurale).
      </div>
      <ul className="flex list-inside list-disc flex-col gap-4">
        <li className="ml-6 -indent-6">
          Gestione e validazione dei fascicoli aziendali delle imprese agricole
          sul portale SIAN (Sistema Informativo Agricolo Nazionale)
        </li>
        <li className="ml-6 -indent-6">
          Trasmissioni telematiche: dichiarazioni di giacenza, dichiarazioni di
          raccolta uve e produzione vitivinicola, tenuta dei registri
          vitivinicoli
        </li>
        <li className="ml-6 -indent-6">Adempimenti nel settore vitivinicolo</li>
        <li className="ml-6 -indent-6">
          OCM Vino: Misura Investimenti, ristrutturazione vigneti e
          riconversione aziende agricole
        </li>
        <li className="ml-6 -indent-6">
          Sviluppo Rurale: agricoltura biologica, ampliamenti, primo
          insediamento
        </li>
        <li className="ml-6 -indent-6">
          PAC (Politica Agricola Comune) e Regime di pagamento unico: Olio,
          Latte, Seminativi, Zootecnia, Regime Semplificato e Contributi
          Assicurativi
        </li>
        <li className="ml-6 -indent-6">
          UMA (Utenti Motori Agricoli), Contratti d’affitto
        </li>
        <li className="ml-6 -indent-6">Servizi catastali</li>
      </ul>
    </div>
  );
}
export function BannerCemService() {
  const [tab, setTab] = useState<"progettazione" | "consulenza" | "caa">(
    "progettazione",
  );

  const tabContent = {
    progettazione: <ProgettazioneContent />,
    consulenza: <ConsulenzaContent />,
    caa: <CAAContent />,
  };

  return (
    <>
      <div className="flex cursor-pointer bg-slate-500 text-white">
        {elements.map(({ id, title }) => {
          const activeTab = tab === id;
          const iconStyle = classNames(
            activeTab ? "stroke-yellow-500" : "stroke-white",
            "w-20 h-20",
          );
          return (
            <div
              key={id}
              onClick={() => setTab(id)}
              className={classNames(
                "flex w-1/3 flex-col gap-6 px-20 py-10",
                tab === id && "bg-blue-200 text-red-500",
              )}
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 uppercase">
                <div className="flex-shrink-0">
                  {id === "progettazione" ? (
                    <Whiteboard className={iconStyle} />
                  ) : id === "consulenza" ? (
                    <Bulb className={iconStyle} />
                  ) : id === "caa" ? (
                    <Leaf className={iconStyle} />
                  ) : null}
                </div>
                <div className="text-center text-xl">{title}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="min-h-[100dvh]">{tabContent[tab]}</div>
    </>
  );
}
