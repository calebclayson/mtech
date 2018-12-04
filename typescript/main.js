var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DwellingType;
(function (DwellingType) {
    DwellingType[DwellingType["rambler"] = 0] = "rambler";
    DwellingType[DwellingType["twoStory"] = 1] = "twoStory";
    DwellingType[DwellingType["duplex"] = 2] = "duplex";
})(DwellingType || (DwellingType = {}));
var Dwelling = /** @class */ (function () {
    function Dwelling() {
    }
    return Dwelling;
}());
var House = /** @class */ (function (_super) {
    __extends(House, _super);
    function House() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return House;
}(Dwelling));
var houses = [
    {
        address: '123 main st, denver co 87695',
        roomCount: 3,
        bathCount: 3,
        squareFootage: 2300,
        available: false,
        dwellingType: DwellingType.rambler
    },
    {
        address: '1010 binary dr, denver co 87695',
        roomCount: 3,
        bathCount: 3,
        squareFootage: 2800,
        available: true,
        dwellingType: DwellingType.duplex
    },
    {
        address: '3456 mountain view ln, denver co 87695',
        roomCount: 3,
        bathCount: 2,
        squareFootage: 1900,
        available: true,
        dwellingType: DwellingType.twoStory
    }
];
function getAllHouses() {
    return houses;
}
function logFirstAvailable() {
    var availableHouses = houses.filter(function (house) { return house.available; });
    console.log(availableHouses[0], availableHouses.length, availableHouses[0].address);
}
function getHouseAddressesByDwellingType(dwellingType) {
    return houses
        .filter(function (house) { return house.dwellingType == dwellingType; })
        .map(function (house) { return house.address; });
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Property = /** @class */ (function () {
    function Property() {
    }
    return Property;
}());
var PropertyManager = /** @class */ (function (_super) {
    __extends(PropertyManager, _super);
    function PropertyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PropertyManager;
}(Person));
var Owner = /** @class */ (function (_super) {
    __extends(Owner, _super);
    function Owner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Owner;
}(Person));
var Renter = /** @class */ (function (_super) {
    __extends(Renter, _super);
    function Renter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Renter;
}(Person));
