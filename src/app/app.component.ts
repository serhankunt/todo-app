import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div class="container" style="margin-top: 30px;">
  <h1>To Do App</h1>
  <hr>
 <div class="container">
<div class="row">
  <div class="col-md-6">
  <div class="form-group">
    <label for="work">Yapılacak İş</label>
    <input [(ngModel)]="work" type="text" class="form-control" id="work" name="work">
  </div>
 
  </div>
  <div class="col-md-6">
  <div class="form-group">
    <label for="done">Tamamlanan İş</label>
    <input [(ngModel)]="done" type="text" class="form-control" id="done" name="done">
  </div>
  </div>
</div>
 </div>
  <div class="form-group mt-2">
    <button class="btn btn-outline-primary w-100" (click)="save()">Kaydet</button>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
      <hr>
      <ul>
          <h1>Yapılacak Listesi</h1>
          <li *ngFor="let todo of toDoList let i=index">{{i}}-{{todo}}
          <button (click)="change(i)">Change Situation</button>
          <button (click)="edit(i)" >Edit</button>
          <button (click)="removeToDoList(i)">Remove</button>
          <div *ngIf="showEdit">
          <label for="edit" >Düzenle</label>
          <input [(ngModel)]="editText" type="text" >
          <button (click)="completeEdit(i)">Complete edit</button>
          
          </div>
        </li>
          
      </ul>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <hr>
        <ul>
          <h1>Tamamlanan Liste</h1>
          <li *ngFor="let done of completed let i=index">{{done}}
          <button (click)="removeDoneList(i)">Remove</button>
        </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  
  `
})
export class AppComponent {
  work:string = "";
  done:string = "";
  editText:string = "";
  showEdit:boolean = false;

  toDoList : string[] = [];
  completed : string[] = [];

  save(){
    if(this.work !==""){
      this.toDoList.push(this.work);
      this.work = "";
    }
    
  }

  change(index:number){
    if (index >= 0 && index < this.toDoList.length) {
      const completedItem = this.toDoList.splice(index, 1)[0];
      this.completed.push(completedItem);
    }
  }

  edit(index:number){
    this.showEdit = true;
  }

  completeEdit(index:number){
    this.showEdit = false;
    //this.toDoList.splice(index,1)[0] = this.editText ; 
    this.toDoList[index] = this.editText;
    this.editText = "";
  }

  removeToDoList(index:number){
    this.toDoList.splice(index,1)[0];
  }

  removeDoneList(index:number){
    this.completed.splice(index,1)[0];
  }


}
