Biblioteca de Detecção de Dispositivos
A biblioteca de detecção de dispositivos é uma ferramenta JavaScript que permite que você identifique o tipo de dispositivo (móvel, tablet ou desktop), suas dimensões de tela, orientação e se possui tela de alta resolução (Retina display). Ela pode ser usada para criar experiências mais adaptáveis e responsivas em seus projetos da web.

Utilização via CDN
Para utilizar a biblioteca em seus projetos, inclua o seguinte script no arquivo HTML do seu site:

<!DOCTYPE html>
<html>
<head>
  <title>Seu Título</title>
</head>
<body>
  <!-- Inclua a biblioteca via CDN -->
  <script src="https://cdn.jsdelivr.net/gh/LexLuthorDev/detector-de-dispositivo@master/detector-de-dispositivo.js"></script>
  <script>
    // Agora você pode usar a biblioteca
    console.log(DeviceDetector.getDeviceInfo());
  </script>
</body>
</html>

Métodos Disponíveis
detect()
O método detect() é responsável por identificar o tipo de dispositivo com base no agente do usuário (user-agent) e na largura da tela. Ele é chamado automaticamente assim que a biblioteca é carregada.

getDeviceInfo()
O método getDeviceInfo() retorna um objeto com as informações do dispositivo detectado. As propriedades disponíveis são:

isMobile: Booleano que indica se o dispositivo é um celular (true) ou não (false).
isTablet: Booleano que indica se o dispositivo é um tablet (true) ou não (false).
isDesktop: Booleano que indica se o dispositivo é um desktop (true) ou não (false).
screenWidth: Largura da tela do dispositivo em pixels.
screenHeight: Altura da tela do dispositivo em pixels.
isPortrait: Booleano que indica se o dispositivo está em modo retrato (orientação vertical).
isLandscape: Booleano que indica se o dispositivo está em modo paisagem (orientação horizontal).
isRetina: Booleano que indica se o dispositivo possui tela de alta resolução (Retina display).
detectOrientation()
O método detectOrientation() é responsável por detectar a orientação do dispositivo e definir as propriedades isPortrait e isLandscape com base na largura e altura da tela.

detectRetina()
O método detectRetina() é responsável por verificar se o dispositivo possui uma tela de alta resolução (Retina display) e definir a propriedade isRetina com base no valor de window.devicePixelRatio.

Redirecionamento Baseado no Tipo de Dispositivo
Você pode utilizar a biblioteca para redirecionar usuários para diferentes páginas com base no tipo de dispositivo. Para isso, utilize o método redirectByDeviceType().

<!DOCTYPE html>
<html>
<head>
  <title>Redirecionamento baseado no tipo de dispositivo</title>
</head>
<body>
  <!-- Inclua a biblioteca via CDN -->
  <script src="https://cdn.jsdelivr.net/npm/sua-biblioteca@1.0.0/device-detector.js"></script>
  <script>
    // Redirecionar os usuários para URLs específicas com base no tipo de dispositivo
    DeviceDetector.redirectByDeviceType('pagina-mobile.html', 'pagina-tablet.html', 'pagina-desktop.html');
  </script>
</body>
</html>

Substitua as URLs 'pagina-mobile.html', 'pagina-tablet.html' e 'pagina-desktop.html' pelas páginas que você deseja redirecionar de acordo com o tipo de dispositivo.

Lembre-se de que o redirecionamento automático pode ser intrusivo para os usuários, então considere a experiência do usuário e a natureza do seu site ou aplicativo antes de implementá-lo.

Observações
A detecção de dispositivos pode não ser 100% precisa em todos os cenários. É sempre recomendado testar a biblioteca em diferentes dispositivos e cenários para garantir seu correto funcionamento.
Mantenha sua biblioteca atualizada, corrigindo bugs e adicionando novos recursos, se necessário, para fornecer a melhor experiência possível aos desenvolvedores que a utilizam em seus projetos.
Contribuição
Se você encontrar algum bug ou tiver sugestões de melhorias para a biblioteca, sinta-se à vontade para contribuir. Envie suas contribuições através de pull requests no repositório da biblioteca no GitHub.

Contribuição
Se você encontrar algum bug ou tiver sugestões de melhorias para a biblioteca, sinta-se à vontade para contribuir. Envie suas contribuições através de pull requests no repositório da biblioteca no GitHub.

Licença
A biblioteca de detecção de dispositivos é licenciada sob a Licença MIT. Leia o arquivo de licença para mais informações sobre os termos de uso.

Contato
Caso tenha alguma dúvida ou precise de suporte, entre em contato com nossa equipe de desenvolvedores através do email: lexluthordevfull@gmail.com

Versão
1.1.0 (Última Atualização: 21/07/2023)

Histórico de Versões
1.1.0: Adicionadas as funcionalidades de detecção de orientação e Retina display.
Agradecimentos Especiais
Agradecemos aos desenvolvedores que contribuíram para tornar esta biblioteca mais completa e útil para a comunidade. Seu apoio é fundamental para o crescimento e aprimoramento contínuo deste projeto. Muito obrigado!

Aproveite as novas funcionalidades da biblioteca e continue melhorando suas aplicações front-end!

