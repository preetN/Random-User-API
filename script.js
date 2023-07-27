const apiEP = "https://randomuser.me/api/?results=50";
let userList = [];
const fetchUser = async (url) => {
  try {
    //to fetch data from nyserver, fetch()
    // fetch(apiEP)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    //Asyc wait
    const response = await fetch(url);
    const data = await response.json();
    userList = data.results;
    display(userList);
  } catch (error) {
    console.log(error);
  }
};
fetchUser(apiEP);
const display = (users) => {
  let str = "";
  users.map((usr, i) => {
    str += ` <div class="card" style="width: 12rem">
    <img src="${usr.picture.large}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${
        usr.name.title + " " + usr.name.first + " " + usr.name.last
      }</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="fa-solid fa-phone"></i> ${
          usr.cell
        }</li>
        <li class="list-group-item"><i class="fa-solid fa-envelope"></i> ${
          usr.email
        }</li>
        <li class="list-group-item"><i class="fa-solid fa-location-dot"></i>
        ${
          usr.location.street.number +
          " " +
          usr.location.street.name +
          ", " +
          usr.location.city +
          ", " +
          usr.location.country +
          " " +
          usr.location.postcode
        }</li>
      </ul>
    </div>
  </div>`;
  });

  document.getElementById("list").innerHTML = str;
};
search_Results = (e) => {
  const g = e.value;
  console.log(g);
  const url = `${apiEP}&gender=${g}`;
  fetchUser(url);
  document.getElementById("user_found").innerText = "0";
};

document.getElementById("name").addEventListener("keyup", (event) => {
  var { value } = event.target;
  const fil = userList.filter((item) => {
    const name = (item.name.first + " " + item.name.last).toLowerCase();
    return name.includes(value.toLowerCase());
  });
  display(fil);
  document.getElementById("user_found").innerText = fil.length;
});
