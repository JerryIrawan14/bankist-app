'use strict';
let arr = ['a','b','c','d','e'];

// slice method = (MOV/NOT CHANGE THE ORIGINAL ARRAY)
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log([...arr]);

// splice method = (COPY/MUTATE THE ORIGINAL ARRAY)
console.log(arr.splice(-1));
arr.splice(1,2)
console.log(arr);

// reverse method = (REVERSE AN ORDER OF ARRAY)
arr = ['a','b','c','d','e'];
const arr2 = ['f','g','h','i','j']
console.log(arr2.reverse());
console.log(arr2);

// concate method = join two array
const letters = arr.concat(arr2)
console.log(letters);
console.log([...arr, ...arr2]);

// joint method = change it to string
console.log(letters.join(' '));

// the new method
const arr3 = [23,11,54]
console.log(arr3[0]);
console.log(arr3.at(0));

console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1));
console.log(arr3.at(-1));

console.log(['jonas'.at(0)]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements){
  containerMovements.innerHTML = '';


  movements.forEach(function(mov,i){
    const type = mov > 0 ? `deposit` : `withdrawal`

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">
    ${i+1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin',html);

  });
};
displayMovements(account1.movements)


const calcFinalBalance = function(movement){
  const balance = movement.reduce((acc, mov) => acc + mov,0);
  labelBalance.textContent = `$ ${balance} USD`
};
calcFinalBalance(account1.movements);


console.log(containerMovements.innerHTML);

// const createUsername = function(accs){
//   accs.forEach(function(acc){
//     acc.username = acc.owner.toLowerCase().split(' ').map(name => name(0)).join('')
    
//   })
// }

// createUsername(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const checkDogs = function(dogJulia,dogKate){
  const dogJuliaCorrected = dogJulia.slice();
  dogJuliaCorrected.splice(0,-1)
  dogJuliaCorrected.splice(-2);

  const dogs = dogJuliaCorrected.concat(dogKate)
  console.log(dogs);

  dogs.forEach(function(dog,i){
    if(dog >= 3){
      console.log(`dog number ${i+1} is an adult and it ${dog} years old`);
    }else {
      console.log(`dog number ${i+1} is still a puppy`);
    }
  })
}


checkDogs([3,5,2,12,7],[14,1,15,8,3])

///////////////////////////////////////////////////

const IDRTOusd = 1.1;

const movementUSDArrow = movements.map(mov => mov * IDRTOusd);
console.log(movementUSDArrow);

console.log(movements);
console.log(movementUSDArrow);

const movementsUSDfor = [];
for(const mov of movements)movementsUSDfor.push(mov * IDRTOusd)
console.log(movementsUSDfor);


// Filter Method = return element with some condition

const deposit = movements.filter(function(mov){
  return mov >0;
})

console.log(movements);
console.log(deposit);


const depositFor = []
for(const mov of movements) if(mov>0) depositFor.push(mov);

console.log(depositFor);

const withdrawal = movements.filter(mov => mov <0)
console.log(withdrawal);

const withdrawalFor = [];
for(const mov of movements) if(mov<0) withdrawalFor.push(mov);
console.log(withdrawalFor);


// Reduce Method = Boil down/ sums all the element into one array

console.log(movements);

// accumulator = snowball effect
// const Balance = movements.reduce(function(acc,curr,i,arr){

//     console.log(`iteration ${i}:${acc}`);
//     return acc + curr
// },0)

const balance = movements.reduce((acc,cur) => acc+cur,0)
console.log(balance);

let balanceFor = 0;

for(const mov of movements) balanceFor += mov;
console.log(balanceFor);

// maximum value 
const max= movements.reduce((acc,mov)=> {
  if(acc > mov){
    return acc;
  }else 
    return mov; 
},200)
console.log(max);
