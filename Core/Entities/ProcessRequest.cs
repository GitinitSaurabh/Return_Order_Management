using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Entities
{
    public class ProcessRequest : BaseEntity
    {
        public string UserName { get; set; }
        public string ContactNumber { get; set; }
        public ComponentDetail ComponentDetail { get; set; }
        public int ComponentDetailId { get; set; }

    }
}