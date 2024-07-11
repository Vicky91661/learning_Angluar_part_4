import { Component, EventEmitter, Input, Output } from '@angular/core';

function TransformedMessage(input:string){
  if(input==='')
    return
  return "Hi , Good Morning"+" "+input;
}

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.css'
})
export class ProfileImageComponent {
  @Input({transform:TransformedMessage}) greetingFromParent ='';
  @Output() myEvent = new EventEmitter<string>();
  sendDataToParent(){
    this.myEvent.emit(this.greetingFromParent)
  }
}
