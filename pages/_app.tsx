import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Poppins, Roboto } from "next/font/google";

// Primary: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-primary", // bus naudojama CSS kintamajam
  display: "swap",
});
// Secondary: Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
  variable: "--font-second", // bus naudojama CSS kintamajam
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
