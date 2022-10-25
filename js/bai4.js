function taoThe(){
    var content="";
    for (var i=1;i<=10;i++){
        if(i % 2 ==0){
            content += "<div  style='background-color:red; color:white'>div chẵn</div>"
        }else{
            content += "<div  style='background-color:blue; color:white'>div lẻ</div>"
        }
        document.getElementById("txtThongbao4").innerHTML= content;
    }
}

document.getElementById("btnTinh2").onclick=taoThe