export function postRestaurant(
  name,
  address,
  openHours,
  contactDetails,
  image
) {
  //POST json
  let dataToSend = {
    name: name,
    img: image,
    address: address,
    contact: contactDetails,
    openingHours: openHours,
    grade: "None",
  };
  //making data to send on server
  let formBody = [];
  for (let key in dataToSend) {
    let encodedKey = encodeURIComponent(key);
    let encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  // console.log(formBody);
  //POST request
  return  fetch("http://localhost:3000/restaurantModel/add", {
    method: "POST", //Request Type
    body: formBody, //post body
    headers: {
      //Header Definition
      // 'Content-Type': 'application/json',
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((response) => {
      console.log("Entered");
      if(response.status === 201){
        console.log("returned dataToSend");
        return dataToSend
      }
      console.log(response);
    })
    //If response is not in json then in error
    .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
    });
}

export function putRestaurantsGrade(grade,name) {
  //POST json
  let dataToSend = {newGrade: grade,};

  console.log(`grade: ${grade}`);
  console.log(`name: ${name}`);

  //making data to send on server
  let formBody = [];
  for (let key in dataToSend) {
    let encodedKey = encodeURIComponent(key);
    let encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  // console.log(formBody);
  //POST request
  return (
    fetch(`http://localhost:3000/restaurantModel/update/${name}`, {
      method: "PUT", //Request Type
      body: formBody, //post body
      headers: {
        //Header Definition
        // 'Content-Type': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => {
        console.log("Entered");
        if (response.status === 200) {
          console.log("returned dataToSend");
          return dataToSend;
        }
        console.log(response);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      })
  );
}

//update/:name
