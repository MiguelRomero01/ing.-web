
function UserLogin(){
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     const errorMsg = document.getElementById('login-ErrorText');

     try{
          if (username === 'admin' && password === '123'){
               alert('true');
          }
          else{
               errorMsg.innerText = 'Tu usuario o contraseña es incorrecto'
          }
     }
     catch(error){
         console.error('An error occurred:', error);
     }
}