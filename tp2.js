var editText1 = document.querySelector(".myText1");
var editText2 = document.querySelector(".myText2");
let bluebar = document.querySelector(".progressBar");
let anime = document.querySelector(".loader");
let anime2 = document.querySelector(".loader2");

/*------------- Copier dans 2 fenetre -------------*/ 
function miroir(){
    let resultat = editText1.value;
    editText2.innerHTML = resultat;
};
editText1.addEventListener("input", miroir);
console.log(editText1.length);

/*------------------ Compteur ----------------------*/
editText1.addEventListener("input", (e) =>{

    let number = editText2.innerText.length;     
    let progressBar = (number/2) + '%';
    bluebar.style.width = progressBar;
    /*------------- Bloqueur ----------------*/
    if(number > 200){
        alert("200 Caractères MAXIMUM !!! ");
        editText1.setAttribute("maxlength", "200");
    };

/*------------ Changement de Couleur pour le compteur ------------------*/
    if (number <= 100) {
         bluebar.style.backgroundColor = "lime";
    }
    else if(number <= 170){
        bluebar.style.backgroundColor = "orange";
    }
    else{
        bluebar.style.backgroundColor = "red";
    }
/*----------------- Animation Loader (Texte) -----------------------------------*/
    if (number > 0) {
        anime.setAttribute("class", "loader loader2");
    }
    else{
        anime.setAttribute("class", "loader ");
    }
});

/*--------------------- Dark Mode -------------------------*/

function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    
};

/*----------------- Les différents boutons -------------------*/
                /*----- Gras -----*/
function bold(){
   editText1.value += "<strong></strong>"; 
   console.log(editText1);
};
                /*----- Italique -----*/
function italic(){
    editText1.value += "<i></i>"; 
    console.log(editText1);
 };
                /*----- Souligné -----*/
 function soul(){
    editText1.value += "<u></u>"; 
    console.log(editText1);
 };
                /*----- A la ligne -----*/
 function br(){
    editText1.value += "<br>"; 
    console.log(editText1);
 };
                 /*----- Effacer -----*/
 function sup(){
    editText1.value = "";
    editText2.innerText = ""; 
    bluebar.style.width = "0";
    anime.setAttribute("class", "loader ");
    console.log(editText1);
 };
/*------------------- Animation souris ----------------------*/
editText1.addEventListener("mouseover", (e) =>{
      editText1.style.cursor = 'progress';
});
