let dog = document.getElementById("about_dog");
        let text = document.getElementById("text");

        window.addEventListener('scroll', function(){
            var value = window.scrollY;

            dog.style.top = value * 0.5 + 'px';
            text.style.bottom = value * 0.5 + 'px';
            
            
        })