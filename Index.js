

const arrayDePrimos = [];
let contador =null;
 let primo = 2;

while( contador < 100)
{
    var c = 0;
   for(let i = 1; i <= primo ; i++){
     if(primo % i === 0)
        c++;
    } 
    if (c===2){
        contador++;
        arrayDePrimos.push(primo);
    }
    primo++;
}

console.log(`${arrayDePrimos}`);
