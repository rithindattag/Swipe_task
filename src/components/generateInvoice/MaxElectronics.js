import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
		justifyContent: 'flex-start',
		width: '50%'
    },
    InvoiceTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'        
    },
});

const MaxElectronicsTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.maxElectronicsTo}>Max Electronics</Text>
        <Text>{invoice.street}</Text>
        <Text>{invoice.gst}</Text>
        <Text>{invoice.state}</Text>
        <Text>{invoice.contact}</Text>
        <Text>{invoice.email}</Text>
        <Text>{invoice.website}</Text>
    </View>
);

export default MaxElectronicsTo