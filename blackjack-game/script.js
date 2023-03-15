
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false

let message = ""
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.querySelector("#player-el")

// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Nasir",
    chips: 135
}

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

function getRandomNumber() {
    return Math.floor(Math.random() * 13) + 1
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()

    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard


    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        sumEl.textContent = " "
        cardsEl.textContent = " "
    }
    messageEl.textContent = message
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomNumber()
        cards.push(card)
        sum += card
        renderGame()
    }
}

