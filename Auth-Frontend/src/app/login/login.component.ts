import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  redirect:string;
  failed:boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.userName = "";
    this.password = "";
    this.redirect = "";


  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.redirect = params['redirect'];
      console.log(this.redirect);
    });
  }
  onSubmit() {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*" });
    let options = { headers: headers };

    this.http.post<any>('http://localhost:9999/login', 
    {"userName": this.userName, "password": this.password, "redirect": this.redirect}, options).subscribe(data => 
      {
        if(data.status.success == true){
          window.location.href = this.redirect;
        }
        else{
          this.failed = true;
        }
        
       
    });
      
   
  }
}
