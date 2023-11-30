using Newtonsoft.Json;

namespace ProjectAPI.Models
{
    public class Produto
    {
        public int Id { get; set; }
        [JsonProperty("nome")]
        public string Name { get; set; }
        [JsonProperty("descricao")]
        public double Price { get; set; }
        [JsonProperty("preco")]

        public string Description { get; set; }
        [JsonProperty("disponibilidade")]
        public bool Available { get; set; }

    }
}
