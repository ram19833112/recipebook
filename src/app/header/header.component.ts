import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../shared/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  constructor(private dataService: DataStoreService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataService.storeData();
  }

  onFetchData() {
    this.dataService.fetchData().subscribe();
  }

}
