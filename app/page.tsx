import Header from "@/src/components/Header/header";
import Image from "next/image";
import LogoCarouselDemo from "@/src/components/splideInfinito/LogoCarouselDemo";

const logos = [
  { id: '1', src: '/image 1.png', alt: 'Logo 1' },
  { id: '2', src: '/image 2.png', alt: 'Logo 2' },
  { id: '3', src: '/image 3.png', alt: 'Logo 3' },
  { id: '4', src: '/image 4.png', alt: 'Logo 4' },
  { id: '5', src: '/image 5.png', alt: 'Logo 5' },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="w-full h-[600px] bg-[#FF9359] flex mx-auto justify-center items-center gap-10">
        <article className="max-w-[1240px]  h-full flex flex-col justify-center gap-6">
          <div className="">
            <Image
              src="/logoHorizontalBlack.svg"
              alt="Banner Image"
              width={259}
              height={38}
            />
          </div>
          <div className="text-white flex flex-col">
            <h1 className="text-[48px] font-bold my-4 max-w-[610px] leading-[50px]">
              Dados do TED 12244 Inteligência Aumentada no PNLD
            </h1>
            <p className="max-w-[400px] text-[#1E1E1E] ">
              Otimizando a distribuição de livros didáticos no Brasil através da
              ciência de dados
            </p>
          </div>
        </article>
      </section>
        <LogoCarouselDemo logos={logos} />
    </main>
  );
}
