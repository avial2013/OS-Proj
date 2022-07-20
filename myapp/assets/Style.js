import { StyleSheet } from "react-native";

const inputViewSize = 350;
const inputLabelSize = inputViewSize / 2;
const font = "Neucha_400Regular";

export default StyleSheet.create({
  // *
  container: {
    flex: 1,
    backgroundColor: "#1C2833",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  //HomeSCreen
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  },
  HSBtn: {
    margin: 25,
    padding: 15,
    borderWidth: 2,
    backgroundColor: "blue",
    borderColor: "blue",
    borderRadius: 15,
  },
  userInput: {
    marginTop: 25,
    width: 200,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#6495ed",
    borderRadius: 10,
    fontSize: 20,
    color: "#ffe4c4",
  },
  flatList: {
    justifyContent: "center",
    alignItems: "center",
  },

  //HomeScreen - GridTile
  gridTileContainer: {
    width: 250,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "crimson",
    padding: 15,
    margin: 5,
    backgroundColor: "crimson",
  },
  HSText: {
    textAlign: "center",
    fontSize: 25,
  },

  //NewRestaurant
  Btn: {
    textAlign: "center",
    width: 200,
    margin: 25,
    padding: 15,
    backgroundColor: "#f0f8ff",
    borderColor: "#f0f8ff",
    borderRadius: 15,
    borderWidth: 4,
    borderColor: "#6495ed",
  },
  BtnAddImage: {
    textAlign: "center",
    width: 150,
    margin: 25,
    padding: 15,
    backgroundColor: "#6495ed",
    borderColor: "#6495ed",
    borderRadius: 15,
    borderWidth: 4,
    borderColor: "#f0f8ff",
  },

  //newForm
  listQuestWrapper:{
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center'
  },

  /////////////////////////////////////////////////////////////////

  //Main body style
  mainBackground: {
    flex: 1,
    backgroundColor: "#1C2833",
  },

  // container
  q: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // Grid component alignment
  gridComponent: {
    flex: 1,
    margin: 15,
    height: 170,
  },

  // Grid component style
  gridComponentBackground: {
    height: 170,
    //backgroundColor: "#85C1E9",
    borderRadius: 25,
  },

  // the style of the container of the grid components
  gridContainer: {
    flex: 1,
    borderRadius: 25,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
  },

  // main style of the text in the app
  content: {
    fontSize: 27,
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
    fontFamily: font,
    margin: 5,
  },

  // main title in product page
  productTitle: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 40,
    fontFamily: font,
    color: "beige",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
  },

  // subtitles in the product page
  productSubtitles: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 40,
    color: "#fff",
    fontFamily: font,
  },

  // the main style of the text in the product page
  productContent: {
    fontSize: 23,
    color: "cornsilk",
    fontFamily: font,
  },

  // style of the image in product page
  productImage: {
    marginTop: 30,
    marginBottom: 20,
    width: 250,
    height: 250,
    borderRadius: 25,
    borderWidth: 6,
    borderColor: "#633974",
    backgroundColor: "white",
  },

  // the frame around the text in the product page
  contentFrame: {
    borderWidth: 4,
    borderColor: "#633974",
    borderRadius: 20,
    margin: 5,
    padding: 20,
    flexWrap: "nowrap",
  },

  // add to cart button
  AddToCart: {
    backgroundColor: "#633974",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 7,
    elevation: 3, // for android - to see the shadow
  },

  // style of the text in the add to cart button
  AddToCartText: {
    color: "black",
    fontSize: 30,
    fontFamily: font,
    marginLeft: 15,
    textShadowColor: "black",
    padding: 3,
    marginLeft: 5,
    marginTop: 7,
    textAlign: "left",
  },

  // main style of all the input boxes in the app
  input: {
    height: 30,
    color: "white",
    //width: inputLabelSize,
    width: 300,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 10,
    //marginLeft: inputViewSize * 0.25,
  },

  // the alignment of the input box
  inputView: {
    marginTop: 5,
    width: inputViewSize,
    justifyContent: "center",
    padding: 3,
    alignSelf: "center",
  },

  // the style of the input text
  textInput: {
    fontFamily: font,
    color: "white",
    fontSize: 18,
    margin: 10,
    //marginLeft: inputViewSize * 0.25,
    //marginRight: inputViewSize * 0.25,
  },

  // the style of the input box if there is an error with the input from the user
  inputError: {
    borderColor: "#ff0000",
  },

  // error message style if there is an error with the input from the user
  errorMsg: {
    color: "#ff0000",
    marginLeft: inputViewSize * 0.25,
    marginRight: inputViewSize * 0.25,
  },

  // general style of the buttons in the app
  button: {
    marginTop: 20,
    width: 150,
  },

  // the style of the "enter coupon" button
  enterCouponButton: {
    backgroundColor: "#633974",
    padding: 3,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 7,
    elevation: 3, // for android - to see the shadow
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 45,
  },

  // general button text style
  buttonText: {
    fontSize: 23,
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
    fontFamily: font,
    elevation: 3, // for android - to see the shadow
    textAlign: "auto",
  },

  // the style of the remove button that removes a product from the cart
  deleteButton: {
    alignSelf: "center",
    height: 140,
    width: 100,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation: 8,
    backgroundColor: "#dc3545",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#dc3545",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
  },

  // general style of some buttons in the app
  navigateButton: {
    backgroundColor: "#17a2b8",
    padding: 3,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 7,
    elevation: 3, // for android - to see the shadow
    alignItems: "center",
    alignSelf: "center",
    width: 250,
    height: 45,
    marginBottom: 7,
  },

  gradeView: {
    margin: 30,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 9,
    padding: 5,
    width: 250,
    alignSelf: "center",
  },
});
