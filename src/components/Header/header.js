export default function Header({ formatedDate, formatedHours }) {
  return (
    <section className="items-start justify-start gap-20 w-full mb-32 h-48 ">
      <div className="flex-col items-center justify-center text-emerald-500 font-bold">
        <h1 className="text-5xl">DUDU</h1>
        <h3 className="text-3xl">currency</h3>
      </div>
      <div className="flex items-center justify-between flex-col h-32">
        <div className="flex items-center justify-between w-full text-xl">
          <p className="text-base md:text-2xl">{formatedDate}</p>
          <p className="text-base mr-4">|</p>
          <p className="text-xl md:text-2xl">{formatedHours} UTC</p>
        </div>
        <p className="mt-1 block text-xl md:text-2xl">
          Dados de câmbio disponibilizados pela Morningstar.
        </p>
      </div>
    </section>
  );
}
