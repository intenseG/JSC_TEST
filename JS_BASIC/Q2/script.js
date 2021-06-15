// 2-1
var nums = [1, 3, 5, 8, 4];

var sumAll = 0;
for (let i = 0; i < nums.length; i++) {
    sumAll += nums[i];
}
console.log(sumAll);

// 2-2
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        console.log(nums[i]);
    }
}

// 2-3
var sum = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 4) {
        sum += nums[i];
    }
}
console.log(sum);