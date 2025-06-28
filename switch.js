// //switch statement
// if(num ===2){
//     //logic
// }else if(num ===3){
//     //logic
// } else if (num === 4){

// }



// i give a num for a month, log the month name 

function giveMonth(num){
    switch(num){
        case 1: {
            return  "January"
        }
        case 2:{
            return "Febuary"
        }
        case 3: return "March"
        case 4: return "April"
        case 5: return "May"
    }
}

console.log(giveMonth(3))