declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}

// declaring new type inside ts, now user id can be seeing in all routes
