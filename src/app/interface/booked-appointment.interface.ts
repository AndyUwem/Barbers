
import { Barber } from './barber.interface';

export interface BookedAppointment {
  bookingId?: string;
  barber: Barber;
  hairServiceType: string;
  hairStyleName: string;
  hairStyleImage: string;
  hairDieColor: string;
  cliperName: string;
  cliperBrand: string;
  cliperImage: string;
  hairTreatments: string;
  apointmentDate: string;
  totalCost: number;
}
