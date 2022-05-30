function confirmFun() {
    console.log("fine");
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let address = document.getElementById("address").value;

    if(name === "" && number === "" && address === ""){
      alert("Please Enter Your Details")
    } else{
      setTimeout(() => {
        alert("Your order is accepted ");
      }, 000);
    
      setTimeout(() => {
        alert("Your order is being Prepared ");
      }, 3000);
    
      setTimeout(() => {
        alert("Your order is being packed  ");
      }, 8000);
    
      setTimeout(() => {
        alert("Your order is out for delivery  ");
      }, 10000);
    
      setTimeout(() => {
        alert("Order delivered");
      }, 12000);
    }

    
    document.getElementById("name").value = null;
    document.getElementById("number").value = null;
    document.getElementById("address").value = null;
  }

  