var rand;
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var suits = ["clubs", "diamonds", "spades", "hearts"];
var dealbutton;

const cards = {
  suits: ["clubs", "diamonds", "spades", "hearts"],
  numbers: [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"],
  vals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1],
  decksuits: [],
  deck: [],
  deckvals: [],
  shuffledeck: [],
  shuffledvals:[],
  shuffledsuits:[]
}
let hand1 = {
  cards: [],
  vals: [],
  suits: [],
  total: 0,
  stay : false,
  output: null,
  totaldisplay: null
}

let hand2 = {
  cards: [],
  vals: [],
  suits: [],
  total: 0,
  stay : false,
  output: null,
  totaldisplay: null
}

var handone;
var cardcounter = 2;

function assemble()
{
  cards.numbers.forEach(function(x){

    cards.suits.forEach(function(y){

      if(cardcounter > 1 && cardcounter < 15)
      {
        // console.log(cardcounter);
        // console.log(cards.vals[cardcounter]);

        cards.deck.push(cards.numbers[cardcounter] + " of " + y);
        cards.deckvals.push(parseInt(cards.vals[cardcounter]));
        cards.decksuits.push(y);



      }

      if(cardcounter == 15)
      {
        cardcounter = 0;
      }
      cardcounter++;
    });
  });
}

function shuffle(hand)
{
  if(cards.deck.length === 52)
  {
    //cards.deck.forEach(function(z){
    for(z = 0; z < 52; z++){
      // console.log("old deck " + cards.deck);
      // console.log("old Length: " + cards.deck.length);
      rand = Math.floor(Math.random() * (cards.deck.length - 1));
      // console.log(rand);
      // console.log(cards.deck[rand]);
      cards.shuffledeck.push(cards.deck[rand]);
      cards.shuffledvals.push(parseInt(cards.deckvals[rand]));
      cards.shuffledsuits.push(cards.decksuits[rand]);
      cards.deck.splice(rand, 1);
      cards.deckvals.splice(rand, 1);
      cards.decksuits.splice(rand, 1);
      // console.log("Length:" + cards.deck.length);
      // console.log("Rand:" + rand);
      // console.log("final card:" + cards.shuffledeck[rand] + ". value: " + cards.shuffledvals[rand]);
      // console.log(cards.shuffledeck);
      // console.log("shuffled deck length" + " " + cards.shuffledeck.length);



    }
  }
}

function deal()
{

  hit(hand1);
  hit(hand2);
  hit(hand1);
  hit(hand2);
totalcount();
  dealbutton.hide();
  hand1.hitbutton.hide();
  hand1.staybutton.hide();
  hand2.hitbutton.hide();
  hand2.staybutton.hide();
  hand1.hitbutton.show();
  hand1.staybutton.show();
  hand2.hitbutton.show();
  hand2.staybutton.show();
}

function hit(hand)
{
  console.log(cards.shuffledvals[0]);
  console.log(cards.shuffledeck[0]);
  console.log(cards.shuffledsuits[0]);

  console.log("__________________________");
  hand.cards.push(cards.shuffledeck[0] + " ");

  hand.vals.push(parseInt(cards.shuffledvals[0]));
  hand.suits.push(cards.shuffledsuits[0]);
    hand.output.append(cards.shuffledeck[0] + "<br> ");
  console.log(hand.cards[0]);

  cards.shuffledeck.shift(0);

  cards.shuffledvals.shift(0);
  cards.shuffledsuits.shift(0);

  console.log(cards.shuffledvals[0]);
  console.log(cards.shuffledeck[0]);
  console.log(cards.shuffledsuits[0]);
  console.log("-----------------------");
  totalcount();
  bustcheck();
  acecheck(hand);



}

function stay(hand)
{


  hand.stay = true;
  hand.hitbutton.hide();
  hand.staybutton.hide();
    rescheck();
}
function acecheck(hand)
{

  hand.vals.forEach(function(x)
  {
  if(hand.total + 10 <= 21 && x == 1 )
  {
    hand.total = hand.total + 10;
console.log(hand.total);
  }
});
}

function result()
{
  totalcount();
  bustcheck();
  acecheck(hand1);
  acecheck(hand2);


  if(hand1.total > hand2.total)
  {
        $("#result").append("Player one wins! Restart to try again. <br> ");
  }
  if(hand2.total > hand1.total)
  {
        $("#result").append("Player two wins! Restart to try again. <br> ");
  }
  if(hand2.total == hand1.total)
  {
            $("#result").append("A draw! <br> ");
  }
}
function rescheck()
{

  if(hand1.stay == true && hand2.stay == true)
  {
    result();
  }
}

function bustcheck()
{

  if(hand2.total > 21)
  {
    $("#result").append("Player two busts! Reset to try again. <br>");
    hand1.hitbutton.hide();
    hand1.staybutton.hide();
    hand2.hitbutton.hide();
    hand2.staybutton.hide();

  }
  if(hand1.total > 21)
  {

    $("#result").append("Player one busts! <br> ");
    hand1.hitbutton.hide();
    hand1.staybutton.hide();
    hand2.hitbutton.hide();
    hand2.staybutton.hide();
  }
  hand1.totaldisplay.html("total: " + hand1.total);
  hand2.totaldisplay.html("total: " + hand2.total);
}
function totalcount()
{
  hand1.total = 0;
  hand2.total = 0;
  hand1.vals.forEach(function(z)
  {
    hand1.total += z;
  });

  hand2.vals.forEach(function(z)
  {
    hand2.total += z;
  });
}
$(document).ready(function(){

  hand1.staybutton = $("#stay1");
  hand1.hitbutton = $("#hit1");
  hand2.staybutton = $("#stay2");
  hand2.hitbutton = $("#hit2");
  hand1.output = $("#hand1output");
  hand2.output = $("#hand2output");
  hand1.totaldisplay = $("#hand1val");
  hand2.totaldisplay = $("#hand2val");
    hand1.hitbutton.hide();
    hand1.staybutton.hide();
    hand2.hitbutton.hide();
    hand2.staybutton.hide();
dealbutton = $("#deal");
  assemble();
  shuffle();




});
