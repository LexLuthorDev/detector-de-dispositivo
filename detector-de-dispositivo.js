var DeviceDetector = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,

    isPortrait: false,
    isLandscape: false,

    detectOrientation: function () {
      this.isPortrait = window.innerHeight > window.innerWidth;
      this.isLandscape = window.innerWidth > window.innerHeight;
    },

    isRetina: false,

    detectRetina: function () {
      // Cria um media query para verificar se a resolução é maior que 1.25 pixels por pixel CSS
      var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)';
      if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
        this.isRetina = true;
      } else {
        this.isRetina = false;
      }
    },
  
    detect: function () {
      // Verificar se o dispositivo é um celular
      this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth < 1024;
      
      // Verificar se o dispositivo é um tablet
      this.isTablet = /iPad|Android|Tablet/i.test(navigator.userAgent) && window.innerWidth >= 1024;
  
      // Caso contrário, é um desktop
      this.isDesktop = !this.isMobile && !this.isTablet;
    },
  
    getDeviceInfo: function () {
      return {
        isMobile: this.isMobile,
        isTablet: this.isTablet,
        isDesktop: this.isDesktop,
        screenWidth: this.screenWidth,
        screenHeight: this.screenHeight,
        isPortrait: this.isPortrait,
        isLandscape: this.isLandscape,
        isRetina: this.isRetina,
      };
    },
    redirectByDeviceType: function (mobileUrl, tabletUrl, desktopUrl) {
        var redirectUrl;
        
        if (this.isMobile && mobileUrl) {
          redirectUrl = mobileUrl;
        } else if (this.isTablet && tabletUrl) {
          redirectUrl = tabletUrl;
        } else if (this.isDesktop && desktopUrl) {
          redirectUrl = desktopUrl;
        }
    
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      },
  };
  
  DeviceDetector.detect(); // Chamar a detecção assim que a biblioteca for carregada
  DeviceDetector.detectOrientation(); // Chamar a detecção de orientação
  DeviceDetector.detectRetina(); // Chamar a detecção de Retina display


  