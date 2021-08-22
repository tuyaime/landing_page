function ValidateEmail(mail) {
    var email = document.getElementById('email')
    var result = document.getElementById('result')

    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
        // alert('You entered ' + email.value)
        result.innerHTML = 'You entered ' + email.value
        return true;
    }
    result.innerHTML = 'You have entered an invalid email address!'
    return false;
}