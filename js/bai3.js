function tinhGiaithua() {
    var n=document.getElementById("number1").value
    var tich=1;
    if(Number(n)==0){
        tich=1;
    }
    for (var i=1;i<= Number(n);i++){
        tich = tich*i;
    }
    document.getElementById("txtThongbao3").innerHTML=tich;
}


document.getElementById("btnTinh1").onclick=tinhGiaithua
