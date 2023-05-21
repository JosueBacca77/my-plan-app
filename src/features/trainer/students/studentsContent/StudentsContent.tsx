import StudentsList from "./studentsList/StudentsList";

export default function StudentsContent() {

    const students = [
        { name: "Bacca Josue", age: 25, target: 'Tonificar', image:"https://wallpaperaccess.com/full/317502.jpg"  },
        { name: "Romero Carla", age: 26, target: 'Disminuir grasa', image:"https://wallpaperaccess.com/full/317503.jpg"  },
        { name: "Albertinazi Juan", age: 19, target: 'Tonificar', image:"https://wallpaperaccess.com/full/317504.jpg"  },
        { name: "Acosta Alberto", age: 40, target: 'Acondicionar', image:"https://wallpaperaccess.com/full/317516.jpg"  },
        { name: "Falcone Jesus", age: 22, target: 'Disminuir grasa', image:"https://wallpaperaccess.com/full/317517.jpg"  },
        { name: "Martinez Fernanda", age: 36, target: 'Tonificar', image:"https://wallpaperaccess.com/full/317507.jpg"  },
        { name: "Bone Nicolas", age: 29, target: 'Tonificar', image:"https://wallpaperaccess.com/full/317508.jpg"  },
        { name: "Ludueña Sebastián", age: 40, target: 'Acondicionar', image:"https://wallpaperaccess.com/full/317509.jpg"  },
        { name: "Bou Pablo", age: 20, target: 'Disminuir grasa', image:"https://wallpaperaccess.com/full/317510.jpg"  },
        { name: "Agustino María Belen", age: 30, target: 'Disminuir grasa', image:"https://wallpaperaccess.com/full/317511.jpg"  },
        { name: "Reyna Juan Pablo", age: 25, target: 'Tonificar', image:"https://wallpaperaccess.com/full/317512.jpg"  },
    ]

    return (
        <StudentsList
            students={students}
        />
    )
}