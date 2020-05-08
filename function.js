function toggle() {
    var CheckBox = document.getElementById("toggle");
    var translate = document.getElementById("translate");
    var original = document.getElementById("original")

    if (CheckBox.checked == true) {
     translate.style.display = "block"
     original.style.display = "none"
    } else {
      translate.style.display = "none"
      original.style.display = "block"
    }
  }