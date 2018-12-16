import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styles: []
})
export class PagethreeComponent implements OnInit {
  private var_three:string;
  constructor() { 
    this.var_three = "I am from page three !!!";
  }

  ngOnInit() {
  }

}
