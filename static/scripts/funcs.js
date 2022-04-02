export { addLetter, checkWordLen, checkGuess, removeLetter, setWord }
import { getWords } from "./words.js"

let word

function setWord(w) 
{
    word = w
}

function addLetter(s)
{
    if (s == "Enter") {
        enterButton()
    }
    if (s.length != 1) {
        return
    }
    
    let to = document.querySelector(".waiting")
    let boxes = to.querySelectorAll(".letterBox")
    for (let i = 0; i < boxes.length; ++i) 
    {
        if (!boxes[i].innerHTML)
        {
            boxes[i].innerHTML = s
            break
        }
    }
}

function removeLetter()
{
    let to = document.querySelector(".waiting")
    let boxes = to.querySelectorAll(".letterBox")
    for (let i = boxes.length-1; i >= 0; --i) 
    {
        if (boxes[i].innerHTML)
        {
            boxes[i].innerHTML = ""
            break
        }
    }
}
function checkWordLen()
{
    let to = document.querySelector(".waiting")
    let boxes = to.querySelectorAll(".letterBox")
    let len = 0

    boxes.forEach((e) =>
    {
        if (e.innerHTML)
        {
            console.log("+1")
            len++
        }
    })
    if (len == 5) 
    {
        return true
    }
    return false
}

function checkGuess() 
{
    let to = document.querySelector(".waiting")
    let boxes = to.querySelectorAll(".letterBox")
    let guess = ""
    let len = 0

    console.log(word)
    boxes.forEach((e) =>
    {
        guess += e.innerHTML
    })
    if (guess == word)
    {
        console.log("foundWord!!")
    }
    // console.log(guess)
    // console.log("here")
    let words = getWords("./static/data/allowedGuess.txt")
    // console.log(words.length)
    words.then((e) =>
    {
        e.forEach((e2) => 
        {
            if (guess == e2) {
                boxes.forEach((e, i) =>
                {
                    console.log(i)

                    e.setAttribute("style", "background-color: rgb(102,204,0); color: whitesmoke;")
                })
                to.classList.remove("waiting")
                console.log("isword")
            }
            else
            {
                len++
            }
            // console.log(e2)
        })
        if (len == e.length) {
            // popup("Not a word")
            console.log("notword")
        }
    })
    
    return false
}

function enterButton()
{
    jump()
    // checkGuess()
    // checkGuess().then((e) =>
    // {
    //     console.log(e)
    // })
    if (checkWordLen()) 
    {
        console.log("Enter")
        let check = checkGuess()
        // console.log(check)
        // if (check) 
        // { 
        //     console.log(check)
        //     console.log("checkGuess") 
        // }
    }
    else
    {
        console.log("tooshort")
        // popup("Not enough letters")
    }
    
}

function jump ()
{
    let box = document.querySelector(".waiting")
    let pos = -1
    let mult = -1
    let intervalId = setInterval(() =>
    {
        box.style.top = pos + "%"
        pos += mult
        if (pos == -2) 
        {
            mult *= -1
        }
        if (pos == 1) 
        {
            clearInterval(intervalId)
        }
    }, 50) 
    // console.log(box.querySelectorAll(".letterBox"))
}

function popup(str)
{

}

function submitForm()
{

}