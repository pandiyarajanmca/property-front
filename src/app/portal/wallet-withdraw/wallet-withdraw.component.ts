import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wallet-withdraw',
  templateUrl: './wallet-withdraw.component.html',
  styleUrls: ['./wallet-withdraw.component.scss']
})
export class WalletWithdrawComponent implements OnInit {
  widthdrawForm: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.widthdrawForm = this.formBuilder.group({
      withdrwTo: ['', Validators.required],
      currencyType: ['', Validators.required],
      amount: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  withdrawDetailSubmit(data) {
    console.log(data);
  }
}
