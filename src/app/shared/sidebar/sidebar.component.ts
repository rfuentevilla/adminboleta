import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MenuItems } from '../menu-items/menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {

  public config: PerfectScrollbarConfigInterface = {};
  mobileQuery: MediaQueryList;

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;
  status: boolean = true;

  itemSelect: number[] = [];
  parentIndex: number;
  childIndex: number;


  setClickedRow(i: number, j: number ) {
    this.parentIndex = i;
    this.childIndex = j;
  }

  subclickEvent() {
     this.status = true;
  }

  scrollToTop() {
     document.querySelector('.page-wrapper').scroll({
     top: 0,
     left: 0
   });
  }


  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
