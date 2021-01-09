import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import ListProviderAppointmentsSevice from '@modules/appointments/services/ListProviderAppointmentsService';

export default class ProviderAppointmentsController {
  //todo metodo assincrono ira retorar uma promise<response>
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.body;

    const listProviderAppointments = container.resolve(ListProviderAppointmentsSevice);

    const appointments = await listProviderAppointments.execute({
      provider_id,
      day,
      month,
      year
    });

    return response.json(appointments);
  }
}
