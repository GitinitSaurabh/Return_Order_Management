import { IProcessRequest } from "./processRequest";

export interface ICharges {
    id: number;
    processingCharge: number;
    packagingAndDeliveryCharge: number;
    dateOfDelivery: Date;
    processRequest: IProcessRequest;
    processRequestId: number;
}
