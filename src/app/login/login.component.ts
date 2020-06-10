import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: [''],
      pwGroup: fb.group({
        password: [''],
        pwconfirm: [''],
      }),
    });
   }

  ngOnInit(): void { 
  }

  onSubmitHt(value) {
    console.log(value)
  }

  onSubmit() { 
    console.log(this.formModel.value)
    let uservalid = this.formModel.get('username').valid;
    let errors = this.formModel.get('username').errors;
    console.log(uservalid, JSON.stringify(errors)) 

    console.log(this.formModel.valid)
  }
}
