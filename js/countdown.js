    // Set the date we're counting down to
    var countDownDate = new Date("2024-10-28 00:00:00").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in the elements with id="hari", "jam", "menit", "detik"
        document.getElementById("hari").innerHTML = days;
        document.getElementById("jam").innerHTML = hours;
        document.getElementById("menit").innerHTML = minutes;
        document.getElementById("detik").innerHTML = seconds;
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("tampilan-waktu").innerHTML = "The event has started!";
        }
    }, 1000);

