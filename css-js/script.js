function hideAll(){
    var allDivs = document.querySelectorAll('.about, .skills');
    allDivs.forEach(function(div){
        div.style.display = 'none';
    });
}

function toggleVisibility(classname){
    var element = document.querySelector('.' + classname);
    element.style.display = (element.style.display === 'none') ? 'flex' : 'none';
}

document.getElementById('about').addEventListener('click', function(){
    toggleVisibility('about');
});

document.getElementById('skills').addEventListener('click', function(){
    toggleVisibility('skills');
});