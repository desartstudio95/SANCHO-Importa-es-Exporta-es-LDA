import React from 'react';
import { Truck, Sprout, ShieldCheck, TrendingUp, Users, Package, HardHat, Cog, Globe, Wrench, Warehouse, Wallet, Headset } from 'lucide-react';
import { ServiceItem, ProductCategory } from './types';

export const COMPANY_NAME = "SANCHO – Importações & Exportações LDA";
export const PHONE_1 = "+258 84 422 8160";
export const WHATSAPP_LINK = "https://wa.link/vbzehq";
export const EMAIL = "anisiosancho8@gmail.com";
export const ADDRESS = "Cidade de Maputo, Bairro Alto Maé, Avenida Eduardo Mondlane N°3112 1°Andar";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Cidade+de+Maputo+Bairro+Alto+Maé+Avenida+Eduardo+Mondlane+3112";

export const FAQ_ITEMS = [
  {
    question: "Como posso solicitar uma cotação?",
    answer: "Você pode solicitar uma cotação através do nosso simulador de importação, enviando uma mensagem pelo WhatsApp ou preenchendo o formulário na página de contactos."
  },
  {
    question: "Quais marcas vocês representam?",
    answer: "Somos representantes oficiais e parceiros de marcas líderes como SANY, SDLG, Menegotti, Toyama, Shacman e Caterpillar."
  },
  {
    question: "Vocês fazem entregas em todo o país?",
    answer: "Sim, realizamos entregas em todas as províncias de Moçambique, cuidando de toda a logística e transporte necessário."
  },
  {
    question: "Quais são os prazos médios de importação?",
    answer: "Os prazos variam dependendo da origem e do método de envio. O frete marítimo geralmente leva de 30 a 60 dias, enquanto o aéreo pode levar de 7 a 15 dias."
  }
];

export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Contactos', href: '/contactos' },
];

export const HERO_CONTENT = {
  title: "Soluções completas em Máquinas, Equipamentos Industriais e Logística",
  subtitle: "Representante oficial de marcas líderes como SANY, SDLG, Menegotti e Toyama. Soluções completas de importação para o seu negócio.",
};

// Summary services for Home Page
export const SERVICES: ServiceItem[] = [
  {
    title: "Máquinas de Construção",
    description: "Distribuição de marcas líderes como SANY e SDLG para grandes obras.",
    icon: <HardHat className="w-10 h-10" />
  },
  {
    title: "Produtos Industriais",
    description: "Geradores industriais e motores estacionários de alta potência.",
    icon: <Cog className="w-10 h-10" />
  },
  {
    title: "Agricultura",
    description: "Tratores, implementos e sistemas de irrigação para o campo.",
    icon: <Sprout className="w-10 h-10" />
  },
  {
    title: "Logística e Camiões",
    description: "Camiões basculantes, gruas e empilhadeiras para movimentação de carga.",
    icon: <Truck className="w-10 h-10" />
  }
];

// Detailed services for Services Page
export const DETAILED_SERVICES_PAGE = [
  {
    title: "Importação e Exportação",
    description: "Serviços completos de importação e exportação de máquinas e equipamentos industriais com toda a documentação e logística necessária.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000",
    icon: <Globe size={28} />,
    features: [
      "Gestão completa de documentação",
      "Desembaraço aduaneiro",
      "Transporte internacional",
      "Seguro de mercadorias"
    ]
  },
  {
    title: "Fornecimento de Equipamentos",
    description: "Fornecemos máquinas e equipamentos de alta qualidade para construção, indústria e agricultura de marcas reconhecidas internacionalmente.",
    image: "https://images.unsplash.com/photo-1505833464198-4993b36cdfab?q=80&w=870&auto=format&fit=crop",
    icon: <Truck size={28} />,
    features: [
      "Equipamentos certificados",
      "Marcas internacionais (SANY, SDLG)",
      "Garantia de qualidade",
      "Entrega em todo país"
    ]
  },
  {
    title: "Consultoria Técnica",
    description: "Equipe especializada para auxiliar na escolha dos equipamentos ideais para suas necessidades específicas e projetos.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000",
    icon: <Headset size={28} />,
    features: [
      "Análise de necessidades",
      "Recomendações personalizadas",
      "Suporte técnico especializado",
      "Acompanhamento de projetos"
    ]
  },
  {
    title: "Manutenção e Suporte",
    description: "Serviços de manutenção preventiva e corretiva para garantir o máximo desempenho e durabilidade dos seus equipamentos.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=1000",
    icon: <Wrench size={28} />,
    features: [
      "Manutenção preventiva",
      "Reparos e assistência técnica",
      "Peças de reposição originais",
      "Suporte pós-venda"
    ]
  },
  {
    title: "Logística e Armazenamento",
    description: "Soluções completas de logística e armazenamento seguro para gestão eficiente de mercadorias e equipamentos.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    icon: <Warehouse size={28} />,
    features: [
      "Armazém seguro e moderno",
      "Gestão de inventário",
      "Distribuição eficiente",
      "Rastreamento de mercadorias"
    ]
  },
  {
    title: "Soluções Financeiras",
    description: "Opções flexíveis de pagamento e financiamento para facilitar a aquisição dos equipamentos que seu negócio precisa.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    icon: <Wallet size={28} />,
    features: [
      "Planos de pagamento flexíveis",
      "Parcerias com instituições financeiras",
      "Condições especiais",
      "Cotações personalizadas"
    ]
  }
];

export const WORK_PROCESS = [
  { number: "01", title: "Contacto Inicial", desc: "Entre em contacto connosco através do WhatsApp, telefone ou formulário online" },
  { number: "02", title: "Análise de Necessidades", desc: "Nossa equipe analisa suas necessidades e recomenda as melhores soluções" },
  { number: "03", title: "Proposta Personalizada", desc: "Elaboramos uma proposta detalhada com preços, prazos e condições" },
  { number: "04", title: "Processamento", desc: "Cuidamos de toda a logística, documentação e importação" },
  { number: "05", title: "Entrega e Suporte", desc: "Entregamos o equipamento e oferecemos suporte contínuo" },
];

export const VALUES = [
  { 
    title: "Qualidade", 
    description: "Produtos certificados e de alta durabilidade para garantir o melhor desempenho",
    icon: <ShieldCheck className="w-10 h-10 text-sancho-primary" /> 
  },
  { 
    title: "Confiança", 
    description: "Parceiros confiáveis com anos de experiência no mercado internacional",
    icon: <Users className="w-10 h-10 text-sancho-primary" /> 
  },
  { 
    title: "Compromisso", 
    description: "Dedicação total ao sucesso e crescimento dos nossos clientes",
    icon: <Package className="w-10 h-10 text-sancho-primary" /> 
  },
  { 
    title: "Profissionalismo", 
    description: "Excelência em cada serviço prestado com equipe altamente qualificada",
    icon: <TrendingUp className="w-10 h-10 text-sancho-primary" /> 
  },
];

export const CATALOG_DATA: ProductCategory[] = [
  {
    id: "construction",
    title: "Máquinas de Construção",
    description: "Escavadeiras, Betoneiras e Maquinaria Pesada das melhores marcas.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { 
        id: "escavadeira-sany-sy215c",
        name: "Escavadeira SANY SY215C", 
        specs: ["Capacidade: 0.93m³", "Peso: 21.9T", "Potência: 118kW"],
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_704050-MLB81540687874_012025-F-escavadeira-sany-sy215c.webp",
        fullDescription: "A SANY SY215C é a escavadeira líder de mercado, projetada para alta eficiência em terraplanagem e mineração. Possui estrutura reforçada e sistema hidráulico otimizado.",
        features: ["Motor de alta potência", "Cabine com ar condicionado", "Baixo consumo de combustível", "Alta força de escavação"]
      },
      { 
        id: "escavadeira-sany-sy500h",
        name: "Escavadeira SANY SY500H", 
        specs: ["Capacidade: 2.2m³", "Peso: 50.1T", "Potência: 298kW"],
        image: "https://img.directindustry.com/pt/images_di/photo-g/52887-16175816.webp",
        fullDescription: "Escavadeira de grande porte para mineração pesada (Tier 4F & Stage V). Robustez incomparável para os trabalhos mais exigentes.",
        features: ["Caçamba reforçada para rocha", "Sistema de filtragem avançado", "Tecnologia de economia de energia"]
      },
      { 
        id: "betoneira-menegotti-400l",
        name: "Betoneira Menegotti Prime 400L", 
        specs: ["Capacidade: 400 Litros", "Uso Profissional", "Alta Durabilidade"],
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Equipamento durável e indicado para projetos de pequeno a médio porte. Econômico e feito na medida certa para quem busca eficiência com baixo investimento.",
        features: ["Tambor estampado em chapa de aço", "Pintura eletrostática", "Fácil operação e transporte"]
      },
      { 
        id: "caminhao-betoneira-sany",
        name: "Caminhão Betoneira SANY SY412C-8", 
        specs: ["Mistura: 12m³", "Motor: P11C-UJ", "Tanque Água: 800L"],
        image: "https://images.unsplash.com/photo-1579738760089-29177b8f9708?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Caminhão betoneira SANY com capacidade de 12 metros cúbicos. Alta eficiência de mistura e descarga rápida, ideal para grandes concretagens.",
        features: ["Tecnologia anti-desgaste no tambor", "Sistema hidráulico de alta performance", "Cabine ergonômica"]
      },
      { 
        id: "motoniveladora-sdlg",
        name: "Motoniveladora SDLG G9138H", 
        specs: ["Peso: 13.275 kg", "Lâmina: 3.658 mm", "Potência: 141 hp"],
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Motoniveladora SDLG G9138H oferece precisão no nivelamento e alta força de tração. Ideal para construção de estradas e manutenção de vias.",
        features: ["Visibilidade panorâmica", "Controle hidráulico preciso", "Estrutura robusta"]
      },
      { 
        id: "rolo-vibratorio-ltc",
        name: "Rolo Vibratório LTC203", 
        specs: ["Peso: 3300 Kg", "Tambor: 1250 mm", "Tanque: 200 L"],
        image: "https://images.unsplash.com/photo-1590082695503-4f114c0003cb?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Rolo compactador vibratório ideal para compactação de asfalto e solos granulares em obras urbanas e rodoviárias.",
        features: ["Direção articulada", "Sistema de aspersão de água", "Fácil manutenção"]
      },
      { 
        id: "carregadeira-sdlg",
        name: "Pá Carregadeira SDLG L918H", 
        specs: ["Caçamba: 1.0m³", "Peso: 6.700 kg", "Potência: 88 HP"],
        image: "https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Carregadeira compacta e ágil, perfeita para movimentação de materiais em espaços reduzidos e canteiros de obras.",
        features: ["Motor econômico", "Cabine confortável", "Alta velocidade de ciclo"]
      }
    ]
  },
  {
    id: "industrial",
    title: "Produtos Industriais",
    description: "Geradores, Compressores e Motores de alta potência.",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { 
        id: "gerador-csdk-280l",
        name: "Gerador CSDK-280L (Motor Kohler)", 
        specs: ["Motor: Kohler 25HP", "Rotação: 1500 rpm", "Refrigeração: Água"],
        image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Soldadora/Gerador de 1500 rpm refrigerada a água. Melhora o desempenho em ambientes quentes e jornadas prolongadas. Fornece 280A de potência.",
        features: ["Motor Kohler confiável", "Baixo nível de ruído", "Alta durabilidade"]
      },
      { 
        id: "motor-toyama-diesel",
        name: "Motor Diesel Toyama TDWE30RE-XP", 
        specs: ["Tipo: Diesel", "Refrigeração: Água", "Partida: Elétrica"],
        image: "https://images.unsplash.com/photo-1566827068565-37336214878a?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Motor estacionário a diesel Toyama, robusto e versátil. Ideal para acoplar em bombas, geradores, barcos e máquinas agrícolas.",
        features: ["Radiador de água", "Tanque de combustível integrado", "Filtro de ar de alta eficiência"]
      },
      { 
        id: "reversor-maritimo",
        name: "Reversor Marítimo Kawashima", 
        specs: ["Potência: 45-100 HP", "Redução: 3.04:1", "Tipo: Hidráulico"],
        image: "https://images.unsplash.com/photo-1565625442598-e7c62c262194?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Reversor marítimo hidráulico com embreagens múltiplas. Garante trocas suaves e transmissão de potência eficiente para embarcações.",
        features: ["Carcaça resistente à corrosão", "Fácil instalação", "Alta confiabilidade no mar"]
      },
      { 
        id: "compressor-tekna",
        name: "Compressor de Ar Tekna CP8525", 
        specs: ["Tanque: 24L", "Potência: 2 HP", "Tensão: Bivolt"],
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Compressor de ar portátil ideal para pinturas, calibragem e acionamento de ferramentas pneumáticas leves.",
        features: ["Rodas para transporte", "Manômetro de pressão", "Válvula de segurança"]
      }
    ]
  },
  {
    id: "agriculture",
    title: "Agricultura",
    description: "Mecanização agrícola with tratores e implementos.",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c812d?q=80&w=1000&auto=format&fit=crop",
    items: [
      { 
        id: "microtrator-oleomac",
        name: "Microtrator Oleo-Mac WB65", 
        specs: ["Modelo: WB65 K 1100H", "Uso: Profissional", "Função: Triturador"],
        image: "https://images.unsplash.com/photo-1595914676579-247942702209?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Microtrator triturador profissional, ideal para limpeza de terrenos, corte de capim alto e manutenção de pomares.",
        features: ["Lâminas de alta resistência", "Rodas tratoradas", "Guidão ajustável"]
      },
      { 
        id: "rocadeira-trator",
        name: "Roçadeira Hidráulica Maqtron RT-1800", 
        specs: ["Corte: 1.8 Metros", "Acoplamento: Trator", "Lâminas: Aço"],
        image: "https://images.unsplash.com/photo-1628172901509-f9c3c54574ef?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Roçadeira agrícola para acoplamento em trator. Possui cardan, roda guia e regulagem de altura. Excelente para grandes áreas.",
        features: ["Estrutura reforçada", "Transmissão direta", "Proteção de segurança"]
      },
      { 
        id: "debulhador-milho-maqtron",
        name: "Debulhador de Milho Maqtron B-330", 
        specs: ["Acionamento: Polia V", "Alta Produção", "Separação Limpa"],
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Equipamento robusto para debulhar milho com alta eficiência. Separa o grão do sabugo e da palha com rapidez.",
        features: ["Bocal de alimentação amplo", "Saída dupla", "Fácil manutenção"]
      },
      { 
        id: "pulverizador-adventure",
        name: "Pulverizador Adventure Flex 200L", 
        specs: ["Tanque: 200 Litros", "Bomba: Elétrica 12V", "Barra: Ajustável"],
        image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Pulverizador agrícola de barra para acoplamento em veículos ou tratores pequenos. Ideal para aplicação precisa de defensivos.",
        features: ["Tanque em polietileno", "Bicos anti-gotejo", "Filtro de linha"]
      }
    ]
  },
  {
    id: "logistics",
    title: "Logística e Camiões",
    description: "Camiões basculantes e equipamentos de movimentação.",
    image: "https://images.unsplash.com/photo-1591736632420-1b707449c2d1?q=80&w=1000&auto=format&fit=crop",
    items: [
      { 
        id: "caminhao-basculante-shacman",
        name: "Camião Basculante SHACMAN", 
        specs: ["Rodas: 10 (6x4)", "Capacidade: Alta", "Motor: Potente"],
        image: "https://images.unsplash.com/photo-1591736632420-1b707449c2d1?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Camião basculante SHACMAN de 10 rodas, garantindo maior distribuição de peso e estabilidade. Ideal para pedreiras e construção pesada.",
        features: ["Chassi reforçado", "Cabine espaçosa", "Sistema de basculamento rápido"]
      },
      { 
        id: "caminhao-jiefang",
        name: "Camião FAW Jiefang J6P", 
        specs: ["Motor: CA6DK2-35E65", "Suspensão: 9/9/10", "Pneus: 11.00R20"],
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Camião de carga pesada FAW Jiefang, conhecido pela sua economia e durabilidade em longas distâncias.",
        features: ["Motor eficiente", "Eixos robustos", "Baixo custo de manutenção"]
      },
      { 
        id: "empilhadeira-cat",
        name: "Empilhadeira Caterpillar", 
        specs: ["Marca: CAT", "Combustível: Diesel/GLP", "Capacidade: Variável"],
        image: "https://images.unsplash.com/photo-1589792923962-537704632910?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Empilhadeira Caterpillar de classe mundial. Sinônimo de força e confiabilidade para movimentação de cargas em armazéns e portos.",
        features: ["Ergonomia superior", "Sistemas de segurança ativos", "Alta valor de revenda"]
      },
      { 
        id: "camiao-grua",
        name: "Camião com Grua (Munk)", 
        specs: ["Guindaste: Hidráulico", "Braço: Telescópico", "Estabilizadores: Hidráulicos"],
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000&auto=format&fit=crop",
        fullDescription: "Camião equipado com grua para auto-carregamento e içamento de cargas. Versatilidade total para logística e construção civil.",
        features: ["Controle preciso", "Capacidade de carga elevada", "Alcance estendido"]
      }
    ]
  }
];

export const AI_SYSTEM_INSTRUCTION = `
Você é o assistente virtual da SANCHO – Importações & Exportações LDA.
Sua função é ajudar clientes a encontrar máquinas e serviços.
Baseie-se nestas informações do CATÁLOGO OFICIAL:
1. Construção: Escavadeiras SANY (SY215C, SY500H), Betoneiras Menegotti (400L), Camiões Betoneira SANY, Rolos Vibratórios LTC, Motoniveladoras SDLG, Pás Carregadeiras SDLG.
2. Industrial: Geradores (Motores Kohler, Cummins), Motores Estacionários Toyama e Kawashima, Compressores Tekna, Máquinas de Costura Industrial Brother.
3. Agricultura: Tratores, Microtratores Oleo-Mac, Roçadeiras Maqtron, Debulhadores, Pulverizadores Adventure.
4. Logística/Camiões: Camiões SHACMAN, FAW, SINOTRUK, Empilhadeiras Caterpillar (CAT), Camiões Grua.
Contatos: ${PHONE_1}, ${EMAIL}. Local: Cidade de Maputo, Bairro Alto Maé, Avenida Eduardo Mondlane N°3112 1°Andar.
Responda de forma profissional, curta e direta em Português. Sempre convide o cliente a solicitar uma cotação oficial pelo WhatsApp ou Email.
`;
