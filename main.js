let toggle = document.getElementById('toggle');

        toggle.addEventListener ('click', () =>{
            const navbarItems = document.querySelector('.nav-links');
            const logItems = document.querySelector('.log-items');
            navbarItems.classList.toggle('active');
            logItems.classList.toggle('active');

        });