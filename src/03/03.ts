import {CityType, GvernmentBuildingsType, HouseType} from "../02/02";

export const addMoneyToBudget = (buildings: GvernmentBuildingsType, budget: number) => {
    buildings.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const staffIncr = (staff: GvernmentBuildingsType, number: number) => {
    staff.staffCount-=number;
}

export const staffRep = (staff: GvernmentBuildingsType, number: number) => {
    staff.staffCount += number;
}

export  const createMess = (props:CityType) => {
    return `Hello ${props.title} citizens.`;
}