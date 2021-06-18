async function getQueries(){
    return await fetch('http://localhost:3000/queries')
                    .then((response) => response.json())
                    .then((data) => data);
}
let deleteQuery = document.querySelector('.requests');

deleteQuery.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove')){
        let id = e.target.parentNode.parentNode.querySelector('.uid').value;
        fetch('http://localhost:3000/queries/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text()).then(() => window.history.go());
    }
})