import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private list: any[];
  private switch: boolean;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getList().subscribe(
      list => this.list = list
    );
  }

}
