var myApp = {};
//array to hold cars
myApp.Cars = [];
myApp.currentCar = 0;
//make Car constructor function
myApp.Car = function (make, model, pictureUrl) {
    //pass parameters in
    this.make = make;
    this.model = model;
    this.pictureUrl = pictureUrl;
};
//add a seed car
myApp.Cars.push(new myApp.Car("Toyota", "Corolla", "http://www.toyota.com/content/gallery/photos-videos/2014/corolla/thumbs/US-CL14-101-C.jpg"));

//write div to display cars function
myApp.WriteDiv = function (carToShow) {
    document.getElementById("CarPicture").innerHTML = "<img src='" + myApp.Cars[carToShow].pictureUrl + "'/>";
    document.getElementById("CarInfo").innerHTML = "Make:" + myApp.Cars[carToShow].make + "<br/>Model: " + myApp.Cars[carToShow].model+
        "<br/><div class='btn btn-danger' onclick='(myApp.DeleteCar("+ carToShow +")'>Delete</div>+
        "<br/><div class='btn btn-danger' onclick='(myApp.DeleteCar("+ carToShow +")'>Delete</div>";
};
//create cars and push them to array
myApp.AddCar = function () { };
//pull make, model, and pictureUrl values from the html
    var make = document.getElementById("make").value;
    var make = document.getElementById("model").value;
    var pictureUrl = document.getElementById("picture").value;
//creates new car and pushes it into the array
    myApp.Cars.push(new myApp.Car(make, model, pictureUrl));
//delete car from array
myApp.DeleteCar = function (targetCar) {
    myApp.Cars.splice(targetCar, 1);
    //need to check to make sure the car we send the user to exists
    //redirect to the 0 for initial dev purposes
    myApp.previousCar();
};
//update Car in array
//shows user update info as well
myApp.UpdateCar = function (targetCar) {
    var car = myApp.Cars[targetCar];
    document.getElementById("EditCarModel").value = car.model;
    document.getElementById("EditCarMake").value = car.make;
    document.getElementById("EditCarUrl").value = car.pictureUrl;
    document.getElementById("EditCarId").value = targetCar;
};
//saves updated info from update
myApp.SaveUpdate = function () {
    var model = document.getElementById("EditCarModel").value;
    var make = document.getElementById("EditCarMake").value;
    var pictureUrl = document.getElementById("EditCarUrl").value;
    var i = document.getElementById("EditCarUrl").value;
    var car = new myApp.Car(make, model, pictureUrl);
    myApp.Cars[i] = car;
    myApp.WriteDiv(myApp.currentCar);
};

//on Next button click
myApp.nextCar = function () {
    if (myApp.Cars.length - 1 > myApp.currentCar) {
        myApp.currentCar++;
        myApp.WriteDiv(myApp.currentCar);
    }
};
//on Prev button click
myApp.previousCar = function () {
    if (myApp.currentCar >0) {
        myApp.currentCar--;
    }
    myApp.WriteDiv(myApp.currentCar);
    {
    myApp.WriteDiv(myApp.currentCar);
};
//write first car to initial page load
    myApp.WriteDiv(0);