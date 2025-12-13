import Header from "@/src/components/Header/header";
import Footer from "@/src/components/Footer/footer";

export default function Equipe() {
  const team = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Líder de Projeto",
      bio: "Coordenação geral, integração entre times e definição de escopo.",
      img: "https://i.pravatar.cc/400?img=47",
    },
    {
      id: 2,
      name: "Bruno Costa",
      role: "Desenvolvedor Front-end",
      bio: "Implementação de interfaces responsivas e componentes acessíveis.",
      img: "https://i.pravatar.cc/400?img=12",
    },
    {
      id: 3,
      name: "Carla Mendes",
      role: "Desenvolvedora Back-end",
      bio: "APIs, autenticação e integrações com serviços externos.",
      img: "https://i.pravatar.cc/400?img=32",
    },
    {
      id: 4,
      name: "Diego Ramos",
      role: "UX/UI Designer",
      bio: "Prototipagem, design system e usabilidade do produto.",
      img: "https://i.pravatar.cc/400?img=54",
    },
    {
      id: 5,
      name: "Eduarda Pinto",
      role: "QA / Testes",
      bio: "Automação de testes e garantia de qualidade do software.",
      img: "https://i.pravatar.cc/400?img=65",
    },
    {
      id: 6,
      name: "Fábio Oliveira",
      role: "DevOps",
      bio: "Infraestrutura como código, pipelines e monitoramento.",
      img: "https://i.pravatar.cc/400?img=5",
    },
    {
      id: 7,
      name: "Graça Nunes",
      role: "Analista de Dados",
      bio: "Modelagem de dados, relatórios e métricas de produto.",
      img: "https://i.pravatar.cc/400?img=9",
    },
    {
      id: 8,
      name: "Hugo Lopes",
      role: "Suporte Técnico",
      bio: "Acompanhamento de deploys e suporte a clientes internos.",
      img: "https://i.pravatar.cc/400?img=20",
    },
  ];

  return (
   <main>
    <Header />  
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-500 justify-center flex">
                Conheça Nossa Equipe
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl text-justify mx-auto">
            Conheça os integrantes do projeto. Cada membro atua em áreas que
            garantem a entrega de um produto estável, acessível e de alta
            qualidade.
          </p>
        </header>

        <section
          aria-label="Equipe do projeto"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              <div className="w-full h-44 sm:h-56 relative">
                <img
                  src={member.img}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-amber-500 mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
    <Footer /> 
   </main> 
    
  );
}