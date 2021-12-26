
export interface IProcessRequest {
        id: number;
        userName: string;
        contactNumber: string;
        componentDetail: IComponentDetail;
        defectiveComponentDetailId: number;
    }
  export interface IComponentDetail {
        id: number;
        componentType: string;
        componentName: string;
        quantity: number;
    }



    export class ProcessRequest implements IProcessRequest{
        id: number;
        userName: string;
        contactNumber: string;
        componentDetail: IComponentDetail;
        defectiveComponentDetailId: number;
}

