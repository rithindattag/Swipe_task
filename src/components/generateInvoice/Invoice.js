import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";
import BillTo from "./BillTo";
import DespatchTo from "../DespatchTo";
import MaxElectronics from "./MaxElectronics";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import InvoiceItemsTable from "./InvoiceItemsTable";

const styles = StyleSheet.create({
	page: {
		backgroundColor: '#fff',
		fontFamily: 'Helvetica',
		fontSize: 12,
		paddingTop: 30,
		paddingLeft: 50,
		paddingRight: 50,
		lineHeight: 1.5,
		flexDirection: 'column',
	},
});

const PdfDocument = ({ invoicedata }) => {
	return (
		<Document>
			<Page size="A4" style={styles.page} >
				<InvoiceTitle title={'Invoice'} />
				<InvoiceNo invoice={invoicedata} />
				<MaxElectronics invoice={invoicedata}/>
				<DespatchTo invoice={invoicedata}/>
				<BillTo invoice={invoicedata} />
				<InvoiceItemsTable invoice={invoicedata} />
				<InvoiceThankYouMsg />
			</Page>
		</Document>
	);
}

export default PdfDocument;