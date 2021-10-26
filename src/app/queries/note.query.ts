import { QueryEntity } from '@datorama/akita';
import {NoteState, NoteStore} from "../stores/note.store";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class NoteQuery extends QueryEntity<NoteState> {
  constructor(protected store: NoteStore) {
    super(store);
  }
}
