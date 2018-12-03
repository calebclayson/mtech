enum DwellingType {
    rambler,
    twoStory,
    duplex
}

class House {
    address: string;
    roomCount?: number;
    bathCount: number;
    squareFootage: number;
    available: boolean;
    dwellingType: DwellingType
    constructor(addr, rc, bc, sf, avail, dt) {
        this.address = addr;
        this.roomCount = rc;
        this.bathCount = bc;
        this.squareFootage = sf;
        this.available = avail;
        this.dwellingType = dt;
    }
}

let houses: House[] = [
    new House("1123132 e", 3, 4, 1234, true, DwellingType.rambler),
    new House("12 n", 5, 2, 3235, false, DwellingType.twoStory),
    new House("3 w", 10, 5, 12415, true, DwellingType.twoStory),
    new House("78 s", 1, 1, 100, false, DwellingType.duplex),
]

function getAllHouses() {
    return houses;
}

function logFirstAvailable() {

}

function getHouseAddressesByDwellingType(dwellingType: DwellingType): Array<string> {
    return houses.filter((house: House) => house.dwellingType == dwellingType).map((house: House) => house.address);
}