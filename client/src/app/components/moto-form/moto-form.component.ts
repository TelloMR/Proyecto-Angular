import { Component, OnInit, HostBinding } from '@angular/core';
import { Moto } from 'src/app/models/Moto';

import { MotosService } from 'src/app/services/motos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moto-form',
  templateUrl: './moto-form.component.html',
  styleUrls: ['./moto-form.component.css']
})
export class MotoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  moto: Moto = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private motoService: MotosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.motoService.getMoto(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.moto = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewMoto() {
    delete this.moto.created_at;
    delete this.moto.id;
    this.motoService.saveMoto(this.moto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/motos']);
        },
        err => console.error(err)
      )
  }

  updateMoto() {
    delete this.moto.created_at;
    this.motoService.updateMoto(this.moto.id, this.moto)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/motos']);
        },
        err => console.error(err)
      )
  }

}
