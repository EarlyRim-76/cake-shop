export class Cake {
    cakeId: number;
    cakeName: string;
    cakeDescription: string;
    cakeImage: string
    cakePrice: number;
    cakeQuantity: number;

    constructor(cakeId:number, cakeName:string, cakeDescription: string, cakeImage: string, cakePrice: number, cakeQuantity: number){
        this.cakeId = cakeId;
        this.cakeName = cakeName;
        this.cakeDescription = cakeDescription;
        this.cakeImage = cakeImage
        this.cakePrice = cakePrice;
        this.cakeQuantity = cakeQuantity; 
    }

}