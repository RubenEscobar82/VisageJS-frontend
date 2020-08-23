import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as JSZip from 'jszip';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  public saveProject(project){
    let bootstrap = "";
    let materializeCSS = "";
    let materializeJS="";
    let JQuery="";
    let fontawesome="";
    if(project.includeBootstrap){
      bootstrap=`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>`;
    }
    if(project.includeMaterialize){
      materializeCSS=`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`;
      materializeJS=`<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`;
    }
    if(project.includeJQuery){
      JQuery=`<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>`;
    }
    if(project.includeFontawesome){
      fontawesome=`<script src="https://use.fontawesome.com/093c973c68.js"></script>`;
    }

    let htmlContent= `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${project.name}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${bootstrap}
          ${materializeCSS}
          <link rel="stylesheet" href="css/style.css">
        </head>
      <body>
        ${project.htmlContent}
      </body>
        ${JQuery}
        ${materializeJS}
        ${fontawesome}
        <script src="js/script.js"></script>
    </html>`;
    let cssContent=project.cssContent;
    let jsContent=project.jsContent;

    let zip = new JSZip();

    zip.file("index.html", htmlContent);

    var scripts = zip.folder("js");
    scripts.file("script.js", jsContent);

    var css = zip.folder("css");
    css.file("style.css", cssContent);
    
    zip.generateAsync({type: "blob"}).then(function(content){
      FileSaver.saveAs(content, `${project.name}.zip`);
    });
  }

  saveSnippet(snippet){
    var snippet2save = new Blob([snippet.content], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(snippet2save, `${snippet.name}.${snippet.language}`);
  }
}
