// code your solution here
function saturdayFun(activity = 'roller-skate') {
 return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`
}
mondayWork('clean the yard')

function wrapAdjective(wrap = '*') {
    return function wrapInner(quality = 'special') {
        return `You are ${wrap}${quality}${wrap}!`
    } 
}
wrapAdjective('||')('gorgeous')