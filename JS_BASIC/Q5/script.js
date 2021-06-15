// 5-1
var banana = {name: "バナナ", price: 200};
var orange = {name: "オレンジ", price: 100};

console.log(banana['price'] * 0.1);
console.log(orange['price'] * 0.1);

// 5-2
console.log(banana['price'] + orange['price']);

// 5-3
var fruits = [
    {name: "バナナ", price: 200},
    {name: "リンゴ", price: 200},
    {name: "イチゴ", price: 500},
    {name: "オレンジ", price: 250},
    {name: "モモ", price: 350}
]

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i]['price'] >= 300) {
        console.log(fruits[i]['name']);
    }
}

// 5-4
console.log(fruits.reduce((sum, f) => sum + f.price, 0));
