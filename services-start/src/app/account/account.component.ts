import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../core/services/logging.service';
import { AccountsService } from '../core/services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string; };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {

  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
