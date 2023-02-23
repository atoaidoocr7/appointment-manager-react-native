import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getData, postData } from '../utilities/getRequest';

const API_URL = 'https://example.com/api/data';

const Request = ({isPost, url}) => {
    const [data, setData] = useState(null);

    let handleFetchData;

    if(isPost){
        handleFetchData = function(){
            const response = postData(url)
            console.log("Printing API response... ")
            console.log(response)
        }
    }else{
        handleFetchData = function(){
            const response = getData(url)
            console.log("Printing API response... ")
            console.log(response)
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {!isPost && <Button title="Fetch All Appointments" />}
            {isPost && <Button title="Create Appointment" /> }
            {isPost && <Button title="Edit Appointment" /> }
            {isPost && <Button title="Delete Appointment" /> }
            {data ? <Text>{JSON.stringify(data)}</Text> : null}
        </View>
    );
};

export default Request;