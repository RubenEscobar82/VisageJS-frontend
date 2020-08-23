import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  frameWidth: string = '75rem';
  @Input() bootstrap: boolean;
  @Input() materialize: boolean;
  @Input() jquery: boolean;
  @Input() fontawesome: boolean;

  @Input() content: string;
  resize: boolean = true;
  @Output() emitBootstrapToggle = new EventEmitter();
  @Output() emitMaterializeToggle = new EventEmitter();
  @Output() emitJQueryToggle = new EventEmitter();
  @Output() emitFontawesomeToggle = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
    if(window.innerWidth<=790){
      this.frameWidth = '48rem';
      this.resize = false;
    }
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
