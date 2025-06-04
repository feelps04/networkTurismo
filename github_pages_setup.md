# Configurando o GitHub Pages para o projeto Network Turismo

Este guia irá ajudá-lo a habilitar o GitHub Pages para seu repositório para que o site fique disponível online.

## Por que este passo é necessário?

Embora tenhamos configurado o GitHub Actions para automaticamente construir e implantar o projeto na branch `gh-pages`, é necessário habilitar manualmente o GitHub Pages nas configurações do repositório para que o site seja publicado.

## Passo a passo para habilitar o GitHub Pages

### 1. Acesse o repositório no GitHub

Vá para [https://github.com/feelps04/networkTurismo](https://github.com/feelps04/networkTurismo)

![Página inicial do repositório](https://via.placeholder.com/800x400?text=Página+inicial+do+repositório)

### 2. Clique em "Settings" (Configurações)

Clique na aba "Settings" na barra de navegação superior do repositório.

![Aba Settings](https://via.placeholder.com/800x100?text=Aba+Settings)

### 3. Navegue até a seção "Pages"

No menu lateral esquerdo, role para baixo até encontrar "Pages" na seção "Code and automation".

![Menu Pages](https://via.placeholder.com/300x400?text=Menu+Pages)

### 4. Configure a fonte de publicação

Na seção "Build and deployment":

1. Em "Source", selecione "Deploy from a branch" (Implantar a partir de uma branch)
2. Em "Branch", selecione "gh-pages" no primeiro dropdown
3. Mantenha "/(root)" no segundo dropdown
4. Clique no botão "Save" (Salvar)

![Configuração do GitHub Pages](https://via.placeholder.com/800x300?text=Configuração+do+GitHub+Pages)

### 5. Aguarde a publicação

Após salvar as configurações, o GitHub começará a publicar seu site. Este processo pode levar alguns minutos. Uma mensagem verde aparecerá no topo da página quando o site estiver pronto, indicando "Your site is published at https://feelps04.github.io/networkTurismo/".

![Mensagem de publicação](https://via.placeholder.com/800x100?text=Mensagem+de+publicação)

### 6. Acesse seu site

Depois que o site for publicado, você poderá acessá-lo em:
[https://feelps04.github.io/networkTurismo/](https://feelps04.github.io/networkTurismo/)

## Solução de problemas

Se você receber a mensagem "There isn't a GitHub Pages site here" ao acessar o URL:

1. Verifique se o GitHub Actions concluiu a execução com sucesso (aba "Actions" no repositório)
2. Certifique-se de que a branch `gh-pages` foi criada no repositório
3. Confirme se as configurações do GitHub Pages estão corretas conforme descrito acima
4. Aguarde alguns minutos, pois a publicação pode levar tempo

## Nota importante

O workflow do GitHub Actions que configuramos deve criar automaticamente a branch `gh-pages` quando um push é feito para a branch `main`. No entanto, a configuração do GitHub Pages para usar esta branch precisa ser feita manualmente uma única vez através das configurações do repositório.

Se a branch `gh-pages` ainda não apareceu, verifique se o workflow do GitHub Actions foi executado com sucesso na aba "Actions" do repositório.

