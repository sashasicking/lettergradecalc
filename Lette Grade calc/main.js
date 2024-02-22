document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){


    let mathGrade = +document.getElementById("mathgrade").value;
    let scienceGrade = +document.getElementById("science").value;
    let socialGrade = +document.getElementById("socialgrade").value;
    let englishGrade = +document.getElementById("english").value;
    let csGrade = +document.getElementById("csgrade").value;
    
    
    
    let percentGrade = (mathGrade + scienceGrade + socialGrade + englishGrade + csGrade)/ 5;
    // console.log(percentGrade);
    function getLetterGrade(){
        
        if(percentGrade > 90){
           return "A";
        } else if(percentGrade > 75){
            return "B";
        } else if(percentGrade > 60){
            return "C";
        } else if(percentGrade > 50){
            return "D";
        } else {
            return"F";
        }
    }
    let mathLetter = getLetterGrade(percentGrade);

    //output

    document.getElementById("output").innerHTML = `${percentGrade} was your average you finished with a ${mathLetter}`;
    
    // console.log(`${percentGrade} is a ${mathLetter}`);
    
    }



