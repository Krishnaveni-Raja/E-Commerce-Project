var signupButton= document.querySelector('.signup-btn')

signupButton.addEventListener('click', function(){
    username= document.getElementById('username').value;
    email= document.getElementById('email').value;
    password= document.getElementById('password').value;

    if(username && email && password){
        window.location.href= 'home.html'
        alert('Sign in successful!')
    }
    else if(username && email && !password){
        alert('Please enter the password')
    }
    else if(username && !email && password){
        alert('Please enter the email')
    }
    else if(!username && email && password){
        alert('Please enter the username')
    }
    else if(username && !email && !password ){
        alert('Please enter the email & password')
    }
    else if(!username && email && !password){
        alert('Please enter the username & password')
    }
    else if(!username && !email && password){
        alert('Please enter the username & email')
    }
    else if(!username && !email && !password){
        alert('Please fill all the fields')
    }
})


