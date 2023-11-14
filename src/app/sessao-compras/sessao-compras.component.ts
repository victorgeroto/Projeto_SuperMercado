import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sessao-compras',
  templateUrl: './sessao-compras.component.html',
  styleUrls: ['./sessao-compras.component.scss']
})
export class SessaoComprasComponent {
  
  Comprar(){
    Swal.fire({
      title: "Voce deseja comprar esse Produto?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado ao carrinho", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar o carrinho", "", "error");
      }
    });
  }
}

