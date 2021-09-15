viewDiv = document.getElementById("app");


viewDiv.innerHTML = `

<div id="header"><h1>Dansken og Meg</h1></div>
<h2>Vintage skatter</h2>

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


<!-- Gallery --> 

<div class="slideshow-container">

    <div class="mySlides fade">
      <img src="https://www.designerhome.no/wp-content/uploads/2018/03/Rodeo-sofa-3-seter-5-scaled.jpg" style="width:100%">
    </div>
  
    <div class="mySlides fade">
      <img src="https://i.etsystatic.com/9686976/r/il/f8d4cc/2014310184/il_794xN.2014310184_rmhh.jpg" style="width:100%">
    </div>
  
    <div class="mySlides fade">
      <img src="https://i.etsystatic.com/28952199/r/il/6d5846/3092388455/il_794xN.3092388455_hjw4.jpg" style="width:100%">
    </div>
  
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br>
  
  <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>

  <div id="bottomText">
  Lorem ipsum dolor sit amet, ei nam civibus albucius liberavisse, eu usu iuvaret splendide. Ut eam laudem gloriatur. <br> 
  Usu ex dicant eligendi. Et quo duis albucius sententiae, at his denique qualisque pertinacia. Duis eloquentiam ei sit, <br>
  mei ut dolorem menandri voluptaria, sonet epicuri dolores ius at.

Vero phaedrum eu vel, duo eu malis movet indoctum.<br>
 Nisl docendi ei sed, ex eos legendos ocurreret. Ne sit viris vidisse abhorreant.<br>
 Eros vidit id eum. Et nam iudico option, ei est feugait interesset, id omnis molestie nam. Ne efficiantur necessitatibus nec. <br>
 Cibo melius vituperatoribus nec ut, mei noluisse pertinax inimicus ex, vix te moderatius signiferumque.<br>
 Vel liber error oblique ad. Mandamus salutandi ius at, mea an elit utroque meliore, et docendi delicatissimi eum.<br>
 Malis eirmod viderer id sea.Ex per prima dictas constituto, et nisl tota laboramus mei. Pri cu mutat tation interpretaris, <br>
  ex novum bonorum eam, et mutat sapientem pri. Pri dolorem interesset complectitur ex. Vel cu diceret feugiat persequeris, <br>
  sit virtute eligendi officiis ei. Eu mel quis suscipiantur, nam pertinacia voluptatum concludaturque ad.<br>

Vel quodsi qualisque similique no. Nam ei vero animal consectetuer, cetero veritus convenire usu eu.<br>
 Nihil elaboraret mei id. Populo doming ut eum. Vim forensibus reformidans ne, quo et quando appetere euripidis. <br>
 Possit theophrastus no cum.

  </div>
`;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

// To dropdown menyer, en til selve menyen og en til login/profil med mulighet til å registrere deg.
//Link til shopping cart.
// Galleri.
//Filler tekst