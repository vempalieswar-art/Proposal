export const GIRLFRIEND_NAME = 'Chethana (Chethu bngrm )'
export const YOUR_NAME = 'Eswar'

// Replace these placeholders with your real dates.
export const FIRST_MET_DATE = '[DATE]'
export const SPECIAL_DATE = '[DATE]'
export const ANNIVERSARY_DATE = '[DATE]'

// Replace these paths with your real photos and song.
export const HERO_IMAGE = '/assets/photo1.jpg'
export const STORY_IMAGE = '/assets/photo2.jpg'
export const SONG_PATH = '/assets/our-song.mp3'

export type Milestone = {
  title: string
  date: string
  message: string
  frame: string
  accent: string
}

export type MemoryItem = {
  caption: string
  hint: string
  image: string
  accent: string
}

export type DreamItem = {
  icon: string
  title: string
  note: string
}

export const storyMilestones: Milestone[] = [
  {
    title: 'Nuvvu Naa Life Lokki Vachina Roju',
    date: '',
    message: 'Appudu naaku teliyadhu mahh...\nnuvvu oka roju naa life lo intha important person avuthav ani.\nNuvvu vachav... naa world koncham beautiful ayyindhi. ❤️',
    frame: '💗',
    accent: 'rose',
  },
  {
    title: 'Mana Conversations',
    date: '',
    message: 'Mana chinna chinna conversations...\nslow ga mana bond ni strong chesayi.\nNee tho matladatam eppudo naa favourite part aipoyindhi.',
    frame: '💬',
    accent: 'gold',
  },
  {
    title: 'Nuvvu Special Aina Moment',
    date: '',
    message: 'Nee message kosam wait cheyyadam...\nnee tho matladithe happy ga feel avvadam...\nnuvvu sad ga unte naaku kuda badha padatam...\nappude ardham ayyindhi, nuvvu naaku special ani. ❤️',
    frame: '🥰',
    accent: 'lavender',
  },
  {
    title: 'Nuvvu Naa Person Ayyav',
    date: '',
    message: 'Best friend...\ncomfort person...\nhappiness...\nfamily...\n\nEla eppudu ayyavo teliyadhu,\nkaani ippudu nuvvu naa person. ❤️',
    frame: '❤️',
    accent: 'pink',
  },
  {
    title: 'Mana Memories',
    date: '',
    message: 'Mana navvulu...\nmana silly fights...\nlate-night talks...\ncute moments...\nanni kalisi mana story ni beautiful chesayi.\n\nPrathi memory naaku special, mahh. ❤️',
    frame: '🌙',
    accent: 'pearl',
  },
  {
    title: 'Through Everything',
    date: '',
    message: 'Perfect days tho paatu difficult days kuda vachayi.\nMistakes ayyayi... misunderstandings ayyayi...\n\nKaani manam okariki okaram vadulukoledu.\nAnduke mana bond naaku intha special.',
    frame: '🥺',
    accent: 'wine',
  },
  {
    title: 'Next Chapter',
    date: '',
    message: "Mana story ikkade end avvakudadhu mahh...\n\nInka chala memories,\ninka chala journeys,\ninka chala navvulu...\n\nanni kalisi create cheyyali.\n\nBecause...\n\n'Naa favourite story ki inka chala chapters raavali.' ❤️",
    frame: '💍',
    accent: 'rose',
  },
  {
    title: 'To Be Continued... ❤️',
    date: '',
    message: 'Mana story ki ending kaadhu mahh...\nidi just oka beautiful chapter.\n\nInka chala undhi...\nMana iddharam kalisi raayalsindhi. ❤️',
    frame: '✨',
    accent: 'gold',
  },
]

export const whyYouCards = [
  'Because your smile can fix the worst day.',
  'Because talking to you never feels like enough.',
  'Because ordinary moments become special when they are with you.',
  'Because your happiness matters to me more than I can explain.',
  'Because I keep seeing you in every version of my future.',
  'Because loving you feels like the best decision I keep making every day.',
]

const reasonOpeners = [
  'Your smile',
  'Your voice',
  'The way you care',
  'Your tiny expressions',
  'The way you make me laugh',
  'The way you understand me',
  'Your beautiful heart',
  'The way you make ordinary days feel special',
  'Your calm in the middle of chaos',
  'The way you listen so closely',
  'Your warmth when I need it most',
  'The softness in your laugh',
  'Your honesty',
  'The courage you carry quietly',
  'The way you remember little details',
  'Your patience',
  'The love you give so naturally',
  'The way your presence feels safe',
  'Your beautiful mind',
  'The future you make me believe in',
]

const reasonClosers = [
  'makes every hard day softer.',
  'feels like the first warm light after rain.',
  'turns an ordinary moment into a memory.',
  'reminds me that kindness is a kind of magic.',
  'makes me grateful to be loved by you.',
]

export const reasons = reasonOpeners.flatMap((open, openIndex) =>
  reasonClosers.map((close, closeIndex) => {
    const number = openIndex * reasonClosers.length + closeIndex + 1
    return `${number}. ${open} ${close}`
  }),
)

export const memoryGallery: MemoryItem[] = [
  {
    caption: 'That smile ❤️',
    hint: '[PHOTO_1]',
    image: '/assets/photo1.jpg',
    accent: 'rose',
  },
  {
    caption: 'One of my favorite memories.',
    hint: '[PHOTO_2]',
    image: '/assets/photo2.jpg',
    accent: 'gold',
  },
  {
    caption: 'Just us.',
    hint: '[PHOTO_3]',
    image: '/assets/photo3.jpg',
    accent: 'lavender',
  },
  {
    caption: 'Wish I could pause this moment.',
    hint: '[PHOTO_4]',
    image: '/assets/photo4.jpg',
    accent: 'pink',
  },
  {
    caption: 'My favorite person.',
    hint: '[PHOTO_5]',
    image: '/assets/photo5.jpg',
    accent: 'pearl',
  },
  {
    caption: 'Another memory I will never forget.',
    hint: '[PHOTO_6]',
    image: '/assets/photo6.jpg',
    accent: 'wine',
  },
  {
    caption: 'Somewhere between laughter and forever.',
    hint: '[PHOTO_7]',
    image: '/assets/photo7.jpg',
    accent: 'rose',
  },
  {
    caption: 'A little piece of our story.',
    hint: '[PHOTO_8]',
    image: '/assets/photo8.jpg',
    accent: 'gold',
  },
  {
    caption: 'Every moment with you is precious.',
    hint: '[PHOTO_9]',
    image: '/assets/photo9.jpg',
    accent: 'lavender',
  },
]

export const futureDreams: DreamItem[] = [
  { icon: '🌅', title: 'Watching sunsets together', note: 'The kind of quiet that feels full.' },
  { icon: '☕', title: 'Random coffee dates', note: 'Small rituals, endless meaning.' },
  { icon: '😂', title: 'Laughing at stupid things', note: 'The best kind of shared language.' },
  { icon: '✈️', title: 'Traveling somewhere new', note: 'Collecting memories instead of souvenirs.' },
  { icon: '🏡', title: 'Building our little world', note: 'A place that feels like us.' },
  { icon: '🎂', title: 'Celebrating birthdays together', note: 'Making every year feel softer.' },
  { icon: '🌧️', title: 'Getting caught in the rain', note: 'Laughing through the unexpected.' },
  { icon: '🌙', title: 'Late-night conversations', note: 'The kind that make time disappear.' },
  { icon: '❤️', title: 'Growing old together', note: 'The dream that keeps getting sweeter.' },
]

export const letterParagraphs = [
  'Mahh... ❤️',
  'Neku chala vishayalu cheppali anipisthuntayi... kani face to face ga cheppalante words ravu.',
  'Anduke ee letter... naa heart lo unna konni feelings ni first time complete ga neku cheppadaniki. ❤️',
  'Nuvvu naa life lo entha important oo... adi nenu words lo cheppalenu mahh.',
  'Nuvvu naa life loki vachina tharvatha, naa life lo chala things change ayyayi.',
  'Nenu happy ga unna appudu first gurthochedhi nuvvey... nenu badha lo unna appudu matladali anipinchedhi nuvve.',
  'Edhaina manchi vishayam jarigithe first neku cheppali anipisthundhi... edhaina problem vachina, "thanatho matladithe koncham better ga feel avutha" ani anipisthundhi.',
  'Endhukante nuvvu naaku just girlfriend kaadhu mahh... nuvvu naa comfort place. ❤️',
  'Nuvvu naa happiness lo oka part kaadhu... nuvvu naa happiness lo chala pedda part.',
  'Konni relationships ki oka peru pettachu... girlfriend, boyfriend, best friend... kaani konni bonds ki aa names saripovu.',
  'Mana bond kuda alantidhe mahh. Nuvvu naaku lover ga start ayyav... kaani mellaga mellaga... naa best friend ayyav... naa comfort person ayyav... naa happiness ayyav... naa family la ayyav. ❤️',
  'And honestly mahh... nenu ninnu naa life lo entha special ga chusukuntunnano, konni sarlu naake ardham kaadhu.',
  'Ninnu chusukune vidhanam lo... naa amma ni chusukune care, affection, importance laanti oka feeling kuda naku vastundhi.',
  'Anduke ninnu konni sarlu... naa life lo amma place laanti oka very special place lo chusukuntanu.',
  'Adi compare cheyyadam kaadhu mahh... evarini evaritho compare cheyyalenu.',
  'Kaani... naa life lo amma ki unna aa unconditional care, aa respect, aa importance laanti oka special feeling ni nenu nee daggara kuda feel avuthanu.',
  'Anduke nuvvu naaku intha important. Anduke ninnu hurt chesinappudu... naake chala ekkuva pain avuthundhi.',
  'Anduke nuvvu happy ga unte... naaku kuda reason lekunda smile vasthundhi. Anduke nuvvu sad ga unte... nenu kuda normal ga undalenu.',
  'Because somewhere along the way, nee happiness naa happiness aipoyindhi. ❤️',
  'Mahh... nenu perfect person ni kaadhu. Nenu mistakes chestha. Konni sarlu immature ga behave chestha. Konni sarlu correct ga ardham cheskolekapovachu.',
  'Kaani oka vishayam matram nijam... naa heart lo nee place fake kaadhu. Ninnu love cheyyadam fake kaadhu. Ninnu care cheyyadam fake kaadhu. Ninnu naa future lo imagine cheyyadam kuda fake kaadhu.',
  'Nuvvu naa life lo undali ani nenu genuinely korukuntunna.',
  'Nuvvu naa life lo undadam ante... naaku oka relationship undhi ani kaadhu. Naaku oka person undhi...',
  'Naa happiness share cheskodaniki... naa problems cheppukodaniki... naa stupid jokes vinadaniki... nannu thittadaniki 😂❤️ nannu understand cheyyadaniki... nenu wrong unte correct cheyyadaniki... nenu padipothe malli lepadaniki... nenu success ayithe naatho kalisi celebrate cheyyadaniki... naa life motham share cheskodaniki.',
  'And mahh... nenu future gurinchi alochinchinappudu... naaku career kanipisthundhi... na dreams kanipisthayi... na goals kanipisthayi... kani vatitho paatu... nuvvu kuda kanipisthav. ❤️',
  'Nenu oka roju successful ayyaka... "Idi chusava mahh..." ani first neku cheppali anipisthundhi.',
  'Nenu oka beautiful place ki vellinappudu... "Manam ikkada kalisi ravali" ani anipisthundhi.',
  'Nenu oka beautiful moment experience chesinappudu... "Ee moment thanatho unte inka beautiful ga undedhi" ani anipisthundhi.',
  'That is how much you have become a part of my life.',
  'Mahh... nenu neku oka promise cheyyali.',
  'Ninnu just naa girlfriend laga kaadhu... naa life partner laga chusukovali anukuntunna.',
  'Nee dreams ni respect chestha. Nee choices ni respect chestha. Nee feelings ni respect chestha. Nee space ni respect chestha. Nee individuality ni respect chestha.',
  'Nuvvu nuvvu ga undataniki nenu support chestha. Ninnu change cheyyali ani kaadhu... ninnu understand cheskovali ani korukuntunna.',
  'And one day... manam venakki tirigi mana journey ni chuskunnappudu... "Enni fights ayyayo..." "Enni misunderstandings ayyayo..." "Enni sarlu okarini okaram convince cheskunnamo..." ani navvukuntu... "Kaani manam still kalisi unnam." ani cheppukovali. ❤️',
  'Nenu perfect love story kosam adagadam ledu. Real love story kosam adugutunna. Konni happy days... konni difficult days... konni fights... konni tears... chala navvulu... chala memories... kaani anni kalisi... mana story. ❤️',
  'Mahh... nuvvu naaku entha important oo cheppadaniki oka lifetime kuda saripodhu.',
  'Kaani ee okka line lo cheppali ante... "Nuvvu naa life lo oka part kaadhu... naa life lo oka very special reason." ❤️',
  'Nuvvu naa Bngrm. Nuvvu naa Potti Dhana. Nuvvu naa favourite person. Nuvvu naa comfort. Nuvvu naa happiness. Nuvvu naa person. ❤️',
  'And if life gives me the choice again and again... prathi sari nenu ninnu choose cheskuntanu.',
  'Not because you are perfect... but because nee tho unna naa heart ki oka different happiness untundhi.',
  'Nuvvu naa life lo undaga... "Home" ane feeling oka place kaadhu ani ardham ayyindhi.',
  'Sometimes... home is a person. And for me... that person is you. ❤️',
  'Mahh... nenu ninnu entha love chesthunnano... enta care chesthunnano... enta important ga chusukuntunnano... ivi anni words tho complete ga cheppalenu.',
  'Kaani oka roju... naa actions chusi nuvve ardham cheskovali. "Eswar nannu nijanga chala love chesthunnadu..." ani.',
  'Adhe naaku kavali. ❤️',
  `Forever...\nnee ESWAR ❤️`,
]

export const apologyParagraphs = [
  'Mahh... 🥺❤️',
  'Mundhu nenu neku oka maata cheppali mahh...',
  'Nenu chesindhi thappu mahh... dhaniki nenu entha sorry cheppina kuda saripodhu anipisthundhi.',
  'Nijam ga chepthunna mahh... I am extremely sorry. 🥺',
  'Nenu ala cheyyakunda undalsindhi. Nenu chesindhi correct kadhu ani naku ippudu complete ga ardham ayyindhi.',
  'Ninnu hurt chesinanduku naku chala badha ga undhi mahh. Nuvvu na valla badhapaduthunnav ani telisinappudu... naake nannu chuskunte nachatledhu.',
  'Please forgive me mahh... 🥺❤️ Idi first and last mahh. Malli life lo eppudu repeat cheyyanu.',
  'Nenu pakka ga chusukunta... Ee mistake malli jaragakunda nenu na side nunchi complete ga care theeskuntanu.',
  'Nuvvu na meedha pettukunna trust ni malli eppudu break cheyyanu. Oka sari mahh... koncham nannu nammu. 🥺',
  'Nenu cheppe maatalu vini matrame kaadhu... naa actions tho kuda nenu prove chestha.',
  'Nenu eppudu varaku nuvvu chusina abbailala undalani anukovatledhu. Nenu vallala undanu kuda.',
  'Nenu nenu ga undi... nee kosam oka better person ga marali anukuntunna.',
  'Naku ippudu okkate kavali mahh... Nuvvu happy ga undali.',
  'Naa valla nuvvu eppudu regret feel avvakudadhu. "ee love ni choose chesinanduku nenu regret avvakudadhu" ani nuvvu anukune laga nenu undali.',
  'Nuvvu nannu ela kavali anukuntunnavo... alane undataniki nenu ready mahh. Nuvvu na daggara em expect chesthunnavo... avi ardham cheskoni, avi follow avvadaniki nenu ready.',
  'Kaani "maradam" ante nenu naa personality motham marchipovadam kaadhu mahh... Nuvvu korukune vidhamga, ninnu ardham cheskune vidhamga, ninnu respect chese vidhamga, ninnu happy ga unche vidhamga nenu naa better version ga marali anukuntunna. ❤️',
  'Nenu nee woman ni control cheyyali ani anukune person ga undalenu. Nenu nee MAN ga undali anukuntunna. ❤️',
  'Nee pakkana nilabade manishi ga... nee happiness ni important ga chuse manishi ga... nee feelings ni respect chese manishi ga... nuvvu badha lo unte nee pakkana unde manishi ga... nuvvu happy ga unte nitho kalisi navve manishi ga... nuvvu edusthe "em ayyindhi?" ani adige manishi ga... nuvvu silent ga unte kuda nee silence ni ardham cheskune manishi ga... nee manishi ga undali anukuntunna. ❤️',
  'Nuvvu nannu ela kavali anukuntunnavo... ala undataniki nenu ready mahh.',
  'Nuvvu nannu chusi: "Naaku ee love dorakadam na luck" ❤️ ani feel ayyela undali ani korukuntunna.',
  'Nuvvu eppudu: "Enduku veedini choose chesanu?" "Enduku veedini love chesanu?" ani regret feel avvakudadhu mahh.',
  'Daaniki badhulu... "Yes, nenu correct person ni choose chesanu." ani feel ayyela nenu undali.',
  'Nuvvu na life loki vachinanduku nenu entha lucky feel avuthunnano... nuvvu kuda nannu choose chesinanduku alane feel avvali ani korukuntunna. ❤️',
  'Nenu perfect person ni ani cheppanu mahh. Naalo mistakes unnayi. Naalo flaws unnayi.',
  'Kaani... ninnu love chese vishayam lo matram nenu genuine ga unna. ❤️',
  'Ee mistake naaku oka lesson. Ninnu hurt cheyyadam entha easy ga jarigipothundo... kaani nee trust ni malli earn cheyyadam entha kastamo ippudu ardham ayyindhi.',
  'Anduke... nenu words tho kaadhu, naa actions tho prove chestha.',
  'Nuvvu malli na meedha proud ga feel ayyela chestha. Nuvvu naatho safe ga feel ayyela chestha. Nuvvu naatho happy ga feel ayyela chestha. Nuvvu "naa manishi naatho unnadu" ani feel ayyela chestha.',
  'I promise mahh. ❤️ Naku oka chance ivvu.',
  'Nenu chesina thappuni marchipomani adaganu... kaani... aa thappu nunchi nenu nerchukunna ani prove cheyyadaniki oka chance ivvu. 🥺❤️',
  'Nenu malli ila cheyyanu mahh. First and last.',
  'Ninnu hurt cheyyakunda... ninnu respect chesthu... ninnu understand chesthu... ninnu care chesthu... nee pakkane undali anukuntunna.',
  'Mahh... naa Bngrm... naa Potti Dhana... naa Love... ❤️',
  'I am really, really, really sorry. 🥺 Please forgive me mahh. Oka sari nannu nammu.',
  'Nenu nee trust ni malli break cheyyanu. Nuvvu na life lo just oka person kaadhu... nuvvu naa person. ❤️ And I want to be... YOUR PERSON TOO. ❤️ Forever.',
  '— Nee Eswar ❤️',
]

export const finalMessage = [
  'Na prapancham lo naaku entho special aina ammayiki... ❤️',
  'Na life lo nuvvu oka part ga vachav... kani eppudo oka point lo, nuvve naa life lo oka important part aipoyav.',
  'Thank you for being with me. ❤️',
  'Naatho unna prathi moment ki, naatho matladina prathi conversation ki, naatho navvina prathi smile ki, naatho share cheskunna prathi memory ki, and naatho unna prathi chinna moment ki thank you mahh.',
  'Life lo em jarigina, entha kastam vachina, entha situations vachina... nuvvu naatho undatam naaku chala pedda strength.',
  'Naatho inni rojulu undi, naa happiness ni, naa badhalani, naa moods ni, naa mistakes ni, anni bharisthu naatho undinanduku... THANK YOU. ❤️',
  'Nenu perfect person ni kaadhu mahh... naalo mistakes untayi, naalo flaws untayi, konni sarlu ninnu ardham cheskovadam lo kuda fail avvachu.',
  'Kaani nannu vadilesey badhulu, nannu ardham cheskuntu, naatho undi, nannu better person ga marchadaniki help chesthunnav.',
  'Anduke... nuvvu naatho unna prathi rojuki nenu grateful ga untanu.',
  'Repu em jaruguthundo naaku teliyadhu... Mana life ekkadiki teesukelthundo kuda teliyadhu... Kaani okati matram naaku telusu... Nuvvu naatho unte, edhaina situation ni nenu face cheyyagalanu.',
  'Naa life lo enni problems vachina, enni ups and downs vachina, nenu vatini face chestha. Endhukante... nuvvu naatho unnav ane feeling naaku chalu.',
  'Thank you for being with me, mahh. ❤️ Nannu intha varaku bharinchinanduku, nannu ardham cheskunnanduku, nannu love chesinanduku, nannu vadilesey chance unna kuda naatho undinanduku... THANK YOU.',
  'Na life lo nenu choose cheskune person nuvve. Prathi sari... Prathi situation lo... Prathi life lo... NENU NINNE CHOOSE CHESTHA. ❤️',
  'Naaku future ela untundo teliyadhu... Kaani aa future lo nuvvu unte chaalu anipisthundhi.',
  'Mana story perfect ga undakapovachu... Kaani mana story mana story. And I want to keep writing it... with you.',
  'Thank you for being with me. And thank you for staying with me through everything. ❤️',
]

export const finalSignature = 'ESWAR ❤️'

export const proposalIntro = [
  'So...',
  'After everything we have shared...',
  'After every laugh, every conversation, every little fight, every memory, and every moment...',
  'There is one thing I have been wanting to ask you.',
]

export const proposalQuestion = 'Will You Be Mine? ❤️'

export const proposalPromise =
  'Not just today. Not just tomorrow. But through every chapter we have not written yet?'

export const proposalYes = 'YOU JUST MADE ME THE HAPPIEST PERSON ALIVE. ❤️'

export const proposalYesPromise =
  'I promise to keep choosing you, again and again, in every lifetime.'

export const proposalAlways = 'Forever starts here. ❤️'

export const proposalMaybe =
  'That is okay... I will wait. ❤️ Take all the time you need.'

export const entryQuotes = [
  'Oka peru chuttu kattukunna naa chinna prapancham... ❤️',
  'Mellaga lopaliki raa...\nIkkada unna prathi maata, prathi feeling... nee kosame chesanu. ❤️',
  'Oka tap tho...\nmana iddhariki chendina oka beautiful story modhalavuthundhi. ❤️',
  'Konni feelings ni words lo cheppalem...\nanduke avi oka prapancham ga maaripothayi.\nNaa prapancham nuvve. ❤️',
]

export const entryGreeting = 'Naa Prapancham ❤️'

export const entryTitle = 'Naa life lo enno people vacharu...'

export const entrySubtitle =
  'Enno memories vachayi... kaani naa prapancham la maarina person maatram nuvve.'

export const entryClosingLine =
  'Oka sari tap cheyyi... nee kosam create chesina ee chinna universe lokki raa. ❤️'

export const entryButtonText = 'Mana Story Lokki ❤️'

