var a = 1;
var b = -11;
var c = 30;

var denta = b^2 -4*a*c;
if(a == 0){
    if(b == 0){
        if(c == 0){
            console.log("phương trình có vô số nghiệm");
        }else{
            console.log("Phương trình vô nghiệm");
        }
    }else{
        console.log("Phương trình có nghiệm duy nhất là" + -(c/b));
    }
}else{
    if(denta > 0){
        console.log("Phương trình có hai nghiệm phân biệt: x1 = " + ((-b+Math.sqrt(denta)/a)) + " x2 = " + ((-b-Math.sqrt(denta)/a)));
    }else if(denta == 0){
        console.log("Phương trình có nghiệm kép: x = " + (-b/2*a));
    }else{
        console.log("Phương trình vô nghiệm");
    }
}