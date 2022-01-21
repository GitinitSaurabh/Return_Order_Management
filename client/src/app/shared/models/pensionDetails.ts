export interface IPensionDetails {
    id: number;
    dateOfBirth: string;
    pan: string;
    aadharCardNumber: string;
    salaryEarned: number;
    allowances: number;
    pensionClassification: string;
    bankDetail: IBankDetails;
}
export interface IBankDetails {
    id: number;
    bankName: string;
    accountNumber: string;
    bankType: string;
}


export class PensionDetails implements IPensionDetails{
    id: number;
    dateOfBirth: string;
    pan: string;
    aadharCardNumber: string;
    salaryEarned: number;
    allowances: number;
    pensionClassification: string;
    bankDetail: IBankDetails;
}