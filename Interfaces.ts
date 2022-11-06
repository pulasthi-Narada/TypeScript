interface Person {
  name: string;

  age: number;
}

const p: Person = { name: 'pula', age: 25 };

// optinal and readonly propity

interface Point {
  readonly id: string;
  x: number;
  y: number;
  z?: number;
}

const point: Point = { id: 'num1', x: 42.2, y: 41.3 };

point.id = 45;

// add method

interface Person2 {
  name: string;
  age: number;

  eat(): string;

  talk: (word: string) => string;
}

const pulasthi: Person2 = {
  name: 'pulasthi',
  age: 25,
  eat() {
    return 'i ate';
  },
  talk: (w: string) => {
    return w;
  },
};

interface Prouduct {
  name: string;
  price: number;
  applyDisscount(discount: number): number;
}

const shirt: Prouduct = {
  name: 'M 26 camemir shirt',
  price: 4500,
  applyDisscount(dis: number): number {
    this.price = this.price * (1 - dis);
    return this.price;
  },
};

shirt.applyDisscount(0.5);

// add propity or method to interface after declar

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const tedy: Dog = {
  name: 'tedy',
  age: 1,
  breed: 'local',
  bark(): string {
    return 'woof woof';
  },
};

const budy: Dog = {
  name: 'tedy',
  age: 1,
};

// extending interface (can  extending interfaces)

interface ServesDog extends Dog {
  job: 'bomb sunf' | 'scurity' | 'drug sunf';
}

const armyDog: ServesDog = {
  name: 'tedy',
  age: 1,
  breed: 'local',
  job: 'drug sunf',
  bark(): string {
    return 'woof woof';
  },
};

interface spicalOpsDog extends Dog, ServesDog {
  spacial: 'SFT' | 'SF' | 'comando';
}

const SFDog: spicalOpsDog = {
  name: 'tedy',
  age: 1,
  breed: 'local',
  job: 'drug sunf',
  spacial: 'SFT',
  bark(): string {
    return 'woof woof';
  },
};

