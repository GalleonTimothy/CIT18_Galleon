function showDiv(divName, currentLink) {

            var links = document.querySelectorAll('ul li a');
            for (var i = 0; i < links.length; i++) {
                links[i].classList.remove('active');
            }

   
            currentLink.classList.add('active');

        
            var divsToHide = document.querySelectorAll('.education, .skills, .experience, .contact');
            for (var i = 0; i < divsToHide.length; i++) {
                divsToHide[i].style.display = "none";
            }

          
            document.querySelector('.' + divName).style.display = "flex";
        }

        window.addEventListener('resize', function() {
            // Check the current screen width
            var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            // Reload the page if the screen width is less than or equal to 900 pixels
            if (screenWidth <= 900) {
                location.reload();
            }
        });