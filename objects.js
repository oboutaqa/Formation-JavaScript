const user = {
    name : 'leo',
    age : 24,
    married : false,
    greet: function(){
        console.log("Hello word")
    }
}

let var1 = user.name;
console.log(var1); // console est un objet cree par javascript, et log fonction 
user.greet();