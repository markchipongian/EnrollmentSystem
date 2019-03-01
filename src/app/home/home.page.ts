import { Component } from '@angular/core';
import { Router } from'@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any = {};

  constructor(public router: Router,private http: HttpClient){
  }

  submit(){
    console.log("submit button is clicked");
    //this.router.navigate(['dashboard']);
    
    var link = 'localhost/EProject/API/login.php';
    var myData = JSON.stringify({username: this.data.username});

    this.http.post(link, myData)
    .subscribe(data => {
    this.data.response = data["_body"]; 
    }, error => {
    console.log("Oooops!");
    });
  }

}
