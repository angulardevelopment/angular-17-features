import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-large',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>large works! Used to show demo of defer loading</p>`,
  styleUrl: './large.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LargeComponent {

  constructor(public api: HttpClient) {

  }

  ngOnInit() {
    this.apiCall();
  }

  apiCall() {
    this.api.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
      console.log(res);
    })
  }
}
