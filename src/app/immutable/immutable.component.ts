import { Component } from '@angular/core';

@Component({
  selector: 'app-immutable',
  standalone: true,
  imports: [],
  templateUrl: './immutable.component.html',
  styleUrl: './immutable.component.scss'
})
export class ImmutableComponent {

}
Example-

const pizzas = {
margherita: {
toppings: ['tomato sauce', 'mozzarella cheese'],
prices: {
small: '5.00',
medium: '6.00',
large: '7.00'
}
},
prosciutto: {
toppings: ['tomato sauce', 'mozzarella cheese', 'ham'],
prices: {
small: '6.50',
medium: '7.50',
large: '8.50'
}
}
};
let pizzasCopy = {...pizzas}; //some issue in copying
let pizzasCopy2 = Object.assign({}, pizzas);
pizzasCopy.margherita.prices.small = '5.50';
console.log(pizzasCopy,pizzas);
By using update method issue will resolved
const pizzasCopy3 = update(pizzas, { margherita: { prices: { small: { $set: '5.50' } } } });
console.log(pizzasCopy3, pizzas);