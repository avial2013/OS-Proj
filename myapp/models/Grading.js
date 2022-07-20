export const Context = React.createContext();
// 
// export default class Grading {

    // constructor(category,level) {
    //     this.category = category
    //     this.level = level;
    // }
    

    // export default function CalcPoints(cat,level){
    //     let sum = 0;
    //     switch(cat) {
    //         case "A": {
    //             sum = 2;
    //             switch(level){
    //                 case 1:
    //                     sum += 7;
    //                     break;
    //                 case 2:
    //                     sum += 9;
    //                     break;
    //                 case 3:
    //                     sum += 11;
    //                     break;
    //                 case 4:
    //                     sum += 13;
    //                     break;
    //                 case 5:
    //                     sum += 15;
    //                     break;
    //             }
    //             break;
    //         }
    
    //         case "B": {
    //             sum = 1;
    //             switch(level){
    //                 case 1:
    //                     sum += 4;
    //                     break;
    //                 case 2:
    //                     sum += 6;
    //                     break;
    //                 case 3:
    //                     sum += 8;
    //                     break;
    //                 case 4:
    //                     sum += 10;
    //                     break;
    //                 case 5:
    //                     sum += 12;
    //                     break;
    //             }
    //             break;
    //         }
    //         case "C": {
    //             sum = 0;
    //             switch(level){
    //                 case 1:
    //                     sum += 2;
    //                     break;
    //                 case 2:
    //                     sum += 4;
    //                     break;
    //                 case 3:
    //                     sum += 6;
    //                     break;
    //                 case 4:
    //                     sum += 8;
    //                     break;
    //                 case 5:
    //                     sum += 10;
    //                     break;
    //             }
    //             break;
    //         }
    //     }
    //     return sum;
    // }
    
    // // sum all the points of all questions
    // export default function SumGrade(q){
    //     let points = 0;
    //     for(let i = 0; i < q.length; i++){
    //         if(q[i].IsTrue){
    //             points += CalcPoints(q[i].Category, q[i].Level);
    //         }
    //     }
    //     return points;
    // }
    
    // // 
    // export default function CheckFinalGrade(points){
    //     if(points < 0)
    //         return "Invalid amount of points";
    //     if(points >= 0 && points <= 17)
    //         return "A";
    //     if(points > 17 && points <= 25)
    //         return "B";
    //     if(points > 25 && points <= 34)
    //         return "C";
    //     return "D";
    // }


// }