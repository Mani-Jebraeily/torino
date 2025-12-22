import Footer from "@/components/footer";
import GitHub from "@/components/gitHub";
import Header from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className="antialiased">
        <Header/>
        <Main />
        <GitHub/>
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
