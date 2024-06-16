import { create } from "zustand";

interface IMoneyCardState {
  typeBuy: string;
  money: () => void;
  card: () => void;
}

export const useMoneyCardStore = create<IMoneyCardState>((set) => ({
  typeBuy: "money",
  money: () => set((state) => ({ typeBuy: state.typeBuy + "money" })),
  card: () => set((state) => ({ typeBuy: state.typeBuy + "card" })),
}));
