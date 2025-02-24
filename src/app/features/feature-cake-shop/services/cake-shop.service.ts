import { Injectable } from "@angular/core";
import { Cake } from "../model/cake.model";
import { from, of,Observable } from "rxjs";


@Injectable({providedIn:'root'})
export class CakeShopService{

    private cake : Cake[] = [
        new Cake(1, "Chocolate Fudge Cake", "A rich and moist chocolate cake topped with creamy fudge frosting.", "https://example.com/chocolate-fudge-cake.jpg", 25.99, 10),
        new Cake(2, "Vanilla Bean Cake", "A soft vanilla sponge cake with a smooth buttercream frosting.", "https://example.com/vanilla-bean-cake.jpg", 22.99, 15),
        new Cake(3, "Red Velvet Cake", "A classic red velvet cake with cream cheese frosting.", "https://example.com/red-velvet-cake.jpg", 27.50, 8),
        new Cake(4, "Strawberry Shortcake", "A light sponge cake layered with fresh strawberries and whipped cream.", "https://example.com/strawberry-shortcake.jpg", 24.99, 12),
        new Cake(5, "Lemon Drizzle Cake", "A tangy lemon cake with a sweet citrus glaze.", "https://example.com/lemon-drizzle-cake.jpg", 21.99, 9),
        new Cake(6, "Carrot Cake", "A moist carrot cake with walnuts and a rich cream cheese frosting.", "https://example.com/carrot-cake.jpg", 26.99, 7),
        new Cake(7, "Black Forest Cake", "A German-style cake with layers of chocolate sponge, cherries, and whipped cream.", "https://example.com/black-forest-cake.jpg", 28.99, 6),
        new Cake(8, "Tiramisu Cake", "A coffee-flavored Italian dessert cake with mascarpone cheese.", "https://example.com/tiramisu-cake.jpg", 30.99, 5),
        new Cake(9, "Coconut Cream Cake", "A light and fluffy coconut cake with coconut-flavored frosting.", "https://example.com/coconut-cream-cake.jpg", 23.99, 14),
        new Cake(10, "Blueberry Cheesecake", "A creamy cheesecake topped with fresh blueberries and blueberry compote.", "https://example.com/blueberry-cheesecake.jpg", 32.50, 11),
        new Cake(11, "Mocha Cake", "A chocolate and coffee-flavored cake with espresso buttercream.", "https://example.com/mocha-cake.jpg", 29.99, 8),
        new Cake(12, "Mango Delight Cake", "A tropical mango-flavored sponge cake with mango cream.", "https://example.com/mango-delight-cake.jpg", 27.99, 13),
        new Cake(13, "Pineapple Upside-Down Cake", "A caramelized pineapple cake baked to perfection.", "https://example.com/pineapple-cake.jpg", 22.99, 10),
        new Cake(14, "Nutella Hazelnut Cake", "A decadent chocolate cake with Nutella and hazelnut toppings.", "https://example.com/nutella-hazelnut-cake.jpg", 31.99, 6),
        new Cake(15, "Matcha Green Tea Cake", "A Japanese-style matcha-flavored cake with light cream frosting.", "https://example.com/matcha-cake.jpg", 26.50, 9)
    ]


    getAllCake(): Observable<Cake[]>
    {
        return of(this.cake); 
    }

}