import { Club } from "../club/club";

export interface Player{
id: any;
    name: string,
    age:number ,
    position:string,
    height:number ,
    weight:number ,
    matches:number ,
    buts: number ,
    assists : number ,
    imagePlayer:string,
    imageProfile:string,
    club: Club
}