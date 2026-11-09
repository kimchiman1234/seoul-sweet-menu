import {createFileRoute} from '@tanstack/react-router';
import {useState} from 'react';
import './seoul.css';
export const Route=createFileRoute('/')({component:Home});
const photos={
 matcha:'https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/d7a94fbd-6a60-4d24-bd2e-c9272cebe913.jpg',
 latte:'https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/ef8d8412-2cec-4ed3-ad8d-630e0b4bafa0.jpg',
 coffee:'https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/444d487c-1c40-4a4e-a384-30700b18fcf0.jpg',
 sweetpotato:'https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/40a9a37d-977c-4ec8-a286-b91c61288f95.jpg',
 dessert:'https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/dd667d73-5e3a-43ba-b742-8f937b65dc60.jpg',
 tea:'https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/6d530475-41b7-4918-b1d7-e2e189bdd3f4.jpg',
 menu:'https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/8566c0e7-36ab-4122-acb5-b0a29fc9d9.jpg',
 sesame:'https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/df5b3604-e212-49ab-bbc0-f5349e6f475f.jpg'
};
type Item={name:string;price:string;cat:string;img?:string;desc?:string};
const items:Item[]=[
{name:'Americano',price:'$5',cat:'Coffee',desc:'HOT OR ICED'}, {name:'Latte',price:'$6',cat:'Coffee',img:photos.latte,desc:'HOT OR ICED'},{name:'Flat White',price:'$5',cat:'Coffee'},{name:'Cappuccino',price:'$5.50',cat:'Coffee'},{name:'Cafe Mocha',price:'$7.50',cat:'Coffee',desc:'HOT OR ICED'},{name:'Espresso',price:'$4',cat:'Coffee',desc:'HOT OR ICED'},
{name:'Einspanner',price:'$8.50',cat:'Einspanner',img:photos.coffee},{name:'Black Sesame Einspanner',price:'$8.50',cat:'Einspanner',img:photos.sesame},{name:'Matcha Einspanner',price:'$8.50',cat:'Einspanner'},{name:'Mugwort Einspanner',price:'$8.50',cat:'Einspanner'},{name:'Ube Einspanner',price:'$8.50',cat:'Einspanner'},{name:'Pandan Einspanner',price:'$8.50',cat:'Einspanner'},
{name:'Strawberry Matcha',price:'$10.25',cat:'Matcha & Chocolate',img:photos.matcha,desc:'ICED ONLY'},{name:'Matcha (Unsweet)',price:'',cat:'Matcha & Chocolate',desc:'Hot or iced'},{name:'Matcha (Sweet)',price:'',cat:'Matcha & Chocolate',desc:'Hot or iced'},{name:'Chocolate Forest',price:'$10.25',cat:'Matcha & Chocolate',desc:'Hot or iced'},{name:'Chocolate Latte',price:'',cat:'Matcha & Chocolate',desc:'Hot or Iced'},{name:'Jasmine',price:'$7.50',cat:'Tea'},{name:'Chamomile',price:'$7.50',cat:'Tea'},{name:'Peppermint',price:'$7.50',cat:'Tea'},{name:'Black Tea',price:'$7.50',cat:'Tea'},
{name:'Peach Iced Tea w/ Espresso',price:'$9',cat:'Signature Coffee',desc:'Espresso shot optional'},{name:'Dolce Latte',price:'$7.50',cat:'Signature Coffee',desc:'ICED ONLY'},{name:'Salted Caramel Latte',price:'$11',cat:'Signature Coffee',desc:'ICED ONLY'},{name:'Yuza Ade',price:'$9',cat:'Fresh Homemade'},{name:'Strawberry Ade',price:'$9',cat:'Fresh Homemade'},{name:'Strawberry Latte',price:'$9',cat:'Fresh Homemade'},
{name:'Hadong Green Tea Set',price:'$18',cat:'Set',desc:'Jooak or Yakgwa'},{name:'Jujube Tea Set',price:'$15',cat:'Set',desc:'Served with Cream Cheese-Filled Dried Persimmon'},
{name:'Da-on Sang',price:'$26',cat:'Set',desc:'Tea or Coffee'},{name:'Strawberry Mochi Set',price:'$23',cat:'Set'},{name:'Black Sesame Tiramisu',price:'',cat:'Desserts',desc:'Served with a half shot of espresso'},{name:'Injeolmi Tiramisu',price:'',cat:'Desserts',desc:'Served with a half shot of espresso'}];
items.push(
{name:'Jooak',price:'',cat:'Desserts'},
{name:'Yakgwa',price:'',cat:'Desserts'},
{name:'Strawberry Yakgwa',price:'',cat:'Desserts'},
{name:'Strawberry Jooak',price:'',cat:'Desserts'},
{name:'Injeolmi Jooak',price:'',cat:'Desserts'},
{name:'Strawberry Red Bean Mochi',price:'',cat:'Desserts'},
{name:'Strawberry Matcha Mochi',price:'',cat:'Desserts'},
{name:'Injeolmi Tteok',price:'',cat:'Desserts'}
);
items.forEach(item=>{item.price='';});
items.filter(item=>item.cat==='Desserts').forEach(item=>{
 const glutenFree=!(item.name==='Yakgwa'||item.name==='Strawberry Yakgwa');
 const note=glutenFree?'GLUTEN FREE':'NOT GLUTEN FREE';
 item.desc=item.desc?item.desc+' · '+note:note;
});
const dessertOrder=['Yakgwa','Strawberry Yakgwa','Jooak','Strawberry Jooak','Injeolmi Jooak','Black Sesame Tiramisu','Injeolmi Tiramisu'];
items.sort((a,b)=>a.cat==='Desserts'&&b.cat==='Desserts'?(dessertOrder.indexOf(a.name)<0?999:dessertOrder.indexOf(a.name))-(dessertOrder.indexOf(b.name)<0?999:dessertOrder.indexOf(b.name)):0);
for(const name of ['Black Sesame Cake','Mugwort Cake','Chocolate Cake','Mango Cake','Strawberry Cake','Blueberry Cake','Pure Cake'])items.push({name,price:'',cat:'Ssal Cake',desc:'Soft, sponge-like texture'});
items.push(
{name:'Black Sesame Bingsu',price:'',cat:'Bingsu',desc:'Rice cakes (tteok) and sweet red beans served on the side'},
{name:'Injeolmi Bingsu',price:'',cat:'Bingsu',desc:'Rice cakes (tteok) and sweet red beans served on the side'},
{name:'Ube Bingsu',price:'',cat:'Bingsu',desc:'Rice cakes (tteok) and sweet red beans served on the side'},
{name:'Mango Bingsu',price:'',cat:'Bingsu'},
{name:'Strawberry Bingsu',price:'',cat:'Bingsu'},
{name:'Matcha Bingsu',price:'',cat:'Bingsu'},
{name:'Strawberry Matcha Bingsu',price:'',cat:'Bingsu'}
);
items.push({name:'Peanut Latte',price:'',cat:'New Menu'},{name:'Sweet Potato Latte',price:'',cat:'New Menu'},{name:'Seoul Fog',price:'',cat:'New Menu'});
const cats=['All','New Menu','Ssal Cake','Bingsu','Coffee','Signature Coffee','Einspanner','Tea','Set','Matcha & Chocolate','Fresh Homemade','Desserts'];
function Home(){
 const [cat,setCat]=useState('All');
 const shown=items.filter(x=>cat==='All'||x.cat===cat);
 return <div className="ss ss-qr ss-video-first">
 <header className="ss-qr-header"><a href="#top" className="ss-qr-logo"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_3LGS8OOy9qmhM5PMN00gEsznODx/a4faabc8-38f5-4d7b-97a6-e8896299a813.png" alt="" className="ss-logo-mark"/>SEOUL SWEET</a><a className="ss-top-menu-link" href="#menu">MENU ↓</a></header>
 <main>
 <section id="top" className="ss-video-hero" aria-label="Pure Ssal featured video">
 <video autoPlay muted loop playsInline preload="auto" poster={photos.matcha} aria-label="Pure Ssal"><source src="/videos/seoul-sweet-hero.mp4" type="video/mp4"/></video>
 <div className="ss-video-overlay"><span>KOREAN DESSERT CAFÉ · NYC</span><h1><a href="#menu" className="ss-pure-ssal-link" aria-label="Explore Ssal Cake menu" onClick={() => setCat('Ssal Cake')}><img className="ss-pure-ssal-logo" src="/images/pure-ssal-logo.png" alt="Pure Ssal"/></a></h1></div>
 </section>
 <section className="ss-winter-feature" aria-label="New winter latte feature">
  <div className="ss-winter-feature-inner"><span className="ss-winter-kicker">NEW MENU · WINTER SPECIAL</span><h2>Winter Latte</h2><p>Something warm is coming.</p><span className="ss-winter-coming">COMING SOON</span></div>
 </section>
 <section id="menu" className="ss-qr-main ss-text-menu">
 <div className="ss-qr-heading"><p>SEOUL SWEET · NEW YORK CITY</p><h1>Our Menu</h1><span>Sweet Moments, Seoul Sweet.</span><p className="ss-milk-options">Regular or decaf coffee available. Oat milk and almond milk options available upon request.</p></div>
 <div className="ss-qr-tabs" role="group" aria-label="Menu categories">{cats.map(c=><button key={c} type="button" onClick={()=>setCat(c)} className={cat===c?'active':''} aria-pressed={cat===c}>{c}</button>)}</div>
 <div className="ss-qr-count">{cat==='All'?'ALL MENU':cat.toUpperCase()} <span>{shown.length} ITEMS</span></div>{cat==='Einspanner'&&<p className="ss-category-note">ICED ONLY</p>}
 {cat==='Einspanner'&&<p className="ss-einspanner-explainer"><strong>What is an Einspanner?</strong> A Korean café-style iced coffee topped with a thick layer of lightly sweetened cream. Enjoy it without stirring to taste the smooth cream and coffee together. <strong>Coffee is optional.</strong></p>}
 {cat==='Ssal Cake'&&<p className="ss-einspanner-explainer"><strong>What is Mugwort?</strong> Mugwort is an aromatic herb commonly used in Korean desserts. It has a distinctive earthy, slightly herbal flavor.</p>}
 <div className="ss-qr-items">{shown.map(item=><article className="ss-qr-item" key={item.name}><div className="ss-qr-details"><h2>{item.name}</h2>{item.desc&&!/^(hot or iced|iced only)$/i.test(item.desc)&&<p>{item.desc}</p>}{item.desc&&/^(hot or iced|iced only)$/i.test(item.desc)&&<small>{/^hot or iced$/i.test(item.desc)?<><span className="ss-hot-label">{item.desc.slice(0,3)}</span>{item.desc.slice(3)}</>:item.desc}</small>}{(item.name==='Flat White'||item.name==='Cappuccino')&&<small><span className="ss-hot-label">HOT</span> ONLY</small>}{item.cat==='Einspanner'&&cat==='All'&&<small>ICED ONLY</small>}{item.cat==='Tea'&&<small><span className="ss-hot-label">Hot</span> or iced</small>}{item.cat==='Fresh Homemade'&&<small>ICED ONLY</small>}</div>{item.price&&<strong>{item.price}</strong>}</article>)}</div>
 <p className="ss-qr-note text-red-600">If you have any food allergies, please inform a member of our team before ordering.</p>
 </section>
 </main><footer className="ss-qr-footer"><div className="ss-footer-brand"><a className="ss-footer-instagram" href="https://www.instagram.com/seoulsweetsnyc/" target="_blank" rel="noopener noreferrer" aria-label="Seoul Sweet Instagram"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a><a className="ss-footer-website" href="https://seoulsweetsnyc.com" target="_blank" rel="noopener noreferrer" aria-label="Contact Us on Seoul Sweet website">Contact Us ↗</a></div></footer>
 </div>;
}
