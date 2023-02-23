import { View, StyleSheet } from 'react-native'
import Request from '../components/Request'

function ManageAppointmentsScreen(){
    return (
        <View style={styles.container}>
            <Request isPost={true} />
        </View>
    )
}
export default ManageAppointmentsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  