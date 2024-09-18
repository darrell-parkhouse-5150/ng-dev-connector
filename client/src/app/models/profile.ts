import { Education } from './education';
import { Experience } from './experience';
import { User } from './user';

export interface Profile {
    id: string;
    user: User;
    company: string
    experience: Experience
    education: Education
    location: string
    website: string
    status: string
    social: { [key: string]: string }
}
