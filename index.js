

const cardObjectDefinitions = [
    {id:1, imagePath: '/images/card-KingHearts.png'},
    {id:2, imagePath: '/images/card-JackClubs.png'},
    {id:3, imagePath: '/images/card-QueenDiamonds.png'},
    {id:4, imagePath: '/images/card-Joker.png'},
]



{/* <div class="card">
<div class="card-inner">
    <div class="card-front">
        <img src="/images/JackClubs.png" alt="" class="card-img">
    </div>
    <div class="card-back">
            <img src="/images/BackCard.png" alt="" class="card-img">
    </div>
</div>
</div> */}

function createCard(cardItem) {

    //create div elements that make up a card
    const cardElem = document.createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    //create front and back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBacktImg = createElement('img')


//add class and id to card element
    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    //add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')


    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    //add class to back card
    addClassToElement(cardBackElem, 'card-back')

    //add src attribute and appropriate value to img element - back of card


}

function createElement(elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem, className)  {
    elem.classList.add(className)
}

function addIdToElement(elem, id) {
    elem.id = id
}