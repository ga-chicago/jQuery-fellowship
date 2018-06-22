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
 
  // 1. create a section tag with an id of middle-earth

  // 2. append the section to the body of the DOM.

  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

  console.log("Trying to make middle earth.");

  const $middle_earth = $("<section id='middle_earth'>");
  const $body = $("body")
  $body.append($middle_earth)

  for (let i = 0; i < lands.length; i++) {
    const $article = $("<article>");   // is there a way to pass an arrays index's value to an id? in one line?
    $article.attr("id", lands[i]);     // is ther a way to pass an array index's value to a constant name? $("$"+lands[i]).attr("id", lands[i]);
    $middle_earth.append($article);
    const $landName = $("<h1>");
    $landName.text(lands[i]);
    $article.append($landName);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

// 1. display an unordered list of the hobbits in the shire.

// 2. give each hobbit a class of "hobbit"


// hint: create a 'ul' outside the loop upon which to append the 'li's

// hint: get 'The-Shire' by using its id

const makeHobbits = () => {

  console.log('Make hobbits');

  const $hobbits = $("<ul id='hobbits'>");
  $("#The-Shire").append($hobbits);

  for (let i=0; i < hobbits.length; i++) {
    const $li = $("<li>");
    $li.addClass("hobbit");
    $li.text(hobbits[i]);
    $hobbits.append($li);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'

  // 2. add the ring as a child of Frodo

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

  const $theRing = $("<div id='the-ring'>")

  $(".hobbit").each(function(){               //is it ok to use "funciton" in ES6?
    if ($(this).text() === "Frodo Baggins") {
      $(this).append($theRing);
    }
  });
};



// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor

  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor

  const $baddies = $("<ul id='baddies'>");
  $("#Mordor").append($baddies);

  for (let i=0; i < baddies.length; i++) {
    const $li = $("<li>");
    $li.addClass("baddy");
    $li.text(baddies[i]);
    $baddies.append($li);
  }
};



// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor

  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"

  const $elseWhere = $("<aside id='elseWhere'>");
  $("#middle_earth").append($elseWhere);

  const $buddies = $("<ul id='buddies'>");
  $elseWhere.append($buddies);

  for (let i=0; i < buddies.length; i++){
    let $li = $("<li>");
    $li.addClass("buddy");
    $li.text(buddies[i]);
    $buddies.append($li);
  }

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

  $("#Rivendell").append($("#The-Shire").children("#hobbits"));

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"

  // hint: You can get a list of elements by tag name, such as 'aside'

    $(".buddy").each(function(){         
    if ($(this).text() === "Strider") { //what was this supossed to be?
      $(this).text("Aragorn");
    }
  });
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

  const $fellowship = $("<div id='the-fellowship'>");
  $("#middle_earth").append($fellowship);

  const $h1 = $("<h1>");
  $h1.text("The Fellowship");
  $fellowship.append($h1);

  $("#the-fellowship").append($("#hobbits"));
  $("#the-fellowship").append($("#buddies"));
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

$(".buddy").each(function()
    {         
    if ($(this).text() === "Gandalf the Grey") {
      $(this).text("Gandalf the White");
      $(this).addClass("the-white");
      }
    });
};

// COMMIT YOUR WORK
// The commit message should read: 3

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  alert("The Horn of Gondor has been blown!")

  $(".buddy").each(function() {
    if ($(this).text() === "Boromir") {
      $(this).css("text-decoration", "line-through");
    };
  });

  $(".baddy").each(function() {
    if ($(this).text() === "The Uruk-hai") {
      $(this).remove();
    }
  });
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

   $(".hobbit").each(function() {
    if ($(this).text() === "Frodo Baggins") {
      $("#Mordor").append($(this));
    } else if ($(this).text() === "Samwise 'Sam' Gamgee") {
      $("#Mordor").append($(this));
    }
  });

   const $mtDoom = $("<div id='mount-doom'>");
   $mtDoom.text("Mount Doom")
   $("#Mordor").append($mtDoom);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

  const $gollum = $("<div id='gollum'>");
  $gollum.text("Gollum");
  $("#Mordor").append($gollum);

  $theRing = $("#the-ring");

  $gollum.append($theRing);
  $("#mount-doom").append($gollum);
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

  $("#gollum").remove();
  $("#baddies").remove();
  $(".hobbit").each(function() {
    $("#The-Shire").append($(this));
  });

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
