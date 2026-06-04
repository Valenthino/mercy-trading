// All user-facing copy lives here, in English and French.
// `fr` is typed as `typeof en`, so the two languages can never drift apart:
// if you add a key to `en`, TypeScript will require it in `fr` too.

export type Lang = "en" | "fr";

const en = {
  meta: {
    langLabel: "Français",
    langShort: "FR",
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    products: "Products",
    network: "Network",
    contact: "Contact",
    quote: "Get a quote",
  },
  common: {
    learnMore: "Learn more",
    getInTouch: "Get in touch",
    allServices: "All services",
    moreAboutUs: "More about us",
    emailUs: "Email us",
    callUs: "Call us",
  },
  home: {
    hero: {
      badge: "Based in Côte d'Ivoire · Partners in India & Vietnam",
      title: "Connecting West African cashew origins to the world",
      subtitle:
        "Mercy Trading Solutions sources, trades and exports premium raw cashew nuts from Côte d'Ivoire and Guinea — and helps importers and exporters move product with confidence.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "Explore our services",
    },
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "50+", label: "Partner cooperatives" },
      { value: "2", label: "Sourcing origins" },
      { value: "Global", label: "Export network" },
    ],
    intro: {
      eyebrow: "Who we are",
      title: "A trusted partner in physical commodities",
      body1:
        "Mercy Trading Solutions is a physical commodities company specialised in the buying and selling of raw cashew nuts (RCN) across West Africa, with a strong base in Côte d'Ivoire — the world's leading producer.",
      body2:
        "We work directly with more than 50 cooperatives in Côte d'Ivoire and Guinea and partner with the Conseil du Coton et de l'Anacarde (CCA). Whether you are an importer looking for reliable origin supply or an exporter seeking a route to market, we make the trade simple, transparent and secure.",
    },
    services: {
      eyebrow: "What we do",
      title: "End-to-end cashew trading & export",
      subtitle:
        "From origin sourcing to delivery in Asia, we cover every step of the raw cashew value chain.",
      items: [
        {
          title: "RCN trading",
          desc: "Competitive buying and selling of raw cashew nuts at scale, sourced directly from origin.",
        },
        {
          title: "Export facilitation",
          desc: "We help any importer or exporter buy or sell RCN — documentation, compliance and logistics handled.",
        },
        {
          title: "Bonded warehousing",
          desc: "The largest bonded warehouse capacity for RCN in Vietnam and India, close to processing markets.",
        },
        {
          title: "Quality & inspection",
          desc: "KOR, nut count and moisture grading with pre-shipment inspection you can rely on.",
        },
      ],
    },
    why: {
      eyebrow: "Why Mercy Trading",
      title: "Origin access, global reach",
      items: [
        {
          title: "A decade of expertise",
          desc: "Led by Director Mohamed Lamine Diaby, with 10+ years of international trading experience.",
        },
        {
          title: "Direct from the source",
          desc: "50+ cooperative partners and a direct relationship with the CCA in Côte d'Ivoire.",
        },
        {
          title: "Worldwide footprint",
          desc: "Trusted partners in India, Vietnam and across the globe, plus bonded warehouses in Asia.",
        },
        {
          title: "Trust & transparency",
          desc: "Clear contracts, dependable quality and reliable delivery on every shipment.",
        },
      ],
    },
    cta: {
      title: "Ready to trade cashews with a partner you can trust?",
      subtitle:
        "Tell us what you need to buy or sell — we'll get back to you quickly.",
      button: "Get in touch",
    },
  },
  about: {
    hero: {
      eyebrow: "About us",
      title: "Built on trust, grown from the source",
      subtitle:
        "Mercy Trading Solutions is a West African physical commodities company specialised in raw cashew nuts.",
    },
    story: {
      eyebrow: "Our story",
      title: "Bridging West African farms and global markets",
      body1:
        "Mercy Trading Solutions was founded to bridge the gap between West Africa's cashew farmers and the world's processing markets. Operating from Côte d'Ivoire — the largest producer of raw cashew nuts in the world — we have built a network that reaches from rural cooperatives to bonded warehouses in Asia.",
      body2:
        "Today we are among the top exporters of raw cashew nuts in Côte d'Ivoire and the largest owners of bonded warehouses of raw cashew nuts in Vietnam and India. We help any importer or exporter buy or sell RCN with confidence.",
    },
    director: {
      eyebrow: "Leadership",
      name: "Mohamed Lamine Diaby",
      role: "Director & Founder",
      bio1:
        "With more than a decade in the physical commodities business and extensive international experience, Mohamed Lamine Diaby leads Mercy Trading Solutions with a deep understanding of both origin sourcing and destination markets.",
      bio2:
        "His relationships across Côte d'Ivoire, Guinea, India and Vietnam are the foundation of the company's reputation for reliability and trust.",
    },
    values: {
      eyebrow: "Our values",
      title: "What guides us",
      items: [
        { title: "Integrity", desc: "Transparent dealings and contracts you can count on." },
        { title: "Quality", desc: "Rigorous grading and inspection at every stage." },
        { title: "Partnership", desc: "Long-term relationships with farmers, cooperatives and buyers." },
        { title: "Reliability", desc: "Dependable supply and on-time delivery, season after season." },
      ],
    },
    mission: {
      missionTitle: "Our mission",
      missionBody:
        "To connect West African cashew origins with global markets — creating value for farmers, cooperatives and our trading partners alike.",
      visionTitle: "Our vision",
      visionBody:
        "To be the most trusted name in raw cashew nut trading between Africa and Asia.",
    },
    cca: {
      title: "Working with the CCA",
      body: "We work directly with the Conseil du Coton et de l'Anacarde (CCA) in Côte d'Ivoire — the national body that regulates the cotton and cashew sectors — ensuring our trade meets the highest standards of compliance and traceability.",
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Everything you need to trade raw cashew nuts",
      subtitle:
        "We support importers, exporters, processors and cooperatives across the entire RCN value chain.",
    },
    items: [
      {
        title: "Raw cashew nut trading",
        desc: "We buy and sell raw cashew nuts at scale, matching origin supply with global demand at competitive prices.",
        points: ["Spot and contract purchasing", "Direct sourcing from cooperatives", "Competitive, transparent pricing"],
      },
      {
        title: "Export facilitation",
        desc: "Our core mission: helping any importer or exporter buy or sell RCN smoothly, from origin to destination.",
        points: ["Export documentation & compliance", "Customs and CCA coordination", "Buyer–seller matchmaking"],
      },
      {
        title: "Bonded warehousing",
        desc: "As the largest owners of bonded RCN warehouses in Vietnam and India, we store your product close to processing markets.",
        points: ["Secure bonded storage in Asia", "Inventory management", "Flexible delivery to processors"],
      },
      {
        title: "Sourcing & cooperatives",
        desc: "Direct relationships with 50+ cooperatives in Côte d'Ivoire and Guinea give you dependable origin supply.",
        points: ["50+ cooperative partners", "Côte d'Ivoire & Guinea origins", "Traceable supply chains"],
      },
      {
        title: "Quality control & inspection",
        desc: "Independent grading and pre-shipment inspection protect the value of every container you ship.",
        points: ["KOR, nut count & moisture testing", "Pre-shipment inspection", "Quality certificates"],
      },
      {
        title: "Logistics & shipping",
        desc: "From warehouse to port to destination, we coordinate the movement of your cargo end to end.",
        points: ["Container loading & stuffing", "Freight & port coordination", "Shipment tracking"],
      },
    ],
  },
  products: {
    hero: {
      eyebrow: "Our product",
      title: "Premium raw cashew nuts (RCN)",
      subtitle:
        "Sourced from the rich cashew belts of Côte d'Ivoire and Guinea, our raw cashew nuts meet the specifications international processors demand.",
    },
    origin: {
      title: "West African origin",
      body: "Côte d'Ivoire is the world's largest producer of raw cashew nuts, and Guinea is a fast-growing origin. Our nuts are sourced at harvest, carefully dried and bagged for export in jute “SAC EXPORT” bags.",
    },
    specs: {
      title: "Typical specifications",
      subtitle: "Indicative ranges — exact specifications are confirmed per contract and lot.",
      headerParam: "Parameter",
      headerValue: "Typical range",
      rows: [
        { param: "Outturn (KOR)", value: "46 – 52 lbs / 80 kg" },
        { param: "Nut count", value: "180 – 220 nuts / kg" },
        { param: "Moisture", value: "≤ 10%" },
        { param: "Defective / spotted", value: "≤ 12%" },
        { param: "Foreign matter", value: "≤ 1%" },
        { param: "Packaging", value: "Jute bags, ~80 kg" },
      ],
    },
    season: {
      title: "Harvest & seasonality",
      body: "The West African cashew harvest runs from February to June. We secure volumes throughout the season and supply year-round from our bonded warehouses in Asia.",
    },
    quality: {
      title: "Quality you can verify",
      body: "Every lot is graded for outturn, nut count and moisture, with pre-shipment inspection available so you know exactly what you are buying.",
    },
  },
  network: {
    hero: {
      eyebrow: "Our network",
      title: "From cooperatives to global processors",
      subtitle:
        "A supply chain that spans West African origins, institutional partners and bonded warehouses in Asia.",
    },
    blocks: [
      {
        title: "Sourcing origins",
        body: "We work directly with more than 50 cooperatives across Côte d'Ivoire and Guinea, building long-term relationships that secure dependable, traceable supply.",
      },
      {
        title: "Institutional partners",
        body: "We collaborate directly with the Conseil du Coton et de l'Anacarde (CCA) in Côte d'Ivoire, the regulatory body for the cashew and cotton sectors.",
      },
      {
        title: "Destination markets",
        body: "Our partners span India, Vietnam and the rest of the world — the major processing and consumption hubs for cashew kernels.",
      },
      {
        title: "Bonded warehouses",
        body: "We are the largest owners of bonded warehouses of raw cashew nuts in Vietnam and India, allowing us to deliver close to processors and supply year-round.",
      },
    ],
    regionsTitle: "Where we operate",
    regions: [
      { name: "Côte d'Ivoire", role: "Primary sourcing origin" },
      { name: "Guinea", role: "Growing sourcing origin" },
      { name: "India", role: "Processing market & bonded warehouses" },
      { name: "Vietnam", role: "Processing market & bonded warehouses" },
      { name: "Worldwide", role: "Buyers & partners across the globe" },
    ],
    how: {
      title: "How we work",
      steps: [
        { title: "Source", desc: "We buy RCN directly from our cooperative network at origin." },
        { title: "Quality check", desc: "Each lot is graded and inspected before shipment." },
        { title: "Export", desc: "We handle documentation, customs and logistics to port." },
        { title: "Deliver", desc: "Product ships to buyers or to our bonded warehouses in Asia." },
      ],
    },
  },
  partners: {
    eyebrow: "Trusted by",
    title: "Partners & organizations that trust us",
    subtitle:
      "We work alongside the world's leading shipping lines, trade bodies and agribusinesses to move cashews reliably from origin to market.",
    items: [
      { name: "CMA CGM", role: "Shipping & logistics" },
      { name: "MSC", role: "Shipping & logistics" },
      { name: "Maersk", role: "Shipping & logistics" },
      { name: "Evergreen", role: "Shipping & logistics" },
      { name: "Cashew India", role: "Industry partner" },
      { name: "Conseil du Coton et de l'Anacarde (CCA)", role: "Institutional partner" },
      { name: "The Andersons, Inc.", role: "Agribusiness partner" },
    ],
    conference: "Proud participant of the World Cashew Conference",
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Let's talk cashews",
      subtitle:
        "Whether you want to buy or sell raw cashew nuts, our team is ready to help. Reach out and we'll respond promptly.",
    },
    info: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      directorLabel: "Director",
      locationLabel: "Location",
      location: "Côte d'Ivoire, West Africa",
    },
    form: {
      title: "Send us a message",
      name: "Full name",
      email: "Email address",
      company: "Company (optional)",
      intent: "I want to…",
      intentBuy: "Buy raw cashew nuts",
      intentSell: "Sell raw cashew nuts",
      intentOther: "Something else",
      message: "Your message",
      send: "Send message",
      note: "This opens your email app with the details pre-filled.",
      subject: "Website enquiry — Mercy Trading Solutions",
    },
  },
  footer: {
    tagline: "Raw cashew nut trading & export, from West Africa to the world.",
    quickLinks: "Quick links",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    basedIn: "Based in Côte d'Ivoire",
  },
};

const fr: typeof en = {
  meta: {
    langLabel: "English",
    langShort: "EN",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    products: "Produits",
    network: "Réseau",
    contact: "Contact",
    quote: "Demander un devis",
  },
  common: {
    learnMore: "En savoir plus",
    getInTouch: "Contactez-nous",
    allServices: "Tous les services",
    moreAboutUs: "En savoir plus sur nous",
    emailUs: "Écrivez-nous",
    callUs: "Appelez-nous",
  },
  home: {
    hero: {
      badge: "Basés en Côte d'Ivoire · Partenaires en Inde et au Vietnam",
      title: "Relier les origines ouest-africaines de l'anacarde au monde entier",
      subtitle:
        "Mercy Trading Solutions sélectionne, négocie et exporte des noix de cajou brutes premium depuis la Côte d'Ivoire et la Guinée — et accompagne importateurs et exportateurs en toute confiance.",
      ctaPrimary: "Demander un devis",
      ctaSecondary: "Découvrir nos services",
    },
    stats: [
      { value: "10+", label: "Années d'expérience" },
      { value: "50+", label: "Coopératives partenaires" },
      { value: "2", label: "Origines d'approvisionnement" },
      { value: "Mondial", label: "Réseau d'export" },
    ],
    intro: {
      eyebrow: "Qui nous sommes",
      title: "Un partenaire de confiance en matières premières physiques",
      body1:
        "Mercy Trading Solutions est une société de matières premières physiques spécialisée dans l'achat et la vente de noix de cajou brutes en Afrique de l'Ouest, solidement implantée en Côte d'Ivoire — premier producteur mondial.",
      body2:
        "Nous travaillons directement avec plus de 50 coopératives en Côte d'Ivoire et en Guinée et collaborons avec le Conseil du Coton et de l'Anacarde (CCA). Que vous soyez importateur en quête d'un approvisionnement fiable à l'origine ou exportateur cherchant un débouché, nous rendons le négoce simple, transparent et sûr.",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "Négoce et export de cajou de bout en bout",
      subtitle:
        "De l'approvisionnement à l'origine à la livraison en Asie, nous couvrons chaque étape de la filière de la noix de cajou brute.",
      items: [
        {
          title: "Négoce de cajou brut",
          desc: "Achat et vente compétitifs de noix de cajou brutes à grande échelle, directement à l'origine.",
        },
        {
          title: "Facilitation à l'export",
          desc: "Nous aidons tout importateur ou exportateur à acheter ou vendre des noix de cajou — documents, conformité et logistique pris en charge.",
        },
        {
          title: "Entreposage sous douane",
          desc: "La plus grande capacité d'entrepôts sous douane pour le cajou au Vietnam et en Inde, au plus près des marchés de transformation.",
        },
        {
          title: "Qualité & inspection",
          desc: "Classement KOR, comptage et taux d'humidité, avec une inspection avant expédition fiable.",
        },
      ],
    },
    why: {
      eyebrow: "Pourquoi Mercy Trading",
      title: "Accès à l'origine, portée mondiale",
      items: [
        {
          title: "Une décennie d'expertise",
          desc: "Dirigée par M. Mohamed Lamine Diaby, fort de plus de 10 ans d'expérience internationale du négoce.",
        },
        {
          title: "Directement à la source",
          desc: "Plus de 50 coopératives partenaires et une relation directe avec le CCA en Côte d'Ivoire.",
        },
        {
          title: "Présence mondiale",
          desc: "Des partenaires de confiance en Inde, au Vietnam et partout dans le monde, ainsi que des entrepôts sous douane en Asie.",
        },
        {
          title: "Confiance & transparence",
          desc: "Des contrats clairs, une qualité constante et des livraisons fiables à chaque expédition.",
        },
      ],
    },
    cta: {
      title: "Prêt à négocier le cajou avec un partenaire de confiance ?",
      subtitle:
        "Dites-nous ce que vous souhaitez acheter ou vendre — nous vous répondrons rapidement.",
      button: "Contactez-nous",
    },
  },
  about: {
    hero: {
      eyebrow: "À propos",
      title: "Bâtis sur la confiance, ancrés à la source",
      subtitle:
        "Mercy Trading Solutions est une société ouest-africaine de matières premières physiques spécialisée dans la noix de cajou brute.",
    },
    story: {
      eyebrow: "Notre histoire",
      title: "Relier les fermes ouest-africaines aux marchés mondiaux",
      body1:
        "Mercy Trading Solutions a été fondée pour rapprocher les producteurs de cajou d'Afrique de l'Ouest des marchés mondiaux de transformation. Depuis la Côte d'Ivoire — premier producteur mondial de noix de cajou brutes — nous avons bâti un réseau qui s'étend des coopératives rurales aux entrepôts sous douane d'Asie.",
      body2:
        "Aujourd'hui, nous figurons parmi les premiers exportateurs de noix de cajou brutes de Côte d'Ivoire et sommes les plus grands propriétaires d'entrepôts sous douane de cajou au Vietnam et en Inde. Nous aidons tout importateur ou exportateur à acheter ou vendre du cajou en toute confiance.",
    },
    director: {
      eyebrow: "Direction",
      name: "Mohamed Lamine Diaby",
      role: "Directeur & Fondateur",
      bio1:
        "Fort de plus d'une décennie dans le négoce de matières premières physiques et d'une solide expérience internationale, Mohamed Lamine Diaby dirige Mercy Trading Solutions avec une parfaite maîtrise de l'approvisionnement à l'origine comme des marchés de destination.",
      bio2:
        "Ses relations en Côte d'Ivoire, en Guinée, en Inde et au Vietnam sont le fondement de la réputation de fiabilité et de confiance de l'entreprise.",
    },
    values: {
      eyebrow: "Nos valeurs",
      title: "Ce qui nous guide",
      items: [
        { title: "Intégrité", desc: "Des relations transparentes et des contrats sur lesquels compter." },
        { title: "Qualité", desc: "Un classement et une inspection rigoureux à chaque étape." },
        { title: "Partenariat", desc: "Des relations durables avec producteurs, coopératives et acheteurs." },
        { title: "Fiabilité", desc: "Un approvisionnement constant et des livraisons à l'heure, saison après saison." },
      ],
    },
    mission: {
      missionTitle: "Notre mission",
      missionBody:
        "Relier les origines ouest-africaines du cajou aux marchés mondiaux — en créant de la valeur pour les producteurs, les coopératives et nos partenaires commerciaux.",
      visionTitle: "Notre vision",
      visionBody:
        "Devenir le nom le plus digne de confiance dans le négoce de la noix de cajou brute entre l'Afrique et l'Asie.",
    },
    cca: {
      title: "Notre collaboration avec le CCA",
      body: "Nous travaillons directement avec le Conseil du Coton et de l'Anacarde (CCA) en Côte d'Ivoire — l'organisme national qui régule les filières coton et cajou — afin que notre activité réponde aux plus hauts standards de conformité et de traçabilité.",
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Tout ce qu'il faut pour négocier la noix de cajou brute",
      subtitle:
        "Nous accompagnons importateurs, exportateurs, transformateurs et coopératives sur toute la filière du cajou brut.",
    },
    items: [
      {
        title: "Négoce de noix de cajou brutes",
        desc: "Nous achetons et vendons des noix de cajou brutes à grande échelle, en faisant correspondre l'offre à l'origine et la demande mondiale à des prix compétitifs.",
        points: ["Achats au comptant et sous contrat", "Approvisionnement direct auprès des coopératives", "Prix compétitifs et transparents"],
      },
      {
        title: "Facilitation à l'export",
        desc: "Notre mission première : aider tout importateur ou exportateur à acheter ou vendre du cajou en toute fluidité, de l'origine à la destination.",
        points: ["Documents d'export & conformité", "Coordination douanes et CCA", "Mise en relation acheteurs–vendeurs"],
      },
      {
        title: "Entreposage sous douane",
        desc: "Premiers propriétaires d'entrepôts sous douane de cajou au Vietnam et en Inde, nous stockons votre marchandise au plus près des marchés de transformation.",
        points: ["Stockage sous douane sécurisé en Asie", "Gestion des stocks", "Livraison flexible aux transformateurs"],
      },
      {
        title: "Approvisionnement & coopératives",
        desc: "Des relations directes avec plus de 50 coopératives en Côte d'Ivoire et en Guinée vous garantissent un approvisionnement fiable à l'origine.",
        points: ["Plus de 50 coopératives partenaires", "Origines Côte d'Ivoire & Guinée", "Chaînes d'approvisionnement traçables"],
      },
      {
        title: "Contrôle qualité & inspection",
        desc: "Un classement indépendant et une inspection avant expédition protègent la valeur de chaque conteneur expédié.",
        points: ["Tests KOR, comptage & humidité", "Inspection avant expédition", "Certificats de qualité"],
      },
      {
        title: "Logistique & expédition",
        desc: "De l'entrepôt au port jusqu'à destination, nous coordonnons l'acheminement de votre marchandise de bout en bout.",
        points: ["Chargement & empotage des conteneurs", "Coordination fret & portuaire", "Suivi des expéditions"],
      },
    ],
  },
  products: {
    hero: {
      eyebrow: "Notre produit",
      title: "Noix de cajou brutes premium",
      subtitle:
        "Issues des riches bassins cajoutiers de Côte d'Ivoire et de Guinée, nos noix de cajou brutes répondent aux exigences des transformateurs internationaux.",
    },
    origin: {
      title: "Une origine ouest-africaine",
      body: "La Côte d'Ivoire est le premier producteur mondial de noix de cajou brutes, et la Guinée est une origine en plein essor. Nos noix sont collectées à la récolte, soigneusement séchées et conditionnées pour l'export dans des sacs de jute « SAC EXPORT ».",
    },
    specs: {
      title: "Spécifications types",
      subtitle: "Fourchettes indicatives — les spécifications exactes sont confirmées par contrat et par lot.",
      headerParam: "Paramètre",
      headerValue: "Fourchette type",
      rows: [
        { param: "Rendement (KOR)", value: "46 – 52 lbs / 80 kg" },
        { param: "Comptage", value: "180 – 220 noix / kg" },
        { param: "Humidité", value: "≤ 10 %" },
        { param: "Défectueux / tachés", value: "≤ 12 %" },
        { param: "Corps étrangers", value: "≤ 1 %" },
        { param: "Conditionnement", value: "Sacs de jute, ~80 kg" },
      ],
    },
    season: {
      title: "Récolte & saisonnalité",
      body: "La récolte ouest-africaine de cajou s'étend de février à juin. Nous sécurisons les volumes tout au long de la campagne et approvisionnons toute l'année depuis nos entrepôts sous douane en Asie.",
    },
    quality: {
      title: "Une qualité vérifiable",
      body: "Chaque lot est classé selon son rendement, son comptage et son humidité, avec inspection avant expédition disponible, pour savoir exactement ce que vous achetez.",
    },
  },
  network: {
    hero: {
      eyebrow: "Notre réseau",
      title: "Des coopératives aux transformateurs mondiaux",
      subtitle:
        "Une chaîne d'approvisionnement qui relie les origines ouest-africaines, des partenaires institutionnels et des entrepôts sous douane en Asie.",
    },
    blocks: [
      {
        title: "Origines d'approvisionnement",
        body: "Nous travaillons directement avec plus de 50 coopératives en Côte d'Ivoire et en Guinée, en nouant des relations durables qui garantissent un approvisionnement fiable et traçable.",
      },
      {
        title: "Partenaires institutionnels",
        body: "Nous collaborons directement avec le Conseil du Coton et de l'Anacarde (CCA) en Côte d'Ivoire, l'organisme de régulation des filières cajou et coton.",
      },
      {
        title: "Marchés de destination",
        body: "Nos partenaires sont présents en Inde, au Vietnam et dans le reste du monde — les grands pôles de transformation et de consommation des amandes de cajou.",
      },
      {
        title: "Entrepôts sous douane",
        body: "Nous sommes les plus grands propriétaires d'entrepôts sous douane de noix de cajou brutes au Vietnam et en Inde, ce qui nous permet de livrer au plus près des transformateurs et d'approvisionner toute l'année.",
      },
    ],
    regionsTitle: "Où nous opérons",
    regions: [
      { name: "Côte d'Ivoire", role: "Origine principale d'approvisionnement" },
      { name: "Guinée", role: "Origine en plein essor" },
      { name: "Inde", role: "Marché de transformation & entrepôts sous douane" },
      { name: "Vietnam", role: "Marché de transformation & entrepôts sous douane" },
      { name: "International", role: "Acheteurs & partenaires partout dans le monde" },
    ],
    how: {
      title: "Comment nous travaillons",
      steps: [
        { title: "Sourcer", desc: "Nous achetons le cajou directement auprès de notre réseau de coopératives à l'origine." },
        { title: "Contrôler", desc: "Chaque lot est classé et inspecté avant expédition." },
        { title: "Exporter", desc: "Nous gérons les documents, les douanes et la logistique jusqu'au port." },
        { title: "Livrer", desc: "La marchandise est expédiée aux acheteurs ou vers nos entrepôts sous douane en Asie." },
      ],
    },
  },
  partners: {
    eyebrow: "Ils nous font confiance",
    title: "Partenaires et organisations qui nous font confiance",
    subtitle:
      "Nous collaborons avec les plus grandes compagnies maritimes, organisations de la filière et acteurs agro-industriels pour acheminer le cajou de l'origine au marché en toute fiabilité.",
    items: [
      { name: "CMA CGM", role: "Transport & logistique" },
      { name: "MSC", role: "Transport & logistique" },
      { name: "Maersk", role: "Transport & logistique" },
      { name: "Evergreen", role: "Transport & logistique" },
      { name: "Cashew India", role: "Partenaire de la filière" },
      { name: "Conseil du Coton et de l'Anacarde (CCA)", role: "Partenaire institutionnel" },
      { name: "The Andersons, Inc.", role: "Partenaire agro-industriel" },
    ],
    conference: "Fier participant de la World Cashew Conference",
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Parlons cajou",
      subtitle:
        "Que vous souhaitiez acheter ou vendre des noix de cajou brutes, notre équipe est prête à vous aider. Écrivez-nous et nous vous répondrons rapidement.",
    },
    info: {
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      directorLabel: "Directeur",
      locationLabel: "Localisation",
      location: "Côte d'Ivoire, Afrique de l'Ouest",
    },
    form: {
      title: "Envoyez-nous un message",
      name: "Nom complet",
      email: "Adresse e-mail",
      company: "Société (facultatif)",
      intent: "Je souhaite…",
      intentBuy: "Acheter des noix de cajou brutes",
      intentSell: "Vendre des noix de cajou brutes",
      intentOther: "Autre chose",
      message: "Votre message",
      send: "Envoyer le message",
      note: "Ceci ouvre votre application e-mail avec les informations pré-remplies.",
      subject: "Demande via le site — Mercy Trading Solutions",
    },
  },
  footer: {
    tagline: "Négoce et export de noix de cajou brutes, de l'Afrique de l'Ouest au monde entier.",
    quickLinks: "Liens rapides",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    basedIn: "Basés en Côte d'Ivoire",
  },
};

export const translations: Record<Lang, typeof en> = { en, fr };
export type Dict = typeof en;
