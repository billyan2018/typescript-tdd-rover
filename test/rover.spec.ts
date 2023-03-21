import { expect } from 'chai';
import { Rover, East, South, West,North } from '../Rover';
import * as forEach from 'mocha-each';

describe('Rover',  () => {

  it('rover should be created', () => {
    const rover = new Rover(0,0, new North());
    expect(rover.facing.toString()).to.eq('N');
  });


});

describe('turn left', ()=> {
  forEach([[new North(), 'W'],
  [new West(),'S'],
  [new South(),'E'],
  [new East(),'N']]).it('current facing %s, after turnLeft, will be %s', (currentFacing, newFacing) => {
    const rover = new Rover(0,0,currentFacing);
    rover.turnLeft();
    expect(rover.facing.toString()).to.eq(newFacing);
  });
});