export type Difficulty = "easy" | "normal" | "hard";
export type SequenceType = "exercise" | "stretch" | "break";


export interface Workout {
    slug: string;
    name: string;
    duration: number;
    difficulty: Difficulty;
    sequence: any
}

export interface SequenceItem {
    slug: string;
    name: string;
    type: SequenceItem,
    duration: number;
    reps?: number;
}