import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-large',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>large works!</p>`,
    styleUrl: './large.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LargeComponent { }
