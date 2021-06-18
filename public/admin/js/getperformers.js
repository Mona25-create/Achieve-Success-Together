async function getPerformers(){
    return await fetch('http://localhost:3000/performers')
                    .then((response) => response.json())
                    .then((data) => data);
}


document.addEventListener('DOMContentLoaded', async function(){
let rankForm = document.querySelector('#rank-holders');

rankForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('http://localhost:3000/performers', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name1: document.querySelector('.first').value,
            name2: document.querySelector('.second').value,
            name3: document.querySelector('.third').value
        })
    }).then((resp) => resp.text()).then((data) => window.history.go());
})
})