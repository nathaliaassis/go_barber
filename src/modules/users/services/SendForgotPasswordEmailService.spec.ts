import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';

import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';
import AppError from '@shared/errors/AppError';

//describe - test category name
//it() = test()
describe('SendForgotPasswordEmail', () => {
  it('should be able to recover password using e-mail', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendEmail = jest.spyOn(fakeMailProvider, 'sendMail');
    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(fakeUsersRepository, fakeMailProvider);

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@email.com',
      password: '123456'
    });

    await sendForgotPasswordEmail.execute({
      email: 'john@email.com',
    })

    expect(sendEmail).toHaveBeenCalled();
  });
  it('should not be able to recover a non-existing user password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(fakeUsersRepository, fakeMailProvider);

    await expect(sendForgotPasswordEmail.execute({
      email: 'john@email.com',
    })).rejects.toBeInstanceOf(AppError);

  })
});
