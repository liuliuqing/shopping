import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mes: string = '这是首页的呀';

  @ViewChild('header') header: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  getData() {
    console.log('home的getData方法')
  }

  ngAfterViewInit(){
    console.log(this.header.list)
  }

  back(event) {
    console.log(event)
  }

}
