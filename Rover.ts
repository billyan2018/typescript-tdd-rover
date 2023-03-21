export class Rover {
  x: number;
  y: number;
  facing: Direction;

  constructor(x: number, y: number, facing: Direction) {
    this.x = x;
    this.y = y;
    this.facing = facing;
  }
  turnLeft() {
    this.facing = this.facing.turnLeft();
  }
}

interface Direction {
  turnLeft(): Direction;
  toString(): string;
}
export class North implements Direction {
  turnLeft(): Direction {
    return new West();
  }
  toString(): string {
      return 'N';
  }

}

export class West implements Direction {
  turnLeft(): Direction {
    return new South();
  }
  toString(): string {
    return 'W';
}

}

export class South implements Direction {
  turnLeft(): Direction {
    return new East();
  }
  toString(): string {
    return 'S';
}

}

export class East implements Direction {
  turnLeft(): Direction {
    return new North();
  }
  toString(): string {
    return 'E';
}

}
