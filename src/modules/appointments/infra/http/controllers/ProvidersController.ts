import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import ListProvidersSevice from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
  //todo metodo assincrono ira retorar uma promise<response>
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProviders = container.resolve(ListProvidersSevice);

    const providers = await listProviders.execute({
      user_id
    });

    return response.json(providers);
  }
}
