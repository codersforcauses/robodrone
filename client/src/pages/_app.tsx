import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import {
  Fugaz_One,
  Montserrat,
  Plus_Jakarta_Sans,
  Work_Sans,
} from "next/font/google";

import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const fontPlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const fontWorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
});

const fontFugazOne = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fugazone",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${fontMontserrat.variable} ${fontPlusJakartaSans.variable} ${fontWorkSans.variable} ${fontFugazOne.variable}`}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Navbar />
        <main className="w-full pt-16">
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
      <Footer />
    </div>
  );
}
