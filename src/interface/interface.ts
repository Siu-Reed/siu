export interface PolygonContents {
    img?: {
        src: string;
        alt: string;
    };
    text?: string;
}

export interface Spec {
    side : number;
    width : number;
    height : number;
    colors : string[];
}

export interface BaseAngle {
    x : number;
    y : number;
}

export enum View {
    X,
    Y,
    Z,
    F
}

export enum Action {
    Default,
    Mail,
    Contact
}
export interface ContentsValues {
    name: string | number;
    items: Items
}

export interface Items {
    Browse: string;
    Git: string;
    Desc: string;
    Stack: string;
}

export interface SubmitObject {
    tiger: number;
    retire: number;
    it: boolean;
    portfolio: number;
    why: string;
}

export enum SurveyState {
    Ready,
    Start,
    Result,
    End
}

export interface MailSendForm {
    senderAddress : string;
    subject : string;
    content : string;
}