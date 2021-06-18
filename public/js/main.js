document.addEventListener('DOMContentLoaded', async function(){
    let events = await getEvents();
    let per = await getPerformers();
    let notices = await getnotice();
    let articles = document.querySelector('.carousel-inner');
    let e1 = document.querySelector('.carousel-indicators');
    let carouselExampleIndicators = document.querySelector('#carouselExampleIndicators');
    let one = document.querySelector('.one');
    let two = document.querySelector('.two');
    let three = document.querySelector('.three');
    let N = document.querySelector('.notice');
    per.forEach((p) => {
      one.innerHTML = '';
      two.innerHTML = '';
      three.innerHTML = '';
      let o = `1 ${p.name1}`;
      let tw = `2 ${p.name2}`;
      let th = `3 ${p.name3}`;
      one.insertAdjacentHTML("beforeend", o);
      two.insertAdjacentHTML("beforeend", tw);
      three.insertAdjacentHTML("beforeend", th);
    })
    let left = `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>`;
  let right = `<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>`;
    articles.innerHTML = '';
   e1.innerHTML = '';
   let j =1 ;
    events.forEach((event) => {
      if(j==1){
        let eHTML = `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${j-1}" aria-label="Slide ${j}" class="active" aria-current="true"></button>`
        let eventHTML = `
        <div class="carousel-item item-of-slider active">
                        <img src="${event.imageURL}" class="d-block w-100" alt="${event.title}">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>${event.title}</h5>
                          <p>${event.description}</p>
                        </div>
                      </div>` ;
                      e1.insertAdjacentHTML('beforeend', eHTML);
                      articles.insertAdjacentHTML('beforeend', eventHTML);
                      carouselExampleIndicators.insertAdjacentHTML('beforeend', left);
                      carouselExampleIndicators.insertAdjacentHTML('beforeend', right);

      }
      else{
        let eHTML = `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${j-1}" aria-label="Slide ${j}"></button>`

        let eventHTML = `
        <div class="carousel-item item-of-slider">
                        <img src="${event.imageURL}" class="d-block w-100" alt="${event.title}">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>${event.title}</h5>
                          <p>${event.description}</p>
                        </div>
                      </div>` ;
                      e1.insertAdjacentHTML('beforeend', eHTML);
                      articles.insertAdjacentHTML('beforeend', eventHTML);
      }
        
      
      j++;
     
    })
    let k =1;
    N.innerHTML = '';
    notices.forEach((notice) => {
        let N1 = ` <li class="list-group-item list-group-item-dark">${notice.note}</li>`;
        N.insertAdjacentHTML("beforeend", N1);
        k++;
    })
    //document.getElementsByClassName('carousel-indicators')[0].firstElementChild.classList.add('active');
    //document.getElementsByClassName('carousel-inner')[0].firstElementChild.classList.add('active');
    //var anchor = document.getElementsByClassName("carousel-indicators")[0].firstElementChild;  
    //var att = document.createAttribute("aria-current");       
    //att.value = "true";            
    //anchor.setAttributeNode(att);  

   
})

document.addEventListener('click' , function(e){

  if(e.target.classList.contains('log-in-btn')){
    var email = document.getElementById('Email').value;
    var pass = document.getElementById('inputPassword').value;
      if(email=="monagupta2570@gmail.com" & pass == "1234"){
        alert("log in sucessfull!");
        window.location = "http://localhost:3000/admin";
      }
      else{
        alert("invalid emai Id or password");
      }
  }
})




