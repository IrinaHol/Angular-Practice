import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {isObservable} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'okten';
  //
  // onInputAction(xxx: HTMLInputElement): void {
  //   console.log((this.title));
  //   console.log(xxx.value);
  // }

  // user = {
  //   name: 'Ira',
  //   age: 100
  // };
  //
  // submit(form: NgForm): void {
  //   console.log(form);
  // }

  name = new FormControl('', [Validators.required, this.customFun]);
  age = new FormControl(123);

  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  ddd(myForm: FormGroup): void {
    console.log(myForm);
  }

  customFun(inputData: AbstractControl): any {
    if (inputData.value === 'fuck') {
      return {
        error: true,
        msg: 'fuck is present'
      };
    } else {
      return null;
    }
  }
}
