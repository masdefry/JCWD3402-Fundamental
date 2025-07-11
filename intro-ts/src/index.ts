// > VARIABLE
const studentName: string = 'Defryan';
const scoreModule1: number = 100;
const isGraduated: boolean = true;

let description: string | number = 'Lorem ipsum...';
description = 100;

// > ARRAY
// Array yang tipe data tiap item nya sama
const alphabets: string[] = ['A', 'B', 'C', 'D', 'E'];

// Array yang tipe data tiap item nya berbeda (tupple array)
const arr: [string, number, boolean, number] = ['A', 123, true, 456];

// > OBJECT 
type TStudent = {
    name: string, 
    address: string
}

const student: TStudent = {
    name: 'Defryan', 
    address: 'Bogor'
}

// > FUNCTION 
function DisplayProfile(name: string, address: string, phoneNumber: string){
    return `${name}, ${address}, ${phoneNumber}`
}

type TDataStudentParams = {
    name: string, 
    address: string, 
    age: string
}
function DataStudent({name, address, age}: TDataStudentParams){
    // Block of code
}

// ➡️ Type vs Interface
// ➡️ Type lebih sering digunakan untuk mendefinisikan function
// ➡️ Interface lebih sering digunakan untuk mendefinisikan object/class

//                              Type vs Interface
//  Object                  :    OK         OK
//  Merge                   :    x          OK
//  Intersection & Union    :    OK         x
//  Extend                  :    x          OK

type TCampusPurwadhika = {
    name: string, 
    address: string,
    phoneNumber: number
}

interface ICampusPurwadhika{
    name: string, 
    address: string, 
    phoneNumber: number
}

const campusPurwadhika: TCampusPurwadhika = {
    name: 'BSD', 
    address: 'GOP', 
    phoneNumber: 6221333222
}

// ▪️Merge
// Type: Apabila memiliki type yang sama, maka akan menyebabkan error

type TSong = {
    artistName: string
}

type TSong = {
    releaseYear: number
}

// Interface: Otomatis di merge
interface ISong{
    artistName: string
}

interface ISong{
    releaseYear: number
}

const artist: ISong = {
    artistName: '', 
    releaseYear: 2003
}

// ▪️Intersection & Union 
type TData1 = {
    id: number, 
    artistName: string
}

type TData2 = {
    id: number, 
    songName: string 
}

{   
    // Intersection
    const artist: TData1 & TData2 = {
        id: 1, 
        artistName: '', 
        songName: ''
    }
}

{
    // Union (Customable)
    const artist: TData1 | TData2 = {
        id: 1, 
        artistName: ''
    }
}

// ▪️Extend
interface IProps1{
    name: string, 
    address: string 
}

interface IProps2 extends IProps1{
    phoneNumber: number 
}

const profile: IProps2 = {
    name: '', 
    address: '',
    phoneNumber: 0
}























// ➡️ ADVANCE TYPE
/*
    Partial     : Partial<T>
    Required    : Required<T>
    Readonly    : Readonly<T>
    Pick        : Pick<T, K>
    Omit        : Omit<T, K>
    Record      : Record<K, T>
    Extract     : Extract<T, U>
    Exclude     : Exclude<T, U>
*/
/*
 💡Use Case: 
    Kita ingin membuat interface baru berdasarkan interface yang sudah ada,
    namun tidak diperbolehkan merubah interface aslinya. Alasannya - karena 
    interface tersebut berasal dari library/framework, atau interface tersebut
    bagian dari codebase lama yang apabila diubah dapat berdampak pada bagian lain dari aplikasi.
*/
// ▪️Partial    : Membuat interface menjadi opsional
// ▪️Required   : Membuat interface menjadi required