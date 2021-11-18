function AssignValues(){
    var nameUser = document.getElementById("nameUser").value;
    var lastname = document.getElementById("lastname").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userRegisterList = [];
    userRegisterList.push(nameUser, lastname, gender, email, password);
    window.localStorage.setItem('userRegisterList', JSON.stringify(userRegisterList))
    window.location.href = "Login.html";
}