import { ReactNode } from "react";

export interface Prop {
  children: ReactNode;
  title: string;
  header?: string;
}
