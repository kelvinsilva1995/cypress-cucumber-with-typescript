# language: pt
@test
Funcionalidade: Validação do logo pagina home
Como usuário
Eu quero verificar se ao clicar no logo serei redirecionado para página principal


Contexto: Abrir o portal
Dado visualizo no topo da tela banner inicial

Cenario: Validar redirecionamento ao clicar no logo
Quando Acessar alguma página do sistema
Quando Clicar na logo
Então deve ser possivel retornar para pagina principal 'https://www.axa.com.br/'

Cenario: Validar clicar na logo já estando na página principal
Quando Clicar na logo
Então deve ser possivel retornar para pagina principal 'https://www.axa.com.br/'

Cenario: Validar imagem visual do logo
Então Logo deve permancer o mesmo



