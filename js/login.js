document.getElementById('Submit-button').addEventListener('click', function () {
    const emailFild = document.getElementById('user-email');
    const userMail = emailFild.value;
    const PasswordFild = document.getElementById('user-password');
    const userPassword = PasswordFild.value;

    if (userMail == 'rubelmollik@gmail.com' && userPassword == 'rubel') {
        console.log('Valid User')
        window.location.href = 'Banking.html'
    }
})


