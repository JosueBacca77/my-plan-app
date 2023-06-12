export interface StudentInterface {
    id: string,
    name: string,
    age: number,
    height?: number,
    weight?: number,
    image?: string,
    medicalConditions: string[],
    plans: any[]
}