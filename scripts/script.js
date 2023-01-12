const tabsOurServise = document.querySelectorAll('.our-servise-list-item');
const tabsOurServiseItems = document.querySelectorAll('.our-servise-list-description-item');


tabsOurServise.forEach(function(item) { 
    item.addEventListener('click', function() { 
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        // console.log(tabId);
        let currentTab = document.querySelector(tabId);

        tabsOurServise.forEach(function(item) {
            item.classList.remove('active');
        });
        tabsOurServiseItems.forEach(function(item) {
            item.classList.remove('active');
        })
        currentBtn.classList.add('active');
        currentTab.classList.add('active'); 
    });
});



