// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffeedata = JSON.parse(localStorage.getItem("coffee"));
display(coffeedata);
function display(coffeedata) {

    let total = coffeedata.reduce(function (sum, el) {
        return sum + Number(el.price);
    }, 0)
    //console.log(total);
    document.getElementById("total_amount").innerText = total;

    document.getElementById("bucket").innerHTML = null;
    coffeedata.map(function (el, i) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("h3");
        name.innerText = `Coffee Name: ${el.title}`;

        let price = document.createElement("h3");
        price.innerText = `Price: ${el.price}`;

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.setAttribute("id", "remove_coffee");
        btn.addEventListener("click", function () {
            removeFun(el, i);
        })

        div.append(img, name, price, btn);
        document.getElementById("bucket").append(div);

    })
}
function removeFun(el, i) {
    coffeedata.splice(i, 1);
    localStorage.setItem("coffee", JSON.stringify(coffeedata));
    display(coffeedata);
}

function checkFun() {
    window.location.href = "checkout.html"
}