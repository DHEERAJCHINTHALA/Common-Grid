import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'common-grid',
  templateUrl: './common-grid.component.html',
  styleUrl: './common-grid.component.scss'
})
export class CommonGridComponent {
  @Input() gridTitle : any;
  @Input() addTitle :string='';
  @Input() gridColumns:any;
  @Input() gridData:any[]=[];
  @Input() status:boolean=false;
  @Input() edit:boolean=false;
  @Output() dataActionFunctoin = new EventEmitter<any>();

  

  editeData(data:any)
  {
    if(data.IsActive){
      this.dataActionFunctoin.emit({eventActoin:'Edit',data});
    }
  
  }
  statesChang(data:any)
  {
    this.dataActionFunctoin.emit({eventActoin:'Delete',data});
  }
  save(){
    this.dataActionFunctoin.emit({eventActoin:'Save'});
  }
}
