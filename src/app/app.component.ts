import { Component, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  frameworksInfo = [
    { name: 'Angular', versions: ['1.1.1', '1.2.1', '1.3.3'] },
    { name: 'React', versions: ['2.1.2', '3.2.4', '4.3.1'] },
    { name: 'Vue', versions: ['3.3.1', '5.2.1', '5.1.3'] },
  ];

  selectedFW = 'das';

  frontendEngineerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frontendEngineerForm = this.fb.group({
      firstName: fb.control('', [Validators.required]),
      lastName: fb.control('', [Validators.required]),
      dateOfBirth: fb.control('', [Validators.required]),
      framework: fb.control('', [Validators.required]),
      frameworkVersion: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required, Validators.email]),
      hobby: fb.array([fb.control('', [Validators.required])]),
    });
  }

  onSubmit(): void {
    if (this.frontendEngineerForm.valid) {
      console.log(this.frontendEngineerForm.value);
    } else {
      console.log('not valid');
    }
  }

  selectFramework(event: any) {
    this.frontendEngineerForm.patchValue({
      framework: event.target.value,
    });
    this.selectedFW;
  }

  addHobby(): void {
    this.hobby.push(this.fb.control(''));
  }

  removeHobby(index: number): void {
    this.hobby.removeAt(index);
  }

  get hobby(): FormArray {
    return this.frontendEngineerForm.get('hobby') as FormArray;
  }
}
