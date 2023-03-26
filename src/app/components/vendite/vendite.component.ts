import { Component } from '@angular/core';
import { VeicoliService } from 'src/app/service/veicoli.service';
import { VenditeService } from 'src/app/service/vendite.service';

@Component({
  selector: 'app-vendite',
  templateUrl: './vendite.component.html',
  styleUrls: ['./vendite.component.css']
})
export class VenditeComponent {

  constructor(public venditeService: VenditeService, public veicoliService: VeicoliService){}

}
