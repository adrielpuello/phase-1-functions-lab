function distanceFromHqInBlocks(blocks){
    let hq = 42
    let distanceInBlocks = (Math.abs(hq - blocks))
    return distanceInBlocks
}
function distanceFromHqInFeet(blocks){
    let hq = 42
    let feet = blocks * 264
    let distanceInFeet = (Math.abs((hq*264)-(feet)))
    return distanceInFeet
}                                                                                               
function distanceTravelledInFeet(val1, val2){
    let distanceTravelled = ((Math.abs(val1 - val2)*264))
    return distanceTravelled
}
function calculatesFarePrice(val1, val2){
    let feet = Math.abs((val1*264)-(val2 *264))
    if (feet < 400){
        let moneyCharged = 0
        return moneyCharged
    } else if (feet < 2000 && feet > 400){
        let moneyCharged = ((Math.abs((val1 * 264)-(val2 * 264))-400)*.02)
        return moneyCharged
    } else if (feet > 2000 && feet <2500){
        let moneyCharged = 25
        return moneyCharged
    } else if (feet > 2500){
        return 'cannot travel that far'
    }
}