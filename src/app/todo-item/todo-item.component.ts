import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  SimpleChanges,
} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input() data!: string[];
  timeoutId: null | ReturnType<typeof setInterval> = null

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.timeoutId = setInterval(() => {
      this.cd.detectChanges();
    },2500)
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearInterval(this.timeoutId);
    }
  }
}