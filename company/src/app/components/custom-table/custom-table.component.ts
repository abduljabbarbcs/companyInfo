import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input()
  private data:any;
  @Input()
  private isLogIn:any;
  @Output()
  edit:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  editEntry(entry){
    this.edit.emit(entry)
  }
}
