import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Color } from '../color.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() color: string = Color.Primary;
  @Input() disableState = false;

  @HostBinding('class')
  get hostClasses() {
    return {
      [`${this.color}`]: true,
      ['disabled']: this.disableState,
    };
  }
}


