export const getRestaurants = async () => {
let RESTAURANT = []
  const response = await
  fetch("http://localhost:3000/restaurantModel", {
    method: "GET", // Request Type
  })
  .catch((error) => {
    //Error
    alert(JSON.stringify(error));
    console.error(error);
  })

  if(response != undefined){
    const restaurantList = await response.json()
    for(let item of restaurantList){
      RESTAURANT.push(item)
    }
    return RESTAURANT
  }
  return RESTAURANT
};

export const getQuestions =async () => {
  let QUESTIONS = [];
  //GET Request
  const response = await
  fetch("http://localhost:3000/questionModel", {
    method: "GET", // Request Type
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      //   alert(JSON.stringify(responseJson));
      // console.log(responseJson);
      for (let item of responseJson) {
        QUESTIONS.push(item);
      }
      // console.log(QUESTIONS);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error
      alert(JSON.stringify(error));
      console.error(error);
    });

    if(response != undefined){
      const questionList = await response.json()
      for(let item of questionList){
        QUESTIONS.push(item)
      }
      return QUESTIONS
    }
    return QUESTIONS
};


