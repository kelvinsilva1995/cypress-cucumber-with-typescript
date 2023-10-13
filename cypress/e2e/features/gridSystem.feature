      # language: pt
      @test
      Funcionalidade: Validação grid system
      Como usuário
      Quando, For realizar o acesso ao site
      Desejo, poder fazer uso dele de maneira que a página seja responsiva, o uso em diversos dispositivos sem prejuízo na visualização.

      Contexto: Abrir o portal
      Dado visualizo no topo da tela banner inicial


      Esquema do Cenário: Validar responsividade de cada modelo
      Quando Altero a tela para '<Modelo>'
      Então Deve ser possivel navegar e visualizar todos os componentes sem que haja quebras

      Exemplos:
      | Modelo     |
      | macbook-15 |
      | macbook-13 |
      | ipad-2     |
      | iphone-7   |
