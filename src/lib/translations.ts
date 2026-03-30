export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export interface Translations {
  // Nav
  nav: {
    fitness: string;
    cooking: string;
    tech: string;
    creative: string;
    menu: string;
  };
  // Hero
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    guides: string;
    categories: string;
    humanAi: string;
    scroll: string;
  };
  // Sections
  sections: {
    featured: string;
    startHere: string;
    viewAll: string;
    explore: string;
    browseByCategory: string;
    library: string;
    allGuides: string;
    guides: string;
  };
  // CTA
  cta: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
  };
  // Guide Card
  guideCard: {
    steps: string;
    readingTime: string;
    achieveIn: string;
  };
  // Guide Page
  guidePage: {
    home: string;
    readingTime: string;
    achieveIn: string;
    steps: string;
    share: string;
    linkCopied: string;
    shareGuide: string;
    the10Steps: string;
    sourcesReferences: string;
    moreIn: string;
    startGuide: string;
    noticeIn: string;
  };
  // Footer
  footer: {
    tagline: string;
    allGuides: string;
    builtFor: string;
  };
}

const en: Translations = {
  nav: {
    fitness: 'Fitness',
    cooking: 'Cooking',
    tech: 'Tech',
    creative: 'Creative',
    menu: 'Menu',
  },
  hero: {
    eyebrow: 'Learn Anything',
    title1: 'Get Good',
    title2: 'at',
    titleHighlight: 'Anything',
    subtitle: 'Curated, optimised tips. Understand in under a minute, achieve mastery in a single day.',
    searchPlaceholder: 'What do you want to get good at?',
    guides: 'guides',
    categories: 'categories',
    humanAi: 'Human & AI optimized',
    scroll: 'Scroll',
  },
  sections: {
    featured: 'Featured',
    startHere: 'Start Here',
    viewAll: 'View all',
    explore: 'Explore',
    browseByCategory: 'Browse by Category',
    library: 'Library',
    allGuides: 'All Guides',
    guides: 'guides',
  },
  cta: {
    title: 'Ready to get good?',
    subtitle: 'Pick a skill, follow the 10 steps, and start seeing results today.',
    searchPlaceholder: 'What skill will you master?',
  },
  guideCard: {
    steps: 'steps',
    readingTime: 'Reading time',
    achieveIn: 'Achieve',
  },
  guidePage: {
    home: 'Home',
    readingTime: 'Reading time',
    achieveIn: 'Achieve in',
    steps: 'Steps',
    share: 'Share',
    linkCopied: 'Link copied!',
    shareGuide: 'Share guide',
    the10Steps: 'The 10 Steps',
    sourcesReferences: 'Sources & References',
    moreIn: 'More in',
    startGuide: 'Start Guide',
    noticeIn: 'Reading time',
  },
  footer: {
    tagline: '10 steps. Under a minute to see results. A day to achieve mastery.',
    allGuides: 'All Guides',
    builtFor: 'Built for humans & AI agents',
  },
};

const es: Translations = {
  nav: {
    fitness: 'Fitness',
    cooking: 'Cocina',
    tech: 'Tecnología',
    creative: 'Creativo',
    menu: 'Menú',
  },
  hero: {
    eyebrow: 'Aprende Cualquier Cosa',
    title1: 'Mejora',
    title2: 'en',
    titleHighlight: 'Todo',
    subtitle: 'Consejos seleccionados y optimizados. Entiéndelo en menos de un minuto, domínalo en un solo día.',
    searchPlaceholder: '¿En qué quieres mejorar?',
    guides: 'guías',
    categories: 'categorías',
    humanAi: 'Optimizado para humanos e IA',
    scroll: 'Desplazar',
  },
  sections: {
    featured: 'Destacado',
    startHere: 'Empieza Aquí',
    viewAll: 'Ver todo',
    explore: 'Explorar',
    browseByCategory: 'Navegar por Categoría',
    library: 'Biblioteca',
    allGuides: 'Todas las Guías',
    guides: 'guías',
  },
  cta: {
    title: '¿Listo para mejorar?',
    subtitle: 'Elige una habilidad, sigue los 10 pasos y empieza a ver resultados hoy.',
    searchPlaceholder: '¿Qué habilidad dominarás?',
  },
  guideCard: {
    steps: 'pasos',
    readingTime: 'Tiempo de lectura',
    achieveIn: 'Lograr',
  },
  guidePage: {
    home: 'Inicio',
    readingTime: 'Tiempo de lectura',
    achieveIn: 'Lograr en',
    steps: 'Pasos',
    share: 'Compartir',
    linkCopied: '¡Enlace copiado!',
    shareGuide: 'Compartir guía',
    the10Steps: 'Los 10 Pasos',
    sourcesReferences: 'Fuentes y Referencias',
    moreIn: 'Más en',
    startGuide: 'Iniciar Guía',
    noticeIn: 'Tiempo de lectura',
  },
  footer: {
    tagline: '10 pasos. Menos de un minuto para ver resultados. Un día para dominar.',
    allGuides: 'Todas las Guías',
    builtFor: 'Creado para humanos y agentes IA',
  },
};

const fr: Translations = {
  nav: {
    fitness: 'Fitness',
    cooking: 'Cuisine',
    tech: 'Tech',
    creative: 'Créatif',
    menu: 'Menu',
  },
  hero: {
    eyebrow: 'Apprends N\'importe Quoi',
    title1: 'Deviens',
    title2: 'Bon en',
    titleHighlight: 'Tout',
    subtitle: 'Conseils sélectionnés et optimisés. Comprenez en moins d\'une minute, maîtrisez en une journée.',
    searchPlaceholder: 'Que veux-tu maîtriser?',
    guides: 'guides',
    categories: 'catégories',
    humanAi: 'Optimisé pour humains et IA',
    scroll: 'Défiler',
  },
  sections: {
    featured: 'À la Une',
    startHere: 'Commence Ici',
    viewAll: 'Voir tout',
    explore: 'Explorer',
    browseByCategory: 'Parcourir par Catégorie',
    library: 'Bibliothèque',
    allGuides: 'Tous les Guides',
    guides: 'guides',
  },
  cta: {
    title: 'Prêt à progresser?',
    subtitle: 'Choisis une compétence, suis les 10 étapes et commence à voir des résultats aujourd\'hui.',
    searchPlaceholder: 'Quelle compétence vas-tu maîtriser?',
  },
  guideCard: {
    steps: 'étapes',
    readingTime: 'Temps de lecture',
    achieveIn: 'Atteindre',
  },
  guidePage: {
    home: 'Accueil',
    readingTime: 'Temps de lecture',
    achieveIn: 'Atteindre en',
    steps: 'Étapes',
    share: 'Partager',
    linkCopied: 'Lien copié!',
    shareGuide: 'Partager le guide',
    the10Steps: 'Les 10 Étapes',
    sourcesReferences: 'Sources et Références',
    moreIn: 'Plus dans',
    startGuide: 'Démarrer',
    noticeIn: 'Temps de lecture',
  },
  footer: {
    tagline: '10 étapes. Moins d\'une minute pour voir des résultats. Une journée pour maîtriser.',
    allGuides: 'Tous les Guides',
    builtFor: 'Conçu pour humains et agents IA',
  },
};

const de: Translations = {
  nav: {
    fitness: 'Fitness',
    cooking: 'Kochen',
    tech: 'Technik',
    creative: 'Kreativ',
    menu: 'Menü',
  },
  hero: {
    eyebrow: 'Lerne Alles',
    title1: 'Werde Gut',
    title2: 'in',
    titleHighlight: 'Allem',
    subtitle: 'Kuratierte, optimierte Tipps. Verstehe in unter einer Minute, erreiche Meisterschaft an einem Tag.',
    searchPlaceholder: 'Worin willst du besser werden?',
    guides: 'Anleitungen',
    categories: 'Kategorien',
    humanAi: 'Für Menschen & KI optimiert',
    scroll: 'Scrollen',
  },
  sections: {
    featured: 'Empfohlen',
    startHere: 'Starte Hier',
    viewAll: 'Alle ansehen',
    explore: 'Entdecken',
    browseByCategory: 'Nach Kategorie durchsuchen',
    library: 'Bibliothek',
    allGuides: 'Alle Anleitungen',
    guides: 'Anleitungen',
  },
  cta: {
    title: 'Bereit durchzustarten?',
    subtitle: 'Wähle eine Fähigkeit, folge den 10 Schritten und sieh heute noch Ergebnisse.',
    searchPlaceholder: 'Welche Fähigkeit wirst du meistern?',
  },
  guideCard: {
    steps: 'Schritte',
    readingTime: 'Lesezeit',
    achieveIn: 'Erreichen',
  },
  guidePage: {
    home: 'Start',
    readingTime: 'Lesezeit',
    achieveIn: 'Erreichen in',
    steps: 'Schritte',
    share: 'Teilen',
    linkCopied: 'Link kopiert!',
    shareGuide: 'Anleitung teilen',
    the10Steps: 'Die 10 Schritte',
    sourcesReferences: 'Quellen & Referenzen',
    moreIn: 'Mehr in',
    startGuide: 'Starten',
    noticeIn: 'Lesezeit',
  },
  footer: {
    tagline: '10 Schritte. Unter einer Minute Ergebnisse sehen. An einem Tag meistern.',
    allGuides: 'Alle Anleitungen',
    builtFor: 'Für Menschen & KI-Agenten entwickelt',
  },
};

const ja: Translations = {
  nav: {
    fitness: 'フィットネス',
    cooking: '料理',
    tech: 'テック',
    creative: 'クリエイティブ',
    menu: 'メニュー',
  },
  hero: {
    eyebrow: '何でも学ぶ',
    title1: '上達',
    title2: 'する',
    titleHighlight: '何でも',
    subtitle: '厳選された最適化されたヒント。1分以内で理解し、1日でマスターする。',
    searchPlaceholder: '何を上達したいですか？',
    guides: 'ガイド',
    categories: 'カテゴリー',
    humanAi: '人間とAI向けに最適化',
    scroll: 'スクロール',
  },
  sections: {
    featured: '注目',
    startHere: 'ここから始める',
    viewAll: 'すべて見る',
    explore: '探索',
    browseByCategory: 'カテゴリーで探す',
    library: 'ライブラリ',
    allGuides: 'すべてのガイド',
    guides: 'ガイド',
  },
  cta: {
    title: '上達する準備はできましたか？',
    subtitle: 'スキルを選び、10のステップに従い、今日から結果を見始めましょう。',
    searchPlaceholder: '何をマスターしますか？',
  },
  guideCard: {
    steps: 'ステップ',
    readingTime: '読了時間',
    achieveIn: '達成',
  },
  guidePage: {
    home: 'ホーム',
    readingTime: '読了時間',
    achieveIn: '達成まで',
    steps: 'ステップ',
    share: '共有',
    linkCopied: 'リンクをコピーしました！',
    shareGuide: 'ガイドを共有',
    the10Steps: '10のステップ',
    sourcesReferences: '出典・参考文献',
    moreIn: 'もっと見る',
    startGuide: '開始',
    noticeIn: '読了時間',
  },
  footer: {
    tagline: '10ステップ。1分以内で効果を実感。1日でマスター。',
    allGuides: 'すべてのガイド',
    builtFor: '人間とAIエージェントのために作られた',
  },
};

const zh: Translations = {
  nav: {
    fitness: '健身',
    cooking: '烹饪',
    tech: '科技',
    creative: '创意',
    menu: '菜单',
  },
  hero: {
    eyebrow: '学习任何技能',
    title1: '精通',
    title2: '任何',
    titleHighlight: '技能',
    subtitle: '精选优化的技巧。一分钟内理解，一天内掌握。',
    searchPlaceholder: '你想学什么？',
    guides: '指南',
    categories: '分类',
    humanAi: '为人类和AI优化',
    scroll: '滚动',
  },
  sections: {
    featured: '精选',
    startHere: '从这里开始',
    viewAll: '查看全部',
    explore: '探索',
    browseByCategory: '按分类浏览',
    library: '资源库',
    allGuides: '所有指南',
    guides: '指南',
  },
  cta: {
    title: '准备好进步了吗？',
    subtitle: '选择一项技能，按照10个步骤，今天就开始看到成果。',
    searchPlaceholder: '你要掌握什么技能？',
  },
  guideCard: {
    steps: '步骤',
    readingTime: '阅读时间',
    achieveIn: '达成',
  },
  guidePage: {
    home: '首页',
    readingTime: '阅读时间',
    achieveIn: '达成时间',
    steps: '步骤',
    share: '分享',
    linkCopied: '链接已复制！',
    shareGuide: '分享指南',
    the10Steps: '10个步骤',
    sourcesReferences: '来源与参考',
    moreIn: '更多',
    startGuide: '开始',
    noticeIn: '阅读时间',
  },
  footer: {
    tagline: '10步。一分钟见效果。一天精通。',
    allGuides: '所有指南',
    builtFor: '为人类和AI代理打造',
  },
};

export const translations: Record<Language, Translations> = {
  en,
  es,
  fr,
  de,
  ja,
  zh,
};

export function getTranslation(lang: Language): Translations {
  return translations[lang] || translations.en;
}
