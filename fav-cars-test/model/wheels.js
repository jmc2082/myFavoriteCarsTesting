Wheels = new Mongo.Collection("wheels");

Wheels.allow({
    insert: function (userId, wheel) {
        return userId && wheel.owner === userId;
    },
    update: function (wheel, fields, modifier) {
        return true;
    },
    remove: function (wheel) {
        return true;
    }

});