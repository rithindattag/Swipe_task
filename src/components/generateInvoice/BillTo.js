import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 10,
		justifyContent: 'flex-start',
		width: '50%'
    },
    InvoiceTo: {
        marginTop: 10,
        paddingBottom: 0,
        fontFamily: 'Helvetica-Oblique'        
    },
});

const billTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Invoice to:</Text>
        <Text>{invoice.fullname}</Text>
        <Text>{invoice.address}</Text>
        <Text>{invoice.road}</Text>
        <Text>{invoice.location}</Text>
        <Text>{invoice.gstin}</Text>
        <Text>{invoice.state_name}</Text>
    </View>
);

export default billTo