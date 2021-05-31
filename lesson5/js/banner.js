//determine what day of the week it is
//console.log(now.getDay());

//if it is friday then turn the display property to block

if (now.getDay() == 5) {
    //console.log("hurrah 🥞")
    //document.querySelector('#bannerPan').style.display = 'block';
    document.querySelector('.bannerPan').style.display = 'block';

    //This one didn't work...
    //document.getElementsByClassName("bannerPan").style.display = 'block';
}