const projectName = 'random-quote-machine';
let quotesData;
var authors=[
       'Confucius',
       'Anne Frank',
       'Lao Tzu',
       'maya angelou',
       'dalai lama',
       'sheryl sandberg',
       'unknown',
       'unknown',
       'unknown',
       'unknown',
       'unknown',
       'unknown',
       'unknown',
       'unknown',
       'unknown'

];
var colors=[
  '#d2691e',
  '#dda0dd',

]
var currentQuote =''
var currentAuthor='';



var quotes= [

     "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.-Helen Keller",
     "Everything has beauty, but not everyone can see- Confucius",

       "How wonderful it is that nobody need wait a single moment before starting to improve the world.- Anne Frank",

       "When I let go of what I am, I become what I might be.- Lao Tzu",
       "Life is not measured by the number of breaths we take, but by the moments that take our breath away.- Maya Angelou",

       "Happiness is not something readymade.  It comes from your own actions.- Dalai Lama",
       "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.- Sheryl Sandberg",
      "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.- Aristotle",

       "If the wind will not serve, take to the oars.- Latin Proverb",

       "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.- Unknown",
       "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.-Marie Curie",

       "Too many of us are not living our dreams because we are living our fears - Les Brown",
       "Challenges are what make life interesting and overcoming them is what makes life meaningful- Joshua J. Marine",
       "If you want to lift yourself up, lift up someone else-Booker T. Washington",
];


function newQuote(){
       var randomNumber=Math.floor(Math.random()*12 )+ 1;
       document.getElementById('text',).innerHTML=quotes[randomNumber];

var randomNumber=Math.floor(Math.random()*12 )+ 1;
document.getElementById('author').innerHTML=authors[randomNumber];
 
}

       let randomQuote = getRandomQuote();
       
     
       currentQuote = randomQuote.quote;
       currentAuthor=randomNumb.author;
       
     
       $('#tweet-quote').attr(
         'href',
         'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
           encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
       );
     
       $('.quote-text').animate({ opacity: 0 }, 500, function () {
         $(this).animate({ opacity: 1 }, 500);
         $('#text').text(randomQuote.quote);
       });
     
       $('.quote-author').animate({ opacity: 0 }, 500, function () {
         $(this).animate({ opacity: 1 }, 500);
         $('#author').html(randomQuote.author);
       });
     
       var color = Math.floor(Math.random() * colors.length);
       $('html body').animate(
         {
           backgroundColor: colors[color],
           color: colors[color]
         },
         1000
       );
       $('.button').animate(
         {
           backgroundColor: colors[color]
         },
         1000
       );
     
     
     $(document).ready(function () {
       getQuotes().then(() => {
         getQuote();
       });
     
       $('#new-quote').on('click', getQuote);
     });



