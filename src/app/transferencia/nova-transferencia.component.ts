import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output} from "@angular/core";
import { Transferencia } from '../models/transferencia.model';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){}

  transferir(){
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      alert("Transferência cadastrada com sucesso");
      this.limparCampos();
    }, error => alert("Ocorreu um erro: " + error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
