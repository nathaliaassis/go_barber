import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';


export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = container.resolve(SendForgotPasswordEmailService);

    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}


//seguindo padrões da arquitetura restful deve ter no maximo cinco métodos:
//index, show, create, update, delete
