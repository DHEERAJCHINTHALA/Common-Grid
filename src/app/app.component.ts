import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Common-Grid';
  sceenTitles: string[] = ['State Code','State Name','Country Name','Created By','Created On','Updated By','Updated On','IsActive','Edit/Update'];
  gridVieWData: any[] = [];
  status: boolean = false;
  edit: boolean = false;
  operation(DATA:any)
  {

  }
}
