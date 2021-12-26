using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ProcessRequestReporsitory : IProcessRequestRepository
    {
        private readonly RomDbContext _context;
        public ProcessRequestReporsitory(RomDbContext context)
        {
            _context = context;
        }

        public async Task<ProcessRequest> AddProcessRequest(ProcessRequest processRequest)
        {
            
            await _context.ProcessRequests.AddAsync(processRequest);
            await _context.DefectiveComponentDetails.AddRangeAsync(processRequest.ComponentDetail);
            await _context.SaveChangesAsync();
            return processRequest;
        }
        public async Task<ProcessResponse> GetProcessingAndDeliveryCharge(int id)
        {
            return await _context.ProcessResponse
            .FirstOrDefaultAsync(p => p.ProcessRequestId == id);
        }

        public async Task<ProcessRequest> GetProcessRequestByIdAsync(int id)
        {
            return await _context.ProcessRequests
            .Include(p => p.ComponentDetail) //eager loading of nav property 
            .FirstOrDefaultAsync(p => p.id == id);
        }

        public async Task<IReadOnlyList<ProcessRequest>> GetProcessRequestsAsync()
        {
            return await _context.ProcessRequests
            .Include(p => p.ComponentDetail) //eager loading of nav property 
            .ToListAsync();
        }

        public async Task<ProcessResponse> ProcessDetail(ProcessRequest processRequest)
        {

            var packagingPriceIndex = new Dictionary<string, int>(){
                {"Integral",100},
                {"Accessory",50},
                {"Protective sheath", 50}
            };
            var deliveryPriceIndex = new Dictionary<string, int>(){
                {"Integral",200},
                {"Accessory",100}
            };
            var processingPriceIndex = new Dictionary<string, int>(){
                {"Integral",500},
                {"Accessory",300}
            };
            await _context.ProcessRequests.AddAsync(processRequest);
            var processResponse = new ProcessResponse();
            processResponse.PackagingAndDeliveryCharge = 
                deliveryPriceIndex[processRequest.ComponentDetail.ComponentType] 
                + (processRequest.ComponentDetail.Quantity * packagingPriceIndex[processRequest.ComponentDetail.ComponentType] );
            processResponse.DateOfDelivery = DateTime.UtcNow;
            processResponse.ProcessingCharge = processingPriceIndex[processRequest.ComponentDetail.ComponentType];
            processResponse.id = processRequest.id;
            processResponse.ProcessRequest = processRequest;
            await _context.ProcessResponse.AddAsync(processResponse);
            await _context.SaveChangesAsync();
            return processResponse;

        }

        public string CompleteProcessing(Billing billing)
        {
            
            return "Completed Billing Process";

        }
    }
}