import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';
import {Injectable} from "@angular/core";

export interface NoteState {
  id: number | string;
  title: string;
  content: string;
  date: string;
}

export function createInitialState(): NoteState {
  return {
    id: '',
    title: '',
    content: '',
    date: ''
  };
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'note' })
export class NoteStore extends EntityStore<NoteState> {
  constructor() {
    super(createInitialState());
  }
}
