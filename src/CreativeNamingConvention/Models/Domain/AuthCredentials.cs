using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;
using CreativeNamingConvention.Data.DTOs;

namespace CreativeNamingConvention.Models.Domain
{
    [DataContractAttribute]
    public class AuthCredentials
    {
        [DataMember]
        [DataType(DataType.Text)]
        public string userName { get; set; }
        [DataMember]
        [DataType(DataType.Password)]
        public string password { get; set; }
    }
}
