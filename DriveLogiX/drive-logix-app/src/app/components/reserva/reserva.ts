export interface Reserva {
  dtHoraReserva: string;
  idReserva: number;
  idMotorista?: number | null;
  nomeMotorista: string;
  idVeiculo?: number | null;
  solicitanteReserva: string;
  rota: string;
}
