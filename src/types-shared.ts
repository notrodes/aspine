export interface StudentData {
  classes: Class[];
  recent: Recent;
  overview?: OverviewItem[];
  username: string;
  quarter: Quarter;
}

export interface Class {
  name: string;
  grade: string;
  // Maps category names to decimals (stored as strings)
  categories: { [key: string]: string };
  assignments: Assignment[];
}

export interface Assignment {
  name: string;
  category: string;
  date_assigned: string;
  date_due: string;
  feedback: string;
  assignment_id: string;
  special: string;
  score: number;
  max_score: number;
}

export interface OverviewItem {
  class: string;
  teacher: string;
  term: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  ytd: string;
  absent: string;
  tardy: string;
  dismissed: string;
}

export interface Recent {
  // Empty array at the moment because Aspen does not show recent activity
  // w.r.t. assignments
  recentActivityArray: [];
  recentAttendanceArray: AttendanceEvent[];
}

export interface AttendanceEvent {
  date: string;
  period: string;
  code: string;
  classname: string;
  dismissed: string;
  absent: string;
  excused: string;
  tardy: string;
}

export interface Schedule {
  black: ScheduleItem[];
  silver: ScheduleItem[];
}

export interface ScheduleItem {
  id: string;
  name: string;
  teacher: string;
  room: string;
  aspenPeriod: string;
}

export interface PDFFile {
  title: string;
  content: string;
}

export enum Quarter {
  Current = 0,
  Q1,
  Q2,
  Q3,
  Q4,
}
