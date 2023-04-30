import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContainer from "../components/mainContainer";

export default function Home() {
  return (
    <main className="pt-16 mx-6 min-h-screen">
      <Header />
      <MainContainer />
      <Footer />
    </main>
  );
}
