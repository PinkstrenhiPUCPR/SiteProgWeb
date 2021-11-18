var productsList = 
[
    [0, "Pulseira Pena", "BaseItem.png", "R$15,00", false],
    [1, "Pulseira Noite", "nightImg.png", "R$15,00", false],
    [2, "Pulseira Arco-Iris", "rainbowImg.png", "R$10,00", false],
    [3, "Pulseira Aloha", "alohaImg.png", "R$12,00", false],
    [4, "Conjunto Smile", "smileImg.png", "R$35,00", false]
];

var shopList = [];
window.onload = function(){
    buildProductCard();
}
function buildProductCard(){
    document.getElementById("products").innerHTML = "";

    for(var i = 0; i < productsList.length; i++)
    {        
        var content = "";
        content += '<div class="card">';
        content += '<div class="productImg">';
        content += '<img src="images/'+ productsList[i][2] + '">';
        content += '</div>';
        content += '<div class="productDescription">';
        content +=  productsList[i][1];
        content += '</div>';
        if(productsList[i][4] == false)
        {
            content += '<div class="buy" onclick="buyIt('+ productsList[i][0] +')">';
            content += 'Comprar';
            content += '</div>';
        }
        else
        {
            content += '<div class="buy shoppingCart">';
            content += 'Adicionado ao carrinho';
            content += '</div>';
        }
        content += '</div>';
        document.getElementById("products").innerHTML += content;
    }
}
function buyIt(id){
    productsList[id][4] = true;
    shopList.push(productsList[id]);
    window.localStorage.setItem("shopList", JSON.stringify(shopList));
    buildProductCard();
}
/*function changePageShoppingCart(){
    window.location.href = "http://localhost/ProgWEB/TrabalhoSite/Pages/shoppingCart.html";
}*/



