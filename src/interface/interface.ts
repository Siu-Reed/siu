import React from "react";

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
    name: string | number;
    items: Items
}

export interface Items {
    Browse: string,
    Git: string,
    Desc: string,
    Stack: string
}

export interface MeInterface {
    props: React.PropsWithChildren<React.ReactNode>;
    $$typeof: symbol;
}