import StudentsList from "./studentsList/StudentsList";

export default function StudentsContent() {

    const students = [
        { id: 1, name: "Bacca Josue", age: 25, target: 'Tonificar', image: "https://wallpaperaccess.com/full/317502.jpg" },
        { id: 2, name: "Romero Carla", age: 26, target: 'Disminuir grasa', image: "https://wallpaperaccess.com/full/317503.jpg" },
        { id: 3, name: "Albertinazi Juan", age: 19, target: 'Tonificar', image: "https://wallpaperaccess.com/full/317504.jpg" },
        { id: 4, name: "Acosta Alberto", age: 40, target: 'Acondicionar', image: "https://wallpaperaccess.com/full/317516.jpg" },
        { id: 5, name: "Falcone Jesus", age: 22, target: 'Disminuir grasa', image: "https://wallpaperaccess.com/full/317517.jpg" },
        { id: 6, name: "Martinez Fernanda", age: 36, target: 'Tonificar', image: "https://wallpaperaccess.com/full/317507.jpg" },
        { id: 7, name: "Bone Nicolas", age: 29, target: 'Tonificar', image: "https://wallpaperaccess.com/full/317508.jpg" },
        { id: 8, name: "Ludueña Sebastián", age: 40, target: 'Acondicionar', image: "https://wallpaperaccess.com/full/317509.jpg" },
        { id: 9, name: "Bou Pablo", age: 20, target: 'Disminuir grasa', image: "https://wallpaperaccess.com/full/317510.jpg" },
        { id: 10, name: "Agustino María Belen", age: 30, target: 'Disminuir grasa', image: "https://wallpaperaccess.com/full/317511.jpg" },
        { id: 11, name: "Reyna Juan Pablo", age: 25, target: 'Tonificar', image: "https://wallpaperaccess.com/full/317512.jpg" },
    ]

    return (
        <StudentsList
            students={students}
        />
    )
}