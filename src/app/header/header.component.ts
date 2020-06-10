import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  list: any[] = [{id:1},{id:2}]
  @Input() mes: any;
  @Input() getData: any;
  @Input() home: any;
  @Output() callback = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.getData()

    console.log(this.home)

  }

  call() {
    this.callback.emit({name: 'd'});
  }


}
