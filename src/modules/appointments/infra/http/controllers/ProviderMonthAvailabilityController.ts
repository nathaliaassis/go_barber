import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthsAvailabilityService';

export default class ProvidersMonthAvailabilityController {
  //todo metodo assincrono ira retorar uma promise<response>
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonthAvailability = container.resolve(ListProviderMonthAvailabilityService);

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year
    });

    return response.json(availability);
  }
}
