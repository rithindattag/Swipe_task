import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 10,
		justifyContent: 'flex-start',
		width: '50%'
    },
    DespatchTo: {
        marginTop: 10,
        paddingBottom: 0,
        fontFamily: 'Helvetica-Oblique'        
    },
});

const DespatchTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.DespatchTo}>Despatch To:</Text>
        <Text>{invoice.fullname_d}</Text>
        <Text>{invoice.address_d}</Text>
        <Text>{invoice.road_d}</Text>
        <Text>{invoice.location_d}</Text>
        <Text>{invoice.gstin_d}</Text>
        <Text>{invoice.state_name_d}</Text>
    </View>
);

export default DespatchTo