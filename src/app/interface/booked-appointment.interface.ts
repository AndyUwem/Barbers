
import { User } from './user.interface';

export interface BookedAppointment {
  bookingId?: string;
  customer: User;
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
