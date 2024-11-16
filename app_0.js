$(document).ready(function () {
    // 라우팅 정보
    const routes = {
      home: '<h1>Home Page</h1><p>Welcome to the home page!</p>',
      about: '<h1>About Page</h1><p>This is the about page.</p>',
      contact: '<h1>Contact Page</h1><p>Feel free to contact us.</p>'
    };
  
    // 해시 변경 시 콘텐츠 업데이트
    function renderContent() {
      const hash = window.location.hash.substring(1); // # 제거
      const content = routes[hash] || '<h1>404</h1><p>Page not found.</p>';
      $('.content').html(content);
    }
  
    // 초기 콘텐츠 로드
    renderContent();
  
    // 해시 변경 감지
    $(window).on('hashchange', renderContent);
  });
  