// //B1:nhập vào 2 số a và b. Hiển thị tất cả các số nguyên tố trong khoảng a và b.
//nhập vào 2 số
const num1 = parseInt(prompt("Nhập vào số thứ nhất:"));
const num2 = parseInt(prompt("Nhập vào số thứ hai:"));
let flag= true;
//Kiểm tra xem đó có phải số nguyên tố không bằng cách giải thuật chia thử trong khoảng 2 đến căn của số nhập vào lớn hơn
if (num1==num2){
  flag=false;
  alert('không có số nguyên nào được tìm thấy')
} else if(num1<num2){
  if (num2<=2){
    flag=false;
    alert('không có số nguyên nào được tìm thấy')
  } else if(num1>2, num2>2){
    for(var i=1; i)

  }
}