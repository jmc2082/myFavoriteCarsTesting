Meteor.publish("cars", function (options, searchString) {

    if (searchString == null)
        searchString = '';

    Counts.publish(this, 'numberOfCars', Cars.find({
        'make' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' },
        //$or:[
        //    {$and:[
        //        {"public": true},
        //        {"public": {$exists: true}}
        //    ]},
        //    {$and:[
        //        {owner: this.userId},
        //        {owner: {$exists: true}}
        //    ]}
        //]
    }), { noReady: true });
    return Cars.find({
        'make' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' },
        //$or:[
        //    {$and:[
        //        {"public": true},
        //        {"public": {$exists: true}}
        //    ]},
        //    {$and:[
        //        {owner: this.userId},
        //        {owner: {$exists: true}}
        //    ]}
        //]
    } ,options);

    //return Cars.find({});

    //return Cars.find({
    //    $or:[
    //        {$and:[
    //            {"public": true},
    //            {"public": {$exists: true}}
    //        ]},
    //        {$and:[
    //            {owner: this.userId},
    //            {owner: {$exists: true}}
    //        ]}
    //    ]
    //});
});