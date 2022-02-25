import { Pipe, PipeTransform } from '@angular/core';
import { Forfaits } from './forfaits';

@Pipe({
  name: 'europe'
})
export class EuropePipe implements PipeTransform {

  transform(forfait: Forfaits[]): Forfaits[] {
    return forfait.filter(forfait => forfait.region === 'europe');
  }

}
