declare namespace Express {
  export interface Request {
    userData?: {
      uid: string;
    }
  }
}