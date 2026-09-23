import type { Language } from "@/i18n";

type FaqContent = {
  title: string;
  intro: string;
  items: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export const faq: Record<Language, FaqContent> = {
  en: {
    title: "Frequently Asked Questions",
    intro: "Straight answers to the questions families ask me most.",
    items: [
      {
        q: "Is the consultation really free?",
        a: "Yes. The consultation is free and there's no obligation to buy anything. We'll talk about your family, your goals, and your budget, and I'll explain your options in plain language.",
      },
      {
        q: "How much life insurance do I need?",
        a: "It depends on your income, your debts, your mortgage, and the people who rely on you. A common starting point is enough coverage to replace several years of income and pay off major debts, but I'll help you find a number that fits your family and your budget.",
      },
      {
        q: "What's the difference between term and permanent life insurance?",
        a: "Term life insurance covers you for a set period, such as 10, 20, or 30 years, and is usually the most affordable way to get a large amount of coverage. Permanent life insurance, such as whole life or indexed universal life (IUL), is designed to last your entire life and can build cash value over time.",
      },
      {
        q: "What is an IUL?",
        a: "An Indexed Universal Life (IUL) policy is permanent life insurance whose cash value can earn interest linked to a market index, like the S&P 500, with a floor so credited interest doesn't go below a set minimum when the market falls. It can be part of a long-term retirement strategy. IULs have costs and limits and aren't right for everyone, so I'll walk you through exactly how they work before you decide.",
      },
      {
        q: "What are living benefits?",
        a: "Living benefits let you access part of your death benefit early if you're diagnosed with a qualifying chronic, critical, or terminal illness, so the money can help while you're still here. Availability and terms vary by policy and carrier.",
      },
      {
        q: "What is mortgage protection?",
        a: "Mortgage protection is life insurance designed to pay off or cover your mortgage if you pass away, so your family can stay in their home. Many of these policies can also include living benefits.",
      },
      {
        q: "Will I need a medical exam?",
        a: "Not always. Many policies can be approved with just a health questionnaire, while others require a short exam. It depends on your age, your health, and the amount of coverage.",
      },
      {
        q: "Do you work with clients in Spanish and Portuguese?",
        a: "Yes. I serve clients in English, Spanish, and Portuguese. You can switch the language of this site at the top of the page.",
      },
      {
        q: "What happens after I send a message?",
        a: "I'll reach out, usually within a few hours, to learn about your needs and set up a time to talk. Your information is never sold. See the Privacy Policy for details.",
      },
      {
        q: "How can I join your team?",
        a: "Choose \"Joining the Team\" in the contact form and tell me a little about yourself. I'll get back to you with the next steps.",
      },
    ],
    ctaTitle: "Still have questions?",
    ctaText: "Send me a message and I'll get back to you.",
    ctaButton: "Send a Message",
  },
  es: {
    title: "Preguntas Frecuentes",
    intro: "Respuestas claras a las preguntas que las familias me hacen con más frecuencia.",
    items: [
      {
        q: "¿La consulta es realmente gratis?",
        a: "Sí. La consulta es gratuita y no tienes ninguna obligación de comprar. Hablaremos de tu familia, tus metas y tu presupuesto, y te explicaré tus opciones en palabras sencillas.",
      },
      {
        q: "¿Cuánto seguro de vida necesito?",
        a: "Depende de tus ingresos, tus deudas, tu hipoteca y las personas que dependen de ti. Un punto de partida común es una cobertura suficiente para reemplazar varios años de ingresos y pagar las deudas principales, pero te ayudaré a encontrar una cantidad que se ajuste a tu familia y a tu presupuesto.",
      },
      {
        q: "¿Cuál es la diferencia entre un seguro de vida a término y uno permanente?",
        a: "El seguro de vida a término te cubre durante un período fijo, como 10, 20 o 30 años, y suele ser la forma más económica de obtener una cobertura alta. El seguro de vida permanente, como el de vida entera o el de vida universal indexada (IUL), está diseñado para durar toda tu vida y puede acumular valor en efectivo con el tiempo.",
      },
      {
        q: "¿Qué es un IUL?",
        a: "Un seguro de Vida Universal Indexada (IUL) es un seguro de vida permanente cuyo valor en efectivo puede generar intereses vinculados a un índice del mercado, como el S&P 500, con un piso para que el interés acreditado no baje de un mínimo establecido cuando el mercado cae. Puede formar parte de una estrategia de jubilación a largo plazo. Los IUL tienen costos y límites y no son para todos, así que te explicaré exactamente cómo funcionan antes de que decidas.",
      },
      {
        q: "¿Qué son los beneficios en vida?",
        a: "Los beneficios en vida te permiten acceder a una parte de tu beneficio por fallecimiento por adelantado si te diagnostican una enfermedad crónica, crítica o terminal que califique, para que el dinero te ayude mientras sigues aquí. La disponibilidad y las condiciones varían según la póliza y la compañía.",
      },
      {
        q: "¿Qué es la protección hipotecaria?",
        a: "La protección hipotecaria es un seguro de vida diseñado para pagar o cubrir tu hipoteca si falleces, para que tu familia pueda quedarse en su hogar. Muchas de estas pólizas también pueden incluir beneficios en vida.",
      },
      {
        q: "¿Necesitaré un examen médico?",
        a: "No siempre. Muchas pólizas se pueden aprobar solo con un cuestionario de salud, mientras que otras requieren un examen breve. Depende de tu edad, tu salud y el monto de la cobertura.",
      },
      {
        q: "¿Atiendes a clientes en español y portugués?",
        a: "Sí. Atiendo a clientes en inglés, español y portugués. Puedes cambiar el idioma de este sitio en la parte superior de la página.",
      },
      {
        q: "¿Qué pasa después de enviar un mensaje?",
        a: "Me pondré en contacto contigo, normalmente en pocas horas, para conocer tus necesidades y acordar un momento para hablar. Tu información nunca se vende. Consulta la Política de Privacidad para más detalles.",
      },
      {
        q: "¿Cómo puedo unirme a tu equipo?",
        a: "Elige \"Unirme al Equipo\" en el formulario de contacto y cuéntame un poco sobre ti. Te responderé con los próximos pasos.",
      },
    ],
    ctaTitle: "¿Todavía tienes preguntas?",
    ctaText: "Envíame un mensaje y te responderé.",
    ctaButton: "Enviar un Mensaje",
  },
  pt: {
    title: "Perguntas Frequentes",
    intro: "Respostas diretas às perguntas que as famílias mais me fazem.",
    items: [
      {
        q: "A consulta é realmente gratuita?",
        a: "Sim. A consulta é gratuita e você não tem nenhuma obrigação de comprar. Vamos conversar sobre sua família, seus objetivos e seu orçamento, e vou explicar suas opções de forma simples.",
      },
      {
        q: "De quanto seguro de vida eu preciso?",
        a: "Depende da sua renda, das suas dívidas, do seu financiamento imobiliário e das pessoas que dependem de você. Um ponto de partida comum é uma cobertura suficiente para substituir vários anos de renda e quitar as principais dívidas, mas vou ajudar você a encontrar um valor que se encaixe na sua família e no seu orçamento.",
      },
      {
        q: "Qual é a diferença entre seguro de vida temporário e permanente?",
        a: "O seguro de vida temporário (term) cobre você por um período fixo, como 10, 20 ou 30 anos, e costuma ser a forma mais acessível de obter uma cobertura alta. O seguro de vida permanente, como o de vida inteira ou o de vida universal indexada (IUL), foi criado para durar a vida toda e pode acumular valor em dinheiro ao longo do tempo.",
      },
      {
        q: "O que é um IUL?",
        a: "Um seguro de Vida Universal Indexada (IUL) é um seguro de vida permanente cujo valor em dinheiro pode render juros vinculados a um índice de mercado, como o S&P 500, com um piso para que os juros creditados não fiquem abaixo de um mínimo definido quando o mercado cai. Ele pode fazer parte de uma estratégia de aposentadoria de longo prazo. Os IULs têm custos e limites e não são para todos, então vou explicar exatamente como funcionam antes de você decidir.",
      },
      {
        q: "O que são benefícios em vida?",
        a: "Os benefícios em vida permitem que você acesse parte do seu benefício por morte antecipadamente se for diagnosticado com uma doença crônica, grave ou terminal que se qualifique, para que o dinheiro ajude enquanto você ainda está aqui. A disponibilidade e as condições variam conforme a apólice e a seguradora.",
      },
      {
        q: "O que é proteção hipotecária?",
        a: "A proteção hipotecária é um seguro de vida criado para quitar ou cobrir o seu financiamento imobiliário caso você faleça, para que sua família possa continuar em casa. Muitas dessas apólices também podem incluir benefícios em vida.",
      },
      {
        q: "Vou precisar fazer exame médico?",
        a: "Nem sempre. Muitas apólices podem ser aprovadas apenas com um questionário de saúde, enquanto outras exigem um exame rápido. Depende da sua idade, da sua saúde e do valor da cobertura.",
      },
      {
        q: "Você atende clientes em espanhol e português?",
        a: "Sim. Atendo clientes em inglês, espanhol e português. Você pode mudar o idioma deste site no topo da página.",
      },
      {
        q: "O que acontece depois que eu envio uma mensagem?",
        a: "Vou entrar em contato, geralmente em poucas horas, para entender suas necessidades e marcar um horário para conversarmos. Suas informações nunca são vendidas. Veja a Política de Privacidade para mais detalhes.",
      },
      {
        q: "Como posso fazer parte da sua equipe?",
        a: "Escolha \"Fazer Parte da Equipe\" no formulário de contato e conte um pouco sobre você. Vou responder com os próximos passos.",
      },
    ],
    ctaTitle: "Ainda tem dúvidas?",
    ctaText: "Envie uma mensagem e eu retorno para você.",
    ctaButton: "Enviar Mensagem",
  },
};
