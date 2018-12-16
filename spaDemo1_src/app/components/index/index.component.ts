import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private _router:Router) { }
  ngOnInit() {
  }
  public clickMe():any{
    //defining the URL Dynamically
    this._router.navigate(["/page_three"]);
  };
}
