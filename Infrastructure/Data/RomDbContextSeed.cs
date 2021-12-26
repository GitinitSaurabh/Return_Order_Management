using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class RomDbContextSeed
    {
        public static async Task SeedAsync(RomDbContext context, ILoggerFactory loggerFactory){
            try
            {
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                 if(!context.DefectiveComponentDetails.Any()){
                     var dataJson = 
                        File.ReadAllText(path + @"/Data/SeedData/DefectiveComponentDetails.json");
                    
                    var data = JsonSerializer.Deserialize<List<ComponentDetail>>(dataJson);
                    foreach (var item in data)
                    {
                        context.DefectiveComponentDetails.Add(item);
                    }
                    await context.SaveChangesAsync();
                 }
            
            
                 if(!context.ProcessRequests.Any()){
                     var dataJson = 
                        File.ReadAllText(path + @"/Data/SeedData/ProcessRequest.json");
                    
                    var data = JsonSerializer.Deserialize<List<ProcessRequest>>(dataJson);
                    foreach (var item in data)
                    {
                        context.ProcessRequests.Add(item);
                    }
                    await context.SaveChangesAsync();
                 }
            }
            catch (Exception ex)
            {
                
                var logger = loggerFactory.CreateLogger<RomDbContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}