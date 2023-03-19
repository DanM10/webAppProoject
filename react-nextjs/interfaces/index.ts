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

