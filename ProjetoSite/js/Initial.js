var productsList = 
[
    [0, "Pulseira Pena", "BaseItem.png", false],
    [1, "Pulseira Noite", "nightImg.png", false],
    [2, "Pulseira Arco-Iris", "rainbowImg.png", false],

    
];
var shopList = [];
window.onload = function(){
    buildProductCard();
}
function buildProductCard(){
    document.getElementById("SiteProductsCards").innerHTML = "";

    for(var i = 0; i < productsList.length; i++)
    {        
        var content = "";
        /* Card Pulseira */ 
        content += '<div class="card">';
        content += '<div class="productImg">';
        content += '<img src="images/'+ productsList[i][2] + '">';
        content += '</div>';
        content += '<div class="productDescription">';
        content +=  productsList[i][1];
        content += '</div>';
        content += '</div>';
        /* */
        document.getElementById("SiteProductsCards").innerHTML += content;
    }
}

