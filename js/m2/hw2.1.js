// const clients = ['Mango', 'Poly', 'Ajax', 'Orange', 'Kiwi', 'Melon', 'Banana'];

// const clientNameToFind = "Ajax";
// let message = 'Клиента с таким имененм нету в базе данных!';

// for (const client of clients){

//     if (client === clientNameToFind) {
//         message = 'Клиентa с таким именем есть в базе данных!';
//         break;
//        } 
// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 5;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log (`Число больше чем ${threshold}: ${numbers[i]}`);
// }

// let a= ['Kiwi'];
// let b = a;

// console.log (a);
// console.log (b);

// a.push('Poly');
// console.log(a);
// console.log(b);
// a.push ('Blueberry')
// console.log(a);
// console.log(b);

// const numbers = [51, 18, 13, 24, 7];
// let smallestNumber = numbers [0];
// // console.log(smallestNumber);

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = numbers;
//     }
// }
// console.log('smallesNumber:',smallestNumber);


// const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// // let string = '';
// // for (const friend of friends) {
// //     string += friend + ',';
// // }

// // string = string.slice(0, string.length-1);
// const string = friends.join (',');

// console.log(string);

const getItemsString = function(array) {
    let result = '';
    for (let i=0; i < array.length; i += 1){
    result += `${i + 1} - ${array[i]}\n`;
    };
    return result;
};
  
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
  