import { Course } from '../models/course';

export const EMPTY_COURSE: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};
