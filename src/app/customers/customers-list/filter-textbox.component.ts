import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: ` Filter: <input type="text" [(ngModel)]="filter" /> `,
})
export class FilterTextboxComponent implements OnInit {
  private _filter!: string;
  @Input() get filter() {
    return this._filter; //returns the value passed through
  }

  set filter(value: string) {
    this._filter = value; //updates the variable
    this.changed.emit(this._filter); //emits the value of the filter to the parent component
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>(); //sends the data as string

  constructor() {}

  ngOnInit(): void {}
}
