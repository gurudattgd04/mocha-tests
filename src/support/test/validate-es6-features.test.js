
//const expect = require('chai').expect
import {expect} from "chai"
import _ from "lodash"

it("validate es6 feature", () => {

    const deliverBoy = {
        name: "John",

        handleMessage: function (message, handler) {
            return handler(message);
        },

        receive: function () {
            return this.handleMessage("Hello ", message => message + this.name)
        }
    }

    const squared = x => x * x;
    expect(squared(4)).to.be.eq(16);
    expect(deliverBoy.receive()).to.be.eq("Hello John")
})

it("Validate es6 template literal feature", () => {

    function tag(strings, ...values) {
        if (values[0] < 20) {
            values[1] = "awake"
        } else {
            values[1] = "sleeping"
        }
        return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
    }

    let message = tag`It's ${new Date().getHours()}, I'm ${""}`;
    console.log(message);
})

it("validate object destructure", () => {
    const person = [{
        "name": "Gurudatt",
        "age": 33,
        "place": "mysore"
    },
        {
            "name": "James",
            "age": 33,
            "place": "milton kaynes"
        },
        {
            "name": "Will",
            "age": 28,
            "place": "London"
        }
    ];

    const result = person.filter(({age}) => age > 30 );
    expect(result.length).to.eq(2)
    result.forEach(({name}) => console.log(name))
    expect(_.filter(person, function (o) {return  o.age > 30}).length).to.be.eq(2);
})

it("validate promise feature with resolve and reject", () => {
    const test = new Promise((resolve, reject) => {
        if(true)
        {
            resolve("Function resolved!")
        }
        else
        {
            reject("Function rejected")
        }
    })
    test.then((data) => console.log("success: ", data))
})

it("validate es6 rest parameters", () => {
    function Store() {
        let aisle = {
            fruit :[],
            vegetable: []
        }
        return {
            add: function (category, ...items)
            {
                console.log(items);
                items.forEach(function(value, index, arry) {
                  aisle[category].push(value);
                })
            },
            aisle: aisle
        }
    }
    const myStore = new Store();
    myStore.add("fruit", "Kiwi", "Orange");
    console.log(myStore.aisle)
    expect(myStore.aisle.fruit).to.deep.eq([ 'Kiwi', 'Orange' ]);
})
