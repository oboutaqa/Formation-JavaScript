function greet(name){
    
    console.log("Bienvenue sur notre site " +name);
}

console.log("Hello")

function signUp(){
    let name = prompt("Quel est votre nom");
    greet(name);
}

signUp();

function max(nb1, nb2){

    max = nb1;
    if(nb2 > max){
        max = nb2;
    }
    
    return max
}
console.log(max(9,6));