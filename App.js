function checkData() {
    var enterEmail = document.getElementById('email').value
    var enterPassword = document.getElementById('password').value
    var link = document.getElementById('link')

    var getEmail = localStorage.getItem('userEmail')
    var getPassword = localStorage.getItem('userPassword')


    if (enterEmail == getEmail) {
        if (enterPassword == getPassword) {
            alert("Login Successfull")
            window.open("https://starlit-smakager-0a4ece.netlify.app/")
        }
        else {
            alert("Wrong Password")
        }
    }
    else {
        alert("Invalid Details")
        link.style.color = "red"
    }
}