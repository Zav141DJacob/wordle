export { keyboard }
import { addLetter, checkGuess, removeLetter, checkWordLen } from "./funcs.js"
function keyboard ()
{
    let grid = document.querySelector(".grid")
    
    let keyArr = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["z", "x", "c", "v", "b", "n", "m"]
    ]

    let keyboardDiv = document.createElement("div")
    keyboardDiv.classList.add("engKeyboard")

    //adds the keyboard to the page
    for (let i = 0; i < keyArr.length; ++i) 
    {
        let keyDiv = document.createElement("div")
        keyDiv.classList.add(("engKey" + (i + 1) + "Div"))
        keyDiv.id = "engKey" + (i + 1)

        for (let j of keyArr[i]) {
            let keyButton = document.createElement("button")
            keyButton.classList.add("letterButton")
            keyButton.innerHTML = j.toUpperCase()
            keyButton.id = j

            //change this function
            keyButton.addEventListener("click", () => 
            {
                printI(j)
                addLetter(j)
            })

            keyDiv.appendChild(keyButton)
        }

        //inserts backspace and enter button to the keyboard
        if (i == keyArr.length - 1)
        {
            // the enter button
            let enterButton = document.createElement("button")
            enterButton.classList.add("letterButton")
            enterButton.innerHTML = "Enter"
            enterButton.addEventListener("click", () => 
            {
                addLetter("Enter")
                
                
            })
            enterButton.id = "enter"

            // the backspace button
            let backspaceButton = document.createElement("button")
            backspaceButton.classList.add("letterButton")
            backspaceButton.innerHTML = "<="
            backspaceButton.addEventListener("click", () => 
            {
                console.log("backspace")
                removeLetter()
            })
            backspaceButton.id = "backspace"
            
            keyDiv.prepend(enterButton)
            keyDiv.append(backspaceButton)
        }
        
        keyboardDiv.append(keyDiv)
    }

    grid.append(keyboardDiv)
}

function printI (i) 
{
    console.log(i)
}

