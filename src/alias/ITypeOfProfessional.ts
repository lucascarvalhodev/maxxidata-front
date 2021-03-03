export interface ITypeOfProfessional {
  id?: string; // ID
  description: string; // descricao do tipo *Obrigatório
  situation?: boolean; // situacao do cadastro *Obrigatório
  updatedAt?: string; // data e hora ultima atualizacao *Obrigatório
  createdAt?: string; // data e hora de cadastro *Obrigatório
}
