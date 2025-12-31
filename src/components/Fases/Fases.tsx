import React from "react";
import {
  Calendar,
  CheckCircle,
  Circle,
} from "lucide-react";

const timelineData = [
  {
    date: "Setembro 2024",
    title: "Marco Zero – Fase Piloto Presencial",
    description:
      "Realização da fase piloto no município de Penedo (AL), com aplicação presencial e agendamento em 10 escolas da rede local. Essa etapa permitiu identificar, ainda em pequena escala, dificuldades iniciais de contato e evidenciou a necessidade de uma abordagem mais estruturada para engajamento dos gestores escolares.",
    isActive: true,
  },
  {
    date: "Out. 2024 – Mai. 2025",
    title: "Choque de Realidade – Amostras 0 e 1",
    description:
      "Expansão do contato remoto para 1.248 escolas em todo o Brasil (Amostras 0 e 1). Foram realizadas mais de 2.450 tentativas de contato apenas na Amostra 0, revelando um cenário crítico de telefones inexistentes, e-mails inválidos e forte desconfiança institucional. Muitas escolas exigiam ofícios ou questionavam a vinculação da pesquisa ao FNDE. O ponto de virada ocorreu com a visita presencial da comitiva do FNDE em Rio Largo e Murici, que comprovou a importância da oficialização institucional.",
    isActive: true,
  },
  {
    date: "Jan. – Jun. 2025",
    title: "Articulação Institucional Estratégica",
    description:
      "Diante das limitações do contato direto, a equipe adotou uma estratégia institucional de articulação ‘de cima para baixo’. Foram realizadas negociações com a UNDIME Nacional e UNDIME Mato Grosso, além de reuniões estratégicas com CONSED e Secretarias de Educação de diversos estados (PE, RS, PR, SE, AC e MA). Como resultado, foram obtidas listas oficiais e atualizadas de contatos de escolas do Acre, Sergipe e Pernambuco.",
    isActive: true,
  },
  {
    date: "Jun. – Ago. 2025",
    title: "Tecnologia e Preparação – Plataforma ColetaPNLD",
    description:
      "Migração definitiva das planilhas para a plataforma própria ColetaPNLD, promovendo maior profissionalização do processo. Os pesquisadores atuaram como analistas de qualidade (QA), realizando três rodadas de testes para eliminação de bugs críticos e melhoria da usabilidade. Nessa fase, também foi definida a base estatística final com 6.240 escolas para a coleta em larga escala.",
    isActive: true,
  },
  {
    date: "Ago. – Out. 2025",
    title: "Grande Coleta Nacional – Sprint Final",
    description:
      "Início da aplicação em larga escala em 25 de agosto de 2025, com suporte ativo e humanizado via WhatsApp e telefone, funcionando como um help-desk em tempo real. Houve esforço específico para inclusão de escolas indígenas, quilombolas e de assentamentos, consideradas as de mais difícil acesso no país. O processo resultou na consolidação de 1.815 aplicações válidas (INEPs) respondidas.",
    isActive: true,
  },
];   

const Trajetoria: React.FC = () => {
  return (
      <section id="trajetoria" className="py-20 px-5 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Calendar className="w-8 h-8 text-orange-400" />
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 text-center">Linha do Tempo das Ações  Realizadas</h2>
        </div>
        
        <div className="relative pl-10 md:pl-12">
          {/* Linha vertical */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-blue-200 rounded" />
          
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative mb-10 last:mb-0 pl-8"
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
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <span className="inline-block bg-blue-50 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold mb-3 text-center mx-auto">
                  {item.date}
                </span> 
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 text-center">
                  {item.title}
                </h3> 
                <p className="text-slate-600 leading-relaxed text-justify">
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