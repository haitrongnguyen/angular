import { Component, Input, Output, EventEmitter  } from '@angular/core';

 
// @Component({
//     selector: 'child-component',
//     standalone:true,
//     template: `<h2>Child Component</h2>
//     <button (click)="increment()">Increment</button>
//     <p>{{count}}</p>
//     <button (click)="decrement()">decrement</button>
//     `
// })
// export class ChildComponent {
//     @Input() count: number = 0;
 
//     @Output() countChanged: EventEmitter<number> =   new EventEmitter();
 
//     increment() {
//         this.count++;
//         this.countChanged.emit(this.count);
//       }
//     decrement() {
//         this.count--;
//         this.countChanged.emit(this.count);
//     }
// }

// @Component({
//     selector: 'child-component',
//     standalone:true,
//     template: `<h2>Child Component</h2>`
// })
// export class ChildComponent {
//     count = 0;
 
//     increment() {
//         this.count++;
//         console.log(this.count);
        
//       }
//     decrement() {
//         this.count--;
//         console.log(this.count);
//     }
// }

@Component({
    selector: 'child-component',
    standalone:true,
    template: `<h2>Child Component</h2>`
})
export class ChildComponent {
    count = 0;
    increment() {
                this.count++;
                console.log(this.count);
                
              }
            decrement() {
                this.count--;
                console.log(this.count);
            }
}
