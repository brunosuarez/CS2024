export interface Relatorio {
  data: Date;
  veiculo: number;
  tipoRegistro: 'Reserva' | 'Diário de Bordo';
  detalhes: string;
}
