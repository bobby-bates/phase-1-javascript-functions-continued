// Function declaration:
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

// Function expression:
const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

// Using scope chain:
function wrapAdjective(flair = '*'){
    return function(adj = 'special'){
        return `You are ${flair}${adj}${flair}!`
    }
}