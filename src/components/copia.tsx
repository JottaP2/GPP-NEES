import React from "react";
import {
  Calendar,
  Target,
  AlertTriangle,
  Lightbulb,
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

const challenges = [
  {
    title: "Barreira de Infraestrutura",
    description: "Muitas escolas sem energia elétrica, internet ou telefone fixo.",
  },
  {
    title: "Acesso Geográfico",
    description: "Escolas acessíveis apenas por barco ou avião (ex: Acre/Amazonas).",
  },
  {
    title: "Dados Desatualizados",
    description:
      "Telefones registrados pertenciam a caciques ou gestores antigos sem vínculo atual.",
  },
  {
    title: "Barreira Cultural/Institucional",
    description:
      "Necessidade de autorização específica para entrada em territórios; desconfiança com contatos externos.",
  },
];

const learnings = [
  {
    title: "Credibilidade Institucional",
    description:
      "Importância de apresentação institucional adequada e parceria com órgãos oficiais como FNDE.",
  },
  {
    title: "Metodologia Adaptativa",
    description:
      "Sinal de que o método era possível, mas exigia ajustes contínuos conforme as dificuldades.",
  },
  {
    title: "Automação de Processos",
    description:
      "Desenvolvimento de scripts em Python para varredura automática de dados e gestão de planilhas.",
  },
  {
    title: "Articulação Multi-nível",
    description:
      "Contato simultâneo com SEDUCs, UNDIMEs e escolas para maximizar taxa de sucesso.",
  },
];

const Trajetoria: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-500 py-20 px-5 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nossa Trajetória</h1>
          <p className="text-lg md:text-xl opacity-90">
            Conheça a evolução do projeto GPP UFAL desde o início até a
            consolidação dos resultados
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-5 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Calendar className="w-8 h-8 text-blue-500" />
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Linha do Tempo</h2>
        </div>
        
        <div className="relative pl-10 md:pl-12">
          {/* Linha vertical */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-200 rounded" />
          
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
                <span className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
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

      {/* Challenges Section */}
      <section className="py-20 px-5 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <AlertTriangle className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Desafios Enfrentados</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div 
                key={index} 
                className="bg-white p-7 rounded-2xl shadow-md hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-20 px-5 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Lightbulb className="w-8 h-8 text-emerald-500" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Aprendizados</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learnings.map((learning, index) => (
              <div 
                key={index} 
                className="bg-white p-7 rounded-2xl shadow-md hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {learning.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {learning.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-500 py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">
            Resultados Alcançados
          </h2>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold text-white">6.241</span>
              <span className="text-white/80 mt-2">Escolas Contempladas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold text-white">27</span>
              <span className="text-white/80 mt-2">Estados Alcançados</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold text-white">9</span>
              <span className="text-white/80 mt-2">Meses de Projeto</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trajetoria;