// Mobile Nav Interactivity
let body = document.getElementsByTagName("body")[0];
let mobileNav = document.getElementById("mobile-nav");
let headerNavIcon = document.getElementById("header-nav-icon");

const toggleMobileNav = () => {
    mobileNav.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
    headerNavIcon.getAttribute("src").includes("icon-hamburger.svg")?
        (headerNavIcon.setAttribute("src","/images/icon-close.svg"))
        :(headerNavIcon.setAttribute("src","/images/icon-hamburger.svg"));
}

// Tab Interactivity
let featuresTabs = document.querySelectorAll(".features-tabs li");
let featuresContent = document.querySelectorAll(".features-content .tab-content");

featuresTabs.forEach((item)=>{
    item.addEventListener("click",()=>{
        selectTab(event.currentTarget);
        showTabContent(event.currentTarget.id);
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
    item.addEventListener("click", ()=>{
        let clickedQuestionId = event.currentTarget.id;
        let icon = document.querySelector(`#${clickedQuestionId} img`);
        let answer = document.querySelector(`#${clickedQuestionId} .answer`);
        
        answer.classList.toggle("hidden");
        icon.getAttribute("src").includes("icon-arrow.svg")?
            (icon.setAttribute("src","/images/icon-arrow-close.svg"))
            :(icon.setAttribute("src","/images/icon-arrow.svg"));
    })
});
