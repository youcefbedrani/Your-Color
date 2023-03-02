const container = document.querySelector(".container");
const refrech = document.querySelector(".refrech-btn");
const maxpaleteboxes = 32;

const generatepalate = () =>{
    container.innerHTML = "";
    for(let i=0; i<maxpaleteboxes ; i++ ){
        // Selecting Random color
        let radnom = Math.floor(Math.random() * 0xffffff).toString(16);
        radnom = `#${radnom.padStart(6,"0")}`;
        console.log(radnom);
        //Typing Random color in HTMl page 
        const color = document.createElement("li");
        color.classList.add("Color");
        color.innerHTML = `<div class="rect-box" style="background: ${radnom};"></div>
        <span class="hex-value">${radnom}</span>`;
        container.appendChild(color);
        // Coping The hex Color form the random value 
        color.addEventListener("click" , () => copycolor(color , radnom));
    }
}
// maek the page show the random color when reload
generatepalate();
//Function make the text copied in hex-value text
const copycolor = (elem , hexval) =>{
    const colorelement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexval).then(() => {
        colorelement.innerText = "Copied";
        setTimeout(() => colorelement.innerText = hexval ,1000 )
    })
}
refrech.addEventListener("click", generatepalate);