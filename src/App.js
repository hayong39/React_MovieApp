import React from 'react';

function Food({ fav }){
  return <h1>I like {fav}</h1>;
}

const foodLike = [
  {
    name : 'Kimchi',
    image: 'https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp',
  },
  {
    name : 'Samgyeopsal',
    image: 'https://health.chosun.com/site/data/img_dir/2024/02/29/2024022901106_0.jpg'
  },
  {
    name : 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg'
  },
  {
    name : 'Doncasu',
    image: 'https://i.namu.wiki/i/gMSvGksMaKPdznDSM-QxYwYGN-K1zLqOzOpNSAfOwRlrlx6ZY61kOvHHeAHtk9RWrTnA1nnrPri_XkXSewEkpQ.webp',
  },
  {
    name : 'Kimbap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQ1DTL07L1zEUHRfypB3SVJ_sG1O38uL8DQ&s',
  },
];

function App() {
  return( 
    <div>
      <h1>Hello</h1>
      
    </div> 
  );
}

export default App;
