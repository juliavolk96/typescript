import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    // метод для добавления нового товара
    add(item: Buyable): void {
        this._items.push(item);
    }

    // возвращает список товаров
    get items(): Buyable[] {
        return [...this._items]; 
    }

    // подсчет суммарной стоимости (без учета скидки)
    getTotalPrice(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    // подсчет суммарной стоимости (с учетом скидки)
    getTotalPriceWithDiscount(discount: number): number {
        let totalPrice = this.getTotalPrice();
        return totalPrice - totalPrice * (discount / 100);
    }

    // удаление добавленного в корзину объекта по полю id 
    removeItemById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}
