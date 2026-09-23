import type { Language } from "@/i18n";

type Section = { heading: string; paragraphs?: string[]; bullets?: string[] };
type PrivacyContent = { title: string; updated: string; intro: string; sections: Section[] };

export const privacy: Record<Language, PrivacyContent> = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: September 22, 2026",
    intro:
      "This Privacy Policy explains how Matheus Campos (\"I\" or \"me\"), an independent life insurance agent (NPN 22343676), collects, uses, and protects your information when you visit this website or contact me through it.",
    sections: [
      {
        heading: "Information I collect",
        paragraphs: [
          "When you submit the contact form, I receive the information you choose to provide: your name, phone number, email address, state, the service you're interested in, and your message.",
          "Like most websites, this site's hosting provider automatically records basic technical information, such as your IP address, browser type, and the pages you visit, to operate and protect the site. Fonts are loaded from Google Fonts, which also receives your IP address when the page loads.",
          "This site does not use advertising or analytics cookies. It only saves your language preference in your browser so the site remembers it on your next visit.",
        ],
      },
      {
        heading: "How I use your information",
        bullets: [
          "To respond to your message and answer your questions.",
          "To prepare quotes and consultations for the services you ask about.",
          "With your permission, to submit applications to insurance carriers on your behalf.",
          "To meet legal and insurance regulatory requirements.",
        ],
      },
      {
        heading: "How I contact you",
        paragraphs: [
          "If you submit the contact form, I may reach out by phone, text message, or email about your inquiry. You can ask me to stop contacting you at any time. For text messages, reply STOP.",
        ],
      },
      {
        heading: "How your information is shared",
        paragraphs: ["I do not sell or rent your personal information. I share it only:"],
        bullets: [
          "With insurance carriers and the agency I work with, when needed to provide a quote or process an application you request.",
          "With service providers that help run this website, such as Vercel (hosting) and Web3Forms (delivering contact form messages to me). They may use your information only to provide those services.",
          "When required by law or to protect my legal rights.",
        ],
      },
      {
        heading: "Security and retention",
        paragraphs: [
          "I take reasonable steps to protect your information, but no website or method of transmission is completely secure. I keep your information only as long as needed for the purposes above or as required by law and insurance record-keeping rules.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You can ask me to access, correct, or delete the personal information I have about you by sending a message through the contact form. Residents of some states, such as California, may have additional privacy rights, and I will honor those requests as required by law.",
        ],
      },
      {
        heading: "Children's privacy",
        paragraphs: [
          "This website is not directed to children under 13, and I do not knowingly collect information from them.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "I may update this policy from time to time. The date at the top of this page shows when it was last changed.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Questions about this policy? Send me a message through the contact form on the home page."],
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 22 de septiembre de 2026",
    intro:
      "Esta Política de Privacidad explica cómo Matheus Campos (\"yo\"), agente independiente de seguros de vida (NPN 22343676), recopila, utiliza y protege tu información cuando visitas este sitio web o me contactas a través de él.",
    sections: [
      {
        heading: "Información que recopilo",
        paragraphs: [
          "Cuando envías el formulario de contacto, recibo la información que decides proporcionar: tu nombre, número de teléfono, correo electrónico, estado, el servicio que te interesa y tu mensaje.",
          "Como la mayoría de los sitios web, el proveedor de alojamiento de este sitio registra automáticamente información técnica básica, como tu dirección IP, tipo de navegador y las páginas que visitas, para operar y proteger el sitio. Las fuentes tipográficas se cargan desde Google Fonts, que también recibe tu dirección IP al cargar la página.",
          "Este sitio no utiliza cookies de publicidad ni de análisis. Solo guarda tu preferencia de idioma en tu navegador para recordarla en tu próxima visita.",
        ],
      },
      {
        heading: "Cómo uso tu información",
        bullets: [
          "Para responder a tu mensaje y a tus preguntas.",
          "Para preparar cotizaciones y consultas sobre los servicios que solicitas.",
          "Con tu permiso, para enviar solicitudes a compañías de seguros en tu nombre.",
          "Para cumplir con requisitos legales y regulatorios de seguros.",
        ],
      },
      {
        heading: "Cómo me comunico contigo",
        paragraphs: [
          "Si envías el formulario de contacto, puedo comunicarme contigo por teléfono, mensaje de texto o correo electrónico sobre tu consulta. Puedes pedirme que deje de contactarte en cualquier momento. Para mensajes de texto, responde STOP.",
        ],
      },
      {
        heading: "Cómo se comparte tu información",
        paragraphs: ["No vendo ni alquilo tu información personal. Solo la comparto:"],
        bullets: [
          "Con compañías de seguros y la agencia con la que trabajo, cuando sea necesario para darte una cotización o procesar una solicitud que tú pidas.",
          "Con proveedores de servicios que ayudan a operar este sitio, como Vercel (alojamiento) y Web3Forms (que me entrega los mensajes del formulario). Solo pueden usar tu información para prestar esos servicios.",
          "Cuando lo exija la ley o para proteger mis derechos legales.",
        ],
      },
      {
        heading: "Seguridad y conservación",
        paragraphs: [
          "Tomo medidas razonables para proteger tu información, pero ningún sitio web ni método de transmisión es completamente seguro. Conservo tu información solo el tiempo necesario para los fines anteriores o según lo exijan la ley y las normas de registro del sector de seguros.",
        ],
      },
      {
        heading: "Tus opciones",
        paragraphs: [
          "Puedes pedirme acceder, corregir o eliminar la información personal que tengo sobre ti enviando un mensaje a través del formulario de contacto. Los residentes de algunos estados, como California, pueden tener derechos de privacidad adicionales, y atenderé esas solicitudes según lo exija la ley.",
        ],
      },
      {
        heading: "Privacidad de menores",
        paragraphs: [
          "Este sitio web no está dirigido a menores de 13 años y no recopilo información de ellos de manera intencional.",
        ],
      },
      {
        heading: "Cambios a esta política",
        paragraphs: [
          "Puedo actualizar esta política ocasionalmente. La fecha al inicio de esta página indica cuándo se modificó por última vez.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: ["¿Preguntas sobre esta política? Envíame un mensaje a través del formulario de contacto en la página de inicio."],
      },
    ],
  },
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: 22 de setembro de 2026",
    intro:
      "Esta Política de Privacidade explica como Matheus Campos (\"eu\"), agente independente de seguros de vida (NPN 22343676), coleta, usa e protege suas informações quando você visita este site ou entra em contato comigo por meio dele.",
    sections: [
      {
        heading: "Informações que coleto",
        paragraphs: [
          "Quando você envia o formulário de contato, recebo as informações que você escolhe fornecer: seu nome, telefone, e-mail, estado, o serviço de seu interesse e sua mensagem.",
          "Como a maioria dos sites, o provedor de hospedagem deste site registra automaticamente informações técnicas básicas, como seu endereço IP, tipo de navegador e as páginas que você visita, para operar e proteger o site. As fontes são carregadas do Google Fonts, que também recebe seu endereço IP quando a página é carregada.",
          "Este site não usa cookies de publicidade nem de análise. Ele apenas salva sua preferência de idioma no seu navegador para lembrá-la na sua próxima visita.",
        ],
      },
      {
        heading: "Como uso suas informações",
        bullets: [
          "Para responder à sua mensagem e às suas perguntas.",
          "Para preparar cotações e consultas sobre os serviços que você solicitar.",
          "Com sua permissão, para enviar propostas às seguradoras em seu nome.",
          "Para cumprir exigências legais e regulatórias do setor de seguros.",
        ],
      },
      {
        heading: "Como entro em contato com você",
        paragraphs: [
          "Se você enviar o formulário de contato, posso entrar em contato por telefone, mensagem de texto ou e-mail sobre a sua solicitação. Você pode me pedir para parar de entrar em contato a qualquer momento. Para mensagens de texto, responda STOP.",
        ],
      },
      {
        heading: "Como suas informações são compartilhadas",
        paragraphs: ["Não vendo nem alugo suas informações pessoais. Eu as compartilho apenas:"],
        bullets: [
          "Com seguradoras e com a agência com a qual trabalho, quando necessário para fornecer uma cotação ou processar uma proposta que você solicitar.",
          "Com prestadores de serviço que ajudam a operar este site, como a Vercel (hospedagem) e o Web3Forms (que me entrega as mensagens do formulário). Eles só podem usar suas informações para prestar esses serviços.",
          "Quando exigido por lei ou para proteger meus direitos legais.",
        ],
      },
      {
        heading: "Segurança e retenção",
        paragraphs: [
          "Adoto medidas razoáveis para proteger suas informações, mas nenhum site ou método de transmissão é totalmente seguro. Mantenho suas informações apenas pelo tempo necessário para as finalidades acima ou conforme exigido por lei e pelas normas de registro do setor de seguros.",
        ],
      },
      {
        heading: "Suas escolhas",
        paragraphs: [
          "Você pode me pedir para acessar, corrigir ou excluir as informações pessoais que tenho sobre você enviando uma mensagem pelo formulário de contato. Residentes de alguns estados, como a Califórnia, podem ter direitos de privacidade adicionais, e atenderei a essas solicitações conforme exigido por lei.",
        ],
      },
      {
        heading: "Privacidade de menores",
        paragraphs: [
          "Este site não é direcionado a menores de 13 anos, e não coleto informações deles intencionalmente.",
        ],
      },
      {
        heading: "Alterações nesta política",
        paragraphs: [
          "Posso atualizar esta política de tempos em tempos. A data no início desta página mostra quando ela foi alterada pela última vez.",
        ],
      },
      {
        heading: "Contato",
        paragraphs: ["Dúvidas sobre esta política? Envie uma mensagem pelo formulário de contato na página inicial."],
      },
    ],
  },
};
