"use client";

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import './Dados.css';

interface BigNumber {
  label: string;
  value: string | number;
  icon: string;
}

interface GraficoLinha {
  mes: string;
  aplicacoes: number;
}

interface GraficoBarras {
  estado: string;
  aplicacoes: number;
}

interface GraficoPizza {
  name: string;
  value: number;
  [key: string]: string | number;
}

const Dados: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dados dos Números Finais
  const bigNumbers: BigNumber[] = [
    {
      label: 'Total de Escolas na Amostra',
      value: '6.241',
      icon: '🏫',
    },
    {
      label: 'Total de Aplicações Realizadas',
      value: '1.815',
      icon: '📋',
    },
    {
      label: 'Escolas Prioritárias Alcançadas',
      value: '526',
      icon: '⭐',
    },
    {
      label: 'Tentativas de Contato',
      value: '+7.890',
      icon: '📞',
    },
  ];

  // Dados - Avanço da Coleta
  const avancoColeta: GraficoLinha[] = [
    { mes: 'Agosto', aplicacoes: 891 },
    { mes: 'Setembro', aplicacoes: 1350 },
    { mes: 'Outubro', aplicacoes: 1815 },
  ];

  // Dados - Aplicações por UF (Top 3)
  const aplicacoesPorUF: GraficoBarras[] = [
    { estado: 'São Paulo (SP)', aplicacoes: 385 },
    { estado: 'Minas Gerais (MG)', aplicacoes: 278 },
    { estado: 'Rio Grande do Sul (RS)', aplicacoes: 215 },
    { estado: 'Bahia (BA)', aplicacoes: 185 },
    { estado: 'Paraná (PR)', aplicacoes: 152 },
    { estado: 'Outros', aplicacoes: 600 },
  ];

  // Dados - Distribuição de e-mails Help-desk
  const distribuicaoHelpdesk: GraficoPizza[] = [
    { name: 'Pedidos de Reenvio de Acesso', value: 51 },
    { name: 'Dúvidas de Preenchimento', value: 19 },
    { name: 'Problemas Técnicos', value: 18 },
    { name: 'Outros', value: 12 },
  ];

  // Ajustes para mobile no gráfico de barras
  const barChartHeight = isMobile ? 360 : 300;
  const chartTopMargin = isMobile ? 40 : 30; // aumenta espaço superior para evitar corte
  const barChartMargin = isMobile
    ? { top: chartTopMargin, right: 20, left: 20, bottom: 70 }
    : { top: chartTopMargin, right: 30, left: 30, bottom: 20 };
  const lineChartMargin = { top: chartTopMargin, right: 20, left: 20, bottom: 20 };
  const pieChartMargin = { top: chartTopMargin, right: 20, left: 20, bottom: 20 };
  const formatEstadoTick = (value: string) => {
    if (!isMobile) return value;
    const m = value.match(/\(([^)]+)\)/); // pega a sigla entre parênteses, ex: (SP)
    if (m) return m[1];
    // se não tiver parênteses, encurta para evitar quebra
    return value.length > 10 ? `${value.slice(0, 10)}...` : value;
  };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <section className="dados-container" id="dados">
      <header className="dados-header">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 text-center">
          <BarChart3 className="w-8 h-8 inline mr-2 text-orange-400" />
          Dados da Coleta - ColetaPNLD
        </h2>
      </header>

      {/* Seção: Números Finais */}
      <section className="secao-numeros">
        
        <div className="grid-numeros">
          {bigNumbers.map((item, index) => (
            <div key={index} className="card-numero">
              <span className="icon-numero">{item.icon}</span>
              <p className="label-numero">{item.label}</p>
              <h3 className="valor-numero">{item.value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Seção: Avanço da Coleta */}
      <section className="secao-grafico">
        <h2>Avanço das Aplicações no Período</h2>
        <div className="container-grafico">
          <ResponsiveContainer width="100%" height={300} style={{ overflow: 'visible' }}>
            <LineChart data={avancoColeta} margin={lineChartMargin}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="aplicacoes"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 6 }}
                activeDot={{ r: 8 }}
                name="Aplicações" // Abreviado
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Seção: Distribuição Geográfica */}
      <section className="secao-grafico">
        <h2>Aplicações por Unidade Federativa</h2>
        <div className="container-grafico">
          <ResponsiveContainer width="100%" height={barChartHeight} style={{ overflow: 'visible' }}>
            <BarChart data={aplicacoesPorUF} margin={barChartMargin}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="estado"
                tickFormatter={formatEstadoTick}
                interval={0}
                angle={isMobile ? -45 : 0}
                textAnchor={isMobile ? 'end' : 'middle'}
                height={isMobile ? 80 : 30}
              />
              <YAxis />
              <Tooltip />
              <Legend
                verticalAlign={isMobile ? "bottom" : "top"}
                height={isMobile ? 36 : 20}
                wrapperStyle={isMobile ? { marginTop: 8 } : {}}
              />
              <Bar
                dataKey="aplicacoes"
                fill="#10b981"
                name={isMobile ? "Aplic." : "Aplicações"}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Seção: Help-desk */}
      <section className="secao-grafico">
        <h2>Bastidores do Suporte - Distribuição de E-mails Help-desk</h2>
        <div className="container-grafico container-pizza">
          <ResponsiveContainer width="100%" height={300} style={{ overflow: 'visible' }}>
            <PieChart margin={pieChartMargin}>
               <Pie
                 data={distribuicaoHelpdesk}
                 cx="50%"
                 cy="50%"
                 labelLine={false}
                 label={isMobile ? ({ name, value }) => `${(name as string)?.charAt(0) || '?'}: ${value}%` : ({ name, value }) => `${name || 'N/A'}: ${value}%`}
                 outerRadius={isMobile ? 60 : 100}
                 fill="#8884d8"
                 dataKey="value"
               >
                 {distribuicaoHelpdesk.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                 ))}
               </Pie>
               <Tooltip />
             </PieChart>
           </ResponsiveContainer>
        </div>
      </section>

      {/* Seção: Insights */}
      <section className="secao-insights">
        <h2>Principais Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <h3>📈 Crescimento Acelerado</h3>
            <p>Aumento de 104% nas aplicações entre agosto e outubro, demonstrando a efetividade da estratégia de coleta.</p>
          </div>
          <div className="insight-card">
            <h3>🗺️ Concentração Regional</h3>
            <p>SP, MG e RS respondem por 37% do total de aplicações, evidenciando a maior penetração nestas regiões.</p>
          </div>
          <div className="insight-card">
            <h3>🤝 Suporte Proativo</h3>
            <p>70% dos chamados relacionados a acesso e preenchimento indicam necessidade de melhorias na experiência do usuário.</p>
          </div>
          <div className="insight-card">
            <h3>📊 Amostra Representativa</h3>
            <p>526 escolas prioritárias alcançadas garantem cobertura das instituições mais relevantes para a pesquisa.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dados;