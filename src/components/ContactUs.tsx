import { useState } from "react";
import { useForm } from "react-hook-form";

type TData = {
  email: string;
  message: string;
  access_key: string;
};

const inputClasses =
  "focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm";

export function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<TData>();

  const [isSubmitError, setIsSubmitError] = useState<boolean>(false);

  function submitContactForm(data: TData) {
    setIsSubmitError(false);
    const json = JSON.stringify(data);

    return fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).catch((error) => {
      console.error(error);
      setIsSubmitError(true);
    });
  }

  const hasErrors = Object.keys(errors).length > 0;

  const isSubmittingComponent = (
    <div className="md:px-8 text-white text-center text-xl md:text-2xl">
      Stiamo inviando la tua email...
    </div>
  );

  const isSubmitSuccessfulComponent = (
    <div className="md:px-8 text-center text-xl md:text-2xl text-juxt">
      Grazie per averci scritto! Ti risponderemo al più presto!
    </div>
  );

  const isSubmitErrorComponent = (
    <div className="md:px-8 text-xl text-center md:text-2xl text-amber-200">
      Hmm.. Sembra esserci un problema.. Puoi contattarci direttamente a{" "}
      <strong>info@cem-group.it </strong>
    </div>
  );

  return (
    <section className="bg-gray-400 text-white">
      <div className="mx-auto max-w-screen-sm px-4 py-8 lg:py-8">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase    ">
          Scrivici
        </h2>
        <p className="mb-8 text-center font-light sm:text-xl lg:mb-10 ">
          Vuoi avere maggiori informazioni? Scrivici senza esitare!
        </p>
        <form
          onSubmit={handleSubmit(submitContactForm)}
          id="form"
          className={
            isSubmitting || isSubmitSuccessful
              ? "hidden"
              : "flex flex-col gap-4"
          }
        >
          <input
            type="hidden"
            {...register("access_key")}
            value="1caa177a-1115-4775-b136-6ec4f721aa47"
          />

          <div>
            <label className="mb-2 block text-sm font-medium uppercase">
              email
            </label>
            <input
              type="email"
              className={inputClasses}
              {...register("email", { required: true })}
              placeholder="esempio@email.com"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium uppercase">
              Messaggio
            </label>
            <textarea
              className={inputClasses}
              {...register("message", { required: true })}
              rows={6}
              placeholder="Messaggio..."
            ></textarea>
          </div>

          {hasErrors && (
            <div className="text-amber-200">
              Email e Messaggio sono campi obbligatori
            </div>
          )}

          <button
            type="submit"
            className="focus:ring-primary-300 rounded-lg bg-slate-800 px-5 py-3 text-center text-sm font-medium hover:bg-cem focus:outline-none focus:ring-4 sm:w-fit"
          >
            Invia Messaggio
          </button>
        </form>
        {isSubmitting && isSubmittingComponent}
        {isSubmitSuccessful && !isSubmitError && isSubmitSuccessfulComponent}
        {isSubmitError && isSubmitErrorComponent}
      </div>
    </section>
  );
}
