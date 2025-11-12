// Mobile Nav Interactivity
let body = document.getElementsByTagName("body")[0];
let mobileNav = document.getElementById("mobile-nav");
let headerNavIcon = document.getElementById("header-nav-icon");

const toggleMobileNav = () => {
    window.scrollTo(0,0);
    mobileNav.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
    headerNavIcon.getAttribute("src").includes("icon-hamburger.svg")?
        (headerNavIcon.setAttribute("src","src/images/icon-close.svg"))
        :(headerNavIcon.setAttribute("src","src/images/icon-hamburger.svg"));
}

// Tab Interactivity
let featuresTabs = document.querySelectorAll(".features-tabs li");
let featuresContent = document.querySelectorAll(".features-content .tab-content");

featuresTabs.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        selectTab(e.currentTarget);
        showTabContent(e.currentTarget.id);
    })
});

const selectTab = (tabToSelect) =>{
    featuresTabs.forEach((item)=>{
        item.classList.remove("selected");
    })
    tabToSelect.classList.add("selected");
}

const showTabContent = (tabToShowId) => {
    featuresContent.forEach((item)=>{
        item.classList.add("hidden");
    });

    let tabToShow = `${tabToShowId}-content`;
    let tabElementToShow = document.getElementById(tabToShow);
    
    tabElementToShow.classList.remove("hidden");
}

//FAQ Accordeon Interactivity
let questions = document.querySelectorAll(".question");

questions.forEach((item) => {
    item.addEventListener("click", (e)=>{
        let clickedQuestionId = e.currentTarget.id;
        let icon = document.querySelector(`#${clickedQuestionId} img`);
        let answer = document.querySelector(`#${clickedQuestionId} .answer`);
        closeAllAccordeons();
        answer.classList.remove("hidden");
        icon.getAttribute("src").includes("icon-arrow.svg")?
            (icon.setAttribute("src","src/images/icon-arrow-close.svg"))
            :(icon.setAttribute("src","src/images/icon-arrow.svg"));
    })
});

const closeAllAccordeons = ()=>{
    questions.forEach(question => {
        let answer = document.querySelector(`#${question.id} .answer`);
        let icon = document.querySelector(`#${question.id} img`);
        answer.classList.add("hidden");
        icon.setAttribute("src","src/images/icon-arrow.svg");
    });
}

// Form Submit Validation
let form = document.getElementById("newsletter-form");
let inputGroup = document.getElementById("input-group");
let inputTooltip = document.getElementById("input-tooltip");
let errorIcon = 

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let input = document.querySelector(`#newsletter-form input`);
    if (validEmail(input.value.trim())){
        alert("Thanks for subscribing!");
        inputGroup.classList.remove("error");
        inputTooltip.classList.add("hidden");
    }else{
        inputGroup.classList.add("error");
        inputTooltip.classList.remove("hidden");
    }
    
});

const validEmail = (input) => {
    if (input.includes("@")) return true;
    return false;
}