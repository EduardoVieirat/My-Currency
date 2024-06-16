import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

async function currencyData() {
  const quotationApi = await api.get("json/daily/USD-BRL/1");

  return quotationApi.data;
}

export function useCurrencyData() {
  const query = useQuery({
    queryFn: currencyData,
    queryKey: ["currency-data"],
  });

  return query  ;
}
