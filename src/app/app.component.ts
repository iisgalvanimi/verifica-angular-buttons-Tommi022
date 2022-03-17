import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';

  list: string[] = []
  testo1:string="button1";
  testo2:string="button2";
  testo3:string="button3";
  testo4:string="button4";
  last:string="";

onClick1(){
  this.list.push(this.testo1)
  this.last = this.testo1
}

onClick2(){
  this.list.push(this.testo2)
  this.last = this.testo2
}

onClick3(){
  this.list.push(this.testo3)
  this.last = this.testo3
}

onClick4(){
  this.list.push(this.testo4)
  this.last = this.testo4
}
}

