import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}

@injectable()
class createUserSevice {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { };

  public async execute({ name, email, password }: Request): Promise<User> {

    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('E-mail address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default createUserSevice;
