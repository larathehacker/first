//console.log("hei pål")



//1. input hent settningen fra første boble 
const inputBoble = document.getElementById("input-settning");
const knapp = document.getElementById("knapp");
const presenter=document.getElementById("presenter");
const alfabetetFramlengs = "abcdefghijklmnopqrstuvwxyzæøå".split("");
const alfabetetbaklengs = "åøæzyxwvutsrqponmlkjihgfedcba".split("");



knapp.onclick = () => {
    presenter.value=byttom(inputBoble.value);
    console.log(byttom(inputBoble.value))
}






//2. Del opp settningen til bokstaver 





//3. bytt om på bokstavene 
function byttom(bokstav) {
    const posisjonIalfabetetFramlengs = alfabetetFramlengs.findIndex(b => b == bokstav);
    return alfabetetbaklengs[posisjonIalfabetetFramlengs];

}
//4. sett sammen bokstavene 

//5. presenter settningen 