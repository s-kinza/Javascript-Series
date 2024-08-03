const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);  // concat operators  2 arrays ko join kar dety ek mai
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]  // spread operators  bhi same 2 arrays ki value kko spread kardety means join kardety
// glass ko drop kardengy to wo spread hojae ga <= this is example of spread [...value , ...value]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);   // Flat method sab array ko ej jaga karleta hai or pouchta hai to infinity sy khudi wo parhta hai or array ko ek kardeta hai


console.log(Array.isArray('kinza'));
console.log(Array.from('kinza'));    // output  "k","i","n","z","a"  from method ny kinza ko array mai covert kardiya
console.log(Array.from({name: "kinza"}));  // Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));









