Cars = new Mongo.Collection("cars");

Cars.allow({
    insert: function (userId, car) {
        return userId && car.owner === userId;
    },
    //update: function (userId, car, fields, modifier) {
    //    // Later create a something generic to check
    //    // if logged in or not
    //    //if (userId !== car.owner) {
    //    if (userId !== car.owner) {
    //        return false;
    //    } else {
    //        return true;
    //    }
    //},
    update: function (car, fields, modifier) {
        return true;
    },
    //remove: function (userId, car) {
    //    if (userId !== car.owner) {
    //        return false;
    //    } else {
    //        return true;
    //    }
    //}
    remove: function (car) {
        return true;
    }

});