const apiEP = "https://randomuser.me/api/?results=50";
let userList = [];
const fetchUser = async () => {
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
    const response = await fetch(apiEP);
    const data = await response.json();
    userList = data.results;
  } catch (error) {
    console.log(error);
  }
};
fetchUser();
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
search_Results = () => {
  var searchList = [];
  var i = 0;
  var gender = document.getElementById("gender").value;
  userList.map((item) => {
    if (gender === item.gender) {
      searchList[i++] = item;
    }
  });
  document.getElementById("user_found").innerText = i;
  display(searchList);
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
