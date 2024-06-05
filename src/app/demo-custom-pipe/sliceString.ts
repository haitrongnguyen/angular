import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name: 'sliceString',standalone: true})
export class SliceString implements PipeTransform  {
  transform(value: string) {
    return value.slice(0,2) + '...';
  }
}