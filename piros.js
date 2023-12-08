let randX
let randY

function start(){
    document.getElementById("racs").innerHTML=''
    let meret = document.getElementById("meret").value
    if(meret<2 || meret>10) return
    console.log(meret);
    rajzol(meret)
    randX=randNr(meret)
    randY=randNr(meret)
    console.log(randX, randY);
}

function rajzol(nr){
    for(let i = 1; i <=nr; i++){
        let sor = document.createElement("div")
        sor.classList.add("row")
        sor.classList.add("justify-content-center")
        document.getElementById("racs").appendChild(sor)
        for(let j = 1; j <=nr; j++){
            let cell = document.createElement("div")
            cell.setAttribute("class", "border bg-secondary box")
            cell.dataset.y = j
            cell.dataset.x = i
            sor.appendChild(cell)
        }
    }
}

function pozicio(event){
    if(!event.target.classList.contains("box")) return
    //console.log(event.target);
    let x = event.target.dataset.x
    let y = event.target.dataset.y
    console.log(x,y);
    if(randX == x && randY == y){
        event.target.style.backgroundColor = "red"
    } else {
        event.target.style.backgroundColor = "black"
    }
}

function randNr(n){
    return Math.floor(Math.random() * n)+1
}

function newGame(){
    document.querySelector(".box").value = ""

}