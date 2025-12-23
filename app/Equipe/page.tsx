import Header from "@/src/components/Header/header";
import Footer from "@/src/components/Footer/footer";

export default function Equipe() {
  const team = [
    {
      id: 1,
      name: "Jay Amorim",
      role: "Coordenador da equipe",
      bio: "Coordenação geral, integração entre times e definição de escopo.",
      img: "./jay.jpeg",
    },
    {
      id: 2,
      name: "João Pedro",
      role: "Assistente de Pesquisa e QA",
      bio: "No projeto TED 12244, realizei pesquisas presenciais (Penedo-AL) e remotas, articulei com SEDUCs e executei testes de QA na plataforma Coleta PNLD. Além disso, coordenei o fluxo de comunicação entre as equipes de validação e help-desk. ",
      img: "./Jepeto.jpeg",
    },
    {
      id: 3,
      name: "José Lucas",
      role: "Assistente de Pesquisa",
      bio: "Contribui para atualização, validação e gerenciamento de dados e informações. Assim como participei de outras demandas prestando suporte e apoio.",
      img: "./Josélucas.jpg",
    },

    {
      id: 4,
      name: "João Marinho",
      role: "Assistente de Pesquisa e QA",
      bio: "No projeto TED 12244, realizei pesquisas presenciais e remotas, além de testes de QA na plataforma Coleta PNLD. Atuei na articulação com diversos estados (incluindo MG, AL, SE, AC, RN e RS), com foco especial no atendimento a escolas em comunidades quilombolas.",
      img: "./jotta.JPG",
    },
    {
      id: 5,
      name: "Alberto Wagner",
      role: "Pesquisador",
      bio: "Realizei contato com as escolas visando à aplicação de formulário e, paralelamente, com as Secretarias de Educação e a UNDIME, a fim de levantar os contatos das instituições de ensino participantes.",
      img: "./Alberto.jpeg",
    },
    {
      id: 6,
      name: "Elysa Francyne",
      role: "Pesquisadora e Help Desk",
      bio: "Como pesquisadora no NEES, atuei na atualização de dados escolares e em pesquisas de campo, com destaque para a visita a um assentamento em Murici/AL. Essa vivência prática evidenciou a relevância e o alcance social do PNLD em diferentes realidades.",
      img: "./Elysa.jpeg",
    },
    {
      id: 7,
      name: "Laysa Edwyges",
      role: "Pesquisadora e Help Desk",
      bio: " Participei do help desk do projeto, atuando no suporte à aplicação de questionários e também fui responsável pela validação de contatos e endereços de e-mails.",
      img: "./Laysa.jpeg",
    },
    {
      id: 8,
      name: "Elmo Araujo",
      role: "Pesquisador",
      bio: "Atuação na coleta, validação e atualização de dados das escolas e secretarias de educação.",
      img: "./Elmo.jpeg",
    },

    {
      id: 9,
      name: "Sergio Romero",
      role: "Pesquisador",
      bio: "Como Pesquisador no NEES, atuei na validação de dados escolares e busca ativa de contatos junto a prefeituras e secretarias para o questionário do FNDE. Além disso, gerenciei o envio da pesquisa e prestei suporte às instituições para o preenchimento e resolução de dúvidas.",
      img: "./sergio.jpeg",
    },

    {
      id: 10,
      name: "Jhayme Dennis",
      role: "Pesquisador",
      bio: "Responsável pelo contato e suporte a escolas do Pará, realizei a busca e validação de dados via canais oficiais e WhatsApp. Também atuei nos testes de qualidade da plataforma ColetaPNLD e na atualização contínua do banco de dados da pesquisa.",
      img: "./Jhayme.jpeg",
    },
    {
      id: 11,
      name: "João Paulo",
      role: "Pesquisador",
      bio: "Como iniciador científico e assistente júnior, contatei escolas em todo o Brasil e articulei reuniões com entidades e UNDIMEs de MT e MS. Essas ações visaram garantir a adesão à pesquisa e reforçar a legitimidade do projeto junto às instituições.",
      img: "./JoãoGomes.jpeg",
    },

    {
      id: 12,
      name: "Patricio Medeiros",
      role: "Pesquisador",
      bio: " Atualização e validação de dados, garantindo a precisão das informações.",
      img: "./Patricio.jpeg",
    },

        {
      id: 13,
      name: "Juliana Bezerra",
      role: "Pesquisadora",
      bio: " Inicialmente, fui responsável por contatar escolas dos estados do Paraná e de Minas Gerais. Posteriormente, atuei na conferência e na correção da planilha principal, além de exercer a função de designer.",
      img: "./Juliana.jpeg",
    },

      {
      id: 14,
      name: "Sophia Sacramento",
      role: "Pesquisadora",
      bio: " Pesquisadora no NEES, desempenhando atividades de apoio à coordenação, bem como de coleta e armazenamento de dados por meio de telefone, redes sociais e internet.",
      img: "./Sophia.jpeg",
    },

      {
      id: 15,
      name: "Gabriel Fideles",
      role: "Assistente de Pesquisa e Suporte",
      bio: " No projeto TED 12244, realizei pesquisas presenciais e remotas, além de análises e acompanhamento dos dados da pesquisa e das escolas. Atuei na otimização da gestão da pesquisa através da implementação de scripts de automação nas planilhas de controle e pela geração de dashboards e relatórios.",
      img: "./fideles.jpeg",
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
                <div className="w-full h-44 sm:h-56 relative overflow-hidden">
                  <img
                    src={member.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-[5px] scale-110"
                    aria-hidden="true"
                  />
                  <img
                    src={member.img}
                    alt={`${member.name} — ${member.role}`}
                    className="relative w-full h-full object-contain z-10"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-amber-500 mt-1">{member.role}</p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed text-justify">
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
