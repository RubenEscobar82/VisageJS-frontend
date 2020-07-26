import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  content: string = "";
  @Input() lenguaje:string;
  @Input() lenguajeNombre: string;
  @Output() contentFromEditor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  updateContent(){
    this.contentFromEditor.emit(this.content);
  }
}
