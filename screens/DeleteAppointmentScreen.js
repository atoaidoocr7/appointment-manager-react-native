import DeleteAppointment from "../components/DeleteAppointment";



const DeleteAppointmentScreen = () => {
    const id = 12345
    return (
        <DeleteAppointment PORT={8000} id={id}/>
    )
}

export default DeleteAppointmentScreen