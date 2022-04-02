export { grid }

function grid ()
{
    let gridDiv = document.createElement("div")
    gridDiv.classList.add("grid")
    let title = document.createElement("div")
    title.classList.add("title", "text")
    title.innerHTML = "Wordle"
    gridDiv.append(title)
    for (let i = 0; i < 6; ++i) {
        let boxDiv = document.createElement("div")
        boxDiv.classList.add("boxDiv", "waiting")
        boxDiv.id = "boxDiv" + (i + 1)
        for (let j = 0; j < 5; ++j) {
            let letterBoxDiv = document.createElement("div")
            letterBoxDiv.classList.add("letterBox")
            letterBoxDiv.id = "letterBox" + (i + 1) + "-" + (j + 1)
            boxDiv.append(letterBoxDiv)
        }
        gridDiv.append(boxDiv)
    }
    
    document.body.append(gridDiv)
}