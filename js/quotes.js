const quotes = [
  {
    quote: "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote: "Youth isn’t always all it’s touted to be.",
    author: "Lawana Blackwell",
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "The goal of life is living in agreement with nature.",
    author: "Zeno",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "The die is cast.",
    author: "Julius caesar",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "When in doubt, choose change.",
    author: "Lily leung",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

randidx = Math.floor(Math.random() * quotes.length);
const TodaysQuote = quotes[randidx];

quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author;

function addElement() {
  const bgImage = document.createElement("img");
  imgNum = Math.ceil(Math.random() * 3);
  bgImage.src = `img/${imgNum}.jpeg`;
  bgImage.width = "500";
  bgImage.height = "500";
  document.body.appendChild(bgImage); // 기준위치.prepend
}

document.body.onload = addElement;
// document.body.addEventListener("load", addElement());
