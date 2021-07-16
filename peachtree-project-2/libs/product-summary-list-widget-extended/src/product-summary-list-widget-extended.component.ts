import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pt-product-summary-list-widget-extended',
  templateUrl: 'product-summary-list-widget-extended.component.html',
  styles: [
  ]
})
export class ProductSummaryListWidgetExtendedComponent implements OnInit {

  @Output() selectedAccount = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedAccountOutput(selectedAccountId: string){
    this.selectedAccount.emit(selectedAccountId);
  }
}
