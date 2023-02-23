import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { deleteData} from '../utilities/requests';



const DeleteAppointment = ({id}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("")

    async function handleFetch(){
        try{
            const appointments = await deleteData(`https://7740-2600-4040-7a15-2b00-d910-410e-908c-beff.ngrok.io/api/appointment/${id}`)
            setData(appointments)
        }catch(error){
            setError("ERROR FETCHING DATA")
        }
        
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Delete Appointment" onPress={handleFetch}/> 
            {data ? <Text>{JSON.stringify(data)}</Text> : null}
            {error ? <Text>{error}</Text> : null}
        </View>
    );
};

export default DeleteAppointment;