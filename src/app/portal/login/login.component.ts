import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() activeId;

  // @ViewChild(NgbTabset)
  // private tabset: NgbTabset;

loginForm: any;
signupForm: any;
idd: any;
  modalReference: NgbModalRef;
  constructor(private formBuilder: FormBuilder,  private modalService: NgbModal) {

   }

  ngOnInit() {
    this.idd =  this.activeId;
    this.loginForm = this.formBuilder.group({
      'userId': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': ['']
    });
    this.signupForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
      'agree': ['']
    });


  }
    submitSelection(requestFormModal) {
   this.modalReference =  this.modalService.open(requestFormModal, { centered: true });
  }
  login(data) {
    console.log(data);
  }
  signup(data) {
    console.log(data);
  }
}
