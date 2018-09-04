/**
 * @namespace utils/randomizer
 *
 * @export (default) Randomizer
 */

const randomBetween = (start, finish) => {
  return Math.floor(Math.random() * finish) + start;
}

class Randomizer {

  static getName() {
    let names = [
      'John Doe',
      'Jane Doe',
      'Albert Gator',
      'Alberta Gator',
    ];

    return names[randomBetween(0,names.length)];
  }
}

export default Randomizer;