import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import calm from './calm.mp3';
import calm1 from './calm1.mp3';
import calm2 from './calm2.mp3';
import calm3 from './calm3.mp3';
import calm4 from './calm4.mp3';
import calm5 from './calm5.mp3';

import stress from "./stress.jpg";

let all_product = [
  {
    id: 1,
    name: "Reduce Stress, Welcome Peace",
    category: "Plans",
    image: p1_img,
    new_price: 500.0,
    old_price: 850.5,
    audio: calm,
   timetableimg:stress
    

  },
  {
    id: 2,
    name: "Controls anxiety",
    category: "Plans",
    image: p2_img,
    new_price: 850.0,
    old_price: 1200,
    audio: calm
    
    
  },
  {
    id: 3,
    name: "Inner Happiness",
    category: "Plans",
    image: p3_img,
    new_price: 600.0,
    old_price: 1000,
    audio: calm1
    
  },
  {
    id: 4,
    name: "Overall Mental Wellness",
    category: "Plans",
    image: p4_img,
    new_price: 1000.0,
    old_price: 1500.0,
    audio: calm1
    
  },
  {
    id: 5,
    name: "Emotional Health and Cognitive Focus",
    category: "Plans",
    image: p5_img,
    new_price: 850.0,
    old_price: 1200.5,
    audio: calm2
    
    
  },
  {
    id: 6,
    name: " reduce age-related memory loss",
    category: "Plans",
    image: p6_img,
    new_price: 800.0,
    old_price: 1200,
    audio: calm2
  },
  {
    id: 7,
    name: "Can generate kindness",
    category: "Plans",
    image: p7_img,
    new_price: 700.0,
    old_price: 1000,
    audio: calm3
  },
  {
    id: 8,
    name: "May help fight addictions",
    category: "Plans",
    image: p8_img,
    new_price: 1400,
    old_price: 2000,
    audio: calm3
  },
  {
    id: 9,
    name: "Improves sleep",
    category: "Plans",
    image: p9_img,
    new_price: 850,
    old_price: 1200,
    audio: calm4
  },
  {
    id: 10,
    name: "Energy Boost and Overall Wellness",
    category: "Plans",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
    audio: calm4
  },
  {
    id: 11,
    name: "Meditation and Relaxation",
    category: "Plans",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    audio: calm5
  },
  {
    id: 12,
    name: "General Wellness",
    category: "Plans",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
    audio: calm5
  }
];

export default all_product;
