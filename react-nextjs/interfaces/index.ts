// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import {ReactNode} from "react";

export type User = {
  id: number
  name: string
}

export type users = {id:number,name:string,location:string,email:string,reports:report[]}

export interface solucion{id:number
  personInCharge:string
  solution:string}


export type report = {id:number,parroquia:String,descripcion:String,actualState:String,date:String,priority:String
solution:solucion,user:fakeUser}

export const solucionArreglo:solucion[] =
    [{id: 0, personInCharge: "Juanito", solution: "Ignorar la amenenaza"},
      {id: 2, personInCharge: "Pepe", solution: "Aplicar medidadas de seguridad"},
      {id: 3, personInCharge: "Juanito", solution: "Llamar a la policia"},
      {id: 4, personInCharge: "patricio", solution: "Ignorar la amenenaza"},
      {id: 5, personInCharge: "Daniel", solution: "Aplicar medidadas de seguridad"},
      {id: 6, personInCharge: "Pep Guardiola", solution: "Llamar a la policia"}]

interface fakeUser{
  id:number
  name:string
  location:string
  email:string
}

export type PropsCapsula ={
  children?: ReactNode
  title?:string
  usuario:users
}

export interface report2{
  id:Number
  parroquia:String
  descripcion:String
  actualState:String
  date:String
  priority:String
  solution:solucion
  user:fakeUser
}

