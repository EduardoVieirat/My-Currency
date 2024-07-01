"use client";

import Image from "next/image";
import { useCurrencyData } from "../hooks/useCurrencyData";
import { unformatedValues } from "../services/formatValues";
import {
  useInputsStore,
  useMoneyCardStore,
  useQuotationObj,
} from "../hooks/hooks";

import arrows from "../../assets/arrows.png";
import Header from "../components/Header/header";
import TypeBuy from "../components/typeBuy/typeBuy";
import ValuesInput from "../components/valuesInputs/valuesInputs";
import QuotationCard from "../components/quotationCard/quotationCard";

export default function Home() {
  const { data } = useCurrencyData();

  const { currencyInput, taxInput, setErrorCurrencyInput, setErrorTaxInput } =
    useInputsStore();
  const { typeBuy } = useMoneyCardStore((state) => state);
  const { setQuotationObj, quotationIsConclued, setQuotationIsConclued } =
    useQuotationObj((state) => state);

  async function quotationValue() {
    const dolarValue = Number(data[0].bid);

    const { unformatedDolar, unformatedTax } = unformatedValues(
      currencyInput,
      taxInput
    );

    if (currencyInput === "0" || currencyInput === "$ ") {
      setErrorCurrencyInput(true);
      return;
    }

    if (taxInput === "0" || taxInput === "$ ") {
      setErrorTaxInput(true);
      return;
    }

    const stateTax = Number(unformatedTax) / 100;
    const dolarQuotation = Number(unformatedDolar) / 100;

    const iofMoney = (dolarValue * 1.1) / 100;
    const iofCard = (dolarQuotation * 6.4) / 100;

    if (typeBuy === "money") {
      const cal =
        Number([dolarQuotation + (dolarQuotation * stateTax) / 100]) *
        (dolarValue + iofMoney);

      setQuotationObj({
        quotation: cal,
        dolar: dolarValue,
        tax: stateTax,
      });
    } else {
      const cal =
        Number([dolarQuotation + (dolarQuotation * stateTax) / 100 + iofCard]) *
        dolarValue;
      setQuotationObj({
        quotation: cal,
        dolar: dolarValue,
        tax: stateTax,
      });
    }

    setQuotationIsConclued(true);
  }

  return (
    <main className="flex min-h-screen h-screen flex-col items-start justify-start p-12 md:p-20 *:flex">
      <Header />

      {quotationIsConclued ? (
        <QuotationCard />
      ) : (
        <section className="min-h-[30rem] w-[30rem] flex-col items-start justify-around p-8 *:flex">
          <ValuesInput />

          <TypeBuy />
          <button
            className={`${
              taxInput !== "0" || currencyInput !== "0" ? "bg-green-600" : "bg-neutral-400"
            } w-52 h-16 rounded text-[1.4rem] font-bold text-white items-center justify-center gap-3`}
            onClick={quotationValue}
          >
            <Image src={arrows} width={20} height={20} alt={""} />
            Converter
          </button>
        </section>
      )}
    </main>
  );
}
