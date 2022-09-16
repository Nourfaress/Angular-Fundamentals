import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentComponent: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  trigger(component: string): void {
    this.currentComponent = component;
  }

}
