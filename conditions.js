// le triple egale === il compare la valeur et le type de la valeur 
// il est recommende d'utiliser tjrs le ===


const age = 25;
const bank = 50;

if(age >= 25 && bank >= 51)
    console.log("you have access")
else 
    console.log("you don't have accees")

if(age >= 25 || bank >= 51)
    console.log("you have access")
else 
    console.log("you don't have accees")

console.log("hey")  

// truthy and falsy

const Var = 24;

if(Var)
    console.log("c'est une valeur Vraie")
else 
    console.log("une valeur Fausse") // false, 0, "",null, undefined, NaN


