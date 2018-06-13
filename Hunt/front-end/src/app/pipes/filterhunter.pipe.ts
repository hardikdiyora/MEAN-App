import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterhunter'
})
export class FilterhunterPipe implements PipeTransform {

  transform(all_users: any, username:any, name: any, area: any, office: any, department: any): any {
	 if (all_users){
        return all_users.filter(user =>{
            if (username && user.username.toLowerCase().indexOf(username.toLowerCase()) === -1){
                return false;
            }
            if (name && user.name.toLowerCase().indexOf(name.toLowerCase()) === -1){
                return false;
            }
            if (area && user.area.indexOf(area) === -1){
                return false;
            }
            if (office && user.office.toLowerCase().indexOf(office.toLowerCase()) === -1){
                return false;
            }
            if (department && user.department.toLowerCase().indexOf(department.toLowerCase()) === -1){
                return false;
            }
            return true;
       })
    }else{
            return all_users;
        }

  }

}
