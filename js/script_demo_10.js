function showdemo(week) {
  const p = document.querySelector('.show-classdemo');
  console.log('p', p);
  switch (week) {
    case 'w1':
      p.innerHTML = `<iframe src="./demo/w01_dom_10/index.html" width="100%" height="100%" />`;
      break;
    case 'w2':
      p.innerHTML = `<iframe src="./demo/w02_titactoe_10/tictactoe.html" width="100%" height="100%" />`;
      break;
    case 'w3-p1':
      p.innerHTML = `<iframe src="./demo/w03_basics_10/p1_10/p1_10.html" width="100%" height="100%" />`;
      break;
    case 'w3-p2':
      p.innerHTML = `<iframe src="./demo/w03_basics_10/p2_10/p2_10.html" width="100%" height="100%" />`;
      break;
    case 'w3-p3':
      p.innerHTML = `<iframe src="./demo/w03_basics_10/p3_10/p3_10.html" width="100%" height="100%" />`;
      break;
    case 'w4-p4':
      p.innerHTML = `<iframe src="./demo/w04_basics_10/p4_10/p4_10.html" width="100%" height="100%" />`;
      break;
    case 'w4-p5':
      p.innerHTML = `<iframe src="./demo/w04_basics_10/p5_10/p5_10.html" width="100%" height="100%" />`;
      break;
    case 'w4-p6':
      p.innerHTML = `<iframe src="./demo/w04_basics_10/p6_10/p6_10.html" width="100%" height="100%" />`;
      break;
    case 'w5':
      p.innerHTML = `<iframe src="./demo/w05_menu_10/index_10.html" width="100%" height="100%" />`;
      break;
  }
}
