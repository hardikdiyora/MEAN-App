import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Popup} from 'ng2-opd-popup';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {Http, Headers} from '@angular/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  summary: String;
  username: String;
  description: String;
  severity: String;
  components: String;
  attachments: String[];
  uploads: FileList 	
  hunting_areas: String[];
  nw_severities: String[];
  tab : Number;
  expandedIndex: Number;
  id : String;
  
  all_defects: Defect[];
  individual_defect: Defect[]; 

  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router,
    private popup:Popup,
    private http:Http
  	) { 
      this.hunting_areas = ['Fresh Installation', 'Administration',
                             'Capture & Parsing', 'New Investigation',
                             'Event Analytics', 'Reporting', 'Respond (IM)',
                             'Migration', 'Security Vulnerability'];
      this.nw_severities = ['P0 (High)','P1 (Medium)','P2 (Low)'];
      
      this.authService.getAllDefects().subscribe(defects => {
          this.all_defects = defects;
      });

      }

  ngOnInit() {
    this.tab = 3;
    this.expandedIndex=-1;
    this.username = localStorage.getItem('user');
  }

  getFiles(event){
    const formData = new FormData(); 
    for (let file of event.target.files) {
       formData.append(this.uploads,file); 
      }
    this.http.post('defects/attachment', formData).subscribe(data => {
            this.attachments = data.json();
          });
  } 


  onReportSubmit(){
     const defect = {
            summary: this.summary,
            username: this.username.replace(/\"/g, ""),
            description: this.description,
            severity: this.severity,
            components: this.components,
            attachments: this.attachments
          }

          //Required Fields
          if(!this.validateService.validateReport(defect)){
            this.flashMessage.show('Please fill in required fields.', {cssClass: 'alert-danger', timeout: 3000});
            return false;
          }

          //Register user
          this.authService.reportDefect(defect).subscribe(data => {
            if(data.success){
              this.flashMessage.show('You successfully reported the defect', {cssClass: 'alert-success', timeout: 3000});
              this.router.navigate(['/dashboard']);
            } else {
              this.flashMessage.show('Something went wrong !', {cssClass: 'alert-danger', timeout: 3000});
              this.router.navigate(['/dashboard']);
            }
          });

     }


     onUpdate(id, def){
        const updated_defect = {
          decription: def.description,
          severity: def.severity,
          components: def.components
        };

        this.authService.updateDefect(id ,updated_defect).subscribe(data => {
          if(data.success){
            this.flashMessage.show('You successfully updated the defect', {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/dashboard']);
          } else {
            this.flashMessage.show('Something went wrong !', {cssClass: 'alert-danger', timeout: 3000});
            this.router.navigate(['/dashboard']);
          }
        });
     }

     getIndividual(){
        this.authService.getIndividualDefects(this.username.replace(/\"/g, "")).subscribe(defs => {
            this.individual_defect = defs;
        });
     }

     getAll(){
        this.authService.getAllDefects().subscribe(defects => {
            this.all_defects = defects;
        });
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

interface Defect{
  summary: String;
  username: String;
  description: String;
  severity: String;
  components: String;
  attachments: String[];   
}
