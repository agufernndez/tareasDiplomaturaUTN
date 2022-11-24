const main = document.getElementById("main")
const divPeachPuff = document.getElementById("divPeachPuff");

const divViolet = document.getElementById("divViolet")

const divAquamarine = document.getElementById ("divAquamarine");

divPeachPuff.onclick = () => {
    console.log("fondo color 1");
    main.style.background = '#FAE5D3';
}

divViolet.onclick = () => {
    main.style.background = '#C39BD3'
}

divAquamarine.onclick = () => {
    main.style.background = "#76D7C4"
}