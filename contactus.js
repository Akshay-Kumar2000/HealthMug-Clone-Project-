function contactusfun(){
     var data = {
      name : document.getElementById("contactName").value,
      email : document.getElementById("contactEmail").value,
      mobile : document.getElementById("contactMobile").value,
      radio1 : document.getElementById("contactRadio1").value,
      radio2 : document.getElementById("contactRadio2").value,
      message : document.getElementById("messageBox").value
     }
     var arr = JSON.parse(localStorage.getItem("contact"))|| [];
     arr.push(data);
     localStorage.setItem("contact",JSON.stringify(arr));
     console.log(arr);
}