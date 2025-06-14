import { Component } from '@angular/core';
import { UsercartComponent } from '../usercart/usercart.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [UsercartComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  user = {
    id: 1,}
removeUser(userId: number) {
    console.log(`User with ID ${userId} removed`);
  }
}
