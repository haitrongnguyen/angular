import { CommonModule, SlicePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { DemoCustomPipeComponent } from './demo-custom-pipe/demo-custom-pipe.component';
import { ChildComponent } from './component/child-component/child-component';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, FormsModule, CommonModule,HttpClientModule,CurrencyPipe,DemoPipesComponent,DemoCustomPipeComponent,SlicePipe,ChildComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'my-app-angular';
//   ClickCounter: number = 0;
//   countChangedHandler(count: number) {
//     this.ClickCounter = count;
//     console.log(count);
//   }
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, FormsModule, CommonModule,HttpClientModule,CurrencyPipe,DemoPipesComponent,DemoCustomPipeComponent,SlicePipe,ChildComponent],
//   template: `
//   <h1>!</h1>
//         <p> current count is  </p>
//         <button (click)="child.increment()">Increment</button>
//         <p>{{child.count}}</p>
//         <button (click)="child.decrement()">decrement</button>
//         <child-component #child></child-component>`,
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'my-app-angular';
// }

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule, CommonModule,HttpClientModule,CurrencyPipe,DemoPipesComponent,DemoCustomPipeComponent,SlicePipe,ChildComponent],
  template: `
        <button (click)="increment()">Increment</button>
        <p>{{child.count}}</p>
        <button (click)="decrement()">decrement</button>
        <child-component></child-component>`
         ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Parent calls an @ViewChild()';
 
  @ViewChild(ChildComponent)
  child: ChildComponent = new ChildComponent;

  constructor(){}
 
  increment() {
    this.child.increment();
  }
 
  decrement() {
    this.child.decrement();
  }
}

