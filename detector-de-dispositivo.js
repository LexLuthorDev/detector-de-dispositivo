var DeviceDetector = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,

    isPortrait: false,
    isLandscape: false,
    isRetina: false,
    isWifiConnected: false,
    os: '',

    detectOrientation: function () {
      this.isPortrait = window.innerHeight > window.innerWidth;
      this.isLandscape = window.innerWidth > window.innerHeight;
    },

    detectRetina: function () {
      // Cria um media query para verificar se a resolução é maior que 1.25 pixels por pixel CSS
      var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)';
      if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
        this.isRetina = true;
      } else {
        this.isRetina = false;
      }
    },

    detectWifiConnection: function () {
      var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
  
      if (connection && connection.type === 'wifi') {
        this.isWifiConnected = true;
      } else {
        this.isWifiConnected = false;
      }
    },
    detectOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf('android') !== -1) {
        this.os = 'Android';
      } else if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1 || userAgent.indexOf('ipod') !== -1) {
        this.os = 'iOS';
      } else if (userAgent.indexOf('mac os x') !== -1) {
        this.os = 'macOS';
      } else if (userAgent.indexOf('windows') !== -1) {
        this.os = 'Windows';
      } else if (userAgent.indexOf('linux') !== -1) {
        this.os = 'Linux';
      } else {
        this.os = 'Outro';
      }
    },
    detectPushNotificationSupport: function () {
      this.supportsPushNotifications = 'Notification' in window && 'serviceWorker' in navigator;
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
        isWifiConnected: this.isWifiConnected,
        os: this.os,
        supportsPushNotifications: this.supportsPushNotifications,
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
  DeviceDetector.detectWifiConnection(); // Chamar a detecção de conexão Wi-Fi
  DeviceDetector.detectOS(); // Chamar a detecção do sistema operacional
  DeviceDetector.detectPushNotificationSupport(); // Chamar a detecção de suporte a notificações push





  