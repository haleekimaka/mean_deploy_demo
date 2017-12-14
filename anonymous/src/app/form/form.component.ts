import { Component, OnInit } from '@angular/core';
import { Note } from './../note';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newNote: Note = new Note();
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit( formData: NgForm ,note: Note) {
    this._dataService.createNote(this.newNote);
    this.newNote = new Note();
    this._router.navigateByUrl('list');
  }
}
