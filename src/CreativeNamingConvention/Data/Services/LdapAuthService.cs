using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.DirectoryServices;
using Newtonsoft.Json.Linq;
using CPI.DirectoryServices;

namespace CreativeNamingConvention.Data.Services
{
    public class LdapAuthService
    {
        private static string _path = "LDAP://DC=ad,DC=insidemedia,DC=net";
        private static string _filterAttribute;
        private static string _userName = "ad\\qlikview.service";
        private static string _passWord = "1q2w3e4r5t^";
        private static DirectoryEntry _entry { get; set; }

        private string _email { get; set; }
        private DirectorySearcher _search { get; set; }
        private string _searchFilter { get; set; }
        private SearchResult _user { get; set; }
        private string _cn { get; set; }

        public enum NAMES { FIRST, LAST, FULL }

        public LdapAuthService(string email)
        {
            _email = email;
            _entry = new DirectoryEntry("LDAP://DC=ad,DC=insidemedia,DC=net", _userName, _passWord, AuthenticationTypes.Secure);
            _searchFilter = "(mail=" + email + ")";
            _search = new DirectorySearcher(_entry, _searchFilter);
            _user = _search.FindOne();
            _cn = _user.Properties["cn"][0].ToString();
        }

        public SearchResult GetUser()
        {
            return _user;
        }

        public string FirstName()
        {
            return _user.Properties["givenname"][0].ToString();
        }

        public JObject UserData()
        {
            return JObject.FromObject(_user);
        }

        public IEnumerable<string> GetGroups()
        {
            var groups = new List<string>(GetGroups("cn", _cn));

            return groups;
        }

        public IEnumerable<string> GetUsersByGroupName(string name)
        {
            _user.Properties["cn"][0].ToString();
            var members = new List<string>();

            foreach (object dn in _user.Properties["member"])
            {
                DN obj = new DN(dn.ToString());
                var objCN = obj.RDNs[0].ToString().Split('=')[1];
                members.Add(objCN);
            }

            return members;
        }

        public IEnumerable<string> GetGroups(string filter, string value)
        {
            _search.PropertiesToLoad.Add("memberOf");
            StringBuilder groupNames = new StringBuilder();

            try
            {

                int propertyCount = _user.Properties["memberOf"].Count;
                string dn;
                int equalsIndex, commaIndex;

                for (int propertyCounter = 0; propertyCounter < propertyCount; propertyCounter++)
                {
                    dn = (string)_user.Properties["memberOf"][propertyCounter];
                    equalsIndex = dn.IndexOf("=", 1);
                    commaIndex = dn.IndexOf(",", 1);
                    if (-1 == equalsIndex)
                    {
                        return null;
                    }

                    groupNames.Append(dn.Substring((equalsIndex + 1), (commaIndex - equalsIndex) - 1));
                    groupNames.Append("|");
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error obtaining group names. " + ex.Message);
            }

            return groupNames.ToString().Split(new char[] { '|' });

        }

    }
}
