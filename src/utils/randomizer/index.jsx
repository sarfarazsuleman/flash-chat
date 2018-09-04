/**
 * @namespace utils/randomizer
 *
 * @export (default) Randomizer
 */

const getRandom = (collection, start=null, finish=null) => {
  if(start === null) {
    start = 0;
  }
  if(finish === null) {
    finish = collection.length;
  }

  let randomIdx = Math.floor(Math.random() * finish) + start;

  return collection[randomIdx];
}

class Randomizer {

  static getName() {
    let names = [
      'John Doe',
      'Jane Doe',
      'Albert Gator',
      'Alberta Gator',
    ];

    return getRandom(names);
  }

  static getMessage() {
    let messages = [
      'hi there',
      'howdy',
      'you are right',
      'why?',
      'okay',
      'I like that'
    ]

    return getRandom(messages);
  }
}

export default Randomizer;