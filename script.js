const maincontainer = document.querySelector(`.maincontainer`);
const databtn = document.querySelector(`.getdatabtn`);
const url = "https://jsonplaceholder.typicode.com/comments";

function callback(data) {
  data.forEach((element) => {
    let id = element.id;
    let postid = element.postId;
    let name = element.name;
    let email = element.email;
    let body = element.body;

    let retreiveddata = `<div class="container">
        

        <span class="id">
          <strong>Id :</strong> ${id}
        </span>
        
        <span class="postid">
          <strong>PostId:</strong>${postid}
        </span>

        <span class="name">
          <strong>Name :</strong> ${name}
        </span>

        <email class="emaildata">
          <strong>Email :</strong> ${email}
        </email>

        <p class="parabody">
          <strong>Body :</strong> ${body}
        </p>
      </div>`;

    maincontainer.insertAdjacentHTML(`beforeend`, retreiveddata);
  });

  setTimeout(maincontainer.classList.add(`ani`), 3000);
}

function getData(url, func) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  request.addEventListener("load", function () {
    if (request.status === 200) {
      const data = JSON.parse(this.responseText);
      func(data);
    } else {
      maincontainer.innerHTML = "<h1> Error Fetching API </h1>";
    }
  });
}

databtn.addEventListener(`click`, function () {
  getData(url, callback);
});
