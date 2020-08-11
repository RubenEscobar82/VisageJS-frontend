import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.css']
})
export class FoldersListComponent implements OnInit {
  @Input() foldersList: any;
  @Output() renameFolder = new EventEmitter();
  @Output() deleteFolder = new EventEmitter();
  @Output() openFolder = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitRenameFolder(folderId, folderName){
    let renameEventInput={
      _id: folderId,
      name: folderName
    }
    this.renameFolder.emit(renameEventInput);
  }

  emitDeleteFolder(folderId){
    this.deleteFolder.emit(folderId);
  }
  
  emitOpenFolder(folderId){
    this.openFolder.emit(folderId);
  }

}
