/* DONT CHANGE THIS CODE - START */
function wait(ms = 1000) { return new Promise(resolve => setTimeout(resolve, ms)) }

class Dish {
    constructor(cookingTime) {
        this.cookingTime = cookingTime;
    }

    getCookingTime() {
        return this.cookingTime;
    }
    
    async cook() {
        const actualCookingTime = this.cookingTime * (1 + Math.random()) * 100;
        await wait(actualCookingTime);
        return this;
    }
}
/* DONT CHANGE THIS CODE - END */

class Bolognese extends Dish {
    constructor () {
        super();
        this.cookingTime = 10;
    }

    getIngredients() {
        return [new Ingridient('meat', 1), new Ingridient('spaghetti', 1), new Ingridient('tomato', 1)];
    }
}

class MashedPotatoes extends Dish {
    constructor () {
        super();
        this.cookingTime = 8;
    }

    getIngredients() {
        return [new Ingridient('potato', 1)];
    }
}

class Steak extends Dish {
    constructor () {
        super();
        this.cookingTime = 7;
    }

    getIngredients() {
        return [new Ingridient('meat', 1)];
    }
}

class SteakAndFries extends Dish {
    constructor () {
        super();
        this.cookingTime = 15;
    }

    getIngredients() {
        return [new Ingridient('meat', 1), new Ingridient('potato', 1)];
    }
}

class Ingridient {
    constructor (ingredientName, ingredientQty) {
        this.ingredientName = ingredientName;
        this.ingredientQty = ingredientQty;
    }

    getName() {
        return this.ingredientName;
    }

    getQty() {
        return this.ingredientQty;
    }
}

class Kitchen {
    constructor () {
        this.ingredients = {};
        this.orders = [];
    }

    addToFridge(ingridients) {
        for (let ingr of ingridients) {
            if (ingr in this.ingredients) {
                this.ingredients[ingr.getName()] += ingr.getQty();
            } else {
                this.ingredients[ingr.getName()] = ingr.getQty();
            }
        }
    }

    checkEnoughIngridients(dish) {
        for (let ingr of dish.getIngredients()) {
            if (!(ingr.getName() in this.ingredients)) {
                return false;
            } else if (this.ingredients[ingr.getName()] < ingr.getQty()) {
                return false;
            }
        }
        return true;
    }

    order(dish) {
        if (this.checkEnoughIngridients(dish)) {
            for (let ingr of dish.getIngredients()) {
                this.ingredients[ingr.getName()] -= ingr.getQty();
            }
            this.orders.push(dish);
            console.log('Ordered dish');
        } else {
            throw 'Not enough ingridients in fridge';
        }
    }

    async cookFastestOrder() {
        if (this.orders.length === 0) {
            throw 'No orders to cook';
        }

        let fastestOrder = this.orders[0];
        let fastestOrderIndex = 0;
        for (let i = 0; i < this.orders.length; i++) {
            let order = this.orders[i];
            if (order.getCookingTime() < fastestOrder.getCookingTime()) {
                fastestOrder = order;
                fastestOrderIndex = i;
            }
        }

        this.orders.splice(fastestOrderIndex, 1);
        console.log('Cooking fastest order');
        
        return fastestOrder.cook();
    }

    async cookAllOrders() {
        let cooked = [];
        for (let order of this.orders) {
            cooked.push(order.cook());
        }
        this.orders = [];
        console.log('Cooking all orders');
        return cooked;
    }

}

async function test() {
    const kitchen = new Kitchen();
    kitchen.addToFridge([
        new Ingridient('potato', 1),
        new Ingridient('spaghetti', 1),
        new Ingridient('meat', 3),
        new Ingridient('tomato', 2)
    ])

    kitchen.order(new Bolognese()); // Bolognese extends Dish (cookingTime = 10)
    kitchen.order(new MashedPotatoes()); // MashedPotatoes extends Dish (cookingTime = 8)
    kitchen.order(new Steak()); // Steak extends Dish (cookingTime = 7)

    // Feel free to experiment with various dishes and ingridients

    await kitchen.cookFastestOrder(); // Returns fastest dish to make
    await kitchen.cookAllOrders(); // Returns two dishes in array

    kitchen.order(new SteakAndFries()); // Throws Error: Not enough ingridients in fridge
}

test();
