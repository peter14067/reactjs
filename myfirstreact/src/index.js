
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index1.css';
import './index.saas';

 var html = document.querySelector('html'); var rem = html.offsetWidth / 6.4; html.style.fontSize = rem + "px";
//import { TouchableOpacity } from 'react-native';

const precolor = 'white';

const black = "black";
const red = 'red';
const yellow = 'yellow';
const orange = 'orange';
 const myVar="";
const blue='blue';
let time = 40;//倒數7秒
let mny="";
let m="";
var bg=require('H:/工作備分/新增資料夾 (2)/reactjs/myfirstreact/src/demo.png')
var arrButtons = [];
class Main extends React.Component{
  constructor(props){
    super(props);


    
    this.state={
      test:[{id:1}],
      color:blue,
      //color:[{name:"yellow"},{name:"red"},{name:"blue"}],
      color1:precolor,
      color2:precolor,
      color3:precolor,
      color4:precolor,
      color5:precolor,
      color6:precolor,
      color7:precolor,
      color8:precolor,
      color9:precolor,
      color10:precolor,
      color11:precolor,
      color12:precolor,
      color13:precolor,
      color14:precolor,
      color15:precolor,
      color16:precolor,
      color17:precolor,
      color18:precolor,
      color19:precolor,
      color20:precolor,
      color21:precolor,
      color22:precolor,
      color23:precolor,
      color24:precolor,
      color25:precolor,
      color26:precolor,
      color27:precolor,
      color28:precolor,
      color29:precolor,
      color30:precolor,
      color31:precolor,
      color32:precolor,
      color33:precolor,
      color34:precolor,
      color35:precolor,
      color36:precolor,
      color37:precolor,
      color38:precolor,
      color39:precolor,
      color40:precolor,
      color41:precolor,
      color42:precolor,
      color43:precolor,
      color44:precolor,
      color45:precolor,
      color46:precolor,
      color47:precolor,
      color48:precolor,
      color49:precolor,



      data:[], 
      data2:[],
      data4:[],
      data6:[],
      data8:[],
      data10:[],
      num:[],
      money:[],
      bonus:[],
      cog:"",
      cog1:"",
      date: new Date(),
      time:40,
      ltwin:[],
      ltt:[],
      ltn:[],
      ltb:[],
      hint:["請在1~49選擇6個號碼"]
    }


    this.Ran=this.Ran.bind(this);
    this.Draw=this.Draw.bind(this);
    this.Select=this.Select.bind(this);
    this.MyCounter=this.MyCounter.bind(this);
    this.Bet=this.Bet.bind(this);
    this.Reset=this.Reset.bind(this);
    this.Auto=this.Auto.bind(this);
   
  }



  Auto=()=>
  {

   
    //if(data11.length!=0){
      //this.setState({...this.state,data4:[],data:[],cog:"",data8:[],ltn:[]})
    //}

    for(let i=0;i<=20;i++){
   
    if(this.state.data2.length<6){

  
    const element= Math.floor((Math.random()*49)+1);
  
    let newObject={}   
      newObject[`color${element}`]=orange.trim("")
  const data1=this.state.data2;
  
 //{console.log(data1)}
// {console.log(element)}

 if(data1.indexOf(element)===-1){
  
  data1.push(element);
  this.setState(newObject)
this.setState({data2:data1})
           }

       }
    
 }

 
  
 

}



Resetcolor=()=>{
for(let i=1;i<=49;i++){
  let newObject={}   
  newObject[`color${i}`]=precolor.trim("")
   
 this.setState(newObject)
}
}





  Reset=()=>
  {


    const m=this.state.data2
  
 

 this.Resetcolor();
  
  this.setState({data2:[]})

}


  Bet=()=>
  {
 const m=this.state.money
 const b=this.state.data2
 const p=this.state.data8
 const c=this.state.cog
 const d=this.state.hint
 const t=this.state.time
  let a=parseInt(m+500);
  




  if(p.length==0){

  if(c.length==0 ){
   
    if(time<40){
 if(b.length==6){

 alert("下注成功")
 
 this.setState({...this.state,num:b,money:a,data8:b,data2:[],hint:["成功選擇號碼,等待開獎中"]})
 this.Resetcolor()
 }else{
   alert("請選擇剩下號碼")
 }
}else{
  alert("開獎中，不能選擇號碼")
}

}else if(c.length!==0 ){
    if(time>40 && time<=60){
      
      alert("開獎中，不能選擇號碼")
    }

 
    }

  }else{
    alert("你已選擇號碼了")
  }
}






  Select=(e)=>
  {
 
    if(this.state.data2.length<6){
    
    
      
  

      let element=e.target.value
      //let a=this.state[`color${element}`]
      
     let newObject={}   
      newObject[`color${element}`]=orange.trim("")
     // {console.log(newObject[`color${element}`])}
     
    
      
      {console.log(newObject)}
    const data3=this.state.data2;
    
   //let b='color${element}';

   if(data3.indexOf(element)===-1){
    
    data3.push(element);
   
    this.setState(newObject)
    this.setState({data2:data3})

  //this.setState({...this.state,data2:data3})
             
}else {
               {alert("你已經選擇過了")}
             }
  


           
            
            


         }

         
 
}




Draw=(e)=>{
  const data1=this.state.data;
  //const data3=this.state.data2;
 
  const data3=this.state.data8;
  const m=this.state.money;
  const n=this.state.num;
  const h=this.state.hint
{console.log(data1)}
{console.log(data3)}
  if(data1.length==6 && data3.length==6){
  
  const data5=this.state.data4;

  
  const result=data3.map(function(x){
    return parseInt(x,10);
  
  });
 
 

  let a = new Set(data1);
let b = new Set(result); 
let intersectionSet = new Set([...a].filter(x => b.has(x)));
let arr = Array.from(intersectionSet );
//console.log(arr)}
//{console.log(arr.length)}
if(arr.length==0){
  {console.log(arr.length)}
let a=0
let b=m-a;
  /*
  const result=m.map(function(x){

    return m=m*1
    parseInt(x,10);
  
  });
 */
this.setState({...this.state,data4:arr,cog:"再接再厲吧",bonus:a,money:b,num:[],hint:["開獎中"]})
}else if(arr.length==1){
  {console.log(arr.length)}
  let a=0
  let b=m-a;
  this.setState({...this.state,data4:arr,cog:"再接再厲吧",bonus:a,money:b,num:[],hint:["開獎中"]})
}else if(arr.length==2){
  {console.log(arr.length)}
  let a=0;
  let b=m-a;
  this.setState({...this.state,data4:arr,cog:"再接再厲吧",bonus:a,money:b,num:[],hint:["開獎中"]})
}else if(arr.length==3){
  let a=Math.floor(m*(1/10));
  let b=m-a;
  alert("恭喜中肆獎!");
  this.setState({...this.state,data4:arr,cog:"你對中"+arr.length+"個號碼"+"-----"      +"是肆獎",bonus:a,money:b,num:[],hint:["開獎中"]})
}else if(arr.length==4){
  let a=Math.floor(m*(2/10));
  let b=m-a;
  alert("恭喜中參獎!");
  this.setState({...this.state,data4:arr,cog:"你對中"+arr.length+"個號碼"+"是"+arr.length+"是參獎",bonus:a,money:b,num:[],hint:["開獎中"]})
}else if(arr.length==5){
  let a=Math.floor(m*(3/10));
  let b=m-a;
  alert("恭喜中貳獎!");
  this.setState({...this.state,data4:arr,cog:"你對中"+arr.length+"個號碼"+"是"+arr.length+"是貳獎",bonus:a,money:b,num:[],hint:["開獎中"]})
}else if(arr.length==6){
  let a=Math.floor(m*(4/10));
  let b=m-a;
  alert("恭喜中頭獎!");
  this.setState({...this.state,data4:arr,cog:"你對中"+arr.length+"個號碼"+"---------"+arr.length+"是頭獎"})
}



this.Resetcolor()


}





  //{console.log(this.state.data6)}
  
 
 
      
  }


  

  MyCounter=()=>{
    const data9=this.state.data2
    const data13=this.state.data8
    const data14=this.state.num
    const one=this.state.data
    //const element= Math.floor((Math.random()*10)+1);
    
    const e=this.state.data
    const l=this.state.data4
   const c=this.state.data8
   const d=this.state.data10
   const f=this.state.ltwin
   const h=this.state.cog
   const i=this.state.ltn
   const k=this.state.bonus
   const q=this.state.hint
    if(time>0){
      
    


      if(time==40){

        if(h.length!=0){
          this.setState({...this.state,hint:["請在1~4選擇6個號碼"]})
        }

        if(e.length!=0){
          this.setState({...this.state,data10:e,data:[],ltn:[],ltwin:[],cog1:h,ltb:[],hint:["請在1~4選擇6個號碼"]})
        }

        if(e.length!=0 && c.length!=0 && d.length!=0 ){

        }

        if(e.length!=0  && h.length!=0 &&d.length!=0 &&f.length!=0 &&i.length!=0){

          this.setState({...this.state,data10:e,ltn:[],ltwin:[],data8:[],data4:[],bonus:[],ltt:h,cog1:h,cog:[],ltb:[],hint:["請在1~4選擇6個號碼"]})
        
        
         }


        if(e.length!=0 && c.length!=0 && h.length!=0){

        this.setState({...this.state,data10:e,data:[],ltn:c,ltwin:l,data8:[],data4:[],data:[],bonus:[],ltt:h,cog:[],ltb:k,hint:["請在1~4選擇6個號碼"]})
      
      
       }
    }

    
      time-=1; 
      this.setState({...this.state,time:time})
      //倒數完成
    }else{
      if(data13.length==6){
        this.Draw()
       // this.setState({...this.state,data8:[]})
      }
     // mny=parseInt(mny+element);
     
     


     
      //this.setState({...this.state,money:mny})
      {console.log(data14)}
      if(data14.length==6){
      this.setState({...this.state,data2:[],data4:[],cog:""})
      }else{
      this.setState({...this.state,data4:[],cog:""})
    }
      //this.setState({...this.state,data10:one,data:[],data8:data9,data2:[],data4:[],cog:"",money:mny})
      this.Ran();
      this.Draw();

     time=60
      this.setState({...this.state,time:60})
      /*
      }else{
        this.Ran();
        time=8
        this.setState({...this.state,time:8})
        */
      }
    
    
   
    return time;
  }


 
  
  Ran=()=>{
    
    const data11=this.state.data4
    //if(data11.length!=0){
      //this.setState({...this.state,data4:[],data:[],cog:"",data8:[],ltn:[]})
    //}

    for(let i=0;i<=20;i++){
   
    if(this.state.data.length<6){

  
    const element= Math.floor((Math.random()*49)+1);
  
    
  const data1=this.state.data;
  
 //{console.log(data1)}
// {console.log(element)}

 if(data1.indexOf(element)===-1){
  
  data1.push(element);
 
this.setState({...this.state,data:data1,hint:["開獎中"]})
           }

       }
    
 }

}






componentDidMount() {
  
 
  //if(this.state.2)
  //this.timerId  = setInterval(this.Ran,1000);
  
  
  //this.timerId  = setInterval(this.Draw,1000);
  

  this.timerId  = setInterval(this.MyCounter,1000);


  
}


componentWillUnmount() {
  
  clearInterval(this.timerId);

}




  render() {

  
    let arrLists = this.state.data8;
    let arrLists1 = this.state.data;
    let arrLists2=this.state.data4;
    
    let arrLists3=this.state.data2;
    {this.state.data8.sort(function(a,b){return a-b}
    )}
   

        //在巡訪時將arrLists用<li>包起來回傳
        let lists = arrLists.map(function(list){return <p1>{list}</p1>})
        let lists1 = arrLists1.map(function(list){return <p1>{list}</p1>})
        let prizenumber = arrLists2.map(function(list){return <p2>{list}</p2>})
        let selectnumber = arrLists3.map(function(list){return <p1>{list}</p1>})
     
      let v=""
      const arrButtons=[];
      for(let i=1;i<=49;i++){
                //id={"color"+i}
        //arrButtons.push( <button  style={{fontSize:"40px",background:lightblue,color:this.state.colori} }
        arrButtons.push(
         
        <button  style={{backgroundColor:this.state[`color${i}`]}}
        type="button"  value={i} class={"color"}
        onClick={(e)=>this.Select(e,this.state) } >{i}</button>)
       
        /*


        
        arrButtons.push( <p1><button style={{background:"transparent",border:"none",color:"white",textAlign:"center",padding:"0.005vh"}}
          type="button" button id={i} key={i}
          onClick={(e)=>this.Select(e,this.state)}>{i}</button></p1>)
          */
      }
    let lotterynumber= arrButtons.map(function(list){return <div >{list}</div>})


    return ( 

      
      <div>
      
      <div style={{display:"block"}}>
      <h1 >下次開獎倒數  {this.state.time}  秒    累積獎金 $ {this.state.money}  </h1>  
    
      </div>
      <div  style={{backgroundColor:"lightgrey",width:"100%"}}>
      <div><h2 style={{backgroundColor:"grey"}}> {this.state.hint}</h2>
      <div class="p3">{selectnumber}</div>
      </div>
      <div class='container1' >{lotterynumber}      </div>
      
     </div>
     
     <div class="empty">
       
      </div>
      
     <div >
     
     <div style={{backgroundColor:"lightgrey",display:"block"}}>
      
     <div class="flex-column1">
      <button style={{fontSize:"1em",width:"30%",marginLeft:"0",marginRight:"3%",backgroundColor:"greenyellow",position:"relative"}}
          type="button" onClick={this.Reset}
        >重新選擇</button>  
      
      <button
          type="button" onClick={this.Auto} class={"auto2"}
        >自動選號</button>  
        

<button  class="sure"   
  
          type="button" onClick={this.Bet}
        >確定</button>  
        
       
     
      </div>
      </div>
      </div>
     
        <h1>玩家選號</h1>       
        <p4>{lists}</p4>
        <h1 >當期樂透號碼</h1>
        <p4>{lists1}</p4>        
        
        <h1>中獎號碼</h1>
        <div>{prizenumber}</div>

        
        <div class='bonus1'>{this.state.cog}</div>
        <h1>中獎金額</h1>
        <div class='bonus1'>{this.state.bonus}</div>


        


        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
       
        <button 
          id="button2"
          type="button" 
         
          onClick={this.Draw}
        >開獎</button>


<button
       
       id="button2"
       type="button" 
       onClick={this.Ran}
     
     ></button>
        </div>
       

 
    );
  }



}
/*
<h3>上期開獎號碼</h3>
<h4>({this.state.data6[0]})({this.state.data6[1]})({this.state.data6[2]})({this.state.data6[3]})({this.state.data6[4]})({this.state.data6[5]})</h4>
<h3>上期玩家號碼</h3>
<h2>{this.state.data2.sort(function(a,b){return a-b}
)}{this.state.data8[0]}  {this.state.data8[1]}  {this.state.data8[2]}  {this.state.data8[3]}  {this.state.data8[4]}  {this.state.data8[5]}</h2>
<h2>中獎號碼</h2>
<h2>({this.state.data4[0]})({this.state.data4[1]})({this.state.data4[2]})({this.state.data4[3]})({this.state.data4[4]})({this.state.data4[5]})</h2>
<h3 style={{color:blue}}>{this.state.cog}</h3>
*/




ReactDOM.render( <Main/>,  document.getElementById('root'));
/*
function tick(){
  var week = new Array("Sunday","Monday","Tuesday","Wednesday",
                              "Thursday","Friday","Saturday")
  const element = (
    <div>
       <h1>Cherish EVERY MOMENT!</h1>
       <div id="calendar">
          <h3 id="date">{new Date().getDate()}</h3>
          <h2 id="day">{new Date().getFullYear()} / {new Date().getMonth()+1}</h2>
          <h2 id="weekday">{week[new Date().getDay()]}</h2>
          <h2 id="time_now">{new Date().toLocaleTimeString().split("上午")}</h2>
          </div>
    </div>
  )



    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
setInterval(tick, 1000);
*/