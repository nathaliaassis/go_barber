import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';
import AppError from '@shared/errors/AppError';
//describe - test category
//it() = test()
let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);
  })

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date,
      provider_id: '123123',
    })

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });

  it('should not be able to create a two appointments on the same time', async () => {

    const appointmentDate = new Date(20, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123',
    })

    await expect(createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123',
    })).rejects.toBeInstanceOf(AppError)   //rejects = return an error
  });
});
