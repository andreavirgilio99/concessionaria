import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Veicolo } from 'src/app/model/veicolo.model';
import { VeicoliService } from 'src/app/service/veicoli.service';

@Component({
  selector: 'app-dettagli-veicolo',
  templateUrl: './dettagli-veicolo.component.html',
  styleUrls: ['./dettagli-veicolo.component.css']
})
export class DettagliVeicoloComponent implements OnInit {

  currPic = 0;
  veicoloDettagli: Veicolo | undefined;
  updateVeicoloForm!: FormGroup

  constructor(public veicoliService: VeicoliService) { }

  ngOnInit(): void {
    this.veicoliService.onChange().subscribe(data => { //può arrivare il veicolo, l'id del veicolo o undefined per far chiudere il modal
      if (data) {
        if (typeof data != 'number') {
          this.veicoloDettagli = data;
        }
        else {
          this.veicoloDettagli = this.veicoliService.listaVeicoli.find(veic => veic.id == data)!
        }

        this.formSetup()
        document.getElementById('openModal')!.click()
      }
      else {
        this.reset()
      }
    })
  }

  salvaVeicolo() { }

  changePic(direction: string) {
    if (direction == 'forward') {
      if (this.currPic == (this.veicoloDettagli!.foto.length - 1)) {
        this.currPic = 0;
      }
      else {
        this.currPic = this.currPic + 1;
      }
    }
    else {
      if (this.currPic == 0) {
        this.currPic = this.veicoloDettagli!.foto.length - 1;
      }
      else {
        this.currPic = this.currPic - 1
      }
    }
  }

  reset() {
    this.veicoloDettagli = undefined;
    this.currPic = 0;
    this.updateVeicoloForm.reset();
  }

  formSetup() {
    this.updateVeicoloForm = new FormGroup({
      marca: new FormControl(this.veicoloDettagli!.marca),
      modello: new FormControl(this.veicoloDettagli!.modello),
      anno: new FormControl(this.veicoloDettagli!.anno),
      targa:  new FormControl(this.veicoloDettagli!.targa),
      dataArrivo:  new FormControl(formatDate(this.veicoloDettagli!.dataArrivo, 'yyyy-MM-dd', 'en')),
      note: new FormControl(this.veicoloDettagli!.note),
      prezzo: new FormControl(this.veicoloDettagli!.prezzo)
    })
  }
}
