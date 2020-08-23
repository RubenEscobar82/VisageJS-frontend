import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private REST_API_SERVER = 'http://localhost:8888'
  constructor( private httpClient: HttpClient) { }

  public verifyEmail(signupEmail){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.post(`${this.REST_API_SERVER}/usuarios/signupemail`, signupEmail, {withCredentials: true, headers: hdrs});
  }
  public saveUser( newUser ){
    return this.httpClient.post(`${this.REST_API_SERVER}/usuarios`, newUser, {withCredentials: true});
  }
  public signin( credentials ){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.post(`${this.REST_API_SERVER}/usuarios/signin`, credentials, {withCredentials: true, headers: hdrs});
  }
  public getCarpetas(){
    return this.httpClient.get(`${this.REST_API_SERVER}/carpetas`, {withCredentials: true});
  }
  public addFolder(folderName){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.post(`${this.REST_API_SERVER}/carpetas`,{folderName: folderName}, {withCredentials: true, headers: hdrs});
  }
  public deleteFolder(folderId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json');
    return this.httpClient.delete(`${this.REST_API_SERVER}/carpetas/${folderId}`, {withCredentials: true, headers: hdrs}); 
  }
  public updateFolder(folderId, folderName){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json');
    return this.httpClient.put(`${this.REST_API_SERVER}/carpetas`, {folderId: folderId, folderName: folderName}, {withCredentials: true, headers: hdrs});
  }
  public saveProject(content2Save, folderId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.post(`${this.REST_API_SERVER}/proyectos`,{content2Save: content2Save, folderId}, {withCredentials: true, headers: hdrs});
  }
  public updateProject(content2Save, folderId, projectId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.put(`${this.REST_API_SERVER}/proyectos`,{content2Save: content2Save, folderId: folderId, projectId: projectId}, {withCredentials: true, headers: hdrs});
  }
  public getProject( folderId, projectId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.get(`${this.REST_API_SERVER}/proyectos/${folderId}/${projectId}`, {withCredentials: true, headers: hdrs});
  }
  public updateProjectProperties(data){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.put(`${this.REST_API_SERVER}/proyectos/properties/`, data, {withCredentials: true, headers: hdrs});
  }

  public saveSnippet(snippetName, language, folderId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.post(`${this.REST_API_SERVER}/snippets`,{name: snippetName, language: language, folderId: folderId}, {withCredentials: true, headers: hdrs});
  }
  public getSnippet(folderId, snippetId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.get(`${this.REST_API_SERVER}/snippets/${folderId}/${snippetId}`, {withCredentials: true, headers: hdrs});
  }
  public updateSnippet(snippetData){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.put(`${this.REST_API_SERVER}/snippets`,snippetData, {withCredentials: true, headers: hdrs});
  }
  public deleteContent(folderId, contentId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.delete(`${this.REST_API_SERVER}/proyectos/${folderId}/${contentId}`,{withCredentials: true, headers: hdrs});
  }
  public getDeletedItems(){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.get(`${this.REST_API_SERVER}/deleted`,{withCredentials: true, headers: hdrs});
  }
  public retoreItem(contentId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.put(`${this.REST_API_SERVER}/deleted`,{contentId: contentId},{withCredentials: true, headers: hdrs});
  }

  public hardDelete(contentId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.delete(`${this.REST_API_SERVER}/deleted/${contentId}`,{withCredentials: true, headers: hdrs});
  }

  public searchContent(searchText){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.get(`${this.REST_API_SERVER}/proyectos/${searchText}`,{withCredentials: true, headers: hdrs});
  }

  public getAccountData(){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.get(`${this.REST_API_SERVER}/usuarios`,{withCredentials: true, headers: hdrs});
  }

  public updateGeneralConfig(data){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.put(`${this.REST_API_SERVER}/usuarios/general_config`, {data: data}, {withCredentials: true, headers: hdrs});
  }

  public updateSecurityConfig(data){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.put(`${this.REST_API_SERVER}/usuarios/security_config`, {data: data}, {withCredentials: true, headers: hdrs});
  }

  public updatePlanConfig(pro){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.put(`${this.REST_API_SERVER}/usuarios/plan_config`, {pro: pro}, {withCredentials: true, headers: hdrs});
  }

  public updateCardConfig(data){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.put(`${this.REST_API_SERVER}/usuarios/card_config`, {data: data}, {withCredentials: true, headers: hdrs});
  }

  public deleteUser(){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.delete(`${this.REST_API_SERVER}/usuarios`, {withCredentials: true, headers: hdrs});
  }
  public exploreProjects(){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.get(`${this.REST_API_SERVER}/explore`, {withCredentials: true, headers: hdrs});
  }

  public searchPublicProjects(searchText){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.get(`${this.REST_API_SERVER}/explore/${searchText}`, {withCredentials: true, headers: hdrs});
  }

  public addPin(data){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.post(`${this.REST_API_SERVER}/pinned`, data, {withCredentials: true, headers: hdrs});
  }

  public removePin(projectId){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.delete(`${this.REST_API_SERVER}/pinned/${projectId}`, {withCredentials: true, headers: hdrs});
  }

  public getPins(){
    var hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json')
    return this.httpClient.get(`${this.REST_API_SERVER}/pinned`, {withCredentials: true, headers: hdrs});
  }
}
