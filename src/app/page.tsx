import { About } from "@/components/shared/about";
import CTA from "@/components/shared/cta";
import { FAQ } from "@/components/shared/faqs";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Hero } from "@/components/shared/hero";
import RecentWork from "@/components/shared/recent-work";
import { Services } from "@/components/shared/service";

export default function Home() {
  return (
    <div className="font-sans ">
      <main className="">
        <Header />
        <Hero />
        <About />
        <Services />
        <RecentWork />
        <FAQ />
        <CTA />
        <Footer />
        {/* <Hero />
        <Hero /> */}
      </main>
    </div>
  );
}
