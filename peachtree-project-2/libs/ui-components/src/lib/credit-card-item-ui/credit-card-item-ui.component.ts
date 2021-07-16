import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-credit-card-item-ui',
  templateUrl: "./credit-card-item-ui.component.html",
  styleUrls: ["./credit-card-item-ui.component.css"]
})
export class CreditCardItemUiComponent implements OnInit {
  @Input() title: string;
  @Input() amount: string;
  @Input() currency: string;
  @Input() availableBalance: number;
  @Input() creditLimit: number;

  constructor() {
    this.title = "";
    this.amount = "";
    this.currency = "";
    this.availableBalance = NaN;
    this.creditLimit = NaN;


   }

  ngOnInit(): void {
  }

}
