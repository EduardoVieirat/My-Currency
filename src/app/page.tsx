"use client";

export type TQuotation = {
  quotation: number;
  dolar: number;
  tax: number;
};

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Home from "./home";

const client = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>
  );
}
