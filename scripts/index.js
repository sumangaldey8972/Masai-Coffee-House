// Add the coffee to local storage with key "coffee"
let coffeearr = JSON.parse(document.getElementById("coffee")) || [];
async function menuFun(){
  let url = "https://masai-mock-api.herokuapp.com/coffee/menu";
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.menu.data);
  append(data.menu.data)
}

function append(data){

  document.getElementById("menu").innerHTML = null;

  data.forEach(function(el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("h3");
    name.innerText = `Coffee Name: ${el.title}`;

    let price = document.createElement("h3");
    price.innerText = `Price: ${el.price}`;

    let btn = document.createElement("button");
    btn.innerText = "Add To Bucket";
    btn.setAttribute ("id", "add_to_bucket");
    btn.addEventListener("click", function(){
      addbucket(el);
    })
    div.append(img, name, price, btn);
    document.getElementById("menu").append(div);

  });
}

function addbucket(el){
    coffeearr.push(el);
    document.getElementById("coffee_count").innerText = coffeearr.length;
  localStorage.setItem("coffee", JSON.stringify(coffeearr));
}

menuFun()