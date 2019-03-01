import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private menu: MenuController,private http: HttpClient) { }

  openMenuStudent() {
    this.menu.enable(true, 'MenuStudent');
    this.menu.open('MenuStudent');
  }

  openMenuStaff() {
    this.menu.enable(true, 'MenuStaff');
    this.menu.open('MenuStaff');
  }

  ngOnInit() {
  }

}
