
let userDictionary ={
     username:'admin',
     password:'123'
}

function UserLogin() {
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     const errorMsg = document.getElementById('login-ErrorText');

     try{
          if (username === userDictionary['username'] && password === userDictionary['password']){
               window.location.href = "/h5ml/pages/mainPage.html";
          }
          else{
               errorMsg.innerText = 'Tu usuario o contraseña es incorrecto'
          }
     }
     catch(error){
         console.error('Ocurrió un error. Revisarlo:', error);
     }
}