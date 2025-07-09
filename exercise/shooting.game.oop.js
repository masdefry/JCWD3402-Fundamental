class Player {
  name = '';
  health = 100;
  power = 10;

  constructor(_name) {
    this.name = _name;
  }

  damage(power) {
    this.health = this.health - power;
  }

  useItem(item) {
    // item: { health: 0, power: 10 } OR { health: 10, power: 0 }
    this.health = this.health + item.health;
    this.power = this.power + item.power;
  }

  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

const player1 = new Player('Ambarita');
const player2 = new Player('Raka');

class ShootingGame {
  player1 = null;
  player2 = null;

  constructor(_player1, _player2) {
    (this.player1 = _player1), (this.player2 = _player2);
  }

  getRandomNumber() {
    const randomNumber = Math.round(Math.random());

    return randomNumber; // 0 atau 1
  }

  getRandomItem(randomNumber) {
    if (randomNumber === 0) {
      return { health: 10, power: 0 };
    } else {
      return { health: 0, power: 10 };
    }
  }

  start() {
    console.log('Status-01');
    this.player1.showStatus();
    this.player2.showStatus();

    const getRandomNumberPlayer1 = this.getRandomNumber();
    const getRandomNumberPlayer2 = this.getRandomNumber();
    const resultGetRandomItemPlayer1 = this.getRandomItem(
      getRandomNumberPlayer1
    );
    const resultGetRandomItemPlayer2 = this.getRandomItem(
      getRandomNumberPlayer2
    );
    this.player1.useItem(resultGetRandomItemPlayer1);
    this.player2.useItem(resultGetRandomItemPlayer2);
    console.log('Status After Get Random Item');
    this.player1.showStatus();
    this.player2.showStatus();

    const getRandomNumberPlayerToShoot = this.getRandomNumber(); // 0 or 1
    console.log(getRandomNumberPlayerToShoot);
    if (getRandomNumberPlayerToShoot === 0) {
      // Player-1 shoot first
      this.player2.damage(this.player1.power); // Player2 menerima damage from player1

      if (this.player2.health > 0) {
        // Apabila health player2 masih, dia bisa nge-shoot ke player1
        this.player1.damage(this.player2.power); // Player1 menerima damage from player2
        console.log('Status After Shoot');
        this.player1.showStatus();
        this.player2.showStatus();
        this.start();
      } else {
        console.log('Player-01 Win');
      }
    } else {
      // Player-2 shoot first
      this.player1.damage(this.player2.power);

      if (this.player1.health > 0) {
        // Apabila health player1 masih, dia bisa nge-shoot ke player2
        this.player2.damage(this.player1.power);
        console.log('Status After Shoot');
        this.player1.showStatus();
        this.player2.showStatus();
        this.start();
      } else {
        console.log('Player-02 Win');
      }
    }
  }
}

const startGame = new ShootingGame(player1, player2);
startGame.start();
