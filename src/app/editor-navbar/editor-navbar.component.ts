import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editor-navbar',
  templateUrl: './editor-navbar.component.html',
  styleUrls: ['./editor-navbar.component.css']
})
export class EditorNavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  collapse = true;

  @Output() guardar = new EventEmitter();

  constructor() { }  
  ngOnInit(): void {
  }
  actualizarFrame(){
    this.guardar.emit();
  }

}
