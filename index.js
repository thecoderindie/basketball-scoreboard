let homeScore = document.getElementById('home--score')
let guestScore = document.getElementById('guest--score')
let homeScr = 0;
let guestScr = 0;
// Home Buttons
    let hBtn1 = document.getElementById('home--btn1')
    let hBtn2 = document.getElementById('home--btn2')
    let hBtn3 = document.getElementById('home--btn3')
// Home button eventlistener
    hBtn1.addEventListener("click", homeAdd1)
    hBtn2.addEventListener("click", homeAdd2)
    hBtn3.addEventListener("click", homeAdd3)
//Home button functions
    function homeAdd1(){
        homeScr = homeScr + 1;
        homeScore.textContent = homeScr
    }
    function homeAdd2(){
        homeScr = homeScr + 2;
        homeScore.textContent = homeScr
    }
    function homeAdd3(){
        homeScr = homeScr + 3;
        homeScore.textContent = homeScr
    }
// Guest Buttons
    let guestBtn1 = document.getElementById('guest--btn1')
    let guestBtn2 = document.getElementById('guest--btn2')
    let guestBtn3 = document.getElementById('guest--btn3')
// Guest button eventlistener
    guestBtn1.addEventListener("click", guestAdd1)
    guestBtn2.addEventListener("click", guestAdd2)
    guestBtn3.addEventListener("click", guestAdd3)
// Guest button functions
    function guestAdd1(){
        guestScr = guestScr + 1;
        guestScore.textContent = guestScr
    }
    function guestAdd2(){
        guestScr = guestScr + 2;
        guestScore.textContent = guestScr
    }
    function guestAdd3(){
        guestScr = guestScr + 3;
        guestScore.textContent = guestScr
    }
// Reset Button
    let resetBtn = document.getElementById('reset--btn')
// Rest button eventlistener
    resetBtn.addEventListener("click", resetScore)
// Reset Function
    function resetScore(){
        homeScr = 0
        guestScr = 0
        homeScore.textContent = 0
        guestScore.textContent = 0
    }