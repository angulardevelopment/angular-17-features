import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Color } from '../color.enum';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent {
  @Input() color: Color = Color.Primary;
  @Input() disableState = false;

  @HostBinding('class')
  get hostClasses() {
    return {
      [`${this.color}`]: true,
      ['disabled']: this.disableState,
    };
  }
}
