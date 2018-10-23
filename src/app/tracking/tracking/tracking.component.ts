import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  oid : number;
  constructor() { }

  ngOnInit() {
  }

  doTrack(){
    let a = this.oid;
  }

}
