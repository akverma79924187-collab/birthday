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

export const BIRTHDAY_DATA = {
  herName: "Saloni",
  hisName: "Amit",
  nickname: "My Love",
  birthdayDate: "September 7",
  ageYears: "24",
  relationshipStart: "October 14, 2021",
  mainThemeColor: "#e6ca85",
  soundtrackTitle: "Kaun Tujhe",
  soundtrackArtist: "Instrumental Ringtone",
  soundtrackAudioUrl: "/song/Instrumental%20Ringtone%20__%20Kaun%20Tujhe%20Yu%20Pyar%20Karega%20Instrumental%20Ringtone%20__%20Kaun%20Tujhe%20Song%20Ringtone.mp3",

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
      "Hii Saloni , Mujhe pta hai tum kisi or ke saath khush to nhi hogi mere bina or hm v khush  nhi hai pta nhi aisa kya hua jo hmdono alg ho gye hai ye to nhi hona chahiye tha na yaar hmdono ka promise tha ki saaadi se phle alg nhi honge ha hm maan rhe hai hmse glti hua tha ek do mahina thora hm pgla gye the lekin hm sb shi kr dete na tum ek baar bolti to tum sidhe hmko chorna hi psnd ki wo nhi krna chahiye tha yaar or hmko pta hai ye lrka log bahut kamina hota hai fer me hi rhta hai kb kiska relationship tute or bharka ke hm jgh le le uska tm usko nhi smjh paayi yaar tm mere sath rhi thi na 3 saal or tm hmko chor di tumahre last love the na saloni bahut rote hai tumahre liye choro yaar jo v hua shi to nhi hua hai hmdono ke bich me lekin hm apna glti sudhar liye hai hm tumahra hmesha wait krenge jb tumko duniya dikh jayega or wo lrka chor jayega tb tum bina kuch soche smjhe hmko msg krna hm hmesha wait krenge saloni kbhi v koi v thora sa v problem hoga hm promise kiye hai hm jarur aayenge kbhi v tumahre liye availabe rhenge bs jha ho kisi ke saath ho khush rhna or ab se hm kbhi disturb nhi krenge tumko saloni hm ye new sim liye hai sirf tmko birthday wish krne ke liye bahut sara new sim liye hai tumse baat krne ke liye lekin ek call me block krti ho itne bure the kya saloni jo itna hate ho gya hmse yaar 2mahina me itna change aisi to nhi to thi saloni tm yaar ikdm  masum thi bahut jayda pyari thi tm choro koi baat nhi agr ye msg prhogi to ek baar has dena love you byy saloni wait krenge saadi nhi krenge wait rhega tumahra saloni hmesha love you or once again happy birthday my love . "
    ],
    closing: "Forever & Entirely Yours,",
    signature: "Amit"
  },

  surpriseMessage: {
    headline: "A Small Letter For You",
    subtext: "Sirf ek note, dil se.",
    secretNote: "Saloni, tum meri zindagi ka sabse khoobsurat hissa ho. Tumhare bina, ye duniya adhoori lagti hai. Tum meri har khushi ka sabab ho, aur main hamesha tumhare saath rehna chahta hoon. Hm ye last note likh rhe hai tumahre liye uske baad kbhi future me tumahra msg aayega tbhi hm v reply krenge ya msg v aise kbhi ab bina mtlb ke disturb nhi krenge tmko tm jha v ho khush rho hmko abhi v tumse hi pyaar hai or hmko kbhi kisi or se pyaar v nhi hoga jo hm bole the ki tumse hi krenge hm last love wo tm hi ho tumahri jgh mere zindagi me koi nhi le skta hai kbhi v . Hm tumahra hmesha wait krenge saloni jb tk zinda rhenge hmesha mtlb hmesha or ye promise  kr rhe hai tmko saloni ki har saal birthday wish krenge tumko Tum glt ki ho yaar hmse ek baar glti hua tha hm bahut maafi mange hai saloni bahut rote hai us glti ke wjh se aaj mere paas koi v nhi bacha bs ek akela room hai akele rhte hai tmko yaad krte rhte hai song sunte rhte hai tumahra photo dekhte rhte hai tumahra har ek photo sambhal ke rkhe hai saloni hm jante hai bhagwan tumko jarur mere paas layenege ek din or saloni kbhi v tmko mere paas aana hoga bina kuch soche apna smjh ke bs ek msg krna saloni hm tumahre paas rhenge koi v problem me kbhi v bahut rote hai yaar saloni kaise chor ke chli gyi tm or ek to nasha ka aadat lga hai hmko bahut jayda pta na kaise sb chutega chlo enjoy kro saloni tumahra day hai aage se disturb nhi krenge tumko kbhi . Tum meri zindagi ka sabse khoobsurat hissa ho, aur main hamesha tumhe pyaar karta rahunga."
  }
};
