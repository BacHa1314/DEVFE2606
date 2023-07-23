var array = [1 , 5, 9 ,100, 55, 88, 99, 66 ,7, 4, 8 , 99, 77, 88, 77, 55, 11, 22, 66];
// BTVN3: log ra màn hình số lần xuất hiện của mỗi phần tử có giá trị khác nhau 
var array2 = [3];
var count;
for(var i = 0; i < array.length; i++){
    array[i] = array.length;
    array2[i] = -1;
}
for(var i = 0; i <= array.length; i++){
    count = 1;
    for(var j = i + 1; j < array.length; j++){
        if(array[i] == array[j]){
            count++;
            array2[j] = 0;
        }
    }
    if(array2[i] != 0){
        array2[i] = count;
    }
}
for(var i = 0; i < array.length; i++){
    if(array2[i] != 0){
        console.log("Phần tử " + array[i] + " xuất hiện " + array2 + "lần");
    }
}