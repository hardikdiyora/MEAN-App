import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Popup} from 'ng2-opd-popup';
import {Router} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  secure: Boolean;
  sec: String;  
  tab: Number;
  all_users: User[];
  count_dist_defects: DISCOUNT[];
  all_defects: Defect[];
  expandedIndex: Number;
  id : String;
  comments: String;
  description: String;
  state: String;
  severity: String;
  defect_state: String[];
  nw_severities: String[];
  hunting_areas:String[];

  departments: String[];
  offices: String[];
  reverse: Boolean;

  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private popup:Popup,
    private router: Router
  	) 
  { 
    this.secure = false;
    this.reverse = true;
    this.defect_state = [undefined, 'New','Duplicate','Processed'];
  }

  ngOnInit() {
    this.tab = 1;
    this.expandedIndex=-1;
    this.nw_severities = [undefined, 'P0 (High)','P1 (Medium)','P2 (Low)'];
    this.hunting_areas = [undefined ,'Fresh Installation', 'Administration',
                             'Capture & Parsing', 'New Investigation',
                             'Event Analytics', 'Reporting', 'Respond (IM)',
                             'Migration', 'Security Vulnerability'];
    this.offices = [undefined, 'APJ', 'US', 'Europe'];                           
  }

    onSecureSubmit(){
      if(this.sec == "master123"){
        this.secure = true;

        this.authService.getCountAndDistinctDefects().subscribe(defects => {
           this.count_dist_defects = defects;
        });

      }else{
        this.secure = false;
        this.flashMessage.show('Secure key is incorrect!', {cssClass: 'alert-danger', timeout: 2000});
      } 
    }

     onDelete(id){
         this.id = id;
         this.popup.options = {
            header: "Are you sure to delete this defect ?",
            color: "#a12005", 
            widthProsentage: 30,  
            animationDuration: 0.5, 
            showButtons: true,  
            confirmBtnContent: "Confirm",  
            cancleBtnContent: "Cancel",  
            confirmBtnClass: "btn btn-success", 
            cancleBtnClass: "btn btn-default", 
            animation: "bounceInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
        };
        this.popup.show(this.popup.options);
     }

     onDeleteConfirm(){
        this.authService.removeDefect(this.id).subscribe(data => {
          if(data.success){
            this.flashMessage.show('Deleted Successfully', {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/admin']);
            this.expandedIndex=-1;
            this.getDefects();
          } else {
            this.flashMessage.show('Something went wrong !', {cssClass: 'alert-danger', timeout: 3000});
            this.router.navigate(['/admin']);
          }
          });
        this.popup.hide();       
     }

     onUpdate(id, def){
        const updated_defect = {
          decription: def.description,
          comments: def.comments,
          state: def.state,
          severity: def.severity
        };

        this.authService.updateDefect(id ,updated_defect).subscribe(data => {
          if(data.success){
            this.flashMessage.show('You successfully updated the defect', {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/admin']);
          } else {
            this.flashMessage.show('Something went wrong !', {cssClass: 'alert-danger', timeout: 3000});
            this.router.navigate(['/admin']);
          }
        });
     }

     getDefects(){
        this.authService.getAllDefects().subscribe(defects => {
            this.all_defects = defects;
        });
     }

     getUsers(){
        this.authService.getAllUsers().subscribe(users => {
           this.all_users = users;
        });
     }

     getRewards(){
        this.authService.getCountAndDistinctDefects().subscribe(defects => {
           this.count_dist_defects = defects;
        });
     }

     onReverse(){
       if(this.reverse){
         this.reverse = false;
       }else{
         this.reverse = true;
       }
     }

     expandRow(index){
       if(this.expandedIndex === index)
       {
         this.expandedIndex = -1;
       }else{
         this.expandedIndex = index;
       }

     }

}

interface User{
  name: String;
  username: String;
  email: String;
  department: String;
  areas: String[];   
}

interface DISCOUNT{
  username: String;
  count: Number;
}

interface Defect{
  defectId: Number;
  summary: String;
  username: String;
  description: String;
  severity: String;
  components: String;
  attachments: String[];
  state: String;
  comments: String;
}
