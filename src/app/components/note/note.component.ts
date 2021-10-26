import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../services/note.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  noteForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern("(?:\\s|^)(?![a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\\S+\\b(?=\\s|$)")]),
    content: new FormControl('', [Validators.required])
  });

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.noteService.createNote(this.noteForm.value);
    this.noteForm.reset();
  }

}
