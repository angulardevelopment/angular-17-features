import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LargeComponent } from '../large/large.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, LargeComponent, SpinnerComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
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
  value = 1;
  isVisible = false;
isLoaded = true;

  trackCourse(index: number, course: Course) {
    return course.id;
  }

}

interface Course{
  id: number;
  name: string;
}
