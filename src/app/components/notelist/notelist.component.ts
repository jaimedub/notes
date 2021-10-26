import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Subscription} from "rxjs";
import {NoteQuery} from "../../queries/note.query";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {

  notes: any[] = [];
  demo = Subscription;

  constructor(
    private noteService: NoteService,
    private noteQuery: NoteQuery
  ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.noteQuery.selectAll().pipe(
      tap(response => this.notes = response)
    ).subscribe();
  }


}
