import { ITypeOfProfessional } from "./ITypeOfProfessional";

export interface IProfessional {
  id?: string; // ID
  name: string; // Nome do profisisonal *Obrigatório
  telephone?: string; // Telefone
  email?: string; // Endereço de e-mail do profissional
  typeOfProfessional: ITypeOfProfessional; // Vinculo com o tipo de profissional *Obrigatório
  situation?: boolean; // Situação do cadastro *Obrigatório
  updatedAt?: string; // Data e hora da última atualização *Obrigatório
  createdAt?: string; // Data e hora da de cadastro *Obrigatório
}
