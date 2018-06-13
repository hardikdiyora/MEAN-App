import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot){   

    if(route.data["master"]){
        if(this.authService.loggedIn() && this.authService.master){
          return true;
        } else {
          this.authService.logout();
          this.router.navigate(['/login']);
          return false;
        }      
    }else{
        if(this.authService.loggedIn()){
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }      
    }

  }

}
