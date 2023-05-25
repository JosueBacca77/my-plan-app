export interface StudentItemProps {
    image?:string,
    name:string,
    age:number,
    target:string,
    id:string,
    handleSelectStudent:(id:string)=>void
}