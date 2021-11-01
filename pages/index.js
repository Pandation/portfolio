import Head from "next/head";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Learning from "@/components/Learning";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Florian Baumes - Développeur FullStack</title>
      </Head>
      <Header />
      <Content />
      <Learning />
      <Footer />
    </div>
  );
}
