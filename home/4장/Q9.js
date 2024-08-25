let arr = ["apple", "banana", "grape", "kiwi", "watermelon"];

let fruitArr = arr.filter((fruit) => fruit.length > 5)
                  .map((fruit) => fruit.toUpperCase());
console.log(fruitArr);

