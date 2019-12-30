import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() record;
  @Output() recordEmitter = new EventEmitter();
  @Output() commentEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editRecord = () => {
    this.recordEmitter.emit({
      id: this.record.id,
      value: this.record.value
    });
  }

  editComment = () => {
    this.commentEmitter.emit({
      id: this.record.comment.id,
      text: this.record.comment.text
    })
  }

}
