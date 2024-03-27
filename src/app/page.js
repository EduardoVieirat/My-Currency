"use client";
import api from "@/api/api";
import QuotationCard from "@/components/quotationCard/quotationCard";
import arrows from "../../assets/arrows.png";
import TypeBuy from "@/components/typeBuy/typeBuy";
import ValuesInput from "@/components/valuesInputs/valuesInputs";
import Image from "next/image";

import { useState } from "react";
import Header from "@/components/Header/header";
import { unformatedValues } from "@/services/formatValues";

export default function Home() {
  const [moneyCard, setMoneyCard] = useState("money");
  const [quatationIsConclued, setQuatationIsConclued] = useState(false);
  const [quatationObj, setQuatationObj] = useState({
    quotation: "",
    dolar: "",
    tax: "",
  });
  const [currencyInput, setCurrencyInput] = useState("");
  const [taxInput, setTaxInput] = useState("");

  const [errorCurrency, setErrorCurrency] = useState(false);
  const [errorTax, setErrorTax] = useState(false);

  async function quotationValue() {
    const quotationApi = await api.get("json/daily/USD-BRL/1");

    const dolarValue = Number(quotationApi.data[0].bid);

    if (currencyInput === "$ " && taxInput === "% ") {
      setErrorTax(true);
      setErrorCurrency(true);
      return;
    }

    if (currencyInput === "$ ") {
      setErrorCurrency(true);
      return;
    }

    if (taxInput === "% ") {
      setErrorTax(true);
      return;
    }

    const { unformatedDolar, unformatedTax } = unformatedValues(
      currencyInput,
      taxInput
    );

    const stateTax =
      unformatedTax.length > 2
        ? Number(unformatedTax) / 100
        : Number(unformatedTax);

    const dolarQuotation =
      unformatedDolar.length > 2
        ? Number(unformatedDolar) / 100
        : Number(unformatedDolar);

    const iofMoney = (dolarValue * 1.1) / 100;
    const iofCard = (dolarQuotation * 6.4) / 100;

    if (moneyCard === "money") {
      const cal =
        [dolarQuotation + (dolarQuotation * stateTax) / 100] *
        (dolarValue + iofMoney);

      setQuatationObj({
        quotation: cal,
        dolar: dolarValue,
        tax: stateTax,
      });
    } else {
      const cal =
        [dolarQuotation + (dolarQuotation * stateTax) / 100 + iofCard] *
        dolarValue;

      setQuatationObj({
        quotation: cal,
        dolar: dolarValue,
        tax: stateTax,
      });
    }

    setErrorTax(false);
    setErrorCurrency(false);
    setQuatationIsConclued(true);
  }

  return (
    <main className="flex min-h-screen h-screen flex-col items-start justify-start p-12 md:p-20 *:flex">
      <Header />

      {quatationIsConclued ? (
        <QuotationCard
          setQuatationIsConclued={setQuatationIsConclued}
          quatationObj={quatationObj}
        />
      ) : (
        <section className="min-h-[30rem] w-[30rem] flex-col items-start justify-around p-8 *:flex">
          <ValuesInput
            taxInput={taxInput}
            setTaxInput={setTaxInput}
            currencyInput={currencyInput}
            setCurrencyInput={setCurrencyInput}
            errorTax={errorTax}
            errorCurrency={errorCurrency}
            setErrorTax={setErrorTax}
            setErrorCurrency={setErrorCurrency}
          />

          <TypeBuy moneyCard={moneyCard} setMoneyCard={setMoneyCard} />
          <button
            className={`bg-neutral-400 ${
              taxInput || currencyInput ? `bg-green-600` : ""
            } w-52 h-16 rounded text-[1.4rem] font-bold text-white items-center justify-center gap-3`}
            onClick={quotationValue}
          >
            <Image src={arrows} width={20} height={20} />
            Converter
          </button>
        </section>
      )}
    </main>
  );
}
