import './App.css';
import React from 'react';


const quotesData=[{text:`"A leader is one who knows the way, goes the way, and shows the way."`,author:" -John Maxwell"},
{text:`"Never doubt that a small group of thoughtful, concerned citizens can change world. Indeed it is the only thing that ever has."`,author:" -A.P.j Abdulkalam"},
{text:`"He who has never learned to obey cannot be a good commander. "`,author:"-Aristotle "},
{text:`"When I give a minister an order, I leave it to him to find the means to carry it out. "`,author:"-Napoleon Bonaparte"},
{text:`" Leadership is influence. "`,author:"-John C. Maxwell "},
{text:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,author:" -Nelson Mandela"},
{text:`"The way to get started is to quit talking and begin doing."`,author:" -Walt Disney"},
{text:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,author:"  -Steve Jobs"},
{text:`"If life were predictable it would cease to be life, and be without flavor."`,author:" -Eleanor Roosevelt"},
{text:`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,author:" -Oprah Winfrey"},
{text:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,author:" -James Cameron"},
{text:`"Life is what happens when you're busy making other plans."`,author:"  -John Lennon"},
{text:`"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,author:" -Mother Teresa"},
{text:`"When you reach the end of your rope, tie a knot in it and hang on."`,author:" -Franklin D. Roosevelt"},
{text:`"Always remember that you are absolutely unique. Just like everyone else."`,author:" -Margaret Mead"},
{text:`"Don't judge each day by the harvest you reap but by the seeds that you plant. "`,author:" -Robert Louis Stevenson"},
{text:`"The future belongs to those who believe in the beauty of their dreams"`,author:"  -Eleanor Roosevelt"},
{text:`"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,author:" -Benjamin Franklin"},
{text:`"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."`,author:" -Helen Keller"},
{text:`"It is during our darkest moments that we must focus to see the light."`,author:"  -Aristotle"},


];

function QuoteBox({quote,handleQuote}){
  return(
  <div id='quote-box' className='main'>
  <p id='text'>{quote.text}</p>
  <h3 id='author'>{quote.author}</h3>
  <div>
  <button id='new-quote' onClick={handleQuote}>New-Quote</button>
  <a target="_blank" rel="noopener noreferrer" 
  href= {"https://twitter.com/intent/tweet?hashtags=quotes&text=" +encodeURI(quote.text + " -- " + quote.author)}
  id='tweet-quote' >tweet</a>
  </div>
  </div>
  )
}

 function handleRandomIndex(){
  return(Math.round(Math.random()*(quotesData.length-1)))
}

function App(){
 const [quote,setText]=React.useState(quotesData[handleRandomIndex()])
 const getQuotes=()=>{
  setText(quotesData[handleRandomIndex()]);
 }
  return(
    <div>
   <QuoteBox quote={quote} handleQuote={getQuotes} ></QuoteBox>
    </div>
  )
}
export default App;