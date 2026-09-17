// Dados centrais da academia — edite aqui para atualizar o site inteiro.

export const brand = {
  name: "Arena Fitness",
  fullName: "Arena Fitness Academia",
  instagramHandle: "@arenafitness41",
  instagramUrl: "https://www.instagram.com/arenafitness41",
  city: "Redenção",
  state: "CE",
  // Se este endereço mudar, atualize também o bloco application/ld+json em index.html.
  address: "R. Maj. José Gabriel, 133 - Centro, Redenção - CE, 62790-000",
  mapsUrl: "https://maps.app.goo.gl/5dT6SwsCEFsbMeDFA",
  phoneDisplay: "(88) 3614-1069",
  phoneHref: "tel:+558836141069",
  // Ajuste para o número de WhatsApp real da recepção quando disponível.
  whatsappNumber: "558836141069",
  whatsappMessage: "Olá! Vim pelo site e quero saber mais sobre os planos da Arena Fitness 💪",
};

// IDs de rastreamento — deixe em branco até criar as contas. Enquanto estiverem vazios,
// nenhum script de analytics é carregado (veja src/lib/analytics.ts).
export const analytics = {
  // Google Analytics 4 → Admin > Fluxos de dados > seu fluxo da Web. Formato: "G-XXXXXXXXXX"
  ga4MeasurementId: "",
  // Meta Events Manager > Pixels > seu pixel. É um número, ex: "1234567890123456"
  metaPixelId: "",
};

// Gerado a partir de brand.fullName + brand.address para nunca ficar dessincronizado do endereço real.
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${brand.fullName}, ${brand.address}`,
)}&output=embed`;

export const hours = [
  { label: "Segunda a Sexta", value: "05h às 23h" },
  { label: "Sábado", value: "07h às 16h" },
  { label: "Domingo", value: "08h às 12h" },
];

export const stats = [
  { value: "6.200+", label: "Seguidores no Instagram" },
  { value: "05h–23h", label: "Horário estendido de segunda a sexta" },
  { value: "50%", label: "OFF na matrícula para quem retorna" },
  { value: "100%", label: "Foco em resultado e consistência" },
];

export const benefits = [
  {
    title: "Horário estendido",
    description: "Funcionamos das 5h às 23h de segunda a sexta, para treinar no seu horário — antes do trabalho, no almoço ou à noite.",
    icon: "Clock",
  },
  {
    title: "Professores especializados",
    description: "Equipe de educadores físicos e personal trainers acompanhando sua evolução de perto, com correção de execução em todo treino.",
    icon: "Users",
  },
  {
    title: "Estrutura completa",
    description: "Musculação, área funcional e espaço cardio equipados para todos os níveis, do iniciante ao avançado.",
    icon: "Dumbbell",
  },
  {
    title: "Localização privilegiada",
    description: "No Centro, em Redenção, com fácil acesso e estacionamento — sem desculpa para faltar o treino.",
    icon: "MapPin",
  },
  {
    title: "Comunidade que motiva",
    description: "Um ambiente acolhedor e motivador, onde consistência importa mais que perfeição.",
    icon: "Flame",
  },
  {
    title: "Avaliação física inclusa",
    description: "Avaliação física na matrícula para montar um plano de treino alinhado com seu objetivo.",
    icon: "ClipboardCheck",
  },
];

export const modalities = [
  {
    title: "Musculação",
    description: "Treinos de força e hipertrofia com equipamentos modernos e acompanhamento técnico.",
  },
  {
    title: "Treino Funcional",
    description: "Aulas dinâmicas que trabalham força, resistência e mobilidade em um só treino.",
  },
  {
    title: "Cardio & Condicionamento",
    description: "Espaço dedicado para melhorar seu condicionamento e queimar calorias.",
  },
  {
    title: "Treino Personalizado",
    description: "Acompanhamento individual com personal trainer para acelerar seus resultados.",
  },
];

export const plans = [
  {
    name: "Mensal",
    price: "R$ 99",
    period: "/mês",
    highlight: false,
    features: [
      "Acesso à musculação e funcional",
      "Avaliação física inclusa",
      "Horário estendido (5h–23h)",
      "Sem taxa de cancelamento",
    ],
  },
  {
    name: "Trimestral",
    price: "R$ 89",
    period: "/mês",
    highlight: true,
    badge: "Mais escolhido",
    features: [
      "Tudo do plano mensal",
      "Matrícula com 50% OFF",
      "1 avaliação de reavaliação",
      "Prioridade em horários de personal",
    ],
  },
  {
    name: "Anual",
    price: "R$ 79",
    period: "/mês",
    highlight: false,
    features: [
      "Tudo do plano trimestral",
      "Matrícula grátis",
      "Reavaliações trimestrais",
      "2 congelamentos por ano",
    ],
  },
];

// Depoimentos ilustrativos — substitua pelos relatos reais dos alunos e, se possível,
// pelas avaliações públicas do perfil no Google/Instagram da Arena Fitness.
export const testimonials = [
  {
    name: "Camila R.",
    role: "Aluna há 8 meses",
    quote:
      "Treino antes do trabalho porque a academia abre às 5h. Os professores corrigem minha postura toda vez e isso mudou meus resultados.",
  },
  {
    name: "Marcos A.",
    role: "Aluno há 1 ano",
    quote:
      "Ambiente motivador de verdade. Saí do sedentarismo e hoje treino funcional 4x por semana sem preguiça de ir.",
  },
  {
    name: "Juliana P.",
    role: "Aluna há 3 meses",
    quote:
      "Voltei para a academia depois de um tempo parada e o desconto na matrícula ajudou muito. Equipe super atenciosa.",
  },
];

export const faqs = [
  {
    question: "Preciso agendar a aula experimental?",
    answer:
      "Não precisa. Basta chegar na Arena Fitness ou falar com a gente pelo WhatsApp que já te recebemos para conhecer a estrutura e treinar.",
  },
  {
    question: "Tem taxa de matrícula?",
    answer:
      "Sim, mas quem está retornando à academia tem 50% de desconto na matrícula. Fale com a recepção para confirmar as condições atuais.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Segunda a sexta das 5h às 23h, sábado das 7h às 16h e domingo das 8h às 12h.",
  },
  {
    question: "A academia oferece acompanhamento de personal trainer?",
    answer:
      "Sim, temos profissionais disponíveis para treino personalizado, além do acompanhamento padrão da equipe em todos os planos.",
  },
  {
    question: "Posso cancelar ou trancar meu plano?",
    answer:
      "Sim, as condições variam por plano — os planos trimestral e anual contam com opções de congelamento. Consulte a recepção para os detalhes.",
  },
];
