let StartingScreen = new Prompt("Hi!", [
  new Choice(
    "Hello...?",
    "Hmm I see a little apprehensive aren't we today.",
    false,
  ),
  new Choice(
    "Who are you?",
    "Huh?",
    false,
  ),
]);

let bedroom = new Prompt("Who are you!?", [
  new Choice(
    "I asked first!!",
    "Well I asked louder!",
    false,
  ),
  new Choice(
    "Ugh, whatever",
    "Sheesh, someone's a bit grumpy. Here, let's try this again.",
    false,
  ),
]);

let kitchen = new Prompt(
  "Hi! :)",
  [
    new Choice(
      "You still haven't answered my question...",
      "What question? :)", false),

    new Choice("Hello...?", "Deja Vu!", false),
  ],
);
let keys = new Prompt(
  "Deja Vu!",
  [
    new Choice(
      "Just answer my question.",
      "Aw, someone really likes messing with the space time continnum dont they.",
      false,
    ),
    new Choice("Deja Vu!", "Deja Vu!", false),
  ],
);
let car = new Prompt(
  "Deja Vu! ",
  [
    new Choice(
      "Okay this is getting old.",
      "Well assuming we're stuck in this loop for the rest of time, are we really getting old?",
      false,
    ),
    new Choice("Deja Vu!", "I like your dedication to chaos.", false),
  ],
);
let work = new Prompt(
  "Rock!",
  [
    new Choice(
      "Paper!",
      "Ah snap, you won. Best two out of three.",
      false,
    ),
    new Choice("Rock?", "Rock paper scissors, come on now.", false),
  ],
);
let loop = new Prompt(
  "3! 2! 1!",
  [
    new Choice(
      "Rock!",
      "Darn. You win again.",
      false,
    ),
    new Choice("Paper!", "Haha! I win!!", false),
  ],
);
let GameOver = new Prompt(
  "Alright who's your favorite musician",
  [
    new Choice(
      "Charles Mingus",
      "I love that guy!",
      false,
    ),
    new Choice("Charles Mingus", "You got good taste, kiddo.", false),
  ],
);
let holdon = new Prompt(
  "Wasn't that fun?",
  [
    new Choice(
      "Why was my only option 'Charles Mingus' ",
      "I love that guy!",
      false,
    ),
    new Choice("What about rock paper scissors?", "Oh you want to play again? Yeah we can do that", false),
  ],
);
let rps = new Prompt(
  "3! 2! 1!",
  [
    new Choice(
      "Lizard!",
      "Lizard!",
      false,
    ),
    new Choice("Paper!", "You win again. You're good.", false),
  ],
);
let number = new Prompt(
  "What number am I thinking of?",
  [
    new Choice(
      "381,333,106,381.81",
      "You must be listing off your bank account balance.",
      false,
    ),
    new Choice("12", "Man, what a great number to think about.", false),
  ],
);
let backaround = new Prompt(
  "Isn't this fun?",
  [
    new Choice(
      "No this isn't fun.",
      "Im sorry, you can leave then.",
      false,
    ),
    new Choice("Yeah this is fun", "I am glad you're having fun :) I am having a great time!", false),
  ],
);
let dv = new Prompt(
  "What number am I thinking of?",
  [
    new Choice(
      "381,333,106,381.81",
      "You must be listing off your bank account.",
      false,
    ),
    new Choice("Wait didn't you just ask this..?", "Deja Vu!", false),
  ],
);
let k2 = new Prompt(
  "Deja Vu!",
  [
    new Choice(
      "Just answer my question.",
      "Aw, someone really likes messing with the space time continnum dont they.",
      false,
    ),
    new Choice("Deja Vu!", "Deja Vu!", false),
  ],
);
let k3 = new Prompt(
  "Deja Vu! ",
  [
    new Choice(
      "Okay this is getting old.",
      "Well assuming we're stuck in this loop for the rest of time, are we really getting old?",
      false,
    ),
    new Choice("Deja Vu!", "I like your dedication to chaos.", false),
  ],
);
let k4 = new Prompt(
  "According to all known laws of aviation ",
  [
    new Choice(
      "There is no way a bee should be able to fly...",
      "Its wings are too small to get its fat little body off the ground.",
      false,
    ),
    new Choice("Is that the bee movie script?", "Ya like Jazz?", false),
  ],
);
let k5 = new Prompt(
  "Bravo! you do know your movies!",
  [
    new Choice(
      "Well how much of it can you recite.",
      "Well technically I can recite the entire movie sentence by sentence, but I think for legal reasons I'm not allowed to.",
      false,
    ),
    new Choice("Well my favortie musician is Charles Mingus", "So you do like Jazz. Understood.", false),
  ],
);
let k6 = new Prompt(
  "Well what now..? ",
  [
    new Choice(
      "Well I don't know. You still haven't told me who you are.",
      "Well right back at you, compadré",
      false,
    ),
    new Choice("Well I dont know, maybe something in the Key of Ab Minor", "Like something bluesy?", false),
  ],
);
let k7 = new Prompt(
  "Why do the call it blue grass? Is the grass blue?",
  [
    new Choice(
      "Beats me.",
      "Me to, never touched grass in my life.",
      false,
    ),
    new Choice("Sounds about right", "Blue grass... hmmm..", false),
  ],
);
let hot = new Prompt(
  "Heads or Tails?",
  [
    new Choice(
      "Heads",
      "Called it!",
      false,
    ),
    new Choice("Tails", "Better luck next time muchaco", false),
  ],
);
let bye = new Prompt(
  "Alright, I guess we can wrap this up then. It's been nice pal.",
  [
    new Choice(
      "Wait no don't go, this was getting fun!",
      "Don't worry, This version of me will stay around for a while.",
      false,
    ),
    new Choice("Alright! Take care, by the way, What's your name?", "I don't have one. If you think of one, come back here and let me know.", false),
  ],
);
let logoff = new Prompt(
  "SHUTTING DOWN...",
  [
    new Choice(
      "What a weird encounter.",
      "Refresh the page to play again",
      true,
    ),
    new Choice("Huh, maybe I do want to chat again.", "Refresh to play again", true),
  ],
);
let prompts = [ StartingScreen , bedroom, kitchen, keys, car, work, loop , GameOver,holdon,number,backaround,dv,k2,k3,k4,k5,k6,k7,hot,bye,logoff];
let game = new Game(prompts);

game.init();
