function scrollActiveItemIntoView () {
    // Get the currently active Item in the sidebar.
    const activeItem = document.querySelector('a[aria-current="page"]');

    if (activeItem) {
        //Find out whether the parent item is a group - if yes pick it to be scrolled into view.
        const scrollToItem = activeItem.parentElement.getAttribute('role') === "group" ? activeItem.parentElement : activeItem;
        
        scrollToItem.scrollIntoView();
    }
}

//Scroll item into view after 400ms to work against some itchy re-render of the Sidebar.
setTimeout(scrollActiveItemIntoView, 400);


