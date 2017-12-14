import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Note } from './note';

@Injectable()
export class DataService {
  notesObserver: BehaviorSubject<any[]> = new BehaviorSubject([]);
  noteUpdater: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  retrieveAll() {
    this._http.get('http://localhost:8000/notes').subscribe(
      (notes: any[]) => { this.notesObserver.next(notes) }, 
      (errorResponse) => { console.log(errorResponse) }
    );
  }
  getNote(note_id) {
    this._http.get('http://localhost:8000/notes/'+ note_id).subscribe(
      (note: any[]) => { this.noteUpdater.next(note); console.log(note); },
      (errorResponse) => { console.log(errorResponse) }
    );
  }
  createNote(note: Note) {
    this._http.post('http://localhost:8000/notes', note).subscribe(
      (response) => { this.retrieveAll() },
      (errorResponse) => { console.log(errorResponse) }
    );
  }
  updateNote(note: Note, note_id) {
    this._http.put('http://localhost:8000/notes/'+ note_id, note).subscribe(
      (response) => { this.retrieveAll() },
      (errorResponse) => { console.log(errorResponse) }
    );
  }
  removeNote(note_id) {
    this._http.delete('http://localhost:8000/notes/' + note_id).subscribe(
      (response) => { this.retrieveAll() },
      (errorResponse) => { console.log(errorResponse) }
    );
  }
  

}
