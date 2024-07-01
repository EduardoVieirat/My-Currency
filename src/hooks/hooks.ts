import { create } from "zustand";

interface IMoneyCardState {
  typeBuy: string;
  money: () => void;
  card: () => void;
}

interface IInputsStore {
  taxInput: string;
  currencyInput: string;
  setTaxInput: (tax: string) => void;
  setCurrencyInput: (currency: string) => void;

  errorTaxInput: boolean;
  errorCurrencyInput: boolean;
  setErrorCurrencyInput: (ec: boolean) => void;
  setErrorTaxInput: (et: boolean) => void;
}

interface IQuotation {
  quotation: number;
  dolar: number;
  tax: number;
}

interface IsetQuoteObj {
  quotationObj: IQuotation;
  quotationIsConclued: boolean;
  setQuotationObj: (quoteObj: IQuotation) => void;
  setQuotationIsConclued: (isConclued: boolean) => void;
}

export const useMoneyCardStore = create<IMoneyCardState>((set) => ({
  typeBuy: "money",
  money: () => set((state) => ({ typeBuy: (state.typeBuy = "money") })),
  card: () => set((state) => ({ typeBuy: (state.typeBuy = "card") })),
}));

export const useInputsStore = create<IInputsStore>((set) => ({
  taxInput: "0",
  currencyInput: "0",
  errorTaxInput: false,
  errorCurrencyInput: false,
  setTaxInput: (tax) => set((state) => ({ taxInput: (state.taxInput = tax) })),
  setCurrencyInput: (currency) =>
    set((state) => ({ currencyInput: (state.currencyInput = currency) })),
  setErrorTaxInput: (errorT) =>
    set((state) => ({ errorTaxInput: (state.errorTaxInput = errorT) })),
  setErrorCurrencyInput: (errorC) =>
    set((state) => ({
      errorCurrencyInput: (state.errorCurrencyInput = errorC),
    })),
}));

export const useQuotationObj = create<IsetQuoteObj>((set) => ({
  quotationObj: {
    quotation: 0,
    dolar: 0,
    tax: 0,
  },
  quotationIsConclued: false,
  setQuotationIsConclued: (isConclued) =>
    set((state) => ({
      quotationIsConclued: (state.quotationIsConclued = isConclued),
    })),
  setQuotationObj: (quoteObj: IQuotation) =>
    set((state) => ({
      quotationObj: {
        ...state.quotationObj,
        quotation: quoteObj.quotation,
        dolar: quoteObj.dolar,
        tax: quoteObj.tax,
      },
    })),
}));
