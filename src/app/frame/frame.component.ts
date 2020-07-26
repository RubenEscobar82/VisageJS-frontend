import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  frameWidth: string = '75rem';
  bootstrap: boolean = false;
  materialize: boolean = false;
  jquery: boolean = false;
  fontawesome: boolean = false;

  @Input() content: string;
  @Output() emitBootstrapToggle = new EventEmitter();
  @Output() emitMaterializeToggle = new EventEmitter();
  @Output() emitJQueryToggle = new EventEmitter();
  @Output() emitFontawesomeToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  toggleBootstrap(){
    this.bootstrap = !this.bootstrap;
    this.emitBootstrapToggle.emit(this.bootstrap);
  }
  toggleMaterialize(){
    this.materialize = !this.materialize;
    this.emitMaterializeToggle.emit(this.materialize);
  }
  toggleJQuery(){
    this.jquery = !this.jquery;
    this.emitJQueryToggle.emit(this.jquery);
  }
  toggleFontawesome(){
    this.fontawesome = !this.fontawesome;
    this.emitFontawesomeToggle.emit(this.fontawesome);
    
  }
  mostrarError(){
    alert("Hubo un error");
  }
  setFrameWidth(width){
    this.frameWidth = width;
  }
}
