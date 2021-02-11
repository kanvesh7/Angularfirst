import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  userName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  checkforUserName(): boolean {
    if (this.userName === '') {
      return true;
    }
    return false;
  }

  

}
