export interface StudentItemProps {
    image?:string,
    name:string,
    age:number,
    id:string,
    handleSelectStudent:(id:string)=>void
}