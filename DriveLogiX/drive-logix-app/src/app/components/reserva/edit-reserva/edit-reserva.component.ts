import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Reserva } from '../reserva';

@Component({
  selector: 'app-edit-reserva',
  templateUrl: './edit-reserva.component.html',
  styleUrls: ['./edit-reserva.component.scss']
})

export class EditReservaComponent implements OnInit {
  reserva: Reserva = {} as Reserva;
  idReserva: number | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const reservaIdParam = params.get('id');

      if (reservaIdParam) {
        this.idReserva = +reservaIdParam;
        this.loadReservaFromLocalStorage();
      }
    });
  }

  loadReservaFromLocalStorage() {
    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    const reservaToEdit = reservas.find((r: { idReserva: number | undefined; }) => r.idReserva === this.idReserva);

    if (reservaToEdit) {
      this.reserva = { ...reservaToEdit };
    }
  }

  parseDateTime() {
    const datetimeLocalString = this.reserva.dtHoraReserva;
    const datetime = new Date(datetimeLocalString);

    this.reserva.dtHoraReserva = datetime.toISOString();
  }

  updateReserva() {
    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');

    const index = reservas.findIndex((r: { idReserva: number | undefined; }) => r.idReserva === this.idReserva);

    if (index !== -1) {
      reservas[index] = { ...this.reserva };
      localStorage.setItem('reservas', JSON.stringify(reservas));

      alert('Reserva atualizada com sucesso');
      this.router.navigate(['/reserva/listagem']);
    }
  }

  cancelEdit() {
    this.router.navigate(['/reserva/listagem']);
  }
}
