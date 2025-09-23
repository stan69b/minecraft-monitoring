import { Component, inject, OnInit } from '@angular/core';
import { RconService } from '../../services/rcon/rcon';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  private readonly rconService: RconService = inject(RconService);

  ngOnInit(): void {
    
  }  

  refreshList(): void {
    this.rconService.executeCommand('list').then((response) => {
      console.log('response', response);
    })
  }
}
