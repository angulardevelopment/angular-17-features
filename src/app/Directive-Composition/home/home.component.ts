import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { Color } from '../color.enum';
import { DisableDirective } from '../disable.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, ToggleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
colorSecondary: typeof Color = Color;
}
