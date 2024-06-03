// Set the date we're counting down to
var countDownDate = new Date("2024-08-25 00:00:00").getTime();

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
    
    // If the count down is over, write some text and trigger celebration
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("tampilan-waktu").classList.add('hidden');
        document.getElementById("celebration").classList.remove('hidden');
        launchConfetti();
        launchHearts();
    }
}, 1000);

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#f2d74e', '#95c3de', '#ff9a91'];
    
    for (let i = 0; i < 50; i++) {  // Increase the number of confetti pieces
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.backgroundColor = colors[i % colors.length];
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDelay = Math.random() * 5 + 's';  // Randomize animation delay for variety
        confettiContainer.appendChild(confettiPiece);
    }

    setTimeout(() => {
        confettiContainer.innerHTML = ''; // Clear confetti after 10 seconds
    }, 10000);
}

function launchHearts() {
    const heartsContainer = document.getElementById('hearts');

    for (let i = 0; i < 50; i++) {  // Add 50 hearts
        const heart = document.createElement('span');
        heart.classList.add('fa', 'fa-heart', 'heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';  // Randomize animation delay for variety
        heartsContainer.appendChild(heart);
    }

    setTimeout(() => {
        heartsContainer.innerHTML = ''; // Clear hearts after 10 seconds
    }, 10000);
}
