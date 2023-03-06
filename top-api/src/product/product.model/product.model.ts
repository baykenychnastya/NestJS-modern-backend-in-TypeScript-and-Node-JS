export class ProductModel {
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    credit: number;
    calculatedRating: number;
    description: string;
    advantages: string;
    disAdvantages: string;
    catigories: string[];
    tags:string;
    characteristics: {
        [key: string]: string;
    };


}
