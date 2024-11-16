$(document).ready(function () {
    // 해시 변경 시 외부 파일 로드
    function renderContent() {
      const hash = window.location.hash.substring(1); // # 제거
      const validRoutes = ['home', 'about', 'contact'];
      const route = validRoutes.includes(hash) ? hash : '404';
  
      const filePath = route === '404' ? '404.html' : `${route}.html`;
  
      // AJAX 요청으로 파일 로드
      $('.content').load(filePath, function (response, status, xhr) {
        if (status === "error") {
          $('.content').html('<h1>404</h1><p>Page not found.</p>');
        }
      });
    }
  
    // 초기 콘텐츠 로드
    renderContent();
  
    // 해시 변경 감지
    $(window).on('hashchange', renderContent);
  });
  