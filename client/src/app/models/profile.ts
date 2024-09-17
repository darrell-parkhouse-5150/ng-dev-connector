import { Education } from './education';
import { Experience } from './experience';
import { User } from './user';

export interface Profile {
    id: string;
    user: User;
    experience: Experience
    education: Education
}
