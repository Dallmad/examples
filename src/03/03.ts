import {CityType, GovernmentBuildingsType, HouseType} from "../02/02";

export const addMoneyToBudget = (buildings: GovernmentBuildingsType, budget: number) => {
    buildings.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const staffIncr = (staff: GovernmentBuildingsType, number: number) => {
    staff.staffCount-=number;
}

export const staffRep = (staff: GovernmentBuildingsType, number: number) => {
    staff.staffCount += number;
}

export  const createMess = (props:CityType) => {
    return `Hello ${props.title} citizens.`;
}

export const getStreetsTitlesOfGovernmentsBuildings = (buildings:Array<GovernmentBuildingsType>) => {
return buildings.map( b=>b.address.street.title)
}

export const getListOfStreetsTitles = (houses:Array<HouseType>) =>{
    return houses.map(h=>h.address.street.title)
}

export const createMessages = (houses:Array<HouseType>) => {
 return houses.map( h=>`Hello guys from ${h.address.street.title}`)
}