function tinhTong() {
    var x=document.getElementById("num1").value
    var n=document.getElementById("num2").value
    var tong=0;
    var luythua=0;
    for (var i=1;i<= Number(n);i++){
        luythua=Math.pow(Number(x),i);
        tong+=luythua;
    }
    document.getElementById("txtThongbao2").innerHTML=tong;
}


document.getElementById("btnTinh").onclick=tinhTong
