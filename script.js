
//Generating a random number
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}


//Object containing 3 arrays
const inspirationalQuotes = {
    loveQuotes: [
    '"Love has nothing to do with what you are expecting to get\-only with what you are expecting to give\-which is everything. — “Katharine Hepburn',
    '"Where there is love there is life.”—Mahatma Gandhi',
    '"Whatever our souls are made of, his and mine are the same."—Emily Brontë',
    '"It is a curious thought, but it is only when you see people looking ridiculous that you realize just how much you love them."—Agatha Christie',
    '"The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.”—Victor Hugo',
    '"In love there are two things — bodies and words."—Joyce Carol Oates',
    '"Love makes your soul crawl out from its hiding place."—Zora Neale Hurston',
    '"There is always madness in love. But there is also always some reason in madness."—Friedrich Nietzsche',
    '"Nobody has ever measured, even poets, how much a heart can hold."—Zelda Fitzgerald',
    '"Have enough courage to trust love one more time and always one more time."—Maya Angelou',
    '"Love does not consist in gazing at each other, but in looking outward together in the same direction."—Antoine de Saint-Exupéry',
    '"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell."—Joan Crawford',
    '"I love her and it is the beginning of everything."—F. Scott Fitzgerald',
    '"When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible."—Nora Ephron',
    '"Never love anyone who treats you like you\'re ordinary."—Oscar Wilde',
    '"Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down."— Oprah Winfrey',
    '"Love is something sent from heaven to worry the hell out of you."— Dolly Parton',
    '“There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves; it is not my nature.”— Jane Austen',
    '"Love is an irresistible desire to be irresistibly desired."— Robert Frost',
    '"The giving of love is an education in itself."— Eleanor Roosevelt',
    '"Life is the flower for which love is the honey."— Victor Hugo',
    '"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."—Lao Tzu',
    '"We are most alive when we are in love."—John Updike',
    '"The only thing we never get enough of is love; and the only thing we never give enough of is love."—Henry Miller',
    '"There is only one happiness in this life, to love and be loved."—George Sand',
    '"To love and be loved is to feel the sun from both sides."—David Viscott',
    '"Love does not dominate; it cultivates."—Johann Wolfgang Von Goethe',
    '"Love is the whole thing. We are only pieces."—Rumi',
    '"Love is composed of a single soul inhabiting two bodies."—Aristotle',
    '"There is no charm equal to tenderness of the heart."—Jane Austen',
    '"True love stories never have endings."—Richard Bach',
    '"Love recognizes no barriers."—Maya Angelou',
    '"Love yourself first and everything falls into line."—Lucille Ball',
    '"Love is always patient and kind. It is never jealous. Love is never boastful or conceited. It is never rude or selfish. It does not take offense and is not resentful. Love takes no pleasure in other people\'s sins, but delights in the truth. It is always ready to excuse, to trust, to hope, and to endure whatever comes."—1 Corinthians 13:4-7',
    '"Where there is great love, there are always miracles."—Willa Cather',
    '"Love is that condition in which the happiness of another person is essential to your own."—Robert A. Heinlein, Stranger in a Strange Land',
    '"Where we love is home — home that our feet may leave, but not our hearts."—Oliver Wendell Holmes Sr.',
    '"What we have once enjoyed we can never lose. All that we love deeply becomes a part of us."—Helen Keller',
    '"To love is to recognize yourself in another."—Eckhart Tolle',
    '"Love is friendship that has caught fire."—Ann Landers',
    '"You always gain by giving love."—Reese Witherspoon',
    '"If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you."—A.A. Milne, Winnie the Pooh',
    '"I believe in love. I think it just hits you and pulls the rug out from underneath you and, like a baby, demands your attention every minute of the day."—Jodi Picoult',
    '"Love is like the wind, you can\'t see it but you can feel it."—Nicholas Sparks, A Walk to Remember',
    '"There is always some madness in love. But there is also always some reason in madness."—Friedrich Nietzsche',
    '"Love isn\'t something you find. Love is something that finds you."—Loretta Young',
    '"There is no remedy for love but to love more."—Henry David Thoreau',
    '"I think... if it is true that there are as many minds as there are heads, then there are as many kinds of love as there are hearts."—Leo Tolstoy, Anna Karenina',
    '"The best thing to hold onto in life is each other."—Audrey Hepburn',
    '“It is better to have loved and lost, than never to have loved at all."—Alfred, Lord Tennyson'
    ],
    motivationalQuotes: [
        '"It takes courage to grow up and become who you really are." — E.E. Cummings',
        '"Your self-worth is determined by you. You don\'t have to depend on someone telling you who you are." — Beyoncé',
        '"Nothing is impossible. The word itself says \'I\'m possible!\'" — Audrey Hepburn',
        '"Keep your face always toward the sunshine, and shadows will fall behind you." — Walt Whitman',
        '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You\'re on your own. And you know what you know. And you are the guy who\'ll decide where to go." — Dr. Seuss',
        '"Attitude is a little thing that makes a big difference." — Winston Churchill',
        '"To bring about change, you must not be afraid to take the first step. We will fail when we fail to try." — Rosa Parks',
        '"All our dreams can come true, if we have the courage to pursue them." — Walt Disney',
        '"Don\'t sit down and wait for the opportunities to come. Get up and make them." — Madam C.J. Walker',
        '"Champions keep playing until they get it right." — Billie Jean King',
        '"I am lucky that whatever fear I have inside me, my desire to win is always stronger." — Serena Williams',
        '"You are never too old to set another goal or to dream a new dream." — C.S. Lewis',
        '"It is during our darkest moments that we must focus to see the light." — Aristotle',
        '"Believe you can and you\'re halfway there." — Theodore Roosevelt',
        '"Life shrinks or expands in proportion to one\'s courage." — Anaïs Nin',
        '"Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong." — Ella Fitzgerald',
        '"Try to be a rainbow in someone\'s cloud." — Maya Angelou',
        '"If you don\'t like the road you\'re walking, start paving another one." — Dolly Parton',
        '"Real change, enduring change, happens one step at a time." — Ruth Bader Ginsburg',
        '"All dreams are within reach. All you have to do is keep moving towards them." — Viola Davis',
        '"It is never too late to be what you might have been." — George Eliot',
        '"When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected." — Laverne Cox',
        '"Give light and people will find the way." — Ella Baker',
        '"It always seems impossible until it\'s done." — Nelson Mandela',
        '"Don\'t count the days, make the days count." — Muhammad Ali',
        '"If you risk nothing, then you risk everything." — Geena Davis',
        '"Definitions belong to the definers, not the defined." — Toni Morrison',
        '"When you have a dream, you\'ve got to grab it and never let go." — Carol Burnett',
        '"Never allow a person to tell you no who doesn\'t have the power to say yes." — Eleanor Roosevelt',
        '"When it comes to luck, you make your own." — Bruce Springsteen',
        '"If you\'re having fun, that\'s when the best memories are built." — Simone Biles',
        '"Failure is the condiment that gives success its flavor." — Truman Capote',
        '"Hard things will happen to us. We will recover. We will learn from it. We will grow more resilient because of it." — Taylor Swift',
        '"Your story is what you have, what you will always have. It is something to own." — Michelle Obama',
        '"To live is the rarest thing in the world. Most people just exist." — Oscar Wilde',
        '"You define beauty yourself, society doesn\'t define your beauty." — Lady Gaga',
        '"Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you." — Mary Lou Retton',
        '"You just gotta keep going and fighting for everything, and one day you\'ll get to where you want." — Naomi Osaka',
        '"If you prioritize yourself, you are going to save yourself." — Gabrielle Union',
        '"No matter how far away from yourself you may have strayed, there is always a path back. You already know who you are and how to fulfill your destiny." — Oprah Winfrey',
        '"A problem is a chance for you to do your best." — Duke Ellington',
        '"You can\'t turn back the clock. But you can wind it up again." — Bonnie Prudden',
        '"When you can\'t find someone to follow, you have to find a way to lead by example." — Roxane Gay',
        '"There is no better compass than compassion." — Amanda Gorman',
        '"Stand before the people you fear and speak your mind, even if your voice shakes." — Maggie Kuhn',
        '"It\'s a toxic desire to try to be perfect. I realized later in life that the challenge is not to be perfect. It\'s to be whole." — Jane Fonda',
        '"Vitality shows not only in the ability to persist but in the ability to start over." — F. Scott Fitzgerald',
        '"The most common way people give up their power is by thinking they don\'t have any." — Alice Walker',
        '"Love yourself first and everything else falls into line." — Lucille Ball',
        '"In three words I can sum up everything I\'ve learned about life: It goes on." — Robert Frost',
        '"If you fail, never give up because F.A.I.L. means \"First Attemp In Learning\"; End is not the end, in fact E.N.D. means \"Effort Never Dies\"; If you get NO as an answer, remember N.O. means \"Next Opportunity\" — Morgan Freeman'
        ],
        travelQuotes: [
            '“Life is either a daring adventure or nothing at all.”― Helen Keller',
            '“Travel far enough, you meet yourself.”― David Mitchell',
            '“Wherever you go becomes a part of you somehow.”― Anita Desai',
            '“Once a year, go someplace you\'ve never been before.”― Dalai Lama',
            '“If you\'re twenty-two, physically fit, hungry to learn and be better, I urge you to travel - as far and widely as possible.”― Anthony Bourdain',
            '“The most beautiful thing in the world is, of course, the world itself.”― Wallace Stevens',
            '“Because in the end, you won\'t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain.”― Jack Kerouac',
            '“To travel is to live.”― Hans Christian Andersen',
            '“Live life with no excuses, travel with no regret.”― Oscar Wilde',
            '“If it scares you, it may be a good thing to try.”— Seth Godin',
            '“Twenty years from now you will be more disappointed by the things you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”― Mark Twain',
            '“Travel makes one modest. You see what a tiny place you occupy in the world.”― Gustav Flaubert',
            '“The great glory of travel, to me, is not just what I see that\'s new to me in countries visited, but that in almost every one of them I change from an outsider looking in to an insider looking out.”― Clara E. Laughlin',
            '“The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.”― Marcel Proust',
            '“So much of who we are, is where we have been.”― William Langewiesche',
            '“It does not do to dwell on dreams and forget to live.”― Albus Dumbledore',
            '“Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.”― Michael Palin',
            '“Travelling - it leaves you speechless, then turns you into a storyteller.”― Ibn Battuta',
            '“Our happiest moments as tourists always seem to come when we stumble upon one thing while in pursuit of something else.”― Lawrence Block',
            '“Now more than ever do I realize that I will never be content with a sedentary life, that I will always be haunted by thoughts of a sun-drenched elsewhere.”― Isabelle Eberhardt',
            '“The gladdest moment in human life, me thinks, is a departure into unknown lands.”― Sir Richard Burton',
            '“To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted.”― Bill Bryson',
            '“Paris is always a good idea.”― Audrey Hepburn',
            '“The sea, once it casts its spell, holds one in its net of wonder forever.”― Jacques Cousteau',
            '“It is only in adventure that some people succeed in knowing themselves - in finding themselves.”― André Gide',
            '“To awaken quite alone in a strange town is one of the pleasantest sensations in the world.”― Dame Freya Madeline Stark',
            '“Not all those who wander are lost.”― J.R.R. Tolkien',
            '“The very basic core of a man\'s living spirit is his passion for adventure. The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun.”― Christopher McCandless',
            '“People don\'t take trips, trips take people.”― John Steinbeck',
            '“An understanding of the natural world and what\'s in it is a source of not only a great curiosity but great fulfilment.”― Sir David Attenborough'
            ]   
}

// Store the quotes in an array
let randomQuote = []; 

//Iterate over the object
for(let quote in inspirationalQuotes) {
    let index = generateRandomNumber(inspirationalQuotes[quote].length);

switch(quote) {
    case'loveQuotes':
    randomQuote.push(`Your love quote is ${inspirationalQuotes[quote][index]}.`)
    break
    case 'motivationalQuotes':
    randomQuote.push(`Your motivational quote is ${inspirationalQuotes[quote][index]}.`)
    break
    case 'travelQuotes':
    randomQuote.push(`Your travel quote is ${inspirationalQuotes[quote][index]}`)
    break
    default:
    randomQuote.push('Live your life alive not dead! ')
};
};

function beInspired () {
    const finalMessage = randomQuote.join('\n');
    console.log(finalMessage);
   
};

beInspired(randomQuote);

console.log(randomQuote);

let button = document.getElementById('clickMe');
let quoteDisplay = document.getElementById('quoteDisplay')

function showQuote(){
    quoteDisplay.innerHTML = beInspired(randomQuote);
    button.innerHTML = 'Feed Your Mind';
    button.style.cursor = 'default;'
}


document.addEventListener('click', showQuote);


