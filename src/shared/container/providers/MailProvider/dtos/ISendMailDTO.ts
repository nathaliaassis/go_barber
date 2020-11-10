import IParseMailTemplateDTO from "../../MailTemplateProvider/dtos/IParseMailTemplateDTO";

interface IMailContact {
  name: string;
  email: string;
}
export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact; // ? means that is optional
  subject: string;
  templateData: IParseMailTemplateDTO;
}
