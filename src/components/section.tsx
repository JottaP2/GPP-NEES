import Header from "./header";
import { ArrowRight } from 'lucide-react';

function Section() {
  return (
    <section className="w-full min-h-screen sm:h-[641px] bg-gradient-to-b from-[#F69B22] to-[#F36E25]">
        <Header />
        <main className="flex flex-col items-center justify-center text-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
            <article className="w-full max-w-md">
                <p className="p-2 sm:p-3 bg-[#d9d9d952] rounded-xl font-semibold text-center text-xs sm:text-sm md:text-base">
                    Dados do GPP sobre o TED 12244
                </p>
            </article>
            
            <div className="text-center max-w-4xl">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                    <span className="block">Inteligência Aumentada</span>
                    <span className="block">no PNLD</span>
                </h1>
                <p className="mt-3 sm:mt-4 md:mt-5 leading-tight text-sm sm:text-base md:text-lg px-2 sm:px-4">
                    Otimizando a distribuição de livros didáticos no Brasil <br className="hidden sm:block" />
                    <span className="sm:inline"> através da ciência de dados</span>
                </p>
            </div>
            
            <aside className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-lg">
                <button className="bg-[#d9d9d952] px-4 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold hover:bg-white hover:text-[#F36E25] transition-colors duration-300 text-sm sm:text-base flex items-center justify-center">
                    <span className="flex items-center">
                        Ver Trajetória
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                </button>

                <button className="px-4 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold border border-white hover:bg-white hover:text-[#F36E25] transition-colors duration-300 text-sm sm:text-base">
                    <span>Dados da Pesquisa</span>
                </button>
            </aside>
        </main>
    </section>
  );
}

export default Section;