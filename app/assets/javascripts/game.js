// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function shapeSet(cards_ary) {
  var card1 = cards_ary[0]
  var card2 = cards_ary[1]
  var card3 = cards_ary[2]
  if (card1.shape === card2.shape && card2.shape === card3.shape) {
    return true;
    }
  else if (card1.shape != card2.shape && card2.shape != card3.shape && card1.shape != card3.shape) {
    return true;
  }
  else {
    return false;
  }
}

function colorSet(cards_ary) {
  var card1 = cards_ary[0]
  var card2 = cards_ary[1]
  var card3 = cards_ary[2]
  if (card1.color === card2.color && card2.color === card3.color) {
    return true;
    }
  else if (card1.color != card2.color && card2.color != card3.color && card1.color != card3.color) {
    return true;
  }
  else {
    return false;
  }
}

function numberSet(cards_ary) {
  var card1 = cards_ary[0]
  var card2 = cards_ary[1]
  var card3 = cards_ary[2]
  if (card1.number === card2.number && card2.number === card3.number) {
    return true;
    }
  else if (card1.number != card2.number && card2.number != card3.number && card1.number != card3.number) {
    return true;
  }
  else {
    return false;
  }
}

function shadingSet(cards_ary) {
  var card1 = cards_ary[0]
  var card2 = cards_ary[1]
  var card3 = cards_ary[2]
  if (card1.shading === card2.shading && card2.shading === card3.shading) {
    return true;
    }
  else if (card1.shading != card2.shading && card2.shading != card3.shading && card1.shading != card3.shading) {
    return true;
  }
  else {
    return false;
  }
}

function validSet(cards_ary) {
  if (shapeSet(cards_ary) && colorSet(cards_ary) && numberSet(cards_ary) && shadingSet(cards_ary)) {
    return true
  }
  else {
    return false
  }
}

function setsOnBoard(boardCardsAry) {
  sets = []
  for (var i = 0; i < boardCardsAry.length; i++) {
    if (validSet(boardCardsAry[i])) {
      sets.push(boardCardsAry[i]);
    }
  }
  if (sets.length > 0) {
    return true;
  }
  else {
    return false;
  }
}

function gameOver(boardCardsAry) {
  if (setsOnBoard(boardCardsAry) == false && deck.length === 0) {
    return true;
  }
  else {
    return false;
  }
}

function changeCardStatus(cards_ary) {
  if (validSet(cards_ary)) {
    for (var i = 0; i < cards_ary.length; i++) {
      cards_ary[i].status = "set"
    }
  }
  else {
    for (var i = 0; i < cards_ary.length; i++) {
      cards_ary[i].status = "in play"
    }
  }
}
