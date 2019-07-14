import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IResult, IResultInfo } from 'src/app/models/customer';

@Component({
  selector: 'cm-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  breakpoint = 4;
  rowHeight = '3:2';
  private _dataSource: IResult;
  private cardWidth: number;
  private cardHeight = 185;

  get dataSource() {
    return this._dataSource;
  }
  @Input() set dataSource(data) {
    this._dataSource = data;
    this.isLoadingResults = false;
  }

  @Output() pageChange = new EventEmitter<IResultInfo>();

  isLoadingResults = false;

  ngOnInit() {
    this.calculateBreakpoint(window.innerWidth);
  }

  private calculateBreakpoint = (innerWidth) => {
    if (innerWidth <= 640) {
      this.breakpoint = 1;
    } else if (innerWidth <= 930) {
      this.breakpoint = 2;
    } else if (innerWidth <= 1220) {
      this.breakpoint = 3;
    } else {
      this.breakpoint = 4;
    }

    this.cardWidth = innerWidth / this.breakpoint;
    this.rowHeight = `${this.cardWidth}:${this.cardHeight}`;
  }

  onPageChange($event) {
    this.isLoadingResults = true;
    this.pageChange.emit($event);
  }

  onResize($event) {
    this.calculateBreakpoint($event.target.innerWidth);
  }
}
