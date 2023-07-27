var array = [1 , 5, 9 ,100, 55, 88, 99, 66 ,7, 4, 8 , 99, 77, 88, 77, 55, 11, 22, 66];
//BTVN2: log ra màn hình số lần xuất hiện của phần tử có giá trị là 66

// var count = 0;

// for(var i = 0; i <= array.length; i++){
//     if(array[i] == 66){
//         count++;
//     }
// }
// console.log(count);

//cach 2, tao 1 arrayTemp

var max = array.length;
var arrayTemp = [];
for(let i = 0; i < max; i++){
    
    let check = true;
    for( let j = i; j < max; j++){
        if(array[i] == array[j] && i != j){
            check = false;
        }
    }
    if(check) arrayTemp.push(array[i]);
}
var maxTemp = arrayTemp.length;
for(let i = 0; i < maxTemp; i++){
    let count = 0;
    for(let j = 0 ; j < max; j++){
        if(arrayTemp[i] == array[j]){
            count++;
        }
    }
    console.log("Giá trị " + arrayTemp[i] + " xuất hiện " + count + " lần");
    count = 0;
}

