import { ResumeInterface } from 'interfaces/resume';
import { GetQueryInterface } from 'interfaces';

export interface EducationInterface {
  id?: string;
  school_name: string;
  degree: string;
  start_date: any;
  end_date?: any;
  resume_id: string;
  created_at?: any;
  updated_at?: any;

  resume?: ResumeInterface;
  _count?: {};
}

export interface EducationGetQueryInterface extends GetQueryInterface {
  id?: string;
  school_name?: string;
  degree?: string;
  resume_id?: string;
}
