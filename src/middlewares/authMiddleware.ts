import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['token'];

  if (token === "Token-Valido") {
    next();
  } else {
    res.status(401).json({ message: "No autorizado" });
  }
};

export default authMiddleware;
