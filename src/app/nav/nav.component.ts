import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account/shared/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  token: any;

  constructor(private accountservice: AccountService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.token = null;
    localStorage.removeItem('eq_user');
    localStorage.clear();
    this.accountservice.logout();
    
    this.router.navigate(['login']);

  }

  openOffcanvas1() {
    document.getElementById("myOffcanvas").style.width = "250px";
}
 openOffcanvas2() {
    document.getElementById("myOffcanvas2").style.display = "block";
}

 openOffcanvas() {
    document.getElementById("myOffcanvas").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}
 openNav3() {
    document.getElementById("myCanvasNav").style.width = "100%";
    document.getElementById("myCanvasNav").style.opacity = "0.8";  
}
 closeOffcanvas() {
    document.getElementById("myOffcanvas").style.width = "0%";
    document.getElementById("mainContent").style.marginLeft= "0%";
    document.body.style.backgroundColor = "#0E0A19";
    document.getElementById("myCanvasNav").style.width = "0%";
    document.getElementById("myCanvasNav").style.opacity = "0"; 
}
 closeOffcanvas2() {
    document.getElementById("myOffcanvas2").style.display = "none";
}
 openNav4() {
    document.getElementById("mySidenav").style.width = "100%";
}

 closeNav4() {
    document.getElementById("mySidenav").style.width = "0";
}

}
