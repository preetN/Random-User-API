const apiEP = "https://randomuser.me/api/";
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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchUser();
