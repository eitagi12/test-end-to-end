import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
public firstInput: number = 0;
public secondInput: number = 0;
public conclusion: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  getNumber(ele:any, event :any){
if (ele == 'First') {
  this.firstInput = parseInt(event.target.value)
}else if (ele == 'Second'){
  this.secondInput = parseInt(event.target.value)
}
  }

  calculateNumber() {
    console.log("first",this.firstInput)
    console.log("second",this.secondInput)
    this.conclusion = this.firstInput + this.secondInput;
  }

  clearNumber() {
    this.firstInput = 0
    this.secondInput = 0
    this.conclusion = 0
  }
}
