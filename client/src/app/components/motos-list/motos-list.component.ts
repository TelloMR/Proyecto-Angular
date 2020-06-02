import { Component, OnInit, HostBinding } from '@angular/core';

import { MotosService } from '../../services/motos.service';
import { Moto } from 'src/app/models/Moto';

@Component({
  selector: 'app-motos-list',
  templateUrl: './motos-list.component.html',
  styleUrls: ['./motos-list.component.css'], 
})
export class MotosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  motos: any = [];

  constructor(private motoService: MotosService) { }


  ngOnInit() {
    this.getMotos();
  }

  getMotos() {
    this.motoService.getMotos()
      .subscribe(
        res => {
          this.motos = res;
        },
        err => console.error(err)
      );
  }

  deleteMoto(id: string) {
    this.motoService.deleteMoto(id)
      .subscribe(
        res => {
          console.log(res);
          this.getMotos();
        },
        err => console.error(err)
      )
  }

}
