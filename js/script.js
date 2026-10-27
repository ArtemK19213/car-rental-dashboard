const settingsButton = document.querySelector('.button-settings');

settingsButton.addEventListener('click', () => {
    settingsButton.classList.toggle('active');
});


const notificationButton = document.querySelector('.button-notifications');

notificationButton.addEventListener('click', () => 
{
    notificationButton.classList.toggle('active');
});



document.addEventListener('click', (event) => 
{
    if(!settingsButton.contains(event.target))
    {
        settingsButton.classList.remove('active');
    }
    if(!notificationButton.contains(event.target))
    {
        notificationButton.classList.remove('active');
    }
});



let notificationBadge = document.querySelector('.notification-badge');

notificationBadge.addEventListener('click', () => {
    if(notificationBadge.textContent < 100)
    {
        notificationBadge.textContent++;
    }
    else
    {
       notificationBadge.textContent = 0;
    }
    
});



