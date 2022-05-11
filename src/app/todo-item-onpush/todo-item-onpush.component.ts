import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-todo-item-onpush',
  templateUrl: './todo-item-onpush.component.html',
  styleUrls: ['./todo-item-onpush.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemOnpushComponent {

  @Input() data: string[];
  timeoutId: ReturnType<typeof setInterval> 

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
