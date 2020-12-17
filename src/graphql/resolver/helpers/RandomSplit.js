export default function splitRandom(arr, n) {
  var seen = [];
  var counter = 0;

  var shuffle = arr.reduce(function(r, e) {
    function random() {
      var rand = parseInt(Math.random(0, arr.length) * arr.length);
      if (seen.indexOf(rand) != -1) {
        return random()
      } else {
        seen.push(rand)
        return rand;
      }
    }

    r[random()] = e;
    return r;
  }, [])
  var split = shuffle.reduce(function(r, e) {
    var c = counter++;
    r[c] = r[c].concat(e)
    counter = counter % n;
    return r;
  }, Array(n).fill([]))

  return split;
}