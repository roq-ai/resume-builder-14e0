import { ResumeInterface } from 'interfaces/resume';
import { GetQueryInterface } from 'interfaces';

export interface ExperienceInterface {
  id?: string;
  job_title: string;
  company_name: string;
  start_date: any;
  end_date?: any;
  resume_id: string;
  created_at?: any;
  updated_at?: any;

  resume?: ResumeInterface;
  _count?: {};
}

export interface ExperienceGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  company_name?: string;
  resume_id?: string;
}
