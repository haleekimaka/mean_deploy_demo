import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { Note } from '../../note';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  note;
  temp_content = new Note();
  constructor(private _dataService: DataService, private _router: Router ) { }

  ngOnInit() {
    this._dataService.noteUpdater.subscribe( 
      (note) => { if (note['content'] != 'undefined') 
      {this.note = note;}; 
    });
  }

  submitEdits(){
    console.log(this.temp_content);
    console.log(this.note['_id']);
    this._dataService.updateNote(this.temp_content, this.note['_id']);
    this._router.navigateByUrl('list');
    this.temp_content = new Note ();
  }

}
