import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'find'
})
export class FindPipe implements PipeTransform {
    transform(input: string, args: any[]): any {
        // input = input = this.args;
        return 
    }

}