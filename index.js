//-------copyright year------------
const callDateFunction = new Date();
const saveYear = callDateFunction.getFullYear();
const htmlYear = document.querySelector('.year');
htmlYear.textContent = saveYear;

//------toggle-password---------

const signUpPasswordInput = document.querySelector('.sign-up-password-input');
const signUpTogglePassword = document.querySelector('.sign-up-toggle-password ');
signUpTogglePassword.addEventListener('click',()=>{
    if(signUpPasswordInput.type === 'password'){
        signUpPasswordInput.type = 'text';
        signUpTogglePassword.src = './image/hidePassword.png';
    }else{
        signUpPasswordInput.type = 'password';
        signUpTogglePassword.src = './image/showPassword.png';
    };
});

const logInPasswordInput = document.querySelector('.log-in-password-input');
const logInTogglePassword = document.querySelector('.log-in-toggle-password');
logInTogglePassword.addEventListener('click',()=>{
    if(logInPasswordInput.type === 'password'){
        logInPasswordInput.type = 'text';
        logInTogglePassword.src = './image/hidePassword.png';
    }else{
        logInPasswordInput.type = 'password';
        logInTogglePassword.src = './image/showPassword.png';
    };
});

//----------login in and out-------------

const logInBtn = document.querySelectorAll('.log-in-btn');
const signUpBtn = document.querySelectorAll('.sign-up-btn');
const CloseContainer = document.querySelectorAll('.close-container');
const logInSection = document.querySelector('.log-in-section');
const signUpSection = document.querySelector('.sign-up-section');
logInBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        logInSection.style.right = '0px'; 
        signUpSection.style.left = '-900px';
    });
});
signUpBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        signUpSection.style.left = '0px'; 
        logInSection.style.right = '-900px'; 
    });
});
CloseContainer.forEach(btn =>{
    btn.addEventListener('click',()=>{
        signUpSection.style.left = '-900px'; 
        logInSection.style.right = '-900px'; 
    });
});

// -------open and close navbar for responsive
const resNavBtn = document.querySelector('.res-nav-btn');
const resNavBtnSpan = document.querySelectorAll('.bar');
resNavBtn.addEventListener('click',()=>{
   resNavBtnSpan.forEach(bar =>{
    bar.classList.toggle('active');
   });
});

//in and out of responsive navbar
const navBar = document.querySelector('nav');
resNavBtn.addEventListener('click',()=>{
    navBar.classList.toggle('active');
    if( navBar.classList.contains('active')){
        signUpSection.style.left = '-900px'; 
        logInSection.style.right = '-900px';
    }
})

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(navLink =>{
    navLink.addEventListener('click',()=>{
        navBar.classList.remove('active');
        resNavBtnSpan.forEach(bar =>{
            bar.classList.toggle('active');
           });
    });
});

// ----------------to-top---------
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', checkHeight);
function checkHeight(){
    if(window.scrollY > 500){
        toTop.style.display = 'block'
        toTop.style.transform = 'translateY(0px)'
    }else{
        toTop.style.display = 'none'
    };
};
toTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
