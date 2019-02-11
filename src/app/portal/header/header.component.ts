import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isValid: boolean = true;
  modal_open: any;
  modalReference: NgbModalRef;
  changeValue(valid: boolean) {
  this.isValid = valid;
  }
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openLoginModal(requestFormModal, modopen) {
    this.modalReference =  this.modalService.open(requestFormModal, { centered: true });
    this.modal_open = modopen;
    console.log(this.modal_open);
   }
}
