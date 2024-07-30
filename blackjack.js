//display all the variables
//1. get a random() if a number is> 10 return 10 an if a number is equal to 1 return 11
//2.startGame() asign first and second variables,cards, sum when the game starts
//3.renderGame() cards content display--i should use for loops
//4.newCard()when the new card is pressed use && operators

let player = {
  name:"Rachael",
  chips:200
}
let cards = []
let sum 
let message = ""
let hasBlackjack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let cardsEl= document.getElementById("Cards-el")
let sumEl = document.getElementById("Sum-el")
let  playerEl= document.getElementById("player-el")

playerEl.textContent = player.name + " $" + player.chips

function getRandomNumber(){
  let randomNumber = Math.floor(Math.random()*13) + 1
  if(randomNumber > 10){
    return 10
  }
  else if(randomNumber === 1){
    return 11
  }
  else{
    return randomNumber
  }
}

function startGame(){
  isAlive = true
  let firstCard = getRandomNumber()
  let secondCard = getRandomNumber()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
  
}

function renderGame(){
  cardsEl.textContent = "cards: "
  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "sum: " + sum
  if(sum <= 20){
    message = "Do you want to draw a new card"
    
  }
  else if(sum === 21){
    message = "Congratulations you have blackjack"
    hasBlackjack = true
  }
  else{
    message = "You are out of the game"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard(){
  if(isAlive === true && hasBlackjack === false){
    let card = getRandomNumber()
    sum += card
    cards.push(card)
    renderGame()
  }
}