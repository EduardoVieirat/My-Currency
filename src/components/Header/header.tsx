import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export default function Header() {
  const toformatDate = new Date();

  const formatedDate = format(
    new Date(
      toformatDate.getFullYear(),
      toformatDate.getMonth(),
      toformatDate.getDate()
    ),
    "d 'de' MMMM 'de' u",
    {
      locale: ptBR,
    }
  );

  const formatedHours = format(
    new Date(
      toformatDate.getFullYear(),
      toformatDate.getMonth(),
      toformatDate.getDate(),
      toformatDate.getUTCHours(),
      toformatDate.getUTCSeconds()
    ),
    "k' : 'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <section className="items-start justify-start gap-20 w-full mb-32 h-48 ">
      <div className="flex-col items-start justify-center text-emerald-500 font-bold">
        <h1 className="text-5xl">DUDU</h1>
        <h3 className="text-3xl">currency</h3>
      </div>
      <div className="flex items-center justify-center flex-col h-32">
        <div className="flex items-center justify-between w-full text-xl">
          <p className="text-base md:text-2xl">{formatedDate}</p>
          <p className="text-base mx-4">|</p>
          <p className="text-xl md:text-2xl">{formatedHours} UTC</p>
        </div>
      </div>
    </section>
  );
}
