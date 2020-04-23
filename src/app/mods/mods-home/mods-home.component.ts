import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen=false
  items=[
    {title:'How to login into website',content:'Using Login Dumbass!!!'},
    {title:'How to login into website',content:'Using Login Dumbass!!!'},
    {title:'How to login into website',content:'Using Login Dumbass!!!'},
  ]
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.modalOpen=!this.modalOpen
  }

}
