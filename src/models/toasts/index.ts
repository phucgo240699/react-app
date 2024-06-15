export interface IToast {
  id: number;
  message: string;
  needTranlation?: boolean;
}
export class InfoToast implements IToast {
  constructor(
    public message: string,
    public id: number = 0,
    public needTranslation: boolean = false
  ) {}
}
export class WarningToast implements IToast {
  constructor(
    public message: string,
    public id: number = 0,
    public needTranslation: boolean = false
  ) {}
}
export class ErrorToast implements IToast {
  constructor(
    public message: string,
    public id: number = 0,
    public needTranslation: boolean = false
  ) {}
}
