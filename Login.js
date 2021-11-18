function AssignValues(){
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    var userList = [];
    userList.push(userName, userPassword);
    window.localStorage.setItem('userList', JSON.stringify(userList))
    window.location.href = "Shop.html";
}