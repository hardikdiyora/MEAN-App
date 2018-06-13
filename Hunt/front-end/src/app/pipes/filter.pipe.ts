import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(all_defects: any, summary: any, severity: any, state: any, component: any): any {
	 if (all_defects){
        return all_defects.filter(defect =>{
            if (summary && defect.summary.toLowerCase().indexOf(summary.toLowerCase()) === -1){
                return false;
            }
            if (severity && defect.severity.indexOf(severity) === -1){
                return false;
            }
            if (state && defect.state.toLowerCase().indexOf(state.toLowerCase()) === -1){
                return false;
            }
            if (component && defect.components.indexOf(component) === -1){
                return false;
            }
            return true;
       })
    }else{
            return all_defects;
        }
  }

}
