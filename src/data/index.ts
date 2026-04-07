export interface Show {
  id: string;
  title: string;
  description: string;
  posterImage: string;
  heroImage: string;
  category: 'trending' | 'action' | 'drama' | 'comedy';
  rating: string;
  year: number;
  duration: string;
  episodes: number;
  genres: string[];
  director: string;
  writer: string;
  cast: string[];
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'Alle' },
  { id: 'trending', name: '🔥 Trending' },
  { id: 'action', name: '⚡ Action' },
  { id: 'drama', name: '🎭 Drama' },
  { id: 'comedy', name: '😂 Komödie' },
];

// Placeholder image URLs
const placeHolder = (id: string) => `https://picsum.photos/500/750?random=${id}`;
const placeHolderHero = (id: string) => `https://picsum.photos/1920/1080?random=${id}h`;

export const allShows: Show[] = [
  {
    id: '1',
    title: 'Der letzte König',
    description: 'Eine epische Saga über Macht, Ambition und Verrat. Ein junger König muss sich gegen dunkle Kräfte behaupten, um sein Reich zu retten.',
    posterImage: placeHolder('1'),
    heroImage: placeHolderHero('1'),
    category: 'trending',
    rating: '16',
    year: 2024,
    duration: '50min',
    episodes: 8,
    genres: ['Drama', 'Abenteuer', 'Fantasy'],
    director: 'Klaus Mueller',
    writer: 'Anna Schmidt',
    cast: ['Max Mustermann', 'Sarah Winter', 'Thomas König'],
  },
  {
    id: '2',
    title: 'Neon City',
    description: 'In einer dystopischen Zukunft kämpft ein Detektiv gegen einen unsichtbaren Feind. Eine packende Mischung aus Cyberpunk und Thriller.',
    posterImage: placeHolder('2'),
    heroImage: placeHolderHero('2'),
    category: 'action',
    rating: '18',
    year: 2024,
    duration: '55min',
    episodes: 10,
    genres: ['Sci-Fi', 'Thriller', 'Action'],
    director: 'Robert Neumann',
    writer: 'Lisa Hoffmann',
    cast: ['Michael Fischer', 'Julia Krause', 'David Bauer'],
  },
  {
    id: '3',
    title: 'Herzensbruch',
    description: 'Eine emotionale Reise durch Liebe und Verlust. Zwei Menschen kämpfen darum, ihre Beziehung in schwierigen Zeiten zu retten.',
    posterImage: placeHolder('3'),
    heroImage: placeHolderHero('3'),
    category: 'drama',
    rating: '12',
    year: 2024,
    duration: '45min',
    episodes: 6,
    genres: ['Drama', 'Romantik', 'Familie'],
    director: 'Eva Meyer',
    writer: 'Christian Wolff',
    cast: ['Sandra Müller', 'Oliver Weber', 'Petra Lang'],
  },
  {
    id: '4',
    title: 'Die besten Jahre',
    description: 'Eine humorvolle Serie über eine Gruppe von Freunden, die versucht, das Leben zu meistern. Witzig, herzlich und voller überraschender Wendungen.',
    posterImage: placeHolder('4'),
    heroImage: placeHolderHero('4'),
    category: 'comedy',
    rating: '6',
    year: 2024,
    duration: '30min',
    episodes: 12,
    genres: ['Komödie', 'Drama', 'Familie'],
    director: 'Martin Schuster',
    writer: 'Sonja Roth',
    cast: ['Benjamin Schulz', 'Katrin Mayer', 'Felix Richter'],
  },
  {
    id: '5',
    title: 'Das geheime Reich',
    description: 'Eine mystische Reise durch verzauberte Welten, wo antike Prophezeiungen auf moderne Helden treffen. Spannung, Romantik und übernatürliche Wendungen erwarten dich.',
    posterImage: placeHolder('5'),
    heroImage: placeHolderHero('5'),
    category: 'trending',
    rating: '12',
    year: 2023,
    duration: '60min',
    episodes: 16,
    genres: ['Fantasy', 'Abenteuer', 'Drama'],
    director: 'Sebastian Lange',
    writer: 'Annika Berg',
    cast: ['Emma Brandt', 'Lucas Stein', 'Helena König'],
  },
  {
    id: '6',
    title: 'Explosion der Sinne',
    description: 'Ein Actionfilm voller spektakulärer Verfolgungsjagden und Abenteuer. Ein ehemaliger Agent wird in einen gefährlichen Plan verwickelt.',
    posterImage: placeHolder('6'),
    heroImage: placeHolderHero('6'),
    category: 'action',
    rating: '16',
    year: 2024,
    duration: '120min',
    episodes: 1,
    genres: ['Action', 'Thriller', 'Spionage'],
    director: 'Daniel Kreutz',
    writer: 'Klaus Bachmann',
    cast: ['Jan Keller', 'Nina Hoffmann', 'Viktor Starck'],
  },
  {
    id: '7',
    title: 'Verlorene Zeiten',
    description: 'Ein tiefgründiges Drama über Familie, Geheimnis und Versöhnung. Ein Mann kehrt in seine Heimatstadt zurück und wird mit seiner Vergangenheit konfrontiert.',
    posterImage: placeHolder('7'),
    heroImage: placeHolderHero('7'),
    category: 'drama',
    rating: '12',
    year: 2023,
    duration: '50min',
    episodes: 8,
    genres: ['Drama', 'Familie', 'Psychologisch'],
    director: 'Isabella Richter',
    writer: 'Marco Sartori',
    cast: ['Andreas Merkel', 'Anja Müller', 'Carl Neumann'],
  },
  {
    id: '8',
    title: 'Büro-Chaos',
    description: 'Eine lustige Serie über die verrückten Alltagserlebnisse in einem modernen Büro. Verrückte Charaktere, unerwartete Situationen und viele Lacher.',
    posterImage: placeHolder('8'),
    heroImage: placeHolderHero('8'),
    category: 'comedy',
    rating: '6',
    year: 2024,
    duration: '25min',
    episodes: 15,
    genres: ['Komödie', 'Arbeitsleben', 'Satire'],
    director: 'Klaus Zimmermann',
    writer: 'Petra Wagner',
    cast: ['Markus Roth', 'Sandra Keller', 'Tom Bauer'],
  },
  {
    id: '9',
    title: 'Sternenfeuer',
    description: 'Ein Science-Fiction-Epos, das über mehrere Galaxien hinweg spielt. Menschheit gegen eine außerirdische Bedrohung.',
    posterImage: placeHolder('9'),
    heroImage: placeHolderHero('9'),
    category: 'trending',
    rating: '12',
    year: 2024,
    duration: '55min',
    episodes: 10,
    genres: ['Sci-Fi', 'Action', 'Drama'],
    director: 'Frank Mueller',
    writer: 'Dirk Hoffman',
    cast: ['Robert Stern', 'Yulia Volkova', 'Miles Garcia'],
  },
  {
    id: '10',
    title: 'Jagd in der Nacht',
    description: 'Ein intensiver Thriller über einen Kriminalkommissar, der einen Serienmörder jagt. Mit unverhersehbaren Wendungen und Spannung bis zum Ende.',
    posterImage: placeHolder('10'),
    heroImage: placeHolderHero('10'),
    category: 'action',
    rating: '16',
    year: 2024,
    duration: '45min',
    episodes: 9,
    genres: ['Thriller', 'Krimi', 'Drama'],
    director: 'Thomas Schröder',
    writer: 'Angela Bauer',
    cast: ['Stefan Krause', 'Heike Lorenz', 'Klaus Richter'],
  },
  {
    id: '11',
    title: 'Flüstern der Seele',
    description: 'Ein poetisches Drama über innere Konflikte und persönliches Wachstum. Eine Frau muss sich selbst neu entdecken.',
    posterImage: placeHolder('11'),
    heroImage: placeHolderHero('11'),
    category: 'drama',
    rating: '6',
    year: 2023,
    duration: '40min',
    episodes: 5,
    genres: ['Drama', 'Psychologisch', 'Familie'],
    director: 'Maria Alberti',
    writer: 'Linda Cappelletti',
    cast: ['Alessandra Romano', 'Massimo Russo', 'Giulia Sforza'],
  },
  {
    id: '12',
    title: 'Lachen bis zum Umfallen',
    description: 'Eine skurrile Comedy-Serie über absurde Situationen und verrückte Charaktere. Garantiert für viele Lacher.',
    posterImage: placeHolder('12'),
    heroImage: placeHolderHero('12'),
    category: 'comedy',
    rating: '6',
    year: 2024,
    duration: '30min',
    episodes: 8,
    genres: ['Komödie', 'Satire', 'Absurd'],
    director: 'Bruno Rossi',
    writer: 'Franco Mancini',
    cast: ['Roberto Conte', 'Francesca Marino', 'Claudio Baresi'],
  },
];

export const featuredShows: Show[] = [allShows[0], allShows[1], allShows[4]];

export const trendingShows: Show[] = allShows.filter((show) => show.category === 'trending');
export const actionShows: Show[] = allShows.filter((show) => show.category === 'action');
export const dramaShows: Show[] = allShows.filter((show) => show.category === 'drama');
export const comedyShows: Show[] = allShows.filter((show) => show.category === 'comedy');