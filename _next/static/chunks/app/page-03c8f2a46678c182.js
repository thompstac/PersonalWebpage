(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1385:function(e,i,o){Promise.resolve().then(o.bind(o,6279))},6279:function(e,i,o){"use strict";o.r(i),o.d(i,{default:function(){return c}});var a=o(7437),t=o(2265),s=o(6691),r=o.n(s);let l=[{name:"Mental Exercises",primary:"#b33687",secondary:"#f2adda"},{name:"Body Awareness",primary:"#e79775",secondary:"#ebcfc4"},{name:"Visualization Activities",primary:"#7c68d1",secondary:"#bdb0f3"},{name:"Labor Positions",primary:"#8ec4cb",secondary:"#d1f9fe"},{name:"Birth Positions",primary:"#89e1ae",secondary:"#d2fce4"}],n=[{id:"1",title:"Deep Breathing",description:"Practice deep breathing techniques",details:"Inhale deeply through your nose for 4 counts, hold for 4 counts, then exhale slowly through your mouth for 6 counts. Repeat 5 times.",imageUrl:"/images/wed.jpg",category:"Body Awareness"},{id:"2",title:"Progressive Muscle Relaxation",description:"Relax your body from head to toe",details:"Start by tensing and then relaxing each muscle group in your body, beginning with your toes and working your way up to your head.",imageUrl:"/images/wed.jpg",category:"Mental Exercises"},{id:"3",title:"Gentle Swaying",description:"Move your body gently from side to side",details:"Stand with your feet shoulder-width apart and gently sway your hips from side to side. This can help ease discomfort and promote relaxation.",imageUrl:"/images/wed.jpg",category:"Body Awareness"},{id:"4",title:"Positive Affirmation",description:"Repeat a positive affirmation",details:'Say to yourself: "I am strong, capable, and ready to bring new life into this world." Repeat this affirmation several times, focusing on its meaning.',imageUrl:"/images/wed.jpg",category:"Mental Exercises"},{id:"5",title:"Peaceful Place Visualization",description:"Visualize a calm and peaceful place",details:"Close your eyes and imagine yourself in a serene, peaceful place. It could be a beach, a forest, or any place that makes you feel calm and relaxed. Focus on the details of this place using all your senses.",imageUrl:"/images/wed.jpg",category:"Visualization Activities"},{id:"6",title:"Yoga Ball Child's Pose",description:"Rest and relax using a birth ball for support",details:"Kneel on the ground with a birth ball in front of you. Drape your upper body over the ball, allowing it to support your weight. This position can help relieve back pressure and provide comfort during contractions.",imageUrl:"/images/wed.jpg",category:"Labor Positions"},{id:"7",title:"asdf",description:"asdf",details:"asdfd",imageUrl:"/images/wed.jpg",category:"Birth Positions"}];function d(e){let{category:i,onClose:o,theme:s}=e,[l,d]=(0,t.useState)(0),c=n.filter(e=>e.category===i),u=c[l];return(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:i}),(0,a.jsxs)("div",{className:"bg-white rounded-lg p-4 max-w-md w-full",style:{backgroundColor:s.lightColor,color:s.color},children:[(0,a.jsx)(r(),{src:u.imageUrl,alt:u.title,width:400,height:300,className:"w-full h-64 object-cover rounded-lg mb-4"}),(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:u.title}),(0,a.jsx)("p",{className:"mb-2",children:u.description}),(0,a.jsx)("p",{className:"mb-4",children:u.details}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("button",{className:"px-4 py-2 rounded-lg text-white font-semibold",style:{backgroundColor:s.color},onClick:()=>{d(e=>(e+1)%c.length)},children:"Next Card"}),(0,a.jsx)("button",{className:"px-4 py-2 rounded-lg text-white font-semibold",style:{backgroundColor:s.color},onClick:o,children:"Close"})]})]})]})}function c(){let[e,i]=(0,t.useState)(null);return(0,a.jsx)("div",{children:e?(0,a.jsx)(d,{category:e,onClose:()=>i(null),theme:{color:l.find(i=>i.name===e).primary,lightColor:l.find(i=>i.name===e).secondary}}):(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:l.map(e=>(0,a.jsx)("button",{className:"p-4 rounded-lg text-lg font-semibold transition-colors",style:{backgroundColor:e.primary,color:"#fbd4d6"},onClick:()=>i(e.name),children:e.name},e.name))})})}}},function(e){e.O(0,[986,971,596,744],function(){return e(e.s=1385)}),_N_E=e.O()}]);