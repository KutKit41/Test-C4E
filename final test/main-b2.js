//B2:Nhập vào 1 số nguyên trong khoảng 1-10 và in ra tam giác sao
function numberOneTriangle(a){
  for (var i=1; i<= a; i++){
    for (var j=1; j<= i; j++){
      document.write('*');
    }
    document.write("<br/>")
  }
}