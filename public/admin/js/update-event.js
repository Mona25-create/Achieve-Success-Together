
{
let updateEvent = document.querySelector('.articles');
let updateEventForm = document.querySelector('.update-form');
let titleInfo = document.querySelector('#update-title');
let detailsInfo = document.querySelector('#update-details');
let id;
updateEvent.addEventListener('click',async function(e) {
    if(e.target.classList.contains('edit')){
    id = e.target.parentNode.parentNode.querySelector('.uid').value;
    let eventInfo = await fetch('http://localhost:3000/events/' + id).then((resp) => resp.json()).then((data) => data)
        
        titleInfo.value = eventInfo.title;
        
        detailsInfo.value = eventInfo.description;
        let addEvent = document.getElementById('v-pills-home');
        addEvent.classList.remove('show');
        addEvent.classList.remove('active');
        let addEvent1 = document.getElementById('v-pills-update');
        addEvent1.classList.add('show');
        addEvent1.classList.add('active');
    }
})
updateEventForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('http://localhost:3000/events/' + id, {
        method: 'PUT',
        headers: {
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true ,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'content-length': '28403'
        },
        body: JSON.stringify({
            title: titleInfo.value,
            description: detailsInfo.value
        })
    }).then((resp) => resp.text()).then(() => window.history.go());
})
}
