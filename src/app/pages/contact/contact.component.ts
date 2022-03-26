import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NetlifyFormsService } from 'src/app/services/netlify-forms.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private _contactForm: FormGroup;
  errorMsg = '';

  constructor(private formBuilder: FormBuilder, private netlifyForms: NetlifyFormsService) {
    this._contactForm = this.formBuilder.group({
      name: ['', [
            Validators.required,
            Validators.maxLength(50)
          ],
        ],
      email: ['', [
            Validators.required,
            Validators.email,
            Validators.maxLength(50)
          ]
        ],
      subject: '',
      message: ['', [
            Validators.required,
            Validators.maxLength(200)
          ]
        ]
    });
  }

  ngOnInit(): void {
  }

  get contactForm(): FormGroup {
    return this._contactForm;
  }

  handleSubmit(): void {
    const name = this._contactForm.value.name.trim();
    const email = this._contactForm.value.email.trim();
    const subject = this._contactForm.value.subject.trim();
    const message = this._contactForm.value.message.trim();
    // alert('The form has sended');
    this.netlifyForms.submitFeedback(this._contactForm.value).subscribe(
      () => {
        this._contactForm.reset({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      },
      err => {
        this.errorMsg = err
      }
    );
  }

}
