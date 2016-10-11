// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// var boardCards = []
// var set = [
//       [  {"id": 1,
//         "shape": "triangle",
//         "color": "blue",
//         "number": 1,
//         "shading": "solid",
//         "status": "pending"},
//
//        {"id": 2,
//         "shape": "square",
//         "color": "red",
//         "number": 2,
//         "shading": "striped",
//         "status": "pending"},
//
//         {"id": 3,
//         "shape": "circle",
//         "color": "green",
//         "number": 3,
//         "shading": "blank",
//         "status": "pending"}],
//         [  {"id": 1,
//           "shape": "triangle",
//           "color": "blue",
//           "number": 1,
//           "shading": "solid",
//           "status": "pending"},
//
//          {"id": 2,
//           "shape": "square",
//           "color": "red",
//           "number": 2,
//           "shading": "striped",
//           "status": "pending"},
//
//           {"id": 3,
//           "shape": "circle",
//           "color": "green",
//           "number": 3,
//           "shading": "blank",
//           "status": "pending"}],
//           [  {"id": 1,
//             "shape": "triangle",
//             "color": "blue",
//             "number": 1,
//             "shading": "solid",
//             "status": "pending"},
//
//            {"id": 2,
//             "shape": "square",
//             "color": "red",
//             "number": 2,
//             "shading": "striped",
//             "status": "pending"},
//
//             {"id": 3,
//             "shape": "circle",
//             "color": "green",
//             "number": 3,
//             "shading": "blank",
//             "status": "pending"}]
//         ]
// var deck = [
//         {"id": 1,
//         "shape": "triangle",
//         "color": "blue",
//         "number": 2,
//         "shading": "solid",
//         "status": "pending"},
//
//        {"id": 2,
//         "shape": "square",
//         "color": "red",
//         "number": 2,
//         "shading": "striped",
//         "status": "pending"},
//
//         {"id": 3,
//         "shape": "circle",
//         "color": "green",
//         "number": 3,
//         "shading": "blank",
//         "status": "pending"}
//         ]
// var noSets = [
//     [
//           {"id": 1,
//           "shape": "triangle",
//           "color": "blue",
//           "number": 1,
//           "shading": "solid",
//           "status": "pending"},
//
//          {"id": 2,
//           "shape": "square",
//           "color": "red",
//           "number": 3,
//           "shading": "striped",
//           "status": "pending"},
//
//           {"id": 3,
//           "shape": "circle",
//           "color": "green",
//           "number": 3,
//           "shading": "blank",
//           "status": "pending"}
//         ],
//         [
//           {"id": 1,
//           "shape": "triangle",
//           "color": "blue",
//           "number": 1,
//           "shading": "striped",
//           "status": "pending"},
//
//          {"id": 2,
//           "shape": "square",
//           "color": "red",
//           "number": 2,
//           "shading": "striped",
//           "status": "pending"},
//
//           {"id": 3,
//           "shape": "circle",
//           "color": "green",
//           "number": 3,
//           "shading": "blank",
//           "status": "pending"}
//         ],
//         [
//           {"id": 1,
//           "shape": "triangle",
//           "color": "blue",
//           "number": 1,
//           "shading": "solid",
//           "status": "pending"},
//
//          {"id": 2,
//           "shape": "triangle",
//           "color": "red",
//           "number": 2,
//           "shading": "striped",
//           "status": "pending"},
//
//           {"id": 3,
//           "shape": "circle",
//           "color": "green",
//           "number": 3,
//           "shading": "blank",
//           "status": "pending"}
//         ]
// ]
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

function setsOnBoard(possibleCardCombos) {
  sets = []
  for (var i = 0; i < possibleCardCombos.length; i++) {
    if (validSet(possibleCardCombos[i])) {
      sets.push(possibleCardCombos[i]);
    }
  }
  if (sets.length > 0) {
    return true;
  }
  else {
    return false;
  }
}

function addThreeCards(deck) {
  if (deck.length > 0) {
    var drawnCards = deck.slice(0, 3)
    for (var i = 0; i < drawnCards.length; i++) {
      drawnCards[i].status = "onBoard"
    }
  }
  else {
    return false
  }
}

function addNineCards(deck) {
  if (deck.length > 0) {
    var drawnCards = deck.slice(0, 9)
    for (var i = 0; i < drawnCards.length; i++) {
      drawnCards[i].status = "onBoard"
    }
  }
  else {
    return false
  }
}

function checkBoardAndAddCards(possibleCardCombos, deck) {
  if (setsOnBoard(possibleCardCombos) == false) {
    addThreeCards(deck)
  }
  else {
    return "There's a set on the board! Keep looking!"
  }
}

function gameOver(possibleCardCombos) {
  if (setsOnBoard(possibleCardCombos) == false && deck.length === 0) {
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
