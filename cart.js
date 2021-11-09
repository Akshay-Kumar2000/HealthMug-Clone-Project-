//cart

button = document.getElementById("side_cart").addEventListener("click", popup)
var cart = [];
document.getElementById("side_cart").addEventListener("click", blur_on)

function blur_on() {
    document.getElementById("blur_background").style.display = "inline";
}

function popup() {
    var shopping = document.getElementById("shopping");
    shopping.style.display = "flex";

    if (cart.length != 0)
        shopping_cart(cart);
}

function shopping_cart(cart) {
    document.querySelector("#shopping_cart>tbody").innerHTML = "";
    cart.map(shopping_health);
    function shopping_health(item, index) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = item.prod_name;

        var td2 = document.createElement("td");
        var select = document.createElement("select");
        var option = document.createElement("option");
        var sel = "";
        for (var i = 1; i <= 10; i++) {
            sel = sel + "<option value='" + i + "'>" + i + "</option>";
        }
        select.innerHTML = sel;
        select.onchange = function () {
            sub_total_fun(index);
        }
        select.setAttribute("id", "cart_select" + index);
        td2.append(select);

        var td3 = document.createElement("td");
        td3.textContent = item.prod_price;

        var td4 = document.createElement("td");
        //add address of user from local storage
        // td4.textContent=

        var td5 = document.createElement("td");
        td5.textContent = item.prod_price;
        td5.setAttribute("id", "cart_sub_total" + index);

        tr.append(td1, td2, td3, td4, td5);
        document.querySelector("#shopping_cart>tbody").append(tr);
    }
    document.querySelector(".bottom_shopping_cart_button").style.display = "flex";
    var td1 = document.createElement("td");
    var total = 0;

    for (i = 0; i < cart.length; i++) {
        total = total + (+(cart[i].prod_price));
    }
    console.log(total);
    td1.textContent = total;
    td1.setAttribute("id", "total_cart");
    document.getElementById("total").append(td1);

    var td2 = document.createElement("td");
    td2.textContent = total >= 473 ? total : total + 50;
    td2.setAttribute("id", "grand_total_cart_td")
    document.getElementById("grand_total_cart").append(td2);

    document.getElementById("cart_total_table").style.display = "flex";
    document.getElementById("add_more").textContent = "(" + cart.length + " items)";
}

function sub_total_fun(index) {
    var cart_select = document.getElementById("cart_select" + index)
    var sub_total = (+(cart[index].prod_price)) * (+(document.getElementById("cart_select" + index).value));
    document.getElementById("cart_sub_total" + index).textContent = sub_total;

    var total = document.getElementById("total_cart").textContent;
    document.getElementById("total_cart").textContent = +(total) + sub_total - (+(cart[index].prod_price));

    var delivery
    if ((+(total) + sub_total - (+(cart[index].prod_price))) < 500)
        delivery = 0;
    else
        delivery = 50
    var grand = document.getElementById("grand_total_cart_td").textContent;
    document.getElementById("grand_total_cart_td").textContent = +(grand) + sub_total - (+(cart[index].prod_price)) - delivery;
}

function cart_close() {
    shopping.style.display = "";
    document.getElementById("blur_background").style.display = "none";
}