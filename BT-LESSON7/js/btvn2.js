var array = [1 , 5, 9 ,100, 55, 88, 99, 66 ,7, 4, 8 , 99, 77, 88, 77, 55, 11, 22, 66];
//BTVN2: log ra màn hình số lần xuất hiện của phần tử có giá trị là 66

var count = 0;

for(var i = 0; i <= array.length; i++){
    if(array[i] == 66){
        count++;
    }
}
console.log(count);