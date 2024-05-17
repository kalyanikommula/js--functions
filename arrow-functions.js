/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters
let playerOne = {
    name: "Sub-Zero",
    health: 100,
    attacks: [
      {
        name: "driving glacier",
        dialogue: "Put some ice on it",
      },
      {
        name: "deadly vapors",
        dialogue: "You have yet to prove yourself",
      },
      {
        name: "ice slide",
        dialogue: "Sub-Zero always wins",
      },
    ],
    takeTurn() {
      let damage = Math.ceil(Math.random() * 10);
      let attack = Math.floor(Math.random() * 3);
      console.log(
        `"${this.attacks[attack].dialogue}" said ${this.name}, as he used his ${this.attacks[attack].name} attack and dealt ${damage} damage."\n`,
      );
      return damage;
    },
    die() {
      console.log(
        `Quick as lightning, D'Artagnan drove his sword through Sub-Zero's chest, impaling him. "I have failed in the lin kuei," he croaked, before falling down dead. "Oh D'Artagnan, my hero," Rebecca said.`,
      );
    },
  };
  
  let playerTwo = {
    name: "D'Artagnan",
    health: 100,
    attacks: [
      {
        name: "spinning slash",
        dialogue: "All for one and one for all",
      },
      {
        name: "musket",
        dialogue: "Fire in the hole!",
      },
      {
        name: "sword drive",
        dialogue: "I think you got the point",
      },
    ],
    die() {
      console.log(
        `In a flash, Sub-Zero unleashed his deadly mountain punch on D'Artagnan. "Mon dieu, I am slain," wailed the stricken Musketeer, before dying. "Oh Sub-Zero, my hero," Kashif said.`,
      );
    },
    takeTurn() {
      let damage = Math.floor(Math.random() * 10 + 1);
      let attack = Math.floor(Math.random() * 3);
      console.log(
        `"${this.attacks[attack].dialogue}" said ${this.name}, as he used his ${this.attacks[attack].name} attack and dealt ${damage} damage."\n`,
      );
      return damage;
    },
  };
  
  let gameRunning = true;
  
  while (gameRunning) {
    playerOneAttackDamage = playerOne.takeTurn();
    playerTwo.health -= playerOneAttackDamage;
  
    playerTwoAttackDamage = playerTwo.takeTurn();
    playerOne.health -= playerTwoAttackDamage;
  
    if (playerOne.health <= 0) {
      playerOne.die();
      gameRunning = false;
    } else if (playerTwo.health <= 0) {
      playerTwo.die();
      gameRunning = false;
    }
  }

// Single Line Arrow Function With Parameters

// Implicit Returns

// Returning Multiple Lines
