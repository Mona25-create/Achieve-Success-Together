let deleteEvent = document.querySelector('.articles');

deleteEvent.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove')){
        let id = e.target.parentNode.parentNode.querySelector('.uid').value;
        fetch('http://localhost:3000/events/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text()).then(() => window.history.go());
    }
})