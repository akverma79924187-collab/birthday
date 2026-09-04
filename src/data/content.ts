export interface Memory {
  id: string;
  title: string;
  category: 'Travel' | 'Dates' | 'Cozy' | 'Celebrations';
  date: string;
  location: string;
  image: string;
  caption: string;
  quote?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  image: string;
  highlight: string;
}

export interface Moment {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  tag: string;
}

export interface Reason {
  id: number;
  text: string;
  category: 'Sweet' | 'Funny' | 'Deep' | 'Everyday';
}

export interface FutureDream {
  id: string;
  title: string;
  timeframe: string;
  description: string;
  image: string;
  location: string;
  status: 'Planned' | 'Dreaming' | 'Forever';
}

export interface LyricLine {
  timeSec: number;
  text: string;
}

export const BIRTHDAY_DATA = {
  herName: "Saloni",
  hisName: "Amit",
  nickname: "My Love",
  birthdayDate: "September 2",
  ageYears: "24",
  relationshipStart: "October 14, 2021",
  mainThemeColor: "#e6ca85",
  soundtrackTitle: "Until I Found You",
  soundtrackArtist: "Stephen Sanchez",
  soundtrackAudioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-cinematic-piano-113220.mp3",
  
  featuredVideo: "/image/KJUD8091.MP4",
  
  heroSubheading: "A cinematic celebration dedicated to the most extraordinary person in my universe.",
  
  story: [
    {
      id: "story-1",
      year: "2021",
      date: "October 14, 2021",
      title: "The First Instant",
      subtitle: "Where time held its breath",
      description: "A warm rainy Tuesday evening at the corner cafe. You walked in with a dripping coat, turned to smile at Amit, and suddenly every background noise dissolved into quiet harmony.",
      location: "San Francisco, CA",
      image: "/image/BLZJ8437.JPG",
      highlight: "The exact second my world changed direction."
    },
    {
      id: "story-2",
      year: "2022",
      date: "February 14, 2022",
      title: "Midnight Under Starlight",
      subtitle: "Our first escape into the quiet night",
      description: "We drove out to the coastal cliffs past midnight, wrapped in a giant fleece blanket, listening to vinyl records while ocean waves crashed far below.",
      location: "Big Sur Coast",
      image: "/image/IMG_7350.JPG",
      highlight: "When you whispered that you felt safe in my arms."
    },
    {
      id: "story-3",
      year: "2023",
      date: "July 22, 2023",
      title: "Lost in Florence",
      subtitle: "Cobblestone alleys & sunlit gelato",
      description: "Two weeks of getting gloriously lost in Tuscan streets, drinking local red wine on sun-baked rooftops, and sharing endless gelato scoops as twilight lit the Duomo.",
      location: "Florence, Italy",
      image: "/image/JBIR1312.JPG",
      highlight: "Laughing so hard our cheeks hurt under the olive trees."
    },
    {
      id: "story-4",
      year: "2024",
      date: "November 03, 2024",
      title: "Our Quiet Sanctuary",
      subtitle: "Making a house a sanctuary of love",
      description: "Moving into our place, unpacking cardboard boxes surrounded by fairy lights, ordering late-night takeaway on the bare wooden floor, knowing home is wherever you are.",
      location: "Our Home",
      image: "/image/RFXM5866.JPG",
      highlight: "First morning coffee served in our sunlit living room."
    },
    {
      id: "story-5",
      year: "2026",
      date: "Today & Forever",
      title: "Another Glorious Chapter",
      subtitle: "Happy Birthday, My Endless Horizon",
      description: "Standing beside you today, Saloni, filled with immense pride, gratitude, and deep reverence for the soul you are. Every day with you is a gift Amit promises to cherish forever.",
      location: "With All My Heart",
      image: "/image/SJDM3997.JPG",
      highlight: "The best chapters of our life are still unwritten."
    }
  ] as TimelineEvent[],

  memories: [
    {
      id: "mem-1",
      title: "Sunset Elegance",
      category: "Travel",
      date: "August 2023",
      location: "Positano, Italy",
      image: "/image/BLZJ8437.JPG",
      caption: "Watching the golden sky dip below the horizon with you, Saloni, by my side.",
      quote: "In your eyes, I saw every sunset I ever dreamed of."
    },
    {
      id: "mem-2",
      title: "Radiant Smiles",
      category: "Dates",
      date: "October 2023",
      location: "Our Kitchen",
      image: "/image/IMG_7350.JPG",
      caption: "Wrapped in oversized sweaters, warm mugs in hand, listening to jazz on a cozy afternoon.",
      quote: "Perfection isn't a place, it's a quiet morning with you."
    },
    {
      id: "mem-3",
      title: "Candlelit Evening",
      category: "Dates",
      date: "December 2023",
      location: "Downtown Bistro",
      image: "/image/JBIR1312.JPG",
      caption: "Our anniversary dinner illuminated by soft amber glowing candles and live music.",
      quote: "You make every normal room feel like a grand royal ball."
    },
    {
      id: "mem-4",
      title: "Live Motion Memory",
      category: "Celebrations",
      date: "Recent Special Moment",
      location: "Our Happy Place",
      image: "/image/SJDM3997.JPG",
      isVideo: true,
      videoUrl: "/image/KJUD8091.MP4",
      caption: "A live candid video capture of our pure laughter, joy, and candid energy together.",
      quote: "A live motion picture of our eternal happiness."
    },
    {
      id: "mem-5",
      title: "Cozy Home Sanctuary",
      category: "Cozy",
      date: "January 2024",
      location: "Living Room",
      image: "/image/RFXM5866.JPG",
      caption: "Unpacking memories, sharing laughter, and creating our personal sanctuary of love.",
      quote: "Home is wherever I am holding your hand."
    },
    {
      id: "mem-6",
      title: "Starlight Celebration",
      category: "Celebrations",
      date: "September 2024",
      location: "Rooftop Garden",
      image: "/image/SJDM3997.JPG",
      caption: "Fairy lights sparkling against night skies as all our favorite people raised a glass to Saloni.",
      quote: "Celebrating your light will forever be my life's pleasure."
    },
    {
      id: "mem-7",
      title: "Coastal Road Trip",
      category: "Travel",
      date: "June 2024",
      location: "Pacific Northwest",
      image: "/image/UXLE1443.JPG",
      caption: "Windows down, sea breeze in your hair, singing at the top of our lungs to classic indie hits.",
      quote: "Not all who wander are lost; some are just deeply in love."
    },
    {
      id: "mem-8",
      title: "Sweet Moments Together",
      category: "Cozy",
      date: "February 2025",
      location: "Home Sweet Home",
      image: "/image/WURB1366.JPG",
      caption: "Pure belly laughter, shared secret jokes, and unforgettable warmth at 1 AM.",
      quote: "Sweetness is your nature; every second with you is a blessing."
    }
  ] as Memory[],

  moments: [
    {
      id: "m-1",
      number: "01",
      title: "The Unconscious Nose Crunch",
      description: "Whenever Saloni gets concentrated reading a book or solving a puzzle, your nose crunches up slightly. It's the most endearing habit in existence.",
      tag: "Pure Magic",
      image: "/image/BLZJ8437.JPG"
    },
    {
      id: "m-2",
      number: "02",
      title: "Your Unconditional Kindness",
      description: "How you speak to strangers, animals, and stray kittens with identical gentle warmth and grace. You make the world softer just by walking through it.",
      tag: "Golden Heart",
      image: "/image/IMG_7350.JPG"
    },
    {
      id: "m-3",
      number: "03",
      title: "The Pre-Laugh Snicker",
      description: "When something is hilarious, you snicker twice before the full laughter even bursts out. That sound instantly brightens Amit's worst days.",
      tag: "Endless Joy",
      image: "/image/JBIR1312.JPG"
    },
    {
      id: "m-4",
      number: "04",
      title: "Your Cozy Morning Hugs",
      description: "Half-awake in the morning light, reaching out to wrap your arms around me with total trust and peace. Time literally stops.",
      tag: "Sanctuary",
      image: "/image/RFXM5866.JPG"
    },
    {
      id: "m-5",
      number: "05",
      title: "How You Remember Every Detail",
      description: "You remember exact songs people loved years ago, tiny favorite snacks, and old stories. You care in a way that heals people.",
      tag: "Thoughtful Soul",
      image: "/image/SJDM3997.JPG"
    }
  ] as Moment[],

  reasons: [
    "Your smile illuminates even the darkest, stormiest days.",
    "You listen with your whole heart without ever judging.",
    "The cute dance you do when your favorite food arrives at the table.",
    "How your eyes sparkle when you get passionate about an idea.",
    "You hold my hand with gentle certainty wherever we walk.",
    "Your laugh is my absolute favorite sound in the universe.",
    "You make mundane grocery trips feel like romantic adventures.",
    "The way you rest your head on my shoulder during long flights.",
    "How brave and determined you are when facing challenges.",
    "You give the warmest, most comforting hugs in the world.",
    "You make Amit want to become a better man every single day.",
    "Your endless patience when I misplace my keys for the tenth time.",
    "How you look in my oversized hoodies on lazy Sunday mornings.",
    "Your artistic eye for beauty in simple everyday things.",
    "The gentle way you wake me up with soft kisses.",
    "How fiercely loyal you are to the people you love.",
    "You remember the little things that everyone else forgets.",
    "Because when I'm with Saloni, I am completely, unapologetically myself.",
    "Your infectious enthusiasm for spontaneous midnight road trips.",
    "The peace I feel simply resting beside you under quiet skies.",
    "How your hand fits seamlessly inside mine like two pieces of a puzzle.",
    "Your elegant grace and effortless warmth in every room you enter.",
    "You believe in my wildest dreams even when I hesitate.",
    "Because your love feels like coming home after a long journey.",
    "How you turn simple home-cooked meals into gourmet celebrations.",
    "Your hilarious inside jokes that only the two of us understand.",
    "The soft scent of vanilla and lavender that lingers when you pass.",
    "How you look at me like I am the only person in the crowded room.",
    "Your unshakeable integrity and commitment to truth.",
    "Because loving Saloni is the easiest and most natural thing Amit has ever done."
  ],

  lyrics: [
    { timeSec: 0, text: "♪ (Gentle acoustic melody plays...)" },
    { timeSec: 5, text: "I was lost in the dark till the day that I found you," },
    { timeSec: 12, text: "Like a spark in the night, all my world spun around you." },
    { timeSec: 19, text: "Every beat of my heart speaks your name in a whisper," },
    { timeSec: 26, text: "With your hand held in mine, every horizon grows clearer." },
    { timeSec: 33, text: "In every quiet morning, in every starry night," },
    { timeSec: 40, text: "You are my endless sanctuary, my golden light." },
    { timeSec: 48, text: "Happy Birthday, Saloni, now and for all time. ♪" }
  ] as LyricLine[],

  letter: {
    salutation: "To My Dearest Saloni,",
    paragraphs: [
      "As I sit down to write this letter, the house is quiet and moonlight filters through the window blinds. I catch myself smiling just thinking about your face, your laugh, and the incredible journey we have shared together.",
      "When we first met, I knew you were special. But I could never have anticipated just how profoundly you would reshape my world. You brought light into dark corners, quiet grace into noisy days, and an unconditional warmth that makes every challenge feel small.",
      "Thank you for being my confidante, my partner in crime, my favorite adventure buddy, and my absolute best friend. Thank you for your patience, your brilliant mind, your gentle touch, and your radiant spirit.",
      "Today, as we celebrate your birthday, I want you to know that my love for you isn't tied to a moment or a season. It grows deeper with every morning coffee, every shared joke, every quiet glance, and every starlit night.",
      "May this year bring you boundless health, overwhelming joy, thrilling discoveries, and all the magical dreams your beautiful heart desires. I will be right here beside you, loving you more with every tick of the clock."
    ],
    closing: "Forever & Entirely Yours,",
    signature: "Amit"
  },

  futureDreams: [
    {
      id: "fd-1",
      title: "Glass Igloo Under the Northern Lights",
      timeframe: "Winter 2026",
      description: "Lying warm under heavy duvets in Lapland, watching emerald Aurora borealis ribbons dance across polar skies together.",
      image: "/image/BLZJ8437.JPG",
      location: "Rovaniemi, Finland",
      status: "Planned"
    },
    {
      id: "fd-2",
      title: "Our Sunlit Architectural Sanctuary",
      timeframe: "2027",
      description: "Building our dream home with floor-to-ceiling glass, an expansive garden filled with white hydrangeas, and a library room with a fireplace.",
      image: "/image/IMG_7350.JPG",
      location: "Countryside Hills",
      status: "Dreaming"
    },
    {
      id: "fd-3",
      title: "Sailing the Amalfi Coast at Sunset",
      timeframe: "Summer 2027",
      description: "Chartering a private wooden sailboat around Capri, diving into crystal sapphire waters, and drinking limoncello on deck.",
      image: "/image/JBIR1312.JPG",
      location: "Amalfi, Italy",
      status: "Planned"
    },
    {
      id: "fd-4",
      title: "Adopting Our Golden Retriever",
      timeframe: "Spring 2027",
      description: "Welcoming a fluffy golden pup who will run wildly through autumn leaves on our weekend forest walks.",
      image: "/image/UXLE1443.JPG",
      location: "Our Back Garden",
      status: "Dreaming"
    },
    {
      id: "fd-5",
      title: "Growing Old Side by Side",
      timeframe: "Forever",
      description: "Sitting on our porch rocking chairs fifty years from today, holding hands with wrinkled fingers, still head over heels in love.",
      image: "/image/WURB1366.JPG",
      location: "Everywhere",
      status: "Forever"
    }
  ] as FutureDream[],

  surpriseMessage: {
    headline: "You Are My Greatest Blessing",
    subtext: "I have arranged a real surprise weekend getaway just for you! Pack a bag for Friday morning...",
    giftCardCode: "SALONI-BIRTHDAY-2026-PARIS-VIP",
    secretNote: "Check your bedside nightstand drawer for two golden envelopes with plane tickets to Paris!"
  }
};
