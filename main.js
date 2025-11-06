let featuresTabs = document.querySelectorAll(".features-tabs li");
let featuresContent = document.querySelectorAll(".features-content .tab-content");

featuresTabs.forEach((item)=>{
    item.addEventListener("click",()=>{
        selectTab(event.currentTarget);
        showTabContent(event.currentTarget.id);
    })
})

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