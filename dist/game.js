(()=>{var Ie={dt:.008333333333333333,radius:.42,height:.9,run:7.5,groundAccel:70,airAccel:38,groundFriction:14,gravity:32,jump:11.5,jumpCut:.45,doubleJump:10,maxFall:26,coyote:.12,jumpBuffer:.14,dashSpeed:18,dashTime:.2,dashCooldown:.45,glideFall:2.2,poundSpeed:26,poundHang:.14,bounce:16,superBounce:21,stompBounce:11,updraft:46,updraftMax:9,maxHearts:3,unlocks:{doubleJump:0,flop:1,dash:2,glide:3},bonusStars:12};var ge=(i,e,t,n,s,r,o={})=>Object.assign({x:i,y:e,z:t,w:n,d:s,style:r},o),qt=(i,e,t)=>{let n=[];for(let s=0;s<t;s++){let r=t===1?.5:s/(t-1);n.push([i[0]+(e[0]-i[0])*r,i[1]+(e[1]-i[1])*r,i[2]+(e[2]-i[2])*r])}return n},Ot=(i,e,t,n=2)=>qt(i,e,t).map((s,r)=>{let o=t===1?.5:r/(t-1);return[s[0],s[1]+Math.sin(o*Math.PI)*n,s[2]]}),_r=(i,e,t)=>{let n=[];for(let s=0;s<t;s++){let r=s/t*Math.PI*2;n.push([i[0]+Math.cos(r)*e,i[1],i[2]+Math.sin(r)*e])}return n},Gn=(i,e,t=1)=>qt(i,[i[0],i[1]+t*(e-1),i[2]],e),Ms=(...i)=>[].concat(...i),on=[{id:"bedroom",name:"Cozy Bedroom",blurb:"The floor is lava! Hop across the toys to bedtime.",theme:"bedroom",music:0,sky:["#bfe3ff","#ffe9f2"],fog:16771570,fogFar:140,floor:{y:-6,kind:"goo",color:16727439},spawn:[0,0,1.5],goal:[0,5,-65.5],platforms:[ge(0,0,0,8,8,"rug"),ge(0,0,-8,4,4,"books"),ge(0,1,-13,4,4,"block"),ge(0,2,-18,4,4,"block"),ge(6,3,-18,2,2,"block"),ge(0,2,-25,2,8,"wood"),ge(0,2,-34,8,6,"rug"),ge(0,2,-41,3,3,"wood",{move:{dx:4,period:4.5}}),ge(0,2,-47,4,4,"books"),ge(-6,.5,-52,3,3,"block"),ge(0,3,-52,3,3,"block"),ge(0,4.5,-56,3,3,"block"),ge(0,5,-63,10,8,"bed"),ge(4,6.5,-60.5,2,2,"cushion")],fish:Ms(qt([0,.6,-1.5],[0,.6,-3.5],3),Ot([0,.6,-4.5],[0,.6,-6.5],3,1),Ot([0,.6,-9],[0,1.6,-12],3,1.2),Ot([0,1.6,-14],[0,2.6,-17],3,1.2),qt([0,2.6,-22],[0,2.6,-28],5),_r([0,2.6,-34],2,6),qt([0,2.6,-46],[0,2.6,-48],2),Ot([0,3.6,-52.5],[0,5.1,-56],3,1.5),qt([-3,5.6,-61],[3,5.6,-61],4),[[-6,1.1,-50.8],[-6,1.1,-53.2]]),stars:[[6,4,-18],[-6,1.5,-52],[4,7.6,-60.5]],hearts:[[3,2.8,-32]],enemies:[{type:"bunny",x:-2.5,y:2,z:-35,dx:5,speed:1.4}],hazards:[{x:1.2,y:2,z:-48.2,w:1.2,d:1.2}],checkpoints:[[3,2,-36]],signs:[{x:-2.6,y:0,z:-2,text:`WASD / arrows to swim
Space to jump!`},{x:2.6,y:0,z:-2.5,text:`Hold Space to
jump higher`},{x:-3,y:2,z:-32,text:`Land on dust bunnies
to bop them!`},{x:-1.6,y:5,z:-60,text:`Snuggle the pillow
to finish!`}],decor:[{type:"plant",x:-8,y:-6,z:-14,s:4},{type:"block",x:9,y:-6,z:-30,s:4,color:16752451,letter:"B"},{type:"block",x:-10,y:-6,z:-40,s:5,color:7324639,letter:"L"},{type:"block",x:10,y:-6,z:-50,s:3.5,color:10475627,letter:"\xC5"},{type:"mug",x:9,y:-6,z:-8,s:3,color:16765286}]},{id:"kitchen",name:"Kitchen Counter",blurb:"Sponges, mugs and sliding chopping boards.",theme:"kitchen",music:1,sky:["#ffe8a3","#fff6e9"],fog:16774889,fogFar:150,floor:{y:-8,kind:"goo",color:15217967},spawn:[0,0,1.5],goal:[0,5,-82],platforms:[ge(0,0,0,8,8,"counter"),ge(0,0,-11,4,4,"board"),ge(8,-3,-11,3,3,"sponge",{type:"bounce"}),ge(0,2.5,-16,2.5,2.5,"mug"),ge(0,2.5,-22,6,6,"counter"),ge(0,2.5,-29,3,3,"sponge",{type:"bounce"}),ge(0,7,-34,6,4,"shelf"),ge(0,7,-40,3,3,"board",{move:{dx:4,period:3.5}}),ge(0,7,-46.5,3,3,"board",{move:{dx:4,period:3.5,phase:.5}}),ge(0,7,-54,6,6,"counter"),ge(0,4,-62,4,4,"mug"),ge(-8,4,-62,3,3,"sponge",{type:"bounce"}),ge(-8,9,-66,3,3,"shelf"),ge(0,4,-72,4,4,"board"),ge(0,5,-80,8,8,"counter")],fish:Ms(Ot([0,.6,-4.5],[0,.6,-8.5],5,2.2),Ot([0,.6,-13],[0,3.1,-15],3,1.8),qt([-2,3.1,-20],[2,3.1,-24],4),Gn([0,4,-29],4,1.2),Ot([0,7.6,-36.5],[0,7.6,-52],7,1.5),_r([0,7.6,-54],2,6),Ot([0,7.6,-57.5],[0,4.6,-60.5],3,1.2),Ot([0,4.6,-64.5],[0,4.6,-69.5],5,2.6),qt([-2,5.6,-78],[2,5.6,-78],3),Gn([8,-1,-11],3,1.2)),stars:[[8,1.6,-11],[-8,10,-66],[5.5,9.5,-54]],hearts:[[0,7.8,-56]],enemies:[{type:"bunny",x:-2,y:2.5,z:-22,dx:4,speed:1.6},{type:"bunny",x:2,y:7,z:-52.5,dx:-4,speed:1.8}],hazards:[{x:2.2,y:2.5,z:-24.2,w:1.2,d:1.2},{x:-2.2,y:7,z:-56,w:1.2,d:1.2}],checkpoints:[[2,7,-34],[3,5,-78]],signs:[{x:-2.6,y:0,z:-2.5,text:`NEW: Double jump!
Space again in the air`},{x:-2.2,y:2.5,z:-26,text:`Sponges are
super bouncy!`}],decor:[{type:"mug",x:10,y:-8,z:-20,s:5,color:7324639},{type:"mug",x:-11,y:-8,z:-45,s:6,color:16752451},{type:"plant",x:11,y:-8,z:-70,s:5},{type:"mug",x:-10,y:-8,z:-5,s:4,color:16757702}],extraPlatforms:[ge(5.5,8,-54,2,2,"mug")]},{id:"shelf",name:"Bookshelf Climb",blurb:"Crumbly cookies, robo-vacuums and a long way up.",theme:"shelf",music:2,sky:["#c9b6ff","#ffe0f0"],fog:15850751,fogFar:150,floor:{y:-6,kind:"goo",color:10173951},spawn:[0,0,1.5],goal:[0,16,-67],platforms:[ge(0,0,0,8,8,"shelf"),ge(0,1.5,-7,4,4,"books"),ge(0,2.5,-12,2.5,2.5,"cookie",{type:"crumble"}),ge(0,3.5,-16.5,2.5,2.5,"cookie",{type:"crumble"}),ge(0,4.5,-21,2.5,2.5,"cookie",{type:"crumble"}),ge(0,5,-27,8,5,"shelf"),ge(-7,5,-27,2.5,2.5,"sponge",{type:"bounce"}),ge(0,5,-33,3,3,"sponge",{type:"bounce"}),ge(0,12,-38,8,5,"shelf"),ge(0,12,-46,3,3,"books"),ge(6,9,-46,3,3,"books"),ge(0,12,-52,3,3,"books",{move:{dy:2,period:4}}),ge(0,16,-58,6,6,"shelf"),ge(0,16,-66,8,6,"shelf")],crates:[{x:2.5,y:5,z:-28.5,item:"star"},{x:6,y:9,z:-46,item:"star"},{x:-2.5,y:12,z:-39.5,item:"heart"},{x:1,y:1.5,z:-7.5,item:"fish"}],fish:Ms(Ot([0,2.1,-10],[0,3.1,-12],2,1),Ot([0,3.1,-14],[0,4.1,-16.5],2,1),Ot([0,4.1,-18.5],[0,5.1,-21],2,1),qt([-3,5.6,-25.5],[3,5.6,-25.5],5),Gn([0,7,-33],6,1.4),qt([-3,12.6,-37],[3,12.6,-37],4),qt([0,12.6,-44],[0,12.6,-47.5],3),Gn([0,14,-52],3,1.2),_r([0,16.6,-58],2,6),Gn([-7,7,-27],4,1.5)),stars:[[-7,13.5,-27]],hearts:[],enemies:[{type:"roomba",x:-2.5,y:5,z:-27,dx:5,speed:1.6},{type:"roomba",x:2.5,y:12,z:-38,dx:-5,speed:1.8},{type:"bunny",x:-2,y:16,z:-58,dx:4,speed:1.8}],hazards:[{x:-2.8,y:0,z:-2.8,w:1.2,d:1.2}],checkpoints:[[3,5,-29],[-3,16,-59.5]],signs:[{x:-2.4,y:0,z:-2,text:`NEW: Belly flop!
Press C in the air`},{x:2.6,y:0,z:-2.2,text:`Flop on crates
to crack them`},{x:-2.4,y:5,z:-30,text:`Flop on a sponge
for a SUPER bounce!`},{x:3,y:1.5,z:-5.5,text:`Cookies crumble!
Keep moving`}],decor:[{type:"block",x:10,y:-6,z:-20,s:6,color:16744355,letter:"H"},{type:"plant",x:-11,y:-6,z:-8,s:5},{type:"block",x:-12,y:-6,z:-50,s:7,color:7324639,letter:"A"},{type:"block",x:12,y:-6,z:-60,s:5,color:16765286,letter:"J"}]},{id:"rooftops",name:"Rooftop Breeze",blurb:"Big gaps above the clouds. Time to dash!",theme:"rooftops",music:3,sky:["#ff9fb3","#ffd9a0"],fog:16765616,fogFar:170,floor:{y:-10,kind:"clouds",color:16777215},spawn:[0,0,1.5],goal:[0,11,-90],platforms:[ge(0,0,0,8,8,"roof"),ge(0,0,-14,4,4,"roof"),ge(0,2,-19,2.5,2.5,"chimney"),ge(0,4,-24,2.5,2.5,"chimney"),ge(0,4,-32,8,6,"roof"),ge(15.5,4,-32,3,3,"cloud"),ge(-7,4,-32,2.5,2.5,"sponge",{type:"bounce"}),ge(0,4,-42,3,3,"balloon",{move:{dx:5,period:5}}),ge(0,5,-52,3,3,"balloon",{move:{dx:5,period:5,phase:.5}}),ge(0,5,-62,6,6,"roof"),ge(0,5,-69,3,3,"sponge",{type:"bounce"}),ge(0,11,-75,8,6,"roof"),ge(0,11,-89,6,6,"roof")],crates:[{x:2.5,y:11,z:-76.5,item:"star"},{x:-1.5,y:5,z:-63.5,item:"heart"},{x:2.5,y:4,z:-33.5,item:"fish"}],fish:Ms(qt([0,1.5,-5],[0,1.5,-11],6),Ot([0,.6,-16],[0,2.6,-18.5],2,1),Ot([0,2.6,-20.5],[0,4.6,-23.5],2,1),_r([0,4.6,-32],2.2,6),qt([4.5,5,-32],[13.5,5,-32],6),qt([0,5.6,-45],[0,5.6,-49],3),qt([0,5.6,-55.5],[0,5.6,-59],3),Gn([0,7,-69],4,1.4),qt([0,12.5,-79],[0,12.5,-85],5)),stars:[[15.5,5,-32],[-7,12,-32]],hearts:[],enemies:[{type:"bunny",x:-2.5,y:4,z:-30.5,dx:5,speed:2},{type:"bunny",x:2.5,y:4,z:-33.5,dx:-5,speed:2},{type:"roomba",x:-2,y:11,z:-74,dx:4,speed:2}],hazards:[{x:2,y:5,z:-61,w:1.2,d:1.2}],checkpoints:[[-3,4,-34],[-2,5,-64]],signs:[{x:-2.5,y:0,z:-2.5,text:`NEW: Torpedo dash!
Press Shift`},{x:2.6,y:0,z:-2.5,text:`Jump, double jump,
THEN dash far!`}],decor:[{type:"cloud",x:20,y:-4,z:-20,s:2.5},{type:"cloud",x:-22,y:2,z:-50,s:3},{type:"cloud",x:18,y:6,z:-80,s:2.5},{type:"cloud",x:-18,y:-6,z:-10,s:2},{type:"cloud",x:-5,y:18,z:-110,s:4}]},{id:"dreamsea",name:"Dream Sea",blurb:"Glide over a sleepy, starry ocean.",theme:"dreamsea",music:4,sky:["#1b1f4a","#5a4b9c"],fog:3881594,fogFar:160,night:!0,floor:{y:-12,kind:"sea",color:1194618},spawn:[0,10,1.5],goal:[0,15,-110],platforms:[ge(0,10,0,8,8,"island"),ge(0,4,-22,6,6,"island"),ge(16,8,-32,3,3,"crystal"),ge(0,12,-40,6,6,"island"),ge(0,12,-48,3,3,"bubble",{move:{dy:3,period:5,phase:.25}}),ge(0,18,-56,6,6,"island"),ge(0,8,-82,6,6,"island"),ge(0,8,-94,4,4,"crystal",{move:{dx:3,period:4}}),ge(0,8,-100,3,3,"sponge",{type:"bounce"}),ge(0,15,-108,8,8,"island")],updrafts:[{x:0,z:-32,r:1.8,y0:2,y1:14},{x:-9,z:-56,r:1.6,y0:12,y1:26}],crates:[{x:2,y:4,z:-23.5,item:"star"},{x:-2,y:18,z:-57.5,item:"heart"}],fish:Ms(Ot([0,10.6,-4.5],[0,5,-18.5],8,1.5),Gn([0,5,-32],6,1.8),Ot([0,12.6,-42],[0,13,-48],3,1.5),Ot([0,18.6,-59.5],[0,9,-78.5],9,2),qt([0,8.6,-86],[0,8.6,-92],4),Gn([0,10,-100],4,1.6),qt([2.5,9,-32],[13.5,9,-32],5),Gn([-9,14,-56],5,2.4)),stars:[[16,9,-32],[-9,27,-56]],hearts:[[0,8.8,-80]],enemies:[{type:"bunny",x:-2,y:12,z:-40,dx:4,speed:2},{type:"roomba",x:2,y:8,z:-81,dx:-4,speed:2},{type:"bunny",x:-3,y:15,z:-107,dx:6,speed:2.2}],hazards:[],checkpoints:[[2.5,12,-41.5],[-2.5,18,-54],[2.5,8,-83.5]],signs:[{x:-2.5,y:10,z:-2.5,text:`NEW: Fin glide!
Hold Space while falling`},{x:2.5,y:4,z:-20,text:`Ride the bubble
columns up!`}],decor:[{type:"coral",x:-14,y:-12,z:-20,s:6,color:16744355},{type:"coral",x:14,y:-12,z:-60,s:7,color:8380615},{type:"coral",x:-16,y:-12,z:-95,s:6,color:16765286},{type:"cloud",x:25,y:20,z:-50,s:3}]},{id:"lagoon",name:"Starlight Lagoon",blurb:"Bonus! The ultimate shark obstacle course.",bonus:!0,theme:"lagoon",music:2,sky:["#0d3b66","#36c5b8"],fog:2919577,fogFar:160,night:!0,floor:{y:-10,kind:"sea",color:879474},spawn:[0,0,1.5],goal:[0,18,-108],platforms:[ge(0,0,0,6,6,"island"),ge(0,1,-7,2,2,"cookie",{type:"crumble"}),ge(3,2,-11,2,2,"cookie",{type:"crumble"}),ge(0,3,-15,2,2,"cookie",{type:"crumble"}),ge(-3,4,-19,2,2,"cookie",{type:"crumble"}),ge(0,4,-27,4,4,"crystal"),ge(0,4,-40,3,3,"crystal"),ge(0,6,-48,2.5,2.5,"bubble",{move:{dx:5,period:2.6}}),ge(0,8,-55,2.5,2.5,"bubble",{move:{dy:3,period:3}}),ge(0,8,-62,2.5,2.5,"sponge",{type:"bounce"}),ge(0,15,-67,4,4,"crystal"),ge(0,6,-90,4,4,"island"),ge(0,18,-106,6,6,"island")],updrafts:[{x:0,z:-97,r:1.6,y0:4,y1:20}],crates:[{x:1,y:6,z:-91,item:"heart"}],fish:Ms(Ot([0,.6,-3],[0,1.6,-7],3,1),Ot([0,1.6,-7],[3,2.6,-11],3,1),Ot([3,2.6,-11],[0,3.6,-15],3,1),Ot([0,3.6,-15],[-3,4.6,-19],3,1),Ot([-3,4.6,-19],[0,4.6,-27],4,1.5),qt([0,6,-30],[0,6,-37],5),qt([-4,6.6,-48],[4,6.6,-48],4),Gn([0,10,-62],4,1.5),Ot([0,15.6,-69],[0,7,-88],8,2),Gn([0,7,-97],6,2.4),_r([0,18.6,-106],2.2,8)),stars:[[-3,6.5,-19],[0,6,-33.5],[10,11,-80]],hearts:[[0,4.8,-27]],enemies:[{type:"roomba",x:-1,y:4,z:-27,dx:2,speed:1.4},{type:"bunny",x:-1.5,y:6,z:-91,dx:3,speed:2.4},{type:"roomba",x:-2.5,y:18,z:-104,dx:5,speed:2.4}],hazards:[{x:1.4,y:15,z:-68.4,w:1,d:1},{x:-1.4,y:4,z:-25.6,w:1,d:1}],checkpoints:[[1.4,4,-28.4],[-1.4,15,-65.6],[-1.4,6,-88.6]],signs:[{x:0,y:0,z:-2.4,text:`Bonus level!
Good luck, brave shark`}],decor:[{type:"coral",x:-12,y:-10,z:-30,s:6,color:16744355},{type:"coral",x:13,y:-10,z:-70,s:7,color:16765286},{type:"coral",x:-14,y:-10,z:-100,s:6,color:10452991}]}];on.forEach(i=>{i.extraPlatforms&&(i.platforms=i.platforms.concat(i.extraPlatforms)),i.crates=i.crates||[],i.updrafts=i.updrafts||[],i.hearts=i.hearts||[],i.hazards=i.hazards||[]});var Je={ctx:null,master:null,musicGain:null,muted:!1,musicTimer:null,_nextBar:0,_barIndex:0,init(){if(this.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(i){this.ctx=new i,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.35,this.musicGain.connect(this.master);try{localStorage.getItem("blahaj-muted")==="1"&&this.setMuted(!0)}catch{}}},resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()},setMuted(i){this.muted=i,this.master&&(this.master.gain.value=i?0:.5);try{localStorage.setItem("blahaj-muted",i?"1":"0")}catch{}},toggleMute(){return this.setMuted(!this.muted),this.muted},tone(i,{type:e="sine",dur:t=.15,vol:n=.3,slide:s=0,delay:r=0,attack:o=.005}={}){if(!this.ctx)return;let a=this.ctx.currentTime+r,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=e,l.frequency.setValueAtTime(i,a),s&&l.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),a+t),c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(n,a+o),c.gain.exponentialRampToValueAtTime(.001,a+t),l.connect(c).connect(this.master),l.start(a),l.stop(a+t+.05)},noise({dur:i=.2,vol:e=.2,delay:t=0,freq:n=800}={}){if(!this.ctx)return;let s=this.ctx.currentTime+t,r=Math.floor(this.ctx.sampleRate*i),o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let d=0;d<r;d++)a[d]=(Math.random()*2-1)*(1-d/r);let l=this.ctx.createBufferSource();l.buffer=o;let c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=n;let h=this.ctx.createGain();h.gain.value=e,l.connect(c).connect(h).connect(this.master),l.start(s)},jump(){this.tone(300,{type:"triangle",dur:.18,slide:320,vol:.25})},doubleJump(){this.tone(420,{type:"triangle",dur:.12,slide:300,vol:.22}),this.tone(640,{type:"triangle",dur:.14,slide:300,vol:.2,delay:.07})},land(){this.noise({dur:.08,vol:.12,freq:500})},collect(i=0){let e=660*Math.pow(1.0595,Math.min(i,12));this.tone(e,{type:"sine",dur:.1,vol:.2}),this.tone(e*1.5,{type:"sine",dur:.14,vol:.18,delay:.06})},star(){[523,659,784,1047,1319].forEach((i,e)=>this.tone(i,{type:"triangle",dur:.28,vol:.22,delay:e*.08}))},heart(){[392,523,659].forEach((i,e)=>this.tone(i,{type:"sine",dur:.25,vol:.2,delay:e*.09}))},hurt(){this.tone(220,{type:"square",dur:.25,slide:-150,vol:.12}),this.noise({dur:.15,vol:.1,freq:400})},fall(){this.tone(500,{type:"sine",dur:.6,slide:-420,vol:.18})},stomp(){this.tone(180,{type:"square",dur:.12,slide:-100,vol:.12}),this.tone(500,{type:"triangle",dur:.15,slide:300,vol:.18,delay:.05})},bounce(){this.tone(200,{type:"sine",dur:.25,slide:500,vol:.25})},dash(){this.noise({dur:.22,vol:.15,freq:1800}),this.tone(700,{type:"sawtooth",dur:.18,slide:-400,vol:.05})},pound(){this.tone(120,{type:"square",dur:.3,slide:-60,vol:.18}),this.noise({dur:.3,vol:.25,freq:300})},checkpoint(){[659,880].forEach((i,e)=>this.tone(i,{type:"triangle",dur:.2,vol:.2,delay:e*.1}))},crumble(){this.noise({dur:.3,vol:.12,freq:900})},win(){[523,659,784,1047,784,1047,1319].forEach((i,e)=>this.tone(i,{type:"triangle",dur:.35,vol:.22,delay:e*.12}))},unlock(){[392,494,587,784,988].forEach((i,e)=>this.tone(i,{type:"sine",dur:.4,vol:.2,delay:e*.1}))},click(){this.tone(900,{type:"sine",dur:.05,vol:.12})},startMusic(i=0){if(!this.ctx)return;this.stopMusic(),this.mood=i,this._barIndex=0,this._nextBar=this.ctx.currentTime+.1;let e=()=>{for(;this._nextBar<this.ctx.currentTime+.6;)this._scheduleBar(this._nextBar,this._barIndex++),this._nextBar+=this._barLen()};e(),this.musicTimer=setInterval(e,200)},stopMusic(){this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null},_barLen(){return[2.4,2.2,2,2.6,2.8][this.mood%5]},_note(i,e,t,n,s){let r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type=s,r.frequency.value=i,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.02),o.gain.exponentialRampToValueAtTime(.001,e+t),r.connect(o).connect(this.musicGain),r.start(e),r.stop(e+t+.05)},_scheduleBar(i,e){let n=[[0,4,7,11],[5,9,12,16],[7,11,14,17],[9,12,16,19]][e%4],s=[0,-2,3,-5,2][this.mood%5],r=this._barLen(),o=l=>261.63*Math.pow(2,(l+s)/12);this._note(o(n[0]-12),i,r*.9,.16,"triangle");let a=8;for(let l=0;l<a;l++){let c=n[[0,1,2,3,2,1,3,1][l]];this._note(o(c+12),i+l*r/a,r/a*.9,.07,"sine")}e%2===1&&[n[3]+12,n[2]+12,n[1]+12].forEach((c,h)=>this._note(o(c),i+r*(.5+h*.16),.3,.06,"triangle"))}};var $u=0,ch=1,Ku=2;var us=1,ju=2,nr=3,Yi=0,cn=1,sn=2,Wt=0,Zi=1,En=2,hh=3,uh=4,hl=5;var Nn=100,Qu=101,ed=102,td=103,nd=104,ds=200,id=201,sd=202,rd=203,dh=204,fh=205,fo=206,od=207,po=208,ad=209,ld=210,cd=211,hd=212,ud=213,dd=214,Ra=0,Ca=1,Pa=2,ks=3,Ia=4,Da=5,La=6,Ua=7,ph=0,fd=1,pd=2,ei=0,mo=1,go=2,xo=3,fs=4,_o=5,vo=6,yo=7;var mh=300,Ji=301,ps=302,ul=303,dl=304,Mo=306,Un=1e3,oi=1001,Na=1002,Gt=1003,md=1004;var So=1005;var $t=1006,fl=1007;var mi=1008;var mn=1009,gh=1010,xh=1011,ir=1012,pl=1013,ti=1014,Fn=1015,Ht=1016,ml=1017,gl=1018,$i=1020,_h=35902,vh=35899,yh=1021,Mh=1022,gn=1023,ci=1026,gi=1027,xl=1028,_l=1029,Ki=1030,vl=1031;var yl=1033,bo=33776,Eo=33777,To=33778,wo=33779,Ml=35840,Sl=35841,bl=35842,El=35843,Tl=36196,wl=37492,Al=37496,Rl=37488,Cl=37489,Ao=37490,Pl=37491,Il=37808,Dl=37809,Ll=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,Bl=37815,zl=37816,Hl=37817,kl=37818,Vl=37819,Gl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,Zl=36283,Jl=36284,Ro=36285,$l=36286;var Lr=2300,Fa=2301,wa=2302,$c=2303,Kc=2400,jc=2401,Qc=2402;var gd=3200;var Co=0,xd=1,Ii="",Zt="srgb",Ur="srgb-linear",Nr="linear",mt="srgb";var Aa=7680;var _d=519,vd=512,yd=513,Md=514,Kl=515,Sd=516,bd=517,jl=518,Ed=519,Sh=35044;var bh="300 es",Jn=2e3,Vs=2001;function hp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){let i=Fr("canvas");return i.style.display="block",i}var gu={},Gs=null;function Or(...i){let e="THREE."+i.shift();Gs?Gs("log",e,...i):console.log(e,...i)}function wd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=wd(i);let e="THREE."+i.shift();if(Gs)Gs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=wd(i);let e="THREE."+i.shift();if(Gs)Gs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rs(...i){let e=i.join(" ");e in gu||(gu[e]=!0,Xe(...i))}function Ad(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Rd={[Ra]:Ca,[Pa]:La,[Ia]:Ua,[ks]:Da,[Ca]:Ra,[La]:Pa,[Ua]:Ia,[Da]:ks},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,Cr=Math.PI/180,Ws=180/Math.PI;function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Eh(i,e){return(i%e+e)%e}function dp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fp(i,e,t){return i!==e?(t-i)/(e-i):0}function Pr(i,e,t){return(1-t)*i+t*e}function pp(i,e,t,n){return Pr(i,e,1-Math.exp(-t*n))}function mp(i,e=1){return e-Math.abs(Eh(i,e*2)-e)}function gp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _p(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vp(i,e){return i+Math.random()*(e-i)}function yp(i){return i*(.5-Math.random())}function Mp(i){i!==void 0&&(xu=i);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sp(i){return i*Cr}function bp(i){return i*Ws}function Ep(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Tp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ap(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Po={DEG2RAD:Cr,RAD2DEG:Ws,generateUUID:li,clamp:rt,euclideanModulo:Eh,mapLinear:dp,inverseLerp:fp,lerp:Pr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:xp,randInt:_p,randFloat:vp,randFloatSpread:yp,seededRandom:Mp,degToRad:Sp,radToDeg:bp,isPowerOfTwo:Ep,ceilPowerOfTwo:Tp,floorPowerOfTwo:wp,setQuaternionFromProperEuler:Ap,normalize:yt,denormalize:Zn},Ph=class Ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;var j=Ph,Cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let x=Math.acos(p),E=Math.sin(x);m=Math.sin(m*x)/E,a=Math.sin(a*x)/E,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+_*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+_*a;let x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;var P=Ih,Tc=new P,_u=new Cn,Dh=class Dh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],x=s[1],E=s[4],v=s[7],T=s[2],S=s[5],A=s[8];return r[0]=o*_+a*x+l*T,r[3]=o*p+a*E+l*S,r[6]=o*m+a*v+l*A,r[1]=c*_+h*x+d*T,r[4]=c*p+h*E+d*S,r[7]=c*m+h*v+d*A,r[2]=u*_+f*x+g*T,r[5]=u*p+f*E+g*S,r[8]=u*m+f*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;var Ke=Dh,wc=new Ke,vu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rp(){let i={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ur]:{primaries:e,whitePoint:n,transfer:Nr,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}var at=Rp();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,Oa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=Fr("canvas")),Ss.width=e.width,Ss.height=e.height;let s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cp=0,Xs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ac(s[o].image)):r.push(Ac(s[o]))}else r=Ac(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Pp=0,Rc=new P,yn=class i extends hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=$t,o=mi,a=gn,l=mn,c=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=li(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=mh;yn.DEFAULT_ANISOTROPY=1;var Lh=class Lh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(f+1)/2,T=(m+1)/2,S=(h+u)/4,A=(d+_)/4,y=(g+p)/4;return E>v&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=A/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=y/r),this.set(n,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;var Nt=Lh,Ba=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new yn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends Ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Br=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var cl=class cl{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ip,e,Dp)}lookAt(e,t,n){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Fi.crossVectors(n,An),Fi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Fi.crossVectors(n,An)),Fi.normalize(),Qo.crossVectors(An,Fi),s[0]=Fi.x,s[4]=Qo.x,s[8]=An.x,s[1]=Fi.y,s[5]=Qo.y,s[9]=An.y,s[2]=Fi.z,s[6]=Qo.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],E=n[7],v=n[11],T=n[15],S=s[0],A=s[4],y=s[8],w=s[12],R=s[1],I=s[5],U=s[9],B=s[13],D=s[2],H=s[6],V=s[10],O=s[14],q=s[3],k=s[7],K=s[11],Q=s[15];return r[0]=o*S+a*R+l*D+c*q,r[4]=o*A+a*I+l*H+c*k,r[8]=o*y+a*U+l*V+c*K,r[12]=o*w+a*B+l*O+c*Q,r[1]=h*S+d*R+u*D+f*q,r[5]=h*A+d*I+u*H+f*k,r[9]=h*y+d*U+u*V+f*K,r[13]=h*w+d*B+u*O+f*Q,r[2]=g*S+_*R+p*D+m*q,r[6]=g*A+_*I+p*H+m*k,r[10]=g*y+_*U+p*V+m*K,r[14]=g*w+_*B+p*O+m*Q,r[3]=x*S+E*R+v*D+T*q,r[7]=x*A+E*I+v*H+T*k,r[11]=x*y+E*U+v*V+T*K,r[15]=x*w+E*B+v*O+T*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],x=l*f-c*u,E=a*f-c*d,v=a*u-l*d,T=o*f-c*h,S=o*u-l*h,A=o*d-a*h;return t*(_*x-p*E+m*v)-n*(g*x-p*T+m*S)+s*(g*E-_*T+m*A)-r*(g*v-_*S+p*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=t*a-n*o,E=t*l-s*o,v=t*c-r*o,T=n*l-s*a,S=n*c-r*a,A=s*c-r*l,y=h*_-d*g,w=h*p-u*g,R=h*m-f*g,I=d*p-u*_,U=d*m-f*_,B=u*m-f*p,D=x*B-E*U+v*I+T*R-S*w+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return e[0]=(a*B-l*U+c*I)*H,e[1]=(s*U-n*B-r*I)*H,e[2]=(_*A-p*S+m*T)*H,e[3]=(u*S-d*A-f*T)*H,e[4]=(l*R-o*B-c*w)*H,e[5]=(t*B-s*R+r*w)*H,e[6]=(p*v-g*A-m*E)*H,e[7]=(h*A-u*v+f*E)*H,e[8]=(o*U-a*R+c*y)*H,e[9]=(n*R-t*U-r*y)*H,e[10]=(g*S-_*v+m*x)*H,e[11]=(d*v-h*S-f*x)*H,e[12]=(a*w-o*I-l*y)*H,e[13]=(t*I-n*w+s*y)*H,e[14]=(_*E-g*T-p*x)*H,e[15]=(h*T-d*E+u*x)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,_=o*h,p=o*d,m=a*d,x=l*c,E=l*h,v=l*d,T=n.x,S=n.y,A=n.z;return s[0]=(1-(_+m))*T,s[1]=(f+v)*T,s[2]=(g-E)*T,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(u+m))*S,s[6]=(p+x)*S,s[7]=0,s[8]=(g+E)*A,s[9]=(p-x)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=bs.set(s[0],s[1],s[2]).length(),a=bs.set(s[4],s[5],s[6]).length(),l=bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);let c=1/o,h=1/a,d=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Jn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Jn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Vs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Jn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Jn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Vs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};cl.prototype.isMatrix4=!0;var lt=cl,bs=new P,Wn=new lt,Ip=new P(0,0,0),Dp=new P(1,1,1),Fi=new P,Qo=new P,An=new P,Mu=new lt,Su=new Cn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lp=0,bu=new P,Es=new Cn,Si=new lt,ea=new P,vr=new P,Up=new P,Np=new Cn,Eu=new P(1,0,0),Tu=new P(0,1,0),wu=new P(0,0,1),Au={type:"added"},Fp={type:"removed"},Ts={type:"childadded",child:null},Cc={type:"childremoved",child:null},tn=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new $n,n=new Cn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(vr,ea,this.up):Si.lookAt(ea,vr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(Si),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new P(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var et=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Op={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Pc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Eh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Pc(o,r,e+1/3),this.g=Pc(o,r,e),this.b=Pc(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=Cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return at.workingToColorSpace(pn.copy(this),e),Math.round(rt(pn.r*255,0,255))*65536+Math.round(rt(pn.g*255,0,255))*256+Math.round(rt(pn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Zt){at.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(ta);let n=Pr(Oi.h,ta.h,t),s=Pr(Oi.s,ta.s,t),r=Pr(Oi.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new re;re.NAMES=Cd;var Hr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},os=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new P,bi=new P,Ic=new P,Ei=new P,ws=new P,As=new P,Ru=new P,Dc=new P,Lc=new P,Uc=new P,Nc=new Nt,Fc=new Nt,Oc=new Nt,Ai=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),bi.subVectors(n,t),Ic.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(bi),l=Xn.dot(Ic),c=bi.dot(bi),h=bi.dot(Ic),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Nc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Nc.fromBufferAttribute(e,t),Fc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nc,r.x),o.addScaledVector(Fc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),bi.subVectors(e,t),Xn.cross(bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Xn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ws.subVectors(s,n),As.subVectors(r,n),Dc.subVectors(e,n);let l=ws.dot(Dc),c=As.dot(Dc);if(l<=0&&c<=0)return t.copy(n);Lc.subVectors(e,s);let h=ws.dot(Lc),d=As.dot(Lc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ws,o);Uc.subVectors(e,r);let f=ws.dot(Uc),g=As.dot(Uc);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(As,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Ru.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Ru,a);let m=1/(p+_+u);return o=_*m,a=u*m,t.copy(n).addScaledVector(ws,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ia.subVectors(this.max,yr),Rs.subVectors(e.a,yr),Cs.subVectors(e.b,yr),Ps.subVectors(e.c,yr),Bi.subVectors(Cs,Rs),zi.subVectors(Ps,Cs),ts.subVectors(Rs,Ps);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ts.z,ts.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ts.z,0,-ts.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ts.y,ts.x,0];return!Bc(t,Rs,Cs,Ps,ia)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Rs,Cs,Ps,ia))?!1:(sa.crossVectors(Bi,zi),t=[sa.x,sa.y,sa.z],Bc(t,Rs,Cs,Ps,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new P,new P,new P,new P,new P,new P,new P,new P],qn=new P,na=new ui,Rs=new P,Cs=new P,Ps=new P,Bi=new P,zi=new P,ts=new P,yr=new P,ia=new P,sa=new P,ns=new P;function Bc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ns.fromArray(i,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yt=new P,ra=new j,Bp=0,At=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var kr=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vr=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},zp=new ui,Mr=new P,zc=new P,Ci=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(zc)),this.expandByPoint(Mr.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hp=0,Ln=new lt,Hc=new tn,Is=new P,Rn=new ui,Sr=new ui,en=new P,Rt=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?Vr:kr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Rn.min,Sr.min),Rn.expandByPoint(en),en.addVectors(Rn.max,Sr.max),Rn.expandByPoint(en)):(Rn.expandByPoint(Sr.min),Rn.expandByPoint(Sr.max))}Rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),en.add(Is)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new At(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new P,l[y]=new P;let c=new P,h=new P,d=new P,u=new j,f=new j,g=new j,_=new P,p=new P;function m(y,w,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[y].add(_),a[w].add(_),a[R].add(_),l[y].add(p),l[w].add(p),l[R].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,w=x.length;y<w;++y){let R=x[y],I=R.start,U=R.count;for(let B=I,D=I+U;B<D;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let E=new P,v=new P,T=new P,S=new P;function A(y){T.fromBufferAttribute(s,y),S.copy(T);let w=a[y];E.copy(w),E.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(S,w);let I=v.dot(l[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,I)}for(let y=0,w=x.length;y<w;++y){let R=x[y],I=R.start,U=R.count;for(let B=I,D=I+U;B<D;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new At(u,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ha=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sh,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},vn=new P,Gr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kc=new P,kp=new P,Vp=new Ke,Yn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=kc.subVectors(n,t).cross(kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vp.getNormalMatrix(e),s=this.coplanarPoint(kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gp=0,Kn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Zi,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new j().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pi=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ds,br=new P,Ls=new P,Us=new P,Ns=new j,Er=new j,Pd=new lt,oa=new P,Tr=new P,aa=new P,Cu=new j,Vc=new j,Pu=new j,ki=class extends tn{constructor(e=new Pi){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ha(t,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Gr(n,3,0,!1)),Ds.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=Ds,this.material=e,this.center=new j(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Us.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;la(oa.set(-.5,-.5,0),Us,o,Ls,s,r),la(Tr.set(.5,-.5,0),Us,o,Ls,s,r),la(aa.set(.5,.5,0),Us,o,Ls,s,r),Cu.set(0,0),Vc.set(1,0),Pu.set(1,1);let a=e.ray.intersectTriangle(oa,Tr,aa,!1,br);if(a===null&&(la(Tr.set(-.5,.5,0),Us,o,Ls,s,r),Vc.set(0,1),a=e.ray.intersectTriangle(oa,aa,Tr,!1,br),a===null))return;let l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:Ai.getInterpolation(br,oa,Tr,aa,Cu,Vc,Pu,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function la(i,e,t,n,s,r){Ns.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Er.x=r*Ns.x-s*Ns.y,Er.y=s*Ns.x+r*Ns.y):Er.copy(Ns),i.copy(e),i.x+=Er.x,i.y+=Er.y,i.applyMatrix4(Pd)}var wi=new P,Gc=new P,ca=new P,ha=new P,Wr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gc.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),ha.copy(this.origin).sub(Gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Gc).addScaledVector(ca,u),f}intersectSphere(e,t){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,_=t.y-o.y,p=t.z-o.z,m=n.x-o.x,x=n.y-o.y,E=n.z-o.z,v=Math.abs(l),T=Math.abs(c),S=Math.abs(h),A,y,w,R,I,U,B,D,H,V,O,q;if(v>=T&&v>=S?(w=l,U=d,H=g,q=m,l>=0?(A=c,y=h,R=u,I=f,B=_,D=p,V=x,O=E):(A=h,y=c,R=f,I=u,B=p,D=_,V=E,O=x)):T>=S?(w=c,U=u,H=_,q=x,c>=0?(A=h,y=l,R=f,I=d,B=p,D=g,V=E,O=m):(A=l,y=h,R=d,I=f,B=g,D=p,V=m,O=E)):(w=h,U=f,H=p,q=E,h>=0?(A=l,y=c,R=d,I=u,B=g,D=_,V=m,O=x):(A=c,y=l,R=u,I=d,B=_,D=g,V=x,O=m)),w===0)return null;let k=A/w,K=y/w,Q=1/w,Ae=R-k*U,Me=I-K*U,je=B-k*H,$e=D-K*H,it=V-k*q,Z=O-K*q,ee=it*$e-Z*je,de=Ae*Z-Me*it,Be=je*Me-$e*Ae;if(s){if(ee<0||de<0||Be<0)return null}else if((ee<0||de<0||Be<0)&&(ee>0||de>0||Be>0))return null;let Te=ee+de+Be;if(Te===0)return null;let Ge=Q*(ee*U+de*H+Be*q);return(Te>0?Ge<0:Ge>0)?null:this.at(Ge/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bn=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Iu=new lt,is=new Wr,ua=new Ci,Du=new P,da=new P,fa=new P,pa=new P,Wc=new P,ma=new P,Lu=new P,ga=new P,ae=class extends tn{constructor(e=new Rt,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Wc.fromBufferAttribute(d,e),o?ma.addScaledVector(Wc,h):ma.addScaledVector(Wc.sub(t),h))}t.add(ma)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(ua.containsPoint(is.origin)===!1&&(is.intersectSphere(ua,Du)===null||is.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Iu.copy(r).invert(),is.copy(e.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=x,T=E;v<T;v+=3){let S=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);s=xa(this,m,e,n,c,h,d,S,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let x=a.getX(p),E=a.getX(p+1),v=a.getX(p+2);s=xa(this,o,e,n,c,h,d,x,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=x,T=E;v<T;v+=3){let S=v,A=v+1,y=v+2;s=xa(this,m,e,n,c,h,d,S,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let x=p,E=p+1,v=p+2;s=xa(this,o,e,n,c,h,d,x,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Wp(i,e,t,n,s,r,o,a){let l;if(e.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Yi,a),l===null)return null;ga.copy(a),ga.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:i}}function xa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,da),i.getVertexPosition(l,fa),i.getVertexPosition(c,pa);let h=Wp(i,e,t,n,da,fa,pa,Lu);if(h){let d=new P;Ai.getBarycoord(Lu,da,fa,pa,d),s&&(h.uv=Ai.getInterpolatedAttribute(s,a,l,c,d,new j)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,l,c,d,new j)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Ai.getNormal(da,fa,pa,u.normal),h.face=u,h.barycoord=d}return h}var jn=class extends yn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Gt,h=Gt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xr=class extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fs=new lt,Uu=new lt,_a=[],Nu=new ui,Xp=new lt,wr=new ae,Ar=new Ci,Ys=class extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Nu.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Nu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Ar.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),Uu.multiplyMatrices(n,Fs),wr.matrixWorld=Uu,wr.raycast(e,_a);for(let o=0,a=_a.length;o<a;o++){let l=_a[o];l.instanceId=r,l.object=this,t.push(l)}_a.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jn(new Float32Array(s*this.count),s,this.count,xl,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new Ci,qp=new j(.5,.5),va=new P,Zs=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],x=r[12],E=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,m-g,T-x).normalize(),s[1].setComponents(c+o,f+h,m+g,T+x).normalize(),s[2].setComponents(c+a,f+d,m+_,T+E).normalize(),s[3].setComponents(c-a,f-d,m-_,T-E).normalize(),n)s[4].setComponents(l,u,p,v).normalize(),s[5].setComponents(c-l,f-u,m-p,T-v).normalize();else if(s[4].setComponents(c-l,f-u,m-p,T-v).normalize(),t===Jn)s[5].setComponents(c+l,f+u,m+p,T+v).normalize();else if(t===Vs)s[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=qp.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(va.x=s.normal.x>0?e.max.x:e.min.x,va.y=s.normal.y>0?e.max.y:e.min.y,va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ka=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fu=new lt,eh=new Wr,ya=new Ci,Ma=new P,Js=class extends tn{constructor(e=new Rt,t=new ka){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Fu.copy(s).invert(),eh.copy(e.ray).applyMatrix4(Fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){let p=c.getX(g);Ma.fromBufferAttribute(d,p),Ou(Ma,p,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)Ma.fromBufferAttribute(d,g),Ou(Ma,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ou(i,e,t,n,s,r,o){let a=eh.distanceSqToPoint(i);if(a<t){let l=new P;eh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qr=class extends yn{constructor(e=[],t=Ji,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},as=class extends yn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends yn{constructor(e,t,n=ti,s,r,o,a=Gt,l=Gt,c,h=ci,d=1){if(h!==ci&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Va=class extends di{constructor(e,t=ti,n=Ji,s,r,o=Gt,a=Gt,l,c=ci){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yr=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},nn=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function g(_,p,m,x,E,v,T,S,A,y,w){let R=v/A,I=T/y,U=v/2,B=T/2,D=S/2,H=A+1,V=y+1,O=0,q=0,k=new P;for(let K=0;K<V;K++){let Q=K*I-B;for(let Ae=0;Ae<H;Ae++){let Me=Ae*R-U;k[_]=Me*x,k[p]=Q*E,k[m]=D,c.push(k.x,k.y,k.z),k[_]=0,k[p]=0,k[m]=S>0?1:-1,h.push(k.x,k.y,k.z),d.push(Ae/A),d.push(1-K/y),O+=1}}for(let K=0;K<y;K++)for(let Q=0;Q<A;Q++){let Ae=u+Q+H*K,Me=u+Q+H*(K+1),je=u+(Q+1)+H*(K+1),$e=u+(Q+1)+H*K;l.push(Ae,Me,$e),l.push(Me,je,$e),q+=6}a.addGroup(f,q,w),f+=q,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},fi=class i extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=n*2+r,_=s+1,p=new P,m=new P;for(let x=0;x<=g;x++){let E=0,v=0,T=0,S=0;if(x<=n){let w=x/n,R=w*Math.PI/2;v=-h-e*Math.cos(R),T=e*Math.sin(R),S=-e*Math.cos(R),E=w*d}else if(x<=n+r){let w=(x-n)/r;v=-h+w*t,T=e,S=0,E=d+w*u}else{let w=(x-n-r)/n,R=w*Math.PI/2;v=h+e*Math.sin(R),T=e*Math.cos(R),S=e*Math.sin(R),E=d+u+w*d}let A=Math.max(0,Math.min(1,E/f)),y=0;x===0?y=.5/s:x===g&&(y=-.5/s);for(let w=0;w<=s;w++){let R=w/s,I=R*Math.PI*2,U=Math.sin(I),B=Math.cos(I);m.x=-T*B,m.y=v,m.z=T*U,a.push(m.x,m.y,m.z),p.set(-T*B,S,T*U),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+y,A)}if(x>0){let w=(x-1)*_;for(let R=0;R<s;R++){let I=w+R,U=w+R+1,B=x*_+R,D=x*_+R+1;o.push(I,U,B),o.push(U,D,B)}}}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Qn=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jt=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],p=n/2,m=0;x(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function x(){let v=new P,T=new P,S=0,A=(t-e)/n;for(let y=0;y<=r;y++){let w=[],R=y/r,I=R*(t-e)+e;for(let U=0;U<=s;U++){let B=U/s,D=B*l+a,H=Math.sin(D),V=Math.cos(D);T.x=I*H,T.y=-R*n+p,T.z=I*V,d.push(T.x,T.y,T.z),v.set(H,A,V).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-R),w.push(g++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let R=_[w][y],I=_[w+1][y],U=_[w+1][y+1],B=_[w][y+1];(e>0||w!==0)&&(h.push(R,I,B),S+=3),(t>0||w!==r-1)&&(h.push(I,U,B),S+=3)}c.addGroup(m,S,0),m+=S}function E(v){let T=g,S=new j,A=new P,y=0,w=v===!0?e:t,R=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let D=U/s*l+a,H=Math.cos(D),V=Math.sin(D);A.x=w*V,A.y=p*R,A.z=w*H,d.push(A.x,A.y,A.z),u.push(0,R,0),S.x=H*.5+.5,S.y=V*.5*R+.5,f.push(S.x,S.y),g++}for(let U=0;U<s;U++){let B=T+U,D=I+U;v===!0?h.push(D,D+1,B):h.push(D+1,D,B),y+=3}c.addGroup(m,y,v===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ls=class i extends Jt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zr=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let E=new P,v=new P,T=new P;for(let S=0;S<t.length;S+=3)f(t[S+0],E),f(t[S+1],v),f(t[S+2],T),l(E,v,T,x)}function l(x,E,v,T){let S=T+1,A=[];for(let y=0;y<=S;y++){A[y]=[];let w=x.clone().lerp(v,y/S),R=E.clone().lerp(v,y/S),I=S-y;for(let U=0;U<=I;U++)U===0&&y===S?A[y][U]=w:A[y][U]=w.clone().lerp(R,U/I)}for(let y=0;y<S;y++)for(let w=0;w<2*(S-y)-1;w++){let R=Math.floor(w/2);w%2===0?(u(A[y][R+1]),u(A[y+1][R]),u(A[y][R])):(u(A[y][R+1]),u(A[y+1][R+1]),u(A[y+1][R]))}}function c(x){let E=new P;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(x),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let x=new P;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];let v=p(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;o.push(v,1-T)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){let E=o[x+0],v=o[x+2],T=o[x+4],S=Math.max(E,v,T),A=Math.min(E,v,T);S>.9&&A<.1&&(E<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,E){let v=x*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function g(){let x=new P,E=new P,v=new P,T=new P,S=new j,A=new j,y=new j;for(let w=0,R=0;w<r.length;w+=9,R+=6){x.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),S.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),T.copy(x).add(E).add(v).divideScalar(3);let I=p(T);_(S,R+0,x,I),_(A,R+2,E,I),_(y,R+4,v,I)}}function _(x,E,v,T){T<0&&x.x===1&&(o[E]=x.x-1),v.x===0&&v.z===0&&(o[E]=T/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new j:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new lt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$s=class extends Pn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new j){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ga=class extends $s{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Bu=new P,zu=new P,Xc=new Th,qc=new Th,Yc=new Th,Wa=class extends Pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zu.subVectors(s[0],s[1]).add(s[0]),c=zu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Bu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Xc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,p),qc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,p),Yc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),qc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Yc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Xc.calc(l),qc.calc(l),Yc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Yp(i,e){let t=1-i;return t*t*e}function Zp(i,e){return 2*(1-i)*i*e}function Jp(i,e){return i*i*e}function Ir(i,e,t,n){return Yp(i,e)+Zp(i,t)+Jp(i,n)}function $p(i,e){let t=1-i;return t*t*t*e}function Kp(i,e){let t=1-i;return 3*t*t*i*e}function jp(i,e){return 3*(1-i)*i*i*e}function Qp(i,e){return i*i*i*e}function Dr(i,e,t,n,s){return $p(i,e)+Kp(i,t)+jp(i,n)+Qp(i,s)}var Jr=class extends Pn{constructor(e=new j,t=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new j){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(e,s.x,r.x,o.x,a.x),Dr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xa=class extends Pn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(e,s.x,r.x,o.x,a.x),Dr(e,s.y,r.y,o.y,a.y),Dr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends Pn{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends Pn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Pn{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ir(e,s.x,r.x,o.x),Ir(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Pn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ir(e,s.x,r.x,o.x),Ir(e,s.y,r.y,o.y),Ir(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Hu(a,l.x,c.x,h.x,d.x),Hu(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new j().fromArray(s))}return this}},th=Object.freeze({__proto__:null,ArcCurve:Ga,CatmullRomCurve3:Wa,CubicBezierCurve:Jr,CubicBezierCurve3:Xa,EllipseCurve:$s,LineCurve:$r,LineCurve3:qa,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:Ya,SplineCurve:jr}),Za=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new th[s.type]().fromJSON(s))}return this}},Qr=class extends Za{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $r(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Kr(this.currentPoint.clone(),new j(e,t),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Jr(this.currentPoint.clone(),new j(e,t),new j(n,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new jr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new $s(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pi=class extends Qr{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Qr().fromJSON(s))}return this}};function em(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Id(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=rm(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return eo(r,o,t,a,l,c,0),o}function Id(i,e,t,n,s){let r;if(s===gm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=ku(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ku(o/n|0,i[o],i[o+1],r);return r&&Ks(r,r.next)&&(no(r),r=r.next),r}function cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||Bt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&hm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?nm(i,n,s,r):tm(i)){e.push(l.i,i.i,c.i),no(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=im(cs(i),e),eo(i,e,t,n,s,r,2)):o===2&&sm(i,e,t,n,s,r):eo(cs(i),e,t,n,s,r,1);break}}}function tm(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Rr(s,a,r,l,o,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),_=Math.max(a,l,c),p=Math.max(h,d,u),m=nh(f,g,e,t,n),x=nh(_,p,e,t,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=m&&v&&v.z<=x;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Rr(a,h,l,d,c,u,E.x,E.y)&&Bt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Rr(a,h,l,d,c,u,v.x,v.y)&&Bt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Rr(a,h,l,d,c,u,E.x,E.y)&&Bt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Rr(a,h,l,d,c,u,v.x,v.y)&&Bt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function im(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ks(n,s)&&Ld(n,t,t.next,s)&&to(n,s)&&to(s,n)&&(e.push(n.i,t.i,s.i),no(t),no(t.next),t=i=s),t=t.next}while(t!==i);return cs(t)}function sm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fm(o,a)){let l=Ud(o,a);o=cs(o,o.next),l=cs(l,l.next),eo(o,e,t,n,s,r,0),eo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Id(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(dm(c))}s.sort(om);for(let r=0;r<s.length;r++)t=am(s[r],t);return t}function om(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function am(i,e){let t=lm(i,e);if(!t)return e;let n=Ud(t,i);return cs(n,n.next),cs(t,t.next)}function lm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ks(i,t))return t;do{if(Ks(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Dd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);to(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&cm(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function cm(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function hm(i,e,t,n){let s=i;do s.z===0&&(s.z=nh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,um(s)}function um(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function nh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function dm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Dd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Rr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Dd(i,e,t,n,s,r,o,a)}function fm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!pm(i,e)&&(to(i,e)&&to(e,i)&&mm(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||Ks(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ks(i,e){return i.x===e.x&&i.y===e.y}function Ld(i,e,t,n){let s=ba(Bt(i,e,t)),r=ba(Bt(i,e,n)),o=ba(Bt(t,n,i)),a=ba(Bt(t,n,e));return!!(s!==r&&o!==a||s===0&&Sa(i,t,e)||r===0&&Sa(i,n,e)||o===0&&Sa(t,i,n)||a===0&&Sa(t,e,n))}function Sa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ba(i){return i>0?1:i<0?-1:0}function pm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ld(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function to(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function mm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ud(i,e){let t=ih(i.i,i.x,i.y),n=ih(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ku(i,e,t,n){let s=ih(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var sh=class{static triangulate(e,t,n=2){return em(e,t,n)}},ai=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Vu(e),Gu(n,e);let o=e.length;t.forEach(Vu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Gu(n,t[l]);let a=sh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Gu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var hs=class i extends Rt{constructor(e=new pi([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:xm,E,v=!1,T,S,A,y;if(m){E=m.getSpacedPoints(h),v=!0,u=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,ne),S=new P,A=new P,y=new P}u||(p=0,f=0,g=0,_=0);let w=a.extractPoints(c),R=w.shape,I=w.holes;if(!ai.isClockWise(R)){R=R.reverse();for(let ne=0,oe=I.length;ne<oe;ne++){let le=I[ne];ai.isClockWise(le)&&(I[ne]=le.reverse())}}function B(ne){let le=10000000000000001e-36,ce=ne[0];for(let ue=1;ue<=ne.length;ue++){let Ve=ue%ne.length,ze=ne[Ve],We=ze.x-ce.x,Ye=ze.y-ce.y,L=We*We+Ye*Ye,ut=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ce.x),Math.abs(ce.y)),tt=le*ut*ut;if(L<=tt){ne.splice(Ve,1),ue--;continue}ce=ze}}B(R),I.forEach(B);let D=I.length,H=R;for(let ne=0;ne<D;ne++){let oe=I[ne];R=R.concat(oe)}function V(ne,oe,le){return oe||qe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(oe,le)}let O=R.length;function q(ne,oe,le){let ce,ue,Ve,ze=ne.x-oe.x,We=ne.y-oe.y,Ye=le.x-ne.x,L=le.y-ne.y,ut=ze*ze+We*We,tt=ze*L-We*Ye;if(Math.abs(tt)>Number.EPSILON){let C=Math.sqrt(ut),M=Math.sqrt(Ye*Ye+L*L),z=oe.x-We/C,G=oe.y+ze/C,J=le.x-L/M,he=le.y+Ye/M,fe=((J-z)*L-(he-G)*Ye)/(ze*L-We*Ye);ce=z+ze*fe-ne.x,ue=G+We*fe-ne.y;let $=ce*ce+ue*ue;if($<=2)return new j(ce,ue);Ve=Math.sqrt($/2)}else{let C=!1;ze>Number.EPSILON?Ye>Number.EPSILON&&(C=!0):ze<-Number.EPSILON?Ye<-Number.EPSILON&&(C=!0):Math.sign(We)===Math.sign(L)&&(C=!0),C?(ce=-We,ue=ze,Ve=Math.sqrt(ut)):(ce=ze,ue=We,Ve=Math.sqrt(ut/2))}return new j(ce/Ve,ue/Ve)}let k=[];for(let ne=0,oe=H.length,le=oe-1,ce=ne+1;ne<oe;ne++,le++,ce++)le===oe&&(le=0),ce===oe&&(ce=0),k[ne]=q(H[ne],H[le],H[ce]);let K=[],Q,Ae=k.concat();for(let ne=0,oe=D;ne<oe;ne++){let le=I[ne];Q=[];for(let ce=0,ue=le.length,Ve=ue-1,ze=ce+1;ce<ue;ce++,Ve++,ze++)Ve===ue&&(Ve=0),ze===ue&&(ze=0),Q[ce]=q(le[ce],le[Ve],le[ze]);K.push(Q),Ae=Ae.concat(Q)}let Me;if(p===0)Me=ai.triangulateShape(H,I);else{let ne=[],oe=[];for(let le=0;le<p;le++){let ce=le/p,ue=f*Math.cos(ce*Math.PI/2),Ve=g*Math.sin(ce*Math.PI/2)+_;for(let ze=0,We=H.length;ze<We;ze++){let Ye=V(H[ze],k[ze],Ve);de(Ye.x,Ye.y,-ue),ce===0&&ne.push(Ye)}for(let ze=0,We=D;ze<We;ze++){let Ye=I[ze];Q=K[ze];let L=[];for(let ut=0,tt=Ye.length;ut<tt;ut++){let C=V(Ye[ut],Q[ut],Ve);de(C.x,C.y,-ue),ce===0&&L.push(C)}ce===0&&oe.push(L)}}Me=ai.triangulateShape(ne,oe)}let je=Me.length,$e=g+_;for(let ne=0;ne<O;ne++){let oe=u?V(R[ne],Ae[ne],$e):R[ne];v?(A.copy(T.normals[0]).multiplyScalar(oe.x),S.copy(T.binormals[0]).multiplyScalar(oe.y),y.copy(E[0]).add(A).add(S),de(y.x,y.y,y.z)):de(oe.x,oe.y,0)}for(let ne=1;ne<=h;ne++)for(let oe=0;oe<O;oe++){let le=u?V(R[oe],Ae[oe],$e):R[oe];v?(A.copy(T.normals[ne]).multiplyScalar(le.x),S.copy(T.binormals[ne]).multiplyScalar(le.y),y.copy(E[ne]).add(A).add(S),de(y.x,y.y,y.z)):de(le.x,le.y,d/h*ne)}for(let ne=p-1;ne>=0;ne--){let oe=ne/p,le=f*Math.cos(oe*Math.PI/2),ce=g*Math.sin(oe*Math.PI/2)+_;for(let ue=0,Ve=H.length;ue<Ve;ue++){let ze=V(H[ue],k[ue],ce);de(ze.x,ze.y,d+le)}for(let ue=0,Ve=I.length;ue<Ve;ue++){let ze=I[ue];Q=K[ue];for(let We=0,Ye=ze.length;We<Ye;We++){let L=V(ze[We],Q[We],ce);v?de(L.x,L.y+E[h-1].y,E[h-1].x+le):de(L.x,L.y,d+le)}}}it(),Z();function it(){let ne=s.length/3;if(u){let oe=0,le=O*oe;for(let ce=0;ce<je;ce++){let ue=Me[ce];Be(ue[2]+le,ue[1]+le,ue[0]+le)}oe=h+p*2,le=O*oe;for(let ce=0;ce<je;ce++){let ue=Me[ce];Be(ue[0]+le,ue[1]+le,ue[2]+le)}}else{for(let oe=0;oe<je;oe++){let le=Me[oe];Be(le[2],le[1],le[0])}for(let oe=0;oe<je;oe++){let le=Me[oe];Be(le[0]+O*h,le[1]+O*h,le[2]+O*h)}}n.addGroup(ne,s.length/3-ne,0)}function Z(){let ne=s.length/3,oe=0;ee(H,oe),oe+=H.length;for(let le=0,ce=I.length;le<ce;le++){let ue=I[le];ee(ue,oe),oe+=ue.length}n.addGroup(ne,s.length/3-ne,1)}function ee(ne,oe){let le=ne.length;for(;--le>=0;){let ce=le,ue=le-1;ue<0&&(ue=ne.length-1);for(let Ve=0,ze=h+p*2;Ve<ze;Ve++){let We=O*Ve,Ye=O*(Ve+1),L=oe+ce+We,ut=oe+ue+We,tt=oe+ue+Ye,C=oe+ce+Ye;Te(L,ut,tt,C)}}}function de(ne,oe,le){l.push(ne),l.push(oe),l.push(le)}function Be(ne,oe,le){Ge(ne),Ge(oe),Ge(le);let ce=s.length/3,ue=x.generateTopUV(n,s,ce-3,ce-2,ce-1);dt(ue[0]),dt(ue[1]),dt(ue[2])}function Te(ne,oe,le,ce){Ge(ne),Ge(oe),Ge(ce),Ge(oe),Ge(le),Ge(ce);let ue=s.length/3,Ve=x.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);dt(Ve[0]),dt(Ve[1]),dt(Ve[3]),dt(Ve[1]),dt(Ve[2]),dt(Ve[3])}function Ge(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function dt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _m(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new th[s.type]().fromJSON(s)),new i(n,e.options)}},xm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new j(r,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-d),new j(u,1-g),new j(_,1-m)]:[new j(a,1-l),new j(h,1-d),new j(f,1-g),new j(p,1-m)]}};function _m(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Vi=class i extends Zr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},io=class i extends Rt{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new P,u=new j,f=new P,g=new P,_=new P,p=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:p=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=t;x++){let E=n+x*h*s,v=Math.sin(E),T=Math.cos(E);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*v,d.y=e[S].y,d.z=e[S].x*T,o.push(d.x,d.y,d.z),u.x=x/t,u.y=S/(e.length-1),a.push(u.x,u.y);let A=l[3*S+0]*v,y=l[3*S+1],w=l[3*S+0]*T;c.push(A,y,w)}}for(let x=0;x<t;x++)for(let E=0;E<e.length-1;E++){let v=E+x*e.length,T=v,S=v+e.length,A=v+e.length+1,y=v+1;r.push(T,S,y),r.push(A,y,S)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},so=class i extends Zr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Mn=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let x=m*u-o;for(let E=0;E<c;E++){let v=E*d-r;g.push(v,-x,0),_.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let E=x+c*m,v=x+c*(m+1),T=x+1+c*(m+1),S=x+1+c*m;f.push(E,v,S),f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ro=class i extends Rt{constructor(e=new pi([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;ai.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let x=g[p];ai.isClockWise(x)===!0&&(g[p]=x.reverse())}let _=ai.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let x=g[p];f=f.concat(x)}for(let p=0,m=f.length;p<m;p++){let x=f[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=_.length;p<m;p++){let x=_[p],E=x[0]+d,v=x[1]+d,T=x[2]+d;n.push(E,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function vm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var zt=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let x=[],E=m/n,v=o+E*a,T=e*Math.cos(v),S=Math.sqrt(e*e-T*T),A=0;m===0&&o===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let w=y/t,R=s+w*r;d.x=-S*Math.cos(R),d.y=T,d.z=S*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(w+A,1-E),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let E=h[m][x+1],v=h[m][x],T=h[m+1][x],S=h[m+1][x+1];(m!==0||o>0)&&f.push(E,v,S),(m!==n-1||l<Math.PI)&&f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ln=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let m=0;m<=s;m++){let x=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,x=(s+1)*(_-1)+p-1,E=(s+1)*(_-1)+p,v=(s+1)*_+p;l.push(m,x,v),l.push(x,E,v)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Wu(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Wu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=ms(i[t]);for(let s in n)e[s]=n[s]}return e}function Wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ym(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var hn={clone:ms,merge:xn},Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gt=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new re().setHex(s.value);break;case"v2":this.uniforms[n].value=new j().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},js=class extends gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pt=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xt=class extends pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var oo=class extends Kn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Ja=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$a=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends Gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jc:r=e,a=2*t-n;break;case Qc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:o=e,l=2*n-t;break;case Qc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,x=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,E=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+x*o[c+T]+E*o[l+T]+v*o[d+T];return r}},ja=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Qa=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},el=class extends Gi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),_=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*g;return r}let u=a*2,f=e-1;for(let g=0;g!==a;++g){let _=o[c+g],p=o[l+g],m=f*u+g*2,x=d[m],E=d[m+1],v=e*u+g*2,T=h[v],S=h[v+1],A=Em(n,t,x,T,s);r[g]=Nd(A,_,E,S,p)}return r}};function Nd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Em(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Nd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=bm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Zc(e.settings)&&(n.settings={inTangents:Os(e.settings.inTangents,Array),outTangents:Os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new el(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case wa:t=this.InterpolantFactoryMethodSmooth;break;case $c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Zc(this.settings)&&(Xu(this.settings.inTangents,e),Xu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&up(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Zc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Fa;var Wi=class extends In{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Lr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};tl.prototype.ValueTypeName="color";var nl=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};nl.prototype.ValueTypeName="number";var il=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ao=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends In{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Lr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};sl.prototype.ValueTypeName="vector";var rl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fd=new rl,ol=class{constructor(e){this.manager=e!==void 0?e:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lo=class extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jc=new lt,qu=new P,Yu=new P,co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(qu),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Jc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Vs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ea=new P,Ta=new Cn,ri=new P,ho=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ea,Ta,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ea,Ta,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new P,Zu=new j,Ju=new j,an=class extends ho{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,Ju),t.subVectors(Ju,Zu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var rh=class extends co{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},er=class extends Qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qi=class extends ho{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oh=class extends co{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Bs=-90,zs=1,al=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Bs,zs,e,t);s.layers=this.layers,this.add(s);let r=new an(Bs,zs,e,t);r.layers=this.layers,this.add(r);let o=new an(Bs,zs,e,t);o.layers=this.layers,this.add(o);let a=new an(Bs,zs,e,t);a.layers=this.layers,this.add(a);let l=new an(Bs,zs,e,t);l.layers=this.layers,this.add(l);let c=new an(Bs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ll=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},uo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Tm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tm(){this._document.hidden===!1&&this.reset()}var Ah="\\[\\]\\.:\\/",wm=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",Am="[^"+Ah.replace("\\.","")+"]",Rm=/((?:WC+[\/:])*)/.source.replace("WC",Rh),Cm=/(WCOD+)?/.source.replace("WCOD",Am),Pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),Im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),Dm=new RegExp("^"+Rm+Cm+Pm+Im+"$"),Lm=["material","materials","bones","map"],ah=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wm,"")}static parseTrackName(e){let t=Dm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=ah;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wv=new Float32Array(1);var Uh=class Uh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Uh.prototype.isMatrix2=!0;var lh=Uh;function Ch(i,e,t,n){let s=Um(n);switch(t){case yh:return i*e;case xl:return i*e/s.components*s.byteLength;case _l:return i*e/s.components*s.byteLength;case Ki:return i*e*2/s.components*s.byteLength;case vl:return i*e*2/s.components*s.byteLength;case Mh:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case yl:return i*e*4/s.components*s.byteLength;case bo:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:case El:return Math.max(i,16)*Math.max(e,8)/4;case Ml:case bl:return Math.max(i,8)*Math.max(e,8)/2;case Tl:case wl:case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Al:case Ao:case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(i){switch(i){case mn:case gh:return{byteLength:1,components:1};case ir:case xh:case Ht:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case ti:case pl:case Fn:return{byteLength:4,components:1};case _h:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rf(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,N0=`uniform sampler2D dfgLUT;
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
}`,F0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
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
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sg=`float getShadowMask() {
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`#include <common>
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
}`,Wg=`#if DEPTH_PACKING == 3200
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
}`,Xg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,Qg=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,sx=`#define NORMAL
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
}`,rx=`#define PHONG
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
}`,ox=`#define PHONG
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
}`,ax=`#define STANDARD
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
}`,lx=`#define STANDARD
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
}`,cx=`#define TOON
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
}`,hx=`#define TOON
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
}`,ux=`uniform float size;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,gx=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Om,alphahash_pars_fragment:Bm,alphamap_fragment:zm,alphamap_pars_fragment:Hm,alphatest_fragment:km,alphatest_pars_fragment:Vm,aomap_fragment:Gm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:Ym,beginnormal_vertex:Zm,bsdfs:Jm,iridescence_fragment:$m,bumpmap_pars_fragment:Km,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:x0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:y0,fog_pars_vertex:M0,fog_fragment:S0,fog_pars_fragment:b0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:T0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:P0,lights_toon_pars_fragment:I0,lights_phong_fragment:D0,lights_phong_pars_fragment:L0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:B0,lightprobes_pars_fragment:z0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:G0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:J0,morphinstance_vertex:$0,morphcolor_vertex:K0,morphnormal_vertex:j0,morphtarget_pars_vertex:Q0,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:sg,normal_vertex:rg,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:hg,opaque_fragment:ug,packing:dg,premultiplied_alpha_fragment:fg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:xg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:yg,shadowmap_vertex:Mg,shadowmask_pars_fragment:Sg,skinbase_vertex:bg,skinning_pars_vertex:Eg,skinning_vertex:Tg,skinnormal_vertex:wg,specularmap_fragment:Ag,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Pg,transmission_fragment:Ig,transmission_pars_fragment:Dg,uv_pars_fragment:Lg,uv_pars_vertex:Ug,uv_vertex:Ng,worldpos_vertex:Fg,background_vert:Og,background_frag:Bg,backgroundCube_vert:zg,backgroundCube_frag:Hg,cube_vert:kg,cube_frag:Vg,depth_vert:Gg,depth_frag:Wg,distance_vert:Xg,distance_frag:qg,equirect_vert:Yg,equirect_frag:Zg,linedashed_vert:Jg,linedashed_frag:$g,meshbasic_vert:Kg,meshbasic_frag:jg,meshlambert_vert:Qg,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:lx,meshtoon_vert:cx,meshtoon_frag:hx,points_vert:ux,points_frag:dx,shadow_vert:fx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},Se={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},_i={basic:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:xn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:xn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new re(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:xn([Se.points,Se.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:xn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:xn([Se.common,Se.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:xn([Se.sprite,Se.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:xn([Se.common,Se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:xn([Se.lights,Se.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};_i.physical={uniforms:xn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Ql={r:0,b:0,g:0},xx=new lt,of=new Ke;of.set(-1,0,0,0,1,0,0,0,1);function _x(i,e,t,n,s,r){let o=new re(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let v=x.backgroundBlurriness>0;E=e.get(E,v)}return E}function g(x){let E=!1,v=f(x);v===null?p(o,a):v&&v.isColor&&(p(v,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,E){let v=f(E);v&&(v.isCubeTexture||v.mapping===Mo)?(c===void 0&&(c=new ae(new nn(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:ms(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xx.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=at.getTransfer(v.colorSpace)!==mt,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ae(new Mn(2,2),new gt({name:"BackgroundMaterial",uniforms:ms(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=at.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,E){x.getRGB(Ql,wh(i)),t.buffers.color.setClear(Ql.r,Ql.g,Ql.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:_,dispose:m}}function vx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,U,B,D,H){let V=!1,O=d(I,D,B,U);r!==O&&(r=O,c(r.object)),V=f(I,D,B,H),V&&g(I,D,B,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(I,U,B,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,U,B,D){let H=D.wireframe===!0,V=n[U.id];V===void 0&&(V={},n[U.id]=V);let O=I.isInstancedMesh===!0?I.id:0,q=V[O];q===void 0&&(q={},V[O]=q);let k=q[B.id];k===void 0&&(k={},q[B.id]=k);let K=k[H];return K===void 0&&(K=u(l()),k[H]=K),K}function u(I){let U=[],B=[],D=[];for(let H=0;H<t;H++)U[H]=0,B[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,U,B,D){let H=r.attributes,V=U.attributes,O=0,q=B.getAttributes();for(let k in q)if(q[k].location>=0){let Q=H[k],Ae=V[k];if(Ae===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(Ae=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(Ae=I.instanceColor)),Q===void 0||Q.attribute!==Ae||Ae&&Q.data!==Ae.data)return!0;O++}return r.attributesNum!==O||r.index!==D}function g(I,U,B,D){let H={},V=U.attributes,O=0,q=B.getAttributes();for(let k in q)if(q[k].location>=0){let Q=V[k];Q===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let Ae={};Ae.attribute=Q,Q&&Q.data&&(Ae.data=Q.data),H[k]=Ae,O++}r.attributes=H,r.attributesNum=O,r.index=D}function _(){let I=r.newAttributes;for(let U=0,B=I.length;U<B;U++)I[U]=0}function p(I){m(I,0)}function m(I,U){let B=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;B[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),H[I]!==U&&(i.vertexAttribDivisor(I,U),H[I]=U)}function x(){let I=r.newAttributes,U=r.enabledAttributes;for(let B=0,D=U.length;B<D;B++)U[B]!==I[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function E(I,U,B,D,H,V,O){O===!0?i.vertexAttribIPointer(I,U,B,H,V):i.vertexAttribPointer(I,U,B,D,H,V)}function v(I,U,B,D){_();let H=D.attributes,V=B.getAttributes(),O=U.defaultAttributeValues;for(let q in V){let k=V[q];if(k.location>=0){let K=H[q];if(K===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){let Q=K.normalized,Ae=K.itemSize,Me=e.get(K);if(Me===void 0)continue;let je=Me.buffer,$e=Me.type,it=Me.bytesPerElement,Z=$e===i.INT||$e===i.UNSIGNED_INT||K.gpuType===pl;if(K.isInterleavedBufferAttribute){let ee=K.data,de=ee.stride,Be=K.offset;if(ee.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)m(k.location+Te,ee.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<k.locationSize;Te++)p(k.location+Te);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Te=0;Te<k.locationSize;Te++)E(k.location+Te,Ae/k.locationSize,$e,Q,de*it,(Be+Ae/k.locationSize*Te)*it,Z)}else{if(K.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)m(k.location+ee,K.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ee=0;ee<k.locationSize;ee++)p(k.location+ee);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ee=0;ee<k.locationSize;ee++)E(k.location+ee,Ae/k.locationSize,$e,Q,Ae*it,Ae/k.locationSize*ee*it,Z)}}else if(O!==void 0){let Q=O[q];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(k.location,Q);break;case 3:i.vertexAttrib3fv(k.location,Q);break;case 4:i.vertexAttrib4fv(k.location,Q);break;default:i.vertexAttrib1fv(k.location,Q)}}}}x()}function T(){w();for(let I in n){let U=n[I];for(let B in U){let D=U[B];for(let H in D){let V=D[H];for(let O in V)h(V[O].object),delete V[O];delete D[H]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let B in U){let D=U[B];for(let H in D){let V=D[H];for(let O in V)h(V[O].object),delete V[O];delete D[H]}}delete n[I.id]}function A(I){for(let U in n){let B=n[U];for(let D in B){let H=B[D];if(H[I.id]===void 0)continue;let V=H[I.id];for(let O in V)h(V[O].object),delete V[O];delete H[I.id]}}}function y(I){for(let U in n){let B=n[U],D=I.isInstancedMesh===!0?I.id:0,H=B[D];if(H!==void 0){for(let V in H){let O=H[V];for(let q in O)h(O[q].object),delete O[q];delete H[V]}delete B[D],Object.keys(B).length===0&&delete n[U]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function yx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Mx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&A!==Fn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:v,maxSamples:T,samples:S}}function Sx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Yn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let x=r?0:n,E=x*4,v=m.clippingState||null;l.value=v,v=h(g,u,E,f);for(let T=0;T!==E;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,v=f;E!==_;++E,v+=4)o.copy(d[E]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var rr=4,bx=6,Ex=20,Tx=256,Io=new qi,Od=new re,Nh=null,Fh=0,Oh=0,Bh=!1,wx=new P,gs=new P,ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=wx}=r;Nh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Fh,Oh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ht,format:gn,colorSpace:Ur,depthBuffer:!1},s=Bd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ax(r)),this._blurMaterial=Cx(r,e,t),this._ggxMaterial=Rx(r,e,t)}return s}_compileMaterial(e){let t=new ae(new Rt,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,s,r){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Od),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new nn,new bn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,m=!0):(p.color.copy(Od),m=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let T=this._cubeSize;sr(s,v*T,E>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ji||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-rr?n-g+rr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,sr(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(a,Io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,sr(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(a,Io)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-rr?s-this._lodMax+rr:0),u=4*(this._cubeSize-h);sr(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,Io)}};function Ax(i){let e=[],t=[],n=i,s=i-rr+1+bx;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let x=m%3*2/3-1,E=m>2?0:-1,v=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];g.set(v,f*u*m);for(let T=0;T<u;T++){let S=h[T*2]*2-1,A=h[T*2+1]*2-1;m===0?gs.set(1,A,S):m===1?gs.set(-S,1,-A):m===2?gs.set(-S,A,1):m===3?gs.set(-1,A,-S):m===4?gs.set(-S,-1,A):gs.set(S,A,-1),gs.toArray(_,(m*u+T)*f)}}let p=new Rt;p.setAttribute("position",new At(g,f)),p.setAttribute("outputDirection",new At(_,f)),t.push(new ae(p,null)),n>rr&&n--}return{lodMeshes:t,sizeLods:e}}function Bd(i,e,t){let n=new Dt(i,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Rx(i,e,t){return new gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Cx(i,e,t){return new gt({name:"SphericalGaussianBlur",defines:{SAMPLES:Ex,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function zd(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Hd(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tc=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Wt});r.uniforms.tEquirect.value=t;let o=new ae(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=$t),new al(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Px(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ul||f===dl)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new tc(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===ul||f===dl,_=f===Ji||f===ps;if(g||_){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ar(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let x=u.image;return g&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new ar(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===ul?u.mapping=Ji:f===dl&&(u.mapping=ps),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ix(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Dx(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let x=f.array;_=f.version;for(let E=0,v=x.length;E<v;E+=3){let T=x[E+0],S=x[E+1],A=x[E+2];u.push(T,S,S,A,A,T)}}else{let x=g.array;_=g.version;for(let E=0,v=x.length/3-1;E<v;E+=3){let T=E+0,S=E+1,A=E+2;u.push(T,S,S,A,A,T)}}let p=new(g.count>=65535?Vr:kr)(u,1);p.version=_;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Lx(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ux(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nx(i,e,t){let n=new WeakMap,s=new Nt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=a.attributes.position.count*E,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*T*4*d),A=new Br(S,v,T,d);A.type=Fn,A.needsUpdate=!0;let y=E*4;for(let R=0;R<d;R++){let I=p[R],U=m[R],B=x[R],D=v*T*4*R;for(let H=0;H<I.count;H++){let V=H*y;f===!0&&(s.fromBufferAttribute(I,H),S[D+V+0]=s.x,S[D+V+1]=s.y,S[D+V+2]=s.z,S[D+V+3]=0),g===!0&&(s.fromBufferAttribute(U,H),S[D+V+4]=s.x,S[D+V+5]=s.y,S[D+V+6]=s.z,S[D+V+7]=0),_===!0&&(s.fromBufferAttribute(B,H),S[D+V+8]=s.x,S[D+V+9]=s.y,S[D+V+10]=s.z,S[D+V+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new j(v,T)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Fx(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Ox={[mo]:"LINEAR_TONE_MAPPING",[go]:"REINHARD_TONE_MAPPING",[xo]:"CINEON_TONE_MAPPING",[fs]:"ACES_FILMIC_TONE_MAPPING",[vo]:"AGX_TONE_MAPPING",[yo]:"NEUTRAL_TONE_MAPPING",[_o]:"CUSTOM_TONE_MAPPING"};function Bx(i,e,t,n,s,r){let o=new Dt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Rt;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));let h=new js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ae(c,h),u=new qi(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,x=[],E=!1;this.setSize=function(v,T){o.setSize(v,T),a!==null&&a.setSize(v,T),l!==null&&l.setSize(v,T);for(let S=0;S<x.length;S++){let A=x[S];A.setSize&&A.setSize(v,T)}},this.setEffects=function(v){x=v,E=x.length>0&&x[0].isRenderPass===!0;let T=o.width,S=o.height;x.length>0&&a===null&&(a=new Dt(T,S,{type:Ht,depthBuffer:!1,stencilBuffer:!1}),l=new Dt(T,S,{type:Ht,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let y=x[A];y.setSize&&y.setSize(T,S)}},this.begin=function(v,T){if(_||v.toneMapping===ei&&x.length===0)return!1;if(m=T,T!==null){let S=T.width,A=T.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return E===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=ei,!0},this.hasRenderPass=function(){return E},this.end=function(v,T){v.toneMapping=p,_=!0;let S=o,A=a;for(let y=0;y<x.length;y++){let w=x[y];w.enabled!==!1&&(w.render(v,A,S,T),w.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},at.getTransfer(f)===mt&&(h.defines.SRGB_TRANSFER="");let y=Ox[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var af=new yn,kh=new di(1,1),lf=new Br,cf=new za,hf=new qr,kd=[],Vd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function lr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sc(i,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function Gx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),jt(t,n)}}function Wx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),jt(t,n)}}function Xx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),jt(t,n)}}function qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=t.isReversedDepthBuffer()?jl:Kl,r=kh):r=af,t.setTexture2D(e||r,s)}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cf,s)}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hf,s)}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lf,s)}function s_(i){switch(i){case 5126:return zx;case 35664:return Hx;case 35665:return kx;case 35666:return Vx;case 35674:return Gx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return $x;case 36294:return Kx;case 36295:return jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function r_(i,e){i.uniform1fv(this.addr,e)}function o_(i,e){let t=lr(e,this.size,2);i.uniform2fv(this.addr,t)}function a_(i,e){let t=lr(e,this.size,3);i.uniform3fv(this.addr,t)}function l_(i,e){let t=lr(e,this.size,4);i.uniform4fv(this.addr,t)}function c_(i,e){let t=lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h_(i,e){let t=lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u_(i,e){let t=lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function d_(i,e){i.uniform1iv(this.addr,e)}function f_(i,e){i.uniform2iv(this.addr,e)}function p_(i,e){i.uniform3iv(this.addr,e)}function m_(i,e){i.uniform4iv(this.addr,e)}function g_(i,e){i.uniform1uiv(this.addr,e)}function x_(i,e){i.uniform2uiv(this.addr,e)}function __(i,e){i.uniform3uiv(this.addr,e)}function v_(i,e){i.uniform4uiv(this.addr,e)}function y_(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=kh:o=af;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function M_(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cf,r[o])}function S_(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hf,r[o])}function b_(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lf,r[o])}function E_(i){switch(i){case 5126:return r_;case 35664:return o_;case 35665:return a_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return x_;case 36295:return __;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}var Vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s_(t.type)}},Gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E_(t.type)}},Wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},zh=/(\w+)(\])?(\[|\.)?/g;function qd(i,e){i.seq.push(e),i.map[e.id]=e}function T_(i,e,t){let n=i.name,s=n.length;for(zh.lastIndex=0;;){let r=zh.exec(n),o=zh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qd(t,c===void 0?new Vh(a,i,e):new Gh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Wh(a),qd(t,d)),t=d}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);T_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Yd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var w_=37297,A_=0;function R_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Zd=new Ke;function C_(i){at._getMatrix(Zd,at.workingColorSpace,i);let e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Nr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+R_(i.getShaderSource(e),a)}else return r}function P_(i,e){let t=C_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var I_={[mo]:"Linear",[go]:"Reinhard",[xo]:"Cineon",[fs]:"ACESFilmic",[vo]:"AgX",[yo]:"Neutral",[_o]:"Custom"};function D_(i,e){let t=I_[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ec=new P;function L_(){at.getLuminanceCoefficients(ec);let i=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function N_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lo(i){return i!==""}function $d(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(O_,z_)}var B_=new Map;function z_(i,e){let t=ot[e];if(t===void 0){let n=B_.get(e);if(n!==void 0)t=ot[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xh(t)}var H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(H_,k_)}function k_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var V_={[us]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function G_(i){return V_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var W_={[Ji]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE_UV"};function X_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":W_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var q_={[ps]:"ENVMAP_MODE_REFRACTION"};function Y_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z_={[ph]:"ENVMAP_BLENDING_MULTIPLY",[fd]:"ENVMAP_BLENDING_MIX",[pd]:"ENVMAP_BLENDING_ADD"};function J_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Z_[i.combine]||"ENVMAP_BLENDING_NONE"}function $_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=G_(t),c=X_(t),h=Y_(t),d=J_(t),u=$_(t),f=U_(t),g=N_(r),_=s.createProgram(),p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`)):(p=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),m=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ot.tonemapping_pars_fragment:"",t.toneMapping!==ei?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),L_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Xh(o),o=$d(o,t),o=Kd(o,t),a=Xh(a),a=$d(a,t),a=Kd(a,t),o=jd(o),a=jd(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=x+p+o,v=x+m+a,T=Yd(s,s.VERTEX_SHADER,E),S=Yd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(S)||"",H=U.trim(),V=B.trim(),O=D.trim(),q=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,S);else{let K=Jd(s,T,"vertex"),Q=Jd(s,S,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+K+`
`+Q)}else H!==""?Xe("WebGLProgram: Program Info Log:",H):(V===""||O==="")&&(k=!1);k&&(I.diagnostics={runnable:q,programLog:H,vertexShader:{log:V,prefix:p},fragmentShader:{log:O,prefix:m}})}s.deleteShader(T),s.deleteShader(S),y=new or(s,_),w=F_(s,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,w_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=S,this}var j_=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yh(e),t.set(e,n)),n}},Yh=class{constructor(e){this.id=j_++,this.code=e,this.usedTimes=0}};function Q_(i){return i===Ki||i===Ao||i===Ro}function ev(i,e,t,n,s,r){let o=new zr,a=new qh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,R,I,U,B){let D=I.fog,H=U.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||V,O),k=q&&q.mapping===Mo?q.image.height:null,K=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Xe("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ae=Q!==void 0?Q.length:0,Me=0;H.morphAttributes.position!==void 0&&(Me=1),H.morphAttributes.normal!==void 0&&(Me=2),H.morphAttributes.color!==void 0&&(Me=3);let je,$e,it,Z;if(K){let Tt=_i[K];je=Tt.vertexShader,$e=Tt.fragmentShader}else{je=y.vertexShader,$e=y.fragmentShader;let Tt=a.getVertexShaderStage(y),_t=a.getFragmentShaderStage(y);a.update(y,Tt,_t),it=Tt.id,Z=_t.id}let ee=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Be=U.isInstancedMesh===!0,Te=U.isBatchedMesh===!0,Ge=!!y.map,dt=!!y.matcap,ne=!!q,oe=!!y.aoMap,le=!!y.lightMap,ce=!!y.bumpMap&&y.wireframe===!1,ue=!!y.normalMap,Ve=!!y.displacementMap,ze=!!y.emissiveMap,We=!!y.metalnessMap,Ye=!!y.roughnessMap,L=y.anisotropy>0,ut=y.clearcoat>0,tt=y.dispersion>0,C=y.retroreflectivity>0,M=y.iridescence>0,z=y.sheen>0,G=y.transmission>0,J=L&&!!y.anisotropyMap,he=ut&&!!y.clearcoatMap,fe=ut&&!!y.clearcoatNormalMap,$=ut&&!!y.clearcoatRoughnessMap,ie=M&&!!y.iridescenceMap,xe=M&&!!y.iridescenceThicknessMap,Ne=z&&!!y.sheenColorMap,me=z&&!!y.sheenRoughnessMap,pe=!!y.specularMap,Pe=!!y.specularColorMap,He=!!y.specularIntensityMap,Ze=G&&!!y.transmissionMap,F=G&&!!y.thicknessMap,ve=!!y.gradientMap,te=!!y.alphaMap,ye=y.alphaTest>0,we=!!y.alphaHash,se=!!y.extensions,ke=ei;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ke=i.toneMapping);let Ue={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:$e,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Te,batchingColor:Te&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:dt,envMap:ne,envMapMode:ne&&q.mapping,envMapCubeUVHeight:k,aoMap:oe,lightMap:le,bumpMap:ce,normalMap:ue,displacementMap:Ve,emissiveMap:ze,normalMapObjectSpace:ue&&y.normalMapType===xd,normalMapTangentSpace:ue&&y.normalMapType===Co,packedNormalMap:ue&&y.normalMapType===Co&&Q_(y.normalMap.format),metalnessMap:We,roughnessMap:Ye,anisotropy:L,anisotropyMap:J,clearcoat:ut,clearcoatMap:he,clearcoatNormalMap:fe,clearcoatRoughnessMap:$,dispersion:tt,retroreflection:C,iridescence:M,iridescenceMap:ie,iridescenceThicknessMap:xe,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:me,specularMap:pe,specularColorMap:Pe,specularIntensityMap:He,transmission:G,transmissionMap:Ze,thicknessMap:F,gradientMap:ve,opaque:y.transparent===!1&&y.blending===Zi&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:ye,alphaHash:we,combine:y.combine,mapUv:Ge&&g(y.map.channel),aoMapUv:oe&&g(y.aoMap.channel),lightMapUv:le&&g(y.lightMap.channel),bumpMapUv:ce&&g(y.bumpMap.channel),normalMapUv:ue&&g(y.normalMap.channel),displacementMapUv:Ve&&g(y.displacementMap.channel),emissiveMapUv:ze&&g(y.emissiveMap.channel),metalnessMapUv:We&&g(y.metalnessMap.channel),roughnessMapUv:Ye&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:he&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(y.sheenRoughnessMap.channel),specularMapUv:pe&&g(y.specularMap.channel),specularColorMapUv:Pe&&g(y.specularColorMap.channel),specularIntensityMapUv:He&&g(y.specularIntensityMap.channel),transmissionMapUv:Ze&&g(y.transmissionMap.channel),thicknessMapUv:F&&g(y.thicknessMap.channel),alphaMapUv:te&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ue||L),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ge||te),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&ue===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Me,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===mt,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&y.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function p(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(w,y),x(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function E(y){let w=f[y.type],R;if(w){let I=_i[w];R=hn.clone(I.uniforms)}else R=y.uniforms;return R}function v(y,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new K_(i,w,y,s),c.push(R),h.set(w,R)),R}function T(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:v,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:A}}function tv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,_,p,m){let x=i[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},i[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=g,x.materialVariant=o(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=p,x.group=m),e++,x}function l(u,f,g,_,p,m,x){x.reversedDepth===!0&&(p=-p);let E=a(u,f,g,_,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(u,f,g,_,p,m){let x=a(u,f,g,_,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(u,f){t.length>1&&t.sort(u||nv),n.length>1&&n.sort(f||ef),s.length>1&&s.sort(f||ef)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function iv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new tf,i.set(n,[o])):s>=r.length?(o=new tf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new re};break;case"SpotLight":t={position:new P,direction:new P,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function rv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ov=0;function av(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lv(i){let e=new sv,t=rv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new lt,o=new lt;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,x=0,E=0,v=0,T=0,S=0,A=0,y=0,w=0,R=0;c.sort(av);for(let U=0,B=c.length;U<B;U++){let D=c[U],H=D.color,V=D.intensity,O=D.distance,q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ki?q=D.shadow.map.texture:q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*V,d+=H.g*V,u+=H.b*V;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],V);R++}else if(D.isSunLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,Q=t.get(D);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=q;let Ae=K.getViewportCount();for(let Me=0;Me<Ae;Me++)n.sunShadowMatrix[_+Me]=K.getMatrix(Me),n.sunShadowCascade[_+Me]=K._cascadeData[Me];_+=Ae,g++}n.sun[f]=k,f++}else if(D.isDirectionalLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,Q=t.get(D);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=k,p++}else if(D.isSpotLight){let k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(H).multiplyScalar(V),k.distance=O,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[x]=k;let K=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,K.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[x]=K.matrix,D.castShadow){let Q=t.get(D);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=q,A++}x++}else if(D.isRectAreaLight){let k=e.get(D);k.color.copy(H).multiplyScalar(V),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=k,E++}else if(D.isPointLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let K=D.shadow,Q=t.get(D);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=D.shadow.matrix,S++}n.point[m]=k,m++}else if(D.isHemisphereLight){let k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(V),k.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[v]=k,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==E||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==y||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=x,n.rectArea.length=E,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=x,I.rectAreaLength=E,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=y,I.numLightProbes=R,n.version=ov++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let v=c[x];if(v.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(v.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function nf(i){let e=new lv(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function cv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new nf(i),e.set(s,[a])):r>=o.length?(a=new nf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
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
}`,dv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],sf=new lt,Do=new P,Hh=new P;function pv(i,e,t){let n=new Zs,s=new j,r=new j,o=new Nt,a=new Ja,l=new $a,c={},h=t.maxTextureSize,d={[Yi]:cn,[cn]:Yi,[sn]:sn},u=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ae(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let m=this.type;this.render=function(S,A,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===ju&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Wt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=m!==this.type;B&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=S.length;D<H;D++){let V=S[D],O=V.shadow;if(O===void 0){Xe("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let q=O.getFrameExtents();s.multiply(q),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,O.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=k,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===nr){if(V.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Dt(s.x,s.y,{format:Ki,type:Ht,minFilter:$t,magFilter:$t,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new di(s.x,s.y,Fn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=ci,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt}else V.isPointLight?(O.map=new tc(s.x),O.map.depthTexture=new Va(s.x,ti)):(O.map=new Dt(s.x,s.y),O.map.depthTexture=new di(s.x,s.y,ti)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=ci,this.type===us?(O.map.depthTexture.compareFunction=k?jl:Kl,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let K=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();V.isPointLight!==!0&&O.updateMatrices(V,y);for(let Q=0;Q<K;Q++){let Ae=O.getCamera(Q);if(V.isPointLight){let Me=O.camera,je=O.matrix,$e=V.distance||Me.far;$e!==Me.far&&(Me.far=$e,Me.updateProjectionMatrix()),Do.setFromMatrixPosition(V.matrixWorld),Me.position.copy(Do),Hh.copy(Me.position),Hh.add(dv[Q]),Me.up.copy(fv[Q]),Me.lookAt(Hh),Me.updateMatrixWorld(),je.makeTranslation(-Do.x,-Do.y,-Do.z),sf.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),O._frustum.setFromProjectionMatrix(sf,Me.coordinateSystem,Me.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(O.map),i.clear());let Me=O.getViewport(Q);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),U.viewport(o)}n=O.getFrustum(Q),v(A,y,Ae,V,this.type)}O.isPointLightShadow!==!0&&this.type===nr&&x(O,y),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,I)};function x(S,A){let y=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Dt(s.x,s.y,{format:Ki,type:Ht}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,u,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,f,_,null)}function E(S,A,y,w){let R=null,I=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=R.uuid,B=A.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let H=D[B];H===void 0&&(H=R.clone(),D[B]=H,A.addEventListener("dispose",T)),R=H}if(R.visible=A.visible,R.wireframe=A.wireframe,w===nr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=y}return R}function v(S,A,y,w,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===nr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let B=e.update(S),D=S.material;if(Array.isArray(D)){let H=B.groups;for(let V=0,O=H.length;V<O;V++){let q=H[V],k=D[q.materialIndex];if(k&&k.visible){let K=E(S,k,w,R);S.onBeforeShadow(i,S,A,y,B,K,q),i.renderBufferDirect(y,null,B,K,S,q),S.onAfterShadow(i,S,A,y,B,K,q)}}}else if(D.visible){let H=E(S,D,w,R);S.onBeforeShadow(i,S,A,y,B,H,null),i.renderBufferDirect(y,null,B,H,S,null),S.onAfterShadow(i,S,A,y,B,H,null)}}let U=S.children;for(let B=0,D=U.length;B<D;B++)v(U[B],A,y,w,R)}function T(S){S.target.removeEventListener("dispose",T);for(let y in c){let w=c[y],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function mv(i,e){function t(){let F=!1,ve=new Nt,te=null,ye=new Nt(0,0,0,0);return{setMask:function(we){te!==we&&!F&&(i.colorMask(we,we,we,we),te=we)},setLocked:function(we){F=we},setClear:function(we,se,ke,Ue,Tt){Tt===!0&&(we*=Ue,se*=Ue,ke*=Ue),ve.set(we,se,ke,Ue),ye.equals(ve)===!1&&(i.clearColor(we,se,ke,Ue),ye.copy(ve))},reset:function(){F=!1,te=null,ye.set(-1,0,0,0)}}}function n(){let F=!1,ve=!1,te=null,ye=null,we=null;return{setReversed:function(se){if(ve!==se){let ke=e.get("EXT_clip_control");se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ve=se;let Ue=we;we=null,this.setClear(Ue)}},getReversed:function(){return ve},setTest:function(se){se?ee(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(se){te!==se&&!F&&(i.depthMask(se),te=se)},setFunc:function(se){if(ve&&(se=Rd[se]),ye!==se){switch(se){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=se}},setLocked:function(se){F=se},setClear:function(se){we!==se&&(we=se,ve&&(se=1-se),i.clearDepth(se))},reset:function(){F=!1,te=null,ye=null,we=null,ve=!1}}}function s(){let F=!1,ve=null,te=null,ye=null,we=null,se=null,ke=null,Ue=null,Tt=null;return{setTest:function(_t){F||(_t?ee(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(_t){ve!==_t&&!F&&(i.stencilMask(_t),ve=_t)},setFunc:function(_t,Vn,ii){(te!==_t||ye!==Vn||we!==ii)&&(i.stencilFunc(_t,Vn,ii),te=_t,ye=Vn,we=ii)},setOp:function(_t,Vn,ii){(se!==_t||ke!==Vn||Ue!==ii)&&(i.stencilOp(_t,Vn,ii),se=_t,ke=Vn,Ue=ii)},setLocked:function(_t){F=_t},setClear:function(_t){Tt!==_t&&(i.clearStencil(_t),Tt=_t)},reset:function(){F=!1,ve=null,te=null,ye=null,we=null,se=null,ke=null,Ue=null,Tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,x=null,E=null,v=null,T=null,S=null,A=null,y=new re(0,0,0),w=0,R=!1,I=null,U=null,B=null,D=null,H=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=q>=2);let K=null,Q={},Ae=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),je=new Nt().fromArray(Ae),$e=new Nt().fromArray(Me);function it(F,ve,te,ye){let we=new Uint8Array(4),se=i.createTexture();i.bindTexture(F,se),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<te;ke++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ve+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return se}let Z={};Z[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(ks),ce(!1),ue(ch),ee(i.CULL_FACE),oe(Wt);function ee(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function de(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Be(F,ve){return u[F]!==ve?(i.bindFramebuffer(F,ve),u[F]=ve,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Te(F,ve){let te=g,ye=!1;if(F){te=f.get(ve),te===void 0&&(te=[],f.set(ve,te));let we=F.textures;if(te.length!==we.length||te[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ke=we.length;se<ke;se++)te[se]=i.COLOR_ATTACHMENT0+se;te.length=we.length,ye=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ye=!0);ye&&i.drawBuffers(te)}function Ge(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let dt={[Nn]:i.FUNC_ADD,[Qu]:i.FUNC_SUBTRACT,[ed]:i.FUNC_REVERSE_SUBTRACT};dt[td]=i.MIN,dt[nd]=i.MAX;let ne={[ds]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[dh]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[po]:i.DST_COLOR,[fo]:i.DST_ALPHA,[rd]:i.ONE_MINUS_SRC_COLOR,[fh]:i.ONE_MINUS_SRC_ALPHA,[ad]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[hd]:i.ONE_MINUS_CONSTANT_COLOR,[ud]:i.CONSTANT_ALPHA,[dd]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(F,ve,te,ye,we,se,ke,Ue,Tt,_t){if(F===Wt){p===!0&&(de(i.BLEND),p=!1);return}if(p===!1&&(ee(i.BLEND),p=!0),F!==hl){if(F!==m||_t!==R){if((x!==Nn||T!==Nn)&&(i.blendEquation(i.FUNC_ADD),x=Nn,T=Nn),_t)switch(F){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case En:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",F);break}else switch(F){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case En:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hh:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",F);break}E=null,v=null,S=null,A=null,y.set(0,0,0),w=0,m=F,R=_t}return}we=we||ve,se=se||te,ke=ke||ye,(ve!==x||we!==T)&&(i.blendEquationSeparate(dt[ve],dt[we]),x=ve,T=we),(te!==E||ye!==v||se!==S||ke!==A)&&(i.blendFuncSeparate(ne[te],ne[ye],ne[se],ne[ke]),E=te,v=ye,S=se,A=ke),(Ue.equals(y)===!1||Tt!==w)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Tt),y.copy(Ue),w=Tt),m=F,R=!1}function le(F,ve){F.side===sn?de(i.CULL_FACE):ee(i.CULL_FACE);let te=F.side===cn;ve&&(te=!te),ce(te),F.blending===Zi&&F.transparent===!1?oe(Wt):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ye=F.stencilWrite;a.setTest(ye),ye&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ze(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function ue(F){F!==$u?(ee(i.CULL_FACE),F!==U&&(F===ch?i.cullFace(i.BACK):F===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),U=F}function Ve(F){F!==B&&(O&&i.lineWidth(F),B=F)}function ze(F,ve,te){F?(ee(i.POLYGON_OFFSET_FILL),(D!==ve||H!==te)&&(D=ve,H=te,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,te))):de(i.POLYGON_OFFSET_FILL)}function We(F){F?ee(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Ye(F){F===void 0&&(F=i.TEXTURE0+V-1),K!==F&&(i.activeTexture(F),K=F)}function L(F,ve,te){te===void 0&&(K===null?te=i.TEXTURE0+V-1:te=K);let ye=Q[te];ye===void 0&&(ye={type:void 0,texture:void 0},Q[te]=ye),(ye.type!==F||ye.texture!==ve)&&(K!==te&&(i.activeTexture(te),K=te),i.bindTexture(F,ve||Z[F]),ye.type=F,ye.texture=ve)}function ut(){let F=Q[K];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function M(){try{i.texSubImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function he(){try{i.texStorage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function fe(){try{i.texStorage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function $(){try{i.texImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function ie(){try{i.texImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function xe(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Ne(F,ve){d[F]!==ve&&(i.pixelStorei(F,ve),d[F]=ve)}function me(F){je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function pe(F){$e.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),$e.copy(F))}function Pe(F,ve){let te=c.get(ve);te===void 0&&(te=new WeakMap,c.set(ve,te));let ye=te.get(F);ye===void 0&&(ye=i.getUniformBlockIndex(ve,F.name),te.set(F,ye))}function He(F,ve){let ye=c.get(ve).get(F);l.get(ve)!==ye&&(i.uniformBlockBinding(ve,ye,F.__bindingPointIndex),l.set(ve,ye))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,Q={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,x=null,E=null,v=null,T=null,S=null,A=null,y=new re(0,0,0),w=0,R=!1,I=null,U=null,B=null,D=null,H=null,je.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:de,bindFramebuffer:Be,drawBuffers:Te,useProgram:Ge,setBlending:oe,setMaterial:le,setFlipSided:ce,setCullFace:ue,setLineWidth:Ve,setPolygonOffset:ze,setScissorTest:We,activeTexture:Ye,bindTexture:L,unbindTexture:ut,compressedTexImage2D:tt,compressedTexImage3D:C,texImage2D:$,texImage3D:ie,pixelStorei:Ne,getParameter:xe,updateUBOMapping:Pe,uniformBlockBinding:He,texStorage2D:he,texStorage3D:fe,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:me,viewport:pe,reset:Ze}}function gv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):Fr("canvas")}function p(C,M,z){let G=1,J=tt(C);if((J.width>z||J.height>z)&&(G=z/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let he=Math.floor(G*J.width),fe=Math.floor(G*J.height);u===void 0&&(u=_(he,fe));let $=M?_(he,fe):u;return $.width=he,$.height=fe,$.getContext("2d").drawImage(C,0,0,he,fe),Xe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+he+"x"+fe+")."),$}else return"data"in C&&Xe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function x(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,M,z,G,J,he=!1){if(C!==null){if(i[C]!==void 0)return i[C];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;G&&(fe=e.get("EXT_texture_norm16"),fe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&fe&&($=fe.R16_EXT),z===i.SHORT&&fe&&($=fe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&fe&&($=fe.RG16_EXT),z===i.SHORT&&fe&&($=fe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_SHORT&&fe&&($=fe.RGB16_EXT),z===i.SHORT&&fe&&($=fe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){let ie=he?Nr:at.getTransfer(J);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=ie===mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&fe&&($=fe.RGBA16_EXT),z===i.SHORT&&fe&&($=fe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(C,M){let z;return C?M===null||M===ti||M===$i?z=i.DEPTH24_STENCIL8:M===Fn?z=i.DEPTH32F_STENCIL8:M===ir&&(z=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ti||M===$i?z=i.DEPTH_COMPONENT24:M===Fn?z=i.DEPTH_COMPONENT32F:M===ir&&(z=i.DEPTH_COMPONENT16),z}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==$t?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),w(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function y(C){let M=C.target;M.removeEventListener("dispose",y),I(M)}function w(C){let M=n.get(C);if(M.__webglInit===void 0)return;let z=C.source,G=f.get(z);if(G){let J=G[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(G).length===0&&f.delete(z)}n.remove(C)}function R(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let z=C.source,G=f.get(z);delete G[M.__cacheKey],o.memory.textures--}function I(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let J=0;J<M.__webglFramebuffer[G].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[G][J]);else i.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)i.deleteFramebuffer(M.__webglFramebuffer[G]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=C.textures;for(let G=0,J=z.length;G<J;G++){let he=n.get(z[G]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(z[G])}n.remove(C)}let U=0;function B(){U=0}function D(){return U}function H(C){U=C}function V(){let C=U;return C>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function O(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){let z=n.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let G=C.image;if(G===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{de(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function k(C,M){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){de(z,C,M);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function K(C,M){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){de(z,C,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function Q(C,M){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Be(z,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let Ae={[Un]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},Me={[Gt]:i.NEAREST,[md]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[fl]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},je={[vd]:i.NEVER,[Ed]:i.ALWAYS,[yd]:i.LESS,[Kl]:i.LEQUAL,[Md]:i.EQUAL,[jl]:i.GEQUAL,[Sd]:i.GREATER,[bd]:i.NOTEQUAL};function $e(C,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$t||M.magFilter===fl||M.magFilter===So||M.magFilter===mi||M.minFilter===$t||M.minFilter===fl||M.minFilter===So||M.minFilter===mi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ae[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ae[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ae[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Me[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,je[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==So&&M.minFilter!==mi||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function it(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let G=M.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let he=O(M);if(he!==C.__cacheKey){J[he]===void 0&&(J[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[he].usedTimes++;let fe=J[C.__cacheKey];fe!==void 0&&(J[C.__cacheKey].usedTimes--,fe.usedTimes===0&&R(M)),C.__cacheKey=he,C.__webglTexture=J[he].texture}return z}function Z(C,M,z){return Math.floor(Math.floor(C/z)/M)}function ee(C,M,z,G){let he=C.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,G,M.data);else{he.sort((Ne,me)=>Ne.start-me.start);let fe=0;for(let Ne=1;Ne<he.length;Ne++){let me=he[fe],pe=he[Ne],Pe=me.start+me.count,He=Z(pe.start,M.width,4),Ze=Z(me.start,M.width,4);pe.start<=Pe+1&&He===Ze&&Z(pe.start+pe.count-1,M.width,4)===He?me.count=Math.max(me.count,pe.start+pe.count-me.start):(++fe,he[fe]=pe)}he.length=fe+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ne=0,me=he.length;Ne<me;Ne++){let pe=he[Ne],Pe=Math.floor(pe.start/4),He=Math.ceil(pe.count/4),Ze=Pe%M.width,F=Math.floor(Pe/M.width),ve=He,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ze,F,ve,te,z,G,M.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function de(C,M,z){let G=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=i.TEXTURE_3D);let J=it(C,M),he=M.source;t.bindTexture(G,C.__webglTexture,i.TEXTURE0+z);let fe=n.get(he);if(he.version!==fe.__version||J===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let te=at.getPrimaries(at.workingColorSpace),ye=M.colorSpace===Ii?null:at.getPrimaries(M.colorSpace),we=M.colorSpace===Ii||te===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ie=p(M.image,!1,s.maxTextureSize);ie=ut(M,ie);let xe=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),me=v(M.internalFormat,xe,Ne,M.normalized,M.colorSpace,M.isVideoTexture);$e(G,M);let pe,Pe=M.mipmaps,He=M.isVideoTexture!==!0,Ze=fe.__version===void 0||J===!0,F=he.dataReady,ve=S(M,ie);if(M.isDepthTexture)me=T(M.format===gi,M.type),Ze&&(He?t.texStorage2D(i.TEXTURE_2D,1,me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,me,ie.width,ie.height,0,xe,Ne,null));else if(M.isDataTexture)if(Pe.length>0){He&&Ze&&t.texStorage2D(i.TEXTURE_2D,ve,me,Pe[0].width,Pe[0].height);for(let te=0,ye=Pe.length;te<ye;te++)pe=Pe[te],He?F&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,xe,Ne,pe.data):t.texImage2D(i.TEXTURE_2D,te,me,pe.width,pe.height,0,xe,Ne,pe.data);M.generateMipmaps=!1}else He?(Ze&&t.texStorage2D(i.TEXTURE_2D,ve,me,ie.width,ie.height),F&&ee(M,ie,xe,Ne)):t.texImage2D(i.TEXTURE_2D,0,me,ie.width,ie.height,0,xe,Ne,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,me,Pe[0].width,Pe[0].height,ie.depth);for(let te=0,ye=Pe.length;te<ye;te++)if(pe=Pe[te],M.format!==gn)if(xe!==null)if(He){if(F)if(M.layerUpdates.size>0){let we=Ch(pe.width,pe.height,M.format,M.type);for(let se of M.layerUpdates){let ke=pe.data.subarray(se*we/pe.data.BYTES_PER_ELEMENT,(se+1)*we/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,se,pe.width,pe.height,1,xe,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ie.depth,xe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,me,pe.width,pe.height,ie.depth,0,pe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ie.depth,xe,Ne,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,me,pe.width,pe.height,ie.depth,0,xe,Ne,pe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{He&&Ze&&t.texStorage2D(i.TEXTURE_2D,ve,me,Pe[0].width,Pe[0].height);for(let te=0,ye=Pe.length;te<ye;te++)pe=Pe[te],M.format!==gn?xe!==null?He?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,me,pe.width,pe.height,0,pe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,xe,Ne,pe.data):t.texImage2D(i.TEXTURE_2D,te,me,pe.width,pe.height,0,xe,Ne,pe.data)}else if(M.isDataArrayTexture)if(He){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,me,ie.width,ie.height,ie.depth),F)if(M.layerUpdates.size>0){let te=Ch(ie.width,ie.height,M.format,M.type);for(let ye of M.layerUpdates){let we=ie.data.subarray(ye*te/ie.data.BYTES_PER_ELEMENT,(ye+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,ie.width,ie.height,1,xe,Ne,we)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Ne,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,xe,Ne,ie.data);else if(M.isData3DTexture)He?(Ze&&t.texStorage3D(i.TEXTURE_3D,ve,me,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Ne,ie.data)):t.texImage3D(i.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,xe,Ne,ie.data);else if(M.isFramebufferTexture){if(Ze)if(He)t.texStorage2D(i.TEXTURE_2D,ve,me,ie.width,ie.height);else{let te=ie.width,ye=ie.height;for(let we=0;we<ve;we++)t.texImage2D(i.TEXTURE_2D,we,me,te,ye,0,xe,Ne,null),te>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),d.add(M),te.onpaint=ye=>{let we=ye.changedElements;for(let se of d)we.includes(se.image)&&(se.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let we=i.RGBA,se=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,we,se,ke,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(He&&Ze){let te=tt(Pe[0]);t.texStorage2D(i.TEXTURE_2D,ve,me,te.width,te.height)}for(let te=0,ye=Pe.length;te<ye;te++)pe=Pe[te],He?F&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,xe,Ne,pe):t.texImage2D(i.TEXTURE_2D,te,me,xe,Ne,pe);M.generateMipmaps=!1}else if(He){if(Ze){let te=tt(ie);t.texStorage2D(i.TEXTURE_2D,ve,me,te.width,te.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ne,ie)}else t.texImage2D(i.TEXTURE_2D,0,me,xe,Ne,ie);m(M)&&x(G),fe.__version=he.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Be(C,M,z){if(M.image.length!==6)return;let G=it(C,M),J=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let he=n.get(J);if(J.version!==he.__version||G===!0){t.activeTexture(i.TEXTURE0+z);let fe=at.getPrimaries(at.workingColorSpace),$=M.colorSpace===Ii?null:at.getPrimaries(M.colorSpace),ie=M.colorSpace===Ii||fe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let xe=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,me=[];for(let se=0;se<6;se++)!xe&&!Ne?me[se]=p(M.image[se],!0,s.maxCubemapSize):me[se]=Ne?M.image[se].image:M.image[se],me[se]=ut(M,me[se]);let pe=me[0],Pe=r.convert(M.format,M.colorSpace),He=r.convert(M.type),Ze=v(M.internalFormat,Pe,He,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,ve=he.__version===void 0||G===!0,te=J.dataReady,ye=S(M,pe);$e(i.TEXTURE_CUBE_MAP,M);let we;if(xe){F&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ze,pe.width,pe.height);for(let se=0;se<6;se++){we=me[se].mipmaps;for(let ke=0;ke<we.length;ke++){let Ue=we[ke];M.format!==gn?Pe!==null?F?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ue.width,Ue.height,Pe,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Ze,Ue.width,Ue.height,0,Ue.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ue.width,Ue.height,Pe,He,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Ze,Ue.width,Ue.height,0,Pe,He,Ue.data)}}}else{if(we=M.mipmaps,F&&ve){we.length>0&&ye++;let se=tt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(Ne){F?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,me[se].width,me[se].height,Pe,He,me[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,me[se].width,me[se].height,0,Pe,He,me[se].data);for(let ke=0;ke<we.length;ke++){let Tt=we[ke].image[se].image;F?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Tt.width,Tt.height,Pe,He,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Ze,Tt.width,Tt.height,0,Pe,He,Tt.data)}}else{F?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,He,me[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Pe,He,me[se]);for(let ke=0;ke<we.length;ke++){let Ue=we[ke];F?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Pe,He,Ue.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Ze,Pe,He,Ue.image[se])}}}m(M)&&x(i.TEXTURE_CUBE_MAP),he.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Te(C,M,z,G,J,he){let fe=r.convert(z.format,z.colorSpace),$=r.convert(z.type),ie=v(z.internalFormat,fe,$,z.normalized,z.colorSpace),xe=n.get(M),Ne=n.get(z);if(Ne.__renderTarget=M,!xe.__hasExternalTextures){let me=Math.max(1,M.width>>he),pe=Math.max(1,M.height>>he);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,he,ie,me,pe,M.depth,0,fe,$,null):t.texImage2D(J,he,ie,me,pe,0,fe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,J,Ne.__webglTexture,0,We(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,J,Ne.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(C,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let G=M.depthTexture,J=G&&G.isDepthTexture?G.type:null,he=T(M.stencilBuffer,J),fe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(M),he,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(M),he,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,he,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,C)}else{let G=M.textures;for(let J=0;J<G.length;J++){let he=G[J],fe=r.convert(he.format,he.colorSpace),$=r.convert(he.type),ie=v(he.internalFormat,fe,$,he.normalized,he.colorSpace);Ye(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(M),ie,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(M),ie,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(C,M,z){let G=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),$e(i.TEXTURE_CUBE_MAP,M.depthTexture);let xe=r.convert(M.depthTexture.format),Ne=r.convert(M.depthTexture.type),me;M.depthTexture.format===ci?me=i.DEPTH_COMPONENT24:M.depthTexture.format===gi&&(me=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,me,M.width,M.height,0,xe,Ne,null)}}else q(M.depthTexture,0);let he=J.__webglTexture,fe=We(M),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ie=M.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ci)Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,$,he,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,$,he,0);else if(M.depthTexture.format===gi)Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,$,he,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,$,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(C){let M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=G}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)dt(M.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?dt(M.__webglFramebuffer[0],C,0):dt(M.__webglFramebuffer,C,0)}else if(z){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=i.createRenderbuffer(),Ge(M.__webglDepthbuffer[G],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,he)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ge(M.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(C,M,z){let G=n.get(C);M!==void 0&&Te(G.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ne(C)}function le(C){let M=C.texture,z=n.get(C),G=n.get(M);C.addEventListener("dispose",y);let J=C.textures,he=C.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=M.version,o.memory.textures++),he){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let ie=0;ie<M.mipmaps.length;ie++)z.__webglFramebuffer[$][ie]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let $=0,ie=J.length;$<ie;$++){let xe=n.get(J[$]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ye(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let ie=J[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let xe=r.convert(ie.format,ie.colorSpace),Ne=r.convert(ie.type),me=v(ie.internalFormat,xe,Ne,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),pe=We(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),$e(i.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)Te(z.__webglFramebuffer[$][ie],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie);else Te(z.__webglFramebuffer[$],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(M)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let $=0,ie=J.length;$<ie;$++){let xe=J[$],Ne=n.get(xe),me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Ne.__webglTexture),$e(me,xe),Te(z.__webglFramebuffer,C,xe,i.COLOR_ATTACHMENT0+$,me,0),m(xe)&&x(me)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),$e($,M),M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)Te(z.__webglFramebuffer[ie],C,M,i.COLOR_ATTACHMENT0,$,ie);else Te(z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,$,0);m(M)&&x($),t.unbindTexture()}C.depthBuffer&&ne(C)}function ce(C){let M=C.textures;for(let z=0,G=M.length;z<G;z++){let J=M[z];if(m(J)){let he=E(C),fe=n.get(J).__webglTexture;t.bindTexture(he,fe),x(he),t.unbindTexture()}}}let ue=[],Ve=[];function ze(C){if(C.samples>0){if(Ye(C)===!1){let M=C.textures,z=C.width,G=C.height,J=i.COLOR_BUFFER_BIT,he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(C),$=M.length>1;if($)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ie=C.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);let Ne=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,z,G,0,0,z,G,J,i.NEAREST),l===!0&&(ue.length=0,Ve.length=0,ue.push(i.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ue.push(he),Ve.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);let Ne=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function We(C){return Math.min(s.maxSamples,C.samples)}function Ye(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function L(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ut(C,M){let z=C.colorSpace,G=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ur&&z!==Ii&&(at.getTransfer(z)===mt?(G!==gn||J!==mn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",z)),M}function tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=oe,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xv(i,e){function t(n,s=Ii){let r,o=at.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gh)return i.BYTE;if(n===xh)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ht)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===gn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===bo||n===Eo||n===To||n===wo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===Sl||n===bl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Ao||n===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tl||n===wl)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rl)return r.COMPRESSED_R11_EAC;if(n===Cl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return r.COMPRESSED_RG11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===Hl||n===kl||n===Vl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Il)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===ql||n===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Jl||n===Ro||n===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gt({vertexShader:_v,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends hi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Zh,m={},x=t.getContextAttributes(),E=null,v=null,T=[],S=[],A=new j,y=null,w=null,R=new an;R.viewport=new Nt;let I=new an;I.viewport=new Nt;let U=[R,I],B=new ll,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=T[Z];return ee===void 0&&(ee=new qs,T[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=T[Z];return ee===void 0&&(ee=new qs,T[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=T[Z];return ee===void 0&&(ee=new qs,T[Z]=ee),ee.getHandSpace()};function V(Z){let ee=S.indexOf(Z.inputSource);if(ee===-1)return;let de=T[ee];de!==void 0&&(de.update(Z.inputSource,Z.frame,c||o),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",q);for(let Z=0;Z<T.length;Z++){let ee=S[Z];ee!==null&&(S[Z]=null,T[Z].disconnect(ee))}D=null,H=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(E),f=null,u=null,d=null,s=null,v=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",O),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Be=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=x.stencil?gi:ci,Be=x.stencil?$i:ti);let Ge={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Dt(u.textureWidth,u.textureHeight,{format:gn,type:mn,depthTexture:new di(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Dt(f.framebufferWidth,f.framebufferHeight,{format:gn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(Z){for(let ee=0;ee<Z.removed.length;ee++){let de=Z.removed[ee],Be=S.indexOf(de);Be>=0&&(S[Be]=null,T[Be].disconnect(de))}for(let ee=0;ee<Z.added.length;ee++){let de=Z.added[ee],Be=S.indexOf(de);if(Be===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=S.length){S.push(de),Be=Ge;break}else if(S[Ge]===null){S[Ge]=de,Be=Ge;break}if(Be===-1)break}let Te=T[Be];Te&&Te.connect(de)}}let k=new P,K=new P;function Q(Z,ee,de){k.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);let Be=k.distanceTo(K),Te=ee.projectionMatrix.elements,Ge=de.projectionMatrix.elements,dt=Te[14]/(Te[10]-1),ne=Te[14]/(Te[10]+1),oe=(Te[9]+1)/Te[5],le=(Te[9]-1)/Te[5],ce=(Te[8]-1)/Te[0],ue=(Ge[8]+1)/Ge[0],Ve=dt*ce,ze=dt*ue,We=Be/(-ce+ue),Ye=We*-ce;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ye),Z.translateZ(We),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let L=dt+We,ut=ne+We,tt=Ve-Ye,C=ze+(Be-Ye),M=oe*ne/ut*L,z=le*ne/ut*L;Z.projectionMatrix.makePerspective(tt,C,M,z,L,ut),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ae(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ee=Z.near,de=Z.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(de=p.depthFar)),B.near=I.near=R.near=ee,B.far=I.far=R.far=de,(D!==B.near||H!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,H=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Be=Z.parent,Te=B.cameras;Ae(B,Be);for(let Ge=0;Ge<Te.length;Ge++)Ae(Te[Ge],Be);Te.length===2?Q(B,R,I):B.projectionMatrix.copy(R.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),Me(Z,B,Be)};function Me(Z,ee,de){de===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ws*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Z){return m[Z]};let je=null;function $e(Z,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Be=!1;de.length!==B.cameras.length&&(B.cameras.length=0,Be=!0);for(let ne=0;ne<de.length;ne++){let oe=de[ne],le=null;if(f!==null)le=f.getViewport(oe);else{let ue=d.getViewSubImage(u,oe);le=ue.viewport,ne===0&&(e.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(v))}let ce=U[ne];ce===void 0&&(ce=new an,ce.layers.enable(ne),ce.viewport=new Nt,U[ne]=ce),ce.matrix.fromArray(oe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(oe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),ne===0&&(B.matrix.copy(ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Be===!0&&B.cameras.push(ce)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let ne=d.getDepthInformation(de[0]);ne&&ne.isValid&&ne.texture&&p.init(ne,s.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let ne=0;ne<de.length;ne++){let oe=de[ne].camera;if(oe){let le=m[oe];le||(le=new Yr,m[oe]=le);let ce=d.getCameraImage(oe);le.sourceTexture=ce}}}}for(let de=0;de<T.length;de++){let Be=S[de],Te=T[de];Be!==null&&Te!==void 0&&Te.update(Be,ee,c||o)}je&&je(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let it=new rf;it.setAnimationLoop($e),this.setAnimationLoop=function(Z){je=Z},this.dispose=function(){}}},yv=new lt,uf=new Ke;uf.set(-1,0,0,0,1,0,0,0,1);function Mv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=e.get(m),E=x.envMap,v=x.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(uf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let S=T.program;n.uniformBlockBinding(v,S)}function c(v,T){let S=s[v.id];S===void 0&&(p(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",x));let A=T.program;n.updateUBOMapping(v,A);let y=e.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let T=d();v.__bindingPointIndex=T;let S=i.createBuffer(),A=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,w=S.length;y<w;y++){let R=S[y];if(Array.isArray(R))for(let I=0,U=R.length;I<U;I++)f(R[I],y,I,A);else f(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,T,S,A){if(_(v,T,S,A)===!0){let y=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let I=0;I<w.length;I++){let U=w[I],B=m(U);g(U,v.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,T,S){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,S)}function _(v,T,S,A){let y=v.value,w=T+"_"+S;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{let R=A[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function p(v){let T=v.uniforms,S=0,A=16;for(let w=0,R=T.length;w<R;w++){let I=Array.isArray(T[w])?T[w]:[T[w]];for(let U=0,B=I.length;U<B;U++){let D=I[U],H=Array.isArray(D.value)?D.value:[D.value];for(let V=0,O=H.length;V<O;V++){let q=H[V],k=m(q),K=S%A,Q=K%k.boundary,Ae=K+Q;S+=Q,Ae!==0&&A-Ae<k.storage&&(S+=A-Ae),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=k.storage}}}let y=S%A;return y>0&&(S+=A-y),v.__size=S,v.__cache={},this}function m(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",v),T}function x(v){let T=v.target;T.removeEventListener("dispose",x);let S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function E(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function Ev(){return xi===null&&(xi=new jn(bv,16,16,Ki,Ht),xi.name="DFG_LUT",xi.minFilter=$t,xi.magFilter=$t,xi.wrapS=oi,xi.wrapT=oi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var nc=class{constructor(e={}){let{canvas:t=Td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=f,p=new Set([yl,vl,_l]),m=new Set([mn,ti,ir,$i,ml,gl]),x=new Uint32Array(4),E=new Int32Array(4),v=new P,T=null,S=null,A=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,U=null,B=null,D=null,H=null;this._outputColorSpace=Zt;let V=0,O=0,q=null,k=-1,K=null,Q=new Nt,Ae=new Nt,Me=null,je=new re(0),$e=0,it=t.width,Z=t.height,ee=1,de=null,Be=null,Te=new Nt(0,0,it,Z),Ge=new Nt(0,0,it,Z),dt=!1,ne=new Zs,oe=!1,le=!1,ce=new lt,ue=new P,Ve=new Nt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ye(){return q===null?ee:1}let L=n;function ut(b,N){return t.getContext(b,N)}let tt,C,M,z,G,J,he,fe,$,ie,xe,Ne,me,pe,Pe,He,Ze,F,ve,te,ye,we,se;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),L===null){let N="webgl2";if(L=ut(N,b),L===null)throw ut(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(b){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),qe("WebGLRenderer: "+b.message),b}function ke(){tt=new Ix(L),tt.init(),ye=new xv(L,tt),C=new Mx(L,tt,e,ye),M=new mv(L,tt),C.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),B=L.createFramebuffer(),D=L.createFramebuffer(),H=L.createFramebuffer(),z=new Ux(L),G=new tv,J=new gv(L,tt,M,G,C,ye,z),he=new Px(R),fe=new Fm(L),we=new vx(L,fe),$=new Dx(L,fe,z,we),ie=new Fx(L,$,fe,we,z),F=new Nx(L,C,J),Pe=new Sx(G),xe=new ev(R,he,tt,C,we,Pe),Ne=new Mv(R,G),me=new iv,pe=new cv(tt),Ze=new _x(R,he,M,ie,g,l),He=new pv(R,ie,C),se=new Sv(L,z,C,M),ve=new yx(L,tt,z),te=new Lx(L,tt,z),z.programs=xe.programs,R.capabilities=C,R.extensions=tt,R.properties=G,R.renderLists=me,R.shadowMap=He,R.state=M,R.info=z}_!==mn&&(w=new Bx(_,t.width,t.height,a,s,r));let Ue=new Jh(R,L);this.xr=Ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(it,Z,!1))},this.getSize=function(b){return b.set(it,Z)},this.setSize=function(b,N,Y=!0){if(Ue.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}it=b,Z=N,t.width=Math.floor(b*ee),t.height=Math.floor(N*ee),Y===!0&&(t.style.width=b+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(it*ee,Z*ee).floor()},this.setDrawingBufferSize=function(b,N,Y){it=b,Z=N,ee=Y,t.width=Math.floor(b*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(_===mn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(Te)},this.setViewport=function(b,N,Y,W){b.isVector4?Te.set(b.x,b.y,b.z,b.w):Te.set(b,N,Y,W),M.viewport(Q.copy(Te).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Ge)},this.setScissor=function(b,N,Y,W){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,N,Y,W),M.scissor(Ae.copy(Ge).multiplyScalar(ee).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(b){M.setScissorTest(dt=b)},this.setOpaqueSort=function(b){de=b},this.setTransparentSort=function(b){Be=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,Y=!0){let W=0;if(b){let X=!1;if(q!==null){let Ee=q.texture.format;X=p.has(Ee)}if(X){let Ee=q.texture.type,Ce=m.has(Ee),be=Ze.getClearColor(),De=Ze.getClearAlpha(),Fe=be.r,st=be.g,ct=be.b;Ce?(x[0]=Fe,x[1]=st,x[2]=ct,x[3]=De,L.clearBufferuiv(L.COLOR,0,x)):(E[0]=Fe,E[1]=st,E[2]=ct,E[3]=De,L.clearBufferiv(L.COLOR,0,E))}else W|=L.COLOR_BUFFER_BIT}N&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),Ze.dispose(),me.dispose(),pe.dispose(),G.dispose(),he.dispose(),ie.dispose(),we.dispose(),se.dispose(),xe.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",au),Ue.removeEventListener("sessionend",lu),es.stop()};function Tt(b){b.preventDefault(),Or("WebGLRenderer: Context Lost."),I=!0}function _t(){Or("WebGLRenderer: Context Restored."),I=!1;let b=z.autoReset,N=He.enabled,Y=He.autoUpdate,W=He.needsUpdate,X=He.type;ke(),z.autoReset=b,He.enabled=N,He.autoUpdate=Y,He.needsUpdate=W,He.type=X}function Vn(b){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ii(b){let N=b.target;N.removeEventListener("dispose",ii),ip(N)}function ip(b){sp(b),G.remove(b)}function sp(b){let N=G.get(b).programs;N!==void 0&&(N.forEach(function(Y){xe.releaseProgram(Y)}),b.isShaderMaterial&&xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,Y,W,X,Ee){N===null&&(N=ze);let Ce=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=ap(b,N,Y,W,X);M.setMaterial(W,Ce);let De=Y.index,Fe=1;if(W.wireframe===!0){if(De=$.getWireframeAttribute(Y),De===void 0)return;Fe=2}let st=Y.drawRange,ct=Y.attributes.position,Le=st.start*Fe,vt=(st.start+st.count)*Fe;Ee!==null&&(Le=Math.max(Le,Ee.start*Fe),vt=Math.min(vt,(Ee.start+Ee.count)*Fe)),De!==null?(Le=Math.max(Le,0),vt=Math.min(vt,De.count)):ct!=null&&(Le=Math.max(Le,0),vt=Math.min(vt,ct.count));let Xt=vt-Le;if(Xt<0||Xt===1/0)return;we.setup(X,W,be,Y,De);let Pt,Et=ve;if(De!==null&&(Pt=fe.get(De),Et=te,Et.setIndex(Pt)),X.isMesh)W.wireframe===!0?(M.setLineWidth(W.wireframeLinewidth*Ye()),Et.setMode(L.LINES)):Et.setMode(L.TRIANGLES);else if(X.isLine){let dn=W.linewidth;dn===void 0&&(dn=1),M.setLineWidth(dn*Ye()),X.isLineSegments?Et.setMode(L.LINES):X.isLineLoop?Et.setMode(L.LINE_LOOP):Et.setMode(L.LINE_STRIP)}else X.isPoints?Et.setMode(L.POINTS):X.isSprite&&Et.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let dn=X._multiDrawStarts,Re=X._multiDrawCounts,_n=X._multiDrawCount,ft=De?fe.get(De).bytesPerElement:1,Dn=G.get(W).currentProgram.getUniforms();for(let si=0;si<_n;si++)Dn.setValue(L,"_gl_DrawID",si),Et.render(dn[si]/ft,Re[si])}else if(X.isInstancedMesh)Et.renderInstances(Le,Xt,X.count);else if(Y.isInstancedBufferGeometry){let dn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Re=Math.min(Y.instanceCount,dn);Et.renderInstances(Le,Xt,Re)}else Et.render(Le,Xt)};function ou(b,N,Y,W){U!==null&&b.isNodeMaterial&&U.setObject(W,b),oe===!0&&Pe.setState(b,Y,!1),b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,jo(b,N,W),b.side=Yi,b.needsUpdate=!0,jo(b,N,W),b.side=sn):jo(b,N,W)}this.compile=function(b,N,Y=null){Y===null&&(Y=b),U!==null&&U.renderStart(b,N,Y),S=pe.get(Y),S.init(N),y.push(S),Y.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),le=this.localClippingEnabled,oe=Pe.init(this.clippingPlanes,le),oe===!0&&Pe.setGlobalState(this.clippingPlanes,N),U!==null&&He.render(S.state.shadowsArray,Y,N);let W=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){let be=Ee[Ce];ou(be,Y,N,X),W.add(be)}else ou(Ee,Y,N,X),W.add(Ee)}),S=y.pop(),U!==null&&U.renderEnd(),W},this.compileAsync=function(b,N,Y=null){let W=this.compile(b,N,Y);return new Promise(X=>{function Ee(){if(W.forEach(function(Ce){let De=G.get(Ce).currentProgram;(De===void 0||De.isReady())&&W.delete(Ce)}),W.size===0){X(b);return}setTimeout(Ee,10)}tt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let bc=null;function rp(b){bc&&bc(b)}function au(){es.stop()}function lu(){es.start()}let es=new rf;es.setAnimationLoop(rp),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(b){bc=b,Ue.setAnimationLoop(b),b===null?es.stop():es.start()},Ue.addEventListener("sessionstart",au),Ue.addEventListener("sessionend",lu),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(b,N);let Y=Ue.enabled===!0&&Ue.isPresenting===!0,W=w!==null&&(q===null||Y)&&w.begin(R,q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(N),N=Ue.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,N,q),S=pe.get(b,y.length),S.init(N),S.state.textureUnits=J.getTextureUnits(),y.push(S),ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ne.setFromProjectionMatrix(ce,Jn,N.reversedDepth),le=this.localClippingEnabled,oe=Pe.init(this.clippingPlanes,le),T=me.get(b,A.length),T.init(),A.push(T),Ue.enabled===!0&&Ue.isPresenting===!0){let Ce=R.xr.getDepthSensingMesh();Ce!==null&&Ec(Ce,N,-1/0,R.sortObjects)}Ec(b,N,0,R.sortObjects),T.finish(),U!==null&&U.updateLights(S.state.lightsArray),R.sortObjects===!0&&T.sort(de,Be),We=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,We&&Ze.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Pe.beginShadows();let X=S.state.shadowsArray;if(He.render(X,b,N),oe===!0&&Pe.endShadows(),(W&&w.hasRenderPass())===!1){let Ce=T.opaque,be=T.transmissive;if(S.setupLights(),N.isArrayCamera){let De=N.cameras;if(be.length>0)for(let Fe=0,st=De.length;Fe<st;Fe++){let ct=De[Fe];hu(Ce,be,b,ct)}We&&Ze.render(b);for(let Fe=0,st=De.length;Fe<st;Fe++){let ct=De[Fe];cu(T,b,ct,ct.viewport)}}else be.length>0&&hu(Ce,be,b,N),We&&Ze.render(b),cu(T,b,N)}q!==null&&O===0&&(J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q)),W&&w.end(R),b.isScene===!0&&b.onAfterRender(R,b,N),we.resetDefaultState(),k=-1,K=null,y.pop(),y.length>0?(S=y[y.length-1],J.setTextureUnits(S.state.textureUnits),oe===!0&&Pe.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,U!==null&&U.renderEnd()};function Ec(b,N,Y,W){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ne)){W&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);let Ce=ie.update(b),be=b.material;be.visible&&T.push(b,Ce,be,Y,Ve.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ne))){let Ce=ie.update(b),be=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ve.copy(Ce.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(be)){let De=Ce.groups;for(let Fe=0,st=De.length;Fe<st;Fe++){let ct=De[Fe],Le=be[ct.materialIndex];Le&&Le.visible&&T.push(b,Ce,Le,Y,Ve.z,ct,N)}}else be.visible&&T.push(b,Ce,be,Y,Ve.z,null,N)}}let Ee=b.children;for(let Ce=0,be=Ee.length;Ce<be;Ce++)Ec(Ee[Ce],N,Y,W)}function cu(b,N,Y,W){let{opaque:X,transmissive:Ee,transparent:Ce}=b;S.setupLightsView(Y),oe===!0&&Pe.setGlobalState(R.clippingPlanes,Y),W&&M.viewport(Q.copy(W)),X.length>0&&Ko(X,N,Y),Ee.length>0&&Ko(Ee,N,Y),Ce.length>0&&Ko(Ce,N,Y),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function hu(b,N,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[W.id]===void 0){let Le=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[W.id]=new Dt(1,1,{generateMipmaps:!0,type:Le?Ht:mn,minFilter:mi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Ee=S.state.transmissionRenderTarget[W.id],Ce=W.viewport||Q;Ee.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);let be=R.getRenderTarget(),De=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(je),$e=R.getClearAlpha(),$e<1&&R.setClearColor(16777215,.5),R.clear(),We&&Ze.render(Y);let st=R.toneMapping;R.toneMapping=ei;let ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),oe===!0&&Pe.setGlobalState(R.clippingPlanes,W),Ko(b,Y,W),J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let vt=0,Xt=N.length;vt<Xt;vt++){let Pt=N[vt],{object:Et,geometry:dn,material:Re,group:_n}=Pt;if(Re.side===sn&&Et.layers.test(W.layers)){let ft=Re.side;Re.side=cn,Re.needsUpdate=!0,uu(Et,Y,W,dn,Re,_n),Re.side=ft,Re.needsUpdate=!0,Le=!0}}Le===!0&&(J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee))}R.setRenderTarget(be,De,Fe),R.setClearColor(je,$e),ct!==void 0&&(W.viewport=ct),R.toneMapping=st}function Ko(b,N,Y){let W=N.isScene===!0?N.overrideMaterial:null;for(let X=0,Ee=b.length;X<Ee;X++){let Ce=b[X],{object:be,geometry:De,group:Fe}=Ce,st=Ce.material;st.allowOverride===!0&&W!==null&&(st=W),be.layers.test(Y.layers)&&uu(be,N,Y,De,st,Fe)}}function uu(b,N,Y,W,X,Ee){U!==null&&X.isNodeMaterial&&U.setObject(b,X),b.onBeforeRender(R,N,Y,W,X,Ee),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(R,N,Y,W,b,Ee),X.transparent===!0&&X.side===sn&&X.forceSinglePass===!1?(X.side=cn,X.needsUpdate=!0,R.renderBufferDirect(Y,N,W,X,b,Ee),X.side=Yi,X.needsUpdate=!0,R.renderBufferDirect(Y,N,W,X,b,Ee),X.side=sn):R.renderBufferDirect(Y,N,W,X,b,Ee),b.onAfterRender(R,N,Y,W,X,Ee)}function jo(b,N,Y){N.isScene!==!0&&(N=ze);let W=G.get(b),X=S.state.lights,Ee=S.state.shadowsArray,Ce=X.state.version,be=xe.getParameters(b,X.state,Ee,N,Y,S.state.lightProbeGridArray),De=xe.getProgramCacheKey(be),Fe=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,W.fog=N.fog;let st=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=he.get(b.envMap||W.environment,st),W.envMapRotation=W.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",ii),Fe=new Map,W.programs=Fe);let ct=Fe.get(De);if(ct!==void 0){if(W.currentProgram===ct&&W.lightsStateVersion===Ce)return fu(b,be),ct}else be.uniforms=xe.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,Y,be),b.onBeforeCompile(be,R),ct=xe.acquireProgram(be,De),Fe.set(De,ct),W.uniforms=be.uniforms;let Le=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=Pe.uniform),fu(b,be),W.needsLights=cp(b),W.lightsStateVersion=Ce,W.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.sunLights.value=X.state.sun,Le.sunLightShadows.value=X.state.sunShadow,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.sunShadowMatrix.value=X.state.sunShadowMatrix,Le.sunShadowCascade.value=X.state.sunShadowCascade,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=S.state.lightProbeGridArray.length>0,W.currentProgram=ct,W.uniformsList=null,ct}function du(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=or.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function fu(b,N){let Y=G.get(b);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function op(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let Y=0,W=b.length;Y<W;Y++){let X=b[Y];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function ap(b,N,Y,W,X){N.isScene!==!0&&(N=ze),J.resetTextureUnits();let Ee=N.fog,Ce=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?N.environment:null,be=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:at.workingColorSpace,De=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Fe=he.get(W.envMap||Ce,De),st=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ct=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Xt=!!Y.morphAttributes.color,Pt=ei;W.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Pt=R.toneMapping);let Et=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dn=Et!==void 0?Et.length:0,Re=G.get(W),_n=S.state.lights;if(oe===!0&&(le===!0||b!==K)){let wt=b===K&&W.id===k;Pe.setState(W,b,wt)}let ft=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==_n.state.version||Re.outputColorSpace!==be||X.isBatchedMesh&&Re.batching===!1||!X.isBatchedMesh&&Re.batching===!0||X.isBatchedMesh&&Re.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Re.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Re.instancing===!1||!X.isInstancedMesh&&Re.instancing===!0||X.isSkinnedMesh&&Re.skinning===!1||!X.isSkinnedMesh&&Re.skinning===!0||X.isInstancedMesh&&Re.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Re.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Re.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Re.instancingMorph===!1&&X.morphTexture!==null||Re.envMap!==Fe||W.fog===!0&&Re.fog!==Ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Pe.numPlanes||Re.numIntersection!==Pe.numIntersection)||Re.vertexAlphas!==st||Re.vertexTangents!==ct||Re.morphTargets!==Le||Re.morphNormals!==vt||Re.morphColors!==Xt||Re.toneMapping!==Pt||Re.morphTargetsCount!==dn||!!Re.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Re.__version=W.version);let Dn=Re.currentProgram;ft===!0&&(Dn=jo(W,N,X),U&&W.isNodeMaterial&&U.onUpdateProgram(W,Dn,Re));let si=!1,Li=!1,vs=!1,bt=Dn.getUniforms(),Vt=Re.uniforms;if(M.useProgram(Dn.program)&&(si=!0,Li=!0,vs=!0),W.id!==k&&(k=W.id,Li=!0),Re.needsLights){let wt=op(S.state.lightProbeGridArray,X);Re.lightProbeGrid!==wt&&(Re.lightProbeGrid=wt,Li=!0)}if(si||K!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),bt.setValue(L,"projectionMatrix",b.projectionMatrix),bt.setValue(L,"viewMatrix",b.matrixWorldInverse);let Ni=bt.map.cameraPosition;Ni!==void 0&&Ni.setValue(L,ue.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&bt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&bt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,Li=!0,vs=!0)}if(Re.needsLights&&(_n.state.sunShadowMap.length>0&&bt.setValue(L,"sunShadowMap",_n.state.sunShadowMap,J),_n.state.directionalShadowMap.length>0&&bt.setValue(L,"directionalShadowMap",_n.state.directionalShadowMap,J),_n.state.spotShadowMap.length>0&&bt.setValue(L,"spotShadowMap",_n.state.spotShadowMap,J),_n.state.pointShadowMap.length>0&&bt.setValue(L,"pointShadowMap",_n.state.pointShadowMap,J)),X.isSkinnedMesh){bt.setOptional(L,X,"bindMatrix"),bt.setOptional(L,X,"bindMatrixInverse");let wt=X.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),bt.setValue(L,"boneTexture",wt.boneTexture,J))}X.isBatchedMesh&&(bt.setOptional(L,X,"batchingTexture"),bt.setValue(L,"batchingTexture",X._matricesTexture,J),bt.setOptional(L,X,"batchingIdTexture"),bt.setValue(L,"batchingIdTexture",X._indirectTexture,J),bt.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(L,"batchingColorTexture",X._colorsTexture,J));let Ui=Y.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&F.update(X,Y,Dn),(Li||Re.receiveShadow!==X.receiveShadow)&&(Re.receiveShadow=X.receiveShadow,bt.setValue(L,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&N.environment!==null&&(Vt.envMapIntensity.value=N.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Ev()),Li){if(bt.setValue(L,"toneMappingExposure",R.toneMappingExposure),Re.needsLights&&lp(Vt,vs),Ee&&W.fog===!0&&Ne.refreshFogUniforms(Vt,Ee),Ne.refreshMaterialUniforms(Vt,W,ee,Z,S.state.transmissionRenderTarget[b.id]),Re.needsLights&&Re.lightProbeGrid){let wt=Re.lightProbeGrid;Vt.probesSH.value=wt.texture,Vt.probesMin.value.copy(wt.boundingBox.min),Vt.probesMax.value.copy(wt.boundingBox.max),Vt.probesResolution.value.copy(wt.resolution)}or.upload(L,du(Re),Vt,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(or.upload(L,du(Re),Vt,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&bt.setValue(L,"center",X.center),bt.setValue(L,"modelViewMatrix",X.modelViewMatrix),bt.setValue(L,"normalMatrix",X.normalMatrix),bt.setValue(L,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let wt=W.uniformsGroups;for(let Ni=0,ys=wt.length;Ni<ys;Ni++){let mu=wt[Ni];se.update(mu,Dn),se.bind(mu,Dn)}}return Dn}function lp(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function cp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(b,N,Y){let W=G.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=N,G.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let Y=G.get(b);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,Y=0){q=b,V=N,O=Y;let W=null,X=!1,Ee=!1;if(b){let be=G.get(b);if(be.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(L.FRAMEBUFFER,be.__webglFramebuffer),Q.copy(b.viewport),Ae.copy(b.scissor),Me=b.scissorTest,M.viewport(Q),M.scissor(Ae),M.setScissorTest(Me),k=-1;return}else if(be.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(be.__hasExternalTextures)J.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let st=b.depthTexture;if(be.__boundDepthTexture!==st){if(st!==null&&G.has(st)&&(b.width!==st.image.width||b.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ee=!0);let Fe=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?W=Fe[N][Y]:W=Fe[N],X=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?W=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[Y]:W=Fe,Q.copy(b.viewport),Ae.copy(b.scissor),Me=b.scissorTest}else Q.copy(Te).multiplyScalar(ee).floor(),Ae.copy(Ge).multiplyScalar(ee).floor(),Me=dt;if(Y!==0&&(W=B),M.bindFramebuffer(L.FRAMEBUFFER,W)&&M.drawBuffers(b,W),M.viewport(Q),M.scissor(Ae),M.setScissorTest(Me),X){let be=G.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,Y)}else if(Ee){let be=N;for(let De=0;De<b.textures.length;De++){let Fe=G.get(b.textures[De]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+De,Fe.__webglTexture,Y,be)}}else if(b!==null&&Y!==0){let be=G.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,Y)}k=-1};function pu(b){let N=G.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=C.textureFormatReadable(b.format),N.__typeReadable=C.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,Y,W,X,Ee,Ce,be=0){if(!(b&&b.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){M.bindFramebuffer(L.FRAMEBUFFER,De);try{let Fe=b.textures[be],st=Fe.format,ct=Fe.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be);let Le=pu(Fe);if(Le.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-W&&Y>=0&&Y<=b.height-X&&L.readPixels(N,Y,W,X,ye.convert(st),ye.convert(ct),Ee)}finally{let Fe=q!==null?G.get(q).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,N,Y,W,X,Ee,Ce,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(N>=0&&N<=b.width-W&&Y>=0&&Y<=b.height-X){M.bindFramebuffer(L.FRAMEBUFFER,De);let Fe=b.textures[be],st=Fe.format,ct=Fe.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be);let Le=pu(Fe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,vt),L.bufferData(L.PIXEL_PACK_BUFFER,Ee.byteLength,L.STREAM_READ),L.readPixels(N,Y,W,X,ye.convert(st),ye.convert(ct),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Xt=q!==null?G.get(q).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Xt);let Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ad(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ee),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(vt),L.deleteSync(Pt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,Y=0){let W=Math.pow(2,-Y),X=Math.floor(b.image.width*W),Ee=Math.floor(b.image.height*W),Ce=N!==null?N.x:0,be=N!==null?N.y:0;J.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Ce,be,X,Ee),M.unbindTexture()},this.copyTextureToTexture=function(b,N,Y=null,W=null,X=0,Ee=0){let Ce,be,De,Fe,st,ct,Le,vt,Xt,Pt=b.isCompressedTexture?b.mipmaps[Ee]:b.image;if(Y!==null)Ce=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,st=Y.min.y,ct=Y.isBox3?Y.min.z:0;else{let Vt=Math.pow(2,-X);Ce=Math.floor(Pt.width*Vt),be=Math.floor(Pt.height*Vt),b.isDataArrayTexture?De=Pt.depth:b.isData3DTexture?De=Math.floor(Pt.depth*Vt):De=1,Fe=0,st=0,ct=0}W!==null?(Le=W.x,vt=W.y,Xt=W.z):(Le=0,vt=0,Xt=0);let Et=ye.convert(N.format),dn=ye.convert(N.type),Re;N.isData3DTexture?(J.setTexture3D(N,0),Re=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Re=L.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Re=L.TEXTURE_2D),M.activeTexture(L.TEXTURE0),M.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let _n=M.getParameter(L.UNPACK_ROW_LENGTH),ft=M.getParameter(L.UNPACK_IMAGE_HEIGHT),Dn=M.getParameter(L.UNPACK_SKIP_PIXELS),si=M.getParameter(L.UNPACK_SKIP_ROWS),Li=M.getParameter(L.UNPACK_SKIP_IMAGES);M.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(L.UNPACK_SKIP_ROWS,st),M.pixelStorei(L.UNPACK_SKIP_IMAGES,ct);let vs=b.isDataArrayTexture||b.isData3DTexture,bt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let Vt=G.get(b),Ui=G.get(N),wt=G.get(Vt.__renderTarget),Ni=G.get(Ui.__renderTarget);M.bindFramebuffer(L.READ_FRAMEBUFFER,wt.__webglFramebuffer),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let ys=0;ys<De;ys++)vs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(b).__webglTexture,X,ct+ys),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(N).__webglTexture,Ee,Xt+ys)),L.blitFramebuffer(Fe,st,Ce,be,Le,vt,Ce,be,L.DEPTH_BUFFER_BIT,L.NEAREST);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||G.has(b)){let Vt=G.get(b),Ui=G.get(N);M.bindFramebuffer(L.READ_FRAMEBUFFER,D),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let wt=0;wt<De;wt++)vs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,X,ct+wt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vt.__webglTexture,X),bt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ui.__webglTexture,Ee,Xt+wt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ui.__webglTexture,Ee),X!==0?L.blitFramebuffer(Fe,st,Ce,be,Le,vt,Ce,be,L.COLOR_BUFFER_BIT,L.NEAREST):bt?L.copyTexSubImage3D(Re,Ee,Le,vt,Xt+wt,Fe,st,Ce,be):L.copyTexSubImage2D(Re,Ee,Le,vt,Fe,st,Ce,be);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else bt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Re,Ee,Le,vt,Xt,Ce,be,De,Et,dn,Pt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Re,Ee,Le,vt,Xt,Ce,be,De,Et,Pt.data):L.texSubImage3D(Re,Ee,Le,vt,Xt,Ce,be,De,Et,dn,Pt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ee,Le,vt,Ce,be,Et,dn,Pt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ee,Le,vt,Pt.width,Pt.height,Et,Pt.data):L.texSubImage2D(L.TEXTURE_2D,Ee,Le,vt,Ce,be,Et,dn,Pt);M.pixelStorei(L.UNPACK_ROW_LENGTH,_n),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Dn),M.pixelStorei(L.UNPACK_SKIP_ROWS,si),M.pixelStorei(L.UNPACK_SKIP_IMAGES,Li),Ee===0&&N.generateMipmaps&&L.generateMipmap(Re),M.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){V=0,O=0,q=null,M.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var vi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tv=new qi(-1,1,1,-1,0,1),$h=class extends Rt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},wv=new $h,yi=class{constructor(e){this._mesh=new ae(wv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var hr=class extends Sn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hn.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Uo=class extends Sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rc=class extends Sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var oc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new j);this._width=n.width,this._height=n.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hr(vi),this.copyPass.material.blending=Wt,this.timer=new uo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uo!==void 0&&(o instanceof Uo?n=!0:o instanceof rc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ac=class extends Sn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var df={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ur=class i extends Sn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new j(e.x,e.y):new j(256,256),this.clearColor=new re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(r,o,{type:Ht,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Dt(r,o,{type:Ht,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Dt(r,o,{type:Ht,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=df;this.highPassUniforms=hn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new j(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hn.clone(vi.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:vi.vertexShader,fragmentShader:vi.fragmentShader,premultipliedAlpha:!0,blending:En,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new re,this._oldClearAlpha=1,this._basic=new bn,this._fsQuad=new yi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new gt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ur.BlurDirectionX=new j(1,0);ur.BlurDirectionY=new j(0,1);var No={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new lt},cameraProjectionMatrixInverse:{value:new lt},cameraWorldMatrix:{value:new lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

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
		}`},Fo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},lc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function ff(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Av(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new jn(s,e,e);return r.wrapS=Un,r.wrapT=Un,r.needsUpdate=!0,r}function Av(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Oo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Kh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraProjectionMatrixInverse:{value:new lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Kh(i,e,t){let n=Rv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Rv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new P(Math.cos(r),Math.sin(r),o))}return n}var cc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,_=t-f,p,m;g>_?(p=1,m=0):(p=0,m=1);let x=g-p+h,E=_-m+h,v=g-1+2*h,T=_-1+2*h,S=l&255,A=c&255,y=this.perm[S+this.perm[A]]%12,w=this.perm[S+p+this.perm[A+m]]%12,R=this.perm[S+1+this.perm[A+1]]%12,I=.5-g*g-_*_;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[y],g,_));let U=.5-x*x-E*E;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[w],x,E));let B=.5-v*v-T*T;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[R],v,T)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,_=h-g,p=d-g,m=u-g,x=e-_,E=t-p,v=n-m,T,S,A,y,w,R;x>=E?E>=v?(T=1,S=0,A=0,y=1,w=1,R=0):x>=v?(T=1,S=0,A=0,y=1,w=0,R=1):(T=0,S=0,A=1,y=1,w=0,R=1):E<v?(T=0,S=0,A=1,y=0,w=1,R=1):x<v?(T=0,S=1,A=0,y=0,w=1,R=1):(T=0,S=1,A=0,y=1,w=1,R=0);let I=x-T+f,U=E-S+f,B=v-A+f,D=x-y+2*f,H=E-w+2*f,V=v-R+2*f,O=x-1+3*f,q=E-1+3*f,k=v-1+3*f,K=h&255,Q=d&255,Ae=u&255,Me=this.perm[K+this.perm[Q+this.perm[Ae]]]%12,je=this.perm[K+T+this.perm[Q+S+this.perm[Ae+A]]]%12,$e=this.perm[K+y+this.perm[Q+w+this.perm[Ae+R]]]%12,it=this.perm[K+1+this.perm[Q+1+this.perm[Ae+1]]]%12,Z=.6-x*x-E*E-v*v;Z<0?s=0:(Z*=Z,s=Z*Z*this._dot3(this.grad3[Me],x,E,v));let ee=.6-I*I-U*U-B*B;ee<0?r=0:(ee*=ee,r=ee*ee*this._dot3(this.grad3[je],I,U,B));let de=.6-D*D-H*H-V*V;de<0?o=0:(de*=de,o=de*de*this._dot3(this.grad3[$e],D,H,V));let Be=.6-O*O-q*q-k*k;return Be<0?a=0:(Be*=Be,a=Be*Be*this._dot3(this.grad3[it],O,q,k)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,_=(e+t+n+s)*l,p=Math.floor(e+_),m=Math.floor(t+_),x=Math.floor(n+_),E=Math.floor(s+_),v=(p+m+x+E)*c,T=p-v,S=m-v,A=x-v,y=E-v,w=e-T,R=t-S,I=n-A,U=s-y,B=w>R?32:0,D=w>I?16:0,H=R>I?8:0,V=w>U?4:0,O=R>U?2:0,q=I>U?1:0,k=B+D+H+V+O+q,K=o[k][0]>=3?1:0,Q=o[k][1]>=3?1:0,Ae=o[k][2]>=3?1:0,Me=o[k][3]>=3?1:0,je=o[k][0]>=2?1:0,$e=o[k][1]>=2?1:0,it=o[k][2]>=2?1:0,Z=o[k][3]>=2?1:0,ee=o[k][0]>=1?1:0,de=o[k][1]>=1?1:0,Be=o[k][2]>=1?1:0,Te=o[k][3]>=1?1:0,Ge=w-K+c,dt=R-Q+c,ne=I-Ae+c,oe=U-Me+c,le=w-je+2*c,ce=R-$e+2*c,ue=I-it+2*c,Ve=U-Z+2*c,ze=w-ee+3*c,We=R-de+3*c,Ye=I-Be+3*c,L=U-Te+3*c,ut=w-1+4*c,tt=R-1+4*c,C=I-1+4*c,M=U-1+4*c,z=p&255,G=m&255,J=x&255,he=E&255,fe=a[z+a[G+a[J+a[he]]]]%32,$=a[z+K+a[G+Q+a[J+Ae+a[he+Me]]]]%32,ie=a[z+je+a[G+$e+a[J+it+a[he+Z]]]]%32,xe=a[z+ee+a[G+de+a[J+Be+a[he+Te]]]]%32,Ne=a[z+1+a[G+1+a[J+1+a[he+1]]]]%32,me=.6-w*w-R*R-I*I-U*U;me<0?h=0:(me*=me,h=me*me*this._dot4(r[fe],w,R,I,U));let pe=.6-Ge*Ge-dt*dt-ne*ne-oe*oe;pe<0?d=0:(pe*=pe,d=pe*pe*this._dot4(r[$],Ge,dt,ne,oe));let Pe=.6-le*le-ce*ce-ue*ue-Ve*Ve;Pe<0?u=0:(Pe*=Pe,u=Pe*Pe*this._dot4(r[ie],le,ce,ue,Ve));let He=.6-ze*ze-We*We-Ye*Ye-L*L;He<0?f=0:(He*=He,f=He*He*this._dot4(r[xe],ze,We,Ye,L));let Ze=.6-ut*ut-tt*tt-C*C-M*M;return Ze<0?g=0:(Ze*=Ze,g=Ze*Ze*this._dot4(r[Ne],ut,tt,C,M)),27*(h+d+u+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Bo=class i extends Sn{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ff(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Dt(this.width,this.height,{type:Ht,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new gt({defines:Object.assign({},No.defines),uniforms:hn.clone(No.uniforms),vertexShader:No.vertexShader,fragmentShader:No.fragmentShader,blending:Wt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new oo,this.normalMaterial.blending=Wt,this.pdMaterial=new gt({defines:Object.assign({},Oo.defines),uniforms:hn.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new gt({defines:Object.assign({},Fo.defines),uniforms:hn.clone(Fo.uniforms),vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,blending:Wt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new gt({uniforms:hn.clone(vi.uniforms),vertexShader:vi.vertexShader,fragmentShader:vi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:po,blendDst:ds,blendEquation:Nn,blendSrcAlpha:fo,blendDstAlpha:ds,blendEquationAlpha:Nn}),this.blendMaterial=new gt({uniforms:hn.clone(lc.uniforms),vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:hl,blendSrc:po,blendDst:ds,blendEquation:Nn,blendSrcAlpha:fo,blendDstAlpha:ds,blendEquationAlpha:Nn}),this._fsQuad=new yi(null),this._originalClearColor=new re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new di,this.depthTexture.format=gi,this.depthTexture.type=$i,this.normalRenderTarget=new Dt(this.width,this.height,{minFilter:Gt,magFilter:Gt,type:Ht,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Kh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new cc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new jn(s,e,e,gn,mn);return r.wrapS=Un,r.wrapT=Un,r.needsUpdate=!0,r}};Bo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var zo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hc=class extends Sn{constructor(){super(),this.isOutputPass=!0,this.uniforms=hn.clone(zo.uniforms),this.material=new js({name:zo.name,uniforms:this.uniforms,vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader}),this._fsQuad=new yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_o&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function zn(i,e,t){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}var Mi=(i,e)=>(i%e+e)%e,pf=i=>i*i*(3-2*i),dr=(i,e,t)=>i+(e-i)*t,Bn=i=>i<0?0:i>1?1:i;function Tn(i,e,t,n=0){let s=Math.floor(i),r=Math.floor(e),o=pf(i-s),a=pf(e-r),l=Mi(s,t),c=Mi(s+1,t),h=Mi(r,t),d=Mi(r+1,t);return dr(dr(zn(l,h,n),zn(c,h,n),o),dr(zn(l,d,n),zn(c,d,n),o),a)}function un(i,e,t,n=4,s=0){let r=.5,o=1,a=0,l=0;for(let c=0;c<n;c++)a+=r*Tn(i*o,e*o,t*o,s+c*17),l+=r,r*=.5,o*=2;return a/l}function uc(i,e,t,n=0){let s=Math.floor(i),r=Math.floor(e),o=9,a=9,l=0;for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){let d=s+h,u=r+c,f=Mi(d,t),g=Mi(u,t),_=d+zn(f,g,n),p=u+zn(f,g,n+99),m=Math.hypot(_-i,p-e);m<o?(a=o,o=m,l=zn(f,g,n+7)):m<a&&(a=m)}return[o,a,l]}var jh=new Map,eu=8;function gf(i){eu=Math.min(16,i)}function Qh(i,e,t){let n=new jn(i,e,e,gn);return n.wrapS=n.wrapT=Un,n.generateMipmaps=!0,n.minFilter=mi,n.magFilter=$t,n.anisotropy=eu,t&&(n.colorSpace=Zt),n.needsUpdate=!0,n}function Qt(i,e,t,n){if(jh.has(i))return jh.get(i);let s=e*e,r=new Uint8Array(s*4),o=new Uint8Array(s*4),a=new Uint8Array(s*4),l=new Float32Array(s);for(let h=0;h<e;h++)for(let d=0;d<e;d++){let u=h*e+d,f=n(d/e,h/e);r[u*4]=Bn(f[0])*255,r[u*4+1]=Bn(f[1])*255,r[u*4+2]=Bn(f[2])*255,r[u*4+3]=255,l[u]=f[3];let g=Bn(f[4])*255;a[u*4]=255,a[u*4+1]=g,a[u*4+2]=0,a[u*4+3]=255}for(let h=0;h<e;h++)for(let d=0;d<e;d++){let u=h*e+d,f=l[h*e+Mi(d-1,e)],g=l[h*e+Mi(d+1,e)],_=l[Mi(h-1,e)*e+d],p=l[Mi(h+1,e)*e+d],m=(f-g)*t,x=(_-p)*t,E=1,v=Math.hypot(m,x,E);m/=v,x/=v,E/=v,o[u*4]=(m*.5+.5)*255,o[u*4+1]=(x*.5+.5)*255,o[u*4+2]=(E*.5+.5)*255,o[u*4+3]=255}let c={map:Qh(r,e,!0),normalMap:Qh(o,e,!1),roughnessMap:Qh(a,e,!1)};return jh.set(i,c),c}var mf=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255],On=(i,e,t)=>[dr(i[0],e[0],t),dr(i[1],e[1],t),dr(i[2],e[2],t)],dc=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Lt={plush(){return Qt("plush",512,5,(i,e)=>{let t=un(i*64,e*64,64,3,1),n=Tn(i*256,e*24,256,5)*.5+Tn(i*24,e*256,24,6)*.5,s=un(i*12,e*12,12,3,9),r=t*.5+n*.3+s*.2,o=.88+t*.1+s*.04;return[o,o,o,r,.85+t*.15]})},knit(){return Qt("knit",512,9,(i,e)=>{let t=i*16,n=e*22,s=t-Math.floor(t)-.5,r=n-Math.floor(n),o=Math.abs(Math.abs(s)-.25-(r-.5)*.25),a=Bn(1-o*4.2)*Math.sin(r*Math.PI),l=Tn(i*300,e*300,300,3)*.15,c=a*.85+l,h=.62+a*.38+l*.4;return[h,h,h,c,.95]})},linen(){return Qt("linen",256,3,(i,e)=>{let t=Math.sin(i*Math.PI*2*64)*.5+.5,n=Math.sin(e*Math.PI*2*64)*.5+.5,s=un(i*16,e*16,16,3,3),r=(Math.floor(i*64)+Math.floor(e*64)&1?t:n)*.6+s*.4,o=.82+r*.18;return[o,o,o,r,.8+s*.15]})},wood(i,e,t,n=!1,s=1){let r=mf(e),o=mf(t);return Qt("wood"+i,512,4,(a,l)=>{let c=un(a*4,l*1,4,4,11)*6*s,h=Math.sin((a*10*s+c)*Math.PI*2)*.5+.5,d=Tn(a*180,l*6,180,4),u=Math.pow(h,3)*.6+d*.3,f=1;if(n){let _=l*4,p=Math.abs(_-Math.round(_));f=Bn(p*60);let m=zn(Math.floor(_),0,3)*.2;u=u*.8+m}let g=dc(On(r,o,Bn(u)),.75+.25*f);return[g[0],g[1],g[2],u*.4+f*.6,.55+d*.2+(1-f)*.3]})},painted(){return Qt("painted",256,1.5,(i,e)=>{let t=un(i*8,e*2,8,4,21),n=Tn(i*120,e*4,120,2),s=.93+t*.05+n*.02;return[s,s,s,t*.6+n*.4,.32+n*.12]})},marble(){return Qt("marble",512,1.5,(i,e)=>{let t=un(i*4,e*4,4,5,31),n=Math.pow(1-Math.abs(Math.sin((i*3+e*2+t*3)*Math.PI)),12),s=zn(Math.floor(i*512),Math.floor(e*512),8)>.985?.25:0,r=On([.96,.95,.93],[.62,.64,.7],n*.7+s);return[r[0],r[1],r[2],t*.2,.12+n*.1]})},sponge(){return Qt("sponge",512,10,(i,e)=>{let[t]=uc(i*28,e*28,28,41),[n]=uc(i*70,e*70,70,42),s=Bn(t*1.6)*.7+Bn(n*1.6)*.3,r=On([.78,.56,.08],[1,.86,.3],s);return[r[0],r[1],r[2],s,.95]})},scrubber(){return Qt("scrubber",256,8,(i,e)=>{let t=Tn(i*90,e*30,90,51),n=Tn(i*30,e*90,30,52),s=Math.max(t,n),r=On([.08,.38,.18],[.3,.75,.4],s);return[r[0],r[1],r[2],s,.9]})},cookie(){return Qt("cookie",512,7,(i,e)=>{let t=un(i*10,e*10,10,5,61),[n,,s]=uc(i*7,e*7,7,62),r=s>.55&&n<.22?1:0,o=Tn(i*160,e*160,160,63),a=On([.7,.45,.2],[.93,.72,.42],t*.8+o*.2);return r&&(a=[.25,.13,.07]),[a[0],a[1],a[2],t*.7+o*.2+r*.4,r?.35:.85]})},roof(){return Qt("roof",512,6,(i,e)=>{let s=e*6,r=Math.floor(s),o=i*6+(r&1)*.5,a=o-Math.floor(o)-.5,l=s-r,c=l-(1-Math.sqrt(Math.max(0,.25-a*a))*.9),h=Bn(c*12),d=zn(Math.floor(o),r,71),u=un(i*24,e*24,24,3,72),f=dc(On([.78,.33,.24],[.93,.5,.35],d*.7+u*.3),.55+.45*h);return[f[0],f[1],f[2],h*.7+l*.3+u*.1,.6+u*.2]})},brick(){return Qt("brick",512,6,(i,e)=>{let t=e*8,n=Math.floor(t),s=i*4+(n&1)*.5,r=s-Math.floor(s),o=t-n,a=Math.min(r,1-r)*4<.12||Math.min(o,1-o)<.08,l=un(i*32,e*32,32,4,81),c=zn(Math.floor(s),n,82),h=a?[.85,.82,.76]:On([.62,.25,.2],[.85,.42,.3],c*.6+l*.4);return[h[0],h[1],h[2],a?.1:.7+l*.3,.85]})},cardboard(){return Qt("cardboard",512,3,(i,e)=>{let t=un(i*20,e*20,20,4,91),n=Math.sin(i*Math.PI*2*40)*.5+.5,s=Math.abs(e-.5)<.09,r=On([.66,.48,.3],[.8,.63,.42],t);return s&&(r=On([.85,.72,.52],[.95,.85,.65],t)),!s&&i>.08&&i<.32&&e>.12&&e<.2&&(r=dc(r,.55)),[r[0],r[1],r[2],s?.6:n*.3+t*.4,s?.3:.9]})},quilt(){return Qt("quilt",512,9,(i,e)=>{let t=(i+e)*6,n=(i-e)*6,s=Math.abs(t-Math.round(t)),r=Math.abs(n-Math.round(n)),o=Math.sin(Bn(Math.min(s,r)*2)*Math.PI/2),a=un(i*64,e*64,64,2,101),l=.75+o*.22+a*.03;return[l,l,l,o*.9+a*.1,.92]})},grass(){return Qt("grass",512,4,(i,e)=>{let t=un(i*16,e*16,16,5,111),n=Tn(i*200,e*200,200,112),s=On([.16,.42,.2],[.45,.78,.36],t*.7+n*.3);return[s[0],s[1],s[2],t*.5+n*.5,.85]})},rock(){return Qt("rock",512,8,(i,e)=>{let t=un(i*8,e*8,8,6,121),[n,s]=uc(i*6,e*6,6,122),r=Bn((s-n)*6),o=dc(On([.42,.38,.5],[.72,.68,.78],t),.6+.4*r);return[o[0],o[1],o[2],t*.6+r*.4,.8]})},ceramic(){return Qt("ceramic",256,1,(i,e)=>{let t=un(i*6,e*6,6,3,131),n=zn(Math.floor(i*256),Math.floor(e*256),132)>.992?.6:1,s=(.95+t*.05)*n;return[s,s,s,t*.3,.12]})},water(){return Qt("water",512,6,(i,e)=>{let t=un(i*8,e*8,8,5,141),n=un(i*3+t,e*3,3,3,142);return[1,1,1,t*.6+n*.4,.05]})},cloud(){return Qt("cloud",256,2,(i,e)=>{let t=un(i*6,e*6,6,4,151),n=.92+t*.08;return[n,n,n,t,1]})},wicker(){return Qt("wicker",256,8,(i,e)=>{let t=Math.sin(i*Math.PI*2*16)*.5+.5,n=Math.sin(e*Math.PI*2*16)*.5+.5,s=Math.floor(i*16)+Math.floor(e*16)&1?t:n,r=Tn(i*128,e*128,128,161),o=On([.55,.36,.18],[.86,.66,.4],s*.7+r*.3);return[o[0],o[1],o[2],s,.8]})}},Ho=null;function xs(){if(Ho)return Ho;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.65)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ho=new as(i),Ho.colorSpace=Zt,Ho}var ko=null;function xf(){if(ko)return ko;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,62);return t.addColorStop(0,"rgba(255,255,255,0.55)"),t.addColorStop(.8,"rgba(255,255,255,0.7)"),t.addColorStop(.92,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(64,64,62,0,Math.PI*2),e.fill(),ko=new as(i),ko.colorSpace=Zt,ko}function Vo(i,{w:e=512,h:t=256,font:n='700 54px Nunito, "Segoe UI", sans-serif',color:s="#4a3424",bg:r=null}={}){let o=document.createElement("canvas");o.width=e,o.height=t;let a=o.getContext("2d");r&&(a.fillStyle=r,a.fillRect(0,0,e,t)),a.fillStyle=s,a.font=n,a.textAlign="center",a.textBaseline="middle";let l=parseInt(n.match(/(\d+)px/)[1],10)*1.25;i.forEach((h,d)=>a.fillText(h,e/2,t/2+(d-(i.length-1)/2)*l));let c=new as(o);return c.colorSpace=Zt,c.anisotropy=eu,c}var fr={ultra:{label:"Ultra",pr:2,shadow:4096,ao:!0,bloom:!0,msaa:4},high:{label:"High",pr:1.5,shadow:4096,ao:!0,bloom:!0,msaa:4},medium:{label:"Medium",pr:1,shadow:2048,ao:!1,bloom:!0,msaa:2},low:{label:"Low",pr:.8,shadow:1024,ao:!1,bloom:!1,msaa:0}},pr=["low","medium","high","ultra"],Cv={uniforms:{tDiffuse:{value:null},time:{value:0},vignette:{value:.32},warmth:{value:.03},saturation:{value:1.08}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float time; uniform float vignette; uniform float warmth; uniform float saturation; varying vec2 vUv;
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
  }`},fc=class{constructor(e){this.r=new nc({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.r.outputColorSpace=Zt,this.r.toneMapping=fs,this.r.toneMappingExposure=1,this.r.shadowMap.enabled=!0,this.r.shadowMap.type=us,gf(this.r.capabilities.getMaxAnisotropy()),this.quality="high",this.composer=null,this.scene=null,this.camera=null}setQuality(e){this.quality=fr[e]?e:"high",this.scene&&this.build(this.scene,this.camera,this.look)}build(e,t,n={}){this.scene=e,this.camera=t,this.look=n;let s=fr[this.quality],r=window.innerWidth,o=window.innerHeight;this.r.setPixelRatio(Math.min(window.devicePixelRatio||1,s.pr)),this.r.setSize(r,o,!1),this.r.toneMappingExposure=n.exposure||1,this.composer&&(this.composer.dispose(),this.composer=null);let a=this.r.getPixelRatio(),l=new Dt(r*a,o*a,{type:Ht,samples:s.msaa}),c=new oc(this.r,l);if(c.setPixelRatio(a),c.setSize(r,o),c.addPass(new ac(e,t)),this.ao=null,s.ao){let h=new Bo(e,t,r,o),d=h.render.bind(h);h.render=(...u)=>{let f=[];e.traverseVisible(g=>{(g.userData.noAO||g.isSprite||g.isPoints||g.material&&g.material.transparent)&&f.push(g)}),f.forEach(g=>g.visible=!1),d(...u),f.forEach(g=>g.visible=!0)},h.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.5,scale:1.1,samples:16,distanceFallOff:1}),h.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),h.blendIntensity=.9,c.addPass(h),this.ao=h}this.bloom=null,s.bloom&&(this.bloom=new ur(new j(r,o),n.bloom??.3,.6,n.threshold??1),c.addPass(this.bloom)),c.addPass(new hc),this.grade=new hr(Cv),n.vignette!==void 0&&(this.grade.uniforms.vignette.value=n.vignette),n.warmth!==void 0&&(this.grade.uniforms.warmth.value=n.warmth),c.addPass(this.grade),this.composer=c}shadowSize(){return fr[this.quality].shadow}resize(){if(!this.camera)return;let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.r.setSize(e,t,!1),this.composer&&this.composer.setSize(e,t)}render(e){this.grade&&(this.grade.uniforms.time.value=e%100),this.composer?this.composer.render():this.scene&&this.r.render(this.scene,this.camera)}};var pc=class{constructor(e){this.keys=new Set,this.pressed=new Set,this.camDX=0,this.camDY=0,this.touch={x:0,y:0,jump:!1,dash:!1,flop:!1},this.pad=null,this.prevPad={},addEventListener("keydown",r=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(r.code)&&r.preventDefault(),this.keys.has(r.code)||this.pressed.add(r.code),this.keys.add(r.code)}),addEventListener("keyup",r=>this.keys.delete(r.code)),addEventListener("blur",()=>this.keys.clear());let t=!1,n=0,s=0;e.addEventListener("mousedown",r=>{t=!0,n=r.clientX,s=r.clientY}),addEventListener("mouseup",()=>t=!1),addEventListener("mousemove",r=>{if(document.pointerLockElement===e){this.camDX+=r.movementX,this.camDY+=r.movementY;return}t&&(this.camDX+=r.clientX-n,this.camDY+=r.clientY-s,n=r.clientX,s=r.clientY)}),this.setupTouch()}setupTouch(){let e="ontouchstart"in window||navigator.maxTouchPoints>0,t=document.getElementById("touch");if(!e||!t)return;this.isTouch=!0,t.classList.remove("hidden");let n=document.getElementById("stick"),s=document.getElementById("knob"),r=null,o=0,a=0,l=null,c=0,h=0,d=50;n.addEventListener("touchstart",g=>{r=g.changedTouches[0].identifier;let p=n.getBoundingClientRect();o=p.left+p.width/2,a=p.top+p.height/2,g.preventDefault()},{passive:!1}),addEventListener("touchmove",g=>{for(let _ of g.changedTouches)if(_.identifier===r){let p=_.clientX-o,m=_.clientY-a,x=Math.hypot(p,m);x>d&&(p=p/x*d,m=m/x*d),s.style.transform=`translate(${p}px, ${m}px)`,this.touch.x=p/d,this.touch.y=m/d}else _.identifier===l&&(this.camDX+=(_.clientX-c)*1.4,this.camDY+=(_.clientY-h)*1.4,c=_.clientX,h=_.clientY)},{passive:!0});let u=g=>{for(let _ of g.changedTouches)_.identifier===r&&(r=null,this.touch.x=this.touch.y=0,s.style.transform=""),_.identifier===l&&(l=null)};addEventListener("touchend",u),addEventListener("touchcancel",u),document.getElementById("game").addEventListener("touchstart",g=>{let _=g.changedTouches[0];_.clientX>innerWidth*.4&&(l=_.identifier,c=_.clientX,h=_.clientY)},{passive:!0});let f=(g,_)=>{let p=document.getElementById(g);p.addEventListener("touchstart",m=>{m.preventDefault(),this.touch[_]||this.pressed.add("touch-"+_),this.touch[_]=!0,p.classList.add("down")},{passive:!1}),p.addEventListener("touchend",m=>{m.preventDefault(),this.touch[_]=!1,p.classList.remove("down")},{passive:!1})};f("tJump","jump"),f("tDash","dash"),f("tFlop","flop")}pollPad(){let e=navigator.getGamepads?navigator.getGamepads():[],t=e&&[...e].find(o=>o&&o.connected);if(this.pad=t||null,!t)return;let n=o=>!!(t.buttons[o]&&t.buttons[o].pressed),s={jump:n(0),dash:n(2)||n(5)||n(7),flop:n(1)||n(4)||n(6),pause:n(9)};for(let o in s)s[o]&&!this.prevPad[o]&&this.pressed.add("pad-"+o);this.prevPad=s;let r=o=>Math.abs(o)<.18?0:o;this.camDX+=r(t.axes[2]||0)*12,this.camDY+=r(t.axes[3]||0)*8}move(){let e=0,t=0,n=this.keys;if((n.has("KeyW")||n.has("ArrowUp"))&&(t+=1),(n.has("KeyS")||n.has("ArrowDown"))&&(t-=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(e-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(e+=1),e+=this.touch.x,t-=this.touch.y,this.pad){let r=this.pad.axes[0]||0,o=this.pad.axes[1]||0;Math.hypot(r,o)>.18&&(e+=r,t-=o)}let s=Math.hypot(e,t);return s>1&&(e/=s,t/=s),{x:e,y:t}}jumpHeld(){return this.keys.has("Space")||this.touch.jump||!!this.prevPad.jump}jumpPressed(){return this.pressed.has("Space")||this.pressed.has("touch-jump")||this.pressed.has("pad-jump")}dashPressed(){return this.pressed.has("ShiftLeft")||this.pressed.has("ShiftRight")||this.pressed.has("KeyK")||this.pressed.has("touch-dash")||this.pressed.has("pad-dash")}flopPressed(){return this.pressed.has("KeyC")||this.pressed.has("ControlLeft")||this.pressed.has("KeyL")||this.pressed.has("touch-flop")||this.pressed.has("pad-flop")}camTurn(){let e=0;return this.keys.has("KeyQ")&&(e-=1),this.keys.has("KeyE")&&(e+=1),e}endFrame(){this.pressed.clear(),this.camDX=0,this.camDY=0}};var tu=new Map,Mt=(i,e)=>(tu.has(i)||tu.set(i,e()),tu.get(i));function kt(i,e){let t={};for(let n of["map","normalMap","roughnessMap"]){if(!i[n])continue;let s=i[n].clone();s.repeat.set(e,e),s.needsUpdate=!0,t[n]=s}return t}function mc(i,e=.5){let t=i.attributes.position,n=i.attributes.normal,s=new Float32Array(t.count*2);for(let r=0;r<t.count;r++){let o=t.getX(r),a=t.getY(r),l=t.getZ(r),c=Math.abs(n.getX(r)),h=Math.abs(n.getY(r)),d=Math.abs(n.getZ(r)),u,f;h>=c&&h>=d?(u=o,f=l):c>=d?(u=l,f=a):(u=o,f=a),s[r*2]=u*e,s[r*2+1]=f*e}return i.setAttribute("uv",new At(s,2)),i}var _e={plush(i,e="plush"+i){return Mt(e,()=>new xt(Object.assign({color:i,roughness:1,sheen:1,sheenRoughness:.45,sheenColor:new re(16777215).lerp(new re(i),.4),normalScale:new j(.6,.6)},kt(Lt.plush(),3))))},knit(i){return Mt("knit"+i,()=>new xt(Object.assign({color:i,sheen:.8,sheenRoughness:.6,sheenColor:16777215,normalScale:new j(1.2,1.2)},kt(Lt.knit(),1))))},quilt(i){return Mt("quilt"+i,()=>new xt(Object.assign({color:i,sheen:.7,sheenRoughness:.5,sheenColor:16777215,normalScale:new j(1.4,1.4)},kt(Lt.quilt(),1))))},linen(i){return Mt("linen"+i,()=>new pt(Object.assign({color:i},kt(Lt.linen(),1))))},painted(i){return Mt("painted"+i,()=>new xt(Object.assign({color:i,clearcoat:.35,clearcoatRoughness:.45,specularIntensity:.6},kt(Lt.painted(),1))))},ceramic(i){return Mt("ceramic"+i,()=>new xt(Object.assign({color:i,clearcoat:1,clearcoatRoughness:.08},kt(Lt.ceramic(),1))))},woodLight(){return Mt("woodLight",()=>new pt(Object.assign({},kt(Lt.wood("light",15255962,12094040,!0),1))))},woodBirch(){return Mt("woodBirch",()=>new pt(Object.assign({},kt(Lt.wood("birch",15851456,13808778,!0,.6),1))))},woodBoard(){return Mt("woodBoard",()=>new xt(Object.assign({clearcoat:.3,clearcoatRoughness:.4},kt(Lt.wood("board",14264428,10250810,!1,.5),1))))},woodDark(){return Mt("woodDark",()=>new pt(Object.assign({},kt(Lt.wood("dark",9067066,5189404,!0),1))))},marble(){return Mt("marble",()=>new xt(Object.assign({clearcoat:.8,clearcoatRoughness:.1},kt(Lt.marble(),1))))},sponge(){return Mt("sponge",()=>new pt(Object.assign({normalScale:new j(1.5,1.5)},kt(Lt.sponge(),1))))},scrubber(){return Mt("scrubber",()=>new pt(Object.assign({normalScale:new j(1.5,1.5)},kt(Lt.scrubber(),1))))},cookie(){return Mt("cookie",()=>new pt(Object.assign({normalScale:new j(1.6,1.6)},kt(Lt.cookie(),1))))},roof(){return Mt("roof",()=>new pt(Object.assign({},kt(Lt.roof(),1))))},brick(){return Mt("brick",()=>new pt(Object.assign({},kt(Lt.brick(),1))))},stucco(i=16773598){return Mt("stucco"+i,()=>new pt(Object.assign({color:i,normalScale:new j(.8,.8)},kt(Lt.cloud(),1))))},cardboard(){return Mt("cardboard",()=>new pt(Object.assign({},kt(Lt.cardboard(),1))))},grass(){return Mt("grass",()=>new pt(Object.assign({},kt(Lt.grass(),1))))},rock(){return Mt("rock",()=>new pt(Object.assign({normalScale:new j(1.4,1.4)},kt(Lt.rock(),1))))},wicker(){return Mt("wicker",()=>new pt(Object.assign({},kt(Lt.wicker(),1))))},cloud(){return Mt("cloudMat",()=>new xt(Object.assign({color:16777215,roughness:1,sheen:1,sheenColor:16770800,sheenRoughness:.8,emissive:3156026,normalScale:new j(.5,.5)},kt(Lt.cloud(),1))))},crystal(i=10479871){return Mt("crystal"+i,()=>new xt({color:i,metalness:0,roughness:.08,transmission:.85,thickness:1.2,ior:1.5,iridescence:.6,iridescenceIOR:1.3,emissive:i,emissiveIntensity:.18,attenuationColor:i,attenuationDistance:3}))},bubble(){return Mt("bubble",()=>new xt({color:14677759,roughness:.02,transmission:.92,thickness:.3,ior:1.2,iridescence:1,iridescenceIOR:1.6,iridescenceThicknessRange:[200,700],emissive:2781096,emissiveIntensity:.15}))},glossy(i,e=0,t=0){return Mt("glossy"+i+"_"+e+"_"+t,()=>new xt({color:i,roughness:.25,clearcoat:1,clearcoatRoughness:.05,emissive:e,emissiveIntensity:t}))},gold(i=16761402,e=.35){return Mt("gold"+i+e,()=>new xt({color:i,metalness:.85,roughness:.22,clearcoat:1,clearcoatRoughness:.05,emissive:i,emissiveIntensity:e}))},eye(){return Mt("eye",()=>new xt({color:724244,roughness:.05,clearcoat:1,clearcoatRoughness:0}))},emissive(i,e=2){return Mt("emi"+i+e,()=>new pt({color:0,emissive:i,emissiveIntensity:e}))},matte(i,e=.8){return Mt("matte"+i+e,()=>new pt({color:i,roughness:e}))}};function _f(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let x=0,E=a.length;x<E;x++){let v=a[x],T=i.attributes[v];l[v]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);let S=i.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((A,y)=>{let w=new A.array.constructor(A.count*A.itemSize);c[v][y]=new A.constructor(w,A.itemSize,A.normalized)}))}let f=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),p=f*_;for(let x=0;x<r;x++){let E=n?n.getX(x):x,v="";for(let T=0,S=a.length;T<S;T++){let A=a[T],y=i.getAttribute(A),w=y.itemSize;for(let R=0;R<w;R++)v+=`${Math.trunc(y[d[R]](E)*_+p)},`}if(v in t)h.push(t[v]);else{for(let T=0,S=a.length;T<S;T++){let A=a[T],y=i.getAttribute(A),w=i.morphAttributes[A],R=y.itemSize,I=l[A],U=c[A];for(let B=0;B<R;B++){let D=d[B],H=u[B];if(I[H](o,y[D](E)),w)for(let V=0,O=w.length;V<O;V++)U[V][H](o,w[V][D](E))}}t[v]=o,h.push(o),o++}}let m=i.clone();for(let x in i.attributes){let E=l[x];if(m.setAttribute(x,new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)),x in c)for(let v=0;v<c[x].length;v++){let T=c[x][v];m.morphAttributes[x][v]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return m.setIndex(h),m}var Ct=(i,e=!0,t=!0)=>(i.castShadow=e,i.receiveShadow=t,i),gc=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},vf=5211846;function Go(i,e,t,n=.05){let s=new pi;s.moveTo(i[0][0],i[0][1]);for(let o=1;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length];s.quadraticCurveTo(a[0],a[1],(a[0]+l[0])/2,(a[1]+l[1])/2)}s.closePath();let r=new hs(s,{depth:e,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:5,curveSegments:10});return r.translate(0,0,-e/2),r.computeVertexNormals(),Ct(new ae(r,t))}function yf(){let i=_e.plush(vf),e=new et,t=new et;e.add(t);let n=[],s=48,r=O=>{let q=Math.pow(Math.sin(Math.PI*Math.pow(O,.72)),.75)*.5;return Math.max(q,O<.5?.13*(1-O*2)+q:0)};for(let O=0;O<=s;O++){let q=O/s;n.push(new j(Math.max(1e-4,r(q)),(q-.5)*1.8))}let o=new io(n,64);o.rotateX(Math.PI/2),o.rotateZ(Math.PI/2);let a=o.attributes.position,l=new Float32Array(a.count*3),c=new re(vf),h=new re(16054011),d=new re(10136004),u=new re;for(let O=0;O<a.count;O++){let q=a.getX(O),k=a.getY(O),K=a.getZ(O),Q=K/1.8+.5,Ae=Math.hypot(q,k)||1e-6,Me=k/Ae;k*=.84,Q>.82&&(k-=(Q-.82)*.12),a.setXYZ(O,q*.98,k,K);let je=-.22+.3*gc(.78,1,Q)-.12*gc(.4,.05,Q),$e=gc(je+.03,je-.03,Me);u.copy(c).lerp(h,$e);let it=1-gc(0,.035,Math.abs(Me-je));u.lerp(d,it*.45),l[O*3]=u.r,l[O*3+1]=u.g,l[O*3+2]=u.b}o.setAttribute("color",new At(l,3)),o.computeVertexNormals();let f=_e.plush(16777215,"plushBody").clone();f.vertexColors=!0,f.sheenColor=new re(13624063);let g=Ct(new ae(o,f));t.add(g);let _=_e.plush(2766160,"mouth"),p=new ae(new ln(.2,.028,10,32,Math.PI*.9),_);p.position.set(0,-.15,.66),p.rotation.set(Math.PI*.62,0,Math.PI*1.05),p.scale.set(1.15,1,1),t.add(p);let m=_e.plush(16777215,"tooth");for(let O=0;O<7;O++){let q=-.85+O*.2833333333333333,k=new ae(new ls(.028,.065,8),m);k.position.set(Math.sin(q)*.22,-.13,.62+Math.cos(q)*.08),k.rotation.x=Math.PI,t.add(k)}let x=[];[-1,1].forEach(O=>{let q=new ae(new zt(.06,24,16),_e.eye());q.position.set(O*.255,.07,.5),q.scale.set(1,1,.6),q.lookAt(O*1.2,.2,1.4);let k=new ae(new zt(.016,8,6),_e.emissive(16777215,1.5));k.position.set(.018,.022,.045),q.add(k),t.add(q),x.push(q)});let E=_e.plush(3428474,"gill");[-1,1].forEach(O=>{for(let q=0;q<3;q++){let k=new ae(new ln(.085,.01,6,16,Math.PI*.9),E);k.position.set(O*.395,0,.25-q*.085),k.rotation.set(0,O*Math.PI/2,Math.PI/2),t.add(k)}});let v=Go([[.12,0],[-.12,.46],[-.24,.42],[-.42,0]],.06,i,.045);v.rotation.y=-Math.PI/2,v.position.set(0,.3,-.05),t.add(v);let T=new et,S=Go([[0,.08],[.55,.26],[.5,.08],[.25,-.1],[0,-.1]],.04,i,.04);S.rotation.x=-Math.PI/2,T.add(S),T.position.set(.28,-.14,.2),T.rotation.set(0,.35,-.35),t.add(T);let A=new et;A.scale.x=-1;let y=T.clone();A.add(y),t.add(A);let w=[T,y];[-1,1].forEach(O=>{let q=Go([[0,.05],[.2,-.05],[.14,-.14],[0,-.06]],.03,i,.025);q.position.set(O*.15,-.3,-.35),q.rotation.set(0,O>0?-1.2:Math.PI+1.2,.6*O),t.add(q)});let R=new et;R.position.set(0,.02,-.82),t.add(R);let I=Ct(new ae(new zt(.16,20,14),i));I.scale.set(.75,.8,1.6),I.position.z=-.08,R.add(I);let U=Go([[.14,.02],[-.18,.5],[-.32,.48],[-.2,.06],[-.3,-.3],[-.18,-.32]],.05,i,.04);U.rotation.y=-Math.PI/2,U.position.set(0,.02,-.18),R.add(U);let B=Vo(["BL\xC5HAJ"],{w:256,h:128,font:"800 52px Nunito, sans-serif",color:"#2f5fa0",bg:"#ffffff"}),D=new ae(new Mn(.12,.2),new pt({map:B,side:sn,roughness:.9}));D.geometry.translate(0,-.1,0),B.center.set(.5,.5),B.rotation=Math.PI/2,D.position.set(.1,-.33,-.55),D.rotation.y=Math.PI/2,D.castShadow=!0,t.add(D);let H=new ae(new Qn(.6,32),new bn({map:xs(),color:659488,transparent:!0,opacity:.35,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.renderOrder=2,e.add(H);let V={root:e,body:t,tail:R,eyes:x,fins:w,blob:H,tag:D,t:Math.random()*10,blinkT:2,squash:1,squashVel:0,spin:0};return V.update=(O,q)=>{V.t+=O;let k=4+q.speed*11;R.rotation.y=Math.sin(V.t*k)*(.15+q.speed*.45),t.rotation.y=-Math.sin(V.t*k-.6)*q.speed*.08;let K=-.35+Math.sin(V.t*(q.glide?14:6))*(q.glide?.12:.08)-q.speed*.25+(q.grounded?0:q.glide?.55:-.3);w[0].rotation.z=K,w[1].rotation.z=K,D.rotation.x=Math.sin(V.t*5)*.25+q.speed*.5,t.position.y=(q.grounded?Math.sin(V.t*2.2)*.025:0)+.4;let Q=q.grounded?0:q.pound?.9:Po.clamp(-q.vy*.05,-.45,.45);t.rotation.x+=(Q-t.rotation.x)*Math.min(1,O*10),V.spin>0?(V.spin=Math.max(0,V.spin-O*18),t.rotation.z=V.spin):t.rotation.z*=.8;let Ae=-170*(V.squash-1)-12*V.squashVel;V.squashVel+=Ae*O,V.squash+=V.squashVel*O;let Me=V.squash;t.scale.set(1/Math.sqrt(Me),Me,1/Math.sqrt(Me)),V.blinkT-=O;let je=1;V.blinkT<0&&(je=.1,V.blinkT<-.12&&(V.blinkT=2+Math.random()*3)),q.happy&&(je=.35),x.forEach($e=>$e.scale.y=je)},V.impulse=O=>{V.squashVel+=O},V}function xc(){let i=new et,e=_e.gold(16751164,.45),t=Ct(new ae(new zt(.2,24,16),e),!0,!1);t.scale.set(.6,.85,1.2),i.add(t);let n=Go([[0,0],[-.2,.16],[-.2,-.16]],.03,e,.02);return n.rotation.y=-Math.PI/2,n.position.z=-.24,i.add(n),[-1,1].forEach(s=>{let r=new ae(new zt(.035,10,8),_e.eye());r.position.set(s*.09,.05,.13),i.add(r)}),i}function Mf(){let i=new et,e=[];for(let o=0;o<10;o++){let a=o%2===0?.46:.22,l=o/10*Math.PI*2+Math.PI/2;e.push([Math.cos(l)*a,Math.sin(l)*a])}let t=new pi;t.moveTo(e[0][0],e[0][1]),e.slice(1).forEach(o=>t.lineTo(o[0],o[1])),t.closePath();let n=new hs(t,{depth:.1,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:6});n.translate(0,0,-.05),i.add(Ct(new ae(n,_e.gold(16762941,.6)),!0,!1)),[-1,1].forEach(o=>{let a=new ae(new zt(.035,10,8),_e.eye());a.position.set(o*.08,.03,.14),i.add(a)});let s=new ae(new ln(.05,.012,6,16,Math.PI),_e.eye());s.position.set(0,-.05,.14),s.rotation.z=Math.PI,i.add(s);let r=new ki(new Pi({map:xs(),color:16765803,transparent:!0,opacity:.55,depthWrite:!1,blending:En}));return r.scale.set(2.2,2.2,1),i.add(r),i}function mr(){let i=new pi;i.moveTo(0,.15),i.bezierCurveTo(0,.25,-.3,.25,-.3,0),i.bezierCurveTo(-.3,-.2,0,-.3,0,-.4),i.bezierCurveTo(0,-.3,.3,-.2,.3,0),i.bezierCurveTo(.3,.25,0,.25,0,.15);let e=new hs(i,{depth:.1,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:8,curveSegments:24});return e.translate(0,.1,-.05),Ct(new ae(e,_e.glossy(16735370,16723311,.35)),!0,!1)}function Sf(){let i=new et,e=Ct(new ae(new Jt(.32,.42,.14,32),_e.woodDark()));e.position.y=.07,i.add(e);let t=new pt({color:14201450,metalness:1,roughness:.28}),n=Ct(new ae(new Jt(.035,.035,1.35,12),t));n.position.y=.8,i.add(n);let s=_e.linen(16773328).clone();s.side=sn,s.emissive=new re(0);let r=Ct(new ae(new Jt(.28,.48,.55,32,1,!0),s));r.position.y=1.62,i.add(r);let o=new pt({color:12303291,emissive:0,roughness:.3}),a=new ae(new zt(.11,16,12),o);a.position.y=1.45,i.add(a);let l=new er(16761975,0,7,1.6);return l.position.y=1.4,i.add(l),i.userData.activate=()=>{s.emissive.setHex(16752704),s.emissiveIntensity=.9,o.emissive.setHex(16773312),o.emissiveIntensity=6,l.intensity=6},i}function Pv(i,e,t,n){let s=new Vi(i,e);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=_f(s);let r=s.attributes.position,o=new P;for(let a=0;a<r.count;a++){o.fromBufferAttribute(r,a);let l=o.clone().normalize(),c=Math.atan2(l.z,l.x)/(Math.PI*2)+.5,h=Math.acos(l.y)/Math.PI,d=Tn(c*16,h*8,16,n)*.7+Tn(c*48,h*24,48,n+1)*.3;o.addScaledVector(l,(d-.5)*t*2),r.setXYZ(a,o.x,o.y,o.z)}return s.computeVertexNormals(),s}function bf(){let i=new et,e=new et;i.add(e);let t=_e.plush(13222872,"bunnyFluff"),n=Ct(new ae(Pv(.45,5,.06,7),t));n.position.y=.45,n.scale.set(1,.92,1),e.add(n),[-1,1].forEach(r=>{let o=Ct(new ae(new fi(.085,.36,6,12),t));o.position.set(r*.17,.98,-.02),o.rotation.z=-r*.3,e.add(o);let a=new ae(new fi(.045,.26,4,10),_e.plush(16757702,"earPink"));a.position.set(0,0,.05),o.add(a);let l=new ae(new zt(.065,16,12),_e.eye());l.position.set(r*.16,.52,.39),e.add(l);let c=new ae(new Qn(.07,20),new bn({color:16748459,transparent:!0,opacity:.6,depthWrite:!1}));c.position.set(r*.26,.4,.37),c.lookAt(r*.7,.4,1.4),e.add(c)});let s=new ae(new zt(.045,12,8),_e.glossy(16744351));return s.position.set(0,.42,.44),e.add(s),i.userData.inner=e,i}function Ef(){let i=new et,e=new et;i.add(e);let t=Ct(new ae(new Jt(.7,.72,.28,48),_e.glossy(2896192)));t.position.y=.2,e.add(t);let n=Ct(new ae(new Jt(.55,.6,.06,48),new xt({color:9344680,metalness:.6,roughness:.35,clearcoat:1})));n.position.y=.36,e.add(n);let s=new ae(new ln(.71,.05,10,48,Math.PI),_e.matte(5593963,.5));s.rotation.set(Math.PI/2,0,0),s.position.y=.16,e.add(s);let r=[];[-1,1].forEach(a=>{let l=new ae(new fi(.04,.06,4,8),_e.emissive(5830143,4));l.rotation.z=Math.PI/2,l.position.set(a*.16,.35,.52),e.add(l),r.push(l)});let o=new et;for(let a=0;a<3;a++){let l=new ae(new nn(.4,.02,.04),_e.matte(16744355));l.rotation.y=a/3*Math.PI,o.add(l)}return o.position.set(.45,.06,.4),e.add(o),i.userData.inner=e,i.userData.brush=o,i}function Tf(){let i=new et,e=new zt(1,48,32),t=e.attributes.position;for(let l=0;l<t.count;l++){let c=t.getX(l),h=t.getY(l),d=t.getZ(l),u=1+.25*(Math.abs(c)*Math.abs(d));t.setXYZ(l,c*u*1.6,h*.42,d*u*1.25)}e.computeVertexNormals();let n=_e.quilt(16769258).clone();n.map=n.map.clone(),n.map.repeat.set(2,2),n.normalMap=n.normalMap.clone(),n.normalMap.repeat.set(2,2);let s=Ct(new ae(e,n));s.position.y=.42,i.add(s);let r=mr();r.material=_e.glossy(16735370,16726650,.9),r.position.y=2.1,r.scale.setScalar(1.5),i.add(r),i.userData.heart=r;let o=new er(16748472,8,9,1.6);o.position.y=2,i.add(o);let a=new ki(new Pi({map:xs(),color:16752580,transparent:!0,opacity:.5,depthWrite:!1,blending:En}));return a.scale.set(4,4,1),a.position.y=2.1,i.add(a),i}function wf(i){let e=new et,t=_e.woodLight(),n=Ct(new ae(new Jt(.06,.07,1.4,12),t));n.position.y=.7,e.add(n);let s=Ct(new ae(new nn(2.3,1.05,.1),t));s.position.y=1.65,e.add(s);let r=Vo(i.split(`
`),{w:768,h:352,font:'800 64px Nunito, "Segoe UI", sans-serif',color:"#4a2f1c"}),o=new ae(new Mn(2.15,.98),new pt({map:r,transparent:!0,roughness:.9}));return o.position.set(0,1.65,.052),e.add(o),e}function Af(){let i=new et,e=Ct(new ae(new nn(1,1,1,1,1,1),_e.cardboard()));e.position.y=.5,i.add(e);let t=Vo(["\u{1F988}"],{w:128,h:128,font:"88px sans-serif",color:"#3a2a1a"}),n=new ae(new Mn(.35,.35),new pt({map:t,transparent:!0,opacity:.75,roughness:1}));return n.position.set(.25,.3,.502),i.add(n),i}function Rf(i,e){let t=new et,n=[14885931,16764160,697824,4174671],s=_e.glossy(n[Math.floor((i*7+e*13)%n.length)]),r=Ct(new ae(new nn(i,.38,e),s));r.position.y=.19,t.add(r);let o=Math.max(1,Math.round(i/.45)),a=Math.max(1,Math.round(e/.45)),l=new Jt(.12,.12,.12,20);for(let c=0;c<o;c++)for(let h=0;h<a;h++){let d=Ct(new ae(l,s));d.position.set(-i/2+(c+.5)*(i/o),.44,-e/2+(h+.5)*(e/a)),t.add(d)}return t}function Cf(){let i=new et,e=Ct(new ae(new Jt(.5,.38,.7,32),_e.ceramic(15304554)));e.position.y=.35,i.add(e);let t=new ae(new Qn(.46,24),_e.matte(3877408,1));t.rotation.x=-Math.PI/2,t.position.y=.66,i.add(t);let n=new xt({color:5218138,roughness:.45,sheen:.4,sheenColor:12582863,side:sn}),s=new pi;s.moveTo(0,0),s.quadraticCurveTo(.22,.35,0,.8),s.quadraticCurveTo(-.22,.35,0,0);let r=new ro(s,12);for(let o=0;o<11;o++){let a=Ct(new ae(r,n)),l=o/11*Math.PI*2;a.position.set(Math.cos(l)*.1,.65,Math.sin(l)*.1),a.rotation.set(0,-l+Math.PI/2,0),a.rotateX(-.35-o%3*.2),a.scale.setScalar(.9+o%4*.15),i.add(a)}return i}function Pf(i){let e=new et,t=_e.ceramic(i),n=Ct(new ae(new Jt(.5,.45,1,40,1,!0),t));n.material=t.clone(),n.material.side=sn,n.position.y=.5,e.add(n);let s=new ae(new Qn(.45,32),t);s.rotation.x=-Math.PI/2,s.position.y=.02,e.add(s);let r=new ae(new Qn(.47,32),new xt({color:3809040,roughness:.05,clearcoat:1}));r.rotation.x=-Math.PI/2,r.position.y=.85,e.add(r);let o=Ct(new ae(new ln(.24,.065,16,32),t));return o.position.set(.55,.5,0),e.add(o),e}function If(i,e){let t=new et,n=Ct(new ae(new nn(1,1,1),_e.painted(i)));if(n.position.y=.5,t.add(n),e){let s=Vo([e],{w:256,h:256,font:"900 190px Nunito, sans-serif",color:"#ffffff"}),r=new xt({map:s,transparent:!0,clearcoat:1,roughness:.3});[[0,.501,0],[Math.PI/2,0,.501],[-Math.PI/2,0,-.501],[Math.PI,-.501,0]].forEach(([o,a,l],c)=>{let h=new ae(new Mn(.72,.72),r);c===0?h.position.set(0,.5,.501):c===1?(h.position.set(.501,.5,0),h.rotation.y=Math.PI/2):c===2?(h.position.set(-.501,.5,0),h.rotation.y=-Math.PI/2):(h.position.set(0,.5,-.501),h.rotation.y=Math.PI),t.add(h)})}return t}function nu(i=Math.random()){let e=new et,t=_e.cloud(),n=6+Math.floor(i*4);for(let s=0;s<n;s++){let r=.8+i*997*(s+1)%1*.9,o=new ae(new Vi(r,4),t);o.position.set((s-n/2)*.9,i*31*(s+3)%1*.6-Math.abs(s-n/2)*.12,(i*71*(s+7)%1-.5)*1.2),o.castShadow=!0,e.add(o)}return e}function Df(i){let e=new et,t=new xt({color:i,roughness:.6,sheen:.6,sheenColor:16777215,emissive:i,emissiveIntensity:.25}),n=_e.emissive(i,2.2),s=1,r=()=>(s=s*16807%2147483647)/2147483647;function o(a,l,c,h){let d=Ct(new ae(new fi(c,l,6,12),t));d.position.y=l/2,a.add(d);let u=new et;if(u.position.y=l,a.add(u),h===0){let g=new ae(new zt(c*1.25,12,10),n);u.add(g);return}let f=2+(r()>.6?1:0);for(let g=0;g<f;g++){let _=new et;_.rotation.set((r()-.5)*1.1,r()*Math.PI*2,(r()-.5)*1.1),u.add(_),o(_,l*.72,c*.75,h-1)}}return o(e,.9,.13,3),e}function Lf(){let i=new et,e=[16744355,7324639,16765286],t=new xt({color:e[Math.floor(Math.random()*3)],roughness:.35,clearcoat:1,clearcoatRoughness:.1,sheen:.3}),n=Ct(new ae(new zt(1.1,40,28),t),!0,!1);n.scale.set(1,1.15,1),n.position.y=4.4,i.add(n);let s=_e.matte(9071178,1);return[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([r,o])=>{let a=new P(r*1.2,.4,o*1.2),l=new P(r*.4,3.4,o*.4),c=new ae(new Jt(.015,.015,a.distanceTo(l),4),s);c.position.copy(a).add(l).multiplyScalar(.5),c.lookAt(l),c.rotateX(Math.PI/2),i.add(c)}),i}var Wo=new P;function Hn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Wo.copy(e),Wo[n]=0,Wo.normalize();let c=.5*o/(o+a),h=1-Wo.angleTo(i)/l;return Math.sign(Wo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var _c=class i extends nn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new P,p=.5/o;for(let m=0,x=0;m<d.length;m+=3,x+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),f[x+0]=Hn(_,c,"z","y",r,n),f[x+1]=1-Hn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[x+0]=1-Hn(_,c,"z","y",r,n),f[x+1]=1-Hn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[x+0]=1-Hn(_,c,"x","z",r,e),f[x+1]=Hn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[x+0]=1-Hn(_,c,"x","z",r,e),f[x+1]=1-Hn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[x+0]=1-Hn(_,c,"x","y",r,e),f[x+1]=1-Hn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[x+0]=Hn(_,c,"x","y",r,e),f[x+1]=1-Hn(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var wn=(i,e=!0,t=!0)=>(i.castShadow=e,i.receiveShadow=t,i),Of=(i,e,t,n=.12,s=3)=>new _c(i,e,t,s,Math.min(n,i/2-.01,e/2-.01,t/2-.01)),ht=(i,e=0)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},Iv="varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }",Dv=`
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
}`;function Bf(i){let e=l=>new re(l),t=e(i.sky[0]),n=e(i.sky[1]),s=n.clone().lerp(new re(i.floor.color),.5),r=i.night?new P(-.5,.45,-.6):new P(.45,.55,-.7),o=new gt({vertexShader:Iv,fragmentShader:Dv,side:cn,depthWrite:!1,uniforms:{top:{value:t},horizon:{value:n},bottom:{value:s},sunDir:{value:r.clone().normalize()},sunColor:{value:i.night?new re(10467583):new re(16773328)},night:{value:i.night?1:0},time:{value:0}}}),a=new ae(new zt(500,48,24),o);return a.frustumCulled=!1,a.renderOrder=-10,{mesh:a,sunDir:r.normalize(),top:t,horizon:n}}function zf(i,e,t){let n=new os,s=e.mesh.clone();s.material=e.mesh.material.clone(),s.material.uniforms=hn.clone(e.mesh.material.uniforms),s.scale.setScalar(.1),n.add(s);let r=(l,c,h,d)=>{let u=new ae(new Mn(d,d),new bn({color:new re(l).multiplyScalar(c),side:sn}));u.position.copy(h),u.lookAt(0,0,0),n.add(u)};r(t.night?9414911:16774368,t.night?1.5:2.5,e.sunDir.clone().multiplyScalar(30),10),r(t.floor.color,.6,new P(0,-30,0),60);let o=new ar(i),a=o.fromScene(n,.03);return o.dispose(),a.texture}function Hf(i){let e=new et,t=i.floor,n=new Mn(900,900,1,1);n.rotateX(-Math.PI/2);let s=[];if(t.kind==="goo"||t.kind==="sea"){let r=Lt.water(),o=r.normalMap.clone(),a=r.normalMap.clone();o.repeat.set(60,60),a.repeat.set(90,90),o.needsUpdate=a.needsUpdate=!0;let l=t.kind==="goo",c=new xt({color:t.color,roughness:l?.5:.12,metalness:0,clearcoat:l?.25:1,clearcoatRoughness:l?.55:.08,specularIntensity:l?.35:.6,normalMap:o,clearcoatNormalMap:a,normalScale:new j(l?.9:.4,l?.9:.4),emissive:t.color,emissiveIntensity:l?.5:.25}),h=new ae(n,c);if(h.receiveShadow=!0,h.position.y=t.y,e.add(h),s.push(d=>{o.offset.set(d*.004,d*.006),a.offset.set(-d*.005,d*.003),c.emissiveIntensity=(l?.5:.22)+Math.sin(d*1.3)*.06}),l){let d=new xt({color:t.color,roughness:.2,clearcoat:.6,emissive:t.color,emissiveIntensity:.9}),u=[];for(let f=0;f<26;f++){let g=new ae(new zt(1,20,14),d);g.userData={x:(ht(f,1)-.5)*50,z:10-ht(f,2)*110,p:ht(f,3)*4,s:.3+ht(f,4)*.7},e.add(g),u.push(g)}s.push(f=>u.forEach(g=>{let _=g.userData,p=(f*.5+_.p)%4/4,m=Math.sin(p*Math.PI)*_.s;g.scale.set(m,m*.6,m),g.position.set(_.x,t.y+m*.2,_.z)}))}}else if(t.kind==="clouds"){let r=new ae(n,new pt({color:16777215,roughness:1,emissive:16767456,emissiveIntensity:.25}));r.position.y=t.y-1.5,r.receiveShadow=!0,e.add(r);let o=new Vi(1,3),a=900,l=new Ys(o,_e.cloud(),a),c=new lt,h=new Cn,d=new P,u=new P;for(let f=0;f<a;f++){let g=2+ht(f,9)*5;d.set((ht(f,1)-.5)*160,t.y-1+ht(f,3)*1.5,30-ht(f,2)*170),u.set(g,g*.55,g),c.compose(d,h,u),l.setMatrixAt(f,c)}l.receiveShadow=!0,e.add(l),s.push(f=>{l.position.x=Math.sin(f*.05)*3})}return{group:e,update:r=>s.forEach(o=>o(r))}}var Nf=[14242639,6000598,15773006,6076508,10185686,15040424,4175784,15979371],Ff=[16752451,7324639,10475627,16744355,16765286,10980346];function Ut(i,e,t,n,s,r=0,o=0,a=0,l=.08,c=.5){let h=mc(Of(e,t,n,l),c),d=wn(new ae(h,s));return d.position.set(r,o,a),i.add(d),d}function kf(i,e,t){let n=new et,{w:s,d:r}=i,o=e.floor.y,a=!i.move,l=Math.max(1,i.y-o+.5),c=i.h||1,h=ht(i.x*3.1+i.z*1.7,i.y);switch(i.style){case"rug":{Ut(n,s+.3,.16,r+.3,_e.knit(16164288),0,-.08,0,.07,.6);let d=a?l:1.2;Ut(n,s,d,r,_e.woodBirch(),0,-.16-d/2,0,.12,.35),c=d+.16;break}case"books":{let d=a?l:1.2,u=0,f=0;for(;u<d;){let g=.32+ht(h*10+f)*.25,_=Nf[Math.floor(ht(h*20+f)*Nf.length)],p=(ht(h*30+f)-.5)*.3,m=(ht(h*40+f)-.5)*.3,x=s*(.98+ht(f,h)*.06),E=r*(.98+ht(h,f)*.06),v=new et;Ut(v,x,g,E,_e.linen(_),0,0,0,.05,.7),Ut(v,x-.12,g*.78,E+.02-.12,_e.linen(16643036),.07,0,0,.02,3),v.position.set(f===0?0:p,-u-g/2,f===0?0:m),v.rotation.y=f===0?0:(ht(h,f*3)-.5)*.12,n.add(v),u+=g,f++}c=d;break}case"block":{let d=a?l:1.5,u=Math.min(s,r),f=0,g=0;for(;f<d;){let _=Ff[Math.floor(ht(h*7+g)*Ff.length)],p=Math.min(u,2.2);Ut(n,s,p,r,_e.painted(_),0,-f-p/2,0,.14,.35),f+=p,g++}c=d;break}case"wood":{if(Ut(n,s,.35,r,_e.woodLight(),0,-.175,0,.06,.4),i.move)[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([d,u])=>{let f=wn(new ae(new Jt(.32,.32,.22,28),_e.glossy(2830138)));f.rotation.z=Math.PI/2,f.position.set(d*(s/2-.1),-.45,u*(r/2-.45)),n.add(f)});else{let d=l;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([u,f])=>{Ut(n,.25,d,.25,_e.woodLight(),u*(s/2-.2),-.35-d/2,f*(r/2-.3),.05,.5)})}c=.35;break}case"bed":{Ut(n,s,.5,r,_e.quilt(12573183),0,-.25,0,.22,.35),Ut(n,s+.1,.6,r+.1,_e.quilt(16777215),0,-.75,0,.2,.35),Ut(n,s+.5,.5,r+.5,_e.woodBirch(),0,-1.3,0,.1,.4);let d=l-1.5;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([u,f])=>Ut(n,.5,d,.5,_e.woodBirch(),u*(s/2),-1.55-d/2,f*(r/2),.08,.5)),Ut(n,s+.5,4.2,.5,_e.woodBirch(),0,.8,-r/2-.25,.25,.3),c=1.55;break}case"cushion":{let d=new zt(1,40,24),u=d.attributes.position;for(let g=0;g<u.count;g++){let _=u.getX(g),p=u.getY(g),m=u.getZ(g),x=1+.35*Math.abs(_*m);u.setXYZ(g,_*x*s*.55,p*.75,m*x*r*.55)}d.computeVertexNormals();let f=wn(new ae(d,_e.quilt(16757702)));f.position.y=-.75,n.add(f),c=1.5;break}case"counter":{Ut(n,s+.3,.35,r+.3,_e.marble(),0,-.175,0,.06,.25);let d=a?l:1.5;Ut(n,s,d,r,_e.woodBirch(),0,-.35-d/2,0,.08,.35);let u=new pt({color:14201450,metalness:1,roughness:.3});for(let f=0;f<Math.min(4,Math.floor(d/1.5));f++)[1,-1].forEach(g=>{let _=wn(new ae(new fi(.05,.6,4,8),u));_.rotation.z=Math.PI/2,_.position.set(0,-.9-f*1.6,g*(r/2+.06)),n.add(_)});c=.35+d;break}case"board":{if(Ut(n,s,.28,r,_e.woodBoard(),0,-.14,0,.12,.35),a){let d=l-.28,u=wn(new ae(new Jt(Math.min(s,r)*.38,Math.min(s,r)*.38,d,40),_e.ceramic(15266296)));u.position.y=-.28-d/2,n.add(u)}else{let d=new ae(new ln(.18,.05,8,20),_e.woodDark());d.rotation.x=Math.PI/2,d.position.set(0,0,-r/2+.3),n.add(d)}c=.28;break}case"mug":{let d=Math.max(s,r)*.58,u=a?l:2.5,f=[7324639,16752451,16757702,10980346,10475627],g=_e.ceramic(f[Math.floor(h*f.length)]),_=wn(new ae(new Jt(d,d*.92,u,48),g));_.position.y=-u/2,n.add(_);let p=wn(new ae(new ln(d-.06,.07,12,48),g));p.rotation.x=Math.PI/2,n.add(p);let m=new ae(new Qn(d-.08,40),new xt({color:15323046,roughness:.6,sheen:.6,sheenColor:16777215}));m.rotation.x=-Math.PI/2,m.position.y=-.02,m.receiveShadow=!0,n.add(m);let x=mr();x.material=new pt({color:16774890,roughness:.7}),x.scale.set(d*.9,d*.9,.05),x.rotation.x=-Math.PI/2,x.position.y=0,x.castShadow=!1,n.add(x);let E=wn(new ae(new ln(d*.45,.14,16,32),g));E.position.set(d+.1,-Math.min(1.5,u*.4),0),n.add(E),c=u;break}case"sponge":{Ut(n,s,.3,r,_e.scrubber(),0,-.15,0,.08,.6),Ut(n,s,.9,r,_e.sponge(),0,-.75,0,.18,.5),n.userData.squish=!0,c=1.2;break}case"cookie":{let d=Math.min(s,r)*.62,u=new Jt(d,d*.97,.45,48,2),f=u.attributes.position;for(let _=0;_<f.count;_++){let p=f.getX(_),m=f.getZ(_),x=Math.atan2(m,p),E=1+Math.sin(x*7+h*10)*.025+Math.sin(x*13)*.015;f.setX(_,p*E),f.setZ(_,m*E)}u.computeVertexNormals(),mc(u,.6);let g=wn(new ae(u,_e.cookie()));g.position.y=-.225,n.add(g),c=.45;break}case"shelf":{Ut(n,s,.4,r,_e.woodBirch(),0,-.2,0,.05,.35);let d=new pt({color:15263982,metalness:1,roughness:.25});[-1,1].forEach(u=>{let f=wn(new ae(new nn(.12,1.4,.12),d));f.position.set(u*(s/2-.6),-1.1,-r/2+.3),n.add(f);let g=wn(new ae(new nn(.12,.12,r-.4),d));g.position.set(u*(s/2-.6),-.46,0),n.add(g)}),c=.4;break}case"roof":{Ut(n,s+.5,.45,r+.5,_e.roof(),0,-.225,0,.08,.35);let d=a?l:4,u=[16773598,16769254,14872831,16774855][Math.floor(h*4)];Ut(n,s,d,r,_e.stucco(u),0,-.45-d/2,0,.1,.3);let f=_e.emissive(16757862,1.4),g=_e.painted(16777215),_=Math.min(3,Math.floor(d/2.6));for(let p=0;p<_;p++)for(let m of[1,-1]){let x=Math.max(1,Math.floor(s/2.4));for(let E=0;E<x;E++){let v=-s/2+(E+.5)*(s/x),T=ht(h*50+p,E+m)>.35,S=new ae(new nn(1,1.25,.1),g);S.position.set(v,-1.8-p*2.6,m*(r/2+.03)),n.add(S);let A=new ae(new Mn(.8,1.05),T?f:_e.glossy(3162202));A.position.set(v,-1.8-p*2.6,m*(r/2+.085)),m<0&&(A.rotation.y=Math.PI),n.add(A)}}c=.45+d;break}case"chimney":{let d=a?l:4;Ut(n,s+.3,.35,r+.3,_e.brick(),0,-.175,0,.05,.6),Ut(n,s,d,r,_e.brick(),0,-.35-d/2,0,.05,.6),c=d+.35;break}case"cloud":{let d=nu(h);d.scale.set(s/4.5,.9,r/2.2),d.position.y=-.7,n.add(d),c=1;break}case"balloon":{Ut(n,s,.9,r,_e.wicker(),0,-.45,0,.15,.6);let d=Lf();d.scale.setScalar(.9),d.position.y=.2,d.children.forEach(u=>{u.geometry&&u.geometry.type==="SphereGeometry"&&(u.position.y=6.2)}),n.add(d),c=.9;break}case"island":{Ut(n,s,.6,r,_e.grass(),0,-.3,0,.25,.3);let d=Math.max(s,r)*.9,u=new ls(Math.max(s,r)*.6,d,9,6);u.rotateX(Math.PI);let f=u.attributes.position;for(let _=0;_<f.count;_++){let p=f.getX(_),m=f.getY(_),x=f.getZ(_),E=ht(Math.round(p*3),Math.round(x*3+m*5));f.setXYZ(_,p*(s/Math.max(s,r))*(.9+E*.25),m,x*(r/Math.max(s,r))*(.9+E*.25))}u.computeVertexNormals(),mc(u,.25);let g=wn(new ae(u,_e.rock()));g.position.y=-.55-d/2,n.add(g),Lv(n,s-.4,r-.4,t,h,e.night),c=.6;break}case"crystal":{let d=wn(new ae(Of(s,.7,r,.18,4),_e.crystal(e.night?10479871:12120319)),!0,!0);d.position.y=-.35,n.add(d);for(let u=0;u<3;u++){let f=wn(new ae(new so(.5+u*.15,0),_e.crystal(12888319)),!0,!1);f.scale.set(.6,1.6,.6),f.position.set((ht(h,u)-.5)*s*.6,-1.4-u*.6,(ht(u,h)-.5)*r*.6),f.rotation.y=u,n.add(f)}c=.7;break}case"bubble":{let d=new ae(new zt(1,48,32),_e.bubble());d.scale.set(s*.62,.55,r*.62),d.position.y=-.4,n.add(d);let u=new ae(new ln(s*.5,.06,10,48),_e.emissive(10479871,1.2));u.rotation.x=Math.PI/2,u.position.y=-.05,n.add(u),c=.8;break}default:Ut(n,s,c,r,_e.painted(14540253),0,-c/2,0)}return{group:n,collideH:c}}var vc=null,Vf={time:{value:0}};function Gf(i){Vf.time.value=i}function Lv(i,e,t,n,s,r){let o={ultra:70,high:45,medium:18,low:0}[n]||0,a=Math.floor(e*t*o);if(!a)return;vc||(vc=new pt({vertexColors:!0,side:sn,roughness:.7}),vc.onBeforeCompile=S=>{S.uniforms.time=Vf.time,S.vertexShader=`uniform float time;
`+S.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
        float bend = position.y * position.y;
        transformed.x += sin(time * 1.8 + wp.x * 0.7 + wp.z * 0.5) * 0.12 * bend;
        transformed.z += cos(time * 1.4 + wp.z * 0.8) * 0.08 * bend;`)});let l=new Mn(.07,.42,1,4),c=l.attributes.position,h=new Float32Array(c.count*3),d=new re(r?2054730:3107626),u=new re(r?8380615:11921514),f=new re;for(let S=0;S<c.count;S++){let A=c.getY(S)+.21;c.setX(S,c.getX(S)*(1-A/.42)),c.setY(S,A),f.copy(d).lerp(u,A/.42),h[S*3]=f.r,h[S*3+1]=f.g,h[S*3+2]=f.b}l.setAttribute("color",new At(h,3));let g=new Ys(l,vc,a),_=new lt,p=new Cn,m=new $n,x=new P,E=new P;for(let S=0;S<a;S++){x.set((ht(S,s)-.5)*e,0,(ht(s,S)-.5)*t),m.set((ht(S,3)-.5)*.4,ht(S,4)*Math.PI,(ht(S,5)-.5)*.4),p.setFromEuler(m);let A=.6+ht(S,6)*.8;E.set(A,A,A),_.compose(x,p,E),g.setMatrixAt(S,_)}g.receiveShadow=!0,i.add(g);let v=new xt({color:r?10479871:16777215,emissive:r?6273279:0,emissiveIntensity:r?1.2:0,roughness:.5,sheen:.5}),T=_e.matte(16765286,.6);for(let S=0;S<Math.floor(e*t*.25);S++){let A=new et;for(let w=0;w<5;w++){let R=new ae(new zt(.07,8,6),v);R.scale.set(1,.4,1.6),R.position.set(Math.cos(w*1.256)*.08,0,Math.sin(w*1.256)*.08),R.rotation.y=-w*1.256,A.add(R)}let y=new ae(new zt(.05,8,6),T);A.add(y),A.position.set((ht(S,s*9)-.5)*e,.22,(ht(s*9,S)-.5)*t),i.add(A)}}var Wf=`attribute float size; attribute vec4 pcolor; varying vec4 vColor;
void main(){ vColor = pcolor; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * (420.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,Xf=`uniform sampler2D map; varying vec4 vColor;
void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vColor.rgb, vColor.a * t.a); if (gl_FragColor.a < 0.003) discard; }`,Xo=class{constructor(e=600,t=!0){this.max=e,this.items=[];let n=new Rt;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),n.setAttribute("position",new At(this.pos,3)),n.setAttribute("pcolor",new At(this.col,4)),n.setAttribute("size",new At(this.size,1)),this.mat=new gt({vertexShader:Wf,fragmentShader:Xf,uniforms:{map:{value:xs()}},transparent:!0,depthWrite:!1,blending:t?En:Zi}),this.points=new Js(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5}emit(e){this.items.length>=this.max&&this.items.shift(),this.items.push(Object.assign({life:1,max:1,size:.3,grow:0,drag:1.5,grav:0,color:new re(1,1,1),alpha:1},e,{max:e.life||1}))}burst(e,t,n={}){for(let s=0;s<t;s++){let r=Math.random()*Math.PI*2,o=Math.random()*2-1,a=(n.speed||4)*(.4+Math.random()*.6),l=Math.sqrt(1-o*o);this.emit(Object.assign({},n,{p:e.clone().add(new P((Math.random()-.5)*(n.spread||.3),(Math.random()-.5)*(n.spread||.3),(Math.random()-.5)*(n.spread||.3))),v:new P(Math.cos(r)*l*a,(n.up?Math.abs(o):o)*a+(n.lift||0),Math.sin(r)*l*a),life:(n.life||.8)*(.6+Math.random()*.4),size:(n.size||.3)*(.6+Math.random()*.8)}))}}update(e){let t=this.items;for(let s=t.length-1;s>=0;s--){let r=t[s];if(r.life-=e,r.life<=0){t.splice(s,1);continue}r.v.multiplyScalar(Math.max(0,1-r.drag*e)),r.v.y-=r.grav*e,r.p.addScaledVector(r.v,e)}for(let s=0;s<this.max;s++){let r=t[s];if(!r){this.size[s]=0;continue}let o=r.life/r.max;this.pos[s*3]=r.p.x,this.pos[s*3+1]=r.p.y,this.pos[s*3+2]=r.p.z,this.col[s*4]=r.color.r,this.col[s*4+1]=r.color.g,this.col[s*4+2]=r.color.b,this.col[s*4+3]=r.alpha*Math.min(1,o*3)*Math.min(1,(1-o)*12+.2),this.size[s]=r.size*(1+r.grow*(1-o))}let n=this.points.geometry;n.attributes.position.needsUpdate=n.attributes.pcolor.needsUpdate=n.attributes.size.needsUpdate=!0}};function qf(i,e){let t={ultra:260,high:180,medium:90,low:40}[e]||60,n=new Rt,s=new Float32Array(t*3),r=new Float32Array(t*4),o=new Float32Array(t),a=[],l=i.night?[new re(10485728),new re(16769930),new re(12034047)]:[new re(16773840),new re(16777215),new re(16766696)];for(let u=0;u<t;u++){a.push([Math.random()*60-30,Math.random()*24-6,Math.random()*60-30,Math.random()*10]);let f=l[u%l.length];r[u*4]=f.r,r[u*4+1]=f.g,r[u*4+2]=f.b,r[u*4+3]=i.night?.9:.45,o[u]=(i.night?.22:.12)*(.5+Math.random())}n.setAttribute("position",new At(s,3)),n.setAttribute("pcolor",new At(r,4)),n.setAttribute("size",new At(o,1));let c=new gt({vertexShader:Wf,fragmentShader:Xf,uniforms:{map:{value:xs()}},transparent:!0,depthWrite:!1,blending:En}),h=new Js(n,c);return h.frustumCulled=!1,{points:h,update:(u,f)=>{for(let g=0;g<t;g++){let _=a[g],p=(E,v)=>v+((E-v)%60+90)%60-30,m=_[0]+Math.sin(u*.3+_[3])*1.5+u*.2,x=_[2]+Math.cos(u*.25+_[3])*1.5;s[g*3]=p(m,f.x),s[g*3+1]=f.y+_[1]+Math.sin(u*.5+_[3]*2)*.8,s[g*3+2]=p(x,f.z),i.night&&(r[g*4+3]=.5+.5*Math.sin(u*2+_[3]*3))}n.attributes.position.needsUpdate=!0,i.night&&(n.attributes.pcolor.needsUpdate=!0)}}}function Yf(i){let e=new et,n={bedroom:[16766624,16757702,16773312],kitchen:[16769162,16762016,16777215],shelf:[14268671,16757728,16773328],rooftops:[16761994,16752563,16773312],dreamsea:[10467583,14264575,8380671],lagoon:[8388576,10467583,16773280]}[i.theme]||[16777215];for(let s=0;s<46;s++){let r=new Pi({map:xf(),color:n[s%n.length],transparent:!0,opacity:.12+ht(s,2)*.16,depthWrite:!1,blending:En,fog:!1}),o=new ki(r),a=ht(s,1)*Math.PI*2,l=110+ht(s,3)*80;o.position.set(Math.cos(a)*l,-10+ht(s,4)*60,Math.sin(a)*l-50);let c=6+ht(s,5)*16;o.scale.set(c,c,1),e.add(o)}return e}function Zf(i){let e;switch(i.type){case"plant":e=Cf();break;case"mug":e=Pf(i.color||7324639);break;case"block":e=If(i.color||16752451,i.letter);break;case"cloud":e=nu(ht(i.x,i.z));break;case"coral":e=Df(i.color||16744355);break;default:e=new et}return e.position.set(i.x,i.y,i.z),e.scale.setScalar(i.s||1),e.rotation.y=i.ry!==void 0?i.ry:ht(i.x,i.z)*Math.PI*2,e}var Oe=(i=0,e=0,t=0)=>new P(i,e,t),kn=.001,iu=(i,e)=>{let t=e-i;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},yc=class{constructor(e,t,n,s,r,o,a){this.R=e,this.input=t,this.L=n,this.index=s,this.ab=r,this.hooks=a,this.savedStars=o.slice(),this.time=0,this.clock=0,this.state="play",this.stats={fish:0,bops:0,falls:0,time:0},this.build()}build(){let e=this.L,t=this.R.quality,n=this.scene=new os;this.camera=new an(55,innerWidth/innerHeight,.1,900),this.sky=Bf(e),n.add(this.sky.mesh),n.fog=new Hr(e.fog,70,(e.fogFar||150)*1.4),n.environment=zf(this.R.r,this.sky,e),n.environmentIntensity=e.night?.75:.6;let s=new lo(this.sky.top,new re(e.floor.color),e.night?.55:.35);n.add(s);let r=this.sun=new tr(e.night?11190271:16773596,e.night?2.6:3.6);r.castShadow=!0;let o=this.R.shadowSize();r.shadow.mapSize.set(o,o);let a=r.shadow.camera;a.left=-24,a.right=24,a.top=24,a.bottom=-24,a.near=1,a.far=140,r.shadow.bias=-4e-4,r.shadow.normalBias=.03,r.shadow.radius=4,n.add(r,r.target);let l=new tr(e.night?10457087:16765152,e.night?.9:.8);l.position.set(-20,15,30),n.add(l),this.floor=Hf(e),n.add(this.floor.group),this.ambient=qf(e,t),n.add(this.ambient.points),n.add(Yf(e)),this.sparks=new Xo(700,!0),this.puffs=new Xo(400,!1),n.add(this.sparks.points,this.puffs.points),this.solids=[],this.platforms=e.platforms.map(h=>{let d=kf(h,e,t);d.group.position.set(h.x,h.y,h.z),n.add(d.group);let u={min:Oe(),max:Oe(),active:!0,kind:"platform",delta:Oe(),plat:null},f={p:h,vis:d,solid:u,base:Oe(h.x,h.y,h.z),h:d.collideH,cur:Oe(h.x,h.y,h.z),crumble:0,crumbleT:0,squish:0};return u.plat=f,this.setSolid(f),this.solids.push(u),f}),this.crates=e.crates.map(h=>{let d=Af();d.position.set(h.x,h.y,h.z),d.rotation.y=(h.x*7+h.z)%.3,n.add(d);let u={min:Oe(h.x-.5,h.y,h.z-.5),max:Oe(h.x+.5,h.y+1,h.z+.5),active:!0,kind:"crate",delta:Oe()},f={c:h,mesh:d,solid:u,broken:!1};return u.crate=f,this.solids.push(u),f}),this.fish=e.fish.map((h,d)=>{let u=xc();return u.position.set(h[0],h[1],h[2]),n.add(u),{m:u,pos:Oe(...h),taken:!1,ph:d*.37,out:0}});let c=e.stars.map(h=>({pos:Oe(...h)}));this.crates.forEach(h=>{h.c.item==="star"&&(h.starIndex=c.length,c.push({pos:Oe(h.c.x,h.c.y+1,h.c.z),hidden:!0}))}),this.stars=c.map((h,d)=>{let u=Mf();return u.position.copy(h.pos),this.savedStars[d]&&u.traverse(f=>{f.material&&(f.material=f.material.clone(),f.material.transparent=!0,f.material.opacity=.4)}),u.visible=!h.hidden,n.add(u),{m:u,pos:h.pos.clone(),taken:!1,hidden:!!h.hidden,i:d,out:0}}),this.runStars=this.stars.map(()=>!1),this.heartsPick=e.hearts.map(h=>{let d=mr();return d.position.set(...h),n.add(d),{m:d,pos:Oe(...h),taken:!1}}),this.enemies=(e.enemies||[]).map((h,d)=>{let u=h.type==="roomba"?Ef():bf();return u.position.set(h.x,h.y,h.z),n.add(u),{e:h,m:u,type:h.type,start:Oe(h.x,h.y,h.z),pos:Oe(h.x,h.y,h.z),t:d*1.3,dir:1,alive:!0,deadT:0,stun:0,chase:!1,u:0}}),this.hazards=e.hazards.map(h=>{let d=Rf(h.w,h.d);return d.position.set(h.x,h.y,h.z),n.add(d),{h,min:Oe(h.x-h.w/2,h.y,h.z-h.d/2),max:Oe(h.x+h.w/2,h.y+.55,h.z+h.d/2)}}),this.checkpoints=e.checkpoints.map(h=>{let d=Sf();return d.position.set(...h),n.add(d),{m:d,pos:Oe(...h),on:!1}}),this.signs=e.signs.map(h=>{let d=wf(h.text);return d.position.set(h.x,h.y,h.z),d.rotation.y=h.ry||0,n.add(d),{m:d,pos:Oe(h.x,h.y,h.z),text:h.text}}),this.updrafts=e.updrafts.map(h=>{let d=new et,u=new bn({color:12580095,transparent:!0,opacity:.35,blending:En,depthWrite:!1}),f=[];for(let _=0;_<6;_++){let p=new ae(new ln(h.r,.04,8,48),u);p.rotation.x=Math.PI/2,d.add(p),f.push(p)}let g=new ae(new ln(h.r*.85,.16,16,48),new xt({color:10479871,roughness:.15,clearcoat:1,emissive:4176127,emissiveIntensity:1.6}));return g.rotation.x=Math.PI/2,g.position.y=h.y0-.2,d.add(g),d.position.set(h.x,0,h.z),n.add(d),{u:h,g:d,rings:f}}),(e.decor||[]).forEach(h=>n.add(Zf(h))),this.goal=Tf(),this.goal.position.set(...e.goal),n.add(this.goal),this.rig=yf(),n.add(this.rig.root),this.p={pos:Oe(...e.spawn),vel:Oe(),yaw:Math.PI,grounded:!1,ground:null,coyote:0,buffer:0,canDouble:!1,dashT:0,dashCD:0,dashUsed:!1,dashDir:Oe(),pound:0,poundHang:0,invuln:0,hearts:Ie.maxHearts,jumpHeld:!1,glide:!1,lastSafe:Oe(...e.spawn),inUpdraft:!1},this.respawn=Oe(...e.spawn),this.cam={yaw:0,pitch:.38,dist:8.5,target:Oe(...e.spawn),idle:0,fov:55},this.combo=0,this.comboT=0,this.R.build(n,this.camera,{bloom:e.night?.6:.35,threshold:e.night?.8:1.05,exposure:e.night?1:.9,warmth:e.night?-.01:.03}),this.updateCamera(1,!0)}setSolid(e){let{p:t,cur:n,h:s}=e;e.solid.min.set(n.x-t.w/2,n.y-s,n.z-t.d/2),e.solid.max.set(n.x+t.w/2,n.y,n.z+t.d/2)}dispose(){this.scene.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.scene.environment&&this.scene.environment.dispose()}overlap(e,t,n,s){let r=Ie.radius;return e+r>s.min.x+kn&&e-r<s.max.x-kn&&t+Ie.height>s.min.y+kn&&t<s.max.y-kn&&n+r>s.min.z+kn&&n-r<s.max.z-kn}breakCrate(e){if(e.broken)return;e.broken=!0,e.solid.active=!1,Je.crumble(),Je.stomp();let t=Oe(e.c.x,e.c.y+.5,e.c.z);if(this.puffs.burst(t,22,{color:new re(13081192),speed:6,life:.9,size:.35,grav:14,drag:1,alpha:1,up:!0,lift:3}),this.sparks.burst(t,14,{color:new re(16769704),speed:5,life:.6,size:.25}),e.mesh.userData.breakT=.001,e.c.item==="star"){let n=this.stars[e.starIndex];n.hidden=!1,n.m.visible=!0,n.pop=1}else if(e.c.item==="heart"){let n=mr();n.position.copy(t).add(Oe(0,.6,0)),this.scene.add(n),this.heartsPick.push({m:n,pos:n.position.clone(),taken:!1})}else for(let n=0;n<5;n++){let s=n/5*Math.PI*2,r=t.clone().add(Oe(Math.cos(s)*1.1,.4,Math.sin(s)*1.1)),o=xc();o.position.copy(r),this.scene.add(o),this.fish.push({m:o,pos:r,taken:!1,ph:n,out:0,bonus:!0})}}hurt(e){let t=this.p;if(t.invuln>0||this.state!=="play")return;t.hearts--,t.invuln=1.6,Je.hurt();let n=t.pos.clone().sub(e).setY(0);n.lengthSq()<.01&&n.set(0,0,1),n.normalize().multiplyScalar(7),t.vel.set(n.x,8,n.z),t.dashT=0,t.pound=0,t.grounded=!1,this.rig.impulse(-6),this.sparks.burst(t.pos.clone().add(Oe(0,.6,0)),12,{color:new re(16748459),speed:5,life:.6,size:.3}),t.hearts<=0&&this.fall(!0),this.hudDirty=!0}fall(e=!1){this.state==="play"&&(this.state="respawning",this.stats.falls++,e||(Je.fall(),this.puffs.burst(this.p.pos.clone(),26,{color:new re(this.L.floor.color).lerp(new re(16777215),.4),speed:7,life:1,size:.45,grav:16,up:!0,lift:4}),this.p.hearts--),this.hooks.fade(!0),this.respawnT=.55)}finishRespawn(){let e=this.p;e.hearts<=0&&(e.hearts=Ie.maxHearts,this.hooks.toast("Bl\xE5haj needs a cuddle!","Hearts refilled at the last lamp")),e.pos.copy(this.respawn),e.vel.set(0,0,0),e.dashT=0,e.pound=0,e.invuln=1,e.grounded=!1,this.cam.target.copy(e.pos),this.updateCamera(1,!0),this.state="play",this.hudDirty=!0,this.hooks.fade(!1)}update(e){if(this.clock+=e,this.attract){this.time+=e,this.cam.yaw+=e*.12,this.cam.pitch=.22,this.cam.dist=6.5,this.visuals(e),this.input.endFrame();return}if(this.state==="play"||this.state==="respawning"){this.acc=(this.acc||0)+Math.min(e,.1);let t=this.input,n=this.edge=this.edge||{jump:!1,dash:!1,flop:!1};for(n.jump=n.jump||t.jumpPressed(),n.dash=n.dash||t.dashPressed(),n.flop=n.flop||t.flopPressed();this.acc>=Ie.dt;)this.step(Ie.dt),this.acc-=Ie.dt,n.jump=n.dash=n.flop=!1}else this.state==="win"&&(this.winT+=e,this.p.pos.lerp(Oe(this.L.goal[0],this.L.goal[1]+.75,this.L.goal[2]),Math.min(1,e*4)),this.p.yaw+=e*2.5,Math.random()<.5&&this.sparks.emit({p:this.goal.position.clone().add(Oe((Math.random()-.5)*4,3+Math.random()*2,(Math.random()-.5)*4)),v:Oe((Math.random()-.5)*2,-1.5,(Math.random()-.5)*2),life:2,size:.35,color:new re().setHSL(Math.random(),.8,.7),drag:.2}),this.winT>2.4&&!this.winSent&&(this.winSent=!0,this.hooks.complete(this.result())));this.visuals(e),this.input.endFrame()}step(e){let t=this.p,n=this.input,s=this.L;this.time+=e,this.state==="play"&&(this.stats.time+=e),this.state==="respawning"&&(this.respawnT-=e,this.respawnT<=0&&this.finishRespawn());for(let p of this.platforms){let m=p.cur.clone(),x=p.p.move;if(x){let E=Math.sin((this.time/x.period+(x.phase||0))*Math.PI*2);p.cur.set(p.base.x+(x.dx||0)*E,p.base.y+(x.dy||0)*E,p.base.z+(x.dz||0)*E)}p.p.type==="crumble"&&(p.crumble===1?(p.crumbleT-=e,p.crumbleT<=0&&(p.crumble=2,p.crumbleT=3,p.solid.active=!1,Je.crumble(),this.puffs.burst(p.cur.clone(),16,{color:new re(13144160),speed:4,life:.8,size:.3,grav:12}))):p.crumble===2&&(p.crumbleT-=e,p.crumbleT<=0&&(p.crumble=0,p.solid.active=!0,p.respawnFx=1))),p.solid.delta.subVectors(p.cur,m),this.setSolid(p)}if(t.grounded&&t.ground&&t.ground.active&&t.pos.add(t.ground.delta),this.state!=="play")return;let r=n.move(),o=Oe(-Math.sin(this.cam.yaw),0,-Math.cos(this.cam.yaw)),a=Oe(Math.cos(this.cam.yaw),0,-Math.sin(this.cam.yaw)),l=o.multiplyScalar(r.y).add(a.multiplyScalar(r.x)),c=Math.min(1,l.length());if(t.coyote=t.grounded?Ie.coyote:t.coyote-e,t.buffer=this.edge.jump?Ie.jumpBuffer:t.buffer-e,t.dashCD-=e,t.invuln-=e,this.edge.flop&&!t.grounded&&this.ab.flop&&!t.pound&&t.dashT<=0&&(t.pound=1,t.poundHang=Ie.poundHang,t.vel.set(0,0,0),this.rig.spin=Math.PI*2,Je.dash()),this.edge.dash&&this.ab.dash&&t.dashCD<=0&&!t.dashUsed&&!t.pound){let p=c>.2?l.clone().normalize():Oe(Math.sin(t.yaw),0,Math.cos(t.yaw));t.dashDir.copy(p),t.dashT=Ie.dashTime,t.dashCD=Ie.dashCooldown,t.grounded||(t.dashUsed=!0),this.rig.spin=Math.PI*2,Je.dash(),this.cam.fovKick=8}if(t.dashT>0)t.dashT-=e,t.vel.x=t.dashDir.x*Ie.dashSpeed,t.vel.z=t.dashDir.z*Ie.dashSpeed,t.vel.y=0,Math.random()<.7&&this.sparks.emit({p:t.pos.clone().add(Oe(0,.45,0)),v:Oe(0,0,0),life:.35,size:.4,color:new re(12574975),alpha:.7}),t.dashT<=0&&(t.vel.x*=.45,t.vel.z*=.45);else if(t.pound)t.vel.x=0,t.vel.z=0,t.poundHang>0?(t.poundHang-=e,t.vel.y=0):t.vel.y=-Ie.poundSpeed;else{let p=l.clone().setLength(c*Ie.run),m=t.grounded?Ie.groundAccel:Ie.airAccel,x=Oe(t.vel.x,0,t.vel.z),E=p.clone().sub(x),v=m*e;E.length()>v&&E.setLength(v),x.add(E),t.grounded&&c<.05&&x.multiplyScalar(Math.max(0,1-Ie.groundFriction*e)),t.vel.x=x.x,t.vel.z=x.z,t.buffer>0&&t.coyote>0?(t.vel.y=Ie.jump,t.grounded=!1,t.coyote=0,t.buffer=0,t.jumpHeld=!0,t.canDouble=this.ab.doubleJump,Je.jump(),this.rig.impulse(4),this.puffs.burst(t.pos.clone(),6,{color:new re(16777215),speed:2.5,life:.5,size:.35,alpha:.6})):t.buffer>0&&!t.grounded&&t.canDouble&&(t.vel.y=Ie.doubleJump,t.canDouble=!1,t.buffer=0,t.jumpHeld=!0,Je.doubleJump(),this.rig.impulse(5),this.rig.spin=Math.PI*2,this.sparks.burst(t.pos.clone().add(Oe(0,.2,0)),14,{color:new re(13625087),speed:4,life:.5,size:.28})),t.jumpHeld&&!n.jumpHeld()&&(t.vel.y>0&&(t.vel.y*=Ie.jumpCut),t.jumpHeld=!1),t.vel.y<=0&&(t.jumpHeld=!1),t.vel.y-=Ie.gravity*e,t.vel.y<-Ie.maxFall&&(t.vel.y=-Ie.maxFall),t.glide=!1,this.ab.glide&&!t.grounded&&t.vel.y<0&&n.jumpHeld()&&!t.jumpHeld&&(t.vel.y<-Ie.glideFall&&(t.vel.y+=(-Ie.glideFall-t.vel.y)*Math.min(1,e*14)),t.glide=!0)}t.inUpdraft=!1;for(let p of this.updrafts)if(Math.hypot(t.pos.x-p.u.x,t.pos.z-p.u.z)<p.u.r&&t.pos.y>p.u.y0-.5&&t.pos.y<p.u.y1+.5){t.inUpdraft=!0;let x=t.pos.y>p.u.y1-1.5?.35:1;t.vel.y=Math.min(Ie.updraftMax*x+1.5,t.vel.y+Ie.updraft*e),t.canDouble=this.ab.doubleJump,t.dashUsed=!1,t.pound=0}let h=t.grounded,d=-t.vel.y,u=this.solids.filter(p=>p.active);for(let p of["x","z"]){let m=t.pos[p]+t.vel[p]*e,x=t.pos.clone();x[p]=m;for(let E of u){if(!this.overlap(x.x,x.y,x.z,E)||this.overlap(t.pos.x,t.pos.y,t.pos.z,E))continue;if(E.kind==="crate"&&t.dashT>0){this.breakCrate(E.crate);continue}let v=E.max.y-x.y;if(t.grounded&&v>0&&v<=.4&&!u.some(T=>T!==E&&this.overlap(x.x,E.max.y+kn,x.z,T))){x.y=E.max.y+kn;continue}x[p]=t.vel[p]>0?E.min[p]-Ie.radius-kn*2:E.max[p]+Ie.radius+kn*2,t.vel[p]=0,t.dashT>0&&(t.dashT=0,this.rig.impulse(-3))}t.pos.copy(x)}let f=t.pos.y+t.vel.y*e;t.grounded=!1;let g=null;for(let p of u)if(this.overlap(t.pos.x,f,t.pos.z,p)&&!this.overlap(t.pos.x,t.pos.y,t.pos.z,p))if(t.vel.y<=0){if(p.kind==="crate"&&t.pound){this.breakCrate(p.crate);continue}f=p.max.y,g=p}else p.kind==="crate"&&this.breakCrate(p.crate),f=p.min.y-Ie.height-kn,t.vel.y=0;if(t.pos.y=f,g){t.grounded=!0,t.ground=g,t.canDouble=!1,t.dashUsed=!1;let p=g.plat,m=!!t.pound;h||this.onLand(d,g),p&&p.p.type==="bounce"?(t.vel.y=m?Ie.superBounce:n.jumpHeld()?Ie.bounce:Ie.bounce*.85,t.grounded=!1,t.pound=0,t.canDouble=this.ab.doubleJump,t.jumpHeld=!1,p.squish=1,Je.bounce(),m&&Je.star(),this.rig.impulse(m?9:6),this.sparks.burst(t.pos.clone(),m?30:12,{color:new re(m?16769126:16774064),speed:m?9:5,life:.7,size:.3})):(t.vel.y=0,p&&p.p.type==="crumble"&&p.crumble===0&&(p.crumble=1,p.crumbleT=.55),(!p||!p.p.move)&&t.lastSafe.copy(t.pos))}for(let p of u){if(!this.overlap(t.pos.x,t.pos.y,t.pos.z,p))continue;let m=[["x",p.max.x-(t.pos.x-Ie.radius),1],["x",t.pos.x+Ie.radius-p.min.x,-1],["z",p.max.z-(t.pos.z-Ie.radius),1],["z",t.pos.z+Ie.radius-p.min.z,-1],["y",p.max.y-t.pos.y,1],["y",t.pos.y+Ie.height-p.min.y,-1]].sort((T,S)=>T[1]-S[1]),[x,E,v]=m[0];t.pos[x]+=(E+kn*2)*v,x==="y"&&v>0&&(t.grounded=!0,t.ground=p,t.vel.y=Math.max(0,t.vel.y))}Math.hypot(t.vel.x,t.vel.z)>.5&&!t.pound&&(t.yaw+=iu(t.yaw,Math.atan2(t.vel.x,t.vel.z))*Math.min(1,e*14)),this.interact(e),t.pos.y<s.floor.y+.3&&this.fall()}onLand(e,t){let n=this.p;if(this.rig.impulse(-Math.min(8,e*.35)),n.pound){n.pound=0,Je.pound(),this.cam.shake=.35,this.puffs.burst(n.pos.clone().add(Oe(0,.1,0)),26,{color:new re(16777215),speed:8,life:.6,size:.45,alpha:.7,drag:3});for(let s of this.enemies)s.alive&&s.pos.distanceTo(n.pos)<2.6&&this.defeat(s)}else e>6&&(Je.land(),this.puffs.burst(n.pos.clone().add(Oe(0,.05,0)),8,{color:new re(16777215),speed:3,life:.45,size:.35,alpha:.5,drag:4}))}defeat(e){if(!e.alive)return;e.alive=!1,e.deadT=0,this.stats.bops++,Je.stomp(),this.sparks.burst(e.pos.clone().add(Oe(0,.5,0)),20,{color:new re(16777215),speed:6,life:.7,size:.35}),this.puffs.burst(e.pos.clone().add(Oe(0,.5,0)),14,{color:new re(13222872),speed:4,life:.8,size:.5,alpha:.8}),this.hooks.pop(e.type==="roomba"?"Vroom\u2026 zzz":"Bop!");let t=xc(),n=e.pos.clone().add(Oe(0,1.2,0));t.position.copy(n),this.scene.add(t),this.fish.push({m:t,pos:n,taken:!1,ph:0,out:0,bonus:!0})}interact(e){let t=this.p,n=t.pos.clone().add(Oe(0,Ie.height/2,0));this.comboT-=e,this.comboT<=0&&(this.combo=0);for(let o of this.fish)o.taken||o.pos.distanceToSquared(n)<.95&&(o.taken=!0,o.out=.001,this.stats.fish++,this.combo++,this.comboT=.9,Je.collect(this.combo),this.sparks.burst(o.pos,8,{color:new re(16762219),speed:3,life:.45,size:.22}),this.stats.fish%30===0&&t.hearts<Ie.maxHearts&&(t.hearts++,Je.heart(),this.hooks.pop("+1 \u{1F499}")),this.hudDirty=!0);for(let o of this.stars)if(!(o.taken||o.hidden)&&o.pos.distanceToSquared(n)<1.3){o.taken=!0,o.out=.001,this.runStars[o.i]=!0,Je.star(),this.sparks.burst(o.pos,40,{color:new re(16767050),speed:7,life:1,size:.35});let a=this.stars.filter(l=>l.taken||this.savedStars[l.i]).length;this.hooks.star(o.i),this.hooks.toast(this.savedStars[o.i]?"Starfish again!":"Starfish found!",`${a} / ${this.stars.length} in this level`),this.hudDirty=!0}for(let o of this.heartsPick)o.taken||o.pos.distanceToSquared(n)<1.1&&(o.taken=!0,o.m.visible=!1,t.hearts=Math.min(Ie.maxHearts,t.hearts+1),Je.heart(),this.sparks.burst(o.pos,16,{color:new re(16748464),speed:4,life:.6,size:.3}),this.hudDirty=!0);for(let o of this.checkpoints)o.on||Math.hypot(o.pos.x-t.pos.x,o.pos.z-t.pos.z)<1.8&&Math.abs(o.pos.y-t.pos.y)<1.5&&(this.checkpoints.forEach(a=>{a!==o&&a.on&&(a.on="old")}),o.on=!0,o.m.userData.activate(),this.respawn.set(o.pos.x,o.pos.y+.05,o.pos.z+.01),this.respawn.x+=o.pos.x>0?-1.2:1.2,Je.checkpoint(),this.sparks.burst(o.pos.clone().add(Oe(0,1.5,0)),24,{color:new re(16765562),speed:4,life:.9,size:.3}),this.hooks.toast("Lamp lit!","You'll come back here if you tumble"));for(let o of this.hazards){let a=Ie.radius;t.pos.x+a>o.min.x&&t.pos.x-a<o.max.x&&t.pos.z+a>o.min.z&&t.pos.z-a<o.max.z&&t.pos.y<o.max.y&&t.pos.y+Ie.height>o.min.y&&t.invuln<=0&&(this.hooks.pop("Ouch! Toy brick!"),this.hurt(Oe((o.min.x+o.max.x)/2,o.min.y,(o.min.z+o.max.z)/2)),t.vel.y=9)}for(let o of this.enemies){if(!o.alive)continue;let a=o.type==="roomba",l=a?.75:.5,c=a?.45:1,h=t.pos.x-o.pos.x,d=t.pos.z-o.pos.z;if(Math.hypot(h,d)>l+Ie.radius||t.pos.y>o.pos.y+c+.05||t.pos.y+Ie.height<o.pos.y)continue;let f=t.vel.y<0&&t.pos.y>o.pos.y+c*.45;if(t.pound){this.defeat(o);continue}if(f){a&&o.stun<=0?(o.stun=2,Je.bounce(),this.hooks.pop("Boing! (try a belly flop)"),t.vel.y=Ie.stompBounce*1.1,t.pos.y=o.pos.y+c+.02,t.canDouble=this.ab.doubleJump):a?(t.vel.y=Ie.stompBounce,t.pos.y=o.pos.y+c+.02,Je.bounce()):(this.defeat(o),t.vel.y=this.input.jumpHeld()?Ie.jump*1.05:Ie.stompBounce,t.pos.y=o.pos.y+c+.02,t.canDouble=this.ab.doubleJump,t.dashUsed=!1,this.rig.impulse(5));continue}if(t.dashT>0&&!a){this.defeat(o);continue}if(a&&o.stun>0){let g=Oe(h,0,d).normalize().multiplyScalar(.05);t.pos.add(g);continue}this.hurt(o.pos)}let s=null;for(let o of this.signs)o.pos.distanceTo(t.pos)<3.2&&(s=o.text.replace(`
`," \xB7 "));this.hooks.hint(s);let r=this.goal.position;Math.hypot(r.x-t.pos.x,r.z-t.pos.z)<2&&Math.abs(r.y-t.pos.y)<1.6&&this.win()}win(){this.state==="play"&&(this.state="win",this.winT=0,Je.win(),this.hooks.hint(null),this.sparks.burst(this.goal.position.clone().add(Oe(0,2,0)),70,{color:new re(16757712),speed:9,life:1.4,size:.4}))}result(){return{fish:this.stats.fish,fishTotal:this.L.fish.length,time:this.stats.time,bops:this.stats.bops,falls:this.stats.falls,stars:this.runStars.slice()}}visuals(e){let t=this.clock,n=this.p;for(let a of this.enemies){if(a.t+=e,!a.alive){a.deadT+=e;let f=Math.max(0,1-a.deadT*2.5);a.m.scale.set(1+(1-f)*.6,f,1+(1-f)*.6),f<=0&&(a.m.visible=!1);continue}let l=a.type==="roomba";a.stun-=e;let c=a.e.dx||0,h=a.e.dz||0,d=Math.hypot(c,h)||1;if(a.stun>0)a.m.userData.inner.rotation.y+=e*12;else{let f=null;if(l&&Math.abs(n.pos.y-a.pos.y)<1.2){let E=(n.pos.x-a.start.x)*c/d+(n.pos.z-a.start.z)*h/d;Math.abs((n.pos.x-a.start.x)*h/d-(n.pos.z-a.start.z)*c/d)<3.5&&E>-1&&E<d+1&&(f=Math.max(0,Math.min(1,E/d)))}a.chase=f!==null;let g=(a.e.speed||1.5)*(a.chase?1.5:1)/d;a.chase?a.u+=Math.sign(f-a.u)*Math.min(Math.abs(f-a.u),g*e):(a.u+=a.dir*g*e,a.u>1&&(a.u=1,a.dir=-1),a.u<0&&(a.u=0,a.dir=1));let _=a.start.x+c*a.u,p=a.start.z+h*a.u,m=_-a.pos.x,x=p-a.pos.z;Math.abs(m)+Math.abs(x)>1e-4&&(a.m.rotation.y+=iu(a.m.rotation.y,Math.atan2(m,x))*Math.min(1,e*8)),a.pos.x=_,a.pos.z=p,a.m.userData.inner.rotation.y*=.9}let u=a.m.userData.inner;if(l)a.m.userData.brush.rotation.y+=e*20,u.position.y=Math.abs(Math.sin(a.t*20))*.01;else{let f=Math.abs(Math.sin(a.t*5));u.position.y=f*.35,u.scale.set(1+(1-f)*.12,.88+f*.15,1+(1-f)*.12)}a.m.position.copy(a.pos)}for(let a of this.platforms){let l=a.vis.group;if(l.position.copy(a.cur),a.p.type==="crumble"&&(a.crumble===1&&(l.position.x+=(Math.random()-.5)*.08,l.position.z+=(Math.random()-.5)*.08),a.crumble===2?(l.position.y-=(3-a.crumbleT)*(3-a.crumbleT)*3,l.visible=a.crumbleT>1.2):l.visible=!0,a.respawnFx&&(a.respawnFx=Math.max(0,a.respawnFx-e*3),l.scale.setScalar(1-a.respawnFx*.6))),a.squish>0){a.squish=Math.max(0,a.squish-e*3);let c=Math.sin(a.squish*Math.PI*3)*a.squish*.25;l.scale.set(1+c*.5,1-c,1+c*.5)}}for(let a of this.crates)if(a.mesh.userData.breakT){a.mesh.userData.breakT+=e;let l=Math.max(0,1-a.mesh.userData.breakT*5);a.mesh.scale.set(1+(1-l),l,1+(1-l)),l<=0&&(a.mesh.visible=!1)}for(let a of this.fish){if(a.out){a.out+=e;let l=Math.max(0,1-a.out*4);a.m.position.lerp(n.pos.clone().add(Oe(0,.6,0)),Math.min(1,e*14)),a.m.scale.setScalar(l),l<=0&&(a.m.visible=!1);continue}a.m.rotation.y=t*2.5+a.ph,a.m.position.y=a.pos.y+Math.sin(t*3+a.ph)*.12}for(let a of this.stars){if(a.pop&&(a.pop=Math.max(0,a.pop-e*2),a.m.position.y=a.pos.y+Math.sin((1-a.pop)*Math.PI)*1.2),a.out){a.out+=e,a.m.scale.setScalar(1+a.out*2),a.m.position.y+=e*3,a.m.rotation.y+=e*20,a.out>.5&&(a.m.visible=!1);continue}a.m.rotation.y=t*1.6,a.pop||(a.m.position.y=a.pos.y+Math.sin(t*2)*.15),Math.random()<.08&&!a.hidden&&this.sparks.emit({p:a.pos.clone().add(Oe(Math.random()-.5,Math.random()-.5,Math.random()-.5)),v:Oe(0,.6,0),life:.9,size:.18,color:new re(16769930)})}for(let a of this.heartsPick)a.m.rotation.y=t*2,a.m.position.y=a.pos.y+Math.sin(t*3)*.12;this.goal.userData.heart.rotation.y=t*1.5,this.goal.userData.heart.position.y=2.1+Math.sin(t*2)*.15;for(let a of this.updrafts)a.rings.forEach((l,c)=>{let h=(t*.35+c/a.rings.length)%1;l.position.y=a.u.y0+h*(a.u.y1-a.u.y0),l.scale.setScalar(.6+h*.5),l.material.opacity=.35}),Math.random()<.6&&this.sparks.emit({p:Oe(a.u.x+(Math.random()-.5)*a.u.r*1.6,a.u.y0,a.u.z+(Math.random()-.5)*a.u.r*1.6),v:Oe(0,6+Math.random()*3,0),life:(a.u.y1-a.u.y0)/8,size:.2+Math.random()*.2,color:new re(13629183),drag:0,alpha:.7});n.pos&&this.rig.root.position.copy(n.pos),this.rig.root.rotation.y=n.yaw;let s=Math.min(1,Math.hypot(n.vel.x,n.vel.z)/Ie.run);this.rig.update(e,{speed:s,grounded:n.grounded,vy:n.vel.y,pound:!!n.pound,glide:n.glide,happy:this.state==="win"}),this.rig.root.visible=!(n.invuln>0&&this.state==="play"&&Math.floor(t*20)%2===0);let r=this.L.floor.y;for(let a of this.solids)a.active&&n.pos.x>a.min.x&&n.pos.x<a.max.x&&n.pos.z>a.min.z&&n.pos.z<a.max.z&&a.max.y<=n.pos.y+.05&&(r=Math.max(r,a.max.y));this.rig.blob.position.y=r-n.pos.y+.03;let o=n.pos.y-r;this.rig.blob.material.opacity=Math.max(0,.4-o*.05),this.rig.blob.scale.setScalar(Math.max(.4,1-o*.06)),n.glide&&Math.random()<.5&&this.sparks.emit({p:n.pos.clone().add(Oe((Math.random()-.5)*1.4,.3,(Math.random()-.5)*1.4)),v:Oe(0,-.5,0),life:.6,size:.15,color:new re(14676479),alpha:.7}),this.sparks.update(e),this.puffs.update(e),this.floor.update(t),this.sky.mesh.material.uniforms.time.value=t,Gf(t),this.ambient.update(t,this.camera.position),this.updateCamera(e),this.hudDirty&&(this.hudDirty=!1,this.hooks.hud())}updateCamera(e,t=!1){let n=this.cam,s=this.p,r=this.input,o=r.camDX!==0||r.camDY!==0||r.camTurn()!==0;n.yaw-=r.camDX*.005+r.camTurn()*e*2.4,n.pitch=Po.clamp(n.pitch+r.camDY*.003,.05,1.15),n.idle=o?0:n.idle+e;let a=Math.hypot(s.vel.x,s.vel.z);if(n.idle>1.2&&a>2&&this.state==="play"){let m=Math.atan2(s.vel.x,s.vel.z)+Math.PI,x=iu(n.yaw,m);Math.abs(x)<2&&(n.yaw+=x*Math.min(1,e*.9)*(a/Ie.run))}this.state==="win"&&(n.yaw+=e*.5);let l=s.grounded||s.pos.y<n.target.y-1.5||s.inUpdraft?s.pos.y:n.target.y+(s.pos.y-n.target.y)*.25,c=Oe(s.pos.x,l,s.pos.z);t?n.target.copy(c):(n.target.x+=(c.x-n.target.x)*Math.min(1,e*10),n.target.z+=(c.z-n.target.z)*Math.min(1,e*10),n.target.y+=(c.y-n.target.y)*Math.min(1,e*(s.grounded?6:3)));let h=n.target.clone().add(Oe(0,1.1,0)),d=n.dist*(this.state==="win"?.8:1),u=Oe(Math.sin(n.yaw)*Math.cos(n.pitch),Math.sin(n.pitch),Math.cos(n.yaw)*Math.cos(n.pitch)).multiplyScalar(d);this.camera.position.copy(h).add(u),n.shake&&(n.shake=Math.max(0,n.shake-e),this.camera.position.add(Oe(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(n.shake*.6))),this.camera.lookAt(h),n.fovKick=Math.max(0,(n.fovKick||0)-e*30);let f=55+(n.fovKick||0);Math.abs(this.camera.fov-f)>.01&&(this.camera.fov=f,this.camera.updateProjectionMatrix());let g=this.sky.sunDir,_=s.pos.clone(),p=48/this.R.shadowSize();_.x=Math.round(_.x/p)*p,_.z=Math.round(_.z/p)*p,this.sun.target.position.copy(_),this.sun.position.copy(_).addScaledVector(g,60)}render(){this.R.render(this.clock)}};var Qe=i=>document.getElementById(i),su="blahaj-adventure-v1",_s={doubleJump:{icon:"\u{1FAE7}",name:"Double Jump",how:"Press Space again in the air"},flop:{icon:"\u{1F4A5}",name:"Belly Flop",how:"Press C in the air: cracks crates, super-bounces sponges"},dash:{icon:"\u{1F680}",name:"Torpedo Dash",how:"Press Shift to zoom forward"},glide:{icon:"\u{1FABD}",name:"Fin Glide",how:"Hold Space while falling"}};function Nv(){let i=null;try{i=JSON.parse(localStorage.getItem(su))}catch{}return i=i||{},i.completed=i.completed||[],i.stars=i.stars||[],i.bestTime=i.bestTime||[],i.bestFish=i.bestFish||[],on.forEach((e,t)=>{i.stars[t]=i.stars[t]||[!1,!1,!1]}),i.quality=i.quality||"high",i}var St=Nv();function qo(){try{localStorage.setItem(su,JSON.stringify(St))}catch{}}var Yo=()=>St.stars.reduce((i,e)=>i+e.filter(Boolean).length,0),Zo=()=>{let i={};for(let[e,t]of Object.entries(Ie.unlocks))i[e]=!!St.completed[t];return i},Qf=i=>on[i].bonus?Yo()>=Ie.bonusStars:i===0||!!St.completed[i-1],ji=new fc(Qe("game"));ji.setQuality(St.quality);var gr=new pc(Qe("game")),rn=null,Ft="title",Di=0;function ni(i){["title","how","levels","pause","complete","ending"].forEach(e=>Qe(e).classList.toggle("hidden",e!==i)),Qe("hud").classList.toggle("hidden",i!==null),Qe("touch").classList.toggle("off",i!==null)}var Fv={hud:ep,toast:Jo,pop:Ov,hint:i=>{let e=Qe("hint");i?(e.textContent=i,e.style.opacity=1):e.style.opacity=0},fade:i=>Qe("fade").classList.toggle("on",i),star:i=>{St.stars[Di][i]||(St.stars[Di][i]=!0,qo())},complete:Bv};function Jf(i,e="Fluffing pillows\u2026"){Qe("loading").classList.toggle("hidden",!i),Qe("loadingText").textContent=e}function Qi(i,e=!1){Jf(!0,e?"Fluffing pillows\u2026":`Loading ${on[i].name}\u2026`),setTimeout(()=>{if(rn&&rn.dispose(),Di=i,rn=new yc(ji,gr,on[i],i,Zo(),St.stars[i],Fv),rn.attract=e,ru.reset(),Jf(!1),e)return;Ft="play",ni(null),Qe("levelName").textContent=`${i+1}. ${on[i].name}`,Qe("fishTotal").textContent=on[i].fish.length,ep(),Je.init(),Je.resume(),Je.startMusic(on[i].music);let t=Object.entries(Ie.unlocks).find(([,n])=>n===i-1);t&&Zo()[t[0]]&&Jo(`${_s[t[0]].icon} ${_s[t[0]].name}`,_s[t[0]].how,4e3),Qe("game").focus()},40)}function ep(){if(!rn)return;Qe("fish").textContent=rn.stats.fish;let i=rn.stars.map(e=>e.taken||St.stars[Di][e.i]);Qe("stars").innerHTML=i.map(e=>`<span class="${e?"":"off"}">\u2B50</span>`).join(""),Qe("hearts").innerHTML=Array.from({length:Ie.maxHearts},(e,t)=>`<span class="${t<rn.p.hearts?"":"lost"}">\u{1F499}</span>`).join("")}var $f=null;function Jo(i,e="",t=2200){let n=Qe("toast");n.innerHTML=`${i}${e?`<small>${e}</small>`:""}`,n.classList.add("show"),clearTimeout($f),$f=setTimeout(()=>n.classList.remove("show"),t)}var Kf=null;function Ov(i){let e=Qe("combo");e.textContent=i,e.classList.add("show"),clearTimeout(Kf),Kf=setTimeout(()=>e.classList.remove("show"),700)}var Mc=i=>Number.isFinite(i)?`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`:"\u2013";function Bv(i){let e=Di,t=Yo()>=Ie.bonusStars,n=Zo();St.completed[e]=!0,i.stars.forEach((a,l)=>{a&&(St.stars[e][l]=!0)}),St.bestTime[e]=St.bestTime[e]?Math.min(St.bestTime[e],i.time):i.time,St.bestFish[e]=Math.max(St.bestFish[e]||0,i.fish),qo(),Je.stopMusic(),Ft="menu",Qe("completeTitle").textContent=`${on[e].name} complete!`,Qe("completeStars").innerHTML=St.stars[e].map(a=>`<span class="${a?"":"off"}">\u2B50</span>`).join(""),Qe("cFish").textContent=`${i.fish} / ${i.fishTotal}${i.fish>=i.fishTotal?" \u{1F451}":""}`,Qe("cTime").textContent=`${Mc(i.time)}  (best ${Mc(St.bestTime[e])})`,Qe("cBops").textContent=i.bops,Qe("cFalls").textContent=i.falls;let s="",r=Zo();for(let a of Object.keys(r))r[a]&&!n[a]&&(s+=`<div class="unlock">New ability: ${_s[a].icon} ${_s[a].name}<small>${_s[a].how}</small></div>`);!t&&Yo()>=Ie.bonusStars&&(s+=`<div class="unlock">\u2728 Bonus level unlocked: ${on[on.length-1].name}!</div>`),Qe("completeUnlock").innerHTML=s,s&&Je.unlock();let o=e+1<on.length&&Qf(e+1)?e+1:-1;Qe("btnNext").classList.toggle("hidden",o<0),Qe("btnNext").onclick=()=>{Je.click(),Qi(o)},on[e].id==="dreamsea"&&!St.sawEnding?(St.sawEnding=!0,qo(),ni("ending"),Qe("btnEndLevels").onclick=()=>{Je.click(),ni("complete")}):ni("complete")}function zv(){let i=Qe("levelGrid");i.innerHTML="";let e={bedroom:"#ffb3c6",kitchen:"#ffd166",shelf:"#b79fff",rooftops:"#ff9f68",dreamsea:"#5a4b9c",lagoon:"#36c5b8"};on.forEach((n,s)=>{let r=Qf(s),o=document.createElement("div");o.className="lvl"+(r?"":" locked")+(n.bonus?" bonus":"");let a=St.stars[s].map(c=>`<span class="${c?"":"off"}">\u2B50</span>`).join(""),l=n.bonus?`\u{1F512} Collect ${Ie.bonusStars} \u2B50 (${Yo()}/${Ie.bonusStars})`:"\u{1F512} Finish the previous level";o.innerHTML=`<div class="swatch" style="background:${e[n.theme]}"></div><div class="num">${n.bonus?"Bonus":"Level "+(s+1)}</div><div class="name">${n.name}</div>
      <div class="blurb">${r?n.blurb:l}</div><div class="stars">${a}</div>
      <div class="meta">${St.completed[s]?`\u{1F41F} best ${St.bestFish[s]||0}/${n.fish.length}${(St.bestFish[s]||0)>=n.fish.length?" \u{1F451}":""} \xB7 \u23F1 ${Mc(St.bestTime[s])}`:r?"Not finished yet":""}</div>`,r&&(o.onclick=()=>{Je.init(),Je.click(),Qi(s)}),i.appendChild(o)});let t=Zo();Qe("abilityList").innerHTML=Object.entries(_s).map(([n,s])=>`<span class="ab ${t[n]?"":"off"}" title="${s.how}">${s.icon} ${s.name}</span>`).join("")+`<span class="ab">\u2B50 ${Yo()} / ${on.length*3}</span>`}function $o(){Je.init(),Je.click(),(Ft==="play"||Ft==="paused"||Ft==="menu")&&(Ft="title",Je.stopMusic(),Qi(0,!0)),zv(),ni("levels")}function xr(i){i&&Ft==="play"?(Ft="paused",ni("pause"),Je.stopMusic()):!i&&Ft==="paused"&&(Ft="play",ni(null),Je.startMusic(on[Di].music),Qe("game").focus())}function Sc(){return`Graphics: ${fr[ji.quality].label}`}function Hv(){let i=pr.indexOf(ji.quality),e=pr[(i+1)%pr.length];St.quality=e,qo(),ji.setQuality(e),document.querySelectorAll(".qbtn").forEach(t=>t.textContent=Sc()),ru.reset(),rn&&Ft!=="title"&&Jo(Sc(),"Grass and some effects update on the next level")}Qe("btnStart").onclick=$o;Qe("btnHow").onclick=()=>{Je.init(),Je.click(),ni("how")};Qe("btnHowBack").onclick=()=>{Je.click(),ni("title")};Qe("btnBackTitle").onclick=()=>{Je.click(),ni("title")};Qe("btnReset").onclick=()=>{if(confirm("Reset all progress? Your starfish will swim away!")){try{localStorage.removeItem(su)}catch{}location.reload()}};Qe("btnResume").onclick=()=>xr(!1);Qe("btnRestart").onclick=()=>{Je.click(),Qi(Di)};Qe("btnQuit").onclick=$o;Qe("btnAgain").onclick=()=>{Je.click(),Qi(Di)};Qe("btnToLevels").onclick=$o;Qe("btnEndLevels").onclick=$o;document.querySelectorAll(".qbtn").forEach(i=>{i.textContent=Sc(),i.onclick=()=>{Je.click(),Hv()}});Qe("tPause").onclick=()=>xr(!0);addEventListener("keydown",i=>{if(i.code==="KeyM"){Je.init();let e=Je.toggleMute();Jo(e?"\u{1F507} Sound off":"\u{1F50A} Sound on")}(i.code==="Escape"||i.code==="KeyP")&&(Ft==="play"?xr(!0):Ft==="paused"&&xr(!1)),i.code==="KeyR"&&Ft==="play"&&Qi(Di),(i.code==="Enter"||i.code==="Space")&&Ft==="title"&&!Qe("title").classList.contains("hidden")&&(i.preventDefault(),$o())});addEventListener("resize",()=>ji.resize());var ru={frames:0,time:0,warm:0,reset(){this.frames=0,this.time=0,this.warm=0},sample(i){if(Ft==="play"&&(this.warm+=i,!(this.warm<3)&&(this.frames++,this.time+=i,this.time>4))){let e=this.frames/this.time,t=pr.indexOf(ji.quality);if(e<32&&t>0&&!St.qualityLocked){let n=pr[t-1];ji.setQuality(n),St.quality=n,qo(),document.querySelectorAll(".qbtn").forEach(s=>s.textContent=Sc()),Jo(`Graphics set to ${fr[n].label}`,"for smoother swimming (change it in the pause menu)")}this.frames=0,this.time=0}}},jf=performance.now();function tp(i){requestAnimationFrame(tp);let e=Math.min(.05,(i-jf)/1e3);if(jf=i,gr.pollPad(),gr.pressed.has("pad-pause")&&(Ft==="play"?xr(!0):Ft==="paused"&&xr(!1)),!np.noRender){if(!rn){gr.endFrame();return}Ft==="play"||Ft==="title"||Ft==="menu"&&rn.state==="win"?rn.update(e):gr.endFrame(),Ft==="play"&&(Qe("timer").textContent=Mc(rn.stats.time)),rn.render(),ru.sample(e)}}ni("title");Qi(0,!0);requestAnimationFrame(tp);var np={noRender:!1};window.__blahaj={get game(){return rn},startLevel:Qi,save:St,get mode(){return Ft},debug:np,sim(i,e=1/60){for(let t=0;t<i;t+=e)gr.pollPad(),rn&&(Ft==="play"||rn.state==="win")&&rn.update(e)}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
