let addEventBtn = document.querySelector(".add");


addEventBtn.addEventListener('click', function(){
    let addEvent = document.getElementById('v-pills-home');
    addEvent.classList.remove('show');
    addEvent.classList.remove('active');
    let addEvent1 = document.getElementById('v-pills-add');
    addEvent1.classList.add('show');
    addEvent1.classList.add('active');
})
document.addEventListener('DOMContentLoaded', async function(){
    addPosts();
    addQueries();
    addNotice();
})

async function addPosts(){
    let events = await getEvents();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    let i =1;
    events.forEach((event) => {
        let postHTML = ` 
        <article class="d-flex justify-content-between align-items-center odds">
        <div class="id w10">${i++}</div>
        <input type="hidden" class="uid" value="${event.id}">
        <div class="title w35">${event.title}</div>
        <div class="date w25">${event.date}</div>
        <div class="edit w20"><a href="#" class="edit">Edit</a></div>
        <div class="close w10"><a href="#" class="remove">X</a></div>
      </article>`;
      articles.insertAdjacentHTML('beforeend', postHTML)
    })
}
async function addQueries(){
    let queries = await getQueries();
    let cr = document.querySelector('.requests');
    let i = 1;
    cr.innerHTML = '';
    queries.forEach((query) => {
        let queryHTML = ` 
        <article class="d-flex justify-content-between odds">
        <div class="id w5">${i++}</div>
        <input type="hidden" class="uid" value="${query.id}">
        <div class="title w15">${query.name}</div>
        <div class="date w20">${query.date}</div>
        <div class="msg w50">${query.msg}</div>
        <div class="close w10"><a href="#" class="remove">X</a></div>
      </article>`;
      cr.insertAdjacentHTML('beforeend', queryHTML)
    })
}
async function addNotice(){
    let notices = await getnotice();
    let n = document.querySelector('.notice');
    let i = 1;
    n.innerHTML = '';
    notices.forEach((notice) => {
        let noticeHTML = ` 
        <article class="d-flex justify-content-between odds">
        <div class="id w5">${i++}</div>
        <input type="hidden" class="uuid" value="${notice.id}">
        <div class="title w15">${notice.note}</div>
        <div class="date w20">${notice.date}</div>
        <div class="close w10"><a href="#" class="remove">X</a></div>
      </article>`;
      n.insertAdjacentHTML('beforeend', noticeHTML)
    })
}