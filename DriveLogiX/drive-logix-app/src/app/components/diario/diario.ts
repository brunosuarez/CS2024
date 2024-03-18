export interface Diario {
    idDiario: number | null;
    dtHoraInicio: string; 
    dtHoraTermino: string; 
    localPartida: string;
    localDestino: string;
    qtdeParadas: number | null; 
    quilometragemPercorrida: number | null; 
    observacoes: string;
    idVeiculo: number | null; 
    idMotorista: number| null; 
  }
  