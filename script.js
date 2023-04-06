// 1
function treeSum(arr) {
    let newArr = arr.flat(Infinity);
    let sum = 0;
    for (i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
    return sum;
}
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, [],], 1, 8]));

// 2 
function removeLeadingTrailing(str) {
    let a = 2;
    let arr = str.split('.');
    if (arr.length > 1) {
        var left = arr[0];
        var right = arr[1].substring(0, (!a ? 2 : a));
        return Number(left + (a !== 0 ? '.' + right : ''));
    } else {
        return Number(str);
    }
}
console.log(removeLeadingTrailing("190.000"));
console.log(removeLeadingTrailing("00803"));
console.log(removeLeadingTrailing("07.1200"));
console.log(removeLeadingTrailing("90"));



