let sommaDispari = 0;      
let contatoreDispari = 0;  

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {

        console.log(i);

    } else {
        
        sommaDispari = sommaDispari + i;

        contatoreDispari++;
    }
}

console.log(`sommaDispari = ${sommaDispari}`);

console.log(`contatoreDispari = ${contatoreDispari}`);

console.log(`media = ${sommaDispari / contatoreDispari}`);