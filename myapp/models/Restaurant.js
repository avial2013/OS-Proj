// This class represents a Form
export default class Restaurant {

    constructor(uuid,name,address,img,contact,openingHours,grade = "A"){
        this.uuid = uuid;
        this.name = name;
        this.img = img;
        this.address = address;
        this.contact = contact;
        this.openingHours = openingHours;
        this.grade = grade;
    }

}