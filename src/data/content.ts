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

export const BIRTHDAY_DATA = {
  herName: "Saloni",
  hisName: "Amit",
  nickname: "My Love",
  birthdayDate: "September 7",
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
      year: "2023",
      date: "November  04, 2023",
      title: "The First Instant",
      subtitle: "Where time held its breath",
      description: "First time jb tmko hm dekhe the tb se hi tumse pyar ho gya tha bahut jayda saloni lekin jb tum mil gyi hmko tb se hm tmko bacha ke rkhe or aisa koi glti nhi kiye the jisse tmko hmko chorna pre lekin ek glti hua hmse or hmdono alg ho gye saloni abhi v tumse bahut pyar hai hmko or hm bs tumahra hi wait kr rhe hai kbhi v tmko wapas aana hoga bina kuch soche smjhe hmko msg kr skti ho ab se kbhi hurt nhi krenge saloni or tmko hm kbhi v accept kr lenge kaise v aaogi to hmesha se tumahre hai tumse hi ek hmko pyar hua hai hmko or kisi se v  nhi aaj v tumahraa wait kr rhe hai",
      
      image: "/image/BLZJ8437.JPG",
      highlight: "The exact second my world changed direction."
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
    "Saloni tum bahut jayda pyari ho. Jb tumko first time dekhe the usi time hmko tumse bahut jayda pyar ho gya tha.",
    "Saloni, you remember the little things that everyone else forgets.",
    "Tum Saloni jitna din mere saath rhi utna din bahut jayda care ki mera. Jb tk tmko mera fikr tha bahut kuch sikhayi hmko.",
    "Tum Saloni bahut bahut jayda pyari ho.",
    "I love you forever and forever",
    "Tum hi hmko pyaar ka mtlb btayi kya hota hai kaise hota hai tumarhe saath rhne ke baad hi hmko pta chla ki pyaar kaisa hota hai kya feel hota hai ",
    "Tumahre saath rona Tumahre saath hasna Tumaahre saath hm kitna sapna dekhe the bahut kuch dream kiye the sb to ab khtm ho gya hai lekin koi baat nhi hmko bhagwan g pe or mere pyaar pe bharosh hai bahut jayda ki hm tmko apna bna lenge or hm hmesha wait krenge saloni hmesha or hmesha tumahra hi rhenge ",
    "Hmko sb yaad hai saloni tumahre saaath kaise ye tin saal bitaye the bahut kuch acha v tha hmaare bich jitna acha baat tha wo sbke wjh se hi hmko tumse itna pyaar hai abhi tk or hmesha tumse hi rhega",
    "Saloni hmko tumahra hasna bahut psnd hai jb tm hsti ho bahut pyari lgti ho bahut jayda pyari ho tumahre saath hmko sbse jayda khushi milti hai or hmesha tumahre saath rhna chahte hai or hmesha tumahre saath hi rhenge saloni",
    "Tumhare saath har din ek naya kahani bana rahi ho, aur har kahani tumhare saath hi shuru hoti hai."
  ],

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
    headline: "A Small Letter For You",
    subtext: "Sirf ek note, dil se.",
    secretNote: "Saloni, tum meri zindagi ka sabse khoobsurat hissa ho. Tumhare bina, ye duniya adhoori lagti hai. Tum meri har khushi ka sabab ho, aur main hamesha tumhare saath rehna chahta hoon. Hm ye last note likh rhe hai tumahre liye uske baad kbhi future me tumahra msg aayega tbhi hm v reply krenge ya msg v aise kbhi ab bina mtlb ke disturb nhi krenge tmko tm jha v ho khush rho hmko abhi v tumse hi pyaar hai or hmko kbhi kisi or se pyaar v nhi hoga jo hm bole the ki tumse hi krenge hm last love wo tm hi ho tumahri jgh mere zindagi me koi nhi le skta hai kbhi v . Hm tumahra hmesha wait krenge saloni jb tk zinda rhenge hmesha mtlb hmesha or ye promise  kr rhe hai tmko saloni ki har saal birthday wish krenge tumko Tum glt ki ho yaar hmse ek baar glti hua tha hm bahut maafi mange hai saloni bahut rote hai us glti ke wjh se aaj mere paas koi v nhi bacha bs ek akela room hai akele rhte hai tmko yaad krte rhte hai song sunte rhte hai tumahra photo dekhte rhte hai tumahra har ek photo sambhal ke rkhe hai saloni hm jante hai bhagwan tumko jarur mere paas layenege ek din or saloni kbhi v tmko mere paas aana hoga bina kuch soche apna smjh ke bs ek msg krna saloni hm tumahre paas rhenge koi v problem me kbhi v bahut rote hai yaar saloni kaise chor ke chli gyi tm or ek to nasha ka aadat lga hai hmko bahut jayda pta na kaise sb chutega chlo enjoy kro saloni tumahra day hai aage se disturb nhi krenge tumko kbhi . Tum meri zindagi ka sabse khoobsurat hissa ho, aur main hamesha tumhe pyaar karta rahunga."
  }
};
