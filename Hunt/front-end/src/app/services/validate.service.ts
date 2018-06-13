import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.department == undefined || user.area == undefined  || user.email == undefined || user.username == undefined || user.password == undefined ){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(rsa.com|dell.com|emc.com)/;
    return re.test(email);
  }

  validateReport(defect){
    if(defect.summary == undefined || defect.description == undefined){
      return false;
    }else{
      return true;
    }
  }


}

