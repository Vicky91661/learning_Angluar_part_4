import { Component } from '@angular/core';
import { ProfileImageComponent } from '../profile-image/profile-image.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileImageComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    greetingFromParent = "";
    FormData:string=''
    receivedDatafromChild = ''
    receivedData(e:string){
      this.receivedDatafromChild= e;
    }

    SaveFormData(e:any){
      this.FormData = e.target.value;
    }

    sendToChild(){
      this.greetingFromParent =  this.FormData;
  
      console.log(this.greetingFromParent)
    }
}
