import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Veicolo } from '../../model/veicolo.model';
import { VeicoliService } from '../../service/veicoli.service';
import { StatoVeicolo } from 'src/app/model/stati.veicoli.enum';

@Component({
  selector: 'app-veicoli',
  templateUrl: './veicoli.component.html',
  styleUrls: ['./veicoli.component.css']
})
export class VeicoliComponent{


  constructor(public veicoliService: VeicoliService, private toastr: ToastrService) { }

  aggiungiVeicolo() {
    // TODO: implementare la logica per l'aggiunta di un veicolo
  }

  eliminaVeicolo(veicolo: Veicolo){
    if(window.confirm('Sicuro di voler eliminare il veicolo ' + veicolo.marca + ' ' + veicolo.modello + '?')){
      const indx = this.veicoliService.listaVeicoli.indexOf(veicolo);
      this.veicoliService.listaVeicoli.splice(indx, 1)
      this.toastr.success("Veicolo eliminato con successo")
    }
  }
}
