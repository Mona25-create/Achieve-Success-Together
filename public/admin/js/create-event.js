let createEvent = document.querySelector('.create-form');
let createTitle = document.querySelector('#exampleFormControlInput1');
let createDetail = document.querySelector('#exampleFormControlTextarea0');
let createImgUrl = document.querySelector('#exampleFormControlInput');
let createImgFile = document.querySelector('#create-image-file');

createEvent.addEventListener('submit', function(e) {
    e.preventDefault();
    let data = new FormData();
    data.append('title', createTitle.value);
    data.append('description', createDetail.value);
    data.append('imageURL', createImgUrl.value);
    data.append('imageFile', createImgFile.files[0]);
    fetch('http://localhost:3000/events', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})

function disabledInput(i1,i2){
    if(i1.value){
        i2.disabled = true;
    }
    else{
        i2.disabled = false;
    }
}

createImgUrl.addEventListener('change', function() {disabledInput(this,createImgFile)});
createImgFile.addEventListener('change', function() {disabledInput(this,createImgUrl)});