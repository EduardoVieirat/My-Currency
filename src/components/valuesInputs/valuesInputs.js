"use client";

import { useState } from "react";
import { FormatValues } from "./formatValues";

export default function ValuesInput({
  taxInput,
  setTaxInput,
  currencyInput,
  setCurrencyInput,
  errorTax,
  errorCurrency,
  setErrorCurrency,
  setErrorTax,
}) {
  function handleCurrency(e) {
    const formatedCurrency = FormatValues(e.target.value);

    setErrorCurrency(false);

    setCurrencyInput(`$ ${formatedCurrency}`);
  }

  function handleTax(e) {
    const formatedTax = FormatValues(e.currentTarget.value);

    setErrorTax(false);

    setTaxInput(`% ${formatedTax}`);
  }

  return (
    <section className="items-start justify-between w-96 h-32 text-2xl">
      <div className="flex flex-col">
        <p className="font-medium">Dólar</p>
        <input
          type="text"
          placeholder="$ 1,00"
          value={currencyInput}
          onChange={handleCurrency}
          className={`drop-shadow-md shadow-slate-400 w-36 h-14 ${
            errorCurrency ? `border-red-600` : `border-gray-300`
          }  border rounded px-4`}
        />
        {errorCurrency && (
          <span className="text-base text-red-600 my-2 w-36">
            Preencha o campo com um valor
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <p className="font-medium">Taxa do Estado</p>
        <input
          type="text"
          placeholder="0,08 %"
          value={taxInput}
          onChange={handleTax}
          maxLength={8}
          className={`drop-shadow-md shadow-slate-400 w-36 h-14 ${
            errorTax ? `border-red-600 ` : `border-gray-300`
          }  border rounded px-4`}
        />
        {errorTax && (
          <span className="text-base text-red-600 w-36">
            Preencha o campo com um valor
          </span>
        )}
      </div>
    </section>
  );
}
