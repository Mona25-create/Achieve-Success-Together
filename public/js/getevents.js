async function getEvents(){
    return await fetch('http://localhost:3000/events')
                .then((response) => response.json())
                .then((data) => data);
}