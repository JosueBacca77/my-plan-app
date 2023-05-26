export interface StudentInterface {
    id: string,
    name: string,
    age: number,
    target: string,
    height?: number,
    weight?: number,
    image?: string,
    medicalConditions: string[],
    plans: any[]
}