import { Injectable } from '@angular/core';
import {NoteState, NoteStore} from "../stores/note.store";
import {NoteQuery} from "../queries/note.query";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private noteStore: NoteStore
  ) { }

  createNote(data: NoteState) {
    this.noteStore.add({
      ...data,
      id: Math.floor(Math.random() * 100),
      date: Date()
    });
  }


}
