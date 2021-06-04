// this is basicially a array of all the items in tabitem and content item
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    // Remove all show and border classes
    removeBorder();
    removeShow();
    
    // Add border to current tab item
    this.classList.add('tab-border');

    // Grab content item from DOM
    const tabContentitem = document.querySelector(`#${this.id}-content`);

    // Add show class
    tabContentitem.classList.add('show');

    
    
}

function removeBorder(){
    tabItems.forEach(item =>{
        item.classList.remove('tab-border')
    }); 
}

function removeShow(){
    
    tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}




//listen for tab
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});




