import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisableDirective } from '../disable.directive';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // hostDirectives: [
  //   {
  //     directive: DisableDirective,
  //     inputs: ['disableState: disabled'],
  //   },
  //   {
  //     directive: ColorDirective,
  //     inputs: ['color'],
  //   },
  // ],
})
export class ToggleComponent {

}