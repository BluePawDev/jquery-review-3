console.log('js/jq sourced!');


$(onReady); // short-hand for document.ready

function onReady() {
  console.log('loaded JS');
  // register events

  // circle click
  $('.circle').on('click', changeTitleColor);
  // empty-box button click
  $('#empty-box').on('click', emptyBox);
  // delete message on click
  $('.box').on('click', 'p', deleteMessage);

  // fill the box
  fillTheBox('Omegatrons');
  fillTheBox('Omegabytes');
  fillTheBox('Omegaladons');
}

function changeTitleColor() {
  // update color of h1 element based on the color of circle clicked
  console.log('changeTitleColor activated');

  var classes = $(this).attr('class');
  var classesArray = classes.split(' ');
  var color = classesArray[0];

  console.log('color class', color);

  //console.log('this', this);
  //console.log('$(this)', $(this));

  $('h1').css('color', color);
}

function emptyBox() {
  // remove contents of the box
  console.log('click event occurring in emptyBox');
  $('.box').empty();
}

function fillTheBox(message) {
  var $p = $('<p>');
  $p.append(message);
  $('.box').append($p);
  //$('.box').append('<p>' + message + '</p>');
}

function deleteMessage({
  // remove element from DOM
  $(this).remove();
})

// .forEach() is a built-in JavaScript...
// .forEach() loops through an array and retruns the index of...
// equivalent to a for loop
// boxContents.forEach(function([element/currentValue], [index], [array]));
// function logTheBoxContents(boxArrayElement, index);
// console.log('The box at index', index, 'is', boxArrayElement);

/* DATA */


// Example Goal: delete messages inside a box
// 1. Target the element that is on the document on load
// 2.
