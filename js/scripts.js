var hand1val;
var rand;
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var suits = ["clubs", "diamonds", "spades", "hearts"];
const cards = {
  suits: ["clubs", "diamonds", "spades", "hearts"],
  numbers: [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"],
  vals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1],
  deck: [],
  deckvals: [],
  shuffledeck: [],
  shuffledvals:[]
}
var handone;
var cardcounter = 2;

$(document).ready(function(){

  assemble();
  shuffle();


  $("#hit1").click(function(){



  });


});


function assemble()
{
  cards.numbers.forEach(function(x){

  cards.suits.forEach(function(y){


if(cardcounter > 1 && cardcounter < 15)
{
    // console.log(cardcounter);
    // console.log(cards.vals[cardcounter]);

    cards.deck.push(cards.numbers[cardcounter] + " of " + y);
    cards.deckvals.push(cards.vals[cardcounter]);


}

if(cardcounter == 15)
{
cardcounter = 0;
}
cardcounter++;
  });
  });
}

function shuffle()
{
  if(cards.deck.length === 52)
  {
    //cards.deck.forEach(function(z){
      for(z = 0; z < 52; z++){
    console.log("old deck " + cards.deck);
    console.log("old Length: " + cards.deck.length);
    rand = Math.floor(Math.random() * (cards.deck.length - 1));
    console.log(rand);
    console.log(cards.deck[rand]);
    cards.shuffledeck.push(cards.deck[rand]);
    cards.shuffledvals.push(cards.deckvals[rand]);
    cards.deck.splice(rand, 1);
    cards.deckvals.splice(rand, 1);

    console.log("Length:" + cards.deck.length);
    console.log("Rand:" + rand);
    console.log("final card:" + cards.shuffledeck[rand] + ". value: " + cards.shuffledvals[rand]);
    console.log(cards.shuffledeck);
    console.log("shuffled deck length" + " " + cards.shuffledeck.length);

}
}
}

function deal()
{

hit();
hit();
$("#deal1").hide();

}

function hit()
{
  $("#hand1").append(cards.shuffledeck[0] + " ");
  cards.shuffledeck.shift(0);
  handone += cards.shuffledvals[0];
  cards.shuffledvals.shift(0);

}

function stay()
{
result();
}

function result()
{
  if(handone > 21)
  {

  }
  if(handone <= 21)
  { }
}
