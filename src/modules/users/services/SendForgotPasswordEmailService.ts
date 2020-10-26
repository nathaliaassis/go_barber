import { inject, injectable } from 'tsyringe';

// import AppError from '@shared/errors/AppError';

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) { };

  public async execute({ email }: IRequest): Promise<void> {
    const checkIfUserExists = await this.usersRepository.findByEmail(email);

    if (!checkIfUserExists) {
      throw new AppError('Users does not exist.');
    }
    this.mailProvider.sendMail(email, 'Pedido de recuperação de senha recebido');
  }
}

export default SendForgotPasswordEmailService;
