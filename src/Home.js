import React from 'react'
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
     <img className="home__image" src="https://www.seekpng.com/png/detail/409-4097069_fw-1-e-commerce-banner-png.png" alt="" />
      <div className="home__row">

      
      <Product
      id="1"
      title="boAt Xtend Smartwatch"
      price={2999}
     
      image="https://m.media-amazon.com/images/I/61gscZYmaoL._SX679_.jpg"
       />
       <Product
      id="1"
      title="Galaxy Watch4 Classic LTE"
      price={2799}
      
      image="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-classic-399180-sm-r885fzkainu-481180588?$684_547_PNG$"
       />
       <Product
      id="1"
      title="SPORTS AUTOMATIC WATCH"
      price={4000}
      
      image="https://seikowatches.cdn.imgeng.in/s/files/1/0322/8424/6155/products/SRPD61K1-1_800x.png?v=1593763834"
       />
       
       </div>
       <div className="home__row">

      
<Product
id="4"
title="Men Silver-Toned Analogue Watch "
price={3000}

image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13036796/2021/1/6/bb6d18c9-39c1-4632-bc4a-f452606965ef1609906124788-WROGN-Men-Silver-Toned-Analogue-Watch-WRG00048A-802160990612-1.jpg"
 />
 <Product
id="5"
title="Women Mauve Analogue Watch"
price={2799}

image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2278228/2018/4/5/11522913267047-DressBerry-Women-Watches-7501522913266942-2.jpg"
 />
 <Product
id="6"
title="Premium Women Silver-Toned Dial Watch"
price={1500}

image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1620103/2020/11/17/e534cf64-eb40-495e-a44f-4d6d31cced0c1605623766871-Daniel-Klein-Premium-Women-Silver-Toned-Dial-Watch-DK11138-2-1.jpg"
 />
 
 </div>
 <div className="home__row">

      
<Product
id="7"
title="Fire-Boltt Ring Bluetooth Calling Smartwatch"
price={2999}

image="https://images-eu.ssl-images-amazon.com/images/I/41j0nKUhLqL._SX300_SY300_QL70_FMwebp_.jpg"
 />
 <Product
id="8"
title="Poland Intelligence Bluetooth Wrist Smartwatch"
price={3999}

image="https://m.media-amazon.com/images/I/41GTuDApq9L.jpg"
 />
 <Product
id="9"
title="SPORTS AUTOMATIC WATCH"
price={4000}

image="https://m.media-amazon.com/images/I/81BDpSIwu3L._UY679_.jpg"
 />
 
 </div>
    </div>
  )
}

export default Home