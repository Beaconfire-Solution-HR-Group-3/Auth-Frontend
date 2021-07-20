import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private http: HttpClient) { 
    this.userName = "";
    this.password = "";

  }

  ngOnInit(): void {
  }
  onSubmit() {
    let headers = new HttpHeaders({
      "Allow-Cross-Origin-Origin0": "*" });
    let options = { headers: headers };

    this.http.post<any>('http://localhost:9999/login', 
    {"userName": this.userName, "password": this.password, "redirect": ""}, options).subscribe(data => 
    console.log(data));
  }
}
