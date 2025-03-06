
function nameForAge(age) {
    addTextToPage('Starting name for age with value ' + age)
    if (age <= 0) return 'not born yet'
    addTextToPage('We can\'t wait for them to walk and talk!')
    if (age <= 2) return 'baby'
    addTextToPage('Oh, if only they would sit down and be quiet?!')
    if (age < 13) return 'child'
    addTextToPage('Oh... a teenager')
    if (age < 20) return 'teenager'
    addTextToPage('Getting out in the world...')
    if (age < 30) return 'twenty something'
    addTextToPage('With experience comes wisdom... sometimes')
    if (age < 40) return 'thirty something'
    if (age < 110) return 'almost grown up'
    return "well done! You old."
}

addTextToPage('Age-name-o-matic!')
addInputToPage('Age', 7)
addButtonToPage('Get name for age', () => {
    const age = getInputAsNumber('Age')
    const ageName = nameForAge(age)
    addTextToPage('Name for age ' + age + ' is ' + ageName)
})
