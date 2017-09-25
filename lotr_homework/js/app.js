console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $section = $('<section id="middle-earth"></section>');

  // 2. append the section to the body of the DOM.
  const $lastScript = $('script')[1];
  $section.insertBefore($lastScript);

  // 3. use a for loop to iterate over the lands array that does the following:
  for (let a = 0; a < lands.length; a++){

  //   3a. creates an article tag (there should be one for each land when the loop is done)
    const $article = $('<article></article>');

  //   3b. gives each land article an `id` tag of the corresponding land name
    $article.attr('id', lands[a]);

  //   3c. includes an h1 with the name of the land inside each land article
    const $h1 = $('<h1>');
    $h1.text(lands[a]);
    $article.append($h1);

  //   3d. appends each land to the middle-earth section
    $section.append($article);
  }
};

console.log(makeMiddleEarth());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.
  const $ul = $('<ul>');
  for (let b = 0; b < hobbits.length; b++){
    const $li = $('<li>');
    $li.text(hobbits[b]);

  // 2. give each hobbit a class of "hobbit"
    $li.addClass('hobbit');
    $ul.append($li);
  }
  const $shireArticle = $('#The-Shire');
  $shireArticle.append($ul);

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id
};

console.log(makeHobbits());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  console.log('Giving Frodo the ring');

  // 1. create an empty div with an id of 'the-ring'
  const $emptyDiv = $('<div>');
  $emptyDiv.attr('id', 'the-ring');
  const $ringDiv = $emptyDiv[0];

  // 2. add the ring as a child of Frodo
  const $allHobbits = $('.hobbit');
  const $liFrodo = $allHobbits[0];
  $liFrodo.append($ringDiv);

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab
};

console.log(keepItSecretKeepItSafe());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  console.log('Make baddies');

  // 1. display an unordered list of baddies in Mordor
  const $ulBaddies = $('<ul>');
  for (c = 0; c < baddies.length; c++){
    const $liBaddies = $('<li>');
    $liBaddies.text(baddies[c]);

  // 2. give each of the baddies a class of "baddy"
    $liBaddies.addClass('baddy');

  // 3. remember to append them to Mordor
    $ulBaddies.append($liBaddies);
  }
  const $mordorArticle = $('#Mordor');
  $mordorArticle.append($ulBaddies);
};

console.log(makeBaddies());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  console.log('Make buddies');

  // 1. create an aside tag and append it to middle-earth below mordor
  const $aside = $('<aside>');
  const $midEarth = $('#middle-earth');
  $midEarth.append($aside);

  // 2. display an unordered list of buddies in the aside
  const $ulBuddies = $('<ul>');
  for (d = 0; d < buddies.length; d++){
    const $liBuddies = $('<li>');
    $liBuddies.text(buddies[d]);

  // 3. give each of the buddies a class of "buddy"
    $liBuddies.addClass('buddy');
    $ulBuddies.append($liBuddies);
  }
  $aside.append($ulBuddies);
};

console.log(makeBuddies());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  console.log("Now leaving the Shire");

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  const $rivendellLocation = $('#Rivendell');
  const $shireLocation = $('#The-Shire');
  const $shireHobbits = $shireLocation.children()[1];
  $rivendellLocation.append($shireHobbits);

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

console.log(leaveTheShire());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  console.log("Meeting Aragorn");

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  const $strider = $('aside').contents($('li')).children()[3];
  $strider.textContent = 'Aragorn';

  // hint: You can get a list of elements by tag name, such as 'aside'

};

console.log(beautifulStranger());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  console.log("Forging the Fellowship");

  // 1. create a new div with an id 'the-fellowship'
  const $fellowDiv = $('<div>');
  $fellowDiv.attr('id', 'the-fellowship');

  // 2. add an h1 with the text 'The Fellowship' to this new div
  const $fellowNam = $('<h1>');
  $fellowNam.text('The Fellowship');
  $fellowDiv.append($fellowNam);

  // 3. append the fellowship to middle-earth
  const $welcomeToMidEarth = $('#middle-earth');
  $welcomeToMidEarth.append($fellowDiv);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const $listOfHobbits = $('#Rivendell').children()[1];
  const $listOfBuddies = $('aside').children()[0];
  $fellowDiv.append($listOfHobbits);
  $fellowDiv.append($listOfBuddies);

};

console.log(forgeTheFellowShip());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  console.log("Facing the Balrog");

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  const $gandalfNam = $('#the-fellowship').contents().last().children()[0];
  $gandalfNam.textContent = 'Gandalf the White';

  // 2. add a class "the-white" to this element
  const $gandalfCla = $('.buddy')[0];
  $gandalfCla.className = 'the-white';

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

console.log(theBalrog());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  console.log("Sounding the horn");

  // 1. create a pop-up alert that the horn of gondor has been blown
  popup = "The horn of Gondor has been blown";
  alert(popup);

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const $boromir = $('li.buddy').last();
  $boromir.css("text-decoration", "line-through");

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  const $urukHai = $('#Mordor').contents().last().children()[2];
  $urukHai.remove();

};

console.log(hornOfGondor());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  console.log("Frodo and Sam leave Fellowship");

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const $leavingMem = $('#the-fellowship').contents('ul').first().children();
  for (f = 0; f < 2; f++){
    $('#Mordor').append($leavingMem[f]);
  }

  // 2. add a div with an id of 'mount-doom' to Mordor
  $mtDoom = $('<div id="mount-doom"></div>');
  $('#Mordor').append($mtDoom);

};

console.log(itsDangerousToGoAlone());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
