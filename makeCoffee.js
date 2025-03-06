function makeCoffee(cleanPot, enoughCoffee) {
    if(cleanPot === false) {
        addTextToPage("clean a pot")
    }
    addTextToPage('load water')
    if (enoughCoffee === false) {
        addTextToPage('open a new bag of coffee')
    }
    addTextToPage('load coffee')
    addTextToPage('put mocha pot on burner')
    addTextToPage('wait... 12 minutes')
    addTextToPage('I have coffee!')
}

addTextToPage("Tony's coffee routine")
addInputToPage("Is there a clean pot?", "true")
addInputToPage("Is there enough coffee in the current bag?", "true")

function onClick() {
    const cleanPot = getInputAsBoolean("Is there a clean pot?")
    const enoughCoffee = getInputAsBoolean("Is there enough coffee in the current bag?")
    makeCoffee(cleanPot, enoughCoffee)
}

addButtonToPage("Make Coffee", onClick)