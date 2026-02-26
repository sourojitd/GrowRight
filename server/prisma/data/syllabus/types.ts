export interface SyllabusTopic {
  topicName: string;
  subtopics: string[];
  depthLevel: number; // 1=basic, 2=moderate, 3=advanced
  learningObjectives: string;
  orderIndex: number;
}

export interface SyllabusEntry {
  board: 'CBSE' | 'ICSE' | 'IB';
  grade: number;
  subject: string;
  topics: SyllabusTopic[];
}
