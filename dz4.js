// Find a Chair
// So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... 
//check all the other meeting rooms to see if all of the chairs are in use.
// Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.
// Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. 
//The room array will also have an integer telling you how many chairs there are in the room.
// You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.
// example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:
// result -- > [0, 1, 3] (no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.
// If you need no chairs, return 'Game On'. If there aren't enough spare chairs available, return 'Not enough!'
// Examples:
// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'

// ---------------------------------------------------------------------------------------------------
// let avail = [];
// let need = 6;
// let rezult = [];

// let chairs = [['XXX', 3], 
//              ['XXXXX', 6],
//              ['XXXXXX', 9], 
//              ['XXXXXX', 8]];
// //meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXXXXX', 8], 4);

// console.log(chairs [1][0]);

// // Создаём массив доступных стульев  k-комната
// for (k = 0; k < chairs.length; k++){
//     if ((chairs [k][1]- chairs[k][0].length)>=0){
//     avail[k] = (chairs [k][1] - chairs [k][0].length);
//     }
// }

// console.log(avail);

// if (need == 0){
//     alert('Game On');
// } else{
// for (i = 0; i < avail.length; i++){

//     if (need >= avail[i]){
//         rezult[i] = avail[i];
        
//     }
//     if (need < avail[i]){
//         rezult[i] = need;
//     }
//     need = need - avail[i];
// }

// if (need > 0) {
//     alert('Not enough!');
// } else {
// alert (rezult);   
// }
// }




// Task 2:
// Tic-Tac-Toe Checker
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check 
//that for us!
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]

// We want our function to return:
// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


// let arr = [[1, 0, 1],
//            [0, 1, 2],
//            [2, 1, 1]];



// for (i=0; i<3; i++){
//     if ((arr[i][0] == arr[i][1])&&(arr[i][0]== arr[i][2])&&(arr[i][0]== arr[i][2]) && ((arr[i][0] + arr[i][1] + arr[i][2])==6)) {
//        alert( 'O won');
//        break;
//     } else if ((arr[i][0] == arr[i][1])&&(arr[i][0]== arr[i][2])&&(arr[i][0]== arr[i][2])  && ((arr[i][0] + arr[i][1] + arr[i][2]) == 3)) {
//         alert( 'X won');
//         break;
//      } else { 
//      alert( 'not finished or cat game');
//     }
// }

// for (j=0; j<3; j++){
//     if ((arr[0][j] == arr[1][j]) && (arr[0][j]== arr[2][j]) && (arr[0][j]== arr[2][j]) && ((arr[0][j] + arr[1][j] + arr[2][j])==6)) {
//         alert( 'O won');
//         break;
//      } else if ((arr[0][j] == arr[1][j]) && (arr[0][j]== arr[2][j]) && (arr[0][j]== arr[2][j])  && ((arr[0][j] + arr[1][j] + arr[2][j]) == 3)) {
//          alert( 'X won');
//          break;
//       } else { 
//       alert( 'not finished or cat game');
//      }
// }


// if ((arr[0][0] == arr[1][1] == arr [2][2])  && (arr[0][0] + arr[1][1] + arr[2][2])==6) {
//      alert('0 won');
//     } else if ((arr[0][0] == arr[1][1] == arr [2][2])  && (arr[0][0] + arr[1][1] + arr[2][2])==3) {
//     alert('X won');
//     } else if ((arr[0][2] == arr[1][1] == arr [2][0]) && (arr[0][2] + arr[1][1] + arr [2][0] == 6)) {
//     alert('0 won');
//     } else if ((arr[0][2] == arr[1][1] == arr [2][0]) && (arr[0][2] + arr[1][1] + arr [2][0] == 3)) {
//     alert('X won');   
//     } else {
//     alert ( 'not finished or cat game');
//     }




//Task 3


// pop

// let arr = [1,2,3,4,5,6,7,8,9];
// let i = arr.length;

// result = arr[i];
// arr.length = i-1;

// alert(arr);

//push
//   let arr = [1,2,3,4,5,6,7,8,9];
//   let i = arr.length;
//   arr.length = i + 1;
//   arr[i] = 10;
//   console.log(arr);
//   alert(arr.length);

  //shift

//   let arr = [1,2,3,4,5,6,7,8,9];
//   alert(arr[0]);

//     for (i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     arr[i] = num + 1;
//    }

//   let al= arr.length;
  
//   arr.length = al-1;
    
//    alert(arr);


//unshift 
//array.unshift( element1, element2, element3)

// let element1 = 22;
// let element2 = 33;
// let element3 = 55;

// let arr = [1,2,3,4,5,6,7,8,9];

// let al = arr.length;

// arr.length = al + 3;

//  for (i = arr.length; i >=0 ; i--) {
//           let num = arr[i];
//           arr[i] = num - 3;
//          }

// arr [0] = element1;
// arr [1] = element2;
// arr [2] = element3;

// alert(arr);

let arrayb = [];
let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = ['a','b','c','d','e'];
arrayb.length = arr.length + arr2.length;

for (i = 0; i < arr.length; i++) {
   arrayb[i] = arr[i];
}

for (j = 0; j < arr2.length; j++) {
     arrayb[j + arr.length] = arr2[j];
    }

console.log(arrayb);