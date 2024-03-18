"use client";
import api from "@/api/api";
import QuotationCard from "@/components/quotationCard/quotationCard";
import arrows from "../../assets/image.png";
import TypeBuy from "@/components/typeBuy/typeBuy";
import ValuesInput from "@/components/valuesInputs/valuesInputs";
import Image from "next/image";

import { useState } from "react";

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

    const unformatedTax = taxInput.slice(2).replace(",", "");
    const unformatedDolar = currencyInput
      .slice(2)
      .replace(",", "")
      .replace(".", "")
      .replace(".", "");

    let stateTax =
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

    console.log(currencyInput);
  }

  return (
    //
    <main className="flex min-h-screen h-screen flex-col items-start justify-start p-20 bg-[url('../../assets/bg.svg')] bg-center bg-cover *:flex">
      <section className="items-start justify-start gap-20 w-full mb-32 h-48">
        <div className="flex-col items-center justify-center text-emerald-500 font-bold">
          <h1 className="text-5xl">DUDU</h1>
          <h3 className="text-3xl">currency</h3>
        </div>
        <div className="flex items-center justify-between flex-col h-32">
          <div className="flex items-center justify-between w-full text-1xl">
            <p className="">14 de janeiro 2021</p>
            <p>|</p>
            <p>21:00 UTC</p>
          </div>
          <p className="mt-1 block text-1xl">
            Dados de câmbio disponibilizados pela Morningstar.
          </p>
        </div>
      </section>

      {quatationIsConclued ? (
        <QuotationCard
          setQuatationIsConclued={setQuatationIsConclued}
          quatationObj={quatationObj}
        />
      ) : (
        <section className="min-h-[30rem] w-full flex-col items-start justify-around *:flex">
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
            className="bg-neutral-400 w-52 h-16 rounded text-[1.4rem] font-bold text-white items-center justify-center gap-3"
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
