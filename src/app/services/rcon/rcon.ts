import { Injectable, signal, WritableSignal } from '@angular/core';
import Rcon from "rcon-ts"
import * as secrets from '../../../../secrets.json';

@Injectable({
  providedIn: 'root'
})
export class RconService {
  public connected: WritableSignal<boolean> = signal(false);
  private rcon: Rcon = null;

   constructor() {
    this.init();
   }

   init(): void {
      this.rcon = new Rcon({
        host: secrets.host, port: secrets.port, password: secrets.password
      });
      this.rcon.connect().then(() => {
        this.connected.set(true);
      })
    }

    executeCommand(command: string): Promise<any> {
      return this.rcon.send(command).then((response) => {
        console.log('command response', response);
      })
    }

    executeCommands(commands: string[]): Promise<any> {
      return Promise.all(commands.map((command) => this.rcon.send(command))).then((responses: any[]) => {
        console.log('commands responses', responses);
      })
    }

    disconnect() {
      this.rcon.disconnect();
      this.connected.set(false);
    }
}
