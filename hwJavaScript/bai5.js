// 5.
// input loiBaiHat = "Kia con buom vang kia con buom xanh"
// in ra lần lượt từng từ, mỗi từ cách nhau 1 giây

const loiBaiHat = 'Kia con buom vang kia con buom xanh'
const tach = loiBaiHat.split(' ')
console.log(tach);

tach.every((e,i)=>{
    setTimeout(()=>{
        console.log(e);
    })
}