export function ContactUs() {
  return (
    <section className="bg-slate-500 text-white">
      <div className="mx-auto max-w-screen-sm px-4 py-8 lg:py-8">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase    ">
          Scrivici
        </h2>
        <p className="mb-8 text-center font-light sm:text-xl lg:mb-10 ">
          Vuoi avere maggiori informazioni? Scrivici senza esitare!
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label className="mb-2 block text-sm font-medium uppercase">
              email
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="esempio@email.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium uppercase">
              Messaggio
            </label>
            <textarea
              id="message"
              rows={6}
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Messaggio..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="focus:ring-primary-300 rounded-lg bg-slate-800 px-5 py-3 text-center text-sm font-medium hover:bg-cem focus:outline-none focus:ring-4 sm:w-fit"
          >
            Invia Messaggio
          </button>
        </form>
      </div>
    </section>
  );
}
