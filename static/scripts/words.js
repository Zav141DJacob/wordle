export { getWords, getWord }

async function getWords(path)
{
    let response = await fetch(path)
    let text = await response.text()
    let textSplit = text.split("\n")
    // console.log(textSplit)
    return textSplit
}

function getWord(arr) {
    let random = Math.floor(Math.random() * arr.length)
    // console.log(random)
    return arr[random]
}
