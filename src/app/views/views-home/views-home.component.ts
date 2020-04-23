import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats=[
    {value:22,label:"# of users"},
    {value:900,label:'Revenue'},
    {value:50,label:'Reviews'}
  ]
  items=[
    {
      image:'/assets/biking.jpeg',
      title:'Biker',
      description:'This is hippy Biker'
    },
    {
      image:'/assets/mountain.jpeg',
      title:'Mountain',
      description:'This is Mountain'
    },
    {
      image:'/assets/tree.jpeg',
      title:'Tree',
      description:'This is Tree'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
