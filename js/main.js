/**GIẢ SỬ: NGƯỜI DÙNG NHẬP SỐ CÁC SỐ TỰ NHIÊN, TẬP HỢP CHÚNG THÀNH MỘT ARRAY VÀ SAU ĐÓ TUỲ THEO MỤC ĐÍCH NGƯỜI DÙNG LÀ GÌ MÀ LỰA CHỌN.

-ĐẦU VÀO: Người dùng nhập vào các số tự nhiên tạo thành một tập hợp arryNum=[…]

-XỬ LÝ: (Chi tiết ở từng bài)
-ĐẦU RA: (Chi tiết ở từng bài)
*/

//Tạo array
var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 1];
document.getElementById("inputedNum").innerHTML = arrayNum;
//FUNCTION THÊM SỐ
function inputNewNum() {
  arrayNum.push(document.getElementById("inputNum").value * 1);
  document.getElementById("inputedNum").innerHTML = arrayNum;
  document.getElementById("inputNum").value = "";
  document.getElementById("inputNum").focus();
}
document.getElementById("inputNum").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    inputNewNum();
  }
});
//FUNCTION REMOVE SỐ
function removeLast() {
  arrayNum.pop();
  document.getElementById("inputedNum").innerHTML = arrayNum;
}
//FUNCTION CLEAR
function clea() {
  console.log(123);
  arrayNum = [];
  document.getElementById("inputedNum").innerHTML = arrayNum;
}

//-----------------------------------------------------------------
/**1. Tạo một hàm có chức năng tính tổng

+ var tongSoDuong = 0
+ Duyệt arryNum, nếu phần tử nào lớn hơn hoặc bằng 0 thì += vào tongSoDuong
 */

function sumPositiveNum(array) {
  for (var sum = 0, i = 0; i < array.length; i++) {
    if (arrayNum[i] >= 0) {
      sum += arrayNum[i];
    }
  }
  document.getElementById("resultB1").innerHTML = sum;
}
//-----------------------------------------------------------------

/**
 * 2. Đếm số dương

+ var soDuongCount = 0 
+ Duyệt arryNum, nếu phần tử nào lớn hơn 0 thì += vào soDuongCount */

function countPositive(array) {
  for (var posCounted = 0, i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      posCounted += 1;
    }
  }
  document.getElementById("resultB2").innerHTML = posCounted + ` số dương`;
}
//-----------------------------------------------------------------

/**
 * 3. Tìm số nhỏ nhất

-CÁCH 1:
+ var minNumber = arryNum[0]
+ Duyệt mảng arryNum với i = 1, bước nhảy i++
+ Nếu có phần tử nào lớn bé hơn minNumber thì minNumber = arryNum[i]*/
function findMin(array) {
  for (var minNum = array[0], i = 1; i < array.length; i++) {
    if (minNum > array[i]) {
      minNum = array[i];
    }
  }
  document.getElementById("resultB3").innerHTML = minNum;
  return minNum;
}

/**-CÁCH 2:
+ Sort mảng với thứ tự từ nhỏ đến lớn (arryNumSortedUp)
+ minNumber = arrayNumSorted[0] */
//FUNCTION SORT UP
function arraySortUp(array) {
  var arrayNumSortedUp = array.sort(function (a, b) {
    return a - b;
  });
  return arrayNumSortedUp;
}
//FUNCTION LẤY SỐ NHỎ NHẤT
function findMin2(array) {
  var arrayNumSortedUp = arraySortUp(array);
  minNum = arrayNumSortedUp[0];
  document.getElementById("resultB3").innerHTML = minNum;
  return minNum;
}
//ĐÃ TEST CẢ 2 CÁCH
//-----------------------------------------------------------------

/**
 * 4. Tìm số dương nhỏ nhất

+ var soDuong = []
+ Duyệt mảng arrayNum để lọc ra số dương. Nếu arrayNum[i] lớn hơn 0 thì soDuong.push(arrayNum[i]).
+ Sử dụng lại hàm bài số bài số ba để tìm ra số nhỏ nhất

 */
//FUNCTION TẠO RA MẢNG CÁC SỐ DƯƠNG
function positiveArray(array) {
  var positiveNumArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNumArray.push(array[i]);
    }
  }
  return positiveNumArray;
}
//FUNCTION TẠO RA MẢNG CÁC SỐ ÂM (SỬ DỤNG SAU)
function negativeArray(array) {
  var negativeNumArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negativeNumArray.push(array[i]);
    }
  }
  return negativeNumArray;
}

//FUNCTION TÌM RA SỐ DƯƠNG NHỎ NHẤT
function minPositive(array) {
  var positiveNumArray = positiveArray(array); //SỬ DỤNG FUNCION MẢNG SỐ DƯƠNG
  var minPositive = findMin(positiveNumArray); //SỬ DỤNG FUNCION TÌM SỐ NHỎ NHẤT CỦA BÀI 3
  document.getElementById("resultB4").innerHTML = minPositive;
}
//-----------------------------------------------------------------

/**
 * 5. Tìm số chẵn cuối cùng

+ var lastEven = "Dãy không có số chẵn"
+ Duyệt mảng arrayNum chạy qua. Nếu số arrayNum[i] % 2 == 0 thì soChan = arrayNum[i]

 */

function lastEvenNum(array) {
  for (var lastEven = "Dãy không có số chẵn", i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      lastEven = array[i];
    }
  }
  document.getElementById("resultB5").innerHTML = lastEven;
}
//-----------------------------------------------------------------

/**
 * 6. Đổi chỗ
+ Gán vị trí vào biến tạm
var num1Index = ?
var num2Index = ?
Gán giá trị num1 vào num1Index, tương tự đối với num2 là num2Index
Gán các giá trị vào arraySwapped



*Review lại thực tế

+ Output: DOM lại mảng sau khi đổi chỗ

 */

function swapIndex(array) {
  var arraySwapped = array;

  var numIndex1 = document.getElementById("numIndex1").value * 1;
  var numIndex2 = document.getElementById("numIndex2").value * 1;

  var num1 = array[numIndex1];
  var num2 = array[numIndex2];

  arraySwapped[numIndex1] = num2;
  arraySwapped[numIndex2] = num1;
  console.log(arraySwapped);

  console.log(array);
  return (document.getElementById("resultB6").innerHTML = arraySwapped);
}
//-----------------------------------------------------------------

/**
 * 7. Sắp xếp tăng dần
+ arrayNumSortedUp = arrayNum.sort(function(a, b){return b-a})
+ Output: arrayNumSortedUp

 */
function arraySortIncrease(array) {
  var arraySorted = arraySortUp(array); //Tái sử dụng function cách 2 của bài 3
  document.getElementById("resultB7").innerHTML = arraySorted;
}

/**
 * 8. Tìm số nguyên đầu tiên
+ var firstPrime
+ Duyệt qua mảng arrayNum, sử dụng lại hàm isPrime ở bài tập trước, nếu tìm thấy số nguyên thì gán firstPrime = arrayNum[i] sau đó return function lẫn vòng lập
 */
//FUNCTION CHECK SỐ NGUYÊN TỐ
function isPrime(input) {
  if (input < 2) return false;
  for (var t = 2; t <= Math.sqrt(input); t++) {
    if (input % t == 0) {
      return false;
    }
  }
  return true;
}
//FUNCTION TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
function firstPrime(array) {
  for (
    var firstPrimeNum = "Trong dãy không có số nguyên tố", i = 0;
    i < array.length;
    i++
  ) {
    if (isPrime(array[i]) == true) {
      firstPrimeNum = array[i];
      return (document.getElementById("resultB8").innerHTML = firstPrimeNum);
    }
  }
}

/***
 * 9. Đếm số nguyên:

+ Sử dụng arrayNum.isInteger để đếm được số nguyên.
 */

function arrayInteger(array) {
  var countInt = 0;
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i]) == true) {
      countInt += 1;
    }
  }
  document.getElementById("resultB9").innerHTML = countInt + " số nguyên";
}

/**
 * 10. So sánh lượng số âm và dương
+ Tạo hàm so sánh length của array số dương và array số âm
+ Sử dụng lại hàm tạo mảng số dương và số âm của bài 4
+ So sánh và cho ra kết quả
và ngược lại */

function comparePosNeg(array) {
  if (positiveArray(array).length > negativeArray(array).length) {
    document.getElementById("resultB10").innerHTML = `Số dương > Số âm`;
  } else if (positiveArray(array).length < negativeArray(array).length) {
    document.getElementById("resultB10").innerHTML = `Số âm > Số dương`;
  } else {
    document.getElementById("resultB10").innerHTML = `Số dương = Số âm`;
  }
}
