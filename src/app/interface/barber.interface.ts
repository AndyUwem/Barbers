import { Cliper } from './cliper.interface';
import { HairStyle } from './hairstyle.interface';
import { User } from './user.interface';

export interface Barber extends User {

    companyName: string;
    companyImage: string;
    cliper: Cliper[];
    hairStyle: HairStyle[];
    hairServiceType: Array<{ title: string; subTitle: string}>;
    hairDieColors: string[];
    hairTreatmentOptions: string[];

}
