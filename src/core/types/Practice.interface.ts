export interface Practice {
  type: 'Practice';
  name: string;
  targetCount: number | null;
  completedMantras: number;
  lastPracticeDay: Date | null;
}