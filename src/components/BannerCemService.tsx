import classNames from "classnames";
import { useState } from "react";
import { Bulb, Leaf, Whiteboard } from "./Icons";
import { Link } from "./Link";

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
		title: "CAA – Centro Assistenza Agricola",
	},
] as const;

function ProgettazioneContent() {
	return (
		<div className="flex gap-10 xl:gap-28 p-4 pt-10 md:p-20">
			<div className="hidden lg:block lg:w-1/2 flex-shrink-0 lg:bg-[url('/images/portrait-vineyard.jpeg')] bg-cover bg-bottom" />
			<div className="relative">
				<img
					className="absolute lg:hidden top-0 w-full object-cover h-full"
					src="/images/portrait-vineyard.jpeg"
					alt=""
				/>
				<div className="absolute inset-6 top-0 left-0 backdrop-blur-sm lg:backdrop-blur-none h-full w-full bg-black/80 lg:bg-transparent" />
				<div className="flex z-10 p-10 text-white lg:text-slate-600 relative flex-col gap-10 xl:px-0 xl:py-20 text-lg lg:text-xl">
					<div>
						La divisione “Progetti” si occupa di pianificare e coordinare la
						realizzazione di impianti produttivi per aziende vitivinicole,
						gestendo anche le pratiche e i bandi di finanziamento per l’accesso
						ai fondi europei, che permettono di sostenere gli investimenti e
						sono legati, in particolare:
					</div>
					<ul className="flex list-inside list-disc flex-col gap-4">
						<li className="ml-6 -indent-6">
							all’OCM Vino (Organizzazione Comune del Mercato Vitivinicolo),
							ovvero la regolamentazione unica dell’Unione Europea che
							disciplina i finanziamenti al comparto vitivinicolo
						</li>
						<li className="ml-6 -indent-6">
							al PSR (Programma di Sviluppo Rurale), un altro meccanismo di
							finanziamento utilizzato dagli Stati membri dell’UE
						</li>
					</ul>
					<div>
						Con più di 120 progetti realizzati per oltre 200 milioni di euro
						investiti, il lavoro di progettazione e di interfaccia con gli Enti
						Territoriali svolto da Cem Service contribuisce in maniera decisiva
						allo sviluppo del settore vitivinicolo.
					</div>
					<ul className="flex list-inside list-disc flex-col gap-4">
						<li className="ml-6 -indent-6">Studio di fattibilità</li>
						<li className="ml-6 -indent-6">Business-Plan</li>
						<li className="ml-6 -indent-6">Progettazione logistica</li>
						<li className="ml-6 -indent-6">
							Progettazione impianti tecnologici
						</li>
						<li className="ml-6 -indent-6">Progettazione architettonica</li>
						<li className="ml-6 -indent-6">
							Studio, presentazione e collaudo di Pratiche di Finanziamento
						</li>
					</ul>
					<div className="pt-6">
						<Link href="#service" label="Torna alla selezione" />
					</div>
				</div>
			</div>
		</div>
	);
}

function ConsulenzaContent() {
	return (
		<div className="flex gap-10 xl:gap-28 p-4 pt-10 md:p-20">
			<div className="relative">
				<img
					className="absolute lg:hidden top-0 w-full object-cover h-full"
					src="/images/portrait-help.jpeg"
					alt=""
				/>
				<div className="absolute inset-6 top-0 left-0 backdrop-blur-sm lg:backdrop-blur-none h-full w-full bg-black/80 lg:bg-transparent" />
				<div className="flex z-10 p-10 text-white lg:text-slate-600 relative flex-col gap-10 xl:px-0 xl:py-20 text-lg lg:text-xl">
					<div>
						Attraverso la sua attività di consulenza in servizi scientifici,
						tecnici, legislativi e amministrativi, Cem Service fornisce alle
						aziende vitivinicole ulteriore supporto, facendo valere le proprie
						competenze e la propria esperienza nel settore del vino.
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
							Consulenza nell’avviamento di nuove iniziative produttive nel
							mondo del vino
						</li>
					</ul>
					<div className="pt-6">
						<Link href="#service" label="Torna alla selezione" />
					</div>
				</div>
			</div>

			<div className="hidden lg:block lg:w-1/2 flex-shrink-0 lg:bg-[url('/images/portrait-help.jpeg')] bg-cover bg-bottom" />
		</div>
	);
}

function CAAContent() {
	return (
		<div className="flex gap-10 xl:gap-28 p-4 pt-10 md:p-20">
			<div className="hidden lg:block lg:w-1/2 flex-shrink-0 lg:bg-[url('/images/portrait-strategy.jpeg')] bg-cover bg-bottom" />
			<div className="relative">
				<img
					className="absolute lg:hidden top-0 w-full object-cover h-full"
					src="/images/portrait-strategy.jpeg"
					alt=""
				/>
				<div className="absolute inset-6 top-0 left-0 backdrop-blur-sm lg:backdrop-blur-none h-full w-full bg-black/80 lg:bg-transparent" />
				<div className="flex z-10 p-10 text-white lg:text-slate-600 relative flex-col gap-10 xl:px-0 xl:py-20 text-lg lg:text-xl">
					<div>
						In qualità di Centro Assistenza Agricola C.A.N.A.P.A. la società Cem
						Service è autorizzata da AGEA (Agenzia per le Erogazioni in
						Agricoltura) a gestire i fascicoli aziendali e le domande per
						l’accesso a specifiche misure di sostegno comunitario, in
						particolare ai fondi relativi all’OCM Vino (Organizzazione Comune
						del Mercato Vitivinicolo) e al PSR (Programma di Sviluppo Rurale).
					</div>
					<ul className="flex list-inside list-disc flex-col gap-4">
						<li className="ml-6 -indent-6">
							Gestione e validazione dei fascicoli aziendali delle imprese
							agricole sul portale SIAN (Sistema Informativo Agricolo Nazionale)
						</li>
						<li className="ml-6 -indent-6">
							Trasmissioni telematiche: dichiarazioni di giacenza, dichiarazioni
							di raccolta uve e produzione vitivinicola
						</li>
						<li className="ml-6 -indent-6">
							Adempimenti nel settore vitivinicolo
						</li>
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
					<div className="pt-6">
						<Link href="#service" label="Torna alla selezione" />
					</div>
				</div>
			</div>
		</div>
	);
}

function Tab({
	title,
	icon,
	className,
	onClick,
}: {
	title: string;
	icon: JSX.Element | null;
	className: string;
	onClick?: () => void;
}) {
	return (
		<div onClick={onClick} className={className}>
			<div className="flex h-full lg:flex-col items-center lg:justify-center gap-4 uppercase">
				<div className="flex-shrink-0">{icon}</div>
				<div className={"lg:text-center text-xl font-bold"}>{title}</div>
			</div>
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
		<div>
			<div className="flex cursor-pointer justify-center px-4 md:px-20">
				<div
					id="service"
					className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10"
				>
					{elements.map(({ id, title }) => {
						const activeTab = tab === id;
						const iconStyle = `${activeTab ? "stroke-white" : "stroke-cem "} w-10 h-10 lg:w-20 lg:h-20`;

						return (
							<Tab
								key={id}
								title={title}
								icon={
									id === "progettazione" ? (
										<Whiteboard className={iconStyle} />
									) : id === "consulenza" ? (
										<Bulb className={iconStyle} />
									) : id === "caa" ? (
										<Leaf className={iconStyle} />
									) : null
								}
								className={classNames(
									"flex flex-col gap-6 p-2 lg:p-10 border-4 border-cem transition-all",
									activeTab ? "bg-cem text-white" : "text-cem",
								)}
								onClick={() => setTab(id)}
							/>
						);
					})}
				</div>
			</div>
			<div>{tabContent[tab]}</div>
		</div>
	);
}
