import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { Note } from '../../note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  notes = {};

  constructor(private _dataService: DataService, private _router: Router ) { }

  ngOnInit() {
    this._dataService.notesObserver.subscribe(
      (notes) => {this.notes = notes}
    );
    this._dataService.retrieveAll();
  }

  getNote(note_id) {
    this._dataService.getNote(note_id);
    this._router.navigateByUrl('edit');
  }

  deleteNote(note_id) {
    this._dataService.removeNote(note_id);
    this._dataService.retrieveAll();
  }

}
