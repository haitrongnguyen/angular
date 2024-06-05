
import { Component, Pipe } from '@angular/core';
import { SliceString } from './sliceString';

@Component({
  selector: 'app-demo-custom-pipe',
  standalone: true,
  imports: [SliceString],
  templateUrl: './demo-custom-pipe.component.html',
  styleUrl: './demo-custom-pipe.component.scss'
})

export class DemoCustomPipeComponent {
  text: string = 'welcome to angular 13!';
}
