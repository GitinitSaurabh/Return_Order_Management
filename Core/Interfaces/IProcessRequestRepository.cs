using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IProcessRequestRepository
    {
         Task<ProcessRequest> AddProcessRequest(ProcessRequest processRequest);
         Task<ProcessResponse> ProcessDetail(ProcessRequest processRequest);
         Task<ProcessRequest> GetProcessRequestByIdAsync(int id);
         Task<IReadOnlyList<ProcessRequest>> GetProcessRequestsAsync();
         Task<ProcessResponse> GetProcessingAndDeliveryCharge(int id);
         
        
    }
}