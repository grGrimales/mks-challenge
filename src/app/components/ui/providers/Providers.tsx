"use client";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
