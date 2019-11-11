import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {

@Input('n') nom : String;
@Input('ref') reference : String;
@Input('img') image : String;
@Input('p') prix : Number;
@Input('rep') repare : String;

check(){
  if ( this.repare=='réparé')
      return 0;
      else return 1;

}
repareitem(){
  this.repare='réparé';
  
}

  constructor() { }

  ngOnInit() {
  }

}
