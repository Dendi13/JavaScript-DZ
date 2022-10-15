//1
function number(a){
    if (a==1) {
        console.log('Вы ввели правильное число');
    } else {
        console.log('Вы ввели неверное число');
    }
}
number(1);
//2
function number2(b){
    if(b > 0){
        console.log('Число больше 0');
    } else {
        console.log('Число меньше 0');
    }
}
number2(-1);
//3
function per(m, n) {
    if (m >= 50) {
        let n ='Большое';
        console.log(n);
    } else {
        let n ='Малеьнкое';
        console.log(n);
    }
}
per(40);
//4

//5
let i = 45;
while(i <= 67) {
    console.log(i);
    i++
}
//6

//7
for(let i = 45; i <= 67; i++) {
    console.log(i);
}
//8
function helo1(){
    alert('Привет, JavaScript')
}
helo1()

