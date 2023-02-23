import CreateAppointment from "../components/CreateAppointment";



const CreateAppointmentScreen = () => {
    const data = {
        id: "12334345",
        users: ["Jude", "Justin"],
        description: "FIRST APPOINTMENT"
    }
    return (
        <CreateAppointment PORT={8000} payload={data}/>
    )
}

export default CreateAppointmentScreen