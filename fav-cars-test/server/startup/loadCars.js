Meteor.startup(function () {
    if (Cars.find().count() === 0) {

        var cars = [
            {
                'make': 'Chevy',
                'model': 'Camaro IROC Z',
                'color': 'Red',
                'year': '1990'
            },
            {
                'make': 'Ford',
                'model': 'GT40',
                'color': 'Grey',
                'year': '2003'
            },
            {
                'make': 'Toyota',
                'model': 'Supra',
                'color': 'Red',
                'year': '2015'
            }
        ];

        for (var i = 0; i < cars.length; i++)
            Cars.insert({make: cars[i].make, model: cars[i].model, color: cars[i].color, year: cars[i].year});
    }
});
