import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  listDisplay:boolean = false;
  view:number = 0;
  nav:boolean=false;
  carpetas: any = [
    {
      nombre: 'carpeta 1'
    },
    {
      nombre: 'carpeta 2'
    },
    {
      nombre: 'carpeta 3'
    },
    {
      nombre: 'carpeta 4'
    }
    
  ]
  myProjects = [
    {
      html: "<h1>¡Hola mundo!</h1>",
      css: "h1{color: red}",
      createdAt: "03-02-2020 09:45",
      updatedAt: "04-05-2020 12:37",
      author: "Ruben Escobar",
      title: "Hola mundo"
    },
    {
      html: "<center><button>Acción</button></center>",
      css: "button{color: white; background-color:blue}",
      createdAt: "08-07-2020 10:43",
      updatedAt: "10-07-2020 12:37",
      author: "Ruben Escobar",
      title: "Prueba de JS"
    },
    {
      html: "<h1><div class='div'>Esto es un div</div></h1>",
      css: ".div{background-color:green}",
      createdAt: "07-07-2020 09:45",
      updatedAt: "07-07-2020 12:37",
      author: "Ruben Escobar",
      title: "Prueba de CSS"
    }
  ];
  pinnedProjects = [
    {
      html: "<h1>¡Hola mundo!</h1>",
      css: "h1{color: yellow}",
      createdAt: "03-02-2020 09:45",
      updatedAt: "04-05-2020 12:37",
      author: "Arturo Contreras",
      title: "prueba de HTML fijado"
    },
    {
      html: "<center><button>Acción</button></center>",
      css: "button{color: white; background-color:green}",
      createdAt: "08-07-2020 10:43",
      updatedAt: "10-07-2020 12:37",
      author: "Jazmin Pérez",
      title: "Prueba de JS fijada"
    },
    {
      html: "<h1><div class='div'>Esto es un div</div></h1>",
      css: "body{background-color:brown}",
      createdAt: "07-07-2020 09:45",
      updatedAt: "07-07-2020 12:37",
      author: "Johanna Ruiz",
      title: "Prueba de CSS fijada"
    }
  ];
  deletedProjects=[
    {
      html: "<h1>Esto fué borrado :'c</h1>",
      css: "h1{color: red}",
      createdAt: "03-02-2020 09:45",
      updatedAt: "04-05-2020 12:37",
      author: "yo",
      title: "Borrado"
    }
  ];
  pickedProjects:any = this.myProjects;
  constructor() { }

  ngOnInit(): void {
  }
  switchDisplay(){
    this.listDisplay = !this.listDisplay;
  }
  mostrar(value){
    this.view=value;
    if(value==0){
      this.pickedProjects = this.myProjects;
    }
    if(value==1){
      this.pickedProjects = this.pinnedProjects;
    }
    if(value==2){
      this.pickedProjects = this.deletedProjects;
    }
  }
  toggleNav(){
    this.nav=!this.nav;
  }
}
