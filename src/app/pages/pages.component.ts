import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

// import { MenuItems } from '../shared/menu-items/menu-items';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  dir = 'ltr';
  green: boolean;
  blue: boolean;
  dark: boolean;
  minisidebar: boolean;
  boxed: boolean;
  danger: boolean;
  showHide: boolean;
  url: string;
  sidebarOpened;
  status = false;

  public showSearch = false;

  public config: PerfectScrollbarConfigInterface = {};
  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  clickEvent() {
    this.status = !this.status;
  }

  constructor(
    public router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    // public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
