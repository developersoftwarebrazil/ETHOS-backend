# Application Layer
Esta camada contém os casos de uso da aplicação. Aqui é onde a lógica de negócios é orquestrada.
Ela interage com o repositório de dados para executar operações de criação, atualização e exclusão.

Aplicando SOLID: 
- **Single Responsibility Principle (SRP)**: Cada caso de uso tem uma única responsabilidade.
- **Dependency Inversion Principle (DIP)**: Casos de uso dependem de abstrações (interfaces) ao invés de implementações concretas.
