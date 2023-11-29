

function check(){
    let player1 = myName.value
    let player2 = myLover.value
    let randomNumber = Math.random()*100
    let lovers = {player1, player2}
    let result = `${Math.round(randomNumber)}%`
    console.log(result)
    if(player1 == "" && player2 == ""){
        Show.innerHTML = `please fill in the names`
        disp.innerHTML = ""
        setTimeout(()=> {
            Show.innerHTML =``
        }, 4000)
    } else if (randomNumber >= 0 && randomNumber <= 30) {
            myLover.value =""
            myName.value = ""
            disp.innerHTML = `<p class=" text-danger"> the percent of you and ${player2} getting together is ${result}</p> <br> <p class=" text-danger"> My friendly advice to you ${player1} is to japa from that person </p>`
    } else if (randomNumber >=31 && randomNumber <= 60) {
        myLover.value =""
        myName.value = ""
        disp.innerHTML = `<p class=" text-warning"> the percent of you and ${player2} getting together is  ${result}</p> <br> <p class=" text-warning"> My friendly advice to you ${player1} is that you should be patience and let your heart leads</p>`
    } else if (randomNumber >= 61 && randomNumber <= 80) {
        myLover.value =""
        myName.value = ""
        disp.innerHTML = `<p class=" text-success"> the percent of you and ${player2} getting together is  ${result}</p> <br> <p class=" text-success"> the chance of you and ${player2} getting together is very possible, you can go for ${player2} </p>`
    } else if (randomNumber >= 81 && randomNumber <= 100) {
        myLover.value =""
        myName.value = ""
        disp.innerHTML = `<p class=" text-info"> the percent of you and ${player2} getting together is  ${result}</p> <br> <p class=" text-info"> Actually, you and ${player2} are very compatible with each other </p>`
    }
}