import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild("bgVideo") bgVideoElement: ElementRef;
  constructor() { }

  ngOnInit() {
    this.bgVideoElement.nativeElement.muted = true;
    this.bgVideoElement.nativeElement.loop = true;
    this.bgVideoElement.nativeElement.play();
  }

}
