import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  name = 'Angular';
  color = '';
  showHello: boolean = false;
  showGoodbye: boolean = false;
  colors = ["Red", "Blue", "White"];
  courses = [
    { id: 1, name: "Angular For Beginners" },
    { id: 2, name: "Angular Core Deep Dive" },
    { id: 3, name: "Angular Forms In Depth" },
  ];
  items = ['angular'];


  trackCourse(index: number, course: Course) {
    return course.id;
  }

}

interface Course{
  id: number;
  name: string;
}
