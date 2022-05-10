import { Cliper } from './cliper.interface';
import { HairStyle } from './hairstyle.interface';

export interface Apointment {

     id: string;
     hairServiceType: string[];
     hairStyleType: HairStyle[];
     hairDie: boolean;
     hairDieColor: string[];
     cliperType: Cliper[];
     hairTreatments: string;
     apointmentDate: Date;
     cost: number;
}
