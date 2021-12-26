using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IPackagingAndDelivery
    {
        Task<ProcessResponse> GetPackagingDeliveryCharge(ComponentDetail defectiveComponentDetail);
    }
}