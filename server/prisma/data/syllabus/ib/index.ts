import { SyllabusEntry } from '../types';
import { ibPYP } from './pyp';
import { ibMYP } from './myp';
import { ibDP } from './dp';

export const ibSyllabus: SyllabusEntry[] = [
  ...ibPYP,
  ...ibMYP,
  ...ibDP,
];
