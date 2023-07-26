import Buyable from './Buyable';

export default class Movie implements Buyable {
   constructor(
    readonly id: number,
    readonly name: string,
    readonly country: string,
    readonly slogan: string | null,
    readonly genre: string,
    readonly duration: string,
    readonly price: number = 0,
   ) {}
}