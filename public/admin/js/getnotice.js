async function getnotice(){
    return await fetch('http://localhost:3000/notices')
                .then((response) => response.json())
                .then((data) => data);
}
{
let addNotice = document.querySelector('.addNotice');

addNotice.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('http://localhost:3000/notices', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            note: document.querySelector('.new-notice').value
        })
    }).then((resp) => resp.text()).then((data) => window.history.go());
})
}