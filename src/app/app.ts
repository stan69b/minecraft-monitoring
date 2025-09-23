import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RconService } from './services/rcon/rcon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('minecraft-monitoring');
  private readonly rconService: RconService = inject(RconService);
}
