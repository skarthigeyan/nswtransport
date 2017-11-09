import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'deviationFromTimeTable'
})
export class DeviationFromTimeTable implements PipeTransform{
    
    transform(value: number): string {
        if(value > 120){
            return "Late";
        }
        if(value < 0){
            return "Early";
        }
        if(value > 0 && value <= 120){
            return "Ontime";
        }
        else{
            return "Unknown";
        }
    }
}