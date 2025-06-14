import { Component } from '@angular/core';
import { UserDirective } from '../Directive-Composition/user.Directive';

@Component({
  selector: 'user-cart',
  standalone: true,
  imports: [],
  templateUrl: './usercart.component.html',
  styleUrl: './usercart.component.scss',
     hostDirectives: [
       {
           directive: UserDirective,
      inputs: ['userId: id'],
       outputs: ['userRemoved: removed'],
       },
   ],
})
export class UsercartComponent {

}
