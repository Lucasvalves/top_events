import { User } from "./User";
import { Price } from "./Price";
import { Location } from "./Location";

class Event{
  constructor(
    public title:string,
    public location: Location,
    public date: Date,
    public description:string,
    public banner:string,
    public cupons:string[],
    public participantes: User[],
    public price: Price[],
    public city: string,
    
    ){

  }
}

export {Event};