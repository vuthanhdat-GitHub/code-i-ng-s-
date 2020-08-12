// 1.
// Số hoàn hảo là số có tổng các ước số bằng chính nó. Ví dụ 28 là số hoàn hảo (28 = 1+2+4+7+14).
// Cho một số nguyên n, hãy kiểm tra xem n có phải là số hoàn hảo hay không.


let sum = 0;
let n = prompt("Mời bạn nhập vào số nguyên n: ");

for (let i = 1; i < n; i++) {
    if (n % i == 0) {
        sum = sum + i;
    }
}
if (sum == n) {
    console.log(n + "là số hoàn hảo.");
}
else {
    console.log(n + "không là số hoàn hảo.");
}
