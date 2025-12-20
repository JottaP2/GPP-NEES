import React from "react";
import { AlertTriangle, Lightbulb, Target } from "lucide-react";

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

const DesafiosEncontrados: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <AlertTriangle className="w-8 h-8 text-amber-500" />
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Desafios Encontrados</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Desafios */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-amber-500" />
              </span>
              Desafios Enfrentados
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-1.5 transition-transform duration-300"
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-1">{challenge.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Aprendizados */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-emerald-500" />
              </span>
              Aprendizados
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {learnings.map((learning, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-1.5 transition-transform duration-300"
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-1">{learning.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{learning.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesafiosEncontrados;
