// 4-1
function confirm() {
    if (!alert('OKを押してください')) {
        console.log('OKが選択されました');
    }
}
confirm();

// 4-2
function isEvenNumber(num) {
    return Boolean(num % 2);
}
console.log(isEvenNumber(0));
console.log(isEvenNumber(1));
console.log(isEvenNumber(2));
console.log(isEvenNumber(5));
console.log(isEvenNumber(15));

// 4-3
var nums = [4, 5, 6, 9];

for (let i = 0; i < nums.length; i++) {
    if (!isEvenNumber(nums[i])) {
        console.log(nums[i]);
    }
}