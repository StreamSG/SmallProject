import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
  accounts: {name: string; status: string;}[] = [];

      constructor(private loggingService: LoggingService) {}



      addAccount(name: string) {
        this.accounts.push({name: name, status: 'unlocked'});
        this.loggingService.logNewBan(name);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }

      removeAccount(id: number) {
        console.log(id);
        this.accounts.splice(id, 1);
        this.loggingService.logBanRemoved(id);
      }

}