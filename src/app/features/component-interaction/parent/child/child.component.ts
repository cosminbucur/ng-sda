import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() childInput: string;

  @Output() childOutputEvent = new EventEmitter<string>();

  public childReply = 'ok fine!';

  public childEmitOutput(): void {
    console.log('child emit output');
    this.childOutputEvent.emit(this.childReply);
  }
}
