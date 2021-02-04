import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from '../interfaces';

@Pipe({
  name: 'userTransform'
})
export class UserTransformPipe implements PipeTransform {

transform(value: IUser[], text: string, city: string, ...args): string[] {
return value.map(value1 => `${text}` + value1.name + `${city}` + value1.address.city);
    // console.log(value);
}
}

