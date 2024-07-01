"use client";

import { useInputsStore } from "../../hooks/hooks";
import { formatCurrencyInput } from "../../services/formatValues";

export default function ValuesInput() {
  const {
    setCurrencyInput,
    currencyInput,
    taxInput,
    setTaxInput,
    errorCurrencyInput,
    errorTaxInput,
    setErrorCurrencyInput,
    setErrorTaxInput,
  } = useInputsStore();

  function handleCurrency(e: { target: { value: string } }) {
    const valueCurrency = e.target.value;
    setErrorCurrencyInput(false);
    setCurrencyInput(valueCurrency);
  }

  function handleTax(e: { target: { value: string } }) {
    const valueTax = e.target.value;
    setErrorTaxInput(false);
    setTaxInput(valueTax);
  }

  return (
    <section className="items-start justify-between min-w-96 h-32 text-2xl">
      <div className="flex flex-col w-full">
        <p className="font-medium">Dólar</p>
        <input
          type="text"
          placeholder="$ 1,00"
          value={formatCurrencyInput(currencyInput).replace("$", "$ ")}
          onChange={handleCurrency}
          className={`drop-shadow-md shadow-slate-400 max-w-36 h-14  ${
            errorCurrencyInput ? `border-red-600` : `border-gray-300`
          }  border rounded px-4`}
        />
        {errorCurrencyInput && (
          <span className="text-base text-red-600 my-2 w-36">
            Preencha o campo com um valor
          </span>
        )}
      </div>

      <div className="flex flex-col w-full">
        <p className="font-medium">Taxa do Estado</p>
        <input
          type="text"
          placeholder="% 0,08"
          value={formatCurrencyInput(taxInput).replace("$", "% ")}
          onChange={handleTax}
          maxLength={8}
          className={`drop-shadow-md shadow-slate-400 w-36 h-14 ${
            errorTaxInput ? `border-red-600 ` : `border-gray-300`
          }  border rounded px-4`}
        />
        {errorTaxInput && (
          <span className="text-base text-red-600 w-36">
            Preencha o campo com um valor
          </span>
        )}

      </div>

    </section>
  );
}
