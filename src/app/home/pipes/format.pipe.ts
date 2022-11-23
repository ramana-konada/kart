import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPipe',
})
export class FormatPipe implements PipeTransform {
  transform(value: any, input: any) {
    if (!value) {
      return value;
    }

    return value.filter((s: any) => s.id !== input);
  }
}
