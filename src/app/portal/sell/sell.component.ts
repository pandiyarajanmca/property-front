import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormArray } from '@angular/forms';
import { ImageCroppedEvent } from './image-cropper/image-cropper.component';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  closeResult: string;

  BasicDetailForm: FormGroup;
  PriceTextForm: FormGroup;
  step = 1 ;
  
  public toggleMenu: boolean = true;
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { 
  
  }
  public clickToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
  ngOnInit() {
  
  
    this.BasicDetailForm = this.formBuilder.group({
      Title: ['', Validators.required],
      PropertyType: ['0', Validators.required],
      Subcategory: ['0', Validators.required],
      City: ['', Validators.required],
      Area: ['', Validators.required], 
      Address: ['', Validators.required],
      
    });
    this.PriceTextForm = this.formBuilder.group({
      AcceptedCurrency: ['0', Validators.required],
      PriceInUSD: ['', Validators.required],
      PriceInETH: ['', Validators.required],
      Bedrooms: ['', Validators.required],
      Baths: ['', Validators.required], 
      Rooms: ['', Validators.required],
      LivingArea: ['', Validators.required],
      Floor: ['', Validators.required],
      TotalFloor: ['', Validators.required],
      AvailableFrom: ['', Validators.required],
      Description: ['', Validators.required], 
      Build: ['', Validators.required],
      Furnished: ['', Validators.required],
      CarSpaces: ['', Validators.required],
      Address: ['', Validators.required],

      // propertyImage:this.formBuilder.array([{img1: ['', Validators.required]} ,{img2: ['', Validators.required]}]),
      // propertyImage: this.formBuilder.array(['img1','img2'])
      // propertyImage: new FormArray([new FormControl(['img1','img2'])]),
     
    });
          
  }

  BasicDetailSubmit() {
    console.log(this.BasicDetailForm);
    this.step++;
   
    
  }
 
  PriceTextSubmit() {
    console.log(this.PriceTextForm);
    this.step++;
    
  }


  BasicDetail(){
    
  }
  imageChangedEvent: any = '';
croppedImage: any = '';

fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.PriceTextForm.patchValue({
      img: event.base64
    });
}
imageLoaded() {
    // show cropper
}
loadImageFailed() {
    // show message
}


open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}
