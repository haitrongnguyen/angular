import { Component } from '@angular/core';
import { UpperCasePipe,LowerCasePipe,DecimalPipe,PercentPipe, DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DemoCustomPipeComponent } from '../demo-custom-pipe/demo-custom-pipe.component';

@Component({
  selector: 'app-demo-pipes',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,CommonModule,DecimalPipe,PercentPipe,DatePipe,DemoCustomPipeComponent],
  templateUrl: './demo-pipes.component.html',
  styleUrl: './demo-pipes.component.scss'
})
export class DemoPipesComponent {
  value: string = 'Angular 13';
  str: string = 'abcdefghij';
    collection: string[] = ['a', 'b', 'c', 'd'];
    pi: number = 3.14159265359;
    a: number = 0.259;
    b: number = 1.3495;

    today = new Date();
    
}
