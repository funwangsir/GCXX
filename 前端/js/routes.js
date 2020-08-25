routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/find/',
    url: './pages/find.html',
  },
  {
    path: '/send/',
    url: './pages/send.html',
  },
   {
    path: '/My/',
    url: './pages/My.html',
  },
  {
  	path : '/list/',
  	url : './pages/list.html',
  },
   {
  	path : '/furniture/',
  	url : './pages/furniture.html',
  },
  {
  	path : '/display/',
  	url  : './pages/display.html',
  },
   {
    path: '/myinfo/',
    url: './pages/myinfo.html',
  },
  {
  	path : '/selectList/',
  	url  : './pages/selectList.html', 
  },
   {
  	path : '/set/',
  	url  : './pages/set.html', 
  },
 // 默认路由（404页）需要放在最后面
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
