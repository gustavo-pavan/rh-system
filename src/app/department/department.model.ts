export interface ISector {
    department: number
    name: string
    id: number
  }
  export interface IDepartment {
    name: string
    id: number
  }
  export interface IFunction {
    sector: number
    name: string
    id: number
  }
  export interface ISalary{
    salary: number | string
    function: number
    id: number
  }