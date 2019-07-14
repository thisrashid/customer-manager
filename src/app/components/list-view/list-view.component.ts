import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IResult, IResultInfo } from 'src/app/models/customer';

@Component({
  selector: 'cm-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {

  private _dataSource: IResult;
  get dataSource() {
    return this._dataSource;
  }
  @Input() set dataSource(data) {
    this._dataSource = data;
    this.isLoadingResults = false;
  }

  @Output() pageChange = new EventEmitter<IResultInfo>();

  displayedColumns: string[] = ['icon', 'name', 'address', 'city', 'state', 'orderTotal', 'link'];

  isLoadingResults = false;

  onPageChange($event) {
    this.isLoadingResults = true;
    this.pageChange.emit($event);
  }
}
