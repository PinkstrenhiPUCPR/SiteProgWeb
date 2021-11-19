storage = window.localStorage;
var shopList = JSON.parse(storage.getItem("shopList"))||"[]";

window.onload = function(){
    BuildProductCart();
}
function BuildProductCart(){
    document.getElementById("cart").innerHTML = "";

        for(var i = 0; i < shopList.length; i++)
        {        
            var content = "";
            content += '<div class="CartTxt">';
            content += '<table cellpadding="15" cellspacing="15">';
            content += '<tr>';
            content += '<td>';
            content += '<img src="images/'+ shopList[i][2] + '">';
            content += '</td>';
            content += '<td>'+ shopList[i][1] +'</td>';
            content += '<td>Preço: ' + shopList[i][3] + '</td>';
            content += '</tr>';
            content += '</table>';
            content += '</div>';
            document.getElementById("cart").innerHTML += content;
        }
}
function BuyCart(){
    storage.removeItem("shopList");
}