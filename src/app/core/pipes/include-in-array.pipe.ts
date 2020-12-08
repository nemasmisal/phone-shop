import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includeInArray'
})
export class IncludeInArrayPipe implements PipeTransform {

  transform(array: string[], value: string): boolean {
    return array.includes(value);
  }

}
