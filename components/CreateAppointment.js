import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { postData} from '../utilities/requests';



const CreateAppointment = ({PORT, payload}) => {
    const [data, setData] = useState({});
    const [error, setError] = useState("")

    async function handleFetch(){
        try{
            const appointments = await postData(`https://7740-2600-4040-7a15-2b00-d910-410e-908c-beff.ngrok.io/api/appointment`, payload, 'POST')
            setData(appointments)
        }catch(error){
            console.log(error)
            setError("ERRORRRRRR")
        }
        
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Create Appointment" onPress={handleFetch}/> 
            {data ? <Text>{JSON.stringify(data)}</Text> : null}
            {error ? <Text>{error}</Text> : null}
        </View>
    );
};

export default CreateAppointment;