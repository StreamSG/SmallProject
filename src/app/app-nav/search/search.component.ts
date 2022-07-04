import { Component, OnInit } from '@angular/core';

import { AccountsService } from 'src/app/shared/accounts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent {
  accounts: {name: string, status: string}[] = [];

  constructor( private accountsService: AccountsService) {}

  keyPressCheck(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  onRunBAN(name: string) {
    if(name.length === 9) {
      this.accountsService.addAccount(name);
    } else {
      alert('Please enter a valid 9 digit account number!')
    }
  };

    ngOnInit(): void {
      this.accounts = this.accountsService.accounts
    }


}
