import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'  
})

export class AppComponent {
  appTitle: string = 'Welcome';
  appStatus: boolean = true;
}