import { EducationInterface } from 'interfaces/education';
import { ExperienceInterface } from 'interfaces/experience';
import { UserInterface } from 'interfaces/user';
import { TemplateInterface } from 'interfaces/template';
import { GetQueryInterface } from 'interfaces';

export interface ResumeInterface {
  id?: string;
  title: string;
  content: string;
  user_id: string;
  template_id: string;
  created_at?: any;
  updated_at?: any;
  education?: EducationInterface[];
  experience?: ExperienceInterface[];
  user?: UserInterface;
  template?: TemplateInterface;
  _count?: {
    education?: number;
    experience?: number;
  };
}

export interface ResumeGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  user_id?: string;
  template_id?: string;
}
