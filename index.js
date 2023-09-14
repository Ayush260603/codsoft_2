// var navbar = document.querySelector('.navbar')
// var cross = document.querySelector('.cross')
// var hamburger = document.querySelector('.hamburger')

// hamburger.addEventListener('click',function(){
//     navbar.classList.add('block')
// })

// cross.addEventListener('click', function(){
//     navbar.classList.remove('block')
// })

var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }