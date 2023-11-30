using FluentValidation;
using ProjectAPI.Models;

namespace ProjectAPI.Validators
{
    public class ProdutoValidator : AbstractValidator<Produto>
    {
        public ProdutoValidator()
        {
            RuleFor(p => p.Name).NotEmpty().MaximumLength(100);
            RuleFor(p => p.Price).GreaterThan(250);
            RuleFor(p => p.Description).NotEmpty().MaximumLength(350);
        }
    }
}
