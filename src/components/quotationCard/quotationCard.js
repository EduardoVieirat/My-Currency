import Image from "next/image";
import arrow from "../../../assets/arrow.png";
import { FormatValues } from "../../services/formatValues";

export default function QuotationCard({
  setQuatationIsConclued,
  quatationObj,
}) {
  const { tax, dolar, quotation } = quatationObj;

  const showQuotation = FormatValues(quotation.toFixed(2).toString());

  return (
    <section className="flex flex-col justify-around items-start h-[25rem] w-full">
      <button
        onClick={() => {
          setQuatationIsConclued(false);
        }}
        className="shadow-md w-36 h-14 border-gray-300 border rounded px-5 flex items-center justify-between"
      >
        <Image src={arrow} width={15} height={15} />
        Voltar
      </button>
      <div>
        <p className="font-medium text-gray-600">o resultado do cálculo</p>
        <h1 className="text-emerald-500 text-[4rem] font-bold">
          R$ {showQuotation}
        </h1>
      </div>

      <div className="text-gray-400 font-medium">
        <p>Compra no dinheiro e taxa de {tax} %</p>
        <p>Cotação do dólar: $1,00 = R$ {dolar.toFixed(2)}</p>
      </div>
    </section>
  );
}
