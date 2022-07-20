// This class represents a Form
export default class Restaurant {

    constructor(id,name,address,img,contact,openingHours,grade = "A"){
        this.id = id;
        this.name = name;
        this.img = img;
        this.address = address;
        this.contact = contact;
        this.openingHours = openingHours;
        this.grade = grade;
    }

}