import { IProfessional } from "./IProfessional";
import { ITypeOfProfessional } from "./ITypeOfProfessional";

export interface IDashboardData {
  professionalCount?: string;
  tyepOfProfessionalCount?: string;
  lastRegisteredProfessional?: IProfessional;
  lastRegisteredTyepOfProfessional?: ITypeOfProfessional;
}
