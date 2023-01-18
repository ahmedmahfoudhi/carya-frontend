import { Pipe, PipeTransform } from '@angular/core';

const defaultCarImageLink = 'assets/images/car2.jpeg';
const defaultHomeImageLink = 'assets/images/appart1.jpg';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) {
      if (args[0] == 'Car') return defaultCarImageLink;
      return defaultHomeImageLink;
    }
    return value;
  }
}
