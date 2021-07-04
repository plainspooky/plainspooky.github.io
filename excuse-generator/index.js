const excuses = {
    intro: [
        "Sorry I can't come",
        "Please forgive my absence",
        "This is going to sound crazy but",
        "Get this:",
        "I can't go because",
        "I know you're going to hate me but",
        "I was minding my own business and boom!",
        "I feel terrible but",
        "I regretfully cannot attend",
        "This is going to sound like an excuse but"
    ],
    scapegoat: [
        "my nephew",
        "the ghost of Hitler",
        "the Pope",
        "my ex",
        "a high school marching band",
        "Dan Rather",
        "a sad clown",
        "the kid from Air Bud",
        "a professional cricket team",
        "my Tinder date",
    ],
    delay: [
        "just shit the bed",
        "died in front of me",
        "won't stop telling me knock knock jokes",
        "is having a nervous breakdown",
        "gave me syphilis",
        "pourerd lemonade in my gas tank",
        "stabbed me",
        "found my box of human teeth",
        "stole my bicycle",
        "posted my nudes on Instagram",
    ]
}

const excuseElementName = "excuseBox"
const scapegoatElementName = "scapegoatBox"
const delayElementName = "delayBox"

const excuseElement = document.getElementById(excuseElementName)
const scapegoatElement = document.getElementById(scapegoatElementName)
const delayElement = document.getElementById(delayElementName)


chooseOne = (itemList) => {
    let max = itemList.length
	let index = Math.floor(Math.random() * max)

    return itemList[index]
}

generateExcuse = () => {

    excuseElement.textContent = chooseOne(excuses.intro)
    scapegoatElement.textContent = chooseOne(excuses.scapegoat)
    delayElement.textContent = chooseOne(excuses.delay)
}

generateExcuse()
