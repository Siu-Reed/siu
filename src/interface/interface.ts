export interface Spec {
    side : number;
    width : number;
    height : number;
    color : string[];
}

export interface BaseAngle {
    x : number;
    y : number;
}

export interface BaseLength {
    b : number;
    c : number;
    d : number;
}

export interface PrsBase {
    width: number;
    height: number;
}

export interface ContentsValues {
    category: string | number;
    items: object;
}

export type SqrState = "standing" | "running" | "goal1In" | "goal2In";