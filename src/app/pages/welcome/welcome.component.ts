import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  display = "none";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    
  openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
  }

  navigateAbout(){
    this.router.navigate(['/about-me']);
  }

}
