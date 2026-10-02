export const stats = [
  {
    id: 'revenue',
    label: 'Revenu mensuel',
    value: '48 320 €',
    delta: '+12,4 %',
    positive: true,
    accent: '#007BFF',
  },
  {
    id: 'tasks',
    label: 'Tâches actives',
    value: '127',
    delta: '+8 cette semaine',
    positive: true,
    accent: '#40E0D0',
  },
  {
    id: 'invoices',
    label: 'Factures émises',
    value: '64',
    delta: '18 en attente',
    positive: false,
    accent: '#7B1FA2',
  },
  {
    id: 'payments',
    label: 'Paiements Stripe',
    value: '91 %',
    delta: '+3,2 %',
    positive: true,
    accent: '#00C9FF',
  },
];

export const revenueData = [
  { mois: 'Jan', revenu: 28400, paiements: 22100 },
  { mois: 'Fév', revenu: 31200, paiements: 26800 },
  { mois: 'Mar', revenu: 29800, paiements: 25100 },
  { mois: 'Avr', revenu: 35600, paiements: 31200 },
  { mois: 'Mai', revenu: 38900, paiements: 34100 },
  { mois: 'Juin', revenu: 42100, paiements: 38200 },
  { mois: 'Juil', revenu: 45800, paiements: 41900 },
  { mois: 'Août', revenu: 48320, paiements: 44600 },
];

export const taskStatusData = [
  { name: 'Terminées', value: 58, color: '#40E0D0' },
  { name: 'En cours', value: 34, color: '#007BFF' },
  { name: 'En attente', value: 22, color: '#7B1FA2' },
  { name: 'Retardées', value: 13, color: '#FF5252' },
];

export const projects = [
  {
    id: 1,
    name: 'Refonte portail client',
    client: 'NovaTech SAS',
    progress: 78,
    status: 'En cours',
    due: '12 oct.',
    color: '#007BFF',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    id: 2,
    name: 'Migration facturation',
    client: 'Horizon Group',
    progress: 45,
    status: 'En cours',
    due: '28 oct.',
    color: '#7B1FA2',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
  },
  {
    id: 3,
    name: 'Onboarding partenaires',
    client: 'Atlas Retail',
    progress: 92,
    status: 'Presque fini',
    due: '5 oct.',
    color: '#40E0D0',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
  },
  {
    id: 4,
    name: 'Audit process Stripe',
    client: 'Lumina Pay',
    progress: 30,
    status: 'Nouveau',
    due: '15 nov.',
    color: '#00C9FF',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  },
];

export const tasks = [
  {
    id: 'T-1042',
    title: 'Valider devis Q4 NovaTech',
    project: 'Refonte portail client',
    priority: 'Haute',
    assignee: 'Camille R.',
    due: "Aujourd'hui",
    done: false,
  },
  {
    id: 'T-1041',
    title: 'Exporter factures PDF septembre',
    project: 'Migration facturation',
    priority: 'Moyenne',
    assignee: 'Lucas M.',
    due: 'Demain',
    done: false,
  },
  {
    id: 'T-1038',
    title: 'Configurer webhooks Stripe',
    project: 'Audit process Stripe',
    priority: 'Haute',
    assignee: 'Sofia B.',
    due: '3 oct.',
    done: true,
  },
  {
    id: 'T-1035',
    title: 'Relancer clients en retard',
    project: 'Onboarding partenaires',
    priority: 'Basse',
    assignee: 'Hugo D.',
    due: '4 oct.',
    done: false,
  },
  {
    id: 'T-1031',
    title: 'Préparer rapport partenaires',
    project: 'Onboarding partenaires',
    priority: 'Moyenne',
    assignee: 'Camille R.',
    due: '6 oct.',
    done: false,
  },
];

export const invoices = [
  {
    id: 'FAC-2026-088',
    client: 'NovaTech SAS',
    amount: '12 450 €',
    status: 'Payée',
    date: '28 sept. 2026',
    method: 'Stripe',
  },
  {
    id: 'FAC-2026-087',
    client: 'Horizon Group',
    amount: '8 920 €',
    status: 'En attente',
    date: '26 sept. 2026',
    method: 'Virement',
  },
  {
    id: 'FAC-2026-086',
    client: 'Atlas Retail',
    amount: '4 180 €',
    status: 'Payée',
    date: '22 sept. 2026',
    method: 'Stripe',
  },
  {
    id: 'FAC-2026-085',
    client: 'Lumina Pay',
    amount: '15 600 €',
    status: 'En retard',
    date: '18 sept. 2026',
    method: 'Stripe',
  },
  {
    id: 'FAC-2026-084',
    client: 'Pulse Media',
    amount: '3 240 €',
    status: 'Brouillon',
    date: '15 sept. 2026',
    method: '—',
  },
];

export const activities = [
  {
    id: 1,
    text: 'Facture FAC-2026-088 marquée comme payée via Stripe',
    time: 'Il y a 12 min',
    type: 'payment',
  },
  {
    id: 2,
    text: 'Nouvelle tâche créée dans Refonte portail client',
    time: 'Il y a 34 min',
    type: 'task',
  },
  {
    id: 3,
    text: 'PDF généré pour FAC-2026-087',
    time: 'Il y a 1 h',
    type: 'invoice',
  },
  {
    id: 4,
    text: 'Sofia B. a complété Configurer webhooks Stripe',
    time: 'Il y a 2 h',
    type: 'task',
  },
  {
    id: 5,
    text: 'Rappel envoyé à Lumina Pay pour FAC-2026-085',
    time: 'Il y a 3 h',
    type: 'payment',
  },
];

export const team = [
  {
    name: 'Camille R.',
    role: 'Chef de projet',
    avatar:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80',
  },
  {
    name: 'Lucas M.',
    role: 'Facturation',
    avatar:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&q=80',
  },
  {
    name: 'Sofia B.',
    role: 'Intégrations',
    avatar:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&q=80',
  },
];

export const navItems = [
  { id: 'overview', label: "Vue d'ensemble" },
  { id: 'projects', label: 'Projets' },
  { id: 'tasks', label: 'Tâches' },
  { id: 'invoices', label: 'Factures' },
  { id: 'payments', label: 'Paiements' },
];
