enum DwellingType {
    rambler,
    twoStory,
    duplex
}

abstract class Dwelling {
    address: string;
    roomCount: number;
    bathCount: number;
    squareFootage: number;
    available: boolean;
}

class House extends Dwelling {
    dwellingType: DwellingType;
}

let houses: Array<House> = [
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

function getAllHouses(): Array<House> {
    return houses;
}

function logFirstAvailable(): void {
    let availableHouses: Array<House> = houses.filter(house => house.available);
    console.log(
        availableHouses[0],
        availableHouses.length,
        availableHouses[0].address
    );
}

function getHouseAddressesByDwellingType(
    dwellingType: DwellingType
): Array<string> {
    return houses
        .filter((house: House) => house.dwellingType == dwellingType)
        .map((house: House) => house.address);
}

abstract class Person {
    name: string;
    email: string;
    phoneNumber: string;
    dob: Date;
}
class Property {
    address: string;
}
class PropertyManager extends Person {
    properties: Property[];
}
class Owner extends Person {
    properties: Property[];
}
class Renter extends Person {
    property: Property;
}