const textDisplay = document.getElementById('text');
const phrases = [ "Welcome to EducationWebsite   " , "Learn Python   ","Data Science   " ,"Machine Learning   ","Web Development   ","App Development   ","and other awesome programming concepts with me :)   "];
let i =0;
let j=0;
let currentPhrase = [];
let isDeleting = false;

function loop(){

    textDisplay.innerHTML = currentPhrase.join('') ;

    if( i < 8 ){

        if( !isDeleting && j <= phrases[i].length ){
            currentPhrase.push( phrases[i][j] );
            j++;

        }
        if(isDeleting && j <= phrases[i].length){
            currentPhrase.pop(phrases[i][j] );
            j--;
        }

        if( j == phrases[i].length ){
            isDeleting = true; 
        }
        if( isDeleting && j === 0){
            currentPhrase = [];
            isDeleting = false;
            i++;

        }
        
        if( i == 7 ){
            i = 0 ;
        }
    }
    setTimeout(loop , 80);
}
loop();