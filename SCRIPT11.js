document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.querySelector('button');
    drawButton.addEventListener('click', () => {
        alert('This feature will allow you to draw your own study roadmap.');
       
    });
    const aiButton = document.querySelector('.secondary');
    aiButton.addEventListener('click', () => {
        alert('This feature will generate study roadmaps using AI.');
        
    });
    const roadmapItems = document.querySelectorAll('.roadmap-item a');
    roadmapItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const roadmapName = e.target.textContent;
            alert(`You have selected the ${roadmapName} roadmap.`);
        });
    });
    const categoryLinks = document.querySelectorAll('.categories li a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryName = e.target.textContent;
            alert(`You have selected the ${categoryName} category.`);
        });
    });
    roadmapItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const roadmapName = e.target.textContent;
            showConfirmation(roadmapName);
        });
    });

});
function validateLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const error = document.getElementById('login-error');
    
    if (username.length < 3) {
        error.innerText = "Username must be at least 3 characters long.";
        return false;
    }
    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters long.";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateSignup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const error = document.getElementById('signup-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (username.length < 3) {
        error.innerText = "Username must be at least 3 characters long.";
        return false;
    }
    if (!emailPattern.test(email)) {
        error.innerText = "Enter a valid email address.";
        return false;
    }
    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters long.";
        return false;
    }
    error.innerText = "";
    return true;
}
