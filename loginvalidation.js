function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "user" && password == "user") {
        alert('Login Succes')
    }
    else {
        alert('Failed');
    }
}