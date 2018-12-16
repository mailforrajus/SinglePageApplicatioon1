//import Injectable
//Injectable is used to create the Custom Service
//we will implement Route Guards by using Custom Services Only
import { Injectable } from "@angular/core";
//import CanActivate
//CanActivate is used to give the permission to enter into main routes
//import CanDeactivate
//CanDeactivate is used to give the permission to leave Main Routes
//import CanActivateChild
//CanActivateChild is used to give the permission to enter into child routing
import { CanActivate,
         CanDeactivate,
         CanActivateChild } from "@angular/router";
//import PagetwoComponent
//we want to apply CanDeactivate to PagetwoComponent
import { PagetwoComponent } from "../components/pagetwo/pagetwo.component";
//use Injectable
@Injectable()
//export the class
export class authGuards implements CanActivate,
                                   CanDeactivate<PagetwoComponent>,
                                   CanActivateChild{

        canActivate():boolean{
            return confirm("Do you want to enter into page_two ??");
        };
        canDeactivate():boolean{
            return confirm("Do you want to leave page_two ??");
        };
        canActivateChild():boolean{
            return confirm("Do you want to enter child_one ??");
        };
};









