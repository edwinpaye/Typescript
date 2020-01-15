import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: any[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getList().subscribe(
      list => this.list = list
    );
  }

}
