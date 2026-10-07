(()=>{var Ie={dt:.008333333333333333,radius:.42,height:.9,run:7.5,groundAccel:70,airAccel:38,groundFriction:14,gravity:32,jump:11.5,jumpCut:.45,doubleJump:10,maxFall:26,coyote:.12,jumpBuffer:.14,dashSpeed:18,dashTime:.2,dashCooldown:.45,glideFall:2.2,poundSpeed:26,poundHang:.14,bounce:16,superBounce:21,stompBounce:11,updraft:46,updraftMax:9,maxHearts:3,unlocks:{doubleJump:0,flop:1,dash:2,glide:3},bonusStars:12};var ge=(i,e,t,n,s,r,o={})=>Object.assign({x:i,y:e,z:t,w:n,d:s,style:r},o),qt=(i,e,t)=>{let n=[];for(let s=0;s<t;s++){let r=t===1?.5:s/(t-1);n.push([i[0]+(e[0]-i[0])*r,i[1]+(e[1]-i[1])*r,i[2]+(e[2]-i[2])*r])}return n},Ot=(i,e,t,n=2)=>qt(i,e,t).map((s,r)=>{let o=t===1?.5:r/(t-1);return[s[0],s[1]+Math.sin(o*Math.PI)*n,s[2]]}),yr=(i,e,t)=>{let n=[];for(let s=0;s<t;s++){let r=s/t*Math.PI*2;n.push([i[0]+Math.cos(r)*e,i[1],i[2]+Math.sin(r)*e])}return n},Gn=(i,e,t=1)=>qt(i,[i[0],i[1]+t*(e-1),i[2]],e),Ss=(...i)=>[].concat(...i),on=[{id:"bedroom",name:"Cozy Bedroom",blurb:"The floor is lava! Hop across the toys to bedtime.",theme:"bedroom",music:0,sky:["#bfe3ff","#ffe9f2"],fog:16771570,fogFar:140,floor:{y:-6,kind:"goo",color:16727439},spawn:[0,0,1.5],goal:[0,5,-65.5],platforms:[ge(0,0,0,8,8,"rug"),ge(0,0,-8,4,4,"books"),ge(0,1,-13,4,4,"block"),ge(0,2,-18,4,4,"block"),ge(6,3,-18,2,2,"block"),ge(0,2,-25,2,8,"wood"),ge(0,2,-34,8,6,"rug"),ge(0,2,-41,3,3,"wood",{move:{dx:4,period:4.5}}),ge(0,2,-47,4,4,"books"),ge(-6,.5,-52,3,3,"block"),ge(0,3,-52,3,3,"block"),ge(0,4.5,-56,3,3,"block"),ge(0,5,-63,10,8,"bed"),ge(4,6.5,-60.5,2,2,"cushion")],fish:Ss(qt([0,.6,-1.5],[0,.6,-3.5],3),Ot([0,.6,-4.5],[0,.6,-6.5],3,1),Ot([0,.6,-9],[0,1.6,-12],3,1.2),Ot([0,1.6,-14],[0,2.6,-17],3,1.2),qt([0,2.6,-22],[0,2.6,-28],5),yr([0,2.6,-34],2,6),qt([0,2.6,-46],[0,2.6,-48],2),Ot([0,3.6,-52.5],[0,5.1,-56],3,1.5),qt([-3,5.6,-61],[3,5.6,-61],4),[[-6,1.1,-50.8],[-6,1.1,-53.2]]),stars:[[6,4,-18],[-6,1.5,-52],[4,7.6,-60.5]],hearts:[[3,2.8,-32]],enemies:[{type:"bunny",x:-2.5,y:2,z:-35,dx:5,speed:1.4}],hazards:[{x:1.2,y:2,z:-48.2,w:1.2,d:1.2}],checkpoints:[[3,2,-36]],signs:[{x:-2.6,y:0,z:-2,text:`WASD / arrows to swim
Space to jump!`},{x:2.6,y:0,z:-2.5,text:`Hold Space to
jump higher`},{x:-3,y:2,z:-32,text:`Land on dust bunnies
to bop them!`},{x:-1.6,y:5,z:-60,text:`Snuggle the pillow
to finish!`}],decor:[{type:"plant",x:-8,y:-6,z:-14,s:4},{type:"block",x:9,y:-6,z:-30,s:4,color:16752451,letter:"B"},{type:"block",x:-10,y:-6,z:-40,s:5,color:7324639,letter:"L"},{type:"block",x:10,y:-6,z:-50,s:3.5,color:10475627,letter:"\xC5"},{type:"mug",x:9,y:-6,z:-8,s:3,color:16765286}]},{id:"kitchen",name:"Kitchen Counter",blurb:"Sponges, mugs and sliding chopping boards.",theme:"kitchen",music:1,sky:["#ffe8a3","#fff6e9"],fog:16774889,fogFar:150,floor:{y:-8,kind:"goo",color:15217967},spawn:[0,0,1.5],goal:[0,5,-82],platforms:[ge(0,0,0,8,8,"counter"),ge(0,0,-11,4,4,"board"),ge(8,-3,-11,3,3,"sponge",{type:"bounce"}),ge(0,2.5,-16,2.5,2.5,"mug"),ge(0,2.5,-22,6,6,"counter"),ge(0,2.5,-29,3,3,"sponge",{type:"bounce"}),ge(0,7,-34,6,4,"shelf"),ge(0,7,-40,3,3,"board",{move:{dx:4,period:3.5}}),ge(0,7,-46.5,3,3,"board",{move:{dx:4,period:3.5,phase:.5}}),ge(0,7,-54,6,6,"counter"),ge(0,4,-62,4,4,"mug"),ge(-8,4,-62,3,3,"sponge",{type:"bounce"}),ge(-8,9,-66,3,3,"shelf"),ge(0,4,-72,4,4,"board"),ge(0,5,-80,8,8,"counter")],fish:Ss(Ot([0,.6,-4.5],[0,.6,-8.5],5,2.2),Ot([0,.6,-13],[0,3.1,-15],3,1.8),qt([-2,3.1,-20],[2,3.1,-24],4),Gn([0,4,-29],4,1.2),Ot([0,7.6,-36.5],[0,7.6,-52],7,1.5),yr([0,7.6,-54],2,6),Ot([0,7.6,-57.5],[0,4.6,-60.5],3,1.2),Ot([0,4.6,-64.5],[0,4.6,-69.5],5,2.6),qt([-2,5.6,-78],[2,5.6,-78],3),Gn([8,-1,-11],3,1.2)),stars:[[8,1.6,-11],[-8,10,-66],[5.5,9.5,-54]],hearts:[[0,7.8,-56]],enemies:[{type:"bunny",x:-2,y:2.5,z:-22,dx:4,speed:1.6},{type:"bunny",x:2,y:7,z:-52.5,dx:-4,speed:1.8}],hazards:[{x:2.2,y:2.5,z:-24.2,w:1.2,d:1.2},{x:-2.2,y:7,z:-56,w:1.2,d:1.2}],checkpoints:[[2,7,-34],[3,5,-78]],signs:[{x:-2.6,y:0,z:-2.5,text:`NEW: Double jump!
Space again in the air`},{x:-2.2,y:2.5,z:-26,text:`Sponges are
super bouncy!`}],decor:[{type:"mug",x:10,y:-8,z:-20,s:5,color:7324639},{type:"mug",x:-11,y:-8,z:-45,s:6,color:16752451},{type:"plant",x:11,y:-8,z:-70,s:5},{type:"mug",x:-10,y:-8,z:-5,s:4,color:16757702}],extraPlatforms:[ge(5.5,8,-54,2,2,"mug")]},{id:"shelf",name:"Bookshelf Climb",blurb:"Crumbly cookies, robo-vacuums and a long way up.",theme:"shelf",music:2,sky:["#c9b6ff","#ffe0f0"],fog:15850751,fogFar:150,floor:{y:-6,kind:"goo",color:10173951},spawn:[0,0,1.5],goal:[0,16,-67],platforms:[ge(0,0,0,8,8,"shelf"),ge(0,1.5,-7,4,4,"books"),ge(0,2.5,-12,2.5,2.5,"cookie",{type:"crumble"}),ge(0,3.5,-16.5,2.5,2.5,"cookie",{type:"crumble"}),ge(0,4.5,-21,2.5,2.5,"cookie",{type:"crumble"}),ge(0,5,-27,8,5,"shelf"),ge(-7,5,-27,2.5,2.5,"sponge",{type:"bounce"}),ge(0,5,-33,3,3,"sponge",{type:"bounce"}),ge(0,12,-38,8,5,"shelf"),ge(0,12,-46,3,3,"books"),ge(6,9,-46,3,3,"books"),ge(0,12,-52,3,3,"books",{move:{dy:2,period:4}}),ge(0,16,-58,6,6,"shelf"),ge(0,16,-66,8,6,"shelf")],crates:[{x:2.5,y:5,z:-28.5,item:"star"},{x:6,y:9,z:-46,item:"star"},{x:-2.5,y:12,z:-39.5,item:"heart"},{x:1,y:1.5,z:-7.5,item:"fish"}],fish:Ss(Ot([0,2.1,-10],[0,3.1,-12],2,1),Ot([0,3.1,-14],[0,4.1,-16.5],2,1),Ot([0,4.1,-18.5],[0,5.1,-21],2,1),qt([-3,5.6,-25.5],[3,5.6,-25.5],5),Gn([0,7,-33],6,1.4),qt([-3,12.6,-37],[3,12.6,-37],4),qt([0,12.6,-44],[0,12.6,-47.5],3),Gn([0,14,-52],3,1.2),yr([0,16.6,-58],2,6),Gn([-7,7,-27],4,1.5)),stars:[[-7,13.5,-27]],hearts:[],enemies:[{type:"roomba",x:-2.5,y:5,z:-27,dx:5,speed:1.6},{type:"roomba",x:2.5,y:12,z:-38,dx:-5,speed:1.8},{type:"bunny",x:-2,y:16,z:-58,dx:4,speed:1.8}],hazards:[{x:-2.8,y:0,z:-2.8,w:1.2,d:1.2}],checkpoints:[[3,5,-29],[-3,16,-59.5]],signs:[{x:-2.4,y:0,z:-2,text:`NEW: Belly flop!
Press C in the air`},{x:2.6,y:0,z:-2.2,text:`Flop on crates
to crack them`},{x:-2.4,y:5,z:-30,text:`Flop on a sponge
for a SUPER bounce!`},{x:3,y:1.5,z:-5.5,text:`Cookies crumble!
Keep moving`}],decor:[{type:"block",x:10,y:-6,z:-20,s:6,color:16744355,letter:"H"},{type:"plant",x:-11,y:-6,z:-8,s:5},{type:"block",x:-12,y:-6,z:-50,s:7,color:7324639,letter:"A"},{type:"block",x:12,y:-6,z:-60,s:5,color:16765286,letter:"J"}]},{id:"rooftops",name:"Rooftop Breeze",blurb:"Big gaps above the clouds. Time to dash!",theme:"rooftops",music:3,sky:["#ff9fb3","#ffd9a0"],fog:16765616,fogFar:170,floor:{y:-10,kind:"clouds",color:16777215},spawn:[0,0,1.5],goal:[0,11,-90],platforms:[ge(0,0,0,8,8,"roof"),ge(0,0,-14,4,4,"roof"),ge(0,2,-19,2.5,2.5,"chimney"),ge(0,4,-24,2.5,2.5,"chimney"),ge(0,4,-32,8,6,"roof"),ge(15.5,4,-32,3,3,"cloud"),ge(-7,4,-32,2.5,2.5,"sponge",{type:"bounce"}),ge(0,4,-42,3,3,"balloon",{move:{dx:5,period:5}}),ge(0,5,-52,3,3,"balloon",{move:{dx:5,period:5,phase:.5}}),ge(0,5,-62,6,6,"roof"),ge(0,5,-69,3,3,"sponge",{type:"bounce"}),ge(0,11,-75,8,6,"roof"),ge(0,11,-89,6,6,"roof")],crates:[{x:2.5,y:11,z:-76.5,item:"star"},{x:-1.5,y:5,z:-63.5,item:"heart"},{x:2.5,y:4,z:-33.5,item:"fish"}],fish:Ss(qt([0,1.5,-5],[0,1.5,-11],6),Ot([0,.6,-16],[0,2.6,-18.5],2,1),Ot([0,2.6,-20.5],[0,4.6,-23.5],2,1),yr([0,4.6,-32],2.2,6),qt([4.5,5,-32],[13.5,5,-32],6),qt([0,5.6,-45],[0,5.6,-49],3),qt([0,5.6,-55.5],[0,5.6,-59],3),Gn([0,7,-69],4,1.4),qt([0,12.5,-79],[0,12.5,-85],5)),stars:[[15.5,5,-32],[-7,12,-32]],hearts:[],enemies:[{type:"bunny",x:-2.5,y:4,z:-30.5,dx:5,speed:2},{type:"bunny",x:2.5,y:4,z:-33.5,dx:-5,speed:2},{type:"roomba",x:-2,y:11,z:-74,dx:4,speed:2}],hazards:[{x:2,y:5,z:-61,w:1.2,d:1.2}],checkpoints:[[-3,4,-34],[-2,5,-64]],signs:[{x:-2.5,y:0,z:-2.5,text:`NEW: Torpedo dash!
Press Shift`},{x:2.6,y:0,z:-2.5,text:`Jump, double jump,
THEN dash far!`}],decor:[{type:"cloud",x:20,y:-4,z:-20,s:2.5},{type:"cloud",x:-22,y:2,z:-50,s:3},{type:"cloud",x:18,y:6,z:-80,s:2.5},{type:"cloud",x:-18,y:-6,z:-10,s:2},{type:"cloud",x:-5,y:18,z:-110,s:4}]},{id:"dreamsea",name:"Dream Sea",blurb:"Glide over a sleepy, starry ocean.",theme:"dreamsea",music:4,sky:["#1b1f4a","#5a4b9c"],fog:3881594,fogFar:160,night:!0,floor:{y:-12,kind:"sea",color:1194618},spawn:[0,10,1.5],goal:[0,15,-110],platforms:[ge(0,10,0,8,8,"island"),ge(0,4,-22,6,6,"island"),ge(16,8,-32,3,3,"crystal"),ge(0,12,-40,6,6,"island"),ge(0,12,-48,3,3,"bubble",{move:{dy:3,period:5,phase:.25}}),ge(0,18,-56,6,6,"island"),ge(0,8,-82,6,6,"island"),ge(0,8,-94,4,4,"crystal",{move:{dx:3,period:4}}),ge(0,8,-100,3,3,"sponge",{type:"bounce"}),ge(0,15,-108,8,8,"island")],updrafts:[{x:0,z:-32,r:1.8,y0:2,y1:14},{x:-9,z:-56,r:1.6,y0:12,y1:26}],crates:[{x:2,y:4,z:-23.5,item:"star"},{x:-2,y:18,z:-57.5,item:"heart"}],fish:Ss(Ot([0,10.6,-4.5],[0,5,-18.5],8,1.5),Gn([0,5,-32],6,1.8),Ot([0,12.6,-42],[0,13,-48],3,1.5),Ot([0,18.6,-59.5],[0,9,-78.5],9,2),qt([0,8.6,-86],[0,8.6,-92],4),Gn([0,10,-100],4,1.6),qt([2.5,9,-32],[13.5,9,-32],5),Gn([-9,14,-56],5,2.4)),stars:[[16,9,-32],[-9,27,-56]],hearts:[[0,8.8,-80]],enemies:[{type:"bunny",x:-2,y:12,z:-40,dx:4,speed:2},{type:"roomba",x:2,y:8,z:-81,dx:-4,speed:2},{type:"bunny",x:-3,y:15,z:-107,dx:6,speed:2.2}],hazards:[],checkpoints:[[2.5,12,-41.5],[-2.5,18,-54],[2.5,8,-83.5]],signs:[{x:-2.5,y:10,z:-2.5,text:`NEW: Fin glide!
Hold Space while falling`},{x:2.5,y:4,z:-20,text:`Ride the bubble
columns up!`}],decor:[{type:"coral",x:-14,y:-12,z:-20,s:6,color:16744355},{type:"coral",x:14,y:-12,z:-60,s:7,color:8380615},{type:"coral",x:-16,y:-12,z:-95,s:6,color:16765286},{type:"cloud",x:25,y:20,z:-50,s:3}]},{id:"lagoon",name:"Starlight Lagoon",blurb:"Bonus! The ultimate shark obstacle course.",bonus:!0,theme:"lagoon",music:2,sky:["#0d3b66","#36c5b8"],fog:2919577,fogFar:160,night:!0,floor:{y:-10,kind:"sea",color:879474},spawn:[0,0,1.5],goal:[0,18,-108],platforms:[ge(0,0,0,6,6,"island"),ge(0,1,-7,2,2,"cookie",{type:"crumble"}),ge(3,2,-11,2,2,"cookie",{type:"crumble"}),ge(0,3,-15,2,2,"cookie",{type:"crumble"}),ge(-3,4,-19,2,2,"cookie",{type:"crumble"}),ge(0,4,-27,4,4,"crystal"),ge(0,4,-40,3,3,"crystal"),ge(0,6,-48,2.5,2.5,"bubble",{move:{dx:5,period:2.6}}),ge(0,8,-55,2.5,2.5,"bubble",{move:{dy:3,period:3}}),ge(0,8,-62,2.5,2.5,"sponge",{type:"bounce"}),ge(0,15,-67,4,4,"crystal"),ge(0,6,-90,4,4,"island"),ge(0,18,-106,6,6,"island")],updrafts:[{x:0,z:-97,r:1.6,y0:4,y1:20}],crates:[{x:1,y:6,z:-91,item:"heart"}],fish:Ss(Ot([0,.6,-3],[0,1.6,-7],3,1),Ot([0,1.6,-7],[3,2.6,-11],3,1),Ot([3,2.6,-11],[0,3.6,-15],3,1),Ot([0,3.6,-15],[-3,4.6,-19],3,1),Ot([-3,4.6,-19],[0,4.6,-27],4,1.5),qt([0,6,-30],[0,6,-37],5),qt([-4,6.6,-48],[4,6.6,-48],4),Gn([0,10,-62],4,1.5),Ot([0,15.6,-69],[0,7,-88],8,2),Gn([0,7,-97],6,2.4),yr([0,18.6,-106],2.2,8)),stars:[[-3,6.5,-19],[0,6,-33.5],[10,11,-80]],hearts:[[0,4.8,-27]],enemies:[{type:"roomba",x:-1,y:4,z:-27,dx:2,speed:1.4},{type:"bunny",x:-1.5,y:6,z:-91,dx:3,speed:2.4},{type:"roomba",x:-2.5,y:18,z:-104,dx:5,speed:2.4}],hazards:[{x:1.4,y:15,z:-68.4,w:1,d:1},{x:-1.4,y:4,z:-25.6,w:1,d:1}],checkpoints:[[1.4,4,-28.4],[-1.4,15,-65.6],[-1.4,6,-88.6]],signs:[{x:0,y:0,z:-2.4,text:`Bonus level!
Good luck, brave shark`}],decor:[{type:"coral",x:-12,y:-10,z:-30,s:6,color:16744355},{type:"coral",x:13,y:-10,z:-70,s:7,color:16765286},{type:"coral",x:-14,y:-10,z:-100,s:6,color:10452991}]}];on.forEach(i=>{i.extraPlatforms&&(i.platforms=i.platforms.concat(i.extraPlatforms)),i.crates=i.crates||[],i.updrafts=i.updrafts||[],i.hearts=i.hearts||[],i.hazards=i.hazards||[]});var Je={ctx:null,master:null,musicGain:null,muted:!1,musicTimer:null,_nextBar:0,_barIndex:0,init(){if(this.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(i){this.ctx=new i,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.35,this.musicGain.connect(this.master);try{localStorage.getItem("blahaj-muted")==="1"&&this.setMuted(!0)}catch{}}},resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()},setMuted(i){this.muted=i,this.master&&(this.master.gain.value=i?0:.5);try{localStorage.setItem("blahaj-muted",i?"1":"0")}catch{}},toggleMute(){return this.setMuted(!this.muted),this.muted},tone(i,{type:e="sine",dur:t=.15,vol:n=.3,slide:s=0,delay:r=0,attack:o=.005}={}){if(!this.ctx)return;let a=this.ctx.currentTime+r,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=e,l.frequency.setValueAtTime(i,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),a+t),c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(n,a+o),c.gain.exponentialRampToValueAtTime(.001,a+t),l.connect(c).connect(this.master),l.start(a),l.stop(a+t+.05)},noise({dur:i=.2,vol:e=.2,delay:t=0,freq:n=800}={}){if(!this.ctx)return;let s=this.ctx.currentTime+t,r=Math.floor(this.ctx.sampleRate*i),o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let d=0;d<r;d++)a[d]=(Math.random()*2-1)*(1-d/r);let l=this.ctx.createBufferSource();l.buffer=o;let c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=n;let h=this.ctx.createGain();h.gain.value=e,l.connect(c).connect(h).connect(this.master),l.start(s)},jump(){this.tone(300,{type:"triangle",dur:.18,slide:320,vol:.25})},doubleJump(){this.tone(420,{type:"triangle",dur:.12,slide:300,vol:.22}),this.tone(640,{type:"triangle",dur:.14,slide:300,vol:.2,delay:.07})},land(){this.noise({dur:.08,vol:.12,freq:500})},collect(i=0){let e=660*Math.pow(1.0595,Math.min(i,12));this.tone(e,{type:"sine",dur:.1,vol:.2}),this.tone(e*1.5,{type:"sine",dur:.14,vol:.18,delay:.06})},star(){[523,659,784,1047,1319].forEach((i,e)=>this.tone(i,{type:"triangle",dur:.28,vol:.22,delay:e*.08}))},heart(){[392,523,659].forEach((i,e)=>this.tone(i,{type:"sine",dur:.25,vol:.2,delay:e*.09}))},hurt(){this.tone(220,{type:"square",dur:.25,slide:-150,vol:.12}),this.noise({dur:.15,vol:.1,freq:400})},fall(){this.tone(500,{type:"sine",dur:.6,slide:-420,vol:.18})},stomp(){this.tone(180,{type:"square",dur:.12,slide:-100,vol:.12}),this.tone(500,{type:"triangle",dur:.15,slide:300,vol:.18,delay:.05})},bounce(){this.tone(200,{type:"sine",dur:.25,slide:500,vol:.25})},dash(){this.noise({dur:.22,vol:.15,freq:1800}),this.tone(700,{type:"sawtooth",dur:.18,slide:-400,vol:.05})},pound(){this.tone(120,{type:"square",dur:.3,slide:-60,vol:.18}),this.noise({dur:.3,vol:.25,freq:300})},checkpoint(){[659,880].forEach((i,e)=>this.tone(i,{type:"triangle",dur:.2,vol:.2,delay:e*.1}))},crumble(){this.noise({dur:.3,vol:.12,freq:900})},win(){[523,659,784,1047,784,1047,1319].forEach((i,e)=>this.tone(i,{type:"triangle",dur:.35,vol:.22,delay:e*.12}))},unlock(){[392,494,587,784,988].forEach((i,e)=>this.tone(i,{type:"sine",dur:.4,vol:.2,delay:e*.1}))},click(){this.tone(900,{type:"sine",dur:.05,vol:.12})},startMusic(i=0){if(!this.ctx)return;this.stopMusic(),this.mood=i,this._barIndex=0,this._nextBar=this.ctx.currentTime+.1;let e=()=>{for(;this._nextBar<this.ctx.currentTime+.6;)this._scheduleBar(this._nextBar,this._barIndex++),this._nextBar+=this._barLen()};e(),this.musicTimer=setInterval(e,200)},stopMusic(){this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null},_barLen(){return[2.4,2.2,2,2.6,2.8][this.mood%5]},_note(i,e,t,n,s){let r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type=s,r.frequency.value=i,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.02),o.gain.exponentialRampToValueAtTime(.001,e+t),r.connect(o).connect(this.musicGain),r.start(e),r.stop(e+t+.05)},_scheduleBar(i,e){let n=[[0,4,7,11],[5,9,12,16],[7,11,14,17],[9,12,16,19]][e%4],s=[0,-2,3,-5,2][this.mood%5],r=this._barLen(),o=l=>261.63*Math.pow(2,(l+s)/12);this._note(o(n[0]-12),i,r*.9,.16,"triangle");let a=8;for(let l=0;l<a;l++){let c=n[[0,1,2,3,2,1,3,1][l]];this._note(o(c+12),i+l*r/a,r/a*.9,.07,"sine")}e%2===1&&[n[3]+12,n[2]+12,n[1]+12].forEach((c,h)=>this._note(o(c),i+r*(.5+h*.16),.3,.06,"triangle"))}};var Qu=0,uh=1,ed=2;var ds=1,td=2,ir=3,Ki=0,ln=1,sn=2,Wt=0,ji=1,Tn=2,dh=3,fh=4,fl=5;var Un=100,nd=101,id=102,sd=103,rd=104,fs=200,od=201,ad=202,ld=203,ph=204,mh=205,mo=206,cd=207,go=208,hd=209,ud=210,dd=211,fd=212,pd=213,md=214,Ia=0,Da=1,La=2,Vs=3,Na=4,Ua=5,Fa=6,Oa=7,gh=0,gd=1,xd=2,ti=0,xo=1,_o=2,vo=3,ps=4,yo=5,Mo=6,So=7;var xh=300,Qi=301,ms=302,pl=303,ml=304,bo=306,bn=1e3,li=1001,Ba=1002,Gt=1003,_d=1004;var Eo=1005;var $t=1006,gl=1007;var gi=1008;var pn=1009,_h=1010,vh=1011,sr=1012,xl=1013,ni=1014,Fn=1015,Ht=1016,_l=1017,vl=1018,es=1020,yh=35902,Mh=35899,Sh=1021,bh=1022,mn=1023,ui=1026,xi=1027,yl=1028,Ml=1029,ts=1030,Sl=1031;var bl=1033,To=33776,wo=33777,Ao=33778,Ro=33779,El=35840,Tl=35841,wl=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Il=37488,Dl=37489,Co=37490,Ll=37491,Nl=37808,Ul=37809,Fl=37810,Ol=37811,Bl=37812,zl=37813,Hl=37814,kl=37815,Vl=37816,Gl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Zl=36492,Jl=36494,$l=36495,Kl=36283,jl=36284,Po=36285,Ql=36286;var Ur=2300,za=2301,Ca=2302,jc=2303,Qc=2400,eh=2401,th=2402;var vd=3200;var Io=0,yd=1,Li="",zt="srgb",Fr="srgb-linear",Or="linear",gt="srgb";var Pa=7680;var Md=519,Sd=512,bd=513,Ed=514,ec=515,Td=516,wd=517,tc=518,Ad=519,Eh=35044;var Th="300 es",Jn=2e3,Gs=2001;function pp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rd(){let i=Br("canvas");return i.style.display="block",i}var vu={},Ws=null;function zr(...i){let e="THREE."+i.shift();Ws?Ws("log",e,...i):console.log(e,...i)}function Cd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=Cd(i);let e="THREE."+i.shift();if(Ws)Ws("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Cd(i);let e="THREE."+i.shift();if(Ws)Ws("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cs(...i){let e=i.join(" ");e in vu||(vu[e]=!0,Xe(...i))}function Pd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Id={[Ia]:Da,[La]:Fa,[Na]:Oa,[Vs]:Ua,[Da]:Ia,[Fa]:La,[Oa]:Na,[Ua]:Vs},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,Ir=Math.PI/180,Xs=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function wh(i,e){return(i%e+e)%e}function gp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xp(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function _p(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function vp(i,e=1){return e-Math.abs(wh(i,e*2)-e)}function yp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bp(i,e){return i+Math.random()*(e-i)}function Ep(i){return i*(.5-Math.random())}function Tp(i){i!==void 0&&(yu=i);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wp(i){return i*Ir}function Ap(i){return i*Xs}function Rp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ip(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Do={DEG2RAD:Ir,RAD2DEG:Xs,generateUUID:hi,clamp:st,euclideanModulo:wh,mapLinear:gp,inverseLerp:xp,lerp:Dr,damp:_p,pingpong:vp,smoothstep:yp,smootherstep:Mp,randInt:Sp,randFloat:bp,randFloatSpread:Ep,seededRandom:Tp,degToRad:wp,radToDeg:Ap,isPowerOfTwo:Rp,ceilPowerOfTwo:Cp,floorPowerOfTwo:Pp,setQuaternionFromProperEuler:Ip,normalize:yt,denormalize:Zn},Dh=class Dh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dh.prototype.isVector2=!0;var $=Dh,Pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let _=Math.acos(p),S=Math.sin(_);m=Math.sin(m*_)/S,a=Math.sin(a*_)/S,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lh=class Lh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lh.prototype.isVector3=!0;var P=Lh,Ac=new P,Mu=new Pn,Nh=class Nh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],_=s[1],S=s[4],y=s[7],E=s[2],b=s[5],R=s[8];return r[0]=o*x+a*_+l*E,r[3]=o*p+a*S+l*b,r[6]=o*m+a*y+l*R,r[1]=c*x+h*_+d*E,r[4]=c*p+h*S+d*b,r[7]=c*m+h*y+d*R,r[2]=u*x+f*_+g*E,r[5]=u*p+f*S+g*b,r[8]=u*m+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nh.prototype.isMatrix3=!0;var $e=Nh,Rc=new $e,Su=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dp(){let i={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fr]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}var ot=Dp();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bs,Ha=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Br("canvas")),bs.width=e.width,bs.height=e.height;let s=bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lp=0,qs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cc(s[o].image)):r.push(Cc(s[o]))}else r=Cc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Np=0,Pc=new P,vn=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=li,s=li,r=$t,o=gi,a=mn,l=pn,c=i.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=hi(),this.name="",this.source=new qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=xh;vn.DEFAULT_ANISOTROPY=1;var Uh=class Uh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(f+1)/2,E=(m+1)/2,b=(h+u)/4,R=(d+x)/4,v=(g+p)/4;return S>y&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=R/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=v/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uh.prototype.isVector4=!0;var Ut=Uh,ka=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new vn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new qs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lt=class extends ka{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hr=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dl=class dl{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,x,p)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Up,e,Fp)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),zi.crossVectors(n,Rn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),zi.crossVectors(n,Rn)),zi.normalize(),na.crossVectors(Rn,zi),s[0]=zi.x,s[4]=na.x,s[8]=Rn.x,s[1]=zi.y,s[5]=na.y,s[9]=Rn.y,s[2]=zi.z,s[6]=na.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],S=n[7],y=n[11],E=n[15],b=s[0],R=s[4],v=s[8],w=s[12],A=s[1],I=s[5],N=s[9],O=s[13],D=s[2],B=s[6],W=s[10],X=s[14],ie=s[3],G=s[7],j=s[11],Q=s[15];return r[0]=o*b+a*A+l*D+c*ie,r[4]=o*R+a*I+l*B+c*G,r[8]=o*v+a*N+l*W+c*j,r[12]=o*w+a*O+l*X+c*Q,r[1]=h*b+d*A+u*D+f*ie,r[5]=h*R+d*I+u*B+f*G,r[9]=h*v+d*N+u*W+f*j,r[13]=h*w+d*O+u*X+f*Q,r[2]=g*b+x*A+p*D+m*ie,r[6]=g*R+x*I+p*B+m*G,r[10]=g*v+x*N+p*W+m*j,r[14]=g*w+x*O+p*X+m*Q,r[3]=_*b+S*A+y*D+E*ie,r[7]=_*R+S*I+y*B+E*G,r[11]=_*v+S*N+y*W+E*j,r[15]=_*w+S*O+y*X+E*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],_=l*f-c*u,S=a*f-c*d,y=a*u-l*d,E=o*f-c*h,b=o*u-l*h,R=o*d-a*h;return t*(x*_-p*S+m*y)-n*(g*_-p*E+m*b)+s*(g*S-x*E+m*R)-r*(g*y-x*b+p*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],_=t*a-n*o,S=t*l-s*o,y=t*c-r*o,E=n*l-s*a,b=n*c-r*a,R=s*c-r*l,v=h*x-d*g,w=h*p-u*g,A=h*m-f*g,I=d*p-u*x,N=d*m-f*x,O=u*m-f*p,D=_*O-S*N+y*I+E*A-b*w+R*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return e[0]=(a*O-l*N+c*I)*B,e[1]=(s*N-n*O-r*I)*B,e[2]=(x*R-p*b+m*E)*B,e[3]=(u*b-d*R-f*E)*B,e[4]=(l*A-o*O-c*w)*B,e[5]=(t*O-s*A+r*w)*B,e[6]=(p*y-g*R-m*S)*B,e[7]=(h*R-u*y+f*S)*B,e[8]=(o*N-a*A+c*v)*B,e[9]=(n*A-t*N-r*v)*B,e[10]=(g*b-x*y+m*_)*B,e[11]=(d*y-h*b-f*_)*B,e[12]=(a*w-o*I-l*v)*B,e[13]=(t*I-n*w+s*v)*B,e[14]=(x*S-g*E-p*_)*B,e[15]=(h*E-d*S+u*_)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,x=o*h,p=o*d,m=a*d,_=l*c,S=l*h,y=l*d,E=n.x,b=n.y,R=n.z;return s[0]=(1-(x+m))*E,s[1]=(f+y)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(u+m))*b,s[6]=(p+_)*b,s[7]=0,s[8]=(g+S)*R,s[9]=(p-_)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Es.set(s[0],s[1],s[2]).length(),a=Es.set(s[4],s[5],s[6]).length(),l=Es.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);let c=1/o,h=1/a,d=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Jn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Jn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Gs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Jn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Jn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Gs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};dl.prototype.isMatrix4=!0;var at=dl,Es=new P,Wn=new at,Up=new P(0,0,0),Fp=new P(1,1,1),zi=new P,na=new P,Rn=new P,Eu=new at,Tu=new Pn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Op=0,wu=new P,Ts=new Pn,bi=new at,ia=new P,Mr=new P,Bp=new P,zp=new Pn,Au=new P(1,0,0),Ru=new P(0,1,0),Cu=new P(0,0,1),Pu={type:"added"},Hp={type:"removed"},ws={type:"childadded",child:null},Ic={type:"childremoved",child:null},tn=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new $n,n=new Pn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new $e}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Mr,ia,this.up):bi.lookAt(ia,Mr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(bi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),ws.child=e,this.dispatchEvent(ws),ws.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new P(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},kp={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=wh(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Dc(o,r,e+1/3),this.g=Dc(o,r,e),this.b=Dc(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ot.workingToColorSpace(fn.copy(this),e),Math.round(st(fn.r*255,0,255))*65536+Math.round(st(fn.g*255,0,255))*256+Math.round(st(fn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=zt){ot.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(sa);let n=Dr(Hi.h,sa.h,t),s=Dr(Hi.s,sa.s,t),r=Dr(Hi.l,sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new re;re.NAMES=Dd;var Vr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hs=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new P,Ei=new P,Lc=new P,Ti=new P,As=new P,Rs=new P,Iu=new P,Nc=new P,Uc=new P,Fc=new P,Oc=new Ut,Bc=new Ut,zc=new Ut,Ri=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),Ei.subVectors(n,t),Lc.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(Ei),l=Xn.dot(Lc),c=Ei.dot(Ei),h=Ei.dot(Lc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Oc.setScalar(0),Bc.setScalar(0),zc.setScalar(0),Oc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Oc,r.x),o.addScaledVector(Bc,r.y),o.addScaledVector(zc,r.z),o}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),Ei.subVectors(e,t),Xn.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Xn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,n),Rs.subVectors(r,n),Nc.subVectors(e,n);let l=As.dot(Nc),c=Rs.dot(Nc);if(l<=0&&c<=0)return t.copy(n);Uc.subVectors(e,s);let h=As.dot(Uc),d=Rs.dot(Uc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(As,o);Fc.subVectors(e,r);let f=As.dot(Fc),g=Rs.dot(Fc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Rs,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Iu.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Iu,a);let m=1/(p+x+u);return o=x*m,a=u*m,t.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),oa.subVectors(this.max,Sr),Cs.subVectors(e.a,Sr),Ps.subVectors(e.b,Sr),Is.subVectors(e.c,Sr),ki.subVectors(Ps,Cs),Vi.subVectors(Is,Ps),rs.subVectors(Cs,Is);let t=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-rs.z,rs.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,rs.z,0,-rs.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-rs.y,rs.x,0];return!Hc(t,Cs,Ps,Is,oa)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Cs,Ps,Is,oa))?!1:(aa.crossVectors(ki,Vi),t=[aa.x,aa.y,aa.z],Hc(t,Cs,Ps,Is,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new P,new P,new P,new P,new P,new P,new P,new P],qn=new P,ra=new fi,Cs=new P,Ps=new P,Is=new P,ki=new P,Vi=new P,rs=new P,Sr=new P,oa=new P,aa=new P,os=new P;function Hc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){os.fromArray(i,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yt=new P,la=new $,Vp=0,Ct=class extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Gr=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wr=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gp=new fi,br=new P,kc=new P,Pi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(kc)),this.expandByPoint(br.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wp=0,Nn=new at,Vc=new tn,Ds=new P,Cn=new fi,Er=new fi,en=new P,Tt=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pp(e)?Wr:Gr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Cn.min,Er.min),Cn.expandByPoint(en),en.addVectors(Cn.max,Er.max),Cn.expandByPoint(en)):(Cn.expandByPoint(Er.min),Cn.expandByPoint(Er.max))}Cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),en.add(Ds)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new P,l[v]=new P;let c=new P,h=new P,d=new P,u=new $,f=new $,g=new $,x=new P,p=new P;function m(v,w,A){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[v].add(x),a[w].add(x),a[A].add(x),l[v].add(p),l[w].add(p),l[A].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,w=_.length;v<w;++v){let A=_[v],I=A.start,N=A.count;for(let O=I,D=I+N;O<D;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let S=new P,y=new P,E=new P,b=new P;function R(v){E.fromBufferAttribute(s,v),b.copy(E);let w=a[v];S.copy(w),S.sub(E.multiplyScalar(E.dot(w))).normalize(),y.crossVectors(b,w);let I=y.dot(l[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,I)}for(let v=0,w=_.length;v<w;++v){let A=_[v],I=A.start,N=A.count;for(let O=I,D=I+N;O<D;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Ct(u,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ga=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eh,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},_n=new P,Xr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gc=new P,Xp=new P,qp=new $e,Yn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Gc.subVectors(n,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qp.getNormalMatrix(e),s=this.coplanarPoint(Gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yp=0,Kn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=ji,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ii=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ls,Tr=new P,Ns=new P,Us=new P,Fs=new $,wr=new $,Ld=new at,ca=new P,Ar=new P,ha=new P,Du=new $,Wc=new $,Lu=new $,Wi=class extends tn{constructor(e=new Ii){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ga(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Xr(n,3,0,!1)),Ls.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new $(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),Ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ua(ca.set(-.5,-.5,0),Us,o,Ns,s,r),ua(Ar.set(.5,-.5,0),Us,o,Ns,s,r),ua(ha.set(.5,.5,0),Us,o,Ns,s,r),Du.set(0,0),Wc.set(1,0),Lu.set(1,1);let a=e.ray.intersectTriangle(ca,Ar,ha,!1,Tr);if(a===null&&(ua(Ar.set(-.5,.5,0),Us,o,Ns,s,r),Wc.set(0,1),a=e.ray.intersectTriangle(ca,ha,Ar,!1,Tr),a===null))return;let l=e.ray.origin.distanceTo(Tr);l<e.near||l>e.far||t.push({distance:l,point:Tr.clone(),uv:Ri.getInterpolation(Tr,ca,Ar,ha,Du,Wc,Lu,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ua(i,e,t,n,s,r){Fs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(wr.x=r*Fs.x-s*Fs.y,wr.y=s*Fs.x+r*Fs.y):wr.copy(Fs),i.copy(e),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(Ld)}var Ai=new P,Xc=new P,da=new P,fa=new P,qr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),fa.copy(this.origin).sub(Xc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(da),a=fa.dot(this.direction),l=-fa.dot(da),c=fa.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xc).addScaledVector(da,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=n.x-o.x,_=n.y-o.y,S=n.z-o.z,y=Math.abs(l),E=Math.abs(c),b=Math.abs(h),R,v,w,A,I,N,O,D,B,W,X,ie;if(y>=E&&y>=b?(w=l,N=d,B=g,ie=m,l>=0?(R=c,v=h,A=u,I=f,O=x,D=p,W=_,X=S):(R=h,v=c,A=f,I=u,O=p,D=x,W=S,X=_)):E>=b?(w=c,N=u,B=x,ie=_,c>=0?(R=h,v=l,A=f,I=d,O=p,D=g,W=S,X=m):(R=l,v=h,A=d,I=f,O=g,D=p,W=m,X=S)):(w=h,N=f,B=p,ie=S,h>=0?(R=l,v=c,A=d,I=u,O=g,D=x,W=m,X=_):(R=c,v=l,A=u,I=d,O=x,D=g,W=_,X=m)),w===0)return null;let G=R/w,j=v/w,Q=1/w,Re=A-G*N,we=I-j*N,ct=O-G*B,je=D-j*B,rt=W-G*ie,Y=X-j*ie,K=rt*je-Y*ct,de=Re*Y-we*rt,Be=ct*we-je*Re;if(s){if(K<0||de<0||Be<0)return null}else if((K<0||de<0||Be<0)&&(K>0||de>0||Be>0))return null;let be=K+de+Be;if(be===0)return null;let Ge=Q*(K*N+de*B+Be*ie);return(be>0?Ge<0:Ge>0)?null:this.at(Ge/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nu=new at,as=new qr,pa=new Pi,Uu=new P,ma=new P,ga=new P,xa=new P,qc=new P,_a=new P,Fu=new P,va=new P,ae=class extends tn{constructor(e=new Tt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(qc.fromBufferAttribute(d,e),o?_a.addScaledVector(qc,h):_a.addScaledVector(qc.sub(t),h))}t.add(_a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(pa.containsPoint(as.origin)===!1&&(as.intersectSphere(pa,Uu)===null||as.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),as.copy(e.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,E=S;y<E;y+=3){let b=a.getX(y),R=a.getX(y+1),v=a.getX(y+2);s=ya(this,m,e,n,c,h,d,b,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=a.getX(p),S=a.getX(p+1),y=a.getX(p+2);s=ya(this,o,e,n,c,h,d,_,S,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,E=S;y<E;y+=3){let b=y,R=y+1,v=y+2;s=ya(this,m,e,n,c,h,d,b,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=p,S=p+1,y=p+2;s=ya(this,o,e,n,c,h,d,_,S,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Zp(i,e,t,n,s,r,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ki,a),l===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:i}}function ya(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ma),i.getVertexPosition(l,ga),i.getVertexPosition(c,xa);let h=Zp(i,e,t,n,ma,ga,xa,Fu);if(h){let d=new P;Ri.getBarycoord(Fu,ma,ga,xa,d),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,l,c,d,new $)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,l,c,d,new $)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Ri.getNormal(ma,ga,xa,u.normal),h.face=u,h.barycoord=d}return h}var jn=class extends vn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Gt,h=Gt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Os=new at,Ou=new at,Ma=[],Bu=new fi,Jp=new at,Rr=new ae,Cr=new Pi,Zs=class extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),Bu.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(Bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),Cr.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),e.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Ou.multiplyMatrices(n,Os),Rr.matrixWorld=Ou,Rr.raycast(e,Ma);for(let o=0,a=Ma.length;o<a;o++){let l=Ma[o];l.instanceId=r,l.object=this,t.push(l)}Ma.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jn(new Float32Array(s*this.count),s,this.count,yl,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new Pi,$p=new $(.5,.5),Sa=new P,Js=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],_=r[12],S=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,m-g,E-_).normalize(),s[1].setComponents(c+o,f+h,m+g,E+_).normalize(),s[2].setComponents(c+a,f+d,m+x,E+S).normalize(),s[3].setComponents(c-a,f-d,m-x,E-S).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,f-u,m-p,E-y).normalize();else if(s[4].setComponents(c-l,f-u,m-p,E-y).normalize(),t===Jn)s[5].setComponents(c+l,f+u,m+p,E+y).normalize();else if(t===Gs)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=$p.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wa=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zu=new at,nh=new qr,ba=new Pi,Ea=new P,$s=class extends tn{constructor(e=new Tt,t=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;zu.copy(s).invert(),nh.copy(e.ray).applyMatrix4(zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let p=c.getX(g);Ea.fromBufferAttribute(d,p),Hu(Ea,p,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Ea.fromBufferAttribute(d,g),Hu(Ea,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hu(i,e,t,n,s,r,o){let a=nh.distanceSqToPoint(i);if(a<t){let l=new P;nh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Zr=class extends vn{constructor(e=[],t=Qi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Di=class extends vn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends vn{constructor(e,t,n=ni,s,r,o,a=Gt,l=Gt,c,h=ui,d=1){if(h!==ui&&h!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xa=class extends pi{constructor(e,t=ni,n=Qi,s,r,o=Gt,a=Gt,l,c=ui){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jr=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},nn=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2));function g(x,p,m,_,S,y,E,b,R,v,w){let A=y/R,I=E/v,N=y/2,O=E/2,D=b/2,B=R+1,W=v+1,X=0,ie=0,G=new P;for(let j=0;j<W;j++){let Q=j*I-O;for(let Re=0;Re<B;Re++){let we=Re*A-N;G[x]=we*_,G[p]=Q*S,G[m]=D,c.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[m]=b>0?1:-1,h.push(G.x,G.y,G.z),d.push(Re/R),d.push(1-j/v),X+=1}}for(let j=0;j<v;j++)for(let Q=0;Q<R;Q++){let Re=u+Q+B*j,we=u+Q+B*(j+1),ct=u+(Q+1)+B*(j+1),je=u+(Q+1)+B*j;l.push(Re,we,je),l.push(we,ct,je),ie+=6}a.addGroup(f,ie,w),f+=ie,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},mi=class i extends Tt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=n*2+r,x=s+1,p=new P,m=new P;for(let _=0;_<=g;_++){let S=0,y=0,E=0,b=0;if(_<=n){let w=_/n,A=w*Math.PI/2;y=-h-e*Math.cos(A),E=e*Math.sin(A),b=-e*Math.cos(A),S=w*d}else if(_<=n+r){let w=(_-n)/r;y=-h+w*t,E=e,b=0,S=d+w*u}else{let w=(_-n-r)/n,A=w*Math.PI/2;y=h+e*Math.sin(A),E=e*Math.cos(A),b=e*Math.sin(A),S=d+u+w*d}let R=Math.max(0,Math.min(1,S/f)),v=0;_===0?v=.5/s:_===g&&(v=-.5/s);for(let w=0;w<=s;w++){let A=w/s,I=A*Math.PI*2,N=Math.sin(I),O=Math.cos(I);m.x=-E*O,m.y=y,m.z=E*N,a.push(m.x,m.y,m.z),p.set(-E*O,b,E*N),p.normalize(),l.push(p.x,p.y,p.z),c.push(A+v,R)}if(_>0){let w=(_-1)*x;for(let A=0;A<s;A++){let I=w+A,N=w+A+1,O=_*x+A,D=_*x+A+1;o.push(I,N,O),o.push(N,D,O)}}}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Qn=class i extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zt=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],p=n/2,m=0;_(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function _(){let y=new P,E=new P,b=0,R=(t-e)/n;for(let v=0;v<=r;v++){let w=[],A=v/r,I=A*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,D=O*l+a,B=Math.sin(D),W=Math.cos(D);E.x=I*B,E.y=-A*n+p,E.z=I*W,d.push(E.x,E.y,E.z),y.set(B,R,W).normalize(),u.push(y.x,y.y,y.z),f.push(O,1-A),w.push(g++)}x.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let A=x[w][v],I=x[w+1][v],N=x[w+1][v+1],O=x[w][v+1];(e>0||w!==0)&&(h.push(A,I,O),b+=3),(t>0||w!==r-1)&&(h.push(I,N,O),b+=3)}c.addGroup(m,b,0),m+=b}function S(y){let E=g,b=new $,R=new P,v=0,w=y===!0?e:t,A=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*A,0),u.push(0,A,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let D=N/s*l+a,B=Math.cos(D),W=Math.sin(D);R.x=w*W,R.y=p*A,R.z=w*B,d.push(R.x,R.y,R.z),u.push(0,A,0),b.x=B*.5+.5,b.y=W*.5*A+.5,f.push(b.x,b.y),g++}for(let N=0;N<s;N++){let O=E+N,D=I+N;y===!0?h.push(D,D+1,O):h.push(D+1,D,O),v+=3}c.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class i extends Zt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class i extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new P,y=new P,E=new P;for(let b=0;b<t.length;b+=3)f(t[b+0],S),f(t[b+1],y),f(t[b+2],E),l(S,y,E,_)}function l(_,S,y,E){let b=E+1,R=[];for(let v=0;v<=b;v++){R[v]=[];let w=_.clone().lerp(y,v/b),A=S.clone().lerp(y,v/b),I=b-v;for(let N=0;N<=I;N++)N===0&&v===b?R[v][N]=w:R[v][N]=w.clone().lerp(A,N/I)}for(let v=0;v<b;v++)for(let w=0;w<2*(b-v)-1;w++){let A=Math.floor(w/2);w%2===0?(u(R[v][A+1]),u(R[v+1][A]),u(R[v][A])):(u(R[v][A+1]),u(R[v+1][A+1]),u(R[v+1][A]))}}function c(_){let S=new P;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(_),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let _=new P;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let y=p(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;o.push(y,1-E)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let S=o[_+0],y=o[_+2],E=o[_+4],b=Math.max(S,y,E),R=Math.min(S,y,E);b>.9&&R<.1&&(S<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,S){let y=_*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function g(){let _=new P,S=new P,y=new P,E=new P,b=new $,R=new $,v=new $;for(let w=0,A=0;w<r.length;w+=9,A+=6){_.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),b.set(o[A+0],o[A+1]),R.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),E.copy(_).add(S).add(y).divideScalar(3);let I=p(E);x(b,A+0,_,I),x(R,A+2,S,I),x(v,A+4,y,I)}}function x(_,S,y,E){E<0&&_.x===1&&(o[S]=_.x-1),y.x===0&&y.z===0&&(o[S]=E/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new $:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new at;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ks=class extends In{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qa=class extends Ks{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ku=new P,Vu=new P,Yc=new Ah,Zc=new Ah,Jc=new Ah,Ya=class extends In{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Vu.subVectors(s[0],s[1]).add(s[0]),c=Vu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ku.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ku),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Yc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,p),Zc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,p),Jc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Zc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Jc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Yc.calc(l),Zc.calc(l),Jc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Kp(i,e){let t=1-i;return t*t*e}function jp(i,e){return 2*(1-i)*i*e}function Qp(i,e){return i*i*e}function Lr(i,e,t,n){return Kp(i,e)+jp(i,t)+Qp(i,n)}function em(i,e){let t=1-i;return t*t*t*e}function tm(i,e){let t=1-i;return 3*t*t*i*e}function nm(i,e){return 3*(1-i)*i*i*e}function im(i,e){return i*i*i*e}function Nr(i,e,t,n,s){return em(i,e)+tm(i,t)+nm(i,n)+im(i,s)}var jr=class extends In{constructor(e=new $,t=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new $){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(e,s.x,r.x,o.x,a.x),Nr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends In{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(e,s.x,r.x,o.x,a.x),Nr(e,s.y,r.y,o.y,a.y),Nr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qr=class extends In{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends In{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends In{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends In{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y),Lr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Gu(a,l.x,c.x,h.x,d.x),Gu(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new $().fromArray(s))}return this}},ih=Object.freeze({__proto__:null,ArcCurve:qa,CatmullRomCurve3:Ya,CubicBezierCurve:jr,CubicBezierCurve3:Za,EllipseCurve:Ks,LineCurve:Qr,LineCurve3:Ja,QuadraticBezierCurve:eo,QuadraticBezierCurve3:$a,SplineCurve:to}),Ka=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ih[s.type]().fromJSON(s))}return this}},no=class extends Ka{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qr(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new eo(this.currentPoint.clone(),new $(e,t),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new jr(this.currentPoint.clone(),new $(e,t),new $(n,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new to(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ks(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ei=class extends no{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new no().fromJSON(s))}return this}};function sm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=cm(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return io(r,o,t,a,l,c,0),o}function Nd(i,e,t,n,s){let r;if(s===ym(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Wu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Wu(o/n|0,i[o],i[o+1],r);return r&&js(r,r.next)&&(ro(r),r=r.next),r}function us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(js(t,t.next)||Bt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,s,r,o){if(!i)return;!o&&r&&pm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?om(i,n,s,r):rm(i)){e.push(l.i,i.i,c.i),ro(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=am(us(i),e),io(i,e,t,n,s,r,2)):o===2&&lm(i,e,t,n,s,r):io(us(i),e,t,n,s,r,1);break}}}function rm(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Pr(s,a,r,l,o,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function om(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),x=Math.max(a,l,c),p=Math.max(h,d,u),m=sh(f,g,e,t,n),_=sh(x,p,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=m&&y&&y.z<=_;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Pr(a,h,l,d,c,u,S.x,S.y)&&Bt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Pr(a,h,l,d,c,u,y.x,y.y)&&Bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Pr(a,h,l,d,c,u,S.x,S.y)&&Bt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Pr(a,h,l,d,c,u,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function am(i,e){let t=i;do{let n=t.prev,s=t.next.next;!js(n,s)&&Fd(n,t,t.next,s)&&so(n,s)&&so(s,n)&&(e.push(n.i,t.i,s.i),ro(t),ro(t.next),t=i=s),t=t.next}while(t!==i);return us(t)}function lm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xm(o,a)){let l=Od(o,a);o=us(o,o.next),l=us(l,l.next),io(o,e,t,n,s,r,0),io(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function cm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Nd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gm(c))}s.sort(hm);for(let r=0;r<s.length;r++)t=um(s[r],t);return t}function hm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function um(i,e){let t=dm(i,e);if(!t)return e;let n=Od(t,i);return us(n,n.next),us(t,t.next)}function dm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(js(i,t))return t;do{if(js(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ud(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);so(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&fm(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function fm(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function pm(i,e,t,n){let s=i;do s.z===0&&(s.z=sh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mm(s)}function mm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function sh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ud(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Pr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ud(i,e,t,n,s,r,o,a)}function xm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_m(i,e)&&(so(i,e)&&so(e,i)&&vm(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||js(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function js(i,e){return i.x===e.x&&i.y===e.y}function Fd(i,e,t,n){let s=wa(Bt(i,e,t)),r=wa(Bt(i,e,n)),o=wa(Bt(t,n,i)),a=wa(Bt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ta(i,t,e)||r===0&&Ta(i,n,e)||o===0&&Ta(t,i,n)||a===0&&Ta(t,e,n))}function Ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wa(i){return i>0?1:i<0?-1:0}function _m(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function vm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Od(i,e){let t=rh(i.i,i.x,i.y),n=rh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wu(i,e,t,n){let s=rh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ym(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var oh=class{static triangulate(e,t,n=2){return sm(e,t,n)}},ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Xu(e),qu(n,e);let o=e.length;t.forEach(Xu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qu(n,t[l]);let a=oh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Xu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Xi=class i extends Tt{constructor(e=new ei([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Mm,S,y=!1,E,b,R,v;if(m){S=m.getSpacedPoints(h),y=!0,u=!1;let te=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,te),b=new P,R=new P,v=new P}u||(p=0,f=0,g=0,x=0);let w=a.extractPoints(c),A=w.shape,I=w.holes;if(!ci.isClockWise(A)){A=A.reverse();for(let te=0,oe=I.length;te<oe;te++){let le=I[te];ci.isClockWise(le)&&(I[te]=le.reverse())}}function O(te){let le=10000000000000001e-36,ce=te[0];for(let ue=1;ue<=te.length;ue++){let Ve=ue%te.length,ze=te[Ve],We=ze.x-ce.x,Ye=ze.y-ce.y,L=We*We+Ye*Ye,ut=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ce.x),Math.abs(ce.y)),tt=le*ut*ut;if(L<=tt){te.splice(Ve,1),ue--;continue}ce=ze}}O(A),I.forEach(O);let D=I.length,B=A;for(let te=0;te<D;te++){let oe=I[te];A=A.concat(oe)}function W(te,oe,le){return oe||qe("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(oe,le)}let X=A.length;function ie(te,oe,le){let ce,ue,Ve,ze=te.x-oe.x,We=te.y-oe.y,Ye=le.x-te.x,L=le.y-te.y,ut=ze*ze+We*We,tt=ze*L-We*Ye;if(Math.abs(tt)>Number.EPSILON){let C=Math.sqrt(ut),M=Math.sqrt(Ye*Ye+L*L),z=oe.x-We/C,H=oe.y+ze/C,Z=le.x-L/M,he=le.y+Ye/M,fe=((Z-z)*L-(he-H)*Ye)/(ze*L-We*Ye);ce=z+ze*fe-te.x,ue=H+We*fe-te.y;let J=ce*ce+ue*ue;if(J<=2)return new $(ce,ue);Ve=Math.sqrt(J/2)}else{let C=!1;ze>Number.EPSILON?Ye>Number.EPSILON&&(C=!0):ze<-Number.EPSILON?Ye<-Number.EPSILON&&(C=!0):Math.sign(We)===Math.sign(L)&&(C=!0),C?(ce=-We,ue=ze,Ve=Math.sqrt(ut)):(ce=ze,ue=We,Ve=Math.sqrt(ut/2))}return new $(ce/Ve,ue/Ve)}let G=[];for(let te=0,oe=B.length,le=oe-1,ce=te+1;te<oe;te++,le++,ce++)le===oe&&(le=0),ce===oe&&(ce=0),G[te]=ie(B[te],B[le],B[ce]);let j=[],Q,Re=G.concat();for(let te=0,oe=D;te<oe;te++){let le=I[te];Q=[];for(let ce=0,ue=le.length,Ve=ue-1,ze=ce+1;ce<ue;ce++,Ve++,ze++)Ve===ue&&(Ve=0),ze===ue&&(ze=0),Q[ce]=ie(le[ce],le[Ve],le[ze]);j.push(Q),Re=Re.concat(Q)}let we;if(p===0)we=ci.triangulateShape(B,I);else{let te=[],oe=[];for(let le=0;le<p;le++){let ce=le/p,ue=f*Math.cos(ce*Math.PI/2),Ve=g*Math.sin(ce*Math.PI/2)+x;for(let ze=0,We=B.length;ze<We;ze++){let Ye=W(B[ze],G[ze],Ve);de(Ye.x,Ye.y,-ue),ce===0&&te.push(Ye)}for(let ze=0,We=D;ze<We;ze++){let Ye=I[ze];Q=j[ze];let L=[];for(let ut=0,tt=Ye.length;ut<tt;ut++){let C=W(Ye[ut],Q[ut],Ve);de(C.x,C.y,-ue),ce===0&&L.push(C)}ce===0&&oe.push(L)}}we=ci.triangulateShape(te,oe)}let ct=we.length,je=g+x;for(let te=0;te<X;te++){let oe=u?W(A[te],Re[te],je):A[te];y?(R.copy(E.normals[0]).multiplyScalar(oe.x),b.copy(E.binormals[0]).multiplyScalar(oe.y),v.copy(S[0]).add(R).add(b),de(v.x,v.y,v.z)):de(oe.x,oe.y,0)}for(let te=1;te<=h;te++)for(let oe=0;oe<X;oe++){let le=u?W(A[oe],Re[oe],je):A[oe];y?(R.copy(E.normals[te]).multiplyScalar(le.x),b.copy(E.binormals[te]).multiplyScalar(le.y),v.copy(S[te]).add(R).add(b),de(v.x,v.y,v.z)):de(le.x,le.y,d/h*te)}for(let te=p-1;te>=0;te--){let oe=te/p,le=f*Math.cos(oe*Math.PI/2),ce=g*Math.sin(oe*Math.PI/2)+x;for(let ue=0,Ve=B.length;ue<Ve;ue++){let ze=W(B[ue],G[ue],ce);de(ze.x,ze.y,d+le)}for(let ue=0,Ve=I.length;ue<Ve;ue++){let ze=I[ue];Q=j[ue];for(let We=0,Ye=ze.length;We<Ye;We++){let L=W(ze[We],Q[We],ce);y?de(L.x,L.y+S[h-1].y,S[h-1].x+le):de(L.x,L.y,d+le)}}}rt(),Y();function rt(){let te=s.length/3;if(u){let oe=0,le=X*oe;for(let ce=0;ce<ct;ce++){let ue=we[ce];Be(ue[2]+le,ue[1]+le,ue[0]+le)}oe=h+p*2,le=X*oe;for(let ce=0;ce<ct;ce++){let ue=we[ce];Be(ue[0]+le,ue[1]+le,ue[2]+le)}}else{for(let oe=0;oe<ct;oe++){let le=we[oe];Be(le[2],le[1],le[0])}for(let oe=0;oe<ct;oe++){let le=we[oe];Be(le[0]+X*h,le[1]+X*h,le[2]+X*h)}}n.addGroup(te,s.length/3-te,0)}function Y(){let te=s.length/3,oe=0;K(B,oe),oe+=B.length;for(let le=0,ce=I.length;le<ce;le++){let ue=I[le];K(ue,oe),oe+=ue.length}n.addGroup(te,s.length/3-te,1)}function K(te,oe){let le=te.length;for(;--le>=0;){let ce=le,ue=le-1;ue<0&&(ue=te.length-1);for(let Ve=0,ze=h+p*2;Ve<ze;Ve++){let We=X*Ve,Ye=X*(Ve+1),L=oe+ce+We,ut=oe+ue+We,tt=oe+ue+Ye,C=oe+ce+Ye;be(L,ut,tt,C)}}}function de(te,oe,le){l.push(te),l.push(oe),l.push(le)}function Be(te,oe,le){Ge(te),Ge(oe),Ge(le);let ce=s.length/3,ue=_.generateTopUV(n,s,ce-3,ce-2,ce-1);dt(ue[0]),dt(ue[1]),dt(ue[2])}function be(te,oe,le,ce){Ge(te),Ge(oe),Ge(ce),Ge(oe),Ge(le),Ge(ce);let ue=s.length/3,Ve=_.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);dt(Ve[0]),dt(Ve[1]),dt(Ve[3]),dt(Ve[1]),dt(Ve[2]),dt(Ve[3])}function Ge(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function dt(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ih[s.type]().fromJSON(s)),new i(n,e.options)}},Mm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new $(r,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-d),new $(u,1-g),new $(x,1-m)]:[new $(a,1-l),new $(h,1-d),new $(f,1-g),new $(p,1-m)]}};function Sm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qi=class i extends Kr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var oo=class i extends Kr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},yn=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*u-o;for(let S=0;S<c;S++){let y=S*d-r;g.push(y,-_,0),x.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let S=_+c*m,y=_+c*(m+1),E=_+1+c*(m+1),b=_+1+c*m;f.push(S,y,b),f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ao=class i extends Tt{constructor(e=new ei([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;ci.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let _=g[p];ci.isClockWise(_)===!0&&(g[p]=_.reverse())}let x=ci.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let _=g[p];f=f.concat(_)}for(let p=0,m=f.length;p<m;p++){let _=f[p];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,m=x.length;p<m;p++){let _=x[p],S=_[0]+d,y=_[1]+d,E=_[2]+d;n.push(S,y,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return bm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function bm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Jt=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let _=[],S=m/n,y=o+S*a,E=e*Math.cos(y),b=Math.sqrt(e*e-E*E),R=0;m===0&&o===0?R=.5/t:m===n&&l===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){let w=v/t,A=s+w*r;d.x=-b*Math.cos(A),d.y=E,d.z=b*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(w+R,1-S),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let S=h[m][_+1],y=h[m][_],E=h[m+1][_],b=h[m+1][_+1];(m!==0||o>0)&&f.push(S,y,b),(m!==n-1||l<Math.PI)&&f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mn=class i extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let m=0;m<=s;m++){let _=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let m=(s+1)*x+p-1,_=(s+1)*(x-1)+p-1,S=(s+1)*(x-1)+p,y=(s+1)*x+p;l.push(m,_,y),l.push(_,S,y)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Yu(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Yu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=gs(i[t]);for(let s in n)e[s]=n[s]}return e}function Yu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Em(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var cn={clone:gs,merge:gn},Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Em(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new re().setHex(s.value);break;case"v2":this.uniforms[n].value=new $().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new at().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qs=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pt=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mt=class extends pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends Kn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var ja=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qa=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $c(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends Yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=e,a=2*t-n;break;case th:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case eh:o=e,l=2*n-t;break;case th:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,S=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+_*o[c+E]+S*o[l+E]+y*o[d+E];return r}},tl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},nl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},il=class extends Yi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*g;return r}let u=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[c+g],p=o[l+g],m=f*u+g*2,_=d[m],S=d[m+1],y=e*u+g*2,E=h[y],b=h[y+1],R=Rm(n,t,_,E,s);r[g]=Bd(R,x,S,b,p)}return r}};function Bd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Am(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Rm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Bd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Am(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bs(t,this.TimeBufferType),this.values=Bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bs(e.times,Array),values:Bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),$c(e.settings)&&(n.settings={inTangents:Bs(e.settings.inTangents,Array),outTangents:Bs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new il(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case za:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break;case jc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;$c(this.settings)&&(Zu(this.settings.inTangents,e),Zu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&mp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,$c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=za;var Zi=class extends Dn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ur;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};sl.prototype.ValueTypeName="color";var rl=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};rl.prototype.ValueTypeName="number";var ol=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},co=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Dn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ur;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};al.prototype.ValueTypeName="vector";var ll=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zd=new ll,cl=class{constructor(e){this.manager=e!==void 0?e:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ho=class extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Kc=new at,Ju=new P,$u=new P,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Kc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Aa=new P,Ra=new Pn,ai=new P,fo=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Aa,Ra,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Aa,Ra,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new P,Ku=new $,ju=new $,an=class extends fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Ku,ju),t.subVectors(ju,Ku)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ah=class extends uo{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},tr=class extends er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$i=class extends fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lh=class extends uo{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new lh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var zs=-90,Hs=1,hl=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(zs,Hs,e,t);s.layers=this.layers,this.add(s);let r=new an(zs,Hs,e,t);r.layers=this.layers,this.add(r);let o=new an(zs,Hs,e,t);o.layers=this.layers,this.add(o);let a=new an(zs,Hs,e,t);a.layers=this.layers,this.add(a);let l=new an(zs,Hs,e,t);l.layers=this.layers,this.add(l);let c=new an(zs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ul=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},po=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Cm(){this._document.hidden===!1&&this.reset()}var Ch="\\[\\]\\.:\\/",Pm=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",Im="[^"+Ch.replace("\\.","")+"]",Dm=/((?:WC+[\/:])*)/.source.replace("WC",Ph),Lm=/(WCOD+)?/.source.replace("WCOD",Im),Nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),Um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),Fm=new RegExp("^"+Dm+Lm+Nm+Um+"$"),Om=["material","materials","bones","map"],ch=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pm,"")}static parseTrackName(e){let t=Fm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=ch;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jv=new Float32Array(1);var Fh=class Fh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Fh.prototype.isMatrix2=!0;var hh=Fh;function Ih(i,e,t,n){let s=Bm(n);switch(t){case Sh:return i*e;case yl:return i*e/s.components*s.byteLength;case Ml:return i*e/s.components*s.byteLength;case ts:return i*e*2/s.components*s.byteLength;case Sl:return i*e*2/s.components*s.byteLength;case bh:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case To:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Al:return Math.max(i,16)*Math.max(e,8)/4;case El:case wl:return Math.max(i,8)*Math.max(e,8)/2;case Rl:case Cl:case Il:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Co:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zl:case Jl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kl:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Po:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bm(i){switch(i){case pn:case _h:return{byteLength:1,components:1};case sr:case vh:case Ht:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case ni:case xl:case Fn:return{byteLength:4,components:1};case yh:case Mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lf(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,h0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:km,alphahash_pars_fragment:Vm,alphamap_fragment:Gm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:qm,aomap_fragment:Ym,aomap_pars_fragment:Zm,batching_pars_vertex:Jm,batching_vertex:$m,begin_vertex:Km,beginnormal_vertex:jm,bsdfs:Qm,iridescence_fragment:e0,bumpmap_pars_fragment:t0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:r0,color_fragment:o0,color_pars_fragment:a0,color_pars_vertex:l0,color_vertex:c0,common:h0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:d0,displacementmap_pars_vertex:f0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:x0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:y0,envmap_pars_fragment:M0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:L0,envmap_vertex:b0,fog_vertex:E0,fog_pars_vertex:T0,fog_fragment:w0,fog_pars_fragment:A0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:I0,lights_pars_begin:D0,lights_toon_fragment:N0,lights_toon_pars_fragment:U0,lights_phong_fragment:F0,lights_phong_pars_fragment:O0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:H0,lights_fragment_maps:k0,lights_fragment_end:V0,lightprobes_pars_fragment:G0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:Z0,map_pars_fragment:J0,map_particle_fragment:$0,map_particle_pars_fragment:K0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:sg,normal_fragment_begin:rg,normal_fragment_maps:og,normal_pars_fragment:ag,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:xg,project_vertex:_g,dithering_fragment:vg,dithering_pars_fragment:yg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Tg,shadowmask_pars_fragment:wg,skinbase_vertex:Ag,skinning_pars_vertex:Rg,skinning_vertex:Cg,skinnormal_vertex:Pg,specularmap_fragment:Ig,specularmap_pars_fragment:Dg,tonemapping_fragment:Lg,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Fg,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:zg,worldpos_vertex:Hg,background_vert:kg,background_frag:Vg,backgroundCube_vert:Gg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:qg,depth_vert:Yg,depth_frag:Zg,distance_vert:Jg,distance_frag:$g,equirect_vert:Kg,equirect_frag:jg,linedashed_vert:Qg,linedashed_frag:ex,meshbasic_vert:tx,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:sx,meshmatcap_vert:rx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:hx,meshphysical_vert:ux,meshphysical_frag:dx,meshtoon_vert:fx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:xx,shadow_frag:_x,sprite_vert:vx,sprite_frag:yx},ye={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},vi={basic:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:gn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:gn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new re(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:gn([ye.points,ye.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:gn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:gn([ye.common,ye.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:gn([ye.sprite,ye.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:gn([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:gn([ye.lights,ye.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};vi.physical={uniforms:gn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var nc={r:0,b:0,g:0},Mx=new at,cf=new $e;cf.set(-1,0,0,0,1,0,0,0,1);function Sx(i,e,t,n,s,r){let o=new re(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let y=_.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(_){let S=!1,y=f(_);y===null?p(o,a):y&&y.isColor&&(p(y,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,S){let y=f(S);y&&(y.isCubeTexture||y.mapping===bo)?(c===void 0&&(c=new ae(new nn(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:gs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cf),c.material.toneMapped=ot.getTransfer(y.colorSpace)!==gt,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ae(new yn(2,2),new xt({name:"BackgroundMaterial",uniforms:gs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ot.getTransfer(y.colorSpace)!==gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,S){_.getRGB(nc,Rh(i)),t.buffers.color.setClear(nc.r,nc.g,nc.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:g,addToRenderList:x,dispose:m}}function bx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,N,O,D,B){let W=!1,X=d(I,D,O,N);r!==X&&(r=X,c(r.object)),W=f(I,D,O,B),W&&g(I,D,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(I,N,O,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,N,O,D){let B=D.wireframe===!0,W=n[N.id];W===void 0&&(W={},n[N.id]=W);let X=I.isInstancedMesh===!0?I.id:0,ie=W[X];ie===void 0&&(ie={},W[X]=ie);let G=ie[O.id];G===void 0&&(G={},ie[O.id]=G);let j=G[B];return j===void 0&&(j=u(l()),G[B]=j),j}function u(I){let N=[],O=[],D=[];for(let B=0;B<t;B++)N[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,N,O,D){let B=r.attributes,W=N.attributes,X=0,ie=O.getAttributes();for(let G in ie)if(ie[G].location>=0){let Q=B[G],Re=W[G];if(Re===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(Re=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(Re=I.instanceColor)),Q===void 0||Q.attribute!==Re||Re&&Q.data!==Re.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(I,N,O,D){let B={},W=N.attributes,X=0,ie=O.getAttributes();for(let G in ie)if(ie[G].location>=0){let Q=W[G];Q===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let Re={};Re.attribute=Q,Q&&Q.data&&(Re.data=Q.data),B[G]=Re,X++}r.attributes=B,r.attributesNum=X,r.index=D}function x(){let I=r.newAttributes;for(let N=0,O=I.length;N<O;N++)I[N]=0}function p(I){m(I,0)}function m(I,N){let O=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;O[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),B[I]!==N&&(i.vertexAttribDivisor(I,N),B[I]=N)}function _(){let I=r.newAttributes,N=r.enabledAttributes;for(let O=0,D=N.length;O<D;O++)N[O]!==I[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function S(I,N,O,D,B,W,X){X===!0?i.vertexAttribIPointer(I,N,O,B,W):i.vertexAttribPointer(I,N,O,D,B,W)}function y(I,N,O,D){x();let B=D.attributes,W=O.getAttributes(),X=N.defaultAttributeValues;for(let ie in W){let G=W[ie];if(G.location>=0){let j=B[ie];if(j===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let Q=j.normalized,Re=j.itemSize,we=e.get(j);if(we===void 0)continue;let ct=we.buffer,je=we.type,rt=we.bytesPerElement,Y=je===i.INT||je===i.UNSIGNED_INT||j.gpuType===xl;if(j.isInterleavedBufferAttribute){let K=j.data,de=K.stride,Be=j.offset;if(K.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)m(G.location+be,K.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let be=0;be<G.locationSize;be++)p(G.location+be);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let be=0;be<G.locationSize;be++)S(G.location+be,Re/G.locationSize,je,Q,de*rt,(Be+Re/G.locationSize*be)*rt,Y)}else{if(j.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)m(G.location+K,j.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let K=0;K<G.locationSize;K++)p(G.location+K);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let K=0;K<G.locationSize;K++)S(G.location+K,Re/G.locationSize,je,Q,Re*rt,Re/G.locationSize*K*rt,Y)}}else if(X!==void 0){let Q=X[ie];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(G.location,Q);break;case 3:i.vertexAttrib3fv(G.location,Q);break;case 4:i.vertexAttrib4fv(G.location,Q);break;default:i.vertexAttrib1fv(G.location,Q)}}}}_()}function E(){w();for(let I in n){let N=n[I];for(let O in N){let D=N[O];for(let B in D){let W=D[B];for(let X in W)h(W[X].object),delete W[X];delete D[B]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let O in N){let D=N[O];for(let B in D){let W=D[B];for(let X in W)h(W[X].object),delete W[X];delete D[B]}}delete n[I.id]}function R(I){for(let N in n){let O=n[N];for(let D in O){let B=O[D];if(B[I.id]===void 0)continue;let W=B[I.id];for(let X in W)h(W[X].object),delete W[X];delete B[I.id]}}}function v(I){for(let N in n){let O=n[N],D=I.isInstancedMesh===!0?I.id:0,B=O[D];if(B!==void 0){for(let W in B){let X=B[W];for(let ie in X)h(X[ie].object),delete X[ie];delete B[W]}delete O[D],Object.keys(O).length===0&&delete n[N]}}}function w(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Ex(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Tx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==pn&&R!==Fn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:b}}function wx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Yn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,S=_*4,y=m.clippingState||null;l.value=y,y=h(g,u,S,f);for(let E=0;E!==S;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,y=f;S!==x;++S,y+=4)o.copy(d[S]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var or=4,Ax=6,Rx=20,Cx=256,Lo=new $i,Hd=new re,Oh=null,Bh=0,zh=0,Hh=!1,Px=new P,xs=new P,lr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Px}=r;Oh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Bh,zh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ht,format:mn,colorSpace:Fr,depthBuffer:!1},s=kd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ix(r)),this._blurMaterial=Lx(r,e,t),this._ggxMaterial=Dx(r,e,t)}return s}_compileMaterial(e){let t=new ae(new Tt,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,s,r){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Hd),d.toneMapping=ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new nn,new En({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Hd),m=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let E=this._cubeSize;rr(s,y*E,S>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Qi||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Lo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-or?n-g+or:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,rr(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Lo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,rr(e,p,m,3*x,2*x),s.setRenderTarget(e),s.render(a,Lo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-or?s-this._lodMax+or:0),u=4*(this._cubeSize-h);rr(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,Lo)}};function Ix(i){let e=[],t=[],n=i,s=i-or+1+Ax;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let _=m%3*2/3-1,S=m>2?0:-1,y=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];g.set(y,f*u*m);for(let E=0;E<u;E++){let b=h[E*2]*2-1,R=h[E*2+1]*2-1;m===0?xs.set(1,R,b):m===1?xs.set(-b,1,-R):m===2?xs.set(-b,R,1):m===3?xs.set(-1,R,-b):m===4?xs.set(-b,-1,R):xs.set(b,R,-1),xs.toArray(x,(m*u+E)*f)}}let p=new Tt;p.setAttribute("position",new Ct(g,f)),p.setAttribute("outputDirection",new Ct(x,f)),t.push(new ae(p,null)),n>or&&n--}return{lodMeshes:t,sizeLods:e}}function kd(i,e,t){let n=new Lt(i,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dx(i,e,t){return new xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Lx(i,e,t){return new xt({name:"SphericalGaussianBlur",defines:{SAMPLES:Rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Vd(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Gd(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sc=class extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nn(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Wt});r.uniforms.tEquirect.value=t;let o=new ae(s,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=$t),new hl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Nx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===pl||f===ml)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new sc(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===pl||f===ml,x=f===Qi||f===ms;if(g||x){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new lr(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return g&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new lr(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===pl?u.mapping=Qi:f===ml&&(u.mapping=ms),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ux(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Fx(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let S=0,y=_.length;S<y;S+=3){let E=_[S+0],b=_[S+1],R=_[S+2];u.push(E,b,b,R,R,E)}}else{let _=g.array;x=g.version;for(let S=0,y=_.length/3-1;S<y;S+=3){let E=S+0,b=S+1,R=S+2;u.push(E,b,b,R,R,E)}}let p=new(g.count>=65535?Wr:Gr)(u,1);p.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ox(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zx(i,e,t){let n=new WeakMap,s=new Ut;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*E*4*d),R=new Hr(b,y,E,d);R.type=Fn,R.needsUpdate=!0;let v=S*4;for(let A=0;A<d;A++){let I=p[A],N=m[A],O=_[A],D=y*E*4*A;for(let B=0;B<I.count;B++){let W=B*v;f===!0&&(s.fromBufferAttribute(I,B),b[D+W+0]=s.x,b[D+W+1]=s.y,b[D+W+2]=s.z,b[D+W+3]=0),g===!0&&(s.fromBufferAttribute(N,B),b[D+W+4]=s.x,b[D+W+5]=s.y,b[D+W+6]=s.z,b[D+W+7]=0),x===!0&&(s.fromBufferAttribute(O,B),b[D+W+8]=s.x,b[D+W+9]=s.y,b[D+W+10]=s.z,b[D+W+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new $(y,E)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hx(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var kx={[xo]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[So]:"NEUTRAL_TONE_MAPPING",[yo]:"CUSTOM_TONE_MAPPING"};function Vx(i,e,t,n,s,r){let o=new Lt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Tt;c.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new et([0,2,0,0,2,0],2));let h=new Qs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ae(c,h),u=new $i(-1,1,1,-1,0,1),f=null,g=null,x=!1,p,m=null,_=[],S=!1;this.setSize=function(y,E){o.setSize(y,E),a!==null&&a.setSize(y,E),l!==null&&l.setSize(y,E);for(let b=0;b<_.length;b++){let R=_[b];R.setSize&&R.setSize(y,E)}},this.setEffects=function(y){_=y,S=_.length>0&&_[0].isRenderPass===!0;let E=o.width,b=o.height;_.length>0&&a===null&&(a=new Lt(E,b,{type:Ht,depthBuffer:!1,stencilBuffer:!1}),l=new Lt(E,b,{type:Ht,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<_.length;R++){let v=_[R];v.setSize&&v.setSize(E,b)}},this.begin=function(y,E){if(x||y.toneMapping===ti&&_.length===0)return!1;if(m=E,E!==null){let b=E.width,R=E.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return S===!1&&y.setRenderTarget(o),p=y.toneMapping,y.toneMapping=ti,!0},this.hasRenderPass=function(){return S},this.end=function(y,E){y.toneMapping=p,x=!0;let b=o,R=a;for(let v=0;v<_.length;v++){let w=_[v];w.enabled!==!1&&(w.render(y,R,b,E),w.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},ot.getTransfer(f)===gt&&(h.defines.SRGB_TRANSFER="");let v=kx[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var hf=new vn,Gh=new pi(1,1),uf=new Hr,df=new Va,ff=new Zr,Wd=[],Xd=[],qd=new Float32Array(16),Yd=new Float32Array(9),Zd=new Float32Array(4);function cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wd[s];if(r===void 0&&(r=new Float32Array(s),Wd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ac(i,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function Yx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Zd.set(n),i.uniformMatrix2fv(this.addr,!1,Zd),jt(t,n)}}function Zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Yd.set(n),i.uniformMatrix3fv(this.addr,!1,Yd),jt(t,n)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;qd.set(n),i.uniformMatrix4fv(this.addr,!1,qd),jt(t,n)}}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function e_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gh.compareFunction=t.isReversedDepthBuffer()?tc:ec,r=Gh):r=hf,t.setTexture2D(e||r,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||df,s)}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ff,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uf,s)}function l_(i){switch(i){case 5126:return Gx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return Yx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return $x;case 35667:case 35671:return Kx;case 35668:case 35672:return jx;case 35669:case 35673:return Qx;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return a_}}function c_(i,e){i.uniform1fv(this.addr,e)}function h_(i,e){let t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function u_(i,e){let t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function d_(i,e){let t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function f_(i,e){let t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p_(i,e){let t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m_(i,e){let t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g_(i,e){i.uniform1iv(this.addr,e)}function x_(i,e){i.uniform2iv(this.addr,e)}function __(i,e){i.uniform3iv(this.addr,e)}function v_(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function M_(i,e){i.uniform2uiv(this.addr,e)}function S_(i,e){i.uniform3uiv(this.addr,e)}function b_(i,e){i.uniform4uiv(this.addr,e)}function E_(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Gh:o=hf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function T_(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||df,r[o])}function w_(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ff,r[o])}function A_(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||uf,r[o])}function R_(i){switch(i){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return x_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return y_;case 36294:return M_;case 36295:return S_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}var Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l_(t.type)}},Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R_(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},kh=/(\w+)(\])?(\[|\.)?/g;function Jd(i,e){i.seq.push(e),i.map[e.id]=e}function C_(i,e,t){let n=i.name,s=n.length;for(kh.lastIndex=0;;){let r=kh.exec(n),o=kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jd(t,c===void 0?new Wh(a,i,e):new Xh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new qh(a),Jd(t,d)),t=d}}}var ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);C_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function $d(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var P_=37297,I_=0;function D_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Kd=new $e;function L_(i){ot._getMatrix(Kd,ot.workingColorSpace,i);let e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+D_(i.getShaderSource(e),a)}else return r}function N_(i,e){let t=L_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var U_={[xo]:"Linear",[_o]:"Reinhard",[vo]:"Cineon",[ps]:"ACESFilmic",[Mo]:"AgX",[So]:"Neutral",[yo]:"Custom"};function F_(i,e){let t=U_[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ic=new P;function O_(){ot.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function z_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Uo(i){return i!==""}function Qd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(i){return i.replace(k_,G_)}var V_=new Map;function G_(i,e){let t=it[e];if(t===void 0){let n=V_.get(e);if(n!==void 0)t=it[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yh(t)}var W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(i){return i.replace(W_,X_)}function X_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var q_={[ds]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Y_(i){return q_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Z_={[Qi]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function J_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Z_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $_={[ms]:"ENVMAP_MODE_REFRACTION"};function K_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var j_={[gh]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[xd]:"ENVMAP_BLENDING_ADD"};function Q_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":j_[i.combine]||"ENVMAP_BLENDING_NONE"}function ev(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Y_(t),c=J_(t),h=K_(t),d=Q_(t),u=ev(t),f=B_(t),g=z_(r),x=s.createProgram(),p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Uo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Uo).join(`
`),m.length>0&&(m+=`
`)):(p=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),m=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?it.tonemapping_pars_fragment:"",t.toneMapping!==ti?F_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),O_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Yh(o),o=Qd(o,t),o=ef(o,t),a=Yh(a),a=Qd(a,t),a=ef(a,t),o=tf(o),a=tf(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=_+p+o,y=_+m+a,E=$d(s,s.VERTEX_SHADER,S),b=$d(s,s.FRAGMENT_SHADER,y);s.attachShader(x,E),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(b)||"",B=N.trim(),W=O.trim(),X=D.trim(),ie=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,b);else{let j=jd(s,E,"vertex"),Q=jd(s,b,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+j+`
`+Q)}else B!==""?Xe("WebGLProgram: Program Info Log:",B):(W===""||X==="")&&(G=!1);G&&(I.diagnostics={runnable:ie,programLog:B,vertexShader:{log:W,prefix:p},fragmentShader:{log:X,prefix:m}})}s.deleteShader(E),s.deleteShader(b),v=new ar(s,x),w=H_(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,P_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}var nv=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jh(e),t.set(e,n)),n}},Jh=class{constructor(e){this.id=nv++,this.code=e,this.usedTimes=0}};function iv(i){return i===ts||i===Co||i===Po}function sv(i,e,t,n,s,r){let o=new kr,a=new Zh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,w,A,I,N,O){let D=I.fog,B=N.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||W,X),G=ie&&ie.mapping===bo?ie.image.height:null,j=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Xe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Re=Q!==void 0?Q.length:0,we=0;B.morphAttributes.position!==void 0&&(we=1),B.morphAttributes.normal!==void 0&&(we=2),B.morphAttributes.color!==void 0&&(we=3);let ct,je,rt,Y;if(j){let At=vi[j];ct=At.vertexShader,je=At.fragmentShader}else{ct=v.vertexShader,je=v.fragmentShader;let At=a.getVertexShaderStage(v),_t=a.getFragmentShaderStage(v);a.update(v,At,_t),rt=At.id,Y=_t.id}let K=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Be=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,Ge=!!v.map,dt=!!v.matcap,te=!!ie,oe=!!v.aoMap,le=!!v.lightMap,ce=!!v.bumpMap&&v.wireframe===!1,ue=!!v.normalMap,Ve=!!v.displacementMap,ze=!!v.emissiveMap,We=!!v.metalnessMap,Ye=!!v.roughnessMap,L=v.anisotropy>0,ut=v.clearcoat>0,tt=v.dispersion>0,C=v.retroreflectivity>0,M=v.iridescence>0,z=v.sheen>0,H=v.transmission>0,Z=L&&!!v.anisotropyMap,he=ut&&!!v.clearcoatMap,fe=ut&&!!v.clearcoatNormalMap,J=ut&&!!v.clearcoatRoughnessMap,ne=M&&!!v.iridescenceMap,xe=M&&!!v.iridescenceThicknessMap,Ue=z&&!!v.sheenColorMap,me=z&&!!v.sheenRoughnessMap,pe=!!v.specularMap,Pe=!!v.specularColorMap,He=!!v.specularIntensityMap,Ze=H&&!!v.transmissionMap,F=H&&!!v.thicknessMap,_e=!!v.gradientMap,ee=!!v.alphaMap,ve=v.alphaTest>0,Ee=!!v.alphaHash,se=!!v.extensions,ke=ti;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ke=i.toneMapping);let Ne={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:ct,fragmentShader:je,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Be,instancingColor:Be&&N.instanceColor!==null,instancingMorph:Be&&N.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:dt,envMap:te,envMapMode:te&&ie.mapping,envMapCubeUVHeight:G,aoMap:oe,lightMap:le,bumpMap:ce,normalMap:ue,displacementMap:Ve,emissiveMap:ze,normalMapObjectSpace:ue&&v.normalMapType===yd,normalMapTangentSpace:ue&&v.normalMapType===Io,packedNormalMap:ue&&v.normalMapType===Io&&iv(v.normalMap.format),metalnessMap:We,roughnessMap:Ye,anisotropy:L,anisotropyMap:Z,clearcoat:ut,clearcoatMap:he,clearcoatNormalMap:fe,clearcoatRoughnessMap:J,dispersion:tt,retroreflection:C,iridescence:M,iridescenceMap:ne,iridescenceThicknessMap:xe,sheen:z,sheenColorMap:Ue,sheenRoughnessMap:me,specularMap:pe,specularColorMap:Pe,specularIntensityMap:He,transmission:H,transmissionMap:Ze,thicknessMap:F,gradientMap:_e,opaque:v.transparent===!1&&v.blending===ji&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:ve,alphaHash:Ee,combine:v.combine,mapUv:Ge&&g(v.map.channel),aoMapUv:oe&&g(v.aoMap.channel),lightMapUv:le&&g(v.lightMap.channel),bumpMapUv:ce&&g(v.bumpMap.channel),normalMapUv:ue&&g(v.normalMap.channel),displacementMapUv:Ve&&g(v.displacementMap.channel),emissiveMapUv:ze&&g(v.emissiveMap.channel),metalnessMapUv:We&&g(v.metalnessMap.channel),roughnessMapUv:Ye&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:he&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(v.sheenRoughnessMap.channel),specularMapUv:pe&&g(v.specularMap.channel),specularColorMapUv:Pe&&g(v.specularColorMap.channel),specularIntensityMapUv:He&&g(v.specularIntensityMap.channel),transmissionMapUv:Ze&&g(v.transmissionMap.channel),thicknessMapUv:F&&g(v.thicknessMap.channel),alphaMapUv:ee&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ue||L),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Ge||ee),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&ue===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:ze&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)w.push(A),w.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(m(w,v),_(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function _(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){let w=f[v.type],A;if(w){let I=vi[w];A=cn.clone(I.uniforms)}else A=v.uniforms;return A}function y(v,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new tv(i,w,v,s),c.push(A),h.set(w,A)),A}function E(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:R}}function rv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ov(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function sf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,p,m){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},i[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=p,_.group=m),e++,_}function l(u,f,g,x,p,m,_){_.reversedDepth===!0&&(p=-p);let S=a(u,f,g,x,p,m);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(u,f,g,x,p,m){let _=a(u,f,g,x,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||ov),n.length>1&&n.sort(f||sf),s.length>1&&s.sort(f||sf)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function av(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new rf,i.set(n,[o])):s>=r.length?(o=new rf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function lv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new re};break;case"SpotLight":t={position:new P,direction:new P,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function cv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hv=0;function uv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dv(i){let e=new lv,t=cv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new at,o=new at;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,_=0,S=0,y=0,E=0,b=0,R=0,v=0,w=0,A=0;c.sort(uv);for(let N=0,O=c.length;N<O;N++){let D=c[N],B=D.color,W=D.intensity,X=D.distance,ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ts?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*W,d+=B.g*W,u+=B.b*W;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],W);A++}else if(D.isSunLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,Q=t.get(D);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=ie;let Re=j.getViewportCount();for(let we=0;we<Re;we++)n.sunShadowMatrix[x+we]=j.getMatrix(we),n.sunShadowCascade[x+we]=j._cascadeData[we];x+=Re,g++}n.sun[f]=G,f++}else if(D.isDirectionalLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,Q=t.get(D);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=G,p++}else if(D.isSpotLight){let G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(W),G.distance=X,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[_]=G;let j=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,j.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=j.matrix,D.castShadow){let Q=t.get(D);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=ie,R++}_++}else if(D.isRectAreaLight){let G=e.get(D);G.color.copy(B).multiplyScalar(W),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[S]=G,S++}else if(D.isPointLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let j=D.shadow,Q=t.get(D);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=ie,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=G,m++}else if(D.isHemisphereLight){let G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(W),G.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[y]=G,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==S||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==R||I.numSpotMaps!==v||I.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=_,n.rectArea.length=S,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=_,I.rectAreaLength=S,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=R,I.numSpotMaps=v,I.numLightProbes=A,n.version=hv++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let y=c[_];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(y.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function of(i){let e=new dv(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function fv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new of(i),e.set(s,[a])):r>=o.length?(a=new of(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],xv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],af=new at,No=new P,Vh=new P;function _v(i,e,t){let n=new Js,s=new $,r=new $,o=new Ut,a=new ja,l=new Qa,c={},h=t.maxTextureSize,d={[Ki]:ln,[ln]:Ki,[sn]:sn},u=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ae(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let m=this.type;this.render=function(b,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===td&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);let w=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Wt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=m!==this.type;O&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=b.length;D<B;D++){let W=b[D],X=W.shadow;if(X===void 0){Xe("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ie=X.getFrameExtents();s.multiply(ie),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,X.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=G,X.map===null||O===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ir){if(W.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Lt(s.x,s.y,{format:ts,type:Ht,minFilter:$t,magFilter:$t,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new pi(s.x,s.y,Fn),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=ui,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Gt,X.map.depthTexture.magFilter=Gt}else W.isPointLight?(X.map=new sc(s.x),X.map.depthTexture=new Xa(s.x,ni)):(X.map=new Lt(s.x,s.y),X.map.depthTexture=new pi(s.x,s.y,ni)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=ui,this.type===ds?(X.map.depthTexture.compareFunction=G?tc:ec,X.map.depthTexture.minFilter=$t,X.map.depthTexture.magFilter=$t):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Gt,X.map.depthTexture.magFilter=Gt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,v);for(let Q=0;Q<j;Q++){let Re=X.getCamera(Q);if(W.isPointLight){let we=X.camera,ct=X.matrix,je=W.distance||we.far;je!==we.far&&(we.far=je,we.updateProjectionMatrix()),No.setFromMatrixPosition(W.matrixWorld),we.position.copy(No),Vh.copy(we.position),Vh.add(gv[Q]),we.up.copy(xv[Q]),we.lookAt(Vh),we.updateMatrixWorld(),ct.makeTranslation(-No.x,-No.y,-No.z),af.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),X._frustum.setFromProjectionMatrix(af,we.coordinateSystem,we.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(X.map),i.clear());let we=X.getViewport(Q);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),N.viewport(o)}n=X.getFrustum(Q),y(R,v,Re,W,this.type)}X.isPointLightShadow!==!0&&this.type===ir&&_(X,v),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,A,I)};function _(b,R){let v=e.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Lt(s.x,s.y,{format:ts,type:Ht}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,v,f,x,null)}function S(b,R,v,w){let A=null,I=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)A=I;else if(A=v.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=A.uuid,O=R.uuid,D=c[N];D===void 0&&(D={},c[N]=D);let B=D[O];B===void 0&&(B=A.clone(),D[O]=B,R.addEventListener("dispose",E)),A=B}if(A.visible=R.visible,A.wireframe=R.wireframe,w===ir?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:d[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=v}return A}function y(b,R,v,w,A){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===ir)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let O=e.update(b),D=b.material;if(Array.isArray(D)){let B=O.groups;for(let W=0,X=B.length;W<X;W++){let ie=B[W],G=D[ie.materialIndex];if(G&&G.visible){let j=S(b,G,w,A);b.onBeforeShadow(i,b,R,v,O,j,ie),i.renderBufferDirect(v,null,O,j,b,ie),b.onAfterShadow(i,b,R,v,O,j,ie)}}}else if(D.visible){let B=S(b,D,w,A);b.onBeforeShadow(i,b,R,v,O,B,null),i.renderBufferDirect(v,null,O,B,b,null),b.onAfterShadow(i,b,R,v,O,B,null)}}let N=b.children;for(let O=0,D=N.length;O<D;O++)y(N[O],R,v,w,A)}function E(b){b.target.removeEventListener("dispose",E);for(let v in c){let w=c[v],A=b.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function vv(i,e){function t(){let F=!1,_e=new Ut,ee=null,ve=new Ut(0,0,0,0);return{setMask:function(Ee){ee!==Ee&&!F&&(i.colorMask(Ee,Ee,Ee,Ee),ee=Ee)},setLocked:function(Ee){F=Ee},setClear:function(Ee,se,ke,Ne,At){At===!0&&(Ee*=Ne,se*=Ne,ke*=Ne),_e.set(Ee,se,ke,Ne),ve.equals(_e)===!1&&(i.clearColor(Ee,se,ke,Ne),ve.copy(_e))},reset:function(){F=!1,ee=null,ve.set(-1,0,0,0)}}}function n(){let F=!1,_e=!1,ee=null,ve=null,Ee=null;return{setReversed:function(se){if(_e!==se){let ke=e.get("EXT_clip_control");se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),_e=se;let Ne=Ee;Ee=null,this.setClear(Ne)}},getReversed:function(){return _e},setTest:function(se){se?K(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(se){ee!==se&&!F&&(i.depthMask(se),ee=se)},setFunc:function(se){if(_e&&(se=Id[se]),ve!==se){switch(se){case Ia:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case Na:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=se}},setLocked:function(se){F=se},setClear:function(se){Ee!==se&&(Ee=se,_e&&(se=1-se),i.clearDepth(se))},reset:function(){F=!1,ee=null,ve=null,Ee=null,_e=!1}}}function s(){let F=!1,_e=null,ee=null,ve=null,Ee=null,se=null,ke=null,Ne=null,At=null;return{setTest:function(_t){F||(_t?K(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(_t){_e!==_t&&!F&&(i.stencilMask(_t),_e=_t)},setFunc:function(_t,Vn,ri){(ee!==_t||ve!==Vn||Ee!==ri)&&(i.stencilFunc(_t,Vn,ri),ee=_t,ve=Vn,Ee=ri)},setOp:function(_t,Vn,ri){(se!==_t||ke!==Vn||Ne!==ri)&&(i.stencilOp(_t,Vn,ri),se=_t,ke=Vn,Ne=ri)},setLocked:function(_t){F=_t},setClear:function(_t){At!==_t&&(i.clearStencil(_t),At=_t)},reset:function(){F=!1,_e=null,ee=null,ve=null,Ee=null,se=null,ke=null,Ne=null,At=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,S=null,y=null,E=null,b=null,R=null,v=new re(0,0,0),w=0,A=!1,I=null,N=null,O=null,D=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ie=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=ie>=2);let j=null,Q={},Re=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),ct=new Ut().fromArray(Re),je=new Ut().fromArray(we);function rt(F,_e,ee,ve){let Ee=new Uint8Array(4),se=i.createTexture();i.bindTexture(F,se),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<ee;ke++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(_e+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return se}let Y={};Y[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Vs),ce(!1),ue(uh),K(i.CULL_FACE),oe(Wt);function K(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function de(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Be(F,_e){return u[F]!==_e?(i.bindFramebuffer(F,_e),u[F]=_e,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function be(F,_e){let ee=g,ve=!1;if(F){ee=f.get(_e),ee===void 0&&(ee=[],f.set(_e,ee));let Ee=F.textures;if(ee.length!==Ee.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ke=Ee.length;se<ke;se++)ee[se]=i.COLOR_ATTACHMENT0+se;ee.length=Ee.length,ve=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ee)}function Ge(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let dt={[Un]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};dt[sd]=i.MIN,dt[rd]=i.MAX;let te={[fs]:i.ZERO,[od]:i.ONE,[ad]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[ud]:i.SRC_ALPHA_SATURATE,[go]:i.DST_COLOR,[mo]:i.DST_ALPHA,[ld]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[hd]:i.ONE_MINUS_DST_COLOR,[cd]:i.ONE_MINUS_DST_ALPHA,[dd]:i.CONSTANT_COLOR,[fd]:i.ONE_MINUS_CONSTANT_COLOR,[pd]:i.CONSTANT_ALPHA,[md]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(F,_e,ee,ve,Ee,se,ke,Ne,At,_t){if(F===Wt){p===!0&&(de(i.BLEND),p=!1);return}if(p===!1&&(K(i.BLEND),p=!0),F!==fl){if(F!==m||_t!==A){if((_!==Un||E!==Un)&&(i.blendEquation(i.FUNC_ADD),_=Un,E=Un),_t)switch(F){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",F);break}else switch(F){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",F);break}S=null,y=null,b=null,R=null,v.set(0,0,0),w=0,m=F,A=_t}return}Ee=Ee||_e,se=se||ee,ke=ke||ve,(_e!==_||Ee!==E)&&(i.blendEquationSeparate(dt[_e],dt[Ee]),_=_e,E=Ee),(ee!==S||ve!==y||se!==b||ke!==R)&&(i.blendFuncSeparate(te[ee],te[ve],te[se],te[ke]),S=ee,y=ve,b=se,R=ke),(Ne.equals(v)===!1||At!==w)&&(i.blendColor(Ne.r,Ne.g,Ne.b,At),v.copy(Ne),w=At),m=F,A=!1}function le(F,_e){F.side===sn?de(i.CULL_FACE):K(i.CULL_FACE);let ee=F.side===ln;_e&&(ee=!ee),ce(ee),F.blending===ji&&F.transparent===!1?oe(Wt):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ve=F.stencilWrite;a.setTest(ve),ve&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ze(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function ue(F){F!==Qu?(K(i.CULL_FACE),F!==N&&(F===uh?i.cullFace(i.BACK):F===ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),N=F}function Ve(F){F!==O&&(X&&i.lineWidth(F),O=F)}function ze(F,_e,ee){F?(K(i.POLYGON_OFFSET_FILL),(D!==_e||B!==ee)&&(D=_e,B=ee,o.getReversed()&&(_e=-_e),i.polygonOffset(_e,ee))):de(i.POLYGON_OFFSET_FILL)}function We(F){F?K(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Ye(F){F===void 0&&(F=i.TEXTURE0+W-1),j!==F&&(i.activeTexture(F),j=F)}function L(F,_e,ee){ee===void 0&&(j===null?ee=i.TEXTURE0+W-1:ee=j);let ve=Q[ee];ve===void 0&&(ve={type:void 0,texture:void 0},Q[ee]=ve),(ve.type!==F||ve.texture!==_e)&&(j!==ee&&(i.activeTexture(ee),j=ee),i.bindTexture(F,_e||Y[F]),ve.type=F,ve.texture=_e)}function ut(){let F=Q[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function M(){try{i.texSubImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function he(){try{i.texStorage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function fe(){try{i.texStorage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function ne(){try{i.texImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function xe(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Ue(F,_e){d[F]!==_e&&(i.pixelStorei(F,_e),d[F]=_e)}function me(F){ct.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ct.copy(F))}function pe(F){je.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),je.copy(F))}function Pe(F,_e){let ee=c.get(_e);ee===void 0&&(ee=new WeakMap,c.set(_e,ee));let ve=ee.get(F);ve===void 0&&(ve=i.getUniformBlockIndex(_e,F.name),ee.set(F,ve))}function He(F,_e){let ve=c.get(_e).get(F);l.get(_e)!==ve&&(i.uniformBlockBinding(_e,ve,F.__bindingPointIndex),l.set(_e,ve))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,Q={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,S=null,y=null,E=null,b=null,R=null,v=new re(0,0,0),w=0,A=!1,I=null,N=null,O=null,D=null,B=null,ct.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:de,bindFramebuffer:Be,drawBuffers:be,useProgram:Ge,setBlending:oe,setMaterial:le,setFlipSided:ce,setCullFace:ue,setLineWidth:Ve,setPolygonOffset:ze,setScissorTest:We,activeTexture:Ye,bindTexture:L,unbindTexture:ut,compressedTexImage2D:tt,compressedTexImage3D:C,texImage2D:J,texImage3D:ne,pixelStorei:Ue,getParameter:xe,updateUBOMapping:Pe,uniformBlockBinding:He,texStorage2D:he,texStorage3D:fe,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:me,viewport:pe,reset:Ze}}function yv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return g?new OffscreenCanvas(C,M):Br("canvas")}function p(C,M,z){let H=1,Z=tt(C);if((Z.width>z||Z.height>z)&&(H=z/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let he=Math.floor(H*Z.width),fe=Math.floor(H*Z.height);u===void 0&&(u=x(he,fe));let J=M?x(he,fe):u;return J.width=he,J.height=fe,J.getContext("2d").drawImage(C,0,0,he,fe),Xe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+he+"x"+fe+")."),J}else return"data"in C&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,M,z,H,Z,he=!1){if(C!==null){if(i[C]!==void 0)return i[C];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;H&&(fe=e.get("EXT_texture_norm16"),fe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&fe&&(J=fe.R16_EXT),z===i.SHORT&&fe&&(J=fe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),M===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&fe&&(J=fe.RG16_EXT),z===i.SHORT&&fe&&(J=fe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_SHORT&&fe&&(J=fe.RGB16_EXT),z===i.SHORT&&fe&&(J=fe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),M===i.RGBA){let ne=he?Or:ot.getTransfer(Z);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=ne===gt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&fe&&(J=fe.RGBA16_EXT),z===i.SHORT&&fe&&(J=fe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(C,M){let z;return C?M===null||M===ni||M===es?z=i.DEPTH24_STENCIL8:M===Fn?z=i.DEPTH32F_STENCIL8:M===sr&&(z=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ni||M===es?z=i.DEPTH_COMPONENT24:M===Fn?z=i.DEPTH_COMPONENT32F:M===sr&&(z=i.DEPTH_COMPONENT16),z}function b(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==$t?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){let M=C.target;M.removeEventListener("dispose",R),w(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function v(C){let M=C.target;M.removeEventListener("dispose",v),I(M)}function w(C){let M=n.get(C);if(M.__webglInit===void 0)return;let z=C.source,H=f.get(z);if(H){let Z=H[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(C),Object.keys(H).length===0&&f.delete(z)}n.remove(C)}function A(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let z=C.source,H=f.get(z);delete H[M.__cacheKey],o.memory.textures--}function I(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let Z=0;Z<M.__webglFramebuffer[H].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[H][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)i.deleteFramebuffer(M.__webglFramebuffer[H]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=C.textures;for(let H=0,Z=z.length;H<Z;H++){let he=n.get(z[H]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(z[H])}n.remove(C)}let N=0;function O(){N=0}function D(){return N}function B(C){N=C}function W(){let C=N;return C>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function X(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ie(C,M){let z=n.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let H=C.image;if(H===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{de(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function G(C,M){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){de(z,C,M);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function j(C,M){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){de(z,C,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function Q(C,M){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Be(z,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let Re={[bn]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},we={[Gt]:i.NEAREST,[_d]:i.NEAREST_MIPMAP_NEAREST,[Eo]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},ct={[Sd]:i.NEVER,[Ad]:i.ALWAYS,[bd]:i.LESS,[ec]:i.LEQUAL,[Ed]:i.EQUAL,[tc]:i.GEQUAL,[Td]:i.GREATER,[wd]:i.NOTEQUAL};function je(C,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$t||M.magFilter===gl||M.magFilter===Eo||M.magFilter===gi||M.minFilter===$t||M.minFilter===gl||M.minFilter===Eo||M.minFilter===gi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Re[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Re[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Re[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,we[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,we[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ct[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==Eo&&M.minFilter!==gi||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function rt(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));let H=M.source,Z=f.get(H);Z===void 0&&(Z={},f.set(H,Z));let he=X(M);if(he!==C.__cacheKey){Z[he]===void 0&&(Z[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[he].usedTimes++;let fe=Z[C.__cacheKey];fe!==void 0&&(Z[C.__cacheKey].usedTimes--,fe.usedTimes===0&&A(M)),C.__cacheKey=he,C.__webglTexture=Z[he].texture}return z}function Y(C,M,z){return Math.floor(Math.floor(C/z)/M)}function K(C,M,z,H){let he=C.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,H,M.data);else{he.sort((Ue,me)=>Ue.start-me.start);let fe=0;for(let Ue=1;Ue<he.length;Ue++){let me=he[fe],pe=he[Ue],Pe=me.start+me.count,He=Y(pe.start,M.width,4),Ze=Y(me.start,M.width,4);pe.start<=Pe+1&&He===Ze&&Y(pe.start+pe.count-1,M.width,4)===He?me.count=Math.max(me.count,pe.start+pe.count-me.start):(++fe,he[fe]=pe)}he.length=fe+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ue=0,me=he.length;Ue<me;Ue++){let pe=he[Ue],Pe=Math.floor(pe.start/4),He=Math.ceil(pe.count/4),Ze=Pe%M.width,F=Math.floor(Pe/M.width),_e=He,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ze,F,_e,ee,z,H,M.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function de(C,M,z){let H=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=i.TEXTURE_3D);let Z=rt(C,M),he=M.source;t.bindTexture(H,C.__webglTexture,i.TEXTURE0+z);let fe=n.get(he);if(he.version!==fe.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ee=ot.getPrimaries(ot.workingColorSpace),ve=M.colorSpace===Li?null:ot.getPrimaries(M.colorSpace),Ee=M.colorSpace===Li||ee===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=p(M.image,!1,s.maxTextureSize);ne=ut(M,ne);let xe=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type),me=y(M.internalFormat,xe,Ue,M.normalized,M.colorSpace,M.isVideoTexture);je(H,M);let pe,Pe=M.mipmaps,He=M.isVideoTexture!==!0,Ze=fe.__version===void 0||Z===!0,F=he.dataReady,_e=b(M,ne);if(M.isDepthTexture)me=E(M.format===xi,M.type),Ze&&(He?t.texStorage2D(i.TEXTURE_2D,1,me,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,me,ne.width,ne.height,0,xe,Ue,null));else if(M.isDataTexture)if(Pe.length>0){He&&Ze&&t.texStorage2D(i.TEXTURE_2D,_e,me,Pe[0].width,Pe[0].height);for(let ee=0,ve=Pe.length;ee<ve;ee++)pe=Pe[ee],He?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,xe,Ue,pe.data):t.texImage2D(i.TEXTURE_2D,ee,me,pe.width,pe.height,0,xe,Ue,pe.data);M.generateMipmaps=!1}else He?(Ze&&t.texStorage2D(i.TEXTURE_2D,_e,me,ne.width,ne.height),F&&K(M,ne,xe,Ue)):t.texImage2D(i.TEXTURE_2D,0,me,ne.width,ne.height,0,xe,Ue,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,Pe[0].width,Pe[0].height,ne.depth);for(let ee=0,ve=Pe.length;ee<ve;ee++)if(pe=Pe[ee],M.format!==mn)if(xe!==null)if(He){if(F)if(M.layerUpdates.size>0){let Ee=Ih(pe.width,pe.height,M.format,M.type);for(let se of M.layerUpdates){let ke=pe.data.subarray(se*Ee/pe.data.BYTES_PER_ELEMENT,(se+1)*Ee/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,se,pe.width,pe.height,1,xe,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ne.depth,xe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,me,pe.width,pe.height,ne.depth,0,pe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ne.depth,xe,Ue,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,me,pe.width,pe.height,ne.depth,0,xe,Ue,pe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{He&&Ze&&t.texStorage2D(i.TEXTURE_2D,_e,me,Pe[0].width,Pe[0].height);for(let ee=0,ve=Pe.length;ee<ve;ee++)pe=Pe[ee],M.format!==mn?xe!==null?He?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,me,pe.width,pe.height,0,pe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,xe,Ue,pe.data):t.texImage2D(i.TEXTURE_2D,ee,me,pe.width,pe.height,0,xe,Ue,pe.data)}else if(M.isDataArrayTexture)if(He){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,ne.width,ne.height,ne.depth),F)if(M.layerUpdates.size>0){let ee=Ih(ne.width,ne.height,M.format,M.type);for(let ve of M.layerUpdates){let Ee=ne.data.subarray(ve*ee/ne.data.BYTES_PER_ELEMENT,(ve+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,ne.width,ne.height,1,xe,Ue,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,Ue,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,xe,Ue,ne.data);else if(M.isData3DTexture)He?(Ze&&t.texStorage3D(i.TEXTURE_3D,_e,me,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,Ue,ne.data)):t.texImage3D(i.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,xe,Ue,ne.data);else if(M.isFramebufferTexture){if(Ze)if(He)t.texStorage2D(i.TEXTURE_2D,_e,me,ne.width,ne.height);else{let ee=ne.width,ve=ne.height;for(let Ee=0;Ee<_e;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,me,ee,ve,0,xe,Ue,null),ee>>=1,ve>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),d.add(M),ee.onpaint=ve=>{let Ee=ve.changedElements;for(let se of d)Ee.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Ee=i.RGBA,se=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,se,ke,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(He&&Ze){let ee=tt(Pe[0]);t.texStorage2D(i.TEXTURE_2D,_e,me,ee.width,ee.height)}for(let ee=0,ve=Pe.length;ee<ve;ee++)pe=Pe[ee],He?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,xe,Ue,pe):t.texImage2D(i.TEXTURE_2D,ee,me,xe,Ue,pe);M.generateMipmaps=!1}else if(He){if(Ze){let ee=tt(ne);t.texStorage2D(i.TEXTURE_2D,_e,me,ee.width,ee.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ue,ne)}else t.texImage2D(i.TEXTURE_2D,0,me,xe,Ue,ne);m(M)&&_(H),fe.__version=he.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Be(C,M,z){if(M.image.length!==6)return;let H=rt(C,M),Z=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let he=n.get(Z);if(Z.version!==he.__version||H===!0){t.activeTexture(i.TEXTURE0+z);let fe=ot.getPrimaries(ot.workingColorSpace),J=M.colorSpace===Li?null:ot.getPrimaries(M.colorSpace),ne=M.colorSpace===Li||fe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let xe=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,me=[];for(let se=0;se<6;se++)!xe&&!Ue?me[se]=p(M.image[se],!0,s.maxCubemapSize):me[se]=Ue?M.image[se].image:M.image[se],me[se]=ut(M,me[se]);let pe=me[0],Pe=r.convert(M.format,M.colorSpace),He=r.convert(M.type),Ze=y(M.internalFormat,Pe,He,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,_e=he.__version===void 0||H===!0,ee=Z.dataReady,ve=b(M,pe);je(i.TEXTURE_CUBE_MAP,M);let Ee;if(xe){F&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ze,pe.width,pe.height);for(let se=0;se<6;se++){Ee=me[se].mipmaps;for(let ke=0;ke<Ee.length;ke++){let Ne=Ee[ke];M.format!==mn?Pe!==null?F?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ne.width,Ne.height,Pe,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Ze,Ne.width,Ne.height,0,Ne.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ne.width,Ne.height,Pe,He,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Ze,Ne.width,Ne.height,0,Pe,He,Ne.data)}}}else{if(Ee=M.mipmaps,F&&_e){Ee.length>0&&ve++;let se=tt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(Ue){F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,me[se].width,me[se].height,Pe,He,me[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,me[se].width,me[se].height,0,Pe,He,me[se].data);for(let ke=0;ke<Ee.length;ke++){let At=Ee[ke].image[se].image;F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,At.width,At.height,Pe,He,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Ze,At.width,At.height,0,Pe,He,At.data)}}else{F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,He,me[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Pe,He,me[se]);for(let ke=0;ke<Ee.length;ke++){let Ne=Ee[ke];F?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Pe,He,Ne.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Ze,Pe,He,Ne.image[se])}}}m(M)&&_(i.TEXTURE_CUBE_MAP),he.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function be(C,M,z,H,Z,he){let fe=r.convert(z.format,z.colorSpace),J=r.convert(z.type),ne=y(z.internalFormat,fe,J,z.normalized,z.colorSpace),xe=n.get(M),Ue=n.get(z);if(Ue.__renderTarget=M,!xe.__hasExternalTextures){let me=Math.max(1,M.width>>he),pe=Math.max(1,M.height>>he);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,he,ne,me,pe,M.depth,0,fe,J,null):t.texImage2D(Z,he,ne,me,pe,0,fe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Z,Ue.__webglTexture,0,We(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Z,Ue.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(C,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let H=M.depthTexture,Z=H&&H.isDepthTexture?H.type:null,he=E(M.stencilBuffer,Z),fe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(M),he,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(M),he,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,he,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,C)}else{let H=M.textures;for(let Z=0;Z<H.length;Z++){let he=H[Z],fe=r.convert(he.format,he.colorSpace),J=r.convert(he.type),ne=y(he.internalFormat,fe,J,he.normalized,he.colorSpace);Ye(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(M),ne,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(M),ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(C,M,z){let H=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),je(i.TEXTURE_CUBE_MAP,M.depthTexture);let xe=r.convert(M.depthTexture.format),Ue=r.convert(M.depthTexture.type),me;M.depthTexture.format===ui?me=i.DEPTH_COMPONENT24:M.depthTexture.format===xi&&(me=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,me,M.width,M.height,0,xe,Ue,null)}}else ie(M.depthTexture,0);let he=Z.__webglTexture,fe=We(M),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ne=M.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ui)Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,he,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,he,0);else if(M.depthTexture.format===xi)Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,he,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(C){let M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=H}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)dt(M.__webglFramebuffer[H],C,H);else{let H=C.texture.mipmaps;H&&H.length>0?dt(M.__webglFramebuffer[0],C,0):dt(M.__webglFramebuffer,C,0)}else if(z){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=i.createRenderbuffer(),Ge(M.__webglDepthbuffer[H],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,he)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ge(M.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(C,M,z){let H=n.get(C);M!==void 0&&be(H.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&te(C)}function le(C){let M=C.texture,z=n.get(C),H=n.get(M);C.addEventListener("dispose",v);let Z=C.textures,he=C.isWebGLCubeRenderTarget===!0,fe=Z.length>1;if(fe||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=M.version,o.memory.textures++),he){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let ne=0;ne<M.mipmaps.length;ne++)z.__webglFramebuffer[J][ne]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let J=0,ne=Z.length;J<ne;J++){let xe=n.get(Z[J]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ye(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let ne=Z[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let xe=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),me=y(ne.internalFormat,xe,Ue,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),pe=We(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),je(i.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)be(z.__webglFramebuffer[J][ne],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else be(z.__webglFramebuffer[J],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(M)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let J=0,ne=Z.length;J<ne;J++){let xe=Z[J],Ue=n.get(xe),me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Ue.__webglTexture),je(me,xe),be(z.__webglFramebuffer,C,xe,i.COLOR_ATTACHMENT0+J,me,0),m(xe)&&_(me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,H.__webglTexture),je(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)be(z.__webglFramebuffer[ne],C,M,i.COLOR_ATTACHMENT0,J,ne);else be(z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,J,0);m(M)&&_(J),t.unbindTexture()}C.depthBuffer&&te(C)}function ce(C){let M=C.textures;for(let z=0,H=M.length;z<H;z++){let Z=M[z];if(m(Z)){let he=S(C),fe=n.get(Z).__webglTexture;t.bindTexture(he,fe),_(he),t.unbindTexture()}}}let ue=[],Ve=[];function ze(C){if(C.samples>0){if(Ye(C)===!1){let M=C.textures,z=C.width,H=C.height,Z=i.COLOR_BUFFER_BIT,he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(C),J=M.length>1;if(J)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ne=C.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);let Ue=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,Z,i.NEAREST),l===!0&&(ue.length=0,Ve.length=0,ue.push(i.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ue.push(he),Ve.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);let Ue=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function We(C){return Math.min(s.maxSamples,C.samples)}function Ye(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function L(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ut(C,M){let z=C.colorSpace,H=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Fr&&z!==Li&&(ot.getTransfer(z)===gt?(H!==mn||Z!==pn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",z)),M}function tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=ie,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=Q,this.rebindTextures=oe,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mv(i,e){function t(n,s=Li){let r,o=ot.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_h)return i.BYTE;if(n===vh)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ht)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===bh)return i.RGB;if(n===mn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===ts)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===To||n===wo||n===Ao||n===Ro)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Tl||n===wl||n===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Co||n===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Il)return r.COMPRESSED_R11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Co)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===Hl||n===kl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zl||n===Jl||n===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zl)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===jl||n===Po||n===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:Sv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kh=class extends di{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new $h,m={},_=t.getContextAttributes(),S=null,y=null,E=[],b=[],R=new $,v=null,w=null,A=new an;A.viewport=new Ut;let I=new an;I.viewport=new Ut;let N=[A,I],O=new ul,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=E[Y];return K===void 0&&(K=new Ys,E[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=E[Y];return K===void 0&&(K=new Ys,E[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=E[Y];return K===void 0&&(K=new Ys,E[Y]=K),K.getHandSpace()};function W(Y){let K=b.indexOf(Y.inputSource);if(K===-1)return;let de=E[K];de!==void 0&&(de.update(Y.inputSource,Y.frame,c||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<E.length;Y++){let K=b[Y];K!==null&&(b[Y]=null,E[Y].disconnect(K))}D=null,B=null,p.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(S),f=null,u=null,d=null,s=null,y=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Be=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=_.stencil?xi:ui,Be=_.stencil?es:ni);let Ge={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Lt(u.textureWidth,u.textureHeight,{format:mn,type:pn,depthTexture:new pi(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let de={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Lt(f.framebufferWidth,f.framebufferHeight,{format:mn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(Y){for(let K=0;K<Y.removed.length;K++){let de=Y.removed[K],Be=b.indexOf(de);Be>=0&&(b[Be]=null,E[Be].disconnect(de))}for(let K=0;K<Y.added.length;K++){let de=Y.added[K],Be=b.indexOf(de);if(Be===-1){for(let Ge=0;Ge<E.length;Ge++)if(Ge>=b.length){b.push(de),Be=Ge;break}else if(b[Ge]===null){b[Ge]=de,Be=Ge;break}if(Be===-1)break}let be=E[Be];be&&be.connect(de)}}let G=new P,j=new P;function Q(Y,K,de){G.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);let Be=G.distanceTo(j),be=K.projectionMatrix.elements,Ge=de.projectionMatrix.elements,dt=be[14]/(be[10]-1),te=be[14]/(be[10]+1),oe=(be[9]+1)/be[5],le=(be[9]-1)/be[5],ce=(be[8]-1)/be[0],ue=(Ge[8]+1)/Ge[0],Ve=dt*ce,ze=dt*ue,We=Be/(-ce+ue),Ye=We*-ce;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ye),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let L=dt+We,ut=te+We,tt=Ve-Ye,C=ze+(Be-Ye),M=oe*te/ut*L,z=le*te/ut*L;Y.projectionMatrix.makePerspective(tt,C,M,z,L,ut),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Re(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let K=Y.near,de=Y.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(de=p.depthFar)),O.near=I.near=A.near=K,O.far=I.far=A.far=de,(D!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=Y.layers.mask|6,A.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Be=Y.parent,be=O.cameras;Re(O,Be);for(let Ge=0;Ge<be.length;Ge++)Re(be[Ge],Be);be.length===2?Q(O,A,I):O.projectionMatrix.copy(A.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),we(Y,O,Be)};function we(Y,K,de){de===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return m[Y]};let ct=null;function je(Y,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Be=!1;de.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let te=0;te<de.length;te++){let oe=de[te],le=null;if(f!==null)le=f.getViewport(oe);else{let ue=d.getViewSubImage(u,oe);le=ue.viewport,te===0&&(e.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(y))}let ce=N[te];ce===void 0&&(ce=new an,ce.layers.enable(te),ce.viewport=new Ut,N[te]=ce),ce.matrix.fromArray(oe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(oe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),te===0&&(O.matrix.copy(ce.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push(ce)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let te=d.getDepthInformation(de[0]);te&&te.isValid&&te.texture&&p.init(te,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let te=0;te<de.length;te++){let oe=de[te].camera;if(oe){let le=m[oe];le||(le=new Jr,m[oe]=le);let ce=d.getCameraImage(oe);le.sourceTexture=ce}}}}for(let de=0;de<E.length;de++){let Be=b[de],be=E[de];Be!==null&&be!==void 0&&be.update(Be,K,c||o)}ct&&ct(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let rt=new lf;rt.setAnimationLoop(je),this.setAnimationLoop=function(Y){ct=Y},this.dispose=function(){}}},Ev=new at,pf=new $e;pf.set(-1,0,0,0,1,0,0,0,1);function Tv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Rh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,S,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),S=_.envMap,y=_.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let b=E.program;n.uniformBlockBinding(y,b)}function c(y,E){let b=s[y.id];b===void 0&&(p(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",_));let R=E.program;n.updateUBOMapping(y,R);let v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let E=d();y.__bindingPointIndex=E;let b=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],b=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,w=b.length;v<w;v++){let A=b[v];if(Array.isArray(A))for(let I=0,N=A.length;I<N;I++)f(A[I],v,I,R);else f(A,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,b,R){if(x(y,E,b,R)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let A=0;for(let I=0;I<w.length;I++){let N=w[I],O=m(N);g(N,y.__data,A),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,E,b){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,b)}function x(y,E,b,R){let v=y.value,w=E+"_"+b;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{let A=R[w];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(y){let E=y.uniforms,b=0,R=16;for(let w=0,A=E.length;w<A;w++){let I=Array.isArray(E[w])?E[w]:[E[w]];for(let N=0,O=I.length;N<O;N++){let D=I[N],B=Array.isArray(D.value)?D.value:[D.value];for(let W=0,X=B.length;W<X;W++){let ie=B[W],G=m(ie),j=b%R,Q=j%G.boundary,Re=j+Q;b+=Q,Re!==0&&R-Re<G.storage&&(b+=R-Re),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=G.storage}}}let v=b%R;return v>0&&(b+=R-v),y.__size=b,y.__cache={},this}function m(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",y),E}function _(y){let E=y.target;E.removeEventListener("dispose",_);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function S(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var Av=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function Rv(){return _i===null&&(_i=new jn(Av,16,16,ts,Ht),_i.name="DFG_LUT",_i.minFilter=$t,_i.magFilter=$t,_i.wrapS=li,_i.wrapT=li,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var rc=class{constructor(e={}){let{canvas:t=Rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,p=new Set([bl,Sl,Ml]),m=new Set([pn,ni,sr,es,_l,vl]),_=new Uint32Array(4),S=new Int32Array(4),y=new P,E=null,b=null,R=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,N=null,O=null,D=null,B=null;this._outputColorSpace=zt;let W=0,X=0,ie=null,G=-1,j=null,Q=new Ut,Re=new Ut,we=null,ct=new re(0),je=0,rt=t.width,Y=t.height,K=1,de=null,Be=null,be=new Ut(0,0,rt,Y),Ge=new Ut(0,0,rt,Y),dt=!1,te=new Js,oe=!1,le=!1,ce=new at,ue=new P,Ve=new Ut,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ye(){return ie===null?K:1}let L=n;function ut(T,U){return t.getContext(T,U)}let tt,C,M,z,H,Z,he,fe,J,ne,xe,Ue,me,pe,Pe,He,Ze,F,_e,ee,ve,Ee,se;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),L===null){let U="webgl2";if(L=ut(U,T),L===null)throw ut(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(T){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),qe("WebGLRenderer: "+T.message),T}function ke(){tt=new Ux(L),tt.init(),ve=new Mv(L,tt),C=new Tx(L,tt,e,ve),M=new vv(L,tt),C.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),O=L.createFramebuffer(),D=L.createFramebuffer(),B=L.createFramebuffer(),z=new Bx(L),H=new rv,Z=new yv(L,tt,M,H,C,ve,z),he=new Nx(A),fe=new Hm(L),Ee=new bx(L,fe),J=new Fx(L,fe,z,Ee),ne=new Hx(L,J,fe,Ee,z),F=new zx(L,C,Z),Pe=new wx(H),xe=new sv(A,he,tt,C,Ee,Pe),Ue=new Tv(A,H),me=new av,pe=new fv(tt),Ze=new Sx(A,he,M,ne,g,l),He=new _v(A,ne,C),se=new wv(L,z,C,M),_e=new Ex(L,tt,z),ee=new Ox(L,tt,z),z.programs=xe.programs,A.capabilities=C,A.extensions=tt,A.properties=H,A.renderLists=me,A.shadowMap=He,A.state=M,A.info=z}x!==pn&&(w=new Vx(x,t.width,t.height,a,s,r));let Ne=new Kh(A,L);this.xr=Ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(rt,Y,!1))},this.getSize=function(T){return T.set(rt,Y)},this.setSize=function(T,U,q=!0){if(Ne.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=T,Y=U,t.width=Math.floor(T*K),t.height=Math.floor(U*K),q===!0&&(t.style.width=T+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(rt*K,Y*K).floor()},this.setDrawingBufferSize=function(T,U,q){rt=T,Y=U,K=q,t.width=Math.floor(T*q),t.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===pn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,U,q,k){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,U,q,k),M.viewport(Q.copy(be).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(Ge)},this.setScissor=function(T,U,q,k){T.isVector4?Ge.set(T.x,T.y,T.z,T.w):Ge.set(T,U,q,k),M.scissor(Re.copy(Ge).multiplyScalar(K).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(T){M.setScissorTest(dt=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){Be=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,q=!0){let k=0;if(T){let V=!1;if(ie!==null){let Se=ie.texture.format;V=p.has(Se)}if(V){let Se=ie.texture.type,Ce=m.has(Se),Me=Ze.getClearColor(),De=Ze.getClearAlpha(),Fe=Me.r,nt=Me.g,lt=Me.b;Ce?(_[0]=Fe,_[1]=nt,_[2]=lt,_[3]=De,L.clearBufferuiv(L.COLOR,0,_)):(S[0]=Fe,S[1]=nt,S[2]=lt,S[3]=De,L.clearBufferiv(L.COLOR,0,S))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),Ze.dispose(),me.dispose(),pe.dispose(),H.dispose(),he.dispose(),ne.dispose(),Ee.dispose(),se.dispose(),xe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",hu),Ne.removeEventListener("sessionend",uu),ss.stop()};function At(T){T.preventDefault(),zr("WebGLRenderer: Context Lost."),I=!0}function _t(){zr("WebGLRenderer: Context Restored."),I=!1;let T=z.autoReset,U=He.enabled,q=He.autoUpdate,k=He.needsUpdate,V=He.type;ke(),z.autoReset=T,He.enabled=U,He.autoUpdate=q,He.needsUpdate=k,He.type=V}function Vn(T){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ri(T){let U=T.target;U.removeEventListener("dispose",ri),ap(U)}function ap(T){lp(T),H.remove(T)}function lp(T){let U=H.get(T).programs;U!==void 0&&(U.forEach(function(q){xe.releaseProgram(q)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,k,V,Se){U===null&&(U=ze);let Ce=V.isMesh&&V.matrixWorld.determinantAffine()<0,Me=up(T,U,q,k,V);M.setMaterial(k,Ce);let De=q.index,Fe=1;if(k.wireframe===!0){if(De=J.getWireframeAttribute(q),De===void 0)return;Fe=2}let nt=q.drawRange,lt=q.attributes.position,Le=nt.start*Fe,vt=(nt.start+nt.count)*Fe;Se!==null&&(Le=Math.max(Le,Se.start*Fe),vt=Math.min(vt,(Se.start+Se.count)*Fe)),De!==null?(Le=Math.max(Le,0),vt=Math.min(vt,De.count)):lt!=null&&(Le=Math.max(Le,0),vt=Math.min(vt,lt.count));let Xt=vt-Le;if(Xt<0||Xt===1/0)return;Ee.setup(V,k,Me,q,De);let It,Et=_e;if(De!==null&&(It=fe.get(De),Et=ee,Et.setIndex(It)),V.isMesh)k.wireframe===!0?(M.setLineWidth(k.wireframeLinewidth*Ye()),Et.setMode(L.LINES)):Et.setMode(L.TRIANGLES);else if(V.isLine){let un=k.linewidth;un===void 0&&(un=1),M.setLineWidth(un*Ye()),V.isLineSegments?Et.setMode(L.LINES):V.isLineLoop?Et.setMode(L.LINE_LOOP):Et.setMode(L.LINE_STRIP)}else V.isPoints?Et.setMode(L.POINTS):V.isSprite&&Et.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let un=V._multiDrawStarts,Ae=V._multiDrawCounts,xn=V._multiDrawCount,ft=De?fe.get(De).bytesPerElement:1,Ln=H.get(k).currentProgram.getUniforms();for(let oi=0;oi<xn;oi++)Ln.setValue(L,"_gl_DrawID",oi),Et.render(un[oi]/ft,Ae[oi])}else if(V.isInstancedMesh)Et.renderInstances(Le,Xt,V.count);else if(q.isInstancedBufferGeometry){let un=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,un);Et.renderInstances(Le,Xt,Ae)}else Et.render(Le,Xt)};function cu(T,U,q,k){N!==null&&T.isNodeMaterial&&N.setObject(k,T),oe===!0&&Pe.setState(T,q,!1),T.transparent===!0&&T.side===sn&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,ta(T,U,k),T.side=Ki,T.needsUpdate=!0,ta(T,U,k),T.side=sn):ta(T,U,k)}this.compile=function(T,U,q=null){q===null&&(q=T),N!==null&&N.renderStart(T,U,q),b=pe.get(q),b.init(U),v.push(b),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),le=this.localClippingEnabled,oe=Pe.init(this.clippingPlanes,le),oe===!0&&Pe.setGlobalState(this.clippingPlanes,U),N!==null&&He.render(b.state.shadowsArray,q,U);let k=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Se=V.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){let Me=Se[Ce];cu(Me,q,U,V),k.add(Me)}else cu(Se,q,U,V),k.add(Se)}),b=v.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(T,U,q=null){let k=this.compile(T,U,q);return new Promise(V=>{function Se(){if(k.forEach(function(Ce){let De=H.get(Ce).currentProgram;(De===void 0||De.isReady())&&k.delete(Ce)}),k.size===0){V(T);return}setTimeout(Se,10)}tt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Tc=null;function cp(T){Tc&&Tc(T)}function hu(){ss.stop()}function uu(){ss.start()}let ss=new lf;ss.setAnimationLoop(cp),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(T){Tc=T,Ne.setAnimationLoop(T),T===null?ss.stop():ss.start()},Ne.addEventListener("sessionstart",hu),Ne.addEventListener("sessionend",uu),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(T,U);let q=Ne.enabled===!0&&Ne.isPresenting===!0,k=w!==null&&(ie===null||q)&&w.begin(A,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(U),U=Ne.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,U,ie),b=pe.get(T,v.length),b.init(U),b.state.textureUnits=Z.getTextureUnits(),v.push(b),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(ce,Jn,U.reversedDepth),le=this.localClippingEnabled,oe=Pe.init(this.clippingPlanes,le),E=me.get(T,R.length),E.init(),R.push(E),Ne.enabled===!0&&Ne.isPresenting===!0){let Ce=A.xr.getDepthSensingMesh();Ce!==null&&wc(Ce,U,-1/0,A.sortObjects)}wc(T,U,0,A.sortObjects),E.finish(),N!==null&&N.updateLights(b.state.lightsArray),A.sortObjects===!0&&E.sort(de,Be),We=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,We&&Ze.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Pe.beginShadows();let V=b.state.shadowsArray;if(He.render(V,T,U),oe===!0&&Pe.endShadows(),(k&&w.hasRenderPass())===!1){let Ce=E.opaque,Me=E.transmissive;if(b.setupLights(),U.isArrayCamera){let De=U.cameras;if(Me.length>0)for(let Fe=0,nt=De.length;Fe<nt;Fe++){let lt=De[Fe];fu(Ce,Me,T,lt)}We&&Ze.render(T);for(let Fe=0,nt=De.length;Fe<nt;Fe++){let lt=De[Fe];du(E,T,lt,lt.viewport)}}else Me.length>0&&fu(Ce,Me,T,U),We&&Ze.render(T),du(E,T,U)}ie!==null&&X===0&&(Z.updateMultisampleRenderTarget(ie),Z.updateRenderTargetMipmap(ie)),k&&w.end(A),T.isScene===!0&&T.onAfterRender(A,T,U),Ee.resetDefaultState(),G=-1,j=null,v.pop(),v.length>0?(b=v[v.length-1],Z.setTextureUnits(b.state.textureUnits),oe===!0&&Pe.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,N!==null&&N.renderEnd()};function wc(T,U,q,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(te)){k&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);let Ce=ne.update(T),Me=T.material;Me.visible&&E.push(T,Ce,Me,q,Ve.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(te))){let Ce=ne.update(T),Me=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ve.copy(Ce.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){let De=Ce.groups;for(let Fe=0,nt=De.length;Fe<nt;Fe++){let lt=De[Fe],Le=Me[lt.materialIndex];Le&&Le.visible&&E.push(T,Ce,Le,q,Ve.z,lt,U)}}else Me.visible&&E.push(T,Ce,Me,q,Ve.z,null,U)}}let Se=T.children;for(let Ce=0,Me=Se.length;Ce<Me;Ce++)wc(Se[Ce],U,q,k)}function du(T,U,q,k){let{opaque:V,transmissive:Se,transparent:Ce}=T;b.setupLightsView(q),oe===!0&&Pe.setGlobalState(A.clippingPlanes,q),k&&M.viewport(Q.copy(k)),V.length>0&&ea(V,U,q),Se.length>0&&ea(Se,U,q),Ce.length>0&&ea(Ce,U,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function fu(T,U,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let Le=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new Lt(1,1,{generateMipmaps:!0,type:Le?Ht:pn,minFilter:gi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Se=b.state.transmissionRenderTarget[k.id],Ce=k.viewport||Q;Se.setSize(Ce.z*A.transmissionResolutionScale,Ce.w*A.transmissionResolutionScale);let Me=A.getRenderTarget(),De=A.getActiveCubeFace(),Fe=A.getActiveMipmapLevel();A.setRenderTarget(Se),A.getClearColor(ct),je=A.getClearAlpha(),je<1&&A.setClearColor(16777215,.5),A.clear(),We&&Ze.render(q);let nt=A.toneMapping;A.toneMapping=ti;let lt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),oe===!0&&Pe.setGlobalState(A.clippingPlanes,k),ea(T,q,k),Z.updateMultisampleRenderTarget(Se),Z.updateRenderTargetMipmap(Se),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let vt=0,Xt=U.length;vt<Xt;vt++){let It=U[vt],{object:Et,geometry:un,material:Ae,group:xn}=It;if(Ae.side===sn&&Et.layers.test(k.layers)){let ft=Ae.side;Ae.side=ln,Ae.needsUpdate=!0,pu(Et,q,k,un,Ae,xn),Ae.side=ft,Ae.needsUpdate=!0,Le=!0}}Le===!0&&(Z.updateMultisampleRenderTarget(Se),Z.updateRenderTargetMipmap(Se))}A.setRenderTarget(Me,De,Fe),A.setClearColor(ct,je),lt!==void 0&&(k.viewport=lt),A.toneMapping=nt}function ea(T,U,q){let k=U.isScene===!0?U.overrideMaterial:null;for(let V=0,Se=T.length;V<Se;V++){let Ce=T[V],{object:Me,geometry:De,group:Fe}=Ce,nt=Ce.material;nt.allowOverride===!0&&k!==null&&(nt=k),Me.layers.test(q.layers)&&pu(Me,U,q,De,nt,Fe)}}function pu(T,U,q,k,V,Se){N!==null&&V.isNodeMaterial&&N.setObject(T,V),T.onBeforeRender(A,U,q,k,V,Se),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(A,U,q,k,T,Se),V.transparent===!0&&V.side===sn&&V.forceSinglePass===!1?(V.side=ln,V.needsUpdate=!0,A.renderBufferDirect(q,U,k,V,T,Se),V.side=Ki,V.needsUpdate=!0,A.renderBufferDirect(q,U,k,V,T,Se),V.side=sn):A.renderBufferDirect(q,U,k,V,T,Se),T.onAfterRender(A,U,q,k,V,Se)}function ta(T,U,q){U.isScene!==!0&&(U=ze);let k=H.get(T),V=b.state.lights,Se=b.state.shadowsArray,Ce=V.state.version,Me=xe.getParameters(T,V.state,Se,U,q,b.state.lightProbeGridArray),De=xe.getProgramCacheKey(Me),Fe=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let nt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=he.get(T.envMap||k.environment,nt),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",ri),Fe=new Map,k.programs=Fe);let lt=Fe.get(De);if(lt!==void 0){if(k.currentProgram===lt&&k.lightsStateVersion===Ce)return gu(T,Me),lt}else Me.uniforms=xe.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,q,Me),T.onBeforeCompile(Me,A),lt=xe.acquireProgram(Me,De),Fe.set(De,lt),k.uniforms=Me.uniforms;let Le=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=Pe.uniform),gu(T,Me),k.needsLights=fp(T),k.lightsStateVersion=Ce,k.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.sunLights.value=V.state.sun,Le.sunLightShadows.value=V.state.sunShadow,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.sunShadowMatrix.value=V.state.sunShadowMatrix,Le.sunShadowCascade.value=V.state.sunShadowCascade,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=lt,k.uniformsList=null,lt}function mu(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ar.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function gu(T,U){let q=H.get(T);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function hp(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,k=T.length;q<k;q++){let V=T[q];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function up(T,U,q,k,V){U.isScene!==!0&&(U=ze),Z.resetTextureUnits();let Se=U.fog,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,Me=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ot.workingColorSpace,De=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Fe=he.get(k.envMap||Ce,De),nt=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,lt=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!q.morphAttributes.position,vt=!!q.morphAttributes.normal,Xt=!!q.morphAttributes.color,It=ti;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(It=A.toneMapping);let Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,un=Et!==void 0?Et.length:0,Ae=H.get(k),xn=b.state.lights;if(oe===!0&&(le===!0||T!==j)){let Rt=T===j&&k.id===G;Pe.setState(k,T,Rt)}let ft=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==xn.state.version||Ae.outputColorSpace!==Me||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==Fe||k.fog===!0&&Ae.fog!==Se||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Pe.numPlanes||Ae.numIntersection!==Pe.numIntersection)||Ae.vertexAlphas!==nt||Ae.vertexTangents!==lt||Ae.morphTargets!==Le||Ae.morphNormals!==vt||Ae.morphColors!==Xt||Ae.toneMapping!==It||Ae.morphTargetsCount!==un||!!Ae.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ae.__version=k.version);let Ln=Ae.currentProgram;ft===!0&&(Ln=ta(k,U,V),N&&k.isNodeMaterial&&N.onUpdateProgram(k,Ln,Ae));let oi=!1,Fi=!1,ys=!1,bt=Ln.getUniforms(),Vt=Ae.uniforms;if(M.useProgram(Ln.program)&&(oi=!0,Fi=!0,ys=!0),k.id!==G&&(G=k.id,Fi=!0),Ae.needsLights){let Rt=hp(b.state.lightProbeGridArray,V);Ae.lightProbeGrid!==Rt&&(Ae.lightProbeGrid=Rt,Fi=!0)}if(oi||j!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),bt.setValue(L,"projectionMatrix",T.projectionMatrix),bt.setValue(L,"viewMatrix",T.matrixWorldInverse);let Bi=bt.map.cameraPosition;Bi!==void 0&&Bi.setValue(L,ue.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&bt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&bt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,Fi=!0,ys=!0)}if(Ae.needsLights&&(xn.state.sunShadowMap.length>0&&bt.setValue(L,"sunShadowMap",xn.state.sunShadowMap,Z),xn.state.directionalShadowMap.length>0&&bt.setValue(L,"directionalShadowMap",xn.state.directionalShadowMap,Z),xn.state.spotShadowMap.length>0&&bt.setValue(L,"spotShadowMap",xn.state.spotShadowMap,Z),xn.state.pointShadowMap.length>0&&bt.setValue(L,"pointShadowMap",xn.state.pointShadowMap,Z)),V.isSkinnedMesh){bt.setOptional(L,V,"bindMatrix"),bt.setOptional(L,V,"bindMatrixInverse");let Rt=V.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),bt.setValue(L,"boneTexture",Rt.boneTexture,Z))}V.isBatchedMesh&&(bt.setOptional(L,V,"batchingTexture"),bt.setValue(L,"batchingTexture",V._matricesTexture,Z),bt.setOptional(L,V,"batchingIdTexture"),bt.setValue(L,"batchingIdTexture",V._indirectTexture,Z),bt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&bt.setValue(L,"batchingColorTexture",V._colorsTexture,Z));let Oi=q.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&F.update(V,q,Ln),(Fi||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,bt.setValue(L,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Vt.envMapIntensity.value=U.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Rv()),Fi){if(bt.setValue(L,"toneMappingExposure",A.toneMappingExposure),Ae.needsLights&&dp(Vt,ys),Se&&k.fog===!0&&Ue.refreshFogUniforms(Vt,Se),Ue.refreshMaterialUniforms(Vt,k,K,Y,b.state.transmissionRenderTarget[T.id]),Ae.needsLights&&Ae.lightProbeGrid){let Rt=Ae.lightProbeGrid;Vt.probesSH.value=Rt.texture,Vt.probesMin.value.copy(Rt.boundingBox.min),Vt.probesMax.value.copy(Rt.boundingBox.max),Vt.probesResolution.value.copy(Rt.resolution)}ar.upload(L,mu(Ae),Vt,Z)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ar.upload(L,mu(Ae),Vt,Z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&bt.setValue(L,"center",V.center),bt.setValue(L,"modelViewMatrix",V.modelViewMatrix),bt.setValue(L,"normalMatrix",V.normalMatrix),bt.setValue(L,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let Rt=k.uniformsGroups;for(let Bi=0,Ms=Rt.length;Bi<Ms;Bi++){let _u=Rt[Bi];se.update(_u,Ln),se.bind(_u,Ln)}}return Ln}function dp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function fp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,U,q){let k=H.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(T.texture).__webglTexture=U,H.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let q=H.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){ie=T,W=U,X=q;let k=null,V=!1,Se=!1;if(T){let Me=H.get(T);if(Me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(L.FRAMEBUFFER,Me.__webglFramebuffer),Q.copy(T.viewport),Re.copy(T.scissor),we=T.scissorTest,M.viewport(Q),M.scissor(Re),M.setScissorTest(we),G=-1;return}else if(Me.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(Me.__hasExternalTextures)Z.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let nt=T.depthTexture;if(Me.__boundDepthTexture!==nt){if(nt!==null&&H.has(nt)&&(T.width!==nt.image.width||T.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}let De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Se=!0);let Fe=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?k=Fe[U][q]:k=Fe[U],V=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?k=H.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[q]:k=Fe,Q.copy(T.viewport),Re.copy(T.scissor),we=T.scissorTest}else Q.copy(be).multiplyScalar(K).floor(),Re.copy(Ge).multiplyScalar(K).floor(),we=dt;if(q!==0&&(k=O),M.bindFramebuffer(L.FRAMEBUFFER,k)&&M.drawBuffers(T,k),M.viewport(Q),M.scissor(Re),M.setScissorTest(we),V){let Me=H.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,q)}else if(Se){let Me=U;for(let De=0;De<T.textures.length;De++){let Fe=H.get(T.textures[De]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+De,Fe.__webglTexture,q,Me)}}else if(T!==null&&q!==0){let Me=H.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Me.__webglTexture,q)}G=-1};function xu(T){let U=H.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=C.textureFormatReadable(T.format),U.__typeReadable=C.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,q,k,V,Se,Ce,Me=0){if(!(T&&T.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){M.bindFramebuffer(L.FRAMEBUFFER,De);try{let Fe=T.textures[Me],nt=Fe.format,lt=Fe.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me);let Le=xu(Fe);if(Le.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&q>=0&&q<=T.height-V&&L.readPixels(U,q,k,V,ve.convert(nt),ve.convert(lt),Se)}finally{let Fe=ie!==null?H.get(ie).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,U,q,k,V,Se,Ce,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(U>=0&&U<=T.width-k&&q>=0&&q<=T.height-V){M.bindFramebuffer(L.FRAMEBUFFER,De);let Fe=T.textures[Me],nt=Fe.format,lt=Fe.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me);let Le=xu(Fe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,vt),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),L.readPixels(U,q,k,V,ve.convert(nt),ve.convert(lt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Xt=ie!==null?H.get(ie).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Xt);let It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Pd(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(vt),L.deleteSync(It),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,q=0){let k=Math.pow(2,-q),V=Math.floor(T.image.width*k),Se=Math.floor(T.image.height*k),Ce=U!==null?U.x:0,Me=U!==null?U.y:0;Z.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Ce,Me,V,Se),M.unbindTexture()},this.copyTextureToTexture=function(T,U,q=null,k=null,V=0,Se=0){let Ce,Me,De,Fe,nt,lt,Le,vt,Xt,It=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(q!==null)Ce=q.max.x-q.min.x,Me=q.max.y-q.min.y,De=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,nt=q.min.y,lt=q.isBox3?q.min.z:0;else{let Vt=Math.pow(2,-V);Ce=Math.floor(It.width*Vt),Me=Math.floor(It.height*Vt),T.isDataArrayTexture?De=It.depth:T.isData3DTexture?De=Math.floor(It.depth*Vt):De=1,Fe=0,nt=0,lt=0}k!==null?(Le=k.x,vt=k.y,Xt=k.z):(Le=0,vt=0,Xt=0);let Et=ve.convert(U.format),un=ve.convert(U.type),Ae;U.isData3DTexture?(Z.setTexture3D(U,0),Ae=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),Ae=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),Ae=L.TEXTURE_2D),M.activeTexture(L.TEXTURE0),M.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let xn=M.getParameter(L.UNPACK_ROW_LENGTH),ft=M.getParameter(L.UNPACK_IMAGE_HEIGHT),Ln=M.getParameter(L.UNPACK_SKIP_PIXELS),oi=M.getParameter(L.UNPACK_SKIP_ROWS),Fi=M.getParameter(L.UNPACK_SKIP_IMAGES);M.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(L.UNPACK_SKIP_ROWS,nt),M.pixelStorei(L.UNPACK_SKIP_IMAGES,lt);let ys=T.isDataArrayTexture||T.isData3DTexture,bt=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Vt=H.get(T),Oi=H.get(U),Rt=H.get(Vt.__renderTarget),Bi=H.get(Oi.__renderTarget);M.bindFramebuffer(L.READ_FRAMEBUFFER,Rt.__webglFramebuffer),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Ms=0;Ms<De;Ms++)ys&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(T).__webglTexture,V,lt+Ms),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(U).__webglTexture,Se,Xt+Ms)),L.blitFramebuffer(Fe,nt,Ce,Me,Le,vt,Ce,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||H.has(T)){let Vt=H.get(T),Oi=H.get(U);M.bindFramebuffer(L.READ_FRAMEBUFFER,D),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let Rt=0;Rt<De;Rt++)ys?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,V,lt+Rt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vt.__webglTexture,V),bt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oi.__webglTexture,Se,Xt+Rt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Oi.__webglTexture,Se),V!==0?L.blitFramebuffer(Fe,nt,Ce,Me,Le,vt,Ce,Me,L.COLOR_BUFFER_BIT,L.NEAREST):bt?L.copyTexSubImage3D(Ae,Se,Le,vt,Xt+Rt,Fe,nt,Ce,Me):L.copyTexSubImage2D(Ae,Se,Le,vt,Fe,nt,Ce,Me);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else bt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ae,Se,Le,vt,Xt,Ce,Me,De,Et,un,It.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,Se,Le,vt,Xt,Ce,Me,De,Et,It.data):L.texSubImage3D(Ae,Se,Le,vt,Xt,Ce,Me,De,Et,un,It):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Se,Le,vt,Ce,Me,Et,un,It.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Se,Le,vt,It.width,It.height,Et,It.data):L.texSubImage2D(L.TEXTURE_2D,Se,Le,vt,Ce,Me,Et,un,It);M.pixelStorei(L.UNPACK_ROW_LENGTH,xn),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Ln),M.pixelStorei(L.UNPACK_SKIP_ROWS,oi),M.pixelStorei(L.UNPACK_SKIP_IMAGES,Fi),Se===0&&U.generateMipmaps&&L.generateMipmap(Ae),M.unbindTexture()},this.initRenderTarget=function(T){H.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){W=0,X=0,ie=null,M.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var yi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cv=new $i(-1,1,1,-1,0,1),jh=class extends Tt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},Pv=new jh,Mi=class{constructor(e){this._mesh=new ae(Pv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ur=class extends Sn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cn.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Mi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fo=class extends Sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},lc=class extends Sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var cc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new $);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ur(yi),this.copyPass.material.blending=Wt,this.timer=new po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fo!==void 0&&(o instanceof Fo?n=!0:o instanceof lc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hc=class extends Sn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var mf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var dr=class i extends Sn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(r,o,{type:Ht,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Lt(r,o,{type:Ht,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Lt(r,o,{type:Ht,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=mf;this.highPassUniforms=cn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cn.clone(yi.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:yi.vertexShader,fragmentShader:yi.fragmentShader,premultipliedAlpha:!0,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new re,this._oldClearAlpha=1,this._basic=new En,this._fsQuad=new Mi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};dr.BlurDirectionX=new $(1,0);dr.BlurDirectionY=new $(0,1);var Oo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new at},cameraProjectionMatrixInverse:{value:new at},cameraWorldMatrix:{value:new at},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Bo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},uc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function gf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Iv(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new jn(s,e,e);return r.wrapS=bn,r.wrapT=bn,r.needsUpdate=!0,r}function Iv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var zo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Qh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraProjectionMatrixInverse:{value:new at},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Qh(i,e,t){let n=Dv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Dv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new P(Math.cos(r),Math.sin(r),o))}return n}var dc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,x=t-f,p,m;g>x?(p=1,m=0):(p=0,m=1);let _=g-p+h,S=x-m+h,y=g-1+2*h,E=x-1+2*h,b=l&255,R=c&255,v=this.perm[b+this.perm[R]]%12,w=this.perm[b+p+this.perm[R+m]]%12,A=this.perm[b+1+this.perm[R+1]]%12,I=.5-g*g-x*x;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[v],g,x));let N=.5-_*_-S*S;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[w],_,S));let O=.5-y*y-E*E;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[A],y,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,x=h-g,p=d-g,m=u-g,_=e-x,S=t-p,y=n-m,E,b,R,v,w,A;_>=S?S>=y?(E=1,b=0,R=0,v=1,w=1,A=0):_>=y?(E=1,b=0,R=0,v=1,w=0,A=1):(E=0,b=0,R=1,v=1,w=0,A=1):S<y?(E=0,b=0,R=1,v=0,w=1,A=1):_<y?(E=0,b=1,R=0,v=0,w=1,A=1):(E=0,b=1,R=0,v=1,w=1,A=0);let I=_-E+f,N=S-b+f,O=y-R+f,D=_-v+2*f,B=S-w+2*f,W=y-A+2*f,X=_-1+3*f,ie=S-1+3*f,G=y-1+3*f,j=h&255,Q=d&255,Re=u&255,we=this.perm[j+this.perm[Q+this.perm[Re]]]%12,ct=this.perm[j+E+this.perm[Q+b+this.perm[Re+R]]]%12,je=this.perm[j+v+this.perm[Q+w+this.perm[Re+A]]]%12,rt=this.perm[j+1+this.perm[Q+1+this.perm[Re+1]]]%12,Y=.6-_*_-S*S-y*y;Y<0?s=0:(Y*=Y,s=Y*Y*this._dot3(this.grad3[we],_,S,y));let K=.6-I*I-N*N-O*O;K<0?r=0:(K*=K,r=K*K*this._dot3(this.grad3[ct],I,N,O));let de=.6-D*D-B*B-W*W;de<0?o=0:(de*=de,o=de*de*this._dot3(this.grad3[je],D,B,W));let Be=.6-X*X-ie*ie-G*G;return Be<0?a=0:(Be*=Be,a=Be*Be*this._dot3(this.grad3[rt],X,ie,G)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,x=(e+t+n+s)*l,p=Math.floor(e+x),m=Math.floor(t+x),_=Math.floor(n+x),S=Math.floor(s+x),y=(p+m+_+S)*c,E=p-y,b=m-y,R=_-y,v=S-y,w=e-E,A=t-b,I=n-R,N=s-v,O=w>A?32:0,D=w>I?16:0,B=A>I?8:0,W=w>N?4:0,X=A>N?2:0,ie=I>N?1:0,G=O+D+B+W+X+ie,j=o[G][0]>=3?1:0,Q=o[G][1]>=3?1:0,Re=o[G][2]>=3?1:0,we=o[G][3]>=3?1:0,ct=o[G][0]>=2?1:0,je=o[G][1]>=2?1:0,rt=o[G][2]>=2?1:0,Y=o[G][3]>=2?1:0,K=o[G][0]>=1?1:0,de=o[G][1]>=1?1:0,Be=o[G][2]>=1?1:0,be=o[G][3]>=1?1:0,Ge=w-j+c,dt=A-Q+c,te=I-Re+c,oe=N-we+c,le=w-ct+2*c,ce=A-je+2*c,ue=I-rt+2*c,Ve=N-Y+2*c,ze=w-K+3*c,We=A-de+3*c,Ye=I-Be+3*c,L=N-be+3*c,ut=w-1+4*c,tt=A-1+4*c,C=I-1+4*c,M=N-1+4*c,z=p&255,H=m&255,Z=_&255,he=S&255,fe=a[z+a[H+a[Z+a[he]]]]%32,J=a[z+j+a[H+Q+a[Z+Re+a[he+we]]]]%32,ne=a[z+ct+a[H+je+a[Z+rt+a[he+Y]]]]%32,xe=a[z+K+a[H+de+a[Z+Be+a[he+be]]]]%32,Ue=a[z+1+a[H+1+a[Z+1+a[he+1]]]]%32,me=.6-w*w-A*A-I*I-N*N;me<0?h=0:(me*=me,h=me*me*this._dot4(r[fe],w,A,I,N));let pe=.6-Ge*Ge-dt*dt-te*te-oe*oe;pe<0?d=0:(pe*=pe,d=pe*pe*this._dot4(r[J],Ge,dt,te,oe));let Pe=.6-le*le-ce*ce-ue*ue-Ve*Ve;Pe<0?u=0:(Pe*=Pe,u=Pe*Pe*this._dot4(r[ne],le,ce,ue,Ve));let He=.6-ze*ze-We*We-Ye*Ye-L*L;He<0?f=0:(He*=He,f=He*He*this._dot4(r[xe],ze,We,Ye,L));let Ze=.6-ut*ut-tt*tt-C*C-M*M;return Ze<0?g=0:(Ze*=Ze,g=Ze*Ze*this._dot4(r[Ue],ut,tt,C,M)),27*(h+d+u+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Ho=class i extends Sn{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=gf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Lt(this.width,this.height,{type:Ht,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xt({defines:Object.assign({},Oo.defines),uniforms:cn.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,blending:Wt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new lo,this.normalMaterial.blending=Wt,this.pdMaterial=new xt({defines:Object.assign({},zo.defines),uniforms:cn.clone(zo.uniforms),vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xt({defines:Object.assign({},Bo.defines),uniforms:cn.clone(Bo.uniforms),vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,blending:Wt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xt({uniforms:cn.clone(yi.uniforms),vertexShader:yi.vertexShader,fragmentShader:yi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:go,blendDst:fs,blendEquation:Un,blendSrcAlpha:mo,blendDstAlpha:fs,blendEquationAlpha:Un}),this.blendMaterial=new xt({uniforms:cn.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:fl,blendSrc:go,blendDst:fs,blendEquation:Un,blendSrcAlpha:mo,blendDstAlpha:fs,blendEquationAlpha:Un}),this._fsQuad=new Mi(null),this._originalClearColor=new re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new pi,this.depthTexture.format=xi,this.depthTexture.type=es,this.normalRenderTarget=new Lt(this.width,this.height,{minFilter:Gt,magFilter:Gt,type:Ht,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Qh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new dc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new jn(s,e,e,mn,pn);return r.wrapS=bn,r.wrapT=bn,r.needsUpdate=!0,r}};Ho.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ko={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fc=class extends Sn{constructor(){super(),this.isOutputPass=!0,this.uniforms=cn.clone(ko.uniforms),this.material=new Qs({name:ko.name,uniforms:this.uniforms,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader}),this._fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===So?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function zn(i,e,t){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}var Si=(i,e)=>(i%e+e)%e,xf=i=>i*i*(3-2*i),fr=(i,e,t)=>i+(e-i)*t,Bn=i=>i<0?0:i>1?1:i;function wn(i,e,t,n=0){let s=Math.floor(i),r=Math.floor(e),o=xf(i-s),a=xf(e-r),l=Si(s,t),c=Si(s+1,t),h=Si(r,t),d=Si(r+1,t);return fr(fr(zn(l,h,n),zn(c,h,n),o),fr(zn(l,d,n),zn(c,d,n),o),a)}function hn(i,e,t,n=4,s=0){let r=.5,o=1,a=0,l=0;for(let c=0;c<n;c++)a+=r*wn(i*o,e*o,t*o,s+c*17),l+=r,r*=.5,o*=2;return a/l}function pc(i,e,t,n=0){let s=Math.floor(i),r=Math.floor(e),o=9,a=9,l=0;for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){let d=s+h,u=r+c,f=Si(d,t),g=Si(u,t),x=d+zn(f,g,n),p=u+zn(f,g,n+99),m=Math.hypot(x-i,p-e);m<o?(a=o,o=m,l=zn(f,g,n+7)):m<a&&(a=m)}return[o,a,l]}var eu=new Map,nu=8;function vf(i){nu=Math.min(16,i)}function tu(i,e,t){let n=new jn(i,e,e,mn);return n.wrapS=n.wrapT=bn,n.generateMipmaps=!0,n.minFilter=gi,n.magFilter=$t,n.anisotropy=nu,t&&(n.colorSpace=zt),n.needsUpdate=!0,n}function Qt(i,e,t,n){if(eu.has(i))return eu.get(i);let s=e*e,r=new Uint8Array(s*4),o=new Uint8Array(s*4),a=new Uint8Array(s*4),l=new Float32Array(s);for(let h=0;h<e;h++)for(let d=0;d<e;d++){let u=h*e+d,f=n(d/e,h/e);r[u*4]=Bn(f[0])*255,r[u*4+1]=Bn(f[1])*255,r[u*4+2]=Bn(f[2])*255,r[u*4+3]=255,l[u]=f[3];let g=Bn(f[4])*255;a[u*4]=255,a[u*4+1]=g,a[u*4+2]=0,a[u*4+3]=255}for(let h=0;h<e;h++)for(let d=0;d<e;d++){let u=h*e+d,f=l[h*e+Si(d-1,e)],g=l[h*e+Si(d+1,e)],x=l[Si(h-1,e)*e+d],p=l[Si(h+1,e)*e+d],m=(f-g)*t,_=(x-p)*t,S=1,y=Math.hypot(m,_,S);m/=y,_/=y,S/=y,o[u*4]=(m*.5+.5)*255,o[u*4+1]=(_*.5+.5)*255,o[u*4+2]=(S*.5+.5)*255,o[u*4+3]=255}let c={map:tu(r,e,!0),normalMap:tu(o,e,!1),roughnessMap:tu(a,e,!1)};return eu.set(i,c),c}var _f=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255],On=(i,e,t)=>[fr(i[0],e[0],t),fr(i[1],e[1],t),fr(i[2],e[2],t)],mc=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],wt={plush(){return Qt("plush",512,5,(i,e)=>{let t=hn(i*64,e*64,64,3,1),n=wn(i*256,e*24,256,5)*.5+wn(i*24,e*256,24,6)*.5,s=hn(i*12,e*12,12,3,9),r=t*.5+n*.3+s*.2,o=.88+t*.1+s*.04;return[o,o,o,r,.85+t*.15]})},knit(){return Qt("knit",512,9,(i,e)=>{let t=i*16,n=e*22,s=t-Math.floor(t)-.5,r=n-Math.floor(n),o=Math.abs(Math.abs(s)-.25-(r-.5)*.25),a=Bn(1-o*4.2)*Math.sin(r*Math.PI),l=wn(i*300,e*300,300,3)*.15,c=a*.85+l,h=.62+a*.38+l*.4;return[h,h,h,c,.95]})},linen(){return Qt("linen",256,3,(i,e)=>{let t=Math.sin(i*Math.PI*2*64)*.5+.5,n=Math.sin(e*Math.PI*2*64)*.5+.5,s=hn(i*16,e*16,16,3,3),r=(Math.floor(i*64)+Math.floor(e*64)&1?t:n)*.6+s*.4,o=.82+r*.18;return[o,o,o,r,.8+s*.15]})},wood(i,e,t,n=!1,s=1){let r=_f(e),o=_f(t);return Qt("wood"+i,512,4,(a,l)=>{let c=hn(a*4,l*1,4,4,11)*6*s,h=Math.sin((a*10*s+c)*Math.PI*2)*.5+.5,d=wn(a*180,l*6,180,4),u=Math.pow(h,3)*.6+d*.3,f=1;if(n){let x=l*4,p=Math.abs(x-Math.round(x));f=Bn(p*60);let m=zn(Math.floor(x),0,3)*.2;u=u*.8+m}let g=mc(On(r,o,Bn(u)),.75+.25*f);return[g[0],g[1],g[2],u*.4+f*.6,.55+d*.2+(1-f)*.3]})},painted(){return Qt("painted",256,1.5,(i,e)=>{let t=hn(i*8,e*2,8,4,21),n=wn(i*120,e*4,120,2),s=.93+t*.05+n*.02;return[s,s,s,t*.6+n*.4,.32+n*.12]})},marble(){return Qt("marble",512,1.5,(i,e)=>{let t=hn(i*4,e*4,4,5,31),n=Math.pow(1-Math.abs(Math.sin((i*3+e*2+t*3)*Math.PI)),12),s=zn(Math.floor(i*512),Math.floor(e*512),8)>.985?.25:0,r=On([.96,.95,.93],[.62,.64,.7],n*.7+s);return[r[0],r[1],r[2],t*.2,.12+n*.1]})},sponge(){return Qt("sponge",512,10,(i,e)=>{let[t]=pc(i*28,e*28,28,41),[n]=pc(i*70,e*70,70,42),s=Bn(t*1.6)*.7+Bn(n*1.6)*.3,r=On([.78,.56,.08],[1,.86,.3],s);return[r[0],r[1],r[2],s,.95]})},scrubber(){return Qt("scrubber",256,8,(i,e)=>{let t=wn(i*90,e*30,90,51),n=wn(i*30,e*90,30,52),s=Math.max(t,n),r=On([.08,.38,.18],[.3,.75,.4],s);return[r[0],r[1],r[2],s,.9]})},cookie(){return Qt("cookie",512,7,(i,e)=>{let t=hn(i*10,e*10,10,5,61),[n,,s]=pc(i*7,e*7,7,62),r=s>.55&&n<.22?1:0,o=wn(i*160,e*160,160,63),a=On([.7,.45,.2],[.93,.72,.42],t*.8+o*.2);return r&&(a=[.25,.13,.07]),[a[0],a[1],a[2],t*.7+o*.2+r*.4,r?.35:.85]})},roof(){return Qt("roof",512,6,(i,e)=>{let s=e*6,r=Math.floor(s),o=i*6+(r&1)*.5,a=o-Math.floor(o)-.5,l=s-r,c=l-(1-Math.sqrt(Math.max(0,.25-a*a))*.9),h=Bn(c*12),d=zn(Math.floor(o),r,71),u=hn(i*24,e*24,24,3,72),f=mc(On([.78,.33,.24],[.93,.5,.35],d*.7+u*.3),.55+.45*h);return[f[0],f[1],f[2],h*.7+l*.3+u*.1,.6+u*.2]})},brick(){return Qt("brick",512,6,(i,e)=>{let t=e*8,n=Math.floor(t),s=i*4+(n&1)*.5,r=s-Math.floor(s),o=t-n,a=Math.min(r,1-r)*4<.12||Math.min(o,1-o)<.08,l=hn(i*32,e*32,32,4,81),c=zn(Math.floor(s),n,82),h=a?[.85,.82,.76]:On([.62,.25,.2],[.85,.42,.3],c*.6+l*.4);return[h[0],h[1],h[2],a?.1:.7+l*.3,.85]})},cardboard(){return Qt("cardboard",512,3,(i,e)=>{let t=hn(i*20,e*20,20,4,91),n=Math.sin(i*Math.PI*2*40)*.5+.5,s=Math.abs(e-.5)<.09,r=On([.66,.48,.3],[.8,.63,.42],t);return s&&(r=On([.85,.72,.52],[.95,.85,.65],t)),!s&&i>.08&&i<.32&&e>.12&&e<.2&&(r=mc(r,.55)),[r[0],r[1],r[2],s?.6:n*.3+t*.4,s?.3:.9]})},quilt(){return Qt("quilt",512,9,(i,e)=>{let t=(i+e)*6,n=(i-e)*6,s=Math.abs(t-Math.round(t)),r=Math.abs(n-Math.round(n)),o=Math.sin(Bn(Math.min(s,r)*2)*Math.PI/2),a=hn(i*64,e*64,64,2,101),l=.75+o*.22+a*.03;return[l,l,l,o*.9+a*.1,.92]})},grass(){return Qt("grass",512,4,(i,e)=>{let t=hn(i*16,e*16,16,5,111),n=wn(i*200,e*200,200,112),s=On([.16,.42,.2],[.45,.78,.36],t*.7+n*.3);return[s[0],s[1],s[2],t*.5+n*.5,.85]})},rock(){return Qt("rock",512,8,(i,e)=>{let t=hn(i*8,e*8,8,6,121),[n,s]=pc(i*6,e*6,6,122),r=Bn((s-n)*6),o=mc(On([.42,.38,.5],[.72,.68,.78],t),.6+.4*r);return[o[0],o[1],o[2],t*.6+r*.4,.8]})},ceramic(){return Qt("ceramic",256,1,(i,e)=>{let t=hn(i*6,e*6,6,3,131),n=zn(Math.floor(i*256),Math.floor(e*256),132)>.992?.6:1,s=(.95+t*.05)*n;return[s,s,s,t*.3,.12]})},water(){return Qt("water",512,6,(i,e)=>{let t=hn(i*8,e*8,8,5,141),n=hn(i*3+t,e*3,3,3,142);return[1,1,1,t*.6+n*.4,.05]})},cloud(){return Qt("cloud",256,2,(i,e)=>{let t=hn(i*6,e*6,6,4,151),n=.92+t*.08;return[n,n,n,t,1]})},wicker(){return Qt("wicker",256,8,(i,e)=>{let t=Math.sin(i*Math.PI*2*16)*.5+.5,n=Math.sin(e*Math.PI*2*16)*.5+.5,s=Math.floor(i*16)+Math.floor(e*16)&1?t:n,r=wn(i*128,e*128,128,161),o=On([.55,.36,.18],[.86,.66,.4],s*.7+r*.3);return[o[0],o[1],o[2],s,.8]})}},Vo=null;function _s(){if(Vo)return Vo;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.65)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Vo=new Di(i),Vo.colorSpace=zt,Vo}var Go=null;function yf(){if(Go)return Go;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,62);return t.addColorStop(0,"rgba(255,255,255,0.55)"),t.addColorStop(.8,"rgba(255,255,255,0.7)"),t.addColorStop(.92,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(64,64,62,0,Math.PI*2),e.fill(),Go=new Di(i),Go.colorSpace=zt,Go}function Wo(i,{w:e=512,h:t=256,font:n='700 54px Nunito, "Segoe UI", sans-serif',color:s="#4a3424",bg:r=null}={}){let o=document.createElement("canvas");o.width=e,o.height=t;let a=o.getContext("2d");r&&(a.fillStyle=r,a.fillRect(0,0,e,t)),a.fillStyle=s,a.font=n,a.textAlign="center",a.textBaseline="middle";let l=parseInt(n.match(/(\d+)px/)[1],10)*1.25;i.forEach((h,d)=>a.fillText(h,e/2,t/2+(d-(i.length-1)/2)*l));let c=new Di(o);return c.colorSpace=zt,c.anisotropy=nu,c}var pr={ultra:{label:"Ultra",pr:2,shadow:4096,ao:!0,bloom:!0,msaa:4},high:{label:"High",pr:1.5,shadow:4096,ao:!0,bloom:!0,msaa:4},medium:{label:"Medium",pr:1,shadow:2048,ao:!1,bloom:!0,msaa:2},low:{label:"Low",pr:.8,shadow:1024,ao:!1,bloom:!1,msaa:0}},mr=["low","medium","high","ultra"],Lv={uniforms:{tDiffuse:{value:null},time:{value:0},vignette:{value:.32},warmth:{value:.03},saturation:{value:1.08}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float time; uniform float vignette; uniform float warmth; uniform float saturation; varying vec2 vUv;
  float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + time) * 43758.5453); }
  void main(){
    vec4 c = texture2D(tDiffuse, vUv);
    float l = dot(c.rgb, vec3(0.299,0.587,0.114));
    c.rgb = mix(vec3(l), c.rgb, saturation);
    c.rgb += vec3(warmth, warmth*0.4, -warmth*0.6) * (1.0 - l);
    vec2 d = vUv - 0.5;
    c.rgb *= 1.0 - vignette * smoothstep(0.25, 0.85, dot(d,d) * 2.2);
    c.rgb += (rnd(vUv * 731.0) - 0.5) * 0.018;
    gl_FragColor = c;
  }`},gc=class{constructor(e){this.r=new rc({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.r.outputColorSpace=zt,this.r.toneMapping=ps,this.r.toneMappingExposure=1,this.r.shadowMap.enabled=!0,this.r.shadowMap.type=ds,vf(this.r.capabilities.getMaxAnisotropy()),this.quality="high",this.composer=null,this.scene=null,this.camera=null}setQuality(e){this.quality=pr[e]?e:"high",this.scene&&this.build(this.scene,this.camera,this.look)}build(e,t,n={}){this.scene=e,this.camera=t,this.look=n;let s=pr[this.quality],r=window.innerWidth,o=window.innerHeight;this.r.setPixelRatio(Math.min(window.devicePixelRatio||1,s.pr)),this.r.setSize(r,o,!1),this.r.toneMappingExposure=n.exposure||1,this.composer&&(this.composer.dispose(),this.composer=null);let a=this.r.getPixelRatio(),l=new Lt(r*a,o*a,{type:Ht,samples:s.msaa}),c=new cc(this.r,l);if(c.setPixelRatio(a),c.setSize(r,o),c.addPass(new hc(e,t)),this.ao=null,s.ao){let h=new Ho(e,t,r,o),d=h.render.bind(h);h.render=(...u)=>{let f=[];e.traverseVisible(g=>{(g.userData.noAO||g.isSprite||g.isPoints||g.material&&g.material.transparent)&&f.push(g)}),f.forEach(g=>g.visible=!1),d(...u),f.forEach(g=>g.visible=!0)},h.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.5,scale:1.1,samples:16,distanceFallOff:1}),h.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),h.blendIntensity=.9,c.addPass(h),this.ao=h}this.bloom=null,s.bloom&&(this.bloom=new dr(new $(r,o),n.bloom??.3,.6,n.threshold??1),c.addPass(this.bloom)),c.addPass(new fc),this.grade=new ur(Lv),n.vignette!==void 0&&(this.grade.uniforms.vignette.value=n.vignette),n.warmth!==void 0&&(this.grade.uniforms.warmth.value=n.warmth),c.addPass(this.grade),this.composer=c}shadowSize(){return pr[this.quality].shadow}resize(){if(!this.camera)return;let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.r.setSize(e,t,!1),this.composer&&this.composer.setSize(e,t)}render(e){this.grade&&(this.grade.uniforms.time.value=e%100),this.composer?this.composer.render():this.scene&&this.r.render(this.scene,this.camera)}};var xc=class{constructor(e){this.keys=new Set,this.pressed=new Set,this.camDX=0,this.camDY=0,this.touch={x:0,y:0,jump:!1,dash:!1,flop:!1},this.pad=null,this.prevPad={},addEventListener("keydown",r=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(r.code)&&r.preventDefault(),this.keys.has(r.code)||this.pressed.add(r.code),this.keys.add(r.code)}),addEventListener("keyup",r=>this.keys.delete(r.code)),addEventListener("blur",()=>this.keys.clear());let t=!1,n=0,s=0;e.addEventListener("mousedown",r=>{t=!0,n=r.clientX,s=r.clientY}),addEventListener("mouseup",()=>t=!1),addEventListener("mousemove",r=>{if(document.pointerLockElement===e){this.camDX+=r.movementX,this.camDY+=r.movementY;return}t&&(this.camDX+=r.clientX-n,this.camDY+=r.clientY-s,n=r.clientX,s=r.clientY)}),this.setupTouch()}setupTouch(){let e="ontouchstart"in window||navigator.maxTouchPoints>0,t=document.getElementById("touch");if(!e||!t)return;this.isTouch=!0,t.classList.remove("hidden");let n=document.getElementById("stick"),s=document.getElementById("knob"),r=null,o=0,a=0,l=null,c=0,h=0,d=50;n.addEventListener("touchstart",g=>{r=g.changedTouches[0].identifier;let p=n.getBoundingClientRect();o=p.left+p.width/2,a=p.top+p.height/2,g.preventDefault()},{passive:!1}),addEventListener("touchmove",g=>{for(let x of g.changedTouches)if(x.identifier===r){let p=x.clientX-o,m=x.clientY-a,_=Math.hypot(p,m);_>d&&(p=p/_*d,m=m/_*d),s.style.transform=`translate(${p}px, ${m}px)`,this.touch.x=p/d,this.touch.y=m/d}else x.identifier===l&&(this.camDX+=(x.clientX-c)*1.4,this.camDY+=(x.clientY-h)*1.4,c=x.clientX,h=x.clientY)},{passive:!0});let u=g=>{for(let x of g.changedTouches)x.identifier===r&&(r=null,this.touch.x=this.touch.y=0,s.style.transform=""),x.identifier===l&&(l=null)};addEventListener("touchend",u),addEventListener("touchcancel",u),document.getElementById("game").addEventListener("touchstart",g=>{let x=g.changedTouches[0];x.clientX>innerWidth*.4&&(l=x.identifier,c=x.clientX,h=x.clientY)},{passive:!0});let f=(g,x)=>{let p=document.getElementById(g);p.addEventListener("touchstart",m=>{m.preventDefault(),this.touch[x]||this.pressed.add("touch-"+x),this.touch[x]=!0,p.classList.add("down")},{passive:!1}),p.addEventListener("touchend",m=>{m.preventDefault(),this.touch[x]=!1,p.classList.remove("down")},{passive:!1})};f("tJump","jump"),f("tDash","dash"),f("tFlop","flop")}pollPad(){let e=navigator.getGamepads?navigator.getGamepads():[],t=e&&[...e].find(o=>o&&o.connected);if(this.pad=t||null,!t)return;let n=o=>!!(t.buttons[o]&&t.buttons[o].pressed),s={jump:n(0),dash:n(2)||n(5)||n(7),flop:n(1)||n(4)||n(6),pause:n(9)};for(let o in s)s[o]&&!this.prevPad[o]&&this.pressed.add("pad-"+o);this.prevPad=s;let r=o=>Math.abs(o)<.18?0:o;this.camDX+=r(t.axes[2]||0)*12,this.camDY+=r(t.axes[3]||0)*8}move(){let e=0,t=0,n=this.keys;if((n.has("KeyW")||n.has("ArrowUp"))&&(t+=1),(n.has("KeyS")||n.has("ArrowDown"))&&(t-=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(e-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(e+=1),e+=this.touch.x,t-=this.touch.y,this.pad){let r=this.pad.axes[0]||0,o=this.pad.axes[1]||0;Math.hypot(r,o)>.18&&(e+=r,t-=o)}let s=Math.hypot(e,t);return s>1&&(e/=s,t/=s),{x:e,y:t}}jumpHeld(){return this.keys.has("Space")||this.touch.jump||!!this.prevPad.jump}jumpPressed(){return this.pressed.has("Space")||this.pressed.has("touch-jump")||this.pressed.has("pad-jump")}dashPressed(){return this.pressed.has("ShiftLeft")||this.pressed.has("ShiftRight")||this.pressed.has("KeyK")||this.pressed.has("touch-dash")||this.pressed.has("pad-dash")}flopPressed(){return this.pressed.has("KeyC")||this.pressed.has("ControlLeft")||this.pressed.has("KeyL")||this.pressed.has("touch-flop")||this.pressed.has("pad-flop")}camTurn(){let e=0;return this.keys.has("KeyQ")&&(e-=1),this.keys.has("KeyE")&&(e+=1),e}endFrame(){this.pressed.clear(),this.camDX=0,this.camDY=0}};var iu=new Map,Mt=(i,e)=>(iu.has(i)||iu.set(i,e()),iu.get(i));function kt(i,e){let t={};for(let n of["map","normalMap","roughnessMap"]){if(!i[n])continue;let s=i[n].clone();s.repeat.set(e,e),s.needsUpdate=!0,t[n]=s}return t}function _c(i,e=.5){let t=i.attributes.position,n=i.attributes.normal,s=new Float32Array(t.count*2);for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getY(r),l=t.getZ(r),c=Math.abs(n.getX(r)),h=Math.abs(n.getY(r)),d=Math.abs(n.getZ(r)),u,f;h>=c&&h>=d?(u=o,f=l):c>=d?(u=l,f=a):(u=o,f=a),s[r*2]=u*e,s[r*2+1]=f*e}return i.setAttribute("uv",new Ct(s,2)),i}var Te={plush(i,e="plush"+i){return Mt(e,()=>new mt(Object.assign({color:i,roughness:1,sheen:1,sheenRoughness:.45,sheenColor:new re(16777215).lerp(new re(i),.4),normalScale:new $(.6,.6)},kt(wt.plush(),3))))},knit(i){return Mt("knit"+i,()=>new mt(Object.assign({color:i,sheen:.8,sheenRoughness:.6,sheenColor:16777215,normalScale:new $(1.2,1.2)},kt(wt.knit(),1))))},quilt(i){return Mt("quilt"+i,()=>new mt(Object.assign({color:i,sheen:.7,sheenRoughness:.5,sheenColor:16777215,normalScale:new $(1.4,1.4)},kt(wt.quilt(),1))))},linen(i){return Mt("linen"+i,()=>new pt(Object.assign({color:i},kt(wt.linen(),1))))},painted(i){return Mt("painted"+i,()=>new mt(Object.assign({color:i,clearcoat:.35,clearcoatRoughness:.45,specularIntensity:.6},kt(wt.painted(),1))))},ceramic(i){return Mt("ceramic"+i,()=>new mt(Object.assign({color:i,clearcoat:1,clearcoatRoughness:.08},kt(wt.ceramic(),1))))},woodLight(){return Mt("woodLight",()=>new pt(Object.assign({},kt(wt.wood("light",15255962,12094040,!0),1))))},woodBirch(){return Mt("woodBirch",()=>new pt(Object.assign({},kt(wt.wood("birch",15851456,13808778,!0,.6),1))))},woodBoard(){return Mt("woodBoard",()=>new mt(Object.assign({clearcoat:.3,clearcoatRoughness:.4},kt(wt.wood("board",14264428,10250810,!1,.5),1))))},woodDark(){return Mt("woodDark",()=>new pt(Object.assign({},kt(wt.wood("dark",9067066,5189404,!0),1))))},marble(){return Mt("marble",()=>new mt(Object.assign({clearcoat:.8,clearcoatRoughness:.1},kt(wt.marble(),1))))},sponge(){return Mt("sponge",()=>new pt(Object.assign({normalScale:new $(1.5,1.5)},kt(wt.sponge(),1))))},scrubber(){return Mt("scrubber",()=>new pt(Object.assign({normalScale:new $(1.5,1.5)},kt(wt.scrubber(),1))))},cookie(){return Mt("cookie",()=>new pt(Object.assign({normalScale:new $(1.6,1.6)},kt(wt.cookie(),1))))},roof(){return Mt("roof",()=>new pt(Object.assign({},kt(wt.roof(),1))))},brick(){return Mt("brick",()=>new pt(Object.assign({},kt(wt.brick(),1))))},stucco(i=16773598){return Mt("stucco"+i,()=>new pt(Object.assign({color:i,normalScale:new $(.8,.8)},kt(wt.cloud(),1))))},cardboard(){return Mt("cardboard",()=>new pt(Object.assign({},kt(wt.cardboard(),1))))},grass(){return Mt("grass",()=>new pt(Object.assign({},kt(wt.grass(),1))))},rock(){return Mt("rock",()=>new pt(Object.assign({normalScale:new $(1.4,1.4)},kt(wt.rock(),1))))},wicker(){return Mt("wicker",()=>new pt(Object.assign({},kt(wt.wicker(),1))))},cloud(){return Mt("cloudMat",()=>new mt(Object.assign({color:16777215,roughness:1,sheen:1,sheenColor:16770800,sheenRoughness:.8,emissive:3156026,normalScale:new $(.5,.5)},kt(wt.cloud(),1))))},crystal(i=10479871){return Mt("crystal"+i,()=>new mt({color:i,metalness:0,roughness:.08,transmission:.85,thickness:1.2,ior:1.5,iridescence:.6,iridescenceIOR:1.3,emissive:i,emissiveIntensity:.18,attenuationColor:i,attenuationDistance:3}))},bubble(){return Mt("bubble",()=>new mt({color:14677759,roughness:.02,transmission:.92,thickness:.3,ior:1.2,iridescence:1,iridescenceIOR:1.6,iridescenceThicknessRange:[200,700],emissive:2781096,emissiveIntensity:.15}))},glossy(i,e=0,t=0){return Mt("glossy"+i+"_"+e+"_"+t,()=>new mt({color:i,roughness:.25,clearcoat:1,clearcoatRoughness:.05,emissive:e,emissiveIntensity:t}))},gold(i=16761402,e=.35){return Mt("gold"+i+e,()=>new mt({color:i,metalness:.85,roughness:.22,clearcoat:1,clearcoatRoughness:.05,emissive:i,emissiveIntensity:e}))},eye(){return Mt("eye",()=>new mt({color:724244,roughness:.05,clearcoat:1,clearcoatRoughness:0}))},emissive(i,e=2){return Mt("emi"+i+e,()=>new pt({color:0,emissive:i,emissiveIntensity:e}))},matte(i,e=.8){return Mt("matte"+i+e,()=>new pt({color:i,roughness:e}))}};function Mf(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let _=0,S=a.length;_<S;_++){let y=a[_],E=i.attributes[y];l[y]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);let b=i.morphAttributes[y];b&&(c[y]||(c[y]=[]),b.forEach((R,v)=>{let w=new R.array.constructor(R.count*R.itemSize);c[y][v]=new R.constructor(w,R.itemSize,R.normalized)}))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),p=f*x;for(let _=0;_<r;_++){let S=n?n.getX(_):_,y="";for(let E=0,b=a.length;E<b;E++){let R=a[E],v=i.getAttribute(R),w=v.itemSize;for(let A=0;A<w;A++)y+=`${Math.trunc(v[d[A]](S)*x+p)},`}if(y in t)h.push(t[y]);else{for(let E=0,b=a.length;E<b;E++){let R=a[E],v=i.getAttribute(R),w=i.morphAttributes[R],A=v.itemSize,I=l[R],N=c[R];for(let O=0;O<A;O++){let D=d[O],B=u[O];if(I[B](o,v[D](S)),w)for(let W=0,X=w.length;W<X;W++)N[W][B](o,w[W][D](S))}}t[y]=o,h.push(o),o++}}let m=i.clone();for(let _ in i.attributes){let S=l[_];if(m.setAttribute(_,new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)),_ in c)for(let y=0;y<c[_].length;y++){let E=c[_][y];m.morphAttributes[_][y]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return m.setIndex(h),m}var Pt=(i,e=!0,t=!0)=>(i.castShadow=e,i.receiveShadow=t,i),Xo=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Nv(i,e,t,n=.05){let s=new ei;s.moveTo(i[0][0],i[0][1]);for(let o=1;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length];s.quadraticCurveTo(a[0],a[1],(a[0]+l[0])/2,(a[1]+l[1])/2)}s.closePath();let r=new Xi(s,{depth:e,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:5,curveSegments:10});return r.translate(0,0,-e/2),r.computeVertexNormals(),Pt(new ae(r,t))}var ii={z0:-.86,len:1.86,n:2.4,tMouth:.795};function qo(i){let e;if(i<.6){let t=i/.6;e=.055+.19*Math.pow(Math.sin(t*Math.PI/2),1.25)}else{let t=(i-.6)/.4;e=.245*Math.pow(Math.max(0,1-Math.pow(t,2.3)),.5)}return{w:e,ht:e*1.02,hb:e*.8}}var Sf=(i,e)=>Math.sign(i)*Math.pow(Math.abs(i),2/e);function Ni(i,e,t){let{w:n,ht:s,hb:r}=qo(i),o=Math.cos(e),a=Math.sin(e);return t.x=n*Sf(o,ii.n),t.y=(a>0?s:r)*Sf(a,ii.n),t.z=ii.z0+i*ii.len,t}function bf(i,e){let t=ii.tMouth,n=qo(t).w,s=ii.z0+t*ii.len,r=n*.82,o=s-.15*(i/r)*(i/r),a=Math.max(0,1-i/r*(i/r)),l=.032*Math.pow(a,.55)+.002;return{zc:o,gap:l,inside:Math.abs(i)<r&&Math.abs(e-o)<l,xw:r}}function Uv(i){let e=-.3;return e+=.2*Xo(.55,.78,i),e-=.5*Xo(.28,.02,i),e}var su=null;function Fv(){if(su)return su;let i=2048,e=2048,t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d"),s=n.createImageData(i,e),r=s.data,o=S=>[S>>16&255,S>>8&255,S&255],a=o(3497879),l=o(7051213),c=o(16054010),h=o(10465481),d=o(2763845),u=o(16512756),f=o(790037),g=(S,y,E)=>[S[0]+(y[0]-S[0])*E,S[1]+(y[1]-S[1])*E,S[2]+(y[2]-S[2])*E],x={x:0,y:0,z:0},p=[.16,Math.PI-.16].map(S=>Ni(.825,S,{x:0,y:0,z:0})),m=.03;for(let S=0;S<e;S++){let y=(S+.5)/e,E=Uv(y);for(let b=0;b<i;b++){let R=(b+.5)/i*Math.PI*2,v=Math.sin(R);Ni(y,R,x);let w=g(a,l,Xo(.95,E+.15,v)),A=bf(x.x,x.z),I=x.z<A.zc-A.gap+.004||Math.abs(x.x)>A.xw,N=Xo(E+.012,E-.012,v)*(I?1:0);if(w=g(w,c,N),I&&Math.abs(v-E)<.009&&v<0){let D=Math.sin(x.z*260)>-.2?1:.35;w=g(w,h,.55*D)}if(v<-.15&&A.inside){w=d;let B=(x.x+A.xw)/.032%1,W=1-Math.abs(B*2-1),X=A.zc+A.gap-x.z,ie=x.z-(A.zc-A.gap);(X<.024*W*Math.min(1,A.gap/.02)||ie<.016*W*Math.min(1,A.gap/.02))&&(w=u)}for(let D of p){let B=x.x-D.x,W=(x.y-D.y)/1.15,X=x.z-D.z;if(Math.sqrt(B*B+W*W+X*X)<m){let G=.85+.15*Math.sin((x.y+x.z*.3)*900);w=g(f,[40,44,60],(1-G)*.8)}}let O=(S*i+b)*4;r[O]=w[0],r[O+1]=w[1],r[O+2]=w[2],r[O+3]=255}}n.putImageData(s,0,0);let _=new Di(t);return _.colorSpace=zt,_.wrapS=bn,_.anisotropy=8,su=_,_}function Ov(){let t=[],n=[],s=[],r=[],o={x:0,y:0,z:0},a=f=>f/170;for(let f=0;f<=170;f++){let g=Math.min(.9995,a(f));for(let x=0;x<=112;x++){let p=x/112*Math.PI*2;if(Ni(g,p,o),Math.sin(p)<-.15){let _=bf(o.x,o.z);if(_.inside){let S=1-Math.abs(o.z-_.zc)/_.gap;o.y+=.035*Math.sqrt(S)}}t.push(o.x,o.y,o.z),n.push(x/112,g);let m=qo(g).w*5.2;s.push(x/112*m*3,o.z*3)}}for(let f=0;f<170;f++)for(let g=0;g<112;g++){let x=f*113+g,p=x+1,m=x+112+1,_=m+1;r.push(x,m,p,p,m,_)}let l=t.length/3;t.push(0,0,ii.z0+ii.len),n.push(.5,1),s.push(0,0);let c=19210;for(let f=0;f<112;f++)r.push(c+f,l,c+f+1);let h=t.length/3,d=qo(0);t.push(0,(d.ht-d.hb)*.5*0,ii.z0),n.push(.5,0),s.push(0,0);for(let f=0;f<112;f++)r.push(f+1,h,f);let u=new Tt;return u.setAttribute("position",new et(t,3)),u.setAttribute("uv",new et(n,2)),u.setAttribute("uv1",new et(s,2)),u.setIndex(r),u.computeVertexNormals(),u}function gr(i,e,t,n,s,r){let o=new ei,a=i.length,l=(p,m)=>[(p[0]+m[0])/2,(p[1]+m[1])/2],c=l(i[a-1],i[0]);o.moveTo(c[0],c[1]);for(let p=0;p<a;p++){let m=i[p],_=l(m,i[(p+1)%a]);o.quadraticCurveTo(m[0],m[1],_[0],_[1])}let h=new Xi(o,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t*.9,bevelSegments:6,curveSegments:12});h.translate(0,0,-e/2),h.computeVertexNormals();let d=h.attributes.normal,u=new Float32Array(d.count*3),f=new re(n),g=new re(s),x=new re;for(let p=0;p<d.count;p++)x.copy(f).lerp(g,Xo(.35,-.35,d.getZ(p))),u[p*3]=x.r,u[p*3+1]=x.g,u[p*3+2]=x.b;return h.setAttribute("color",new Ct(u,3)),Pt(new ae(h,r))}function Ef(){let i=new Qe,e=new Qe;i.add(e);let t=6261955,n=4024223,s=16054010,r=wt.plush(),o=r.normalMap.clone();o.channel=1,o.needsUpdate=!0;let a=r.roughnessMap.clone();a.channel=1,a.needsUpdate=!0;let l=new mt({map:Fv(),normalMap:o,roughnessMap:a,normalScale:new $(.55,.55),roughness:1,sheen:1,sheenRoughness:.45,sheenColor:new re(13229311)}),c=Pt(new ae(Ov(),l));e.add(c);let h=r.normalMap.clone();h.repeat.set(3,3),h.needsUpdate=!0;let d=new mt({vertexColors:!0,normalMap:h,normalScale:new $(.5,.5),roughness:1,sheen:1,sheenRoughness:.45,sheenColor:new re(13229311)}),u={x:0,y:0,z:0},f=gr([[.15,-.02],[.02,.16],[-.08,.29],[-.14,.3],[-.14,.17],[-.2,.04],[-.24,-.02]],.035,.03,n,n,d);f.rotation.y=-Math.PI/2,Ni(.5,Math.PI/2,u),f.position.set(0,u.y-.035,u.z),e.add(f);let g=gr([[.05,-.01],[-.02,.07],[-.06,.075],[-.07,-.01]],.02,.018,n,n,d);g.rotation.y=-Math.PI/2,Ni(.17,Math.PI/2,u),g.position.set(0,u.y-.02,u.z),e.add(g);let x=gr([[.05,.01],[-.02,-.065],[-.06,-.07],[-.07,.01]],.02,.018,t,t,d);x.rotation.y=-Math.PI/2,Ni(.15,-Math.PI/2,u),x.position.set(0,u.y+.02,u.z),e.add(x);let p=[],m=[[-.02,-.11],[.12,-.08],[.3,.06],[.44,.24],[.43,.3],[.3,.24],[.14,.15],[-.02,.1]];[1,-1].forEach(w=>{let A=new Qe,I=gr(m,.03,.028,t,s,d);I.rotation.x=-Math.PI/2,A.add(I),Ni(.64,w>0?-.55:Math.PI+.55,u),A.position.set(u.x*.92,u.y+.02,u.z),A.rotation.set(0,0,-.42),w<0&&(A.scale.x=-1,A.rotation.z=.42),e.add(A),p.push(A)}),[1,-1].forEach(w=>{let A=new Qe,I=gr([[0,-.05],[.06,-.03],[.12,.06],[.1,.08],[0,.05]],.018,.016,t,s,d);I.rotation.x=-Math.PI/2,A.add(I),Ni(.33,w>0?-1:Math.PI+1,u),A.position.set(u.x*.9,u.y+.01,u.z),A.rotation.z=-.5,w<0&&(A.scale.x=-1,A.rotation.z=.5),e.add(A)});let _=new Qe;_.position.set(0,0,ii.z0+.06),e.add(_);let S=gr([[.08,.05],[-.06,.16],[-.24,.36],[-.33,.43],[-.33,.36],[-.2,.12],[-.16,0],[-.22,-.17],[-.2,-.22],[-.08,-.1],[.08,-.04]],.04,.03,n,n,d);S.rotation.y=-Math.PI/2,_.add(S);let y=Wo(["BL\xC5HAJ","100 cm"],{w:256,h:192,font:"800 40px Nunito, sans-serif",color:"#2f5fa0",bg:"#ffffff"});y.center.set(.5,.5),y.rotation=Math.PI/2;let E=new ae(new yn(.075,.13),new pt({map:y,side:sn,roughness:.95}));E.geometry.translate(0,-.065,0),Ni(.13,-.5,u),E.position.set(u.x+.004,u.y,u.z),E.rotation.y=Math.PI/2,E.castShadow=!0,e.add(E);let b=new ae(new Qn(.6,32),new En({map:_s(),color:659488,transparent:!0,opacity:.35,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.scale.set(.8,1.6,1),b.renderOrder=2,i.add(b),e.scale.setScalar(1.25);let R=qo(.6).hb*1.25+.01,v={root:i,body:e,tail:_,eyes:[],fins:p,blob:b,tag:E,t:Math.random()*10,squash:1,squashVel:0,spin:0};return v.update=(w,A)=>{v.t+=w;let I=4+A.speed*11;_.rotation.y=Math.sin(v.t*I)*(.18+A.speed*.42),e.rotation.y=-Math.sin(v.t*I-.6)*A.speed*.07;let N=Math.sin(v.t*(A.glide?14:5))*(A.glide?.12:.06)+(A.grounded?0:A.glide?.4:-.25);p[0].rotation.z=-.42+N,p[1].rotation.z=.42-N,E.rotation.x=Math.sin(v.t*5)*.25+A.speed*.5,e.position.y=R+(A.grounded?Math.sin(v.t*2.2)*.015:.05);let O=A.grounded?0:A.pound?.9:Do.clamp(-A.vy*.05,-.45,.45);e.rotation.x+=(O-e.rotation.x)*Math.min(1,w*10),v.spin>0?(v.spin=Math.max(0,v.spin-w*18),e.rotation.z=v.spin):e.rotation.z*=.8;let D=-170*(v.squash-1)-12*v.squashVel;v.squashVel+=D*w,v.squash+=v.squashVel*w;let B=v.squash;e.scale.set(1.25/Math.sqrt(B),1.25*B,1.25/Math.sqrt(B))},v.impulse=w=>{v.squashVel+=w},v}function vc(){let i=new Qe,e=Te.gold(16751164,.45),t=Pt(new ae(new Jt(.2,24,16),e),!0,!1);t.scale.set(.6,.85,1.2),i.add(t);let n=Nv([[0,0],[-.2,.16],[-.2,-.16]],.03,e,.02);return n.rotation.y=-Math.PI/2,n.position.z=-.24,i.add(n),[-1,1].forEach(s=>{let r=new ae(new Jt(.035,10,8),Te.eye());r.position.set(s*.09,.05,.13),i.add(r)}),i}function Tf(){let i=new Qe,e=[];for(let o=0;o<10;o++){let a=o%2===0?.46:.22,l=o/10*Math.PI*2+Math.PI/2;e.push([Math.cos(l)*a,Math.sin(l)*a])}let t=new ei;t.moveTo(e[0][0],e[0][1]),e.slice(1).forEach(o=>t.lineTo(o[0],o[1])),t.closePath();let n=new Xi(t,{depth:.1,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:6});n.translate(0,0,-.05),i.add(Pt(new ae(n,Te.gold(16762941,.6)),!0,!1)),[-1,1].forEach(o=>{let a=new ae(new Jt(.035,10,8),Te.eye());a.position.set(o*.08,.03,.14),i.add(a)});let s=new ae(new Mn(.05,.012,6,16,Math.PI),Te.eye());s.position.set(0,-.05,.14),s.rotation.z=Math.PI,i.add(s);let r=new Wi(new Ii({map:_s(),color:16765803,transparent:!0,opacity:.55,depthWrite:!1,blending:Tn}));return r.scale.set(2.2,2.2,1),i.add(r),i}function xr(){let i=new ei;i.moveTo(0,.15),i.bezierCurveTo(0,.25,-.3,.25,-.3,0),i.bezierCurveTo(-.3,-.2,0,-.3,0,-.4),i.bezierCurveTo(0,-.3,.3,-.2,.3,0),i.bezierCurveTo(.3,.25,0,.25,0,.15);let e=new Xi(i,{depth:.1,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:8,curveSegments:24});return e.translate(0,.1,-.05),Pt(new ae(e,Te.glossy(16735370,16723311,.35)),!0,!1)}function wf(){let i=new Qe,e=Pt(new ae(new Zt(.32,.42,.14,32),Te.woodDark()));e.position.y=.07,i.add(e);let t=new pt({color:14201450,metalness:1,roughness:.28}),n=Pt(new ae(new Zt(.035,.035,1.35,12),t));n.position.y=.8,i.add(n);let s=Te.linen(16773328).clone();s.side=sn,s.emissive=new re(0);let r=Pt(new ae(new Zt(.28,.48,.55,32,1,!0),s));r.position.y=1.62,i.add(r);let o=new pt({color:12303291,emissive:0,roughness:.3}),a=new ae(new Jt(.11,16,12),o);a.position.y=1.45,i.add(a);let l=new tr(16761975,0,7,1.6);return l.position.y=1.4,i.add(l),i.userData.activate=()=>{s.emissive.setHex(16752704),s.emissiveIntensity=.9,o.emissive.setHex(16773312),o.emissiveIntensity=6,l.intensity=6},i}function Bv(i,e,t,n){let s=new qi(i,e);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=Mf(s);let r=s.attributes.position,o=new P;for(let a=0;a<r.count;a++){o.fromBufferAttribute(r,a);let l=o.clone().normalize(),c=Math.atan2(l.z,l.x)/(Math.PI*2)+.5,h=Math.acos(l.y)/Math.PI,d=wn(c*16,h*8,16,n)*.7+wn(c*48,h*24,48,n+1)*.3;o.addScaledVector(l,(d-.5)*t*2),r.setXYZ(a,o.x,o.y,o.z)}return s.computeVertexNormals(),s}function Af(){let i=new Qe,e=new Qe;i.add(e);let t=Te.plush(13222872,"bunnyFluff"),n=Pt(new ae(Bv(.45,5,.06,7),t));n.position.y=.45,n.scale.set(1,.92,1),e.add(n),[-1,1].forEach(r=>{let o=Pt(new ae(new mi(.085,.36,6,12),t));o.position.set(r*.17,.98,-.02),o.rotation.z=-r*.3,e.add(o);let a=new ae(new mi(.045,.26,4,10),Te.plush(16757702,"earPink"));a.position.set(0,0,.05),o.add(a);let l=new ae(new Jt(.065,16,12),Te.eye());l.position.set(r*.16,.52,.39),e.add(l);let c=new ae(new Qn(.07,20),new En({color:16748459,transparent:!0,opacity:.6,depthWrite:!1}));c.position.set(r*.26,.4,.37),c.lookAt(r*.7,.4,1.4),e.add(c)});let s=new ae(new Jt(.045,12,8),Te.glossy(16744351));return s.position.set(0,.42,.44),e.add(s),i.userData.inner=e,i}function Rf(){let i=new Qe,e=new Qe;i.add(e);let t=Pt(new ae(new Zt(.7,.72,.28,48),Te.glossy(2896192)));t.position.y=.2,e.add(t);let n=Pt(new ae(new Zt(.55,.6,.06,48),new mt({color:9344680,metalness:.6,roughness:.35,clearcoat:1})));n.position.y=.36,e.add(n);let s=new ae(new Mn(.71,.05,10,48,Math.PI),Te.matte(5593963,.5));s.rotation.set(Math.PI/2,0,0),s.position.y=.16,e.add(s);let r=[];[-1,1].forEach(a=>{let l=new ae(new mi(.04,.06,4,8),Te.emissive(5830143,4));l.rotation.z=Math.PI/2,l.position.set(a*.16,.35,.52),e.add(l),r.push(l)});let o=new Qe;for(let a=0;a<3;a++){let l=new ae(new nn(.4,.02,.04),Te.matte(16744355));l.rotation.y=a/3*Math.PI,o.add(l)}return o.position.set(.45,.06,.4),e.add(o),i.userData.inner=e,i.userData.brush=o,i}function Cf(){let i=new Qe,e=new Jt(1,48,32),t=e.attributes.position;for(let l=0;l<t.count;l++){let c=t.getX(l),h=t.getY(l),d=t.getZ(l),u=1+.25*(Math.abs(c)*Math.abs(d));t.setXYZ(l,c*u*1.6,h*.42,d*u*1.25)}e.computeVertexNormals();let n=Te.quilt(16769258).clone();n.map=n.map.clone(),n.map.repeat.set(2,2),n.normalMap=n.normalMap.clone(),n.normalMap.repeat.set(2,2);let s=Pt(new ae(e,n));s.position.y=.42,i.add(s);let r=xr();r.material=Te.glossy(16735370,16726650,.9),r.position.y=2.1,r.scale.setScalar(1.5),i.add(r),i.userData.heart=r;let o=new tr(16748472,8,9,1.6);o.position.y=2,i.add(o);let a=new Wi(new Ii({map:_s(),color:16752580,transparent:!0,opacity:.5,depthWrite:!1,blending:Tn}));return a.scale.set(4,4,1),a.position.y=2.1,i.add(a),i}function Pf(i){let e=new Qe,t=Te.woodLight(),n=Pt(new ae(new Zt(.06,.07,1.4,12),t));n.position.y=.7,e.add(n);let s=Pt(new ae(new nn(2.3,1.05,.1),t));s.position.y=1.65,e.add(s);let r=Wo(i.split(`
`),{w:768,h:352,font:'800 64px Nunito, "Segoe UI", sans-serif',color:"#4a2f1c"}),o=new ae(new yn(2.15,.98),new pt({map:r,transparent:!0,roughness:.9}));return o.position.set(0,1.65,.052),e.add(o),e}function If(){let i=new Qe,e=Pt(new ae(new nn(1,1,1,1,1,1),Te.cardboard()));e.position.y=.5,i.add(e);let t=Wo(["\u{1F988}"],{w:128,h:128,font:"88px sans-serif",color:"#3a2a1a"}),n=new ae(new yn(.35,.35),new pt({map:t,transparent:!0,opacity:.75,roughness:1}));return n.position.set(.25,.3,.502),i.add(n),i}function Df(i,e){let t=new Qe,n=[14885931,16764160,697824,4174671],s=Te.glossy(n[Math.floor((i*7+e*13)%n.length)]),r=Pt(new ae(new nn(i,.38,e),s));r.position.y=.19,t.add(r);let o=Math.max(1,Math.round(i/.45)),a=Math.max(1,Math.round(e/.45)),l=new Zt(.12,.12,.12,20);for(let c=0;c<o;c++)for(let h=0;h<a;h++){let d=Pt(new ae(l,s));d.position.set(-i/2+(c+.5)*(i/o),.44,-e/2+(h+.5)*(e/a)),t.add(d)}return t}function Lf(){let i=new Qe,e=Pt(new ae(new Zt(.5,.38,.7,32),Te.ceramic(15304554)));e.position.y=.35,i.add(e);let t=new ae(new Qn(.46,24),Te.matte(3877408,1));t.rotation.x=-Math.PI/2,t.position.y=.66,i.add(t);let n=new mt({color:5218138,roughness:.45,sheen:.4,sheenColor:12582863,side:sn}),s=new ei;s.moveTo(0,0),s.quadraticCurveTo(.22,.35,0,.8),s.quadraticCurveTo(-.22,.35,0,0);let r=new ao(s,12);for(let o=0;o<11;o++){let a=Pt(new ae(r,n)),l=o/11*Math.PI*2;a.position.set(Math.cos(l)*.1,.65,Math.sin(l)*.1),a.rotation.set(0,-l+Math.PI/2,0),a.rotateX(-.35-o%3*.2),a.scale.setScalar(.9+o%4*.15),i.add(a)}return i}function Nf(i){let e=new Qe,t=Te.ceramic(i),n=Pt(new ae(new Zt(.5,.45,1,40,1,!0),t));n.material=t.clone(),n.material.side=sn,n.position.y=.5,e.add(n);let s=new ae(new Qn(.45,32),t);s.rotation.x=-Math.PI/2,s.position.y=.02,e.add(s);let r=new ae(new Qn(.47,32),new mt({color:3809040,roughness:.05,clearcoat:1}));r.rotation.x=-Math.PI/2,r.position.y=.85,e.add(r);let o=Pt(new ae(new Mn(.24,.065,16,32),t));return o.position.set(.55,.5,0),e.add(o),e}function Uf(i,e){let t=new Qe,n=Pt(new ae(new nn(1,1,1),Te.painted(i)));if(n.position.y=.5,t.add(n),e){let s=Wo([e],{w:256,h:256,font:"900 190px Nunito, sans-serif",color:"#ffffff"}),r=new mt({map:s,transparent:!0,clearcoat:1,roughness:.3});[[0,.501,0],[Math.PI/2,0,.501],[-Math.PI/2,0,-.501],[Math.PI,-.501,0]].forEach(([o,a,l],c)=>{let h=new ae(new yn(.72,.72),r);c===0?h.position.set(0,.5,.501):c===1?(h.position.set(.501,.5,0),h.rotation.y=Math.PI/2):c===2?(h.position.set(-.501,.5,0),h.rotation.y=-Math.PI/2):(h.position.set(0,.5,-.501),h.rotation.y=Math.PI),t.add(h)})}return t}function ru(i=Math.random()){let e=new Qe,t=Te.cloud(),n=6+Math.floor(i*4);for(let s=0;s<n;s++){let r=.8+i*997*(s+1)%1*.9,o=new ae(new qi(r,4),t);o.position.set((s-n/2)*.9,i*31*(s+3)%1*.6-Math.abs(s-n/2)*.12,(i*71*(s+7)%1-.5)*1.2),o.castShadow=!0,e.add(o)}return e}function Ff(i){let e=new Qe,t=new mt({color:i,roughness:.6,sheen:.6,sheenColor:16777215,emissive:i,emissiveIntensity:.25}),n=Te.emissive(i,2.2),s=1,r=()=>(s=s*16807%2147483647)/2147483647;function o(a,l,c,h){let d=Pt(new ae(new mi(c,l,6,12),t));d.position.y=l/2,a.add(d);let u=new Qe;if(u.position.y=l,a.add(u),h===0){let g=new ae(new Jt(c*1.25,12,10),n);u.add(g);return}let f=2+(r()>.6?1:0);for(let g=0;g<f;g++){let x=new Qe;x.rotation.set((r()-.5)*1.1,r()*Math.PI*2,(r()-.5)*1.1),u.add(x),o(x,l*.72,c*.75,h-1)}}return o(e,.9,.13,3),e}function Of(){let i=new Qe,e=[16744355,7324639,16765286],t=new mt({color:e[Math.floor(Math.random()*3)],roughness:.35,clearcoat:1,clearcoatRoughness:.1,sheen:.3}),n=Pt(new ae(new Jt(1.1,40,28),t),!0,!1);n.scale.set(1,1.15,1),n.position.y=4.4,i.add(n);let s=Te.matte(9071178,1);return[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([r,o])=>{let a=new P(r*1.2,.4,o*1.2),l=new P(r*.4,3.4,o*.4),c=new ae(new Zt(.015,.015,a.distanceTo(l),4),s);c.position.copy(a).add(l).multiplyScalar(.5),c.lookAt(l),c.rotateX(Math.PI/2),i.add(c)}),i}var Yo=new P;function Hn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Yo.copy(e),Yo[n]=0,Yo.normalize();let c=.5*o/(o+a),h=1-Yo.angleTo(i)/l;return Math.sign(Yo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var yc=class i extends nn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new P,p=.5/o;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[_+0]=Hn(x,c,"z","y",r,n),f[_+1]=1-Hn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-Hn(x,c,"z","y",r,n),f[_+1]=1-Hn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-Hn(x,c,"x","z",r,e),f[_+1]=Hn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[_+0]=1-Hn(x,c,"x","z",r,e),f[_+1]=1-Hn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[_+0]=1-Hn(x,c,"x","y",r,e),f[_+1]=1-Hn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=Hn(x,c,"x","y",r,e),f[_+1]=1-Hn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var An=(i,e=!0,t=!0)=>(i.castShadow=e,i.receiveShadow=t,i),kf=(i,e,t,n=.12,s=3)=>new yc(i,e,t,s,Math.min(n,i/2-.01,e/2-.01,t/2-.01)),ht=(i,e=0)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},zv="varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }",Hv=`
uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float night; uniform float time;
varying vec3 vDir;
float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719)))*43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  float a=h(vec3(i,0.)), b=h(vec3(i+vec2(1,0),0.)), c=h(vec3(i+vec2(0,1),0.)), d=h(vec3(i+vec2(1,1),0.));
  return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
float fbm(vec2 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*noise(p); p*=2.03; a*=.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = y > 0. ? mix(horizon, top, pow(clamp(y,0.,1.), 0.6)) : mix(horizon, bottom, pow(clamp(-y,0.,1.), 0.5));
  float sd = max(dot(d, normalize(sunDir)), 0.);
  col += sunColor * (pow(sd, 900.) * 6. + pow(sd, 18.) * 0.35 + pow(sd, 3.) * 0.12);
  // soft high clouds
  if (y > 0.) {
    vec2 uv = d.xz / (y + 0.25) * 1.6 + vec2(time * 0.004, 0.);
    float c = smoothstep(0.5, 0.85, fbm(uv));
    col = mix(col, mix(vec3(1.), horizon, 0.35 + night * 0.4) * (1. - night * 0.6), c * 0.55 * smoothstep(0., 0.25, y));
  }
  // stars at night
  if (night > 0.) {
    vec3 sp = floor(d * 260.);
    float s = h(sp);
    float tw = 0.6 + 0.4 * sin(time * 2. + s * 50.);
    col += vec3(1.0, 0.95, 0.9) * step(0.9975, s) * tw * night * smoothstep(-0.05, 0.2, y) * 2.5;
    float neb = fbm(d.xz * 3. + d.y);
    col += vec3(0.5, 0.3, 0.8) * pow(neb, 3.) * 0.25 * night * max(y, 0.);
  }
  gl_FragColor = vec4(col, 1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function Vf(i){let e=l=>new re(l),t=e(i.sky[0]),n=e(i.sky[1]),s=n.clone().lerp(new re(i.floor.color),.5),r=i.night?new P(-.5,.45,-.6):new P(.45,.55,-.7),o=new xt({vertexShader:zv,fragmentShader:Hv,side:ln,depthWrite:!1,uniforms:{top:{value:t},horizon:{value:n},bottom:{value:s},sunDir:{value:r.clone().normalize()},sunColor:{value:i.night?new re(10467583):new re(16773328)},night:{value:i.night?1:0},time:{value:0}}}),a=new ae(new Jt(500,48,24),o);return a.frustumCulled=!1,a.renderOrder=-10,{mesh:a,sunDir:r.normalize(),top:t,horizon:n}}function Gf(i,e,t){let n=new hs,s=e.mesh.clone();s.material=e.mesh.material.clone(),s.material.uniforms=cn.clone(e.mesh.material.uniforms),s.scale.setScalar(.1),n.add(s);let r=(l,c,h,d)=>{let u=new ae(new yn(d,d),new En({color:new re(l).multiplyScalar(c),side:sn}));u.position.copy(h),u.lookAt(0,0,0),n.add(u)};r(t.night?9414911:16774368,t.night?1.5:2.5,e.sunDir.clone().multiplyScalar(30),10),r(t.floor.color,.6,new P(0,-30,0),60);let o=new lr(i),a=o.fromScene(n,.03);return o.dispose(),a.texture}function Wf(i){let e=new Qe,t=i.floor,n=new yn(900,900,1,1);n.rotateX(-Math.PI/2);let s=[];if(t.kind==="goo"||t.kind==="sea"){let r=wt.water(),o=r.normalMap.clone(),a=r.normalMap.clone();o.repeat.set(60,60),a.repeat.set(90,90),o.needsUpdate=a.needsUpdate=!0;let l=t.kind==="goo",c=new mt({color:t.color,roughness:l?.5:.12,metalness:0,clearcoat:l?.25:1,clearcoatRoughness:l?.55:.08,specularIntensity:l?.35:.6,normalMap:o,clearcoatNormalMap:a,normalScale:new $(l?.9:.4,l?.9:.4),emissive:t.color,emissiveIntensity:l?.5:.25}),h=new ae(n,c);if(h.receiveShadow=!0,h.position.y=t.y,e.add(h),s.push(d=>{o.offset.set(d*.004,d*.006),a.offset.set(-d*.005,d*.003),c.emissiveIntensity=(l?.5:.22)+Math.sin(d*1.3)*.06}),l){let d=new mt({color:t.color,roughness:.2,clearcoat:.6,emissive:t.color,emissiveIntensity:.9}),u=[];for(let f=0;f<26;f++){let g=new ae(new Jt(1,20,14),d);g.userData={x:(ht(f,1)-.5)*50,z:10-ht(f,2)*110,p:ht(f,3)*4,s:.3+ht(f,4)*.7},e.add(g),u.push(g)}s.push(f=>u.forEach(g=>{let x=g.userData,p=(f*.5+x.p)%4/4,m=Math.sin(p*Math.PI)*x.s;g.scale.set(m,m*.6,m),g.position.set(x.x,t.y+m*.2,x.z)}))}}else if(t.kind==="clouds"){let r=new ae(n,new pt({color:16777215,roughness:1,emissive:16767456,emissiveIntensity:.25}));r.position.y=t.y-1.5,r.receiveShadow=!0,e.add(r);let o=new qi(1,3),a=900,l=new Zs(o,Te.cloud(),a),c=new at,h=new Pn,d=new P,u=new P;for(let f=0;f<a;f++){let g=2+ht(f,9)*5;d.set((ht(f,1)-.5)*160,t.y-1+ht(f,3)*1.5,30-ht(f,2)*170),u.set(g,g*.55,g),c.compose(d,h,u),l.setMatrixAt(f,c)}l.receiveShadow=!0,e.add(l),s.push(f=>{l.position.x=Math.sin(f*.05)*3})}return{group:e,update:r=>s.forEach(o=>o(r))}}var zf=[14242639,6000598,15773006,6076508,10185686,15040424,4175784,15979371],Hf=[16752451,7324639,10475627,16744355,16765286,10980346];function Nt(i,e,t,n,s,r=0,o=0,a=0,l=.08,c=.5){let h=_c(kf(e,t,n,l),c),d=An(new ae(h,s));return d.position.set(r,o,a),i.add(d),d}function Xf(i,e,t){let n=new Qe,{w:s,d:r}=i,o=e.floor.y,a=!i.move,l=Math.max(1,i.y-o+.5),c=i.h||1,h=ht(i.x*3.1+i.z*1.7,i.y);switch(i.style){case"rug":{Nt(n,s+.3,.16,r+.3,Te.knit(16164288),0,-.08,0,.07,.6);let d=a?l:1.2;Nt(n,s,d,r,Te.woodBirch(),0,-.16-d/2,0,.12,.35),c=d+.16;break}case"books":{let d=a?l:1.2,u=0,f=0;for(;u<d;){let g=.32+ht(h*10+f)*.25,x=zf[Math.floor(ht(h*20+f)*zf.length)],p=(ht(h*30+f)-.5)*.3,m=(ht(h*40+f)-.5)*.3,_=s*(.98+ht(f,h)*.06),S=r*(.98+ht(h,f)*.06),y=new Qe;Nt(y,_,g,S,Te.linen(x),0,0,0,.05,.7),Nt(y,_-.12,g*.78,S+.02-.12,Te.linen(16643036),.07,0,0,.02,3),y.position.set(f===0?0:p,-u-g/2,f===0?0:m),y.rotation.y=f===0?0:(ht(h,f*3)-.5)*.12,n.add(y),u+=g,f++}c=d;break}case"block":{let d=a?l:1.5,u=Math.min(s,r),f=0,g=0;for(;f<d;){let x=Hf[Math.floor(ht(h*7+g)*Hf.length)],p=Math.min(u,2.2);Nt(n,s,p,r,Te.painted(x),0,-f-p/2,0,.14,.35),f+=p,g++}c=d;break}case"wood":{if(Nt(n,s,.35,r,Te.woodLight(),0,-.175,0,.06,.4),i.move)[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([d,u])=>{let f=An(new ae(new Zt(.32,.32,.22,28),Te.glossy(2830138)));f.rotation.z=Math.PI/2,f.position.set(d*(s/2-.1),-.45,u*(r/2-.45)),n.add(f)});else{let d=l;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([u,f])=>{Nt(n,.25,d,.25,Te.woodLight(),u*(s/2-.2),-.35-d/2,f*(r/2-.3),.05,.5)})}c=.35;break}case"bed":{Nt(n,s,.5,r,Te.quilt(12573183),0,-.25,0,.22,.35),Nt(n,s+.1,.6,r+.1,Te.quilt(16777215),0,-.75,0,.2,.35),Nt(n,s+.5,.5,r+.5,Te.woodBirch(),0,-1.3,0,.1,.4);let d=l-1.5;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([u,f])=>Nt(n,.5,d,.5,Te.woodBirch(),u*(s/2),-1.55-d/2,f*(r/2),.08,.5)),Nt(n,s+.5,4.2,.5,Te.woodBirch(),0,.8,-r/2-.25,.25,.3),c=1.55;break}case"cushion":{let d=new Jt(1,40,24),u=d.attributes.position;for(let g=0;g<u.count;g++){let x=u.getX(g),p=u.getY(g),m=u.getZ(g),_=1+.35*Math.abs(x*m);u.setXYZ(g,x*_*s*.55,p*.75,m*_*r*.55)}d.computeVertexNormals();let f=An(new ae(d,Te.quilt(16757702)));f.position.y=-.75,n.add(f),c=1.5;break}case"counter":{Nt(n,s+.3,.35,r+.3,Te.marble(),0,-.175,0,.06,.25);let d=a?l:1.5;Nt(n,s,d,r,Te.woodBirch(),0,-.35-d/2,0,.08,.35);let u=new pt({color:14201450,metalness:1,roughness:.3});for(let f=0;f<Math.min(4,Math.floor(d/1.5));f++)[1,-1].forEach(g=>{let x=An(new ae(new mi(.05,.6,4,8),u));x.rotation.z=Math.PI/2,x.position.set(0,-.9-f*1.6,g*(r/2+.06)),n.add(x)});c=.35+d;break}case"board":{if(Nt(n,s,.28,r,Te.woodBoard(),0,-.14,0,.12,.35),a){let d=l-.28,u=An(new ae(new Zt(Math.min(s,r)*.38,Math.min(s,r)*.38,d,40),Te.ceramic(15266296)));u.position.y=-.28-d/2,n.add(u)}else{let d=new ae(new Mn(.18,.05,8,20),Te.woodDark());d.rotation.x=Math.PI/2,d.position.set(0,0,-r/2+.3),n.add(d)}c=.28;break}case"mug":{let d=Math.max(s,r)*.58,u=a?l:2.5,f=[7324639,16752451,16757702,10980346,10475627],g=Te.ceramic(f[Math.floor(h*f.length)]),x=An(new ae(new Zt(d,d*.92,u,48),g));x.position.y=-u/2,n.add(x);let p=An(new ae(new Mn(d-.06,.07,12,48),g));p.rotation.x=Math.PI/2,n.add(p);let m=new ae(new Qn(d-.08,40),new mt({color:15323046,roughness:.6,sheen:.6,sheenColor:16777215}));m.rotation.x=-Math.PI/2,m.position.y=-.02,m.receiveShadow=!0,n.add(m);let _=xr();_.material=new pt({color:16774890,roughness:.7}),_.scale.set(d*.9,d*.9,.05),_.rotation.x=-Math.PI/2,_.position.y=0,_.castShadow=!1,n.add(_);let S=An(new ae(new Mn(d*.45,.14,16,32),g));S.position.set(d+.1,-Math.min(1.5,u*.4),0),n.add(S),c=u;break}case"sponge":{Nt(n,s,.3,r,Te.scrubber(),0,-.15,0,.08,.6),Nt(n,s,.9,r,Te.sponge(),0,-.75,0,.18,.5),n.userData.squish=!0,c=1.2;break}case"cookie":{let d=Math.min(s,r)*.62,u=new Zt(d,d*.97,.45,48,2),f=u.attributes.position;for(let x=0;x<f.count;x++){let p=f.getX(x),m=f.getZ(x),_=Math.atan2(m,p),S=1+Math.sin(_*7+h*10)*.025+Math.sin(_*13)*.015;f.setX(x,p*S),f.setZ(x,m*S)}u.computeVertexNormals(),_c(u,.6);let g=An(new ae(u,Te.cookie()));g.position.y=-.225,n.add(g),c=.45;break}case"shelf":{Nt(n,s,.4,r,Te.woodBirch(),0,-.2,0,.05,.35);let d=new pt({color:15263982,metalness:1,roughness:.25});[-1,1].forEach(u=>{let f=An(new ae(new nn(.12,1.4,.12),d));f.position.set(u*(s/2-.6),-1.1,-r/2+.3),n.add(f);let g=An(new ae(new nn(.12,.12,r-.4),d));g.position.set(u*(s/2-.6),-.46,0),n.add(g)}),c=.4;break}case"roof":{Nt(n,s+.5,.45,r+.5,Te.roof(),0,-.225,0,.08,.35);let d=a?l:4,u=[16773598,16769254,14872831,16774855][Math.floor(h*4)];Nt(n,s,d,r,Te.stucco(u),0,-.45-d/2,0,.1,.3);let f=Te.emissive(16757862,1.4),g=Te.painted(16777215),x=Math.min(3,Math.floor(d/2.6));for(let p=0;p<x;p++)for(let m of[1,-1]){let _=Math.max(1,Math.floor(s/2.4));for(let S=0;S<_;S++){let y=-s/2+(S+.5)*(s/_),E=ht(h*50+p,S+m)>.35,b=new ae(new nn(1,1.25,.1),g);b.position.set(y,-1.8-p*2.6,m*(r/2+.03)),n.add(b);let R=new ae(new yn(.8,1.05),E?f:Te.glossy(3162202));R.position.set(y,-1.8-p*2.6,m*(r/2+.085)),m<0&&(R.rotation.y=Math.PI),n.add(R)}}c=.45+d;break}case"chimney":{let d=a?l:4;Nt(n,s+.3,.35,r+.3,Te.brick(),0,-.175,0,.05,.6),Nt(n,s,d,r,Te.brick(),0,-.35-d/2,0,.05,.6),c=d+.35;break}case"cloud":{let d=ru(h);d.scale.set(s/4.5,.9,r/2.2),d.position.y=-.7,n.add(d),c=1;break}case"balloon":{Nt(n,s,.9,r,Te.wicker(),0,-.45,0,.15,.6);let d=Of();d.scale.setScalar(.9),d.position.y=.2,d.children.forEach(u=>{u.geometry&&u.geometry.type==="SphereGeometry"&&(u.position.y=6.2)}),n.add(d),c=.9;break}case"island":{Nt(n,s,.6,r,Te.grass(),0,-.3,0,.25,.3);let d=Math.max(s,r)*.9,u=new $r(Math.max(s,r)*.6,d,9,6);u.rotateX(Math.PI);let f=u.attributes.position;for(let x=0;x<f.count;x++){let p=f.getX(x),m=f.getY(x),_=f.getZ(x),S=ht(Math.round(p*3),Math.round(_*3+m*5));f.setXYZ(x,p*(s/Math.max(s,r))*(.9+S*.25),m,_*(r/Math.max(s,r))*(.9+S*.25))}u.computeVertexNormals(),_c(u,.25);let g=An(new ae(u,Te.rock()));g.position.y=-.55-d/2,n.add(g),kv(n,s-.4,r-.4,t,h,e.night),c=.6;break}case"crystal":{let d=An(new ae(kf(s,.7,r,.18,4),Te.crystal(e.night?10479871:12120319)),!0,!0);d.position.y=-.35,n.add(d);for(let u=0;u<3;u++){let f=An(new ae(new oo(.5+u*.15,0),Te.crystal(12888319)),!0,!1);f.scale.set(.6,1.6,.6),f.position.set((ht(h,u)-.5)*s*.6,-1.4-u*.6,(ht(u,h)-.5)*r*.6),f.rotation.y=u,n.add(f)}c=.7;break}case"bubble":{let d=new ae(new Jt(1,48,32),Te.bubble());d.scale.set(s*.62,.55,r*.62),d.position.y=-.4,n.add(d);let u=new ae(new Mn(s*.5,.06,10,48),Te.emissive(10479871,1.2));u.rotation.x=Math.PI/2,u.position.y=-.05,n.add(u),c=.8;break}default:Nt(n,s,c,r,Te.painted(14540253),0,-c/2,0)}return{group:n,collideH:c}}var Mc=null,qf={time:{value:0}};function Yf(i){qf.time.value=i}function kv(i,e,t,n,s,r){let o={ultra:70,high:45,medium:18,low:0}[n]||0,a=Math.floor(e*t*o);if(!a)return;Mc||(Mc=new pt({vertexColors:!0,side:sn,roughness:.7}),Mc.onBeforeCompile=b=>{b.uniforms.time=qf.time,b.vertexShader=`uniform float time;
`+b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
        float bend = position.y * position.y;
        transformed.x += sin(time * 1.8 + wp.x * 0.7 + wp.z * 0.5) * 0.12 * bend;
        transformed.z += cos(time * 1.4 + wp.z * 0.8) * 0.08 * bend;`)});let l=new yn(.07,.42,1,4),c=l.attributes.position,h=new Float32Array(c.count*3),d=new re(r?2054730:3107626),u=new re(r?8380615:11921514),f=new re;for(let b=0;b<c.count;b++){let R=c.getY(b)+.21;c.setX(b,c.getX(b)*(1-R/.42)),c.setY(b,R),f.copy(d).lerp(u,R/.42),h[b*3]=f.r,h[b*3+1]=f.g,h[b*3+2]=f.b}l.setAttribute("color",new Ct(h,3));let g=new Zs(l,Mc,a),x=new at,p=new Pn,m=new $n,_=new P,S=new P;for(let b=0;b<a;b++){_.set((ht(b,s)-.5)*e,0,(ht(s,b)-.5)*t),m.set((ht(b,3)-.5)*.4,ht(b,4)*Math.PI,(ht(b,5)-.5)*.4),p.setFromEuler(m);let R=.6+ht(b,6)*.8;S.set(R,R,R),x.compose(_,p,S),g.setMatrixAt(b,x)}g.receiveShadow=!0,i.add(g);let y=new mt({color:r?10479871:16777215,emissive:r?6273279:0,emissiveIntensity:r?1.2:0,roughness:.5,sheen:.5}),E=Te.matte(16765286,.6);for(let b=0;b<Math.floor(e*t*.25);b++){let R=new Qe;for(let w=0;w<5;w++){let A=new ae(new Jt(.07,8,6),y);A.scale.set(1,.4,1.6),A.position.set(Math.cos(w*1.256)*.08,0,Math.sin(w*1.256)*.08),A.rotation.y=-w*1.256,R.add(A)}let v=new ae(new Jt(.05,8,6),E);R.add(v),R.position.set((ht(b,s*9)-.5)*e,.22,(ht(s*9,b)-.5)*t),i.add(R)}}var Zf=`attribute float size; attribute vec4 pcolor; varying vec4 vColor;
void main(){ vColor = pcolor; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * (420.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,Jf=`uniform sampler2D map; varying vec4 vColor;
void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vColor.rgb, vColor.a * t.a); if (gl_FragColor.a < 0.003) discard; }`,Zo=class{constructor(e=600,t=!0){this.max=e,this.items=[];let n=new Tt;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),n.setAttribute("position",new Ct(this.pos,3)),n.setAttribute("pcolor",new Ct(this.col,4)),n.setAttribute("size",new Ct(this.size,1)),this.mat=new xt({vertexShader:Zf,fragmentShader:Jf,uniforms:{map:{value:_s()}},transparent:!0,depthWrite:!1,blending:t?Tn:ji}),this.points=new $s(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5}emit(e){this.items.length>=this.max&&this.items.shift(),this.items.push(Object.assign({life:1,max:1,size:.3,grow:0,drag:1.5,grav:0,color:new re(1,1,1),alpha:1},e,{max:e.life||1}))}burst(e,t,n={}){for(let s=0;s<t;s++){let r=Math.random()*Math.PI*2,o=Math.random()*2-1,a=(n.speed||4)*(.4+Math.random()*.6),l=Math.sqrt(1-o*o);this.emit(Object.assign({},n,{p:e.clone().add(new P((Math.random()-.5)*(n.spread||.3),(Math.random()-.5)*(n.spread||.3),(Math.random()-.5)*(n.spread||.3))),v:new P(Math.cos(r)*l*a,(n.up?Math.abs(o):o)*a+(n.lift||0),Math.sin(r)*l*a),life:(n.life||.8)*(.6+Math.random()*.4),size:(n.size||.3)*(.6+Math.random()*.8)}))}}update(e){let t=this.items;for(let s=t.length-1;s>=0;s--){let r=t[s];if(r.life-=e,r.life<=0){t.splice(s,1);continue}r.v.multiplyScalar(Math.max(0,1-r.drag*e)),r.v.y-=r.grav*e,r.p.addScaledVector(r.v,e)}for(let s=0;s<this.max;s++){let r=t[s];if(!r){this.size[s]=0;continue}let o=r.life/r.max;this.pos[s*3]=r.p.x,this.pos[s*3+1]=r.p.y,this.pos[s*3+2]=r.p.z,this.col[s*4]=r.color.r,this.col[s*4+1]=r.color.g,this.col[s*4+2]=r.color.b,this.col[s*4+3]=r.alpha*Math.min(1,o*3)*Math.min(1,(1-o)*12+.2),this.size[s]=r.size*(1+r.grow*(1-o))}let n=this.points.geometry;n.attributes.position.needsUpdate=n.attributes.pcolor.needsUpdate=n.attributes.size.needsUpdate=!0}};function $f(i,e){let t={ultra:260,high:180,medium:90,low:40}[e]||60,n=new Tt,s=new Float32Array(t*3),r=new Float32Array(t*4),o=new Float32Array(t),a=[],l=i.night?[new re(10485728),new re(16769930),new re(12034047)]:[new re(16773840),new re(16777215),new re(16766696)];for(let u=0;u<t;u++){a.push([Math.random()*60-30,Math.random()*24-6,Math.random()*60-30,Math.random()*10]);let f=l[u%l.length];r[u*4]=f.r,r[u*4+1]=f.g,r[u*4+2]=f.b,r[u*4+3]=i.night?.9:.45,o[u]=(i.night?.22:.12)*(.5+Math.random())}n.setAttribute("position",new Ct(s,3)),n.setAttribute("pcolor",new Ct(r,4)),n.setAttribute("size",new Ct(o,1));let c=new xt({vertexShader:Zf,fragmentShader:Jf,uniforms:{map:{value:_s()}},transparent:!0,depthWrite:!1,blending:Tn}),h=new $s(n,c);return h.frustumCulled=!1,{points:h,update:(u,f)=>{for(let g=0;g<t;g++){let x=a[g],p=(S,y)=>y+((S-y)%60+90)%60-30,m=x[0]+Math.sin(u*.3+x[3])*1.5+u*.2,_=x[2]+Math.cos(u*.25+x[3])*1.5;s[g*3]=p(m,f.x),s[g*3+1]=f.y+x[1]+Math.sin(u*.5+x[3]*2)*.8,s[g*3+2]=p(_,f.z),i.night&&(r[g*4+3]=.5+.5*Math.sin(u*2+x[3]*3))}n.attributes.position.needsUpdate=!0,i.night&&(n.attributes.pcolor.needsUpdate=!0)}}}function Kf(i){let e=new Qe,n={bedroom:[16766624,16757702,16773312],kitchen:[16769162,16762016,16777215],shelf:[14268671,16757728,16773328],rooftops:[16761994,16752563,16773312],dreamsea:[10467583,14264575,8380671],lagoon:[8388576,10467583,16773280]}[i.theme]||[16777215];for(let s=0;s<46;s++){let r=new Ii({map:yf(),color:n[s%n.length],transparent:!0,opacity:.12+ht(s,2)*.16,depthWrite:!1,blending:Tn,fog:!1}),o=new Wi(r),a=ht(s,1)*Math.PI*2,l=110+ht(s,3)*80;o.position.set(Math.cos(a)*l,-10+ht(s,4)*60,Math.sin(a)*l-50);let c=6+ht(s,5)*16;o.scale.set(c,c,1),e.add(o)}return e}function jf(i){let e;switch(i.type){case"plant":e=Lf();break;case"mug":e=Nf(i.color||7324639);break;case"block":e=Uf(i.color||16752451,i.letter);break;case"cloud":e=ru(ht(i.x,i.z));break;case"coral":e=Ff(i.color||16744355);break;default:e=new Qe}return e.position.set(i.x,i.y,i.z),e.scale.setScalar(i.s||1),e.rotation.y=i.ry!==void 0?i.ry:ht(i.x,i.z)*Math.PI*2,e}var Oe=(i=0,e=0,t=0)=>new P(i,e,t),kn=.001,ou=(i,e)=>{let t=e-i;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},Sc=class{constructor(e,t,n,s,r,o,a){this.R=e,this.input=t,this.L=n,this.index=s,this.ab=r,this.hooks=a,this.savedStars=o.slice(),this.time=0,this.clock=0,this.state="play",this.stats={fish:0,bops:0,falls:0,time:0},this.build()}build(){let e=this.L,t=this.R.quality,n=this.scene=new hs;this.camera=new an(55,innerWidth/innerHeight,.1,900),this.sky=Vf(e),n.add(this.sky.mesh),n.fog=new Vr(e.fog,70,(e.fogFar||150)*1.4),n.environment=Gf(this.R.r,this.sky,e),n.environmentIntensity=e.night?.75:.6;let s=new ho(this.sky.top,new re(e.floor.color),e.night?.55:.35);n.add(s);let r=this.sun=new nr(e.night?11190271:16773596,e.night?2.6:3.6);r.castShadow=!0;let o=this.R.shadowSize();r.shadow.mapSize.set(o,o);let a=r.shadow.camera;a.left=-24,a.right=24,a.top=24,a.bottom=-24,a.near=1,a.far=140,r.shadow.bias=-4e-4,r.shadow.normalBias=.03,r.shadow.radius=4,n.add(r,r.target);let l=new nr(e.night?10457087:16765152,e.night?.9:.8);l.position.set(-20,15,30),n.add(l),this.floor=Wf(e),n.add(this.floor.group),this.ambient=$f(e,t),n.add(this.ambient.points),n.add(Kf(e)),this.sparks=new Zo(700,!0),this.puffs=new Zo(400,!1),n.add(this.sparks.points,this.puffs.points),this.solids=[],this.platforms=e.platforms.map(h=>{let d=Xf(h,e,t);d.group.position.set(h.x,h.y,h.z),n.add(d.group);let u={min:Oe(),max:Oe(),active:!0,kind:"platform",delta:Oe(),plat:null},f={p:h,vis:d,solid:u,base:Oe(h.x,h.y,h.z),h:d.collideH,cur:Oe(h.x,h.y,h.z),crumble:0,crumbleT:0,squish:0};return u.plat=f,this.setSolid(f),this.solids.push(u),f}),this.crates=e.crates.map(h=>{let d=If();d.position.set(h.x,h.y,h.z),d.rotation.y=(h.x*7+h.z)%.3,n.add(d);let u={min:Oe(h.x-.5,h.y,h.z-.5),max:Oe(h.x+.5,h.y+1,h.z+.5),active:!0,kind:"crate",delta:Oe()},f={c:h,mesh:d,solid:u,broken:!1};return u.crate=f,this.solids.push(u),f}),this.fish=e.fish.map((h,d)=>{let u=vc();return u.position.set(h[0],h[1],h[2]),n.add(u),{m:u,pos:Oe(...h),taken:!1,ph:d*.37,out:0}});let c=e.stars.map(h=>({pos:Oe(...h)}));this.crates.forEach(h=>{h.c.item==="star"&&(h.starIndex=c.length,c.push({pos:Oe(h.c.x,h.c.y+1,h.c.z),hidden:!0}))}),this.stars=c.map((h,d)=>{let u=Tf();return u.position.copy(h.pos),this.savedStars[d]&&u.traverse(f=>{f.material&&(f.material=f.material.clone(),f.material.transparent=!0,f.material.opacity=.4)}),u.visible=!h.hidden,n.add(u),{m:u,pos:h.pos.clone(),taken:!1,hidden:!!h.hidden,i:d,out:0}}),this.runStars=this.stars.map(()=>!1),this.heartsPick=e.hearts.map(h=>{let d=xr();return d.position.set(...h),n.add(d),{m:d,pos:Oe(...h),taken:!1}}),this.enemies=(e.enemies||[]).map((h,d)=>{let u=h.type==="roomba"?Rf():Af();return u.position.set(h.x,h.y,h.z),n.add(u),{e:h,m:u,type:h.type,start:Oe(h.x,h.y,h.z),pos:Oe(h.x,h.y,h.z),t:d*1.3,dir:1,alive:!0,deadT:0,stun:0,chase:!1,u:0}}),this.hazards=e.hazards.map(h=>{let d=Df(h.w,h.d);return d.position.set(h.x,h.y,h.z),n.add(d),{h,min:Oe(h.x-h.w/2,h.y,h.z-h.d/2),max:Oe(h.x+h.w/2,h.y+.55,h.z+h.d/2)}}),this.checkpoints=e.checkpoints.map(h=>{let d=wf();return d.position.set(...h),n.add(d),{m:d,pos:Oe(...h),on:!1}}),this.signs=e.signs.map(h=>{let d=Pf(h.text);return d.position.set(h.x,h.y,h.z),d.rotation.y=h.ry||0,n.add(d),{m:d,pos:Oe(h.x,h.y,h.z),text:h.text}}),this.updrafts=e.updrafts.map(h=>{let d=new Qe,u=new En({color:12580095,transparent:!0,opacity:.35,blending:Tn,depthWrite:!1}),f=[];for(let x=0;x<6;x++){let p=new ae(new Mn(h.r,.04,8,48),u);p.rotation.x=Math.PI/2,d.add(p),f.push(p)}let g=new ae(new Mn(h.r*.85,.16,16,48),new mt({color:10479871,roughness:.15,clearcoat:1,emissive:4176127,emissiveIntensity:1.6}));return g.rotation.x=Math.PI/2,g.position.y=h.y0-.2,d.add(g),d.position.set(h.x,0,h.z),n.add(d),{u:h,g:d,rings:f}}),(e.decor||[]).forEach(h=>n.add(jf(h))),this.goal=Cf(),this.goal.position.set(...e.goal),n.add(this.goal),this.rig=Ef(),n.add(this.rig.root),this.p={pos:Oe(...e.spawn),vel:Oe(),yaw:Math.PI,grounded:!1,ground:null,coyote:0,buffer:0,canDouble:!1,dashT:0,dashCD:0,dashUsed:!1,dashDir:Oe(),pound:0,poundHang:0,invuln:0,hearts:Ie.maxHearts,jumpHeld:!1,glide:!1,lastSafe:Oe(...e.spawn),inUpdraft:!1},this.respawn=Oe(...e.spawn),this.cam={yaw:0,pitch:.38,dist:8.5,target:Oe(...e.spawn),idle:0,fov:55},this.combo=0,this.comboT=0,this.R.build(n,this.camera,{bloom:e.night?.6:.35,threshold:e.night?.8:1.05,exposure:e.night?1:.9,warmth:e.night?-.01:.03}),this.updateCamera(1,!0)}setSolid(e){let{p:t,cur:n,h:s}=e;e.solid.min.set(n.x-t.w/2,n.y-s,n.z-t.d/2),e.solid.max.set(n.x+t.w/2,n.y,n.z+t.d/2)}dispose(){this.scene.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.scene.environment&&this.scene.environment.dispose()}overlap(e,t,n,s){let r=Ie.radius;return e+r>s.min.x+kn&&e-r<s.max.x-kn&&t+Ie.height>s.min.y+kn&&t<s.max.y-kn&&n+r>s.min.z+kn&&n-r<s.max.z-kn}breakCrate(e){if(e.broken)return;e.broken=!0,e.solid.active=!1,Je.crumble(),Je.stomp();let t=Oe(e.c.x,e.c.y+.5,e.c.z);if(this.puffs.burst(t,22,{color:new re(13081192),speed:6,life:.9,size:.35,grav:14,drag:1,alpha:1,up:!0,lift:3}),this.sparks.burst(t,14,{color:new re(16769704),speed:5,life:.6,size:.25}),e.mesh.userData.breakT=.001,e.c.item==="star"){let n=this.stars[e.starIndex];n.hidden=!1,n.m.visible=!0,n.pop=1}else if(e.c.item==="heart"){let n=xr();n.position.copy(t).add(Oe(0,.6,0)),this.scene.add(n),this.heartsPick.push({m:n,pos:n.position.clone(),taken:!1})}else for(let n=0;n<5;n++){let s=n/5*Math.PI*2,r=t.clone().add(Oe(Math.cos(s)*1.1,.4,Math.sin(s)*1.1)),o=vc();o.position.copy(r),this.scene.add(o),this.fish.push({m:o,pos:r,taken:!1,ph:n,out:0,bonus:!0})}}hurt(e){let t=this.p;if(t.invuln>0||this.state!=="play")return;t.hearts--,t.invuln=1.6,Je.hurt();let n=t.pos.clone().sub(e).setY(0);n.lengthSq()<.01&&n.set(0,0,1),n.normalize().multiplyScalar(7),t.vel.set(n.x,8,n.z),t.dashT=0,t.pound=0,t.grounded=!1,this.rig.impulse(-6),this.sparks.burst(t.pos.clone().add(Oe(0,.6,0)),12,{color:new re(16748459),speed:5,life:.6,size:.3}),t.hearts<=0&&this.fall(!0),this.hudDirty=!0}fall(e=!1){this.state==="play"&&(this.state="respawning",this.stats.falls++,e||(Je.fall(),this.puffs.burst(this.p.pos.clone(),26,{color:new re(this.L.floor.color).lerp(new re(16777215),.4),speed:7,life:1,size:.45,grav:16,up:!0,lift:4}),this.p.hearts--),this.hooks.fade(!0),this.respawnT=.55)}finishRespawn(){let e=this.p;e.hearts<=0&&(e.hearts=Ie.maxHearts,this.hooks.toast("Bl\xE5haj needs a cuddle!","Hearts refilled at the last lamp")),e.pos.copy(this.respawn),e.vel.set(0,0,0),e.dashT=0,e.pound=0,e.invuln=1,e.grounded=!1,this.cam.target.copy(e.pos),this.updateCamera(1,!0),this.state="play",this.hudDirty=!0,this.hooks.fade(!1)}update(e){if(this.clock+=e,this.attract){this.time+=e,this.cam.yaw+=e*.12,this.cam.pitch=.22,this.cam.dist=6.5,this.visuals(e),this.input.endFrame();return}if(this.state==="play"||this.state==="respawning"){this.acc=(this.acc||0)+Math.min(e,.1);let t=this.input,n=this.edge=this.edge||{jump:!1,dash:!1,flop:!1};for(n.jump=n.jump||t.jumpPressed(),n.dash=n.dash||t.dashPressed(),n.flop=n.flop||t.flopPressed();this.acc>=Ie.dt;)this.step(Ie.dt),this.acc-=Ie.dt,n.jump=n.dash=n.flop=!1}else this.state==="win"&&(this.winT+=e,this.p.pos.lerp(Oe(this.L.goal[0],this.L.goal[1]+.75,this.L.goal[2]),Math.min(1,e*4)),this.p.yaw+=e*2.5,Math.random()<.5&&this.sparks.emit({p:this.goal.position.clone().add(Oe((Math.random()-.5)*4,3+Math.random()*2,(Math.random()-.5)*4)),v:Oe((Math.random()-.5)*2,-1.5,(Math.random()-.5)*2),life:2,size:.35,color:new re().setHSL(Math.random(),.8,.7),drag:.2}),this.winT>2.4&&!this.winSent&&(this.winSent=!0,this.hooks.complete(this.result())));this.visuals(e),this.input.endFrame()}step(e){let t=this.p,n=this.input,s=this.L;this.time+=e,this.state==="play"&&(this.stats.time+=e),this.state==="respawning"&&(this.respawnT-=e,this.respawnT<=0&&this.finishRespawn());for(let p of this.platforms){let m=p.cur.clone(),_=p.p.move;if(_){let S=Math.sin((this.time/_.period+(_.phase||0))*Math.PI*2);p.cur.set(p.base.x+(_.dx||0)*S,p.base.y+(_.dy||0)*S,p.base.z+(_.dz||0)*S)}p.p.type==="crumble"&&(p.crumble===1?(p.crumbleT-=e,p.crumbleT<=0&&(p.crumble=2,p.crumbleT=3,p.solid.active=!1,Je.crumble(),this.puffs.burst(p.cur.clone(),16,{color:new re(13144160),speed:4,life:.8,size:.3,grav:12}))):p.crumble===2&&(p.crumbleT-=e,p.crumbleT<=0&&(p.crumble=0,p.solid.active=!0,p.respawnFx=1))),p.solid.delta.subVectors(p.cur,m),this.setSolid(p)}if(t.grounded&&t.ground&&t.ground.active&&t.pos.add(t.ground.delta),this.state!=="play")return;let r=n.move(),o=Oe(-Math.sin(this.cam.yaw),0,-Math.cos(this.cam.yaw)),a=Oe(Math.cos(this.cam.yaw),0,-Math.sin(this.cam.yaw)),l=o.multiplyScalar(r.y).add(a.multiplyScalar(r.x)),c=Math.min(1,l.length());if(t.coyote=t.grounded?Ie.coyote:t.coyote-e,t.buffer=this.edge.jump?Ie.jumpBuffer:t.buffer-e,t.dashCD-=e,t.invuln-=e,this.edge.flop&&!t.grounded&&this.ab.flop&&!t.pound&&t.dashT<=0&&(t.pound=1,t.poundHang=Ie.poundHang,t.vel.set(0,0,0),this.rig.spin=Math.PI*2,Je.dash()),this.edge.dash&&this.ab.dash&&t.dashCD<=0&&!t.dashUsed&&!t.pound){let p=c>.2?l.clone().normalize():Oe(Math.sin(t.yaw),0,Math.cos(t.yaw));t.dashDir.copy(p),t.dashT=Ie.dashTime,t.dashCD=Ie.dashCooldown,t.grounded||(t.dashUsed=!0),this.rig.spin=Math.PI*2,Je.dash(),this.cam.fovKick=8}if(t.dashT>0)t.dashT-=e,t.vel.x=t.dashDir.x*Ie.dashSpeed,t.vel.z=t.dashDir.z*Ie.dashSpeed,t.vel.y=0,Math.random()<.7&&this.sparks.emit({p:t.pos.clone().add(Oe(0,.45,0)),v:Oe(0,0,0),life:.35,size:.4,color:new re(12574975),alpha:.7}),t.dashT<=0&&(t.vel.x*=.45,t.vel.z*=.45);else if(t.pound)t.vel.x=0,t.vel.z=0,t.poundHang>0?(t.poundHang-=e,t.vel.y=0):t.vel.y=-Ie.poundSpeed;else{let p=l.clone().setLength(c*Ie.run),m=t.grounded?Ie.groundAccel:Ie.airAccel,_=Oe(t.vel.x,0,t.vel.z),S=p.clone().sub(_),y=m*e;S.length()>y&&S.setLength(y),_.add(S),t.grounded&&c<.05&&_.multiplyScalar(Math.max(0,1-Ie.groundFriction*e)),t.vel.x=_.x,t.vel.z=_.z,t.buffer>0&&t.coyote>0?(t.vel.y=Ie.jump,t.grounded=!1,t.coyote=0,t.buffer=0,t.jumpHeld=!0,t.canDouble=this.ab.doubleJump,Je.jump(),this.rig.impulse(4),this.puffs.burst(t.pos.clone(),6,{color:new re(16777215),speed:2.5,life:.5,size:.35,alpha:.6})):t.buffer>0&&!t.grounded&&t.canDouble&&(t.vel.y=Ie.doubleJump,t.canDouble=!1,t.buffer=0,t.jumpHeld=!0,Je.doubleJump(),this.rig.impulse(5),this.rig.spin=Math.PI*2,this.sparks.burst(t.pos.clone().add(Oe(0,.2,0)),14,{color:new re(13625087),speed:4,life:.5,size:.28})),t.jumpHeld&&!n.jumpHeld()&&(t.vel.y>0&&(t.vel.y*=Ie.jumpCut),t.jumpHeld=!1),t.vel.y<=0&&(t.jumpHeld=!1),t.vel.y-=Ie.gravity*e,t.vel.y<-Ie.maxFall&&(t.vel.y=-Ie.maxFall),t.glide=!1,this.ab.glide&&!t.grounded&&t.vel.y<0&&n.jumpHeld()&&!t.jumpHeld&&(t.vel.y<-Ie.glideFall&&(t.vel.y+=(-Ie.glideFall-t.vel.y)*Math.min(1,e*14)),t.glide=!0)}t.inUpdraft=!1;for(let p of this.updrafts)if(Math.hypot(t.pos.x-p.u.x,t.pos.z-p.u.z)<p.u.r&&t.pos.y>p.u.y0-.5&&t.pos.y<p.u.y1+.5){t.inUpdraft=!0;let _=t.pos.y>p.u.y1-1.5?.35:1;t.vel.y=Math.min(Ie.updraftMax*_+1.5,t.vel.y+Ie.updraft*e),t.canDouble=this.ab.doubleJump,t.dashUsed=!1,t.pound=0}let h=t.grounded,d=-t.vel.y,u=this.solids.filter(p=>p.active);for(let p of["x","z"]){let m=t.pos[p]+t.vel[p]*e,_=t.pos.clone();_[p]=m;for(let S of u){if(!this.overlap(_.x,_.y,_.z,S)||this.overlap(t.pos.x,t.pos.y,t.pos.z,S))continue;if(S.kind==="crate"&&t.dashT>0){this.breakCrate(S.crate);continue}let y=S.max.y-_.y;if(t.grounded&&y>0&&y<=.4&&!u.some(E=>E!==S&&this.overlap(_.x,S.max.y+kn,_.z,E))){_.y=S.max.y+kn;continue}_[p]=t.vel[p]>0?S.min[p]-Ie.radius-kn*2:S.max[p]+Ie.radius+kn*2,t.vel[p]=0,t.dashT>0&&(t.dashT=0,this.rig.impulse(-3))}t.pos.copy(_)}let f=t.pos.y+t.vel.y*e;t.grounded=!1;let g=null;for(let p of u)if(this.overlap(t.pos.x,f,t.pos.z,p)&&!this.overlap(t.pos.x,t.pos.y,t.pos.z,p))if(t.vel.y<=0){if(p.kind==="crate"&&t.pound){this.breakCrate(p.crate);continue}f=p.max.y,g=p}else p.kind==="crate"&&this.breakCrate(p.crate),f=p.min.y-Ie.height-kn,t.vel.y=0;if(t.pos.y=f,g){t.grounded=!0,t.ground=g,t.canDouble=!1,t.dashUsed=!1;let p=g.plat,m=!!t.pound;h||this.onLand(d,g),p&&p.p.type==="bounce"?(t.vel.y=m?Ie.superBounce:n.jumpHeld()?Ie.bounce:Ie.bounce*.85,t.grounded=!1,t.pound=0,t.canDouble=this.ab.doubleJump,t.jumpHeld=!1,p.squish=1,Je.bounce(),m&&Je.star(),this.rig.impulse(m?9:6),this.sparks.burst(t.pos.clone(),m?30:12,{color:new re(m?16769126:16774064),speed:m?9:5,life:.7,size:.3})):(t.vel.y=0,p&&p.p.type==="crumble"&&p.crumble===0&&(p.crumble=1,p.crumbleT=.55),(!p||!p.p.move)&&t.lastSafe.copy(t.pos))}for(let p of u){if(!this.overlap(t.pos.x,t.pos.y,t.pos.z,p))continue;let m=[["x",p.max.x-(t.pos.x-Ie.radius),1],["x",t.pos.x+Ie.radius-p.min.x,-1],["z",p.max.z-(t.pos.z-Ie.radius),1],["z",t.pos.z+Ie.radius-p.min.z,-1],["y",p.max.y-t.pos.y,1],["y",t.pos.y+Ie.height-p.min.y,-1]].sort((E,b)=>E[1]-b[1]),[_,S,y]=m[0];t.pos[_]+=(S+kn*2)*y,_==="y"&&y>0&&(t.grounded=!0,t.ground=p,t.vel.y=Math.max(0,t.vel.y))}Math.hypot(t.vel.x,t.vel.z)>.5&&!t.pound&&(t.yaw+=ou(t.yaw,Math.atan2(t.vel.x,t.vel.z))*Math.min(1,e*14)),this.interact(e),t.pos.y<s.floor.y+.3&&this.fall()}onLand(e,t){let n=this.p;if(this.rig.impulse(-Math.min(8,e*.35)),n.pound){n.pound=0,Je.pound(),this.cam.shake=.35,this.puffs.burst(n.pos.clone().add(Oe(0,.1,0)),26,{color:new re(16777215),speed:8,life:.6,size:.45,alpha:.7,drag:3});for(let s of this.enemies)s.alive&&s.pos.distanceTo(n.pos)<2.6&&this.defeat(s)}else e>6&&(Je.land(),this.puffs.burst(n.pos.clone().add(Oe(0,.05,0)),8,{color:new re(16777215),speed:3,life:.45,size:.35,alpha:.5,drag:4}))}defeat(e){if(!e.alive)return;e.alive=!1,e.deadT=0,this.stats.bops++,Je.stomp(),this.sparks.burst(e.pos.clone().add(Oe(0,.5,0)),20,{color:new re(16777215),speed:6,life:.7,size:.35}),this.puffs.burst(e.pos.clone().add(Oe(0,.5,0)),14,{color:new re(13222872),speed:4,life:.8,size:.5,alpha:.8}),this.hooks.pop(e.type==="roomba"?"Vroom\u2026 zzz":"Bop!");let t=vc(),n=e.pos.clone().add(Oe(0,1.2,0));t.position.copy(n),this.scene.add(t),this.fish.push({m:t,pos:n,taken:!1,ph:0,out:0,bonus:!0})}interact(e){let t=this.p,n=t.pos.clone().add(Oe(0,Ie.height/2,0));this.comboT-=e,this.comboT<=0&&(this.combo=0);for(let o of this.fish)o.taken||o.pos.distanceToSquared(n)<.95&&(o.taken=!0,o.out=.001,this.stats.fish++,this.combo++,this.comboT=.9,Je.collect(this.combo),this.sparks.burst(o.pos,8,{color:new re(16762219),speed:3,life:.45,size:.22}),this.stats.fish%30===0&&t.hearts<Ie.maxHearts&&(t.hearts++,Je.heart(),this.hooks.pop("+1 \u{1F499}")),this.hudDirty=!0);for(let o of this.stars)if(!(o.taken||o.hidden)&&o.pos.distanceToSquared(n)<1.3){o.taken=!0,o.out=.001,this.runStars[o.i]=!0,Je.star(),this.sparks.burst(o.pos,40,{color:new re(16767050),speed:7,life:1,size:.35});let a=this.stars.filter(l=>l.taken||this.savedStars[l.i]).length;this.hooks.star(o.i),this.hooks.toast(this.savedStars[o.i]?"Starfish again!":"Starfish found!",`${a} / ${this.stars.length} in this level`),this.hudDirty=!0}for(let o of this.heartsPick)o.taken||o.pos.distanceToSquared(n)<1.1&&(o.taken=!0,o.m.visible=!1,t.hearts=Math.min(Ie.maxHearts,t.hearts+1),Je.heart(),this.sparks.burst(o.pos,16,{color:new re(16748464),speed:4,life:.6,size:.3}),this.hudDirty=!0);for(let o of this.checkpoints)o.on||Math.hypot(o.pos.x-t.pos.x,o.pos.z-t.pos.z)<1.8&&Math.abs(o.pos.y-t.pos.y)<1.5&&(this.checkpoints.forEach(a=>{a!==o&&a.on&&(a.on="old")}),o.on=!0,o.m.userData.activate(),this.respawn.set(o.pos.x,o.pos.y+.05,o.pos.z+.01),this.respawn.x+=o.pos.x>0?-1.2:1.2,Je.checkpoint(),this.sparks.burst(o.pos.clone().add(Oe(0,1.5,0)),24,{color:new re(16765562),speed:4,life:.9,size:.3}),this.hooks.toast("Lamp lit!","You'll come back here if you tumble"));for(let o of this.hazards){let a=Ie.radius;t.pos.x+a>o.min.x&&t.pos.x-a<o.max.x&&t.pos.z+a>o.min.z&&t.pos.z-a<o.max.z&&t.pos.y<o.max.y&&t.pos.y+Ie.height>o.min.y&&t.invuln<=0&&(this.hooks.pop("Ouch! Toy brick!"),this.hurt(Oe((o.min.x+o.max.x)/2,o.min.y,(o.min.z+o.max.z)/2)),t.vel.y=9)}for(let o of this.enemies){if(!o.alive)continue;let a=o.type==="roomba",l=a?.75:.5,c=a?.45:1,h=t.pos.x-o.pos.x,d=t.pos.z-o.pos.z;if(Math.hypot(h,d)>l+Ie.radius||t.pos.y>o.pos.y+c+.05||t.pos.y+Ie.height<o.pos.y)continue;let f=t.vel.y<0&&t.pos.y>o.pos.y+c*.45;if(t.pound){this.defeat(o);continue}if(f){a&&o.stun<=0?(o.stun=2,Je.bounce(),this.hooks.pop("Boing! (try a belly flop)"),t.vel.y=Ie.stompBounce*1.1,t.pos.y=o.pos.y+c+.02,t.canDouble=this.ab.doubleJump):a?(t.vel.y=Ie.stompBounce,t.pos.y=o.pos.y+c+.02,Je.bounce()):(this.defeat(o),t.vel.y=this.input.jumpHeld()?Ie.jump*1.05:Ie.stompBounce,t.pos.y=o.pos.y+c+.02,t.canDouble=this.ab.doubleJump,t.dashUsed=!1,this.rig.impulse(5));continue}if(t.dashT>0&&!a){this.defeat(o);continue}if(a&&o.stun>0){let g=Oe(h,0,d).normalize().multiplyScalar(.05);t.pos.add(g);continue}this.hurt(o.pos)}let s=null;for(let o of this.signs)o.pos.distanceTo(t.pos)<3.2&&(s=o.text.replace(`
`," \xB7 "));this.hooks.hint(s);let r=this.goal.position;Math.hypot(r.x-t.pos.x,r.z-t.pos.z)<2&&Math.abs(r.y-t.pos.y)<1.6&&this.win()}win(){this.state==="play"&&(this.state="win",this.winT=0,Je.win(),this.hooks.hint(null),this.sparks.burst(this.goal.position.clone().add(Oe(0,2,0)),70,{color:new re(16757712),speed:9,life:1.4,size:.4}))}result(){return{fish:this.stats.fish,fishTotal:this.L.fish.length,time:this.stats.time,bops:this.stats.bops,falls:this.stats.falls,stars:this.runStars.slice()}}visuals(e){let t=this.clock,n=this.p;for(let a of this.enemies){if(a.t+=e,!a.alive){a.deadT+=e;let f=Math.max(0,1-a.deadT*2.5);a.m.scale.set(1+(1-f)*.6,f,1+(1-f)*.6),f<=0&&(a.m.visible=!1);continue}let l=a.type==="roomba";a.stun-=e;let c=a.e.dx||0,h=a.e.dz||0,d=Math.hypot(c,h)||1;if(a.stun>0)a.m.userData.inner.rotation.y+=e*12;else{let f=null;if(l&&Math.abs(n.pos.y-a.pos.y)<1.2){let S=(n.pos.x-a.start.x)*c/d+(n.pos.z-a.start.z)*h/d;Math.abs((n.pos.x-a.start.x)*h/d-(n.pos.z-a.start.z)*c/d)<3.5&&S>-1&&S<d+1&&(f=Math.max(0,Math.min(1,S/d)))}a.chase=f!==null;let g=(a.e.speed||1.5)*(a.chase?1.5:1)/d;a.chase?a.u+=Math.sign(f-a.u)*Math.min(Math.abs(f-a.u),g*e):(a.u+=a.dir*g*e,a.u>1&&(a.u=1,a.dir=-1),a.u<0&&(a.u=0,a.dir=1));let x=a.start.x+c*a.u,p=a.start.z+h*a.u,m=x-a.pos.x,_=p-a.pos.z;Math.abs(m)+Math.abs(_)>1e-4&&(a.m.rotation.y+=ou(a.m.rotation.y,Math.atan2(m,_))*Math.min(1,e*8)),a.pos.x=x,a.pos.z=p,a.m.userData.inner.rotation.y*=.9}let u=a.m.userData.inner;if(l)a.m.userData.brush.rotation.y+=e*20,u.position.y=Math.abs(Math.sin(a.t*20))*.01;else{let f=Math.abs(Math.sin(a.t*5));u.position.y=f*.35,u.scale.set(1+(1-f)*.12,.88+f*.15,1+(1-f)*.12)}a.m.position.copy(a.pos)}for(let a of this.platforms){let l=a.vis.group;if(l.position.copy(a.cur),a.p.type==="crumble"&&(a.crumble===1&&(l.position.x+=(Math.random()-.5)*.08,l.position.z+=(Math.random()-.5)*.08),a.crumble===2?(l.position.y-=(3-a.crumbleT)*(3-a.crumbleT)*3,l.visible=a.crumbleT>1.2):l.visible=!0,a.respawnFx&&(a.respawnFx=Math.max(0,a.respawnFx-e*3),l.scale.setScalar(1-a.respawnFx*.6))),a.squish>0){a.squish=Math.max(0,a.squish-e*3);let c=Math.sin(a.squish*Math.PI*3)*a.squish*.25;l.scale.set(1+c*.5,1-c,1+c*.5)}}for(let a of this.crates)if(a.mesh.userData.breakT){a.mesh.userData.breakT+=e;let l=Math.max(0,1-a.mesh.userData.breakT*5);a.mesh.scale.set(1+(1-l),l,1+(1-l)),l<=0&&(a.mesh.visible=!1)}for(let a of this.fish){if(a.out){a.out+=e;let l=Math.max(0,1-a.out*4);a.m.position.lerp(n.pos.clone().add(Oe(0,.6,0)),Math.min(1,e*14)),a.m.scale.setScalar(l),l<=0&&(a.m.visible=!1);continue}a.m.rotation.y=t*2.5+a.ph,a.m.position.y=a.pos.y+Math.sin(t*3+a.ph)*.12}for(let a of this.stars){if(a.pop&&(a.pop=Math.max(0,a.pop-e*2),a.m.position.y=a.pos.y+Math.sin((1-a.pop)*Math.PI)*1.2),a.out){a.out+=e,a.m.scale.setScalar(1+a.out*2),a.m.position.y+=e*3,a.m.rotation.y+=e*20,a.out>.5&&(a.m.visible=!1);continue}a.m.rotation.y=t*1.6,a.pop||(a.m.position.y=a.pos.y+Math.sin(t*2)*.15),Math.random()<.08&&!a.hidden&&this.sparks.emit({p:a.pos.clone().add(Oe(Math.random()-.5,Math.random()-.5,Math.random()-.5)),v:Oe(0,.6,0),life:.9,size:.18,color:new re(16769930)})}for(let a of this.heartsPick)a.m.rotation.y=t*2,a.m.position.y=a.pos.y+Math.sin(t*3)*.12;this.goal.userData.heart.rotation.y=t*1.5,this.goal.userData.heart.position.y=2.1+Math.sin(t*2)*.15;for(let a of this.updrafts)a.rings.forEach((l,c)=>{let h=(t*.35+c/a.rings.length)%1;l.position.y=a.u.y0+h*(a.u.y1-a.u.y0),l.scale.setScalar(.6+h*.5),l.material.opacity=.35}),Math.random()<.6&&this.sparks.emit({p:Oe(a.u.x+(Math.random()-.5)*a.u.r*1.6,a.u.y0,a.u.z+(Math.random()-.5)*a.u.r*1.6),v:Oe(0,6+Math.random()*3,0),life:(a.u.y1-a.u.y0)/8,size:.2+Math.random()*.2,color:new re(13629183),drag:0,alpha:.7});n.pos&&this.rig.root.position.copy(n.pos),this.rig.root.rotation.y=n.yaw;let s=Math.min(1,Math.hypot(n.vel.x,n.vel.z)/Ie.run);this.rig.update(e,{speed:s,grounded:n.grounded,vy:n.vel.y,pound:!!n.pound,glide:n.glide,happy:this.state==="win"}),this.rig.root.visible=!(n.invuln>0&&this.state==="play"&&Math.floor(t*20)%2===0);let r=this.L.floor.y;for(let a of this.solids)a.active&&n.pos.x>a.min.x&&n.pos.x<a.max.x&&n.pos.z>a.min.z&&n.pos.z<a.max.z&&a.max.y<=n.pos.y+.05&&(r=Math.max(r,a.max.y));this.rig.blob.position.y=r-n.pos.y+.03;let o=n.pos.y-r;this.rig.blob.material.opacity=Math.max(0,.4-o*.05),this.rig.blob.scale.setScalar(Math.max(.4,1-o*.06)),n.glide&&Math.random()<.5&&this.sparks.emit({p:n.pos.clone().add(Oe((Math.random()-.5)*1.4,.3,(Math.random()-.5)*1.4)),v:Oe(0,-.5,0),life:.6,size:.15,color:new re(14676479),alpha:.7}),this.sparks.update(e),this.puffs.update(e),this.floor.update(t),this.sky.mesh.material.uniforms.time.value=t,Yf(t),this.ambient.update(t,this.camera.position),this.updateCamera(e),this.hudDirty&&(this.hudDirty=!1,this.hooks.hud())}updateCamera(e,t=!1){let n=this.cam,s=this.p,r=this.input,o=r.camDX!==0||r.camDY!==0||r.camTurn()!==0;n.yaw-=r.camDX*.005+r.camTurn()*e*2.4,n.pitch=Do.clamp(n.pitch+r.camDY*.003,.05,1.15),n.idle=o?0:n.idle+e;let a=Math.hypot(s.vel.x,s.vel.z);if(n.idle>1.2&&a>2&&this.state==="play"){let m=Math.atan2(s.vel.x,s.vel.z)+Math.PI,_=ou(n.yaw,m);Math.abs(_)<2&&(n.yaw+=_*Math.min(1,e*.9)*(a/Ie.run))}this.state==="win"&&(n.yaw+=e*.5);let l=s.grounded||s.pos.y<n.target.y-1.5||s.inUpdraft?s.pos.y:n.target.y+(s.pos.y-n.target.y)*.25,c=Oe(s.pos.x,l,s.pos.z);t?n.target.copy(c):(n.target.x+=(c.x-n.target.x)*Math.min(1,e*10),n.target.z+=(c.z-n.target.z)*Math.min(1,e*10),n.target.y+=(c.y-n.target.y)*Math.min(1,e*(s.grounded?6:3)));let h=n.target.clone().add(Oe(0,1.1,0)),d=n.dist*(this.state==="win"?.8:1),u=Oe(Math.sin(n.yaw)*Math.cos(n.pitch),Math.sin(n.pitch),Math.cos(n.yaw)*Math.cos(n.pitch)).multiplyScalar(d);this.camera.position.copy(h).add(u),n.shake&&(n.shake=Math.max(0,n.shake-e),this.camera.position.add(Oe(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(n.shake*.6))),this.camera.lookAt(h),n.fovKick=Math.max(0,(n.fovKick||0)-e*30);let f=55+(n.fovKick||0);Math.abs(this.camera.fov-f)>.01&&(this.camera.fov=f,this.camera.updateProjectionMatrix());let g=this.sky.sunDir,x=s.pos.clone(),p=48/this.R.shadowSize();x.x=Math.round(x.x/p)*p,x.z=Math.round(x.z/p)*p,this.sun.target.position.copy(x),this.sun.position.copy(x).addScaledVector(g,60)}render(){this.R.render(this.clock)}};var Ke=i=>document.getElementById(i),au="blahaj-adventure-v1",vs={doubleJump:{icon:"\u{1FAE7}",name:"Double Jump",how:"Press Space again in the air"},flop:{icon:"\u{1F4A5}",name:"Belly Flop",how:"Press C in the air: cracks crates, super-bounces sponges"},dash:{icon:"\u{1F680}",name:"Torpedo Dash",how:"Press Shift to zoom forward"},glide:{icon:"\u{1FABD}",name:"Fin Glide",how:"Hold Space while falling"}};function Gv(){let i=null;try{i=JSON.parse(localStorage.getItem(au))}catch{}return i=i||{},i.completed=i.completed||[],i.stars=i.stars||[],i.bestTime=i.bestTime||[],i.bestFish=i.bestFish||[],on.forEach((e,t)=>{i.stars[t]=i.stars[t]||[!1,!1,!1]}),i.quality=i.quality||"high",i}var St=Gv();function Jo(){try{localStorage.setItem(au,JSON.stringify(St))}catch{}}var $o=()=>St.stars.reduce((i,e)=>i+e.filter(Boolean).length,0),Ko=()=>{let i={};for(let[e,t]of Object.entries(Ie.unlocks))i[e]=!!St.completed[t];return i},ip=i=>on[i].bonus?$o()>=Ie.bonusStars:i===0||!!St.completed[i-1],ns=new gc(Ke("game"));ns.setQuality(St.quality);var _r=new xc(Ke("game")),rn=null,Ft="title",Ui=0;function si(i){["title","how","levels","pause","complete","ending"].forEach(e=>Ke(e).classList.toggle("hidden",e!==i)),Ke("hud").classList.toggle("hidden",i!==null),Ke("touch").classList.toggle("off",i!==null)}var Wv={hud:sp,toast:jo,pop:Xv,hint:i=>{let e=Ke("hint");i?(e.textContent=i,e.style.opacity=1):e.style.opacity=0},fade:i=>Ke("fade").classList.toggle("on",i),star:i=>{St.stars[Ui][i]||(St.stars[Ui][i]=!0,Jo())},complete:qv};function Qf(i,e="Fluffing pillows\u2026"){Ke("loading").classList.toggle("hidden",!i),Ke("loadingText").textContent=e}function is(i,e=!1){Qf(!0,e?"Fluffing pillows\u2026":`Loading ${on[i].name}\u2026`),setTimeout(()=>{if(rn&&rn.dispose(),Ui=i,rn=new Sc(ns,_r,on[i],i,Ko(),St.stars[i],Wv),rn.attract=e,lu.reset(),Qf(!1),e)return;Ft="play",si(null),Ke("levelName").textContent=`${i+1}. ${on[i].name}`,Ke("fishTotal").textContent=on[i].fish.length,sp(),Je.init(),Je.resume(),Je.startMusic(on[i].music);let t=Object.entries(Ie.unlocks).find(([,n])=>n===i-1);t&&Ko()[t[0]]&&jo(`${vs[t[0]].icon} ${vs[t[0]].name}`,vs[t[0]].how,4e3),Ke("game").focus()},40)}function sp(){if(!rn)return;Ke("fish").textContent=rn.stats.fish;let i=rn.stars.map(e=>e.taken||St.stars[Ui][e.i]);Ke("stars").innerHTML=i.map(e=>`<span class="${e?"":"off"}">\u2B50</span>`).join(""),Ke("hearts").innerHTML=Array.from({length:Ie.maxHearts},(e,t)=>`<span class="${t<rn.p.hearts?"":"lost"}">\u{1F499}</span>`).join("")}var ep=null;function jo(i,e="",t=2200){let n=Ke("toast");n.innerHTML=`${i}${e?`<small>${e}</small>`:""}`,n.classList.add("show"),clearTimeout(ep),ep=setTimeout(()=>n.classList.remove("show"),t)}var tp=null;function Xv(i){let e=Ke("combo");e.textContent=i,e.classList.add("show"),clearTimeout(tp),tp=setTimeout(()=>e.classList.remove("show"),700)}var bc=i=>Number.isFinite(i)?`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`:"\u2013";function qv(i){let e=Ui,t=$o()>=Ie.bonusStars,n=Ko();St.completed[e]=!0,i.stars.forEach((a,l)=>{a&&(St.stars[e][l]=!0)}),St.bestTime[e]=St.bestTime[e]?Math.min(St.bestTime[e],i.time):i.time,St.bestFish[e]=Math.max(St.bestFish[e]||0,i.fish),Jo(),Je.stopMusic(),Ft="menu",Ke("completeTitle").textContent=`${on[e].name} complete!`,Ke("completeStars").innerHTML=St.stars[e].map(a=>`<span class="${a?"":"off"}">\u2B50</span>`).join(""),Ke("cFish").textContent=`${i.fish} / ${i.fishTotal}${i.fish>=i.fishTotal?" \u{1F451}":""}`,Ke("cTime").textContent=`${bc(i.time)}  (best ${bc(St.bestTime[e])})`,Ke("cBops").textContent=i.bops,Ke("cFalls").textContent=i.falls;let s="",r=Ko();for(let a of Object.keys(r))r[a]&&!n[a]&&(s+=`<div class="unlock">New ability: ${vs[a].icon} ${vs[a].name}<small>${vs[a].how}</small></div>`);!t&&$o()>=Ie.bonusStars&&(s+=`<div class="unlock">\u2728 Bonus level unlocked: ${on[on.length-1].name}!</div>`),Ke("completeUnlock").innerHTML=s,s&&Je.unlock();let o=e+1<on.length&&ip(e+1)?e+1:-1;Ke("btnNext").classList.toggle("hidden",o<0),Ke("btnNext").onclick=()=>{Je.click(),is(o)},on[e].id==="dreamsea"&&!St.sawEnding?(St.sawEnding=!0,Jo(),si("ending"),Ke("btnEndLevels").onclick=()=>{Je.click(),si("complete")}):si("complete")}function Yv(){let i=Ke("levelGrid");i.innerHTML="";let e={bedroom:"#ffb3c6",kitchen:"#ffd166",shelf:"#b79fff",rooftops:"#ff9f68",dreamsea:"#5a4b9c",lagoon:"#36c5b8"};on.forEach((n,s)=>{let r=ip(s),o=document.createElement("div");o.className="lvl"+(r?"":" locked")+(n.bonus?" bonus":"");let a=St.stars[s].map(c=>`<span class="${c?"":"off"}">\u2B50</span>`).join(""),l=n.bonus?`\u{1F512} Collect ${Ie.bonusStars} \u2B50 (${$o()}/${Ie.bonusStars})`:"\u{1F512} Finish the previous level";o.innerHTML=`<div class="swatch" style="background:${e[n.theme]}"></div><div class="num">${n.bonus?"Bonus":"Level "+(s+1)}</div><div class="name">${n.name}</div>
      <div class="blurb">${r?n.blurb:l}</div><div class="stars">${a}</div>
      <div class="meta">${St.completed[s]?`\u{1F41F} best ${St.bestFish[s]||0}/${n.fish.length}${(St.bestFish[s]||0)>=n.fish.length?" \u{1F451}":""} \xB7 \u23F1 ${bc(St.bestTime[s])}`:r?"Not finished yet":""}</div>`,r&&(o.onclick=()=>{Je.init(),Je.click(),is(s)}),i.appendChild(o)});let t=Ko();Ke("abilityList").innerHTML=Object.entries(vs).map(([n,s])=>`<span class="ab ${t[n]?"":"off"}" title="${s.how}">${s.icon} ${s.name}</span>`).join("")+`<span class="ab">\u2B50 ${$o()} / ${on.length*3}</span>`}function Qo(){Je.init(),Je.click(),(Ft==="play"||Ft==="paused"||Ft==="menu")&&(Ft="title",Je.stopMusic(),is(0,!0)),Yv(),si("levels")}function vr(i){i&&Ft==="play"?(Ft="paused",si("pause"),Je.stopMusic()):!i&&Ft==="paused"&&(Ft="play",si(null),Je.startMusic(on[Ui].music),Ke("game").focus())}function Ec(){return`Graphics: ${pr[ns.quality].label}`}function Zv(){let i=mr.indexOf(ns.quality),e=mr[(i+1)%mr.length];St.quality=e,Jo(),ns.setQuality(e),document.querySelectorAll(".qbtn").forEach(t=>t.textContent=Ec()),lu.reset(),rn&&Ft!=="title"&&jo(Ec(),"Grass and some effects update on the next level")}Ke("btnStart").onclick=Qo;Ke("btnHow").onclick=()=>{Je.init(),Je.click(),si("how")};Ke("btnHowBack").onclick=()=>{Je.click(),si("title")};Ke("btnBackTitle").onclick=()=>{Je.click(),si("title")};Ke("btnReset").onclick=()=>{if(confirm("Reset all progress? Your starfish will swim away!")){try{localStorage.removeItem(au)}catch{}location.reload()}};Ke("btnResume").onclick=()=>vr(!1);Ke("btnRestart").onclick=()=>{Je.click(),is(Ui)};Ke("btnQuit").onclick=Qo;Ke("btnAgain").onclick=()=>{Je.click(),is(Ui)};Ke("btnToLevels").onclick=Qo;Ke("btnEndLevels").onclick=Qo;document.querySelectorAll(".qbtn").forEach(i=>{i.textContent=Ec(),i.onclick=()=>{Je.click(),Zv()}});Ke("tPause").onclick=()=>vr(!0);addEventListener("keydown",i=>{if(i.code==="KeyM"){Je.init();let e=Je.toggleMute();jo(e?"\u{1F507} Sound off":"\u{1F50A} Sound on")}(i.code==="Escape"||i.code==="KeyP")&&(Ft==="play"?vr(!0):Ft==="paused"&&vr(!1)),i.code==="KeyR"&&Ft==="play"&&is(Ui),(i.code==="Enter"||i.code==="Space")&&Ft==="title"&&!Ke("title").classList.contains("hidden")&&(i.preventDefault(),Qo())});addEventListener("resize",()=>ns.resize());var lu={frames:0,time:0,warm:0,reset(){this.frames=0,this.time=0,this.warm=0},sample(i){if(Ft==="play"&&(this.warm+=i,!(this.warm<3)&&(this.frames++,this.time+=i,this.time>4))){let e=this.frames/this.time,t=mr.indexOf(ns.quality);if(e<32&&t>0&&!St.qualityLocked){let n=mr[t-1];ns.setQuality(n),St.quality=n,Jo(),document.querySelectorAll(".qbtn").forEach(s=>s.textContent=Ec()),jo(`Graphics set to ${pr[n].label}`,"for smoother swimming (change it in the pause menu)")}this.frames=0,this.time=0}}},np=performance.now();function rp(i){requestAnimationFrame(rp);let e=Math.min(.05,(i-np)/1e3);if(np=i,_r.pollPad(),_r.pressed.has("pad-pause")&&(Ft==="play"?vr(!0):Ft==="paused"&&vr(!1)),!op.noRender){if(!rn){_r.endFrame();return}Ft==="play"||Ft==="title"||Ft==="menu"&&rn.state==="win"?rn.update(e):_r.endFrame(),Ft==="play"&&(Ke("timer").textContent=bc(rn.stats.time)),rn.render(),lu.sample(e)}}si("title");is(0,!0);requestAnimationFrame(rp);var op={noRender:!1};window.__blahaj={get game(){return rn},startLevel:is,save:St,get mode(){return Ft},debug:op,sim(i,e=1/60){for(let t=0;t<i;t+=e)_r.pollPad(),rn&&(Ft==="play"||rn.state==="win")&&rn.update(e)}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
