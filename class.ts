//
class Player {
  // propitys in a class are public in defualt
  readonly frist: string;
  public last: string;
  protected score: number = 0;
  numLive: number = 10;
  static descrtstion: string = 'this is game';
  constructor(frist: string, last: string) {
    console.log('constructor');
    this.frist = frist;
    this.last = last;
  }
  static getDescrtstion(): void {
    console.log(this.descrtstion);
  }
  hello(): void {
    console.log('hello');
  }

  loseLives(): void {
    this.numLive -= 1;
  }
  get Score(): number {
    return this.score;
  }

  set setScore(score: number) {
    if (score > 0) {
      this.score = score;
    }
  }

  private secret(): void {
    console.log('secret');
  }
}

class Player2 {
  // propitys and methods in a class are public in defualt
  private score: number = 0;
  numLive: number = 10;

  constructor(readonly frist: string, private last: string) {}

  get fullName(): string {
    return `${this.frist} ${this.last}`;
  }
}

class AdminPlayer extends Player {
  power: string[];
  isAdmin: boolean = true;

  constructor(frist: string, last: string, power: string[]) {
    super(frist, last);
    this.power = power;
  }
}

const p1 = new Player('pulasthi', 'narada');

const p3 = new Player2('pula', 'nara');

const p2 = new AdminPlayer('asha', 'edrisihna', ['insert', 'delete']);

p1.frist = 'ff';

p3.fullName = 'gg';

Player.descrtstion;
Player.getDescrtstion();

// ******************************* class interface *********************************************

interface Colourfull {
  color: string;
}

interface print {
  noPrint: number;
  print(): void;
}

class Bike implements Colourfull, print {
  constructor(public color: string, public noPrint: number) {}

  print(): void {
    console.log('dd');
  }
}

const b = new Bike('red', 2);

//****************** abstract class **************************************************

abstract class Employee {
  abstract Pay(): number;

  hello(): void {
    console.log('hello');
  }
}

class FullTimeEmployee extends Employee {
  Pay(): number {
    return 10000000;
  }
}

class PartTimeEmployee extends Employee {
  Pay(): number {
    return 200000;
  }
}
