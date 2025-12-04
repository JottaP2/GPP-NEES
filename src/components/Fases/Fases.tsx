import React from "react";
import {
  Calendar,
  CheckCircle,
  Circle,
} from "lucide-react";

const timelineData = [
  {
    date: "Setembro 2024",
    title: "Projeto Piloto - Penedo/AL",
    description:
      "Início do trabalho da equipe com uma fase piloto em Penedo/AL, onde foram realizados contatos com dez escolas para agendamento e aplicação do questionário. Mesmo com dificuldades iniciais, todas as aplicações foram realizadas nas escolas designadas.",
    isActive: true,
  },
  {
    date: "Outubro 2024",
    title: "Amostra 0 - Expansão",
    description:
      "Expansão para a Amostra 0 com 624 escolas. Nessa fase, a equipe identificou a dificuldade do contato com as escolas, mesmo sendo na mesma cidade, e desenvolveu estratégias de abordagem.",
    isActive: true,
  },
  {
    date: "Novembro 2024",
    title: "Aplicação Formulário PNLD 2024",
    description:
      "Pesquisa e ligações para as escolas do Brasil para levantamento de dados e identificação de necessidades. Período intenso de coleta de dados via Google Forms.",
    isActive: true,
  },
  {
    date: "Dezembro 2024",
    title: "Transição para Plataforma Coleta",
    description:
      "As ferramentas do Google foram substituídas pela plataforma Coleta, que passou a centralizar o envio, validação e monitoramento dos dados, proporcionando maior eficiência.",
    isActive: true,
  },
  {
    date: "Janeiro 2025",
    title: "Articulações Institucionais",
    description:
      "Reuniões com SEDUCs de diversos estados e contato com UNDIME Nacional e CONSED para fortalecer a credibilidade da pesquisa e facilitar o acesso às escolas.",
    isActive: true,
  },
  {
    date: "Maio 2025",
    title: "Consolidação e Análises",
    description:
      "Encerramento das atividades com maior qualidade e confiabilidade nos resultados produzidos. Base final de 6.241 escolas contempladas.",
    isActive: false,
  },
];


const Trajetoria: React.FC = () => {
  return (
      <section id="trajetoria" className="py-20 px-5 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Calendar className="w-8 h-8 text-orange-400" />
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Linha do Tempo das ações da equipe no TED</h2>
        </div>
        
        <div className="relative pl-10 md:pl-12">
          {/* Linha vertical */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-blue-200 rounded" />
          
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative mb-10 last:mb-0 pl-8 ${item.isActive ? "" : "opacity-70"}`}
            >
              {/* Marcador */}
              <div className="absolute -left-6 md:-left-5 top-0 bg-white p-1 rounded-full">
                {item.isActive ? (
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                ) : (
                  <Circle className="w-7 h-7 text-slate-400" />
                )}
              </div>
              
              {/* Conteúdo */}
              <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${!item.isActive ? "border-2 border-dashed border-slate-300" : ""}`}>
                <span className="inline-block bg-blue-50 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {item.date}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Trajetoria;