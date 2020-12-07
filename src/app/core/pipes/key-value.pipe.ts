import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Object.values(value);
  }

}
