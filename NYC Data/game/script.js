const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({ target: clickedCard }) {
  if (cardOne !== clickedCard && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;

    // Extract the image filenames
    let cardOneImg = cardOne.querySelector(".back-view img").src;
    let cardTwoImg = cardTwo.querySelector(".back-view img").src;

    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  // Extract the filenames from the local file paths
  const filename1 = extractFilename(img1);
  const filename2 = extractFilename(img2);

  if (filename1 === filename2) {
    matched++;
    if (matched === 8) {
      setTimeout(() => {
        shuffleCard();
      }, 1000);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    disableDeck = false;
  } else {
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      cardOne = cardTwo = "";
      disableDeck = false;
    }, 1200);
  }
}

function shuffleCard() {
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => Math.random() > 0.5 ? 1 : -1);

  // Load images using relative file paths
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `images/images1/img-${arr[i]}.jpg`;
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function extractFilename(path) {
  // Extract the filename from the path
  const parts = path.split("/");
  return parts[parts.length - 1];
}