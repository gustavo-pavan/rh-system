export interface IAvaliation {
    sequence: number;
    question?: string;
    validation?: boolean
  }
  
  export interface ISystemAvaliation {
    title: string
    sequence: number,
    avaliation: IAvaliation[]
  }