"use client";
import { Target, Book, Users, Info } from "lucide-react";

export default function HomeContent() {
	return (
		<div className="home-content w-full">
			<section id="objetivo" aria-labelledby="objetivo-title" className="py-10 md:py-16">
					<div className="max-w-[1240px] mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 gap-6 items-center">
						<div>
							<h2 id="objetivo-title" className="text-slate-800 text-2xl md:text-3xl font-semibold text-center">
								Objetivo do Projeto
							</h2>
							<p className="mt-3 text-slate-700 leading-relaxed text-base md:text-lg text-justify mx-auto max-w-3xl">
								Prover insights confiáveis para apoiar a tomada de decisão na alocação
								de recursos e planejamento educacional. Através de coletas sistemáticas
								e análises estatísticas, buscamos garantir que as ações públicas cheguem
								onde são realmente necessárias, com eficiência e equidade.
							</p>
						</div>

						<div className="flex justify-center gap-6 mt-6 flex-wrap">
							<div className="flex flex-col items-center gap-2 max-w-[220px]">
								<div className="p-3 bg-slate-100 rounded-md inline-flex items-center justify-center">
									<Target className="w-6 h-6 text-[#FF9359]" />
								</div>
								<div>
							<p className="text-slate-800 font-medium text-center">Foco em Impacto</p>
							<p className="text-slate-600 text-sm text-center">Ações alinhadas às necessidades locais</p>
								</div>
							</div>

							<div className="flex flex-col items-center gap-2 max-w-[220px]">
								<div className="p-3 bg-slate-100 rounded-md inline-flex items-center justify-center">
									<Book className="w-6 h-6 text-[#FF9359]" />
								</div>
								<div>
								<p className="text-slate-800 font-medium text-center">Excelência Metodológica</p>
								<p className="text-slate-600 text-sm text-center">Modelos validados e dados confiáveis</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="sobre" aria-labelledby="sobre-title" className="py-10 md:py-16 bg-slate-50">
					<div className="max-w-[1240px] mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 gap-6 items-center">
						<div>
							<h3 id="sobre-title" className="text-slate-800 text-2xl md:text-3xl font-semibold text-center">
								Sobre o Projeto
							</h3>
							<p className="mt-3 text-slate-700 leading-relaxed text-base md:text-lg text-justify mx-auto max-w-3xl">
								O Coleta PNLD combina trabalho de campo, tecnologia e análise de dados
								para apoiar a distribuição de livros didáticos nas escolas públicas.
								Acreditamos no poder da colaboração entre pesquisadores, educadores
								e gestores para construir políticas baseadas em evidências.
							</p>
						</div>

						<div className="flex justify-center gap-6 mt-6 flex-wrap">
							<div className="flex flex-col items-center gap-2 max-w-[220px]">
								<div className="p-3 bg-white rounded-md shadow-sm inline-flex items-center justify-center">
									<Users className="w-6 h-6 text-[#FF9359]" />
								</div>
								<div>
								<p className="text-slate-800 font-medium text-center">Envolvimento Local</p>
								<p className="text-slate-600 text-sm text-center">Parcerias com redes e escolas</p>
								</div>
							</div>

							<div className="flex flex-col items-center gap-2 max-w-[220px]">
								<div className="p-3 bg-white rounded-md shadow-sm inline-flex items-center justify-center">
									<Info className="w-6 h-6 text-[#FF9359]" />
								</div>
								<div>
								<p className="text-slate-800 font-medium text-center">Transparência</p>
								<p className="text-slate-600 text-sm text-center">Dados acessíveis e relatórios claros</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
