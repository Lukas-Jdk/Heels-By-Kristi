import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Playfair_Display, Montserrat, Kristi, Poppins } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-second",
  display: "swap",
});

const kristi = Kristi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

// Kept only for the Header/NavBar, which stays on the old typography.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-header",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${playfairDisplay.variable} ${montserrat.variable} ${kristi.variable} ${poppins.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}