using ProjectAPI.Models;

namespace ProjectAPI.Mapping
{
    public class ProdutoProfile
    {
        public ProdutoProfile()
        {
            CreateMap<Produto, ProdutoDTO>();
        }
    }
}
