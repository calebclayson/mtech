var DwellingType;
(function (DwellingType) {
    DwellingType[DwellingType["rambler"] = 0] = "rambler";
    DwellingType[DwellingType["twoStory"] = 1] = "twoStory";
    DwellingType[DwellingType["duplex"] = 2] = "duplex";
})(DwellingType || (DwellingType = {}));
var House = /** @class */ (function () {
    function House(addr, rc, bc, sf, avail, dt) {
        this.address = addr;
        this.roomCount = rc;
        this.bathCount = bc;
        this.squareFootage = sf;
        this.available = avail;
        this.dwellingType = dt;
    }
    return House;
}());
var houses = [
    new House("1123132 e", 3, 4, 1234, true, DwellingType.rambler),
    new House("12 n", 5, 2, 3235, false, DwellingType.twoStory),
    new House("3 w", 10, 5, 12415, true, DwellingType.twoStory),
    new House("78 s", 1, 1, 100, false, DwellingType.duplex),
];
function getAllHouses() {
    return houses;
}
function logFirstAvailable() {
}
function getHouseAddressesByDwellingType(dwellingType) {
    return houses.filter(function (house) { return house.dwellingType == dwellingType; }).map(function (house) { return house.address; });
}
