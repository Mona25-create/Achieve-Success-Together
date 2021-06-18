

let emailReqForm = document.querySelector('.email-request-form');

emailReqForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('http://localhost:3000/queries', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            msg: document.querySelector('#msg').value
        })
    }).then((resp) => resp.text()).then((data) => console.log(data));
})