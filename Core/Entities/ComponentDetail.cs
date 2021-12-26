using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class ComponentDetail : BaseEntity
    {
        public string ComponentType { get; set; }
        public string ComponentName { get; set; }
        public decimal Quantity { get; set; }
        
    }
}