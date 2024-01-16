function showConfirmationDialog() {
        var userConfirmation = confirm("Welcome! This Page does not contain JS at the moment because the developer is bullshit");

        if (!userConfirmation) {
            // User clicked "Cancel"
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.cancel').style.display = 'block';
        }
    }

    function unmuteBackgroundMusic() {

        var backgroundVideo = document.querySelector('.cancel video');
        backgroundVideo.muted = false;
        backgroundVideo.play();

        // Hide the play button
        document.getElementById("playButton").style.display = 'none';
    }

    window.onload = function () {
        showConfirmationDialog();
        // Assign the unmuteBackgroundMusic function to the button click
        document.getElementById("playButton").addEventListener("click", unmuteBackgroundMusic);
    };