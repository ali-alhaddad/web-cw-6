// هنا سوف تنشئ دالة calculate
function calculate() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  if (height == "" || weight == "") {
    alert(" قم بالتأكد من تعبئة جميع بياناتك المطلوبة");
    return;
  }
  let BML = weight / (height * height);
  let status = "";
  if (BML < 18.5) {
    status = "تعاني من نقص في الوزن";
  } else if (BML < 25) {
    status = "وزنك صحي";
  } else if (BML < 30) {
    status = "تعاني من زيادة في الوزن";
  } else {
    status = "تعاني من السمنة المفرطة";
  }
  BML = BML.toFixed(1);
  document.getElementById("result").innerHTML = BML;
  document.getElementsByClassName("comment")[0].innerHTML = status;
}
