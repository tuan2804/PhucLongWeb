// Slide

var arr_hinh=[
    "img/anhnen1.jpg",
    "img/anhbanner2.jpg",
    "img/anhnen1.jpg"    
];
var index = 0;
function prev(){
    index--;
    if(index<-0) index=arr_hinh.length-1;
    document.getElementById("hinh").src=arr_hinh[index];
}
function next(){
    index++;
    if(index==arr_hinh.length) index = 0;
    document.getElementById("hinh").src=arr_hinh[index];
}