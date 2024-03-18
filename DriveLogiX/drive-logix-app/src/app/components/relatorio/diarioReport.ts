export interface DiarioReport {
    idDiario: number;
    idVeiculo: number;
    idMotorista: number;
    dtHoraInicio: Date;
    dtHoraTermino: Date;
    localPartida: string;
    localDestino: string;
    qtdeParadas: number;
    quilometragemPercorrida: number;
    observacoes: string;
  }
  