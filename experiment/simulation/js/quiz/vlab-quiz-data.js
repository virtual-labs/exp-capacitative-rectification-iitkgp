/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "A half wave rectifier circuit produces a peak rectified voltage output V<sub>RM</sub> = 9V. The AC signal frequency f = 50Hz. The load Resistance = 12 k?. If the ripple voltage V<sub>r</sub> is to be limited to 0.2V,  then the filter capacitor C is ",
            "a": [
                {"option": "25&#956;F ", "correct": false},
                {"option": "50&#956;F", "correct": false},
                {"option": " 75&#956;F", "correct": true},
                {"option": " 100&#956;F", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A full wave rectifier circuit produces a peak rectified voltage output V<sub>RP</sub> = 10V. The AC signal frequency is 50Hz. The load resistance is 10 k?. If the ripple voltage is to be limited to V<sub>r</sub> = 0.1V then the filter capacitor C is ",
            "a": [
                {"option": "10&#956;F ", "correct":false},
                {"option": " 20&#956;F", "correct": false},
                {"option": "50 &#956;F", "correct": false},
                {"option": " 100&#956;F", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
        
    
    ]
};

