/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {

  let alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  
  let start = alp.indexOf(str[0]);
  let end = alp.indexOf(str[str.length - 1])

  alp.splice(end);
  alp = alp.slice(start);
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alp.length; j++) {
      if (i !== j) {
        continue;
      }
      if (str[i] === alp[j]) {
        continue;
      } 
      else {
        return alp[j];
      }
      
    }
  }
  return undefined;
}

console.log(fearNotLetter("abcdefghjklmno")); // print i
