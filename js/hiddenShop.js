function toggleDescription(index) {
    const containers = document.querySelectorAll('.book-container');
    const container = containers[index];
    const descriptionWrapper = container.querySelector('.description-wrapper');
    
    if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');
        descriptionWrapper.style.maxHeight = '90px'; 
    } else {
       
        containers.forEach(function (otherContainer) {
            if (otherContainer !== container) {
                otherContainer.classList.remove('expanded');
                var otherDescription = otherContainer.querySelector('.description-wrapper');
                otherDescription.style.maxHeight = '90px';
            }
        });

        container.classList.add('expanded');
        descriptionWrapper.style.maxHeight = descriptionWrapper.scrollHeight + 'px'; 
    }
}