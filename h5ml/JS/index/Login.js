
function UserLogin(){
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     const errorMsg = document.getElementById('login-ErrorText');

     try{
          if (username === 'a' && password === '1'){
               window.location.href = "/h5ml/pages/mainPage.html";
          }
          else{
               errorMsg.innerText = 'Tu usuario o contraseña es incorrecto'
          }
     }
     catch(error){
         console.error('An error occurred:', error);
     }
}