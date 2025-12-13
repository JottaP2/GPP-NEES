import Header from "@/src/components/Header/header";
import Image from "next/image";
import LogoCarouselDemo from "@/src/components/splideInfinito/LogoCarouselDemo";
import SlideHome from "@/src/components/slideHome/slideHome";
import HomeContent from "@/src/components/Sections/HomeContent";
import Fases from "@/src/components/Fases/Fases";
import Dados from "@/src/components/Dados/Dados";
import Footer from "@/src/components/Footer/footer";
import ScrollToTop from "@/src/components/ScrollToTop/scrollToTop";

const logos = [
  { id: "1", src: "/image 1.png", alt: "Logo 1" },
  { id: "2", src: "/image 2.png", alt: "Logo 2" },
  { id: "3", src: "/image 3.png", alt: "Logo 3" },
  { id: "4", src: "/image 4.png", alt: "Logo 4" },
  { id: "5", src: "/image 5.png", alt: "Logo 5" },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="w-full h-[500px] md:h-[600px] bg-[#FF9359] flex mx-auto justify-center items-center gap-10 rounded-b-[30px] md:rounded-b-[50px] px-4 md:px-0">
        <div className="w-full max-w-[1240px] h-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 p-10">
          <article className="flex flex-col justify-center gap-4 md:gap-6 flex-1">
            <div className="hidden md:block">
              <Image
                src="/LOGOHP.svg"
                alt="Banner Image"
                width={100}
                height={29}
                style={{ width: 'auto', height: 'auto' }}
                className="md:w-[100px] md:h-[38px] md:flex-none"
              />
            </div>
            <div className="text-white flex flex-col">
              <h1 className="text-[18px] md:text-[34px] font-bold my-2 md:my-4 max-w-full md:max-w-[610px] leading-[32px] md:leading-[40px] sm:text-[10px]">
                Panorama Geral do Coleta PNLD <span className="text-amber-200">“Inteligência Aumentada para Predição do Alunado”</span> na visão dos pesquisadores de Penedo.
              </h1>
              <p className="max-w-full md:max-w-[400px] text-[#1E1E1E] text-[14px] md:text-base">
                Otimizando a distribuição de livros didáticos no Brasil através da
                ciência de dados
              </p>
            </div>
          </article>
          
          <div className="flex-1 w-full md:w-auto">
            <SlideHome />
          </div>
        </div>
      </section>
      <HomeContent />
      <LogoCarouselDemo logos={logos} />
      <Fases />
      <Dados />
        <Footer />
                <ScrollToTop />
    </main>
  );
}
