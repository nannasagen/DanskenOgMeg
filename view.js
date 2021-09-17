mainView();

function mainView(){
let app = document.getElementById("app");

app.innerHTML = `
<div id="banner">
<h1>${model.header}</h1>
<h2>${model.title}</h2>

<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Meny</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Møbler</a>
    <a href="#">Småting</a>
    <a href="#">Klær og tilbehør</a>
    </div>
</div>

<div class="login">
  <button onclick="myFunction()" class="loginButton">Logg inn</button>
    <div id="mylogin" class="login-content">
        <a href="#">Logg inn</a>
        <a href="#">Registrer kunde</a>
        <a href="#">Din side</a>
    </div>
</div>
</div>

<div id="content"> 
</div>
<div class="button"> </div>
`;
}