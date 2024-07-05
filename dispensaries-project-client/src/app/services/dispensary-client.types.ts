// import { IDispensaryBackend } from "./dispenary-backend.types";

// export interface IDispensaryClient {
//     address1: string;
//     address2: string | null;
//     city: string;
//     country: string;
//     crawlDate: { $date: Date };
//     description: string;
//     email: string;
//     followerCount: number;
//     image: string;
//     lastMenuUpdate: { $date: string };
//     licenseNumber: string;
//     locations: string; // Assuming this is a string representation of an array of objects
//     menu: string; // Assuming this is a string representation of an array of menu items
//     name: string;
//     phone: string;
//     postalCode: string;
//     primaryLocation: string; // Assuming this is a string representation of a single location
//     rating: string;
//     region: string;
//     reviewCount: number;
//     schedule: string; // Assuming this is a string representation of a schedule object
//     slug: string;
//     source: string;
//     sourceID: string;
//     website: string;
//     location: string; // Assuming this is a string representation of a geographic location
//     logoUrl: string;
//     _id: { $oid: string };
// }

// export interface IDispensaryParams {
//     address1: string;
//     address2: string | null;
//     city: string;
//     country: string;
//     crawlDate: { $date: Date };
//     description: string;
//     email: string;
//     followerCount: number;
//     image: string;
//     lastMenuUpdate: { $date: string };
//     licenseNumber: string;
//     locations: string; // Assuming this is a string representation of an array of objects
//     menu: string; // Assuming this is a string representation of an array of menu items
//     name: string;
//     phone: string;
//     postalCode: string;
//     primaryLocation: string; // Assuming this is a string representation of a single location
//     rating: string;
//     region: string;
//     reviewCount: number;
//     schedule: string; // Assuming this is a string representation of a schedule object
//     slug: string;
//     source: string;
//     sourceID: string;
//     website: string;
//     location: string; // Assuming this is a string representation of a geographic location
//     logoUrl: string;
//     _id: { $oid: string };
// }

// export class SalesInvoiceLineItemShippedStockline {
//     id: string | number;
//     lotNumber: string | null;
//     statusId: string;
//     statusRank: number;
//     shipmentNumber: string | null;
//     quantitySold: number;
//     quantityShipped: number;
//     quantityPosted: number;
//     unitCost: number | null;
  
//     constructor(params: SalesInvoiceLineItemShippedStockline) {
//       Object.assign(this, params);
//     }
  
//     static fromBackend(backend: SalesInvoiceLineItemShippedStocklineBackend) {



//       return new SalesInvoiceLineItemShippedStockline({
//         id: backend.id,
//         lotNumber: backend.lotNumber,
//         statusId: backend.statusId,
//         statusRank: backend.statusRank,
//         shipmentNumber: backend.shipmentNumber,
//         quantitySold: backend.quantitySold,
//         quantityShipped: backend.quantityShipped,
//         quantityPosted: backend.quantityPosted,
//         unitCost: backend.unitCost,
//       });
//     }
//   }



// export class Dispensary {
//     address1: string;
//     address2: string | null;
//     city: string;
//     country: string;
//     crawlDate: { $date: Date };
//     description: string;
//     email: string;
//     followerCount: number;
//     image: string;
//     lastMenuUpdate: { $date: string };
//     licenseNumber: string;
//     locations: string; // Assuming this is a string representation of an array of objects
//     menu: string; // Assuming this is a string representation of an array of menu items
//     name: string;
//     phone: string;
//     postalCode: string;
//     primaryLocation: string; // Assuming this is a string representation of a single location
//     rating: string;
//     region: string;
//     reviewCount: number;
//     schedule: string; // Assuming this is a string representation of a schedule object
//     slug: string;
//     source: string;
//     sourceID: string;
//     website: string;
//     location: string; // Assuming this is a string representation of a geographic location
//     logoUrl: string;
//     _id: { $oid: string };
  
//     constructor(params: IPurchaseOrderLineItemParams) {
//       this.address1 = params.address1;
//       this.customerInfo = params.customerInfo;
//       this.shippingInfo = params.shippingInfo;
//       this.notes = params.notes;
//       this.history = params.history;
//       this.udfs = params.udfs;
//       this.pieceParts = params.pieceParts;
//     }
  
//     static fromBacken(dispensariesBackend: IDispensaryBackend[]) {
//       try {
//         dispensariesBackend.forEach(IDispensaryBackend => {
            
            
//         });
//         return new PurchaseOrderLineItem({
//           details: PurchaseOrderLineItemDetail.fromBackend(
//             backend.lineItemDetails
//           ),
//           customerInfo: PurchaseOrderLineItemCustomerInfo.fromBackend(
//             backend.lineItemCustomerInfo
//           ),
//           shippingInfo: PurchaseOrderLineItemShippingInfo.fromBackend(
//             backend.lineItemShippingInfo
//           ),
//           notes: backend.notes,
//           history: backend.history,
//           udfs: PurchaseOrderLineItemUdfs.fromBackend(backend.udfs),
//           pieceParts: PurchaseOrderLineItemPiecePart.fromBackend(
//             backend.pieceParts
//           ),
//         });
//       } catch (e) {
//         throw new ResponseTransformError(
//           'Failed to transform Purchase Order Line Item from backend',
//           { originalError: e }
//         );
//       }
//     }


//   }
  