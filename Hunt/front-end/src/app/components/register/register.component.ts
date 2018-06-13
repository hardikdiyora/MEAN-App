import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  department: String;
  other_department : String;
  office: String;
  other_office : String;
  size: String;

  departments: String[];
  offices: String[];
  sizes: String[];
   
  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router)
    {
      this.departments = ['Engineering', 'Global services', 'Sales', 'Others'];
      this.offices = ['APJ', 'US', 'Europe'];
      this.sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
    }

  ngOnInit() {
        this.dropdownList = [
                              {"id":1,"itemName":"Fresh Installation"},
                              {"id":2,"itemName":"Administration"},
                              {"id":3,"itemName":"Capture & Parsing"},
                              {"id":4,"itemName":"New Investigation"},
                              {"id":5,"itemName":"Event Analytics"},
                              {"id":6,"itemName":"Reporting"},
                              {"id":7,"itemName":"Respond (IM)"},
                              {"id":8,"itemName":"Migration"},
                              {"id":9,"itemName":"Security Vulnerability"}
                            ];

        this.dropdownSettings = { 
                            singleSelection: false, 
                            text:"Select Areas"
                          };  
  }

  onRegisterSubmit(){

    let areas: String[] = [];
    this.selectedItems.forEach(element => {
        areas.push(element.itemName);
    });

    if(this.department == 'Others')
    {
      this.department = this.other_department;
    }
    if(this.office == 'Other')
    {
      this.office = this.other_office;
    }

    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.username,
      department: this.department,
      area: areas,
      size: this.size,
      office: this.office
    }
    
    //Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields.', {cssClass: 'alert-danger', timeout: 4000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email.toLowerCase())){
      this.flashMessage.show("Please use a valid email, Use only 'rsa.com' or 'emc.com' or 'dell.com' domain.", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }
    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong, May be duplicate registration !', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }

  onItemSelect(item:any){
      }

  OnItemDeSelect(item:any){
  }


}
