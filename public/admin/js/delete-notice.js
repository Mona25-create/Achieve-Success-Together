let delnotice = document.querySelector('.notice');

delnotice.addEventListener('click', function(e){
    if(e.target.classList.contains('remove')){
        let id = e.target.parentNode.parentNode.querySelector('.uuid').value;
        fetch('http://localhost:3000/notices/' + id , {
            method: 'DELETE'
        }).then((resp) => resp.text()).then(() => window.history.go());
    }
})