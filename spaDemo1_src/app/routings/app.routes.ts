import { Routes } from "@angular/router";
import { PageoneComponent } 
                    from "../components/pageone/pageone.component";
import { PagetwoComponent } 
                    from "../components/pagetwo/pagetwo.component";
import { PagethreeComponent } 
                    from "../components/pagethree/pagethree.component";
import { ChildoneComponent } 
                    from "../components/childone/childone.component";
import { ChildtwoComponent } 
                    from "../components/childtwo/childtwo.component";
import { ChildthreeComponent } 
                    from "../components/childthree/childthree.component";
import { authGuards } from "../guards/auth.guards";

export const appRoutes:Routes = [
    {path:"",component:PageoneComponent,
    children:[{path:"child_one",component:ChildoneComponent}],
    canActivateChild:[authGuards]},
    
    {path:"page_two",component:PagetwoComponent,
    children:[{path:"child_two",component:ChildtwoComponent}],
    canActivate:[authGuards],
    canDeactivate:[authGuards]},
    
    {path:"page_three",component:PagethreeComponent,
    children:[{path:"child_three",component:ChildthreeComponent}]}
];