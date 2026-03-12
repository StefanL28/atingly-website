export const languages = {
  fr: 'Francais',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

export const translations = {
  fr: {
    // Layout / Meta
    'meta.title': 'Swoop — Vos meilleures offres par chat | Abidjan',
    'meta.description': "Swoop vous connecte aux meilleures reductions d'Abidjan. Recevez des promotions exclusives directement dans votre messagerie. Disponible sur iOS et Android.",
    'meta.locale': 'fr_CI',

    // Navbar
    'nav.features': 'Fonctionnalites',
    'nav.howItWorks': 'Comment ca marche',
    'nav.testimonials': 'Temoignages',
    'nav.faq': 'FAQ',
    'nav.download': 'Telecharger',
    'nav.downloadApp': "Telecharger l'app",

    // Hero
    'hero.badge': 'Disponible a Abidjan',
    'hero.headline1': 'Vos meilleures',
    'hero.headline2': ' offres livrees',
    'hero.headline3': 'directement',
    'hero.headline4': ' par chat',
    'hero.subtitle': "Swoop vous connecte aux meilleures reductions d'Abidjan. Recevez des promotions exclusives directement dans votre messagerie.",
    'hero.cta': "Telecharger l'app",
    'hero.avatarText': 'Rejoint par 10 000+ utilisateurs',
    'hero.online': 'En ligne',
    'hero.chatGreeting': 'Salut ! Voici vos offres du jour 🔥',
    'hero.chatReply': 'La pizza ! 🤤',
    'hero.chatPromo': 'Voici votre code promo : SWOOP30 🎉',
    'hero.writeMessage': 'Ecrivez un message...',
    'hero.saveUpTo': "Economisez jusqu'a",

    // Social Proof
    'social.users': 'Utilisateurs',
    'social.offers': 'Offres',
    'social.partners': 'Partenaires',

    // Features Section
    'features.heading': 'Pourquoi choisir',
    'features.subtitle': "Decouvrez comment Swoop transforme votre facon de faire des economies a Abidjan.",
    'features.badge': 'Fonctionnalite',
    'features.main.0.title': 'Offres livrees par chat',
    'features.main.0.description': "Recevez les meilleures promotions directement dans votre messagerie. Plus besoin de chercher — les offres viennent a vous, au bon moment.",
    'features.main.1.title': 'Reductions personnalisees',
    'features.main.1.description': "Notre algorithme apprend vos preferences pour vous envoyer uniquement les offres qui comptent. Des reductions sur mesure, rien que pour vous.",
    'features.main.2.title': 'Commerce local, impact reel',
    'features.main.2.description': "Soutenez les commerces d'Abidjan tout en economisant. Chaque achat via Swoop renforce l'economie locale et votre portefeuille.",

    // Feature Section phone screens
    'screen.chat.title': 'Swoop Chat',
    'screen.chat.subtitle': '3 nouvelles offres',
    'screen.chat.offer1.title': 'Nouvelle offre pour vous !',
    'screen.chat.offer1.desc': 'Restaurant Le Gourmet — 25% de reduction',
    'screen.chat.offer2.title': 'Offre flash ⚡',
    'screen.chat.offer2.desc': 'Supermarche Express — 15% sur tout',
    'screen.chat.offer3.title': 'Recommande pour vous',
    'screen.chat.offer3.desc': 'Salon Beaute Plus — Soin gratuit',
    'screen.deals.title': 'Pour vous',
    'screen.deals.subtitle': 'Base sur vos preferences',
    'screen.deals.new': 'Nouveau',
    'screen.map.title': 'Pres de vous',
    'screen.map.subtitle': '12 commerces partenaires',

    // Bento Grid
    'bento.heading': "Plus de raisons d'aimer",
    'bento.subtitle': "Tout ce dont vous avez besoin pour economiser intelligemment.",
    'bento.0.title': 'Notifications instantanees',
    'bento.0.description': "Soyez alerte des qu'une nouvelle offre correspond a vos interets.",
    'bento.1.title': 'Interface simple',
    'bento.1.description': 'Une experience fluide et intuitive, concue pour tous.',
    'bento.2.title': '100% gratuit',
    'bento.2.description': 'Aucun frais, aucun abonnement. Economisez sans rien payer.',
    'bento.3.title': 'Partenaires verifies',
    'bento.3.description': 'Toutes nos offres proviennent de commerces locaux verifies.',
    'bento.4.title': 'Offres quotidiennes',
    'bento.4.description': 'De nouvelles promotions chaque jour pour ne jamais manquer une bonne affaire.',
    'bento.5.title': 'Securise',
    'bento.5.description': 'Vos donnees sont protegees. Votre vie privee est notre priorite.',

    // How It Works
    'how.heading1': 'Comment ca',
    'how.heading2': 'marche',
    'how.subtitle': 'Commencez a economiser en trois etapes simples.',
    'how.step1.title': 'Telechargez',
    'how.step1.desc': "Installez l'application Swoop gratuitement depuis l'App Store ou Google Play.",
    'how.step2.title': 'Recevez',
    'how.step2.desc': 'Des offres personnalisees arrivent directement dans votre chat. Pas de spam, que du bon.',
    'how.step3.title': 'Economisez',
    'how.step3.desc': 'Utilisez vos codes promo chez nos partenaires et profitez de reductions incroyables.',

    // Testimonials
    'testimonials.heading': 'Ce que disent nos',
    'testimonials.headingHighlight': 'utilisateurs',
    'testimonials.subtitle': "Decouvrez pourquoi des milliers d'utilisateurs font confiance a Swoop.",
    'testimonials.0.quote': "Grace a Swoop, j'economise chaque semaine sur mes courses. Les offres arrivent directement sur mon telephone, c'est vraiment pratique !",
    'testimonials.1.quote': "Je decouvre des commerces pres de chez moi que je ne connaissais pas. Les reductions sont reelles et les commercants sont fiables.",
    'testimonials.2.quote': "L'application est simple et rapide. J'ai recommande Swoop a toute ma famille. On economise ensemble maintenant !",

    // FAQ
    'faq.heading': 'Questions',
    'faq.headingHighlight': 'frequentes',
    'faq.subtitle': 'Tout ce que vous devez savoir sur Swoop.',
    'faq.0.question': 'Comment fonctionne Swoop ?',
    'faq.0.answer': "Swoop vous envoie des offres et reductions exclusives directement par chat. Telechargez l'application, creez votre profil, et commencez a recevoir des promotions personnalisees de commerces locaux a Abidjan.",
    'faq.1.question': 'Est-ce que Swoop est gratuit ?',
    'faq.1.answer': "Oui, Swoop est 100% gratuit pour les utilisateurs. Aucun frais cache, aucun abonnement. Vous ne payez que le prix reduit de vos achats chez nos partenaires.",
    'faq.2.question': "Quels types d'offres puis-je trouver ?",
    'faq.2.answer': "Vous trouverez des reductions sur la restauration, les courses alimentaires, la mode, les services de beaute, l'electronique et bien plus encore. Nos partenaires couvrent une large gamme de commerces a Abidjan.",
    'faq.3.question': 'Comment les offres sont-elles personnalisees ?',
    'faq.3.answer': "Notre algorithme apprend vos preferences au fil du temps en fonction de vos interactions. Plus vous utilisez Swoop, plus les offres deviennent pertinentes et adaptees a vos gouts.",
    'faq.4.question': "Swoop est-il disponible en dehors d'Abidjan ?",
    'faq.4.answer': "Pour le moment, Swoop est disponible uniquement a Abidjan, Cote d'Ivoire. Nous prevoyons de nous etendre a d'autres villes prochainement. Restez connecte pour les mises a jour !",
    'faq.5.question': 'Comment devenir un partenaire Swoop ?',
    'faq.5.answer': "Si vous etes un commercant a Abidjan et souhaitez rejoindre notre reseau de partenaires, contactez-nous a partenaires@swoop.ci. Nous vous aiderons a toucher de nouveaux clients grace a notre plateforme.",

    // Final CTA
    'cta.heading1': 'Pret a',
    'cta.heading2': 'economiser',
    'cta.subtitle': "Rejoignez des milliers d'utilisateurs a Abidjan qui economisent chaque jour grace a Swoop.",
    'cta.appStore': 'Telecharger sur',
    'cta.googlePlay': 'Disponible sur',

    // Footer
    'footer.tagline': "Vos meilleures offres livrees directement par chat. Economisez chaque jour a Abidjan.",
    'footer.quickLinks': 'Liens rapides',
    'footer.contact': 'Contact',
    'footer.location': "Abidjan, Cote d'Ivoire",
    'footer.copyright': '© 2026 Swoop. Tous droits reserves.',

    // Categories (feature section phone)
    'cat.restaurants': '🍽️ Restaurants',
    'cat.fashion': '👗 Mode',
    'cat.beauty': '💇 Beaute',
  },

  en: {
    // Layout / Meta
    'meta.title': 'Swoop — Your best deals delivered by chat | Abidjan',
    'meta.description': "Swoop connects you to the best deals in Abidjan. Receive exclusive promotions directly in your messenger. Available on iOS and Android.",
    'meta.locale': 'en_US',

    // Navbar
    'nav.features': 'Features',
    'nav.howItWorks': 'How it works',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.download': 'Download',
    'nav.downloadApp': 'Download the app',

    // Hero
    'hero.badge': 'Available in Abidjan',
    'hero.headline1': 'Your best',
    'hero.headline2': ' deals delivered',
    'hero.headline3': 'directly',
    'hero.headline4': ' by chat',
    'hero.subtitle': "Swoop connects you to the best deals in Abidjan. Receive exclusive promotions directly in your messenger.",
    'hero.cta': 'Download the app',
    'hero.avatarText': 'Joined by 10,000+ users',
    'hero.online': 'Online',
    'hero.chatGreeting': "Hey! Here are today's deals 🔥",
    'hero.chatReply': 'The pizza! 🤤',
    'hero.chatPromo': 'Here is your promo code: SWOOP30 🎉',
    'hero.writeMessage': 'Write a message...',
    'hero.saveUpTo': 'Save up to',

    // Social Proof
    'social.users': 'Users',
    'social.offers': 'Offers',
    'social.partners': 'Partners',

    // Features Section
    'features.heading': 'Why choose',
    'features.subtitle': "Discover how Swoop transforms the way you save money in Abidjan.",
    'features.badge': 'Feature',
    'features.main.0.title': 'Deals delivered by chat',
    'features.main.0.description': "Receive the best promotions directly in your messenger. No need to search — deals come to you, at the right time.",
    'features.main.1.title': 'Personalized discounts',
    'features.main.1.description': "Our algorithm learns your preferences to send you only the deals that matter. Tailored discounts, just for you.",
    'features.main.2.title': 'Local business, real impact',
    'features.main.2.description': "Support Abidjan businesses while saving money. Every purchase through Swoop strengthens the local economy and your wallet.",

    // Feature Section phone screens
    'screen.chat.title': 'Swoop Chat',
    'screen.chat.subtitle': '3 new offers',
    'screen.chat.offer1.title': 'New offer for you!',
    'screen.chat.offer1.desc': 'Restaurant Le Gourmet — 25% off',
    'screen.chat.offer2.title': 'Flash deal ⚡',
    'screen.chat.offer2.desc': 'Express Supermarket — 15% off everything',
    'screen.chat.offer3.title': 'Recommended for you',
    'screen.chat.offer3.desc': 'Salon Beaute Plus — Free treatment',
    'screen.deals.title': 'For you',
    'screen.deals.subtitle': 'Based on your preferences',
    'screen.deals.new': 'New',
    'screen.map.title': 'Near you',
    'screen.map.subtitle': '12 partner stores',

    // Bento Grid
    'bento.heading': 'More reasons to love',
    'bento.subtitle': "Everything you need to save money smarter.",
    'bento.0.title': 'Instant notifications',
    'bento.0.description': "Get alerted as soon as a new offer matches your interests.",
    'bento.1.title': 'Simple interface',
    'bento.1.description': 'A smooth and intuitive experience, designed for everyone.',
    'bento.2.title': '100% free',
    'bento.2.description': 'No fees, no subscriptions. Save without paying anything.',
    'bento.3.title': 'Verified partners',
    'bento.3.description': 'All our offers come from verified local businesses.',
    'bento.4.title': 'Daily offers',
    'bento.4.description': 'New promotions every day so you never miss a great deal.',
    'bento.5.title': 'Secure',
    'bento.5.description': 'Your data is protected. Your privacy is our priority.',

    // How It Works
    'how.heading1': 'How it',
    'how.heading2': 'works',
    'how.subtitle': 'Start saving in three simple steps.',
    'how.step1.title': 'Download',
    'how.step1.desc': 'Install the Swoop app for free from the App Store or Google Play.',
    'how.step2.title': 'Receive',
    'how.step2.desc': 'Personalized offers arrive directly in your chat. No spam, only great deals.',
    'how.step3.title': 'Save',
    'how.step3.desc': 'Use your promo codes at our partner stores and enjoy incredible discounts.',

    // Testimonials
    'testimonials.heading': 'What our',
    'testimonials.headingHighlight': 'users say',
    'testimonials.subtitle': "Discover why thousands of users trust Swoop.",
    'testimonials.0.quote': "Thanks to Swoop, I save every week on my groceries. The offers arrive directly on my phone, it's really convenient!",
    'testimonials.1.quote': "I discover shops near me that I didn't know about. The discounts are real and the merchants are reliable.",
    'testimonials.2.quote': "The app is simple and fast. I recommended Swoop to my whole family. We save together now!",

    // FAQ
    'faq.heading': 'Frequently asked',
    'faq.headingHighlight': 'questions',
    'faq.subtitle': 'Everything you need to know about Swoop.',
    'faq.0.question': 'How does Swoop work?',
    'faq.0.answer': "Swoop sends you exclusive offers and discounts directly by chat. Download the app, create your profile, and start receiving personalized promotions from local businesses in Abidjan.",
    'faq.1.question': 'Is Swoop free?',
    'faq.1.answer': "Yes, Swoop is 100% free for users. No hidden fees, no subscriptions. You only pay the discounted price of your purchases at our partner stores.",
    'faq.2.question': 'What types of offers can I find?',
    'faq.2.answer': "You'll find discounts on dining, groceries, fashion, beauty services, electronics and much more. Our partners cover a wide range of businesses in Abidjan.",
    'faq.3.question': 'How are the offers personalized?',
    'faq.3.answer': "Our algorithm learns your preferences over time based on your interactions. The more you use Swoop, the more relevant and tailored the offers become.",
    'faq.4.question': 'Is Swoop available outside Abidjan?',
    'faq.4.answer': "Currently, Swoop is only available in Abidjan, Ivory Coast. We plan to expand to other cities soon. Stay connected for updates!",
    'faq.5.question': 'How do I become a Swoop partner?',
    'faq.5.answer': "If you're a merchant in Abidjan and want to join our partner network, contact us at partenaires@swoop.ci. We'll help you reach new customers through our platform.",

    // Final CTA
    'cta.heading1': 'Ready to',
    'cta.heading2': 'save',
    'cta.subtitle': "Join thousands of users in Abidjan who save every day with Swoop.",
    'cta.appStore': 'Download on',
    'cta.googlePlay': 'Available on',

    // Footer
    'footer.tagline': "Your best deals delivered directly by chat. Save every day in Abidjan.",
    'footer.quickLinks': 'Quick links',
    'footer.contact': 'Contact',
    'footer.location': "Abidjan, Ivory Coast",
    'footer.copyright': '© 2026 Swoop. All rights reserved.',

    // Categories (feature section phone)
    'cat.restaurants': '🍽️ Restaurants',
    'cat.fashion': '👗 Fashion',
    'cat.beauty': '💇 Beauty',
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;
