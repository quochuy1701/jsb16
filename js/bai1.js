function timSon() {
    var tong=0;
    for(var i=0;i<10000; i++){
        tong +=i;
        if(tong >10000){
            document.getElementById("txtThongbao1").innerHTML="số nguyên dương nhỏ nhất :" + i
            break;
        }
    }
    
}
timSon()