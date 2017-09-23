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
  body = $('body')

const makeMiddleEarth = () => {
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");
    // create a section tag with an id of middle-earth
    const middleEarth = $('<section ID="middle-earth">');
    for(let i = 0; i < lands.length; i++) {
      // add each land as an article tag
      const land = $('<article>');
      land.attr("id", lands[i]);
      // inside each article tag include an h1 with the name of the land
      const name = $('<h1>');
      name.text(lands[i]);
      land.append(name);
      middleEarth.append(land);
    }
    // append middle-earth to your document body
    body.append(middleEarth);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

const theShire = $("#The-Shire" )
const rivendell = $("#Rivendell" )
const mordor = $("#Mordor" )
const makeHobbits = () => {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  const hobbitList = $('<ul class="hobbitses">');
  for(let i = 0; i < hobbits.length; i++) {
  // give each hobbit a class of hobbit
    const hobbit = $('<li class="hobbit">');
    hobbit.text(hobbits[i]);
    hobbitList.append(hobbit);
  }
  theShire.append(hobbitList);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

const frodo = $(document.body).find( ":contains(Frodo)" );
const keepItSecretKeepItSafe = () => {
  // create a div with an id of 'the-ring'
  const theRing = $('<div ID="the-ring" class="magic-imbued-jewelry">');
  // add the ring as a child of Frodo
  frodo.append(theRing);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  const aside = $('<aside>');
  const baddyList = $('<ul>');
  for(let i = 0; i < baddies.length; i++) {
    // attach an unordered list of the 'buddies' in the aside
    const baddy = $('<li>');
    baddy.text(baddies[i]);
    baddyList.append(baddy);
  }
  // insert your aside as a child element of rivendell
  aside.append(baddyList);
  mordor.append(aside);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  const aside = $('<aside>');
  const buddyList = $('<ul>');
  for(let i = 0; i < buddies.length; i++) {
    // attach an unordered list of the 'buddies' in the aside
    const buddy = $('<li>');
    buddy.text(buddies[i]);
    buddyList.append(buddy);
  }
  // insert your aside as a child element of rivendell
  aside.append(buddyList);
  rivendell.append(aside);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const hobbitses = $(".hobbitses");
const leaveTheShire = () => {
  // assemble the hobbits and move them to Rivendell
rivendell.append(hobbitses);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

const strider = $(document.body).find( ":contains(Strider)");
const beautifulStranger = () => {
  // change the 'Strider' textnode to 'Aragorn'
  strider.text('Aragon');
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

const fellowshipMembers = rivendell.find( ":contains(li))");

const forgeTheFellowShip = () => {
  // create a new div called 'the-fellowship' within rivendell
  const theFellowship = $("<div ID='the-fellowship'>");
  for(let i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.append(fellowshipMembers[i]);
  }
  rivendell.append(theFellowship);
}


  // 1. create a new div with an id 'the-fellowship'

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'



// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

const gandalf = fellowshipMembers[0];


const theBalrog = () => {

  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.text('Gandalf the White');
  // apply style to the element
  gandalf.css('border', '3px solid gray');
  // make the background 'white', add a grey border
  gandalf.css('backgroundColor', 'white');




};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

const boromir = fellowshipMembers[4];

  alert('the horn of gondor has blown');
  // pop up an alert that the horn of gondor has been blown
  boromir.css("textDecoration",'line-through');
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  boromir.parentNode.remove(boromir)


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const sam = fellowshipMembers[6];

const itsDangerousToGoAlone = () => {

  // take Frodo and Sam out of the fellowship and move them to Mordor
  mordor.append(frodo);
  mordor.append(sam);
  const mountDoom = $('<div ID="mount-doom">');
  mordor.append(mountDoom);

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
