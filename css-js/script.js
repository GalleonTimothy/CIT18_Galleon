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