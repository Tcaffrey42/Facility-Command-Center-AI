
const seed={activeClient:0,clients:[
{name:"Security Finance",vertical:"Financial Branch Network",locations:754,budget:4200000,owner:"April Parker"},
{name:"Fogo de Chão Refresh Program",vertical:"Restaurant Refresh / Reimage",locations:73,budget:6800000,owner:"Michael Murillo"},
{name:"Prime Communications",vertical:"Telecom Retail",locations:2000,budget:18000000,owner:"Facilities Team"}
],
locations:[
{id:"L101",client:0,site:"Charlotte Branch 014",region:"Southeast",market:"Charlotte",district:"SE-01",address:"201 S Tryon St, Charlotte, NC 28202",latitude:35.2269,longitude:-80.8433,fm:"April Parker",risk:"High",risk_score:85,trade:"HVAC",spend:48200,open:7,repeat:4,capex:true},
{id:"L205",client:0,site:"Dallas Branch 088",region:"Texas",market:"Dallas-Fort Worth",district:"TX-02",address:"1717 Main St, Dallas, TX 75201",latitude:32.7813,longitude:-96.7970,fm:"April Parker",risk:"Medium",risk_score:52,trade:"Electrical",spend:37100,open:5,repeat:2,capex:false},
{id:"L319",client:0,site:"Phoenix Branch 122",region:"West",market:"Phoenix",district:"W-04",address:"2 N Central Ave, Phoenix, AZ 85004",latitude:33.4484,longitude:-112.0740,fm:"Sarah Mitchell",risk:"High",risk_score:92,trade:"Plumbing",spend:61200,open:9,repeat:5,capex:true},
{id:"L522",client:0,site:"Cleveland Branch 207",region:"Midwest",market:"Cleveland",district:"MW-03",address:"200 Public Square, Cleveland, OH 44114",latitude:41.4993,longitude:-81.6944,fm:"Marcus Reed",risk:"Critical",risk_score:100,trade:"HVAC",spend:87500,open:11,repeat:7,capex:true},
{id:"FG-PDX",client:1,site:"Portland OR Refresh",region:"West",market:"Portland",district:"W-07",address:"700 SW 5th Ave, Portland, OR 97204",latitude:45.5194,longitude:-122.6762,fm:"Michael Murillo",risk:"High",risk_score:100,trade:"Refresh",spend:420000,open:18,repeat:0,capex:true},
{id:"PC-118",client:2,site:"Atlanta Retail 118",region:"Southeast",market:"Atlanta",district:"SE-05",address:"191 Peachtree St NE, Atlanta, GA 30303",latitude:33.7587,longitude:-84.3877,fm:"Facilities Team",risk:"Medium",risk_score:75,trade:"Doors/Locks",spend:55200,open:8,repeat:3,capex:false}
],
workOrders:[
{id:"WO-78421",client:0,asset:"A-RTU-1",location:"L522",trade:"HVAC",priority:"Emergency",status:"Vendor Dispatched",owner:"Tony Russo",vendor:"Metro Mechanical",age:3,cost:12400,sla:"At Risk",notes:"Emergency RTU issue. Confirm parts ETA."},
{id:"WO-78433",client:0,asset:"A-PL-2",location:"L319",trade:"Plumbing",priority:"Urgent",status:"Proposal Needed",owner:"Nina Patel",vendor:"Desert Pipe",age:8,cost:8600,sla:"Breached",notes:"Repeat drain issue. Proposal requested."},
{id:"WO-78451",client:0,asset:"A-LIGHT-1",location:"L101",trade:"Lighting",priority:"Normal",status:"In Progress",owner:"Evan Brooks",vendor:"BrightWay",age:2,cost:1800,sla:"On Track",notes:"Lobby fixture outage."},
{id:"WO-90111",client:1,asset:"A-BAR-1",location:"FG-PDX",trade:"Millwork",priority:"High",status:"Scoping",owner:"Marcus Reed",vendor:"Portland GC",age:1,cost:126000,sla:"On Track",notes:"Bar rebuild, host stand, restroom refresh, seating reconfiguration."},
{id:"WO-61201",client:2,asset:"A-DOOR-9",location:"PC-118",trade:"Doors/Locks",priority:"Urgent",status:"Scheduled",owner:"Sarah Mitchell",vendor:"AccessPro",age:4,cost:4200,sla:"At Risk",notes:"Back door security issue."}
],
proposals:[
{id:"P-4408",client:0,location:"L522",wo:"WO-78421",trade:"HVAC",amount:55400,status:"Pending",age:6,scope:"Replace failing RTU after repeated compressor failures."},
{id:"P-4411",client:0,location:"L319",wo:"WO-78433",trade:"Plumbing",amount:22600,status:"Review",age:4,scope:"Camera, jetting, partial line replacement."},
{id:"P-5100",client:1,location:"FG-PDX",wo:"WO-90111",trade:"Refresh",amount:885000,status:"Draft",age:1,scope:"Full restaurant refresh and reimage package."}
],
assets:[
{id:"A-RTU-1",client:0,location:"L522",asset:"RTU-1",trade:"HVAC",age:14,repairs:7,spend12:38500,replacement:56000},
{id:"A-PL-2",client:0,location:"L319",asset:"Main Drain Line",trade:"Plumbing",age:22,repairs:5,spend12:18800,replacement:26000},
{id:"A-DOOR-9",client:2,location:"PC-118",asset:"Rear Security Door",trade:"Doors",age:9,repairs:4,spend12:9200,replacement:14000},
{id:"A-LIGHT-1",client:0,location:"L101",asset:"Lobby Lighting Package",trade:"Lighting",age:8,repairs:3,spend12:4200,replacement:12000},
{id:"A-BAR-1",client:1,location:"FG-PDX",asset:"Bar Millwork / Host Stand",trade:"Millwork",age:18,repairs:1,spend12:126000,replacement:185000}
],
vendors:[
{name:"Metro Mechanical",trades:"HVAC",regions:"Midwest / Southeast",score:72,response:5.4,sla:82,insurance:"Verified",status:"Watch"},
{name:"Desert Pipe",trades:"Plumbing",regions:"West",score:64,response:9.1,sla:68,insurance:"Verified",status:"Pressure"},
{name:"BrightWay Electrical",trades:"Electrical / Lighting",regions:"National",score:88,response:3.2,sla:93,insurance:"Verified",status:"Strong"},
{name:"Portland GC",trades:"Refresh / GC",regions:"Pacific Northwest",score:81,response:4.1,sla:89,insurance:"Pending COI",status:"Onboarding"}
],
users:[
{name:"Tim Caffrey",role:"Account Executive",access:"Admin",client:"All",status:"Active"},
{name:"Sarah Mitchell",role:"Account Manager",access:"Operator",client:"Security Finance",status:"Active"},
{name:"Tony Russo",role:"HVAC Lead",access:"Trade Lead",client:"Security Finance",status:"Active"},
{name:"Vendor Portal User",role:"Vendor",access:"Vendor",client:"Multi-client",status:"Limited"}
],
documents:[
{id:"DOC-1001",client:0,type:"COI",name:"Metro Mechanical COI",status:"Verified",expires:"2026-11-30",owner:"Vendor Compliance"},
{id:"DOC-1002",client:0,type:"Proposal",name:"L522 RTU Replacement Proposal",status:"Pending Approval",expires:"N/A",owner:"April Parker"},
{id:"DOC-2001",client:1,type:"Drawing",name:"Portland Refresh Drawings",status:"Active",expires:"N/A",owner:"Michael Murillo"},
{id:"DOC-3001",client:2,type:"Contract",name:"Prime Communications MSA Draft",status:"Draft",expires:"N/A",owner:"Facilities Team"}
],
approvals:[
{id:"APR-901",client:0,item:"P-4408 RTU Replacement",amount:55400,status:"Needs Executive Approval",risk:"High",owner:"April Parker"},
{id:"APR-902",client:0,item:"P-4411 Plumbing Line Repair",amount:22600,status:"Needs Review",risk:"Medium",owner:"April Parker"},
{id:"APR-903",client:1,item:"Portland Refresh Package",amount:885000,status:"Draft",risk:"High",owner:"Michael Murillo"}
],
audit:[
{id:"LOG-1",event:"Work order WO-78421 dispatched to Metro Mechanical",time:"Today 8:14 AM"},
{id:"LOG-2",event:"Proposal P-4408 flagged for capital review",time:"Today 9:03 AM"},
{id:"LOG-3",event:"Asset A-RTU-1 crossed replace-review threshold",time:"Today 9:21 AM"}
],
tenants:[
{name:"Security Finance",plan:"Enterprise",users:14,roles:"Admin / Operator / Trade Lead / Vendor",storage:"2.4 GB",status:"Active"},
{name:"Fogo de Chão Refresh Program",plan:"Projects",users:7,roles:"Admin / Project Manager / GC",storage:"1.1 GB",status:"Pilot"},
{name:"Prime Communications",plan:"Enterprise",users:22,roles:"Admin / FM / Vendor / Finance",storage:"3.8 GB",status:"Demo"}
],
pmPlans:[
{id:"PM-100",client:0,location:"L522",asset:"A-RTU-1",trade:"HVAC",frequency:"Quarterly",nextDue:"2026-07-15",vendor:"Metro Mechanical",status:"Due Soon",estSavings:9600,scope:"Filter change, coil inspection, belt check, economizer check, amperage readings, photo report."},
{id:"PM-101",client:0,location:"L319",asset:"A-PL-2",trade:"Plumbing",frequency:"Semi-Annual",nextDue:"2026-08-01",vendor:"Desert Pipe",status:"Scheduled",estSavings:4200,scope:"Drain camera, jetting, cleanout verification, repeat blockage prevention."},
{id:"PM-200",client:1,location:"FG-PDX",asset:"A-BAR-1",trade:"Refresh",frequency:"Milestone",nextDue:"2026-06-30",vendor:"Portland GC",status:"Planning",estSavings:18000,scope:"Punch walk, warranty items, finish protection, closeout docs."}
],
buildRoadmap:[
{version:"V2.14.1",title:"Stable Data Restore Root-Only Baseline",status:"Protected Baseline",owner:"Butch + Tim"},
{version:"V2.15",title:"CC CommandCenter Brand Upgrade — Run Your Portfolio with AI",status:"Current Build",owner:"Butch + Tim"},
{version:"V2.16",title:"WO Edit/Close Workflow + Photo Intake",status:"Next",owner:"Operations"},
{version:"V2.16",title:"Vendor Portal Lite + COI Expiration Alerts",status:"Queued",owner:"Vendor Management"}
]
};
let db=JSON.parse(localStorage.getItem("commandCenterEnterpriseData")||JSON.stringify(seed));
// V2.14.1 DATA GUARD: keep the deployment-safe root build, but never let an older/broken
// localStorage or empty cloud table wipe the demo modules that power SLA, Locations, and Heat Map.
function ensureSeedDataGuard(){
 const required=["clients","locations","workOrders","proposals","assets","vendors","users","documents","approvals","audit","tenants","pmPlans","buildRoadmap"];
 let changed=false;
 if(!db || typeof db!=="object"){db=JSON.parse(JSON.stringify(seed)); changed=true;}
 required.forEach(k=>{
  if(!Array.isArray(db[k]) || db[k].length===0){db[k]=JSON.parse(JSON.stringify(seed[k]||[])); changed=true;}
 });
 if(!Number.isInteger(Number(db.activeClient)) || Number(db.activeClient)<0 || Number(db.activeClient)>=db.clients.length){db.activeClient=0; changed=true;}
 // Preserve user's current data, but backfill missing demo records needed for the command modules.
 ["locations","workOrders","proposals","assets"].forEach(k=>{
  const idKey=k==="workOrders"?"id":"id";
  const existing=new Set((db[k]||[]).map(x=>x&&x[idKey]));
  (seed[k]||[]).forEach(x=>{ if(!existing.has(x[idKey])){ db[k].push(JSON.parse(JSON.stringify(x))); changed=true; } });
 });
 if(changed){localStorage.setItem("commandCenterEnterpriseData",JSON.stringify(db));}
}
ensureSeedDataGuard();

// ============================
// SPRINT 1 CLOUD FOUNDATION
// ============================
// Fill these in from Supabase Project Settings > API before going live.
const SUPABASE_CONFIG={
 url:(window.COMMANDCENTER_ENV&&window.COMMANDCENTER_ENV.SUPABASE_URL)||"",
 anonKey:(window.COMMANDCENTER_ENV&&window.COMMANDCENTER_ENV.SUPABASE_ANON_KEY)||""
};
const CLOUD_TABLES={
 clients:"clients",
 locations:"locations",
 workOrders:"work_orders",
 proposals:"proposals",
 assets:"assets",
 vendors:"vendors",
 approvals:"approvals",
 users:"users",
 documents:"documents",
 tenants:"tenants",
 audit:"audit_logs"
};
const STORAGE_BUCKETS=["workorder-photos","cois","contracts","proposals","invoices","project-documents"];
let supabaseClient=null;
let cloudReady=false;
function hasSupabaseConfig(){return Boolean(SUPABASE_CONFIG.url&&SUPABASE_CONFIG.anonKey&&window.supabase)}
function cloudModeLabel(){return cloudReady?"Cloud Connected":"Local Demo Mode"}
function cloudDotClass(){return cloudReady?"live":"off"}
async function initCloudLayer(){
 try{
  if(!hasSupabaseConfig()){cloudReady=false;return false;}
  supabaseClient=window.supabase.createClient(SUPABASE_CONFIG.url,SUPABASE_CONFIG.anonKey);
  const {data,error}=await supabaseClient.auth.getSession();
  if(error) throw error;
  // Do not mark cloud live unless an authenticated session exists.
  // This prevents RLS/table errors from blocking the demo UI on first load.
  cloudReady=Boolean(data&&data.session);
  return cloudReady;
 }catch(e){console.warn("Supabase init failed; continuing in local demo mode",e);cloudReady=false;return false;}
}
async function cloudSignIn(){
 if(!hasSupabaseConfig()){toast("Add Supabase env vars first");return;}
 const email=(document.getElementById("cloudEmail")||{}).value;
 const password=(document.getElementById("cloudPassword")||{}).value;
 if(!email||!password){toast("Email and password required");return;}
 const {error}=await supabaseClient.auth.signInWithPassword({email,password});
 if(error){toast(error.message);return;}
 cloudReady=true;toast("Signed in");render();
}
async function cloudSignOut(){if(supabaseClient){await supabaseClient.auth.signOut();}cloudReady=false;toast("Signed out");render();}


// ============================
// V2.16 AUTH + USER ROLES
// Uses your EXISTING Supabase project. No reconnect required.
// Requires public.profiles table with: id, email, full_name, role, company.
// ============================
let currentSession=null;
let currentProfile=null;
const ROLE_PAGES={
  admin:["warroom","amdashboard","dashboard","workorders","pm","dispatch","escalations","sla","locations","heatmap","proposals","approvals","assets","vendors","copilot","executive","cfo","projects","reports","tenant","documents","users","settings"],
  executive:["warroom","dashboard","sla","locations","heatmap","proposals","approvals","assets","vendors","copilot","executive","cfo","projects","reports","documents"],
  facility_manager:["warroom","amdashboard","dashboard","workorders","pm","dispatch","escalations","sla","locations","heatmap","proposals","approvals","assets","vendors","copilot","projects","documents"],
  vendor:["workorders","dispatch","documents"],
  technician:["workorders","dispatch","assets","documents"],
  client:["dashboard","workorders","locations","heatmap","proposals","approvals","documents","copilot"]
};
const ROLE_PERMISSIONS={
  admin:["create_work_order","create_proposal","export_data","assign_vendor","approve_spend","manage_users"],
  executive:["export_data","approve_spend"],
  facility_manager:["create_work_order","create_proposal","export_data","assign_vendor"],
  vendor:[], technician:["create_work_order"], client:["create_work_order"]
};
function normalizeRole(role){
  return String(role||"client").toLowerCase().replace(/\s+/g,"_").replace(/-/g,"_");
}
function activeRole(){return normalizeRole(currentProfile?.role || localStorage.getItem("commandCenterRole") || "client")}
function canAccessPage(id){return (ROLE_PAGES[activeRole()]||ROLE_PAGES.client).includes(id)}
function hasPermission(key){return (ROLE_PERMISSIONS[activeRole()]||[]).includes(key)}
function visiblePages(){return pages.filter(p=>canAccessPage(p[0]))}
function setAuthMessage(msg){let el=document.getElementById("authMessage"); if(el) el.textContent=msg||"";}

function isDemoLogin(email,password){
  const e=String(email||"").trim().toLowerCase();
  const pw=String(password||"").trim();
  return (e==="admin@commandcenter.local" || e==="demo@commandcenter.local" || e==="tcaffrey42@gmail.com") && (pw==="demo" || pw==="Demo123!" || pw==="commandcenter");
}
function startLocalDemoSession(email){
  currentSession={user:{id:"local-demo-admin",email:email||"admin@commandcenter.local",user_metadata:{full_name:"Tim Caffrey"}}};
  currentProfile={id:"local-demo-admin",email:currentSession.user.email,full_name:"Tim Caffrey",role:"admin",company:"CommandCenter"};
  cloudReady=false;
  localStorage.setItem("commandCenterLocalDemoAuth","true");
  localStorage.setItem("commandCenterLoggedEmail",currentSession.user.email);
  localStorage.setItem("commandCenterRole","admin");
  applyRoleUI();
}
function ensureSupabaseClient(){
  if(!hasSupabaseConfig()){setAuthMessage("Supabase config missing or Supabase library did not load. Check env.js and internet/CDN access."); return false;}
  if(!supabaseClient) supabaseClient=window.supabase.createClient(SUPABASE_CONFIG.url,SUPABASE_CONFIG.anonKey);
  return true;
}
async function loadCurrentProfile(){
  if(!supabaseClient||!currentSession?.user) return null;
  const user=currentSession.user;
  let {data,error}=await supabaseClient.from("profiles").select("id,email,full_name,role,company").eq("id",user.id).maybeSingle();
  if(error){console.warn("Profile read failed",error);setAuthMessage(error.message);return null;}
  if(!data){
    const fallback={id:user.id,email:user.email,full_name:user.user_metadata?.full_name||user.email,role:"client",company:"CommandCenter"};
    const up=await supabaseClient.from("profiles").upsert(fallback,{onConflict:"id"}).select().maybeSingle();
    data=up.data||fallback;
  }
  currentProfile=data;
  localStorage.setItem("commandCenterRole",normalizeRole(data.role));
  localStorage.setItem("commandCenterLoggedEmail",data.email||user.email||"");
  return data;
}
function applyRoleUI(){
  document.body.classList.add("authReady");
  const badge=document.getElementById("roleBadge");
  if(badge){badge.textContent=`${(currentProfile?.role||"client").replace(/_/g," ")} · ${currentProfile?.email||currentSession?.user?.email||"signed in"}`;}
  document.querySelectorAll("[data-permission]").forEach(el=>{
    const ok=hasPermission(el.getAttribute("data-permission"));
    el.classList.toggle("hiddenByRole",!ok);
  });
}
async function initAuthGate(){
  if(localStorage.getItem("commandCenterLocalDemoAuth")==="true"){
    startLocalDemoSession(localStorage.getItem("commandCenterLoggedEmail")||"admin@commandcenter.local");
    return true;
  }
  if(!ensureSupabaseClient()) return false;
  const {data,error}=await supabaseClient.auth.getSession();
  if(error){setAuthMessage(error.message);return false;}
  currentSession=data.session;
  cloudReady=Boolean(currentSession);
  if(!currentSession){document.body.classList.remove("authReady");return false;}
  await loadCurrentProfile();
  applyRoleUI();
  return true;
}
async function appSignIn(){
  const email=(document.getElementById("authEmail")||{}).value;
  const password=(document.getElementById("authPassword")||{}).value;
  if(!email||!password){setAuthMessage("Enter email and password.");return;}
  setAuthMessage("Signing in...");

  // Demo safety net: lets the app open even when Supabase Authentication > Users is empty.
  // Use this for demos/dev, then create real users in Supabase for production.
  if(isDemoLogin(email,password)){
    startLocalDemoSession(email);
    setAuthMessage("");
    await init();
    return;
  }

  if(!ensureSupabaseClient()) return;
  const {data,error}=await supabaseClient.auth.signInWithPassword({email,password});
  if(error){
    setAuthMessage(error.message + " — For demo access use admin@commandcenter.local / demo, or create this user in Supabase Authentication > Users.");
    return;
  }
  currentSession=data.session;
  await loadCurrentProfile();
  setAuthMessage("");
  await init();
}
async function appSignOut(){
  if(supabaseClient) await supabaseClient.auth.signOut();
  currentSession=null;currentProfile=null;cloudReady=false;
  localStorage.removeItem("commandCenterRole");
  localStorage.removeItem("commandCenterLocalDemoAuth");
  document.body.classList.remove("authReady");
  setAuthMessage("Signed out.");
}

function mapRows(rows,mapper){return (rows||[]).map(mapper)}
function demoToCloudPayload(){
 return {
  clients:mapRows(db.clients,(x,i)=>({demo_id:String(i),name:x.name,vertical:x.vertical,locations:x.locations,budget:x.budget,owner:x.owner,raw:x})),
  locations:mapRows(db.locations,x=>({demo_id:x.id,client_demo_id:String(x.client),site:x.site,region:x.region,address:x.address,market:x.market,district:x.district,latitude:x.latitude,longitude:x.longitude,fm:x.fm,risk:x.risk,risk_score:riskScore(x),trade:x.trade,spend:x.spend,open_count:x.open,repeat_count:x.repeat,capex:x.capex,raw:x})),
  workOrders:mapRows(db.workOrders,x=>({demo_id:x.id,client_demo_id:String(x.client),asset_demo_id:x.asset,location_demo_id:x.location,trade:x.trade,priority:x.priority,status:x.status,owner:x.owner,vendor_name:x.vendor,age_days:x.age,cost:x.cost,sla:x.sla,notes:x.notes,raw:x})),
  proposals:mapRows(db.proposals,x=>({demo_id:x.id,client_demo_id:String(x.client),location_demo_id:x.location,work_order_demo_id:x.wo,trade:x.trade,amount:x.amount,status:x.status,age_days:x.age,scope:x.scope,raw:x})),
  assets:mapRows(db.assets,x=>({demo_id:x.id,client_demo_id:String(x.client),location_demo_id:x.location,asset:x.asset,trade:x.trade,age:x.age,repairs:x.repairs,spend12:x.spend12,replacement:x.replacement,manufacturer:x.manufacturer,model:x.model,install_date:x.installDate,raw:x})),
  vendors:mapRows(db.vendors,x=>({name:x.name,trades:x.trades,regions:x.regions,score:x.score,response_hours:x.response,sla:x.sla,insurance:x.insurance,status:x.status,raw:x})),
  approvals:mapRows(db.approvals,x=>({demo_id:x.id,client_demo_id:String(x.client),item:x.item,amount:x.amount,status:x.status,risk:x.risk,owner:x.owner,assigned_to:x.assignedTo,raw:x})),
  users:mapRows(db.users,x=>({name:x.name,role:x.role,access:x.access,client:x.client,status:x.status,raw:x})),
  documents:mapRows(db.documents,x=>({demo_id:x.id,client_demo_id:String(x.client),type:x.type,name:x.name,status:x.status,expires:x.expires,owner:x.owner,raw:x})),
  tenants:mapRows(db.tenants,x=>({name:x.name,plan:x.plan,users:x.users,roles:x.roles,storage:x.storage,status:x.status,raw:x})),
  audit:mapRows(db.audit,x=>({demo_id:x.id,event:x.event,event_time:x.time,raw:x}))
 }
}
async function syncDemoToSupabase(){
 if(!cloudReady||!supabaseClient){toast("Connect Supabase first");return;}
 const p=demoToCloudPayload();
 const jobs=[
  [CLOUD_TABLES.clients,p.clients,"demo_id"],[CLOUD_TABLES.locations,p.locations,"demo_id"],[CLOUD_TABLES.workOrders,p.workOrders,"demo_id"],
  [CLOUD_TABLES.proposals,p.proposals,"demo_id"],[CLOUD_TABLES.assets,p.assets,"demo_id"],[CLOUD_TABLES.vendors,p.vendors,"name"],
  [CLOUD_TABLES.approvals,p.approvals,"demo_id"],[CLOUD_TABLES.users,p.users,"name"],[CLOUD_TABLES.documents,p.documents,"demo_id"],
  [CLOUD_TABLES.tenants,p.tenants,"name"],[CLOUD_TABLES.audit,p.audit,"demo_id"]
 ];
 for(const [table,rows,key] of jobs){
  if(!rows.length) continue;
  const {error}=await supabaseClient.from(table).upsert(rows,{onConflict:key});
  if(error){console.error(error);toast("Sync failed at "+table);return;}
 }
 toast("Demo data synced to Supabase");
}

// ============================
// V2.6 LIVE SUPABASE READ/WRITE LAYER
// ============================
let cloudLastLoad=null;
function cloudCanWrite(){return Boolean(supabaseClient&&cloudReady)}
function clientDemoId(v){return String(v??db.activeClient??0)}
function cloudToastError(prefix,error){console.error(prefix,error);toast(prefix+": "+(error?.message||"check console"))}
function cloudPayload(kind,x){
 const maps={
  clients:x=>({demo_id:String(db.clients.indexOf(x)>=0?db.clients.indexOf(x):x.demo_id||0),name:x.name,vertical:x.vertical,locations:x.locations,budget:x.budget,owner:x.owner,raw:x}),
  locations:x=>({demo_id:x.id,client_demo_id:clientDemoId(x.client),site:x.site,region:x.region,address:x.address,market:x.market,district:x.district,latitude:x.latitude,longitude:x.longitude,fm:x.fm,risk:x.risk,risk_score:riskScore(x),trade:x.trade,spend:x.spend,open_count:x.open,repeat_count:x.repeat,capex:x.capex,raw:x}),
  workOrders:x=>({demo_id:x.id,client_demo_id:clientDemoId(x.client),asset_demo_id:x.asset,location_demo_id:x.location,trade:x.trade,priority:x.priority,status:x.status,owner:x.owner,vendor_name:x.vendor,age_days:x.age,cost:x.cost,sla:x.sla,notes:x.notes,raw:x}),
  proposals:x=>({demo_id:x.id,client_demo_id:clientDemoId(x.client),location_demo_id:x.location,work_order_demo_id:x.wo,trade:x.trade,amount:x.amount,status:x.status,age_days:x.age,scope:x.scope,raw:x}),
  assets:x=>({demo_id:x.id,client_demo_id:clientDemoId(x.client),location_demo_id:x.location,asset:x.asset,trade:x.trade,age:x.age,repairs:x.repairs,spend12:x.spend12,replacement:x.replacement,manufacturer:x.manufacturer,model:x.model,install_date:x.installDate,raw:x}),
  vendors:x=>({name:x.name,trades:x.trades,regions:x.regions,score:x.score,response_hours:x.response,sla:x.sla,insurance:x.insurance,status:x.status,raw:x}),
  approvals:x=>({demo_id:x.id,client_demo_id:clientDemoId(x.client),item:x.item,amount:x.amount,status:x.status,risk:x.risk,owner:x.owner,assigned_to:x.assignedTo,raw:x}),
  users:x=>({name:x.name,role:x.role,access:x.access,client:x.client,status:x.status,raw:x}),
  documents:x=>({demo_id:x.id,client_demo_id:clientDemoId(x.client),type:x.type,name:x.name,status:x.status,expires:x.expires,owner:x.owner,file_path:x.filePath,raw:x}),
  tenants:x=>({name:x.name,plan:x.plan,users:x.users,roles:x.roles,storage:x.storage,status:x.status,raw:x}),
  audit:x=>({demo_id:x.id,event:x.event,event_time:x.time,raw:x})
 };
 return maps[kind](x);
}
async function cloudUpsert(kind,item){
 if(!cloudCanWrite()) return false;
 const table=CLOUD_TABLES[kind]; if(!table) return false;
 const key=(kind==="vendors"||kind==="users"||kind==="tenants")?"name":"demo_id";
 const {error}=await supabaseClient.from(table).upsert([cloudPayload(kind,item)],{onConflict:key});
 if(error){cloudToastError("Cloud save failed at "+table,error);return false;}
 return true;
}
async function cloudInsertAudit(event){
 const item={id:"LOG-"+Date.now(),event,time:"Just now"};
 db.audit.unshift(item); save();
 await cloudUpsert("audit",item);
 return item;
}
function cloudRowRaw(row){return row?.raw&&Object.keys(row.raw).length?row.raw:null}
function rowsToDemo(kind,rows){
 return (rows||[]).map((r,i)=>cloudRowRaw(r)||({
  clients:{name:r.name,vertical:r.vertical,locations:r.locations,budget:r.budget,owner:r.owner},
  locations:{id:r.demo_id,client:Number(r.client_demo_id||0),site:r.site,region:r.region,address:r.address,market:r.market,district:r.district,latitude:r.latitude,longitude:r.longitude,fm:r.fm,risk:r.risk,risk_score:r.risk_score,trade:r.trade,spend:r.spend,open:r.open_count,repeat:r.repeat_count,capex:r.capex},
  workOrders:{id:r.demo_id,client:Number(r.client_demo_id||0),asset:r.asset_demo_id,location:r.location_demo_id,trade:r.trade,priority:r.priority,status:r.status,owner:r.owner,vendor:r.vendor_name,age:r.age_days,cost:r.cost,sla:r.sla,notes:r.notes},
  proposals:{id:r.demo_id,client:Number(r.client_demo_id||0),location:r.location_demo_id,wo:r.work_order_demo_id,trade:r.trade,amount:r.amount,status:r.status,age:r.age_days,scope:r.scope},
  assets:{id:r.demo_id,client:Number(r.client_demo_id||0),location:r.location_demo_id,asset:r.asset,trade:r.trade,age:r.age,repairs:r.repairs,spend12:r.spend12,replacement:r.replacement,manufacturer:r.manufacturer,model:r.model,installDate:r.install_date},
  vendors:{name:r.name,trades:r.trades,regions:r.regions,score:r.score,response:r.response_hours,sla:r.sla,insurance:r.insurance,status:r.status},
  approvals:{id:r.demo_id,client:Number(r.client_demo_id||0),item:r.item,amount:r.amount,status:r.status,risk:r.risk,owner:r.owner,assignedTo:r.assigned_to},
  users:{name:r.name,role:r.role,access:r.access,client:r.client,status:r.status},
  documents:{id:r.demo_id,client:Number(r.client_demo_id||0),type:r.type,name:r.name,status:r.status,expires:r.expires,owner:r.owner,filePath:r.file_path},
  tenants:{name:r.name,plan:r.plan,users:r.users,roles:r.roles,storage:r.storage,status:r.status},
  audit:{id:r.demo_id,event:r.event,time:r.event_time}
 }[kind]));
}
async function loadFromSupabase(){
 if(!cloudCanWrite()){toast("Local demo mode — sign in to refresh cloud data");return false;}
 const pulls=[
  ["clients",CLOUD_TABLES.clients],["locations",CLOUD_TABLES.locations],["workOrders",CLOUD_TABLES.workOrders],["proposals",CLOUD_TABLES.proposals],
  ["assets",CLOUD_TABLES.assets],["vendors",CLOUD_TABLES.vendors],["approvals",CLOUD_TABLES.approvals],["users",CLOUD_TABLES.users],
  ["documents",CLOUD_TABLES.documents],["tenants",CLOUD_TABLES.tenants],["audit",CLOUD_TABLES.audit]
 ];
 const next={...db};
 for(const [kind,table] of pulls){
  const {data,error}=await supabaseClient.from(table).select("*").limit(1000);
  if(error){console.warn("Cloud load skipped at "+table,error);toast("Cloud refresh unavailable — staying in local demo mode");cloudReady=false;return false;}
  if(data&&data.length) next[kind]=rowsToDemo(kind,data);
 }
 next.activeClient=db.activeClient||0;
 db=next; cloudLastLoad=new Date(); save(); normalizeV24Complete(); normalizeV24(); return true;
}
async function refreshFromCloud(){
 const ok=await loadFromSupabase();
 hydrateSelectors();
 render();
 if(ok){toast("Cloud data loaded");}
}
function forceLocalDemoMode(){cloudReady=false;supabaseClient=null;save();hydrateSelectors();render();toast("Local demo mode active");}
function hydrateSelectors(){
 if(window.clientSelect){clientSelect.innerHTML=db.clients.map((x,i)=>`<option value="${i}">${x.name}</option>`).join("");clientSelect.value=db.activeClient;}
 if(window.loginUserSelect){loginUserSelect.innerHTML=db.users.map(u=>`<option value="${u.name}">${u.name}</option>`).join("");loginUserSelect.value=(localStorage.getItem("commandCenterLoggedUser")||db.users[0]?.name||"Tim Caffrey");}
}
async function uploadWOAttachmentToSupabase(id,file){
 if(!cloudCanWrite()||!file) return null;
 const path=`${id}/${Date.now()}-${file.name}`;
 const {error}=await supabaseClient.storage.from("workorder-photos").upload(path,file,{upsert:true});
 if(error){cloudToastError("Cloud upload failed",error);return null;}
 return path;
}

function downloadSchema(){
 const schema=document.getElementById("schemaText")?.textContent || SUPABASE_SCHEMA_SQL;
 let blob=new Blob([schema],{type:"text/sql"});let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="commandcenter_supabase_schema.sql";a.click();
}
const SUPABASE_SCHEMA_SQL=`-- CommandCenter FM Sprint 1 Supabase Schema
create extension if not exists pgcrypto;

create table if not exists clients (
 id uuid primary key default gen_random_uuid(), demo_id text unique, name text not null, vertical text, locations integer default 0, budget numeric default 0, owner text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists locations (
 id uuid primary key default gen_random_uuid(), demo_id text unique, client_demo_id text, site text not null, region text, address text, market text, district text, latitude double precision, longitude double precision, fm text, risk text, risk_score integer default 0, trade text, spend numeric default 0, open_count integer default 0, repeat_count integer default 0, capex boolean default false, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists work_orders (
 id uuid primary key default gen_random_uuid(), demo_id text unique, client_demo_id text, location_demo_id text, asset_demo_id text, trade text, priority text, status text, owner text, vendor_name text, age_days integer default 0, cost numeric default 0, sla text, notes text, raw jsonb default '{}'::jsonb, created_at timestamptz default now(), updated_at timestamptz default now()
);
create table if not exists proposals (
 id uuid primary key default gen_random_uuid(), demo_id text unique, client_demo_id text, location_demo_id text, work_order_demo_id text, trade text, amount numeric default 0, status text, age_days integer default 0, scope text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists assets (
 id uuid primary key default gen_random_uuid(), demo_id text unique, client_demo_id text, location_demo_id text, asset text, trade text, age integer, repairs integer, spend12 numeric, replacement numeric, manufacturer text, model text, install_date text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists vendors (
 id uuid primary key default gen_random_uuid(), name text unique not null, trades text, regions text, score integer, response_hours numeric, sla integer, insurance text, status text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists approvals (
 id uuid primary key default gen_random_uuid(), demo_id text unique, client_demo_id text, item text, amount numeric, status text, risk text, owner text, assigned_to text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists app_users (
 id uuid primary key default gen_random_uuid(), name text unique not null, role text, access text, client text, status text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists documents (
 id uuid primary key default gen_random_uuid(), demo_id text unique, client_demo_id text, type text, name text, status text, expires text, owner text, file_path text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists tenants (
 id uuid primary key default gen_random_uuid(), name text unique not null, plan text, users integer, roles text, storage text, status text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);
create table if not exists audit_logs (
 id uuid primary key default gen_random_uuid(), demo_id text unique, event text, event_time text, raw jsonb default '{}'::jsonb, created_at timestamptz default now()
);

alter table clients enable row level security;
alter table locations enable row level security;
alter table work_orders enable row level security;
alter table proposals enable row level security;
alter table assets enable row level security;
alter table vendors enable row level security;
alter table approvals enable row level security;
alter table app_users enable row level security;
alter table documents enable row level security;
alter table tenants enable row level security;
alter table audit_logs enable row level security;

-- Prototype policy: authenticated users can read/write. Tighten by tenant/client before selling enterprise.
do $$ begin
 perform 1;
end $$;
create policy if not exists "authenticated read clients" on clients for select to authenticated using (true);
create policy if not exists "authenticated write clients" on clients for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read locations" on locations for select to authenticated using (true);
create policy if not exists "authenticated write locations" on locations for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read work_orders" on work_orders for select to authenticated using (true);
create policy if not exists "authenticated write work_orders" on work_orders for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read proposals" on proposals for select to authenticated using (true);
create policy if not exists "authenticated write proposals" on proposals for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read assets" on assets for select to authenticated using (true);
create policy if not exists "authenticated write assets" on assets for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read vendors" on vendors for select to authenticated using (true);
create policy if not exists "authenticated write vendors" on vendors for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read approvals" on approvals for select to authenticated using (true);
create policy if not exists "authenticated write approvals" on approvals for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read app_users" on app_users for select to authenticated using (true);
create policy if not exists "authenticated write app_users" on app_users for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read documents" on documents for select to authenticated using (true);
create policy if not exists "authenticated write documents" on documents for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read tenants" on tenants for select to authenticated using (true);
create policy if not exists "authenticated write tenants" on tenants for all to authenticated using (true) with check (true);
create policy if not exists "authenticated read audit_logs" on audit_logs for select to authenticated using (true);
create policy if not exists "authenticated write audit_logs" on audit_logs for all to authenticated using (true) with check (true);

insert into storage.buckets (id, name, public) values
 ('workorder-photos','workorder-photos',false),('cois','cois',false),('contracts','contracts',false),('proposals','proposals',false),('invoices','invoices',false),('project-documents','project-documents',false)
on conflict (id) do nothing;
`;

const pages=[
["warroom","🚨 Mission Control","Internal command queue for emergencies, SLA risk, vendor response, proposals, invoices, and missing next actions."],
["amdashboard","👤 AM Dashboard","My work queue, daily touch list, owner performance, account snapshot, and one-click update flow."],
["dashboard","📊 Dashboard","Executive KPIs and portfolio visibility."],
["workorders","📋 Work Orders","Dispatch board, SLA pressure, and status control."],
["pm","🗓️ PM Planner","Preventive maintenance calendar, savings logic, and PM-to-work-order conversion."],
["dispatch","🚨 Dispatch Center","Auto-routing, vendor assignment, and live dispatch command."],
["escalations","🔥 Escalation Center","Auto-detected operational fires by SLA, vendor response, proposal aging, repeat repair, and high spend."],
["sla","📈 SLA Monitor","SLA performance, breach pressure, and escalation visibility."],
["locations","📍 Locations","Site-level risk, spend, and repair history."],
["heatmap","🗺️ Portfolio Heat Map","Visual risk ranking across locations."],
["proposals","📄 Proposals","Approval queue and proposal aging."],
["approvals","✅ Approvals","Customer approval workflow for proposals and capital decisions."],
["assets","🛠️ Assets","Replace-vs-repair intelligence and asset history."],
["vendors","🚚 Vendors","Vendor scorecards and coverage pressure."],
["copilot","🤖 AI Copilot","Portfolio intelligence and executive answers."],
["executive","🎯 Executive Action Center","Top risks, actions, and savings opportunities."],
["cfo","💰 CFO Dashboard","Forecasting, budgeting, and capital planning."],
["projects","🏗️ Projects","Refresh, rollout, remodel, and capex tracker."],
["reports","📑 Board Reports","Auto-generated executive and board reporting."],
["tenant","🏢 Tenant Admin","Multi-client SaaS architecture, roles, storage, and audit trail."],
["documents","🗂️ Documents/COIs","Document repository, COI tracking, and customer files."],
["users","👥 Users/Roles","Role and access model."],
["settings","⚙️ SaaS Setup","Production roadmap and database structure."]
];
const money=n=>Number(n||0).toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0});
const c=()=>db.clients[db.activeClient], scope=a=>a.filter(x=>x.client===db.activeClient), loc=id=>db.locations.find(l=>l.id===id)||{site:"Unknown"};
function save(){localStorage.setItem("commandCenterEnterpriseData",JSON.stringify(db))}
function toast(m){let t=document.getElementById("toast");t.textContent=m;t.style.display="block";setTimeout(()=>t.style.display="none",1600)}
function pill(v){let cls=["Critical","Emergency","Breached","Pressure","At Risk","High"].includes(v)?"red":["Medium","Urgent","Pending","Review","Draft","Watch","Onboarding"].includes(v)?"amber":["Approved","Closed","Strong","Verified","On Track","Active","Stable"].includes(v)?"green":"blue";return `<span class="pill ${cls}">${v}</span>`}
function ai(){let wo=scope(db.workOrders), ps=scope(db.proposals), ls=scope(db.locations), as=scope(db.assets);let at=wo.filter(w=>["At Risk","Breached"].includes(w.sla));let pending=ps.filter(p=>["Pending","Review","Draft"].includes(p.status)).reduce((s,p)=>s+p.amount,0);let repl=as.filter(a=>a.repairs>=5||a.spend12/Math.max(a.replacement,1)>.55);let spend=ls.reduce((s,l)=>s+l.spend,0)+wo.reduce((s,w)=>s+w.cost,0);let health=Math.max(1,100-at.length*9-repl.length*7);let risk=[...ls].sort((a,b)=>(b.open*7+b.repeat*12+b.spend/2500)-(a.open*7+a.repeat*12+a.spend/2500));return{wo,ps,ls,as,at,pending,repl,spend,health,risk}}



// ============================
// V2.10 WORK ORDER TIMELINE ENGINE
// ============================
const WO_LIFECYCLE=[
 "Created","Assigned","Dispatched","Vendor Accepted","On Site","Proposal Needed","Proposal Approved","Completed","Invoice Received","Closed"
];
function lifecycleIndexForStatus(w){
 const status=(w.status||"").toLowerCase();
 if(status.includes("closed")) return 9;
 if((w.invoiceStatus||"")==="Received") return 8;
 if(status.includes("completed")) return 7;
 if(status.includes("approved")) return 6;
 if(status.includes("proposal")) return 5;
 if((w.vendorStatus||"").toLowerCase().includes("on site")) return 4;
 if((w.vendorStatus||"").toLowerCase().includes("accepted")) return 3;
 if(status.includes("dispatched")) return 2;
 if(w.owner) return 1;
 return 0;
}
function ensureTimeline(w){
 if(!w.timeline||!Array.isArray(w.timeline)||!w.timeline.length){
  w.timeline=defaultTimeline(w);
 }
 return w.timeline;
}
function addTimelineEventToWO(w,step,note,by){
 w.timeline=ensureTimeline(w);
 w.timeline.push({step,time:new Date().toLocaleString(),by:by||loggedUser().name,note:note||step});
 w.lastTouch=new Date().toLocaleString();
 return w;
}
function renderLifecycleTimeline(w){
 const idx=lifecycleIndexForStatus(w);
 const events=ensureTimeline(w);
 return `<div class="woTimelineWrap"><h3>Work Order Timeline Engine</h3><p class="muted">Permanent lifecycle trail from creation through closeout.</p><div class="woTimeline">${WO_LIFECYCLE.map((step,i)=>{
  const ev=[...events].reverse().find(e=>e.step===step || String(e.step||"").toLowerCase().includes(step.toLowerCase().split(" ")[0]));
  const cls=i<idx?"done":i===idx?"current":"";
  return `<div class="timelineStep ${cls}"><div class="timelineDot"></div><div class="stepName">${step}</div><div class="stepMeta">${ev?`${ev.time}<br>${ev.by||"System"}`:(i===idx?"Current stage":"Pending")}</div></div>`;
 }).join("")}</div></div>`;
}
function renderAuditTrail(w){
 const events=ensureTimeline(w).slice().reverse();
 return `<div class="tile"><h3>Audit Trail</h3>${events.map(e=>`<div class="auditEvent"><b>${e.step}</b><span>${e.by||"System"} · ${e.time}</span><div class="muted">${e.note||""}</div></div>`).join("")}</div>`;
}
async function advanceWOStage(id,stage){
 let updated=null;
 db.workOrders=db.workOrders.map(w=>{
  if(w.id!==id) return w;
  updated={...w};
  if(stage==="Assigned") updated.status="Assigned";
  if(stage==="Dispatched"){updated.status="Vendor Dispatched"; updated.vendorStatus="Awaiting Acceptance";}
  if(stage==="Vendor Accepted"){updated.status="In Progress"; updated.vendorStatus="Accepted";}
  if(stage==="On Site"){updated.status="In Progress"; updated.vendorStatus="On Site";}
  if(stage==="Proposal Needed") updated.status="Proposal Needed";
  if(stage==="Proposal Approved") updated.status="Proposal Approved";
  if(stage==="Completed"){updated.status="Completed"; updated.invoiceStatus=updated.invoiceStatus||"Pending";}
  if(stage==="Invoice Received") updated.invoiceStatus="Received";
  if(stage==="Closed"){updated.status="Closed"; updated.sla="On Track";}
  updated=addTimelineEventToWO(updated,stage,"Stage advanced to "+stage,loggedUser().name);
  return updated;
 });
 save(); if(updated){await cloudUpsert("workOrders",updated); await cloudInsertAudit("Advanced "+id+" to "+stage);}
 render(); woModal(id); toast("Advanced to "+stage);
}
async function saveSplitNotes(id){
 let updated=null;
 db.workOrders=db.workOrders.map(w=>{
  if(w.id!==id) return w;
  updated={...w,
   internalNotes:document.getElementById("noteInternal")?.value||"",
   customerNotes:document.getElementById("noteCustomer")?.value||"",
   vendorNotes:document.getElementById("noteVendor")?.value||""
  };
  updated=addTimelineEventToWO(updated,"Notes Updated","Internal/customer/vendor notes updated",loggedUser().name);
  return updated;
 });
 save(); if(updated){await cloudUpsert("workOrders",updated); await cloudInsertAudit("Updated split notes for "+id);}
 render(); woModal(id); toast("Notes saved");
}
function nextLifecycleAction(w){
 const idx=Math.min(lifecycleIndexForStatus(w)+1,WO_LIFECYCLE.length-1);
 return WO_LIFECYCLE[idx];
}

function normalizeV29Ops(){
 db.workOrders=db.workOrders.map(w=>({
   nextAction:w.nextAction||defaultNextAction(w),
   dueDate:w.dueDate||defaultDueDate(w),
   lastTouch:w.lastTouch||"Today",
   escalationStatus:w.escalationStatus||(["At Risk","Breached"].includes(w.sla)?"SLA Watch":"None"),
   invoiceStatus:w.invoiceStatus||((w.status==="Completed"||w.status==="Closed")?"Pending":"Not Ready"),
   customerNotes:w.customerNotes||"",
   vendorNotes:w.vendorNotes||"",
   internalNotes:w.internalNotes||"",
   timeline:w.timeline||defaultTimeline(w),
   ...w
 }));
 save();
}
function defaultDueDate(w){let d=new Date();d.setDate(d.getDate()+(w.priority==="Emergency"?0:w.priority==="Urgent"?1:3));return d.toISOString().slice(0,10)}
function defaultNextAction(w){
 if(w.status==="Vendor Dispatched") return "Confirm vendor acceptance and ETA";
 if(w.status==="Proposal Needed") return "Get proposal uploaded and routed for approval";
 if(w.status==="Scheduled") return "Confirm schedule and access notes";
 if(w.status==="In Progress") return "Get vendor update and next milestone";
 if(w.status==="Completed") return "Confirm invoice received and closeout package";
 return "Assign owner, vendor, and next step";
}
function defaultTimeline(w){return [{step:"Created",time:"System",by:w.owner||"Operator",note:"Ticket loaded into CommandCenter"},{step:w.status||"Open",time:w.lastTouch||"Today",by:w.owner||"Operator",note:w.notes||"Current status imported"}]}
function missingNextAction(w){return !(w.owner&&w.nextAction&&w.dueDate)}
function missionQueues(x){
 let emergency=x.wo.filter(w=>w.priority==="Emergency");
 let sla=x.wo.filter(w=>["At Risk","Breached"].includes(w.sla));
 let prop=x.ps.filter(p=>Number(p.age||0)>5);
 let vendor=x.wo.filter(w=>w.status==="Vendor Dispatched"&&!["Accepted","On Site","Completed"].includes(w.vendorStatus));
 let invoice=x.wo.filter(w=>["Completed","Closed"].includes(w.status)&&w.invoiceStatus!=="Received");
 let missing=x.wo.filter(missingNextAction);
 let focus=[...emergency,...sla,...vendor,...missing].filter((v,i,a)=>a.findIndex(x=>x.id===v.id)===i).slice(0,8);
 return {emergency,sla,prop,vendor,invoice,missing,focus};
}
function queueCard(label,count,sub,icon,cls,onclick){return `<div class="queueCard ${cls}" onclick="${onclick}"><div class="queueIcon">${icon}</div><div class="queueCount">${count}</div><div class="queueTitle">${label}</div><div class="queueSub">${sub}</div></div>`}
function showMissionQueue(name){
 let x=ai(),q=missionQueues(x),rows=[];
 if(name==="Emergency") rows=q.emergency;
 if(name==="SLA Risk") rows=q.sla;
 if(name==="Vendor Response") rows=q.vendor;
 if(name==="Missing Next Action") rows=q.missing;
 if(name==="Invoice") rows=q.invoice;
 if(name==="Proposal Aging"){
  openModal(`<h2>Proposal Aging Queue</h2><p class="muted">Proposals older than 5 days.</p>${q.prop.map(p=>`<div class="row"><div><b>${p.id} · ${loc(p.location).site}</b><div class="muted">${p.trade} · ${p.age} days · ${p.scope}</div></div><b>${money(p.amount)}</b></div>`).join("")||"<p class='muted'>No aging proposals.</p>"}`);return;
 }
 openModal(`<h2>${name} Queue</h2><p class="muted">Internal operations queue. Every item should leave with owner, next action, and due date.</p>${rows.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id} · ${loc(w.location).site}</b><div class="muted">${w.trade} · ${w.status} · ${w.nextAction||"Missing next action"}</div></div>${pill(w.sla||w.priority)}</div>`).join("")||"<p class='muted'>Queue is clear.</p>"}`)
}
async function saveOpsFields(id){
 let w=db.workOrders.find(x=>x.id===id); if(!w) return;
 let updated={...w,
  owner:document.getElementById("opsOwner")?.value||w.owner,
  nextAction:document.getElementById("opsNextAction")?.value||w.nextAction,
  dueDate:document.getElementById("opsDueDate")?.value||w.dueDate,
  escalationStatus:document.getElementById("opsEscalation")?.value||w.escalationStatus,
  internalNotes:document.getElementById("opsInternalNotes")?.value||w.internalNotes,
  lastTouch:new Date().toLocaleString()
 };
 updated.timeline=[...(updated.timeline||[]),{step:"Internal Update",time:updated.lastTouch,by:loggedUser().name,note:updated.nextAction}];
 db.workOrders=db.workOrders.map(x=>x.id===id?updated:x);
 save(); await cloudUpsert("workOrders",updated); await cloudInsertAudit("Updated internal ops fields for "+id); render(); woModal(id); toast("Ops fields saved");
}


function normalizeV24Complete(){
 if(!db.approvals) db.approvals=[];
 db.approvals=db.approvals.map(a=>({
   approvalHistory:a.approvalHistory||[{time:"System",event:"Approval created",by:a.owner||"System"}],
   assignedTo:a.assignedTo||a.owner||c().owner,
   ...a
 }));
 db.locations=db.locations.map(l=>({
   address:l.address||"Address pending",
   market:l.market||mapRegionName(l.region),
   district:l.district||"Unassigned",
   latitude:Number.isFinite(Number(l.latitude))?Number(l.latitude):null,
   longitude:Number.isFinite(Number(l.longitude))?Number(l.longitude):null,
   risk_score:Number.isFinite(Number(l.risk_score))?Number(l.risk_score):Math.min(100,Math.round(((l.open||0)*6)+((l.repeat||0)*14)+((l.spend||0)/2000)+(l.capex?15:0))),
   ...l
 }));
 db.assets=db.assets.map(a=>({
   installDate:a.installDate||String(new Date().getFullYear()-Number(a.age||0))+"-01-01",
   manufacturer:a.manufacturer||(["Carrier","Trane","Lennox","York","Rheem"][Math.floor(Math.random()*5)]),
   model:a.model||("M-"+Math.floor(1000+Math.random()*9000)),
   lifecycleEvents:a.lifecycleEvents||[
    {date:"2024-03-12",event:"Preventive maintenance completed",cost:850},
    {date:"2025-06-20",event:"Repair event logged",cost:Math.round((a.spend12||2000)/3)},
    {date:"2026-02-11",event:"Asset condition reviewed",cost:0}
   ],
   ...a
 }));
 save();
}
async function approveRoute(id,status){
 let updated=null;
 db.approvals=db.approvals.map(a=>{if(a.id!==id)return a; updated={...a,status,approvalHistory:[...(a.approvalHistory||[]),{time:new Date().toLocaleString(),event:status,by:loggedUser().name}]}; return updated;});
 await cloudUpsert("approvals",updated);
 await cloudInsertAudit("Approval "+id+" marked "+status);
 save();render();toast(status+(cloudReady?" + synced":""));
}
async function requestRevision(id){
 let updated=null;
 db.approvals=db.approvals.map(a=>{if(a.id!==id)return a; updated={...a,status:"Revision Requested",approvalHistory:[...(a.approvalHistory||[]),{time:new Date().toLocaleString(),event:"Revision requested",by:loggedUser().name}]}; return updated;});
 await cloudUpsert("approvals",updated);
 await cloudInsertAudit("Revision requested for approval "+id);
 save();render();approvalModal(id);toast("Revision requested"+(cloudReady?" + synced":""));
}
function approvalModal(id){
 let a=db.approvals.find(x=>x.id===id); if(!a)return;
 openModal(`<h2>${a.id}</h2><p class="muted">${a.item}</p>
 <div class="grid2"><div class="tile"><b>Amount</b><div class="big">${money(a.amount)}</div></div><div class="tile"><b>Risk</b><div>${pill(a.risk)}</div><p class="muted">Assigned to: ${a.assignedTo||a.owner}</p></div></div>
 <div class="tile"><b>Status</b><p>${pill(a.status)}</p></div>
 <div class="tile"><b>Approval Actions</b><br>
 <button class="btn green" onclick="approveRoute('${a.id}','Approved');closeModal()">Approve</button>
 <button class="btn red" onclick="approveRoute('${a.id}','Rejected');closeModal()">Reject</button>
 <button class="btn" onclick="requestRevision('${a.id}')">Request Revision</button>
 </div>
 <div class="tile"><b>Approval History</b><div class="approvalTrail">${(a.approvalHistory||[]).map(h=>`<div class="event"><b>${h.event}</b><div class="muted">${h.by||"System"} · ${h.time}</div></div>`).join("")}</div></div>`);
}
function downloadExecutiveReport(){
 let x=ai(),f=forecast(x);
 let report=`COMMANDCENTER EXECUTIVE REPORT\n\nClient: ${c().name}\nPortfolio Health: ${x.health}/100\nLocations: ${c().locations}\nOpen Work Orders: ${x.wo.length}\nSLA Risk: ${x.at.length}\nPending Proposal Dollars: ${money(x.pending)}\nReplace Review Assets: ${x.repl.length}\nReplacement Exposure: ${money(f.capex)}\nPotential Savings: ${money(f.savings)}\n\nRecommended Actions:\n1. Review SLA-sensitive work orders.\n2. Approve or reject aging proposals.\n3. Move repeat-failure assets into CAPEX review.\n4. Pressure underperforming vendors.\n`;
 let blob=new Blob([report],{type:"text/plain"});
 let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="CommandCenter_Executive_Report.txt";a.click();
 toast("Executive report downloaded");
}
function locationModal(id){
 let l=db.locations.find(x=>x.id===id); if(!l)return;
 let wos=db.workOrders.filter(w=>w.location===id);
 let assets=db.assets.filter(a=>a.location===id);
 openModal(`<h2>${l.site}</h2><p class="muted">${l.region} · ${l.fm}</p>
 <div class="grid3"><div class="tile"><b>Risk</b><div>${pill(l.risk)} <span class="badge">${riskScore(l)}</span></div></div><div class="tile"><b>Open WO</b><div class="big">${l.open}</div></div><div class="tile"><b>Spend</b><div class="big">${money(l.spend)}</div></div></div><div class="tile"><b>Map Data</b><p class="muted">${l.address||"Address pending"}<br>Market: ${l.market||"Unassigned"} · District: ${l.district||"Unassigned"}<br>Coordinates: ${formatCoord(l.latitude)}, ${formatCoord(l.longitude)}</p></div>
 <div class="tile"><b>Work Orders</b>${wos.length?wos.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id}</b><div class="muted">${w.trade} · ${w.status}</div></div>${pill(w.sla)}</div>`).join(""):"<p class='muted'>No work orders attached.</p>"}</div>
 <div class="tile"><b>Assets</b>${assets.length?assets.map(a=>`<div class="row" onclick="assetLifecycleModal('${a.id}')" style="cursor:pointer"><div><b>${a.asset}</b><div class="muted">${a.trade} · ${a.age} years old</div></div>${pill(predictedFailure(a)>70?"High Risk":"Review")}</div>`).join(""):"<p class='muted'>No assets attached.</p>"}</div>`);
}
function assetLifecycleModal(id){
 let a=db.assets.find(x=>x.id===id); if(!a)return;
 let fail=predictedFailure(a);
 let wos=db.workOrders.filter(w=>w.asset===a.id || (w.location===a.location && (w.trade||"").toLowerCase().includes((a.trade||"").toLowerCase().split("/")[0])));
 let next=fail>70?"Replace within next CAPEX cycle":fail>45?"Quote replacement and monitor failures":"Continue repair/PM path";
 openModal(`<h2>${a.asset}</h2><p class="muted">${loc(a.location).site} · ${a.manufacturer} ${a.model}</p>
 <div class="lifecycleGrid">
  <div class="lifecycleCard"><b>Install Date</b><div>${a.installDate}</div></div>
  <div class="lifecycleCard"><b>Age</b><div class="big">${a.age}</div></div>
  <div class="lifecycleCard"><b>Failure Risk</b><div class="big">${fail}%</div></div>
  <div class="lifecycleCard"><b>Replacement</b><div>${money(a.replacement)}</div></div>
 </div>
 <div class="tile"><b>Lifecycle Recommendation</b><p>${next}</p></div>
 <div class="tile"><b>Lifecycle Events</b><div class="timeline">${(a.lifecycleEvents||[]).map(e=>`<div class="event"><b>${e.event}</b><div class="muted">${e.date} · ${money(e.cost||0)}</div></div>`).join("")}</div></div>
 <div class="tile"><b>Attached Work Orders</b>${wos.length?wos.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id}</b><div class="muted">${w.trade} · ${w.status} · ${w.vendor}</div></div>${pill(w.sla)}</div>`).join(""):"<p class='muted'>No work orders attached.</p>"}</div>`);
}

function normalizeV24(){
 db.workOrders=db.workOrders.map(w=>({
   photos:w.photos||[],
   dispatchHistory:w.dispatchHistory||[],
   vendorStatus:w.vendorStatus||"Not Dispatched",
   ...w
 }));
 db.proposals=db.proposals.map(p=>({
   approvalHistory:p.approvalHistory||[],
   ...p
 }));
 save();
}
function chartBars(items,labelFn,valueFn,maxVal){
 return `<div class="chartbox">`+items.map(i=>{
  let v=valueFn(i); let h=Math.max(6,Math.round((v/Math.max(maxVal,1))*180));
  return `<div class="barcol"><div class="barfill" style="height:${h}px"></div><div class="barlabel">${labelFn(i)}</div></div>`
 }).join("")+`</div>`;
}
function tradeSpendData(x){
 let map={}; x.wo.forEach(w=>map[w.trade]=(map[w.trade]||0)+(w.cost||0));
 return Object.entries(map).map(([trade,spend])=>({trade,spend})).sort((a,b)=>b.spend-a.spend);
}
function statusData(x){
 let map={}; x.wo.forEach(w=>map[w.status]=(map[w.status]||0)+1);
 return Object.entries(map).map(([status,count])=>({status,count}));
}
async function addPhotoToWO(id){
 let input=document.getElementById("photo_"+id);
 if(!input||!input.files||!input.files[0]){toast("Choose a file first");return}
 let f=input.files[0];
 let cloudPath=await uploadWOAttachmentToSupabase(id,f);
 let updated=null;
 db.workOrders=db.workOrders.map(w=>{if(w.id!==id)return w; updated={...w,photos:[...(w.photos||[]),{name:f.name,size:f.size,type:f.type,added:new Date().toLocaleString(),cloudPath}]}; return updated;});
 await cloudUpsert("workOrders",updated);
 await cloudInsertAudit("Photo/document attached to "+id+": "+f.name);
 save();render();woModal(id);toast(cloudPath?"Attachment saved to cloud":"Attachment saved locally");
}
function dispatchToSuggested(id){
 let w=db.workOrders.find(x=>x.id===id); if(!w)return;
 let v=bestVendor(w);
 db.workOrders=db.workOrders.map(wo=>wo.id===id?{
   ...wo,
   vendor:v.name,
   status:"Vendor Dispatched",
   vendorStatus:"Awaiting Acceptance",
   dispatchHistory:[...(wo.dispatchHistory||[]),{time:new Date().toLocaleString(),event:"Dispatched to "+v.name,score:v.routeScore}]
 }:wo);
 db.audit.unshift({id:"LOG-"+Date.now(),event:"Dispatched "+id+" to "+v.name,time:"Just now"});
 save();render();toast("Dispatched");
}
function acceptDispatch(id){
 db.workOrders=db.workOrders.map(w=>w.id===id?{
   ...w,status:"In Progress",vendorStatus:"Accepted",
   dispatchHistory:[...(w.dispatchHistory||[]),{time:new Date().toLocaleString(),event:"Vendor accepted dispatch"}]
 }:w);
 save();render();woModal(id);toast("Vendor accepted");
}
function declineDispatch(id){
 let w=db.workOrders.find(x=>x.id===id); if(!w)return;
 let ranked=db.vendors.map(v=>({...v,routeScore:vendorRouteScore(v,w)})).sort((a,b)=>b.routeScore-a.routeScore);
 let currentIndex=ranked.findIndex(v=>v.name===w.vendor);
 let next=ranked[currentIndex+1]||{name:"National Backstop",routeScore:75};
 db.workOrders=db.workOrders.map(wo=>wo.id===id?{
   ...wo,vendor:next.name,status:"Vendor Dispatched",vendorStatus:"Re-routed",
   dispatchHistory:[...(wo.dispatchHistory||[]),{time:new Date().toLocaleString(),event:"Vendor declined. Re-routed to "+next.name,score:next.routeScore}]
 }:wo);
 save();render();woModal(id);toast("Re-routed");
}
function markArrived(id){
 db.workOrders=db.workOrders.map(w=>w.id===id?{
   ...w,status:"In Progress",vendorStatus:"On Site",
   dispatchHistory:[...(w.dispatchHistory||[]),{time:new Date().toLocaleString(),event:"Vendor marked on site"}]
 }:w);
 save();render();woModal(id);toast("Marked on site");
}
function closeWO(id){
 db.workOrders=db.workOrders.map(w=>w.id===id?{
   ...w,status:"Closed",sla:"On Track",vendorStatus:"Completed",
   dispatchHistory:[...(w.dispatchHistory||[]),{time:new Date().toLocaleString(),event:"Work order completed / closed"}]
 }:w);
 save();render();woModal(id);toast("Closed");
}

function setPage(id){if(!canAccessPage(id)){toast("Role access required");return;} pages.forEach(p=>document.getElementById(p[0]).classList.remove("active"));document.getElementById(id).classList.add("active");document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.id===id));let p=pages.find(x=>x[0]===id);pageTitle.textContent=p[1];pageSub.textContent=p[2];render()}
function setClient(v){db.activeClient=Number(v);save();render()}
async function init(){
 const authed=await initAuthGate();
 if(!authed) return;
 normalizeV24Complete();normalizeV24();normalizeV29Ops();
 const vp=visiblePages();
 nav.innerHTML=vp.map((p,i)=>`<button data-id="${p[0]}" onclick="setPage('${p[0]}')" class="${i==0?'active':''}">${p[1]}</button>`).join("");
 pages.forEach((p,i)=>document.getElementById(p[0])?.classList.toggle("active",i===0&&canAccessPage(p[0])));
 const first=vp[0]||pages[0];
 if(first){document.getElementById(first[0])?.classList.add("active");pageTitle.textContent=first[1];pageSub.textContent=first[2];}
 hydrateSelectors();
 if(cloudReady){try{await loadFromSupabase();hydrateSelectors();}catch(e){console.warn("Startup cloud load failed; local demo continues",e);}}
 ensureSeedDataGuard();
 hydrateSelectors();
 applyRoleUI();
 render();
}
function metric(label,value,sub){return `<div class="card metric"><div class="label">${label}</div><div class="value">${value}</div><div class="sub">${sub}</div></div>`}

function normalizeV211Escalations(){
 if(!db.escalations) db.escalations=[];
 db.workOrders=db.workOrders.map(w=>({escalationOwner:w.escalationOwner||w.owner||loggedUser().name,escalationDue:w.escalationDue||w.dueDate||defaultDueDate(w),escalationStatus:w.escalationStatus||(["At Risk","Breached"].includes(w.sla)?"Open":"None"),...w}));
 save();
}
function escalationSeverity(type,item){
 if(type==="SLA Breach"||item?.sla==="Breached"||item?.risk==="Critical") return "Critical";
 if(type==="High Spend"||type==="Repeat Repair"||item?.priority==="Emergency") return "High";
 if(type==="Vendor Response"||type==="Proposal Aging") return "Medium";
 return "Low";
}
function escalationScore(e){return e.severity==="Critical"?100:e.severity==="High"?80:e.severity==="Medium"?55:30}
function detectedEscalations(x){
 let out=[];
 x.wo.filter(w=>["At Risk","Breached"].includes(w.sla)).forEach(w=>out.push({id:"ESC-SLA-"+w.id,type:"SLA Breach",severity:escalationSeverity("SLA Breach",w),title:w.id+" · "+loc(w.location).site,sourceId:w.id,sourceType:"workOrder",owner:w.escalationOwner||w.owner,nextAction:w.nextAction||defaultNextAction(w),due:w.escalationDue||w.dueDate,status:w.escalationStatus||"Open",detail:w.trade+" · "+w.status+" · "+w.sla}));
 x.wo.filter(w=>w.status==="Vendor Dispatched"&&!["Accepted","On Site","Completed"].includes(w.vendorStatus)).forEach(w=>out.push({id:"ESC-VND-"+w.id,type:"Vendor Response",severity:escalationSeverity("Vendor Response",w),title:w.id+" · Awaiting vendor",sourceId:w.id,sourceType:"workOrder",owner:w.escalationOwner||w.owner,nextAction:"Get vendor acceptance / ETA or reroute",due:w.escalationDue||w.dueDate,status:w.escalationStatus||"Open",detail:(w.vendor||"Vendor")+" · "+loc(w.location).site}));
 x.ps.filter(p=>Number(p.age||0)>5).forEach(p=>out.push({id:"ESC-PROP-"+p.id,type:"Proposal Aging",severity:escalationSeverity("Proposal Aging",p),title:p.id+" · "+loc(p.location).site,sourceId:p.id,sourceType:"proposal",owner:p.owner||c().owner,nextAction:"Push approval decision or revise scope",due:"Today",status:p.escalationStatus||"Open",detail:p.age+" days · "+money(p.amount)+" · "+p.trade}));
 x.as.filter(a=>Number(a.repairs||0)>=5).forEach(a=>out.push({id:"ESC-RPT-"+a.id,type:"Repeat Repair",severity:escalationSeverity("Repeat Repair",a),title:a.id+" · "+a.asset,sourceId:a.id,sourceType:"asset",owner:c().owner,nextAction:"Review repair history and replacement threshold",due:"This week",status:a.escalationStatus||"Open",detail:loc(a.location).site+" · "+a.repairs+" repairs · "+money(a.spend12)}));
 x.ls.filter(l=>Number(l.spend||0)>60000||Number(riskScore(l))>=90).forEach(l=>out.push({id:"ESC-SPEND-"+l.id,type:"High Spend",severity:escalationSeverity("High Spend",l),title:l.site+" · Spend/risk flag",sourceId:l.id,sourceType:"location",owner:l.fm||c().owner,nextAction:"Review open work, capex path, and repeat trades",due:"This week",status:l.escalationStatus||"Open",detail:l.market+" · "+money(l.spend)+" · Risk "+riskScore(l)}));
 return out.sort((a,b)=>escalationScore(b)-escalationScore(a));
}
function escTypeCount(list,type){return list.filter(e=>e.type===type).length}
function escPill(sev){return pill(sev)}
function showEscalation(eid){
 let e=detectedEscalations(ai()).find(x=>x.id===eid); if(!e){toast("Escalation not found");return;}
 let openBtn=e.sourceType==="workOrder"?`<button class="btn dark" onclick="woModal('${e.sourceId}')">Open Work Order</button>`:e.sourceType==="location"?`<button class="btn dark" onclick="openSiteDrawer('${e.sourceId}')">Open Location</button>`:e.sourceType==="asset"?`<button class="btn dark" onclick="assetLifecycleModal('${e.sourceId}')">Open Asset</button>`:`<button class="btn dark" onclick="setPage('proposals')">Open Proposals</button>`;
 openModal(`<h2>${e.type}</h2><p class="muted">${e.title}</p><div class="grid2"><div class="tile"><b>Severity</b><p>${escPill(e.severity)}</p><p class="muted">${e.detail}</p></div><div class="tile"><b>Status</b><p>${pill(e.status)}</p><p class="muted">Due: ${e.due||"Not set"}</p></div></div><div class="tile"><b>Required Next Action</b><p>${e.nextAction}</p></div><div class="tile"><b>Escalation Ownership</b><div class="escalationOwnerGrid"><div><label><b>Owner</b></label><input id="escOwner" value="${e.owner||loggedUser().name}"></div><div><label><b>Due</b></label><input id="escDue" type="date" value="${String(e.due||'').includes('-')?e.due:''}"></div><div><label><b>Status</b></label><select id="escStatus"><option>Open</option><option>In Progress</option><option>Waiting on Vendor</option><option>Waiting on Customer</option><option>Capital Review</option><option>Resolved</option></select></div><div><label><b>Severity</b></label><select id="escSeverity"><option>Critical</option><option>High</option><option>Medium</option><option>Low</option></select></div></div><br><label><b>Next Action</b></label><textarea id="escNextAction" style="width:100%;min-height:90px">${e.nextAction}</textarea><div class="escalationActions"><button class="btn green" onclick="saveEscalationAction('${e.id}')">Save Escalation</button>${openBtn}<button class="btn" onclick="markEscalationResolved('${e.id}')">Mark Resolved</button></div></div>`);
 setTimeout(()=>{let st=document.getElementById('escStatus'); if(st) st.value=e.status||'Open'; let sv=document.getElementById('escSeverity'); if(sv) sv.value=e.severity||'Medium';},0);
}
async function saveEscalationAction(eid){
 let e=detectedEscalations(ai()).find(x=>x.id===eid); if(!e)return;
 let owner=document.getElementById('escOwner')?.value||e.owner;
 let due=document.getElementById('escDue')?.value||e.due;
 let status=document.getElementById('escStatus')?.value||e.status;
 let nextAction=document.getElementById('escNextAction')?.value||e.nextAction;
 if(e.sourceType==="workOrder"){
  let updated=null; db.workOrders=db.workOrders.map(w=>{if(w.id!==e.sourceId)return w; updated={...w,owner,escalationOwner:owner,escalationDue:due,escalationStatus:status,nextAction,lastTouch:new Date().toLocaleString(),timeline:[...(w.timeline||[]),{step:"Escalation Update",time:new Date().toLocaleString(),by:loggedUser().name,note:nextAction}]}; return updated;});
  if(updated) await cloudUpsert("workOrders",updated);
 }
 await cloudInsertAudit("Escalation updated: "+eid+" · "+status);
 save(); render(); closeModal(); toast("Escalation saved");
}
async function markEscalationResolved(eid){
 let e=detectedEscalations(ai()).find(x=>x.id===eid); if(!e)return;
 if(e.sourceType==="workOrder"){
  let updated=null; db.workOrders=db.workOrders.map(w=>{if(w.id!==e.sourceId)return w; updated={...w,escalationStatus:"Resolved",lastTouch:new Date().toLocaleString(),timeline:[...(w.timeline||[]),{step:"Escalation Resolved",time:new Date().toLocaleString(),by:loggedUser().name,note:e.type+" resolved"}]}; return updated;});
  if(updated) await cloudUpsert("workOrders",updated);
 }
 await cloudInsertAudit("Escalation resolved: "+eid);
 save(); render(); closeModal(); toast("Escalation resolved");
}
function renderEscalations(x){
 let all=detectedEscalations(x);
 let critical=all.filter(e=>e.severity==="Critical").length, high=all.filter(e=>e.severity==="High").length;
 escalations.innerHTML=`<div class="escalationHero"><div class="kicker">V2.11 Internal Operations Backbone</div><h1>Escalation Center</h1><p>Auto-detected operational fires across SLA breaches, vendor response gaps, proposal aging, repeat repairs, and high-spend locations. Every escalation gets an owner, next action, due date, and resolution trail.</p></div>
 <div class="escalationGrid">
  <div class="escalationCard severityRail critical" onclick="setPage('sla')"><div class="count">${escTypeCount(all,'SLA Breach')}</div><div class="label">SLA breach</div><div class="sub">At Risk / Breached WOs</div></div>
  <div class="escalationCard severityRail medium" onclick="showMissionQueue('Vendor Response')"><div class="count">${escTypeCount(all,'Vendor Response')}</div><div class="label">Vendor response</div><div class="sub">Dispatched, not accepted</div></div>
  <div class="escalationCard severityRail medium" onclick="showMissionQueue('Proposal Aging')"><div class="count">${escTypeCount(all,'Proposal Aging')}</div><div class="label">Proposal aging</div><div class="sub">Older than 5 days</div></div>
  <div class="escalationCard severityRail high" onclick="setPage('assets')"><div class="count">${escTypeCount(all,'Repeat Repair')}</div><div class="label">Repeat repair</div><div class="sub">Assets over threshold</div></div>
  <div class="escalationCard severityRail high" onclick="setPage('heatmap')"><div class="count">${escTypeCount(all,'High Spend')}</div><div class="label">High spend</div><div class="sub">Location burn flags</div></div>
 </div>
 <div class="grid2"><div class="card"><h3>Active Fire Board</h3>${all.map(e=>`<div class="fireRow severityRail ${String(e.severity).toLowerCase()}" onclick="showEscalation('${e.id}')"><div>${escPill(e.severity)}</div><div><b>${e.title}</b><div class="muted">${e.type} · ${e.detail}</div></div><div><b>${e.owner||'Unassigned'}</b><div class="muted">Owner</div></div><div><b>${e.due||'Not set'}</b><div class="muted">Due</div></div></div>`).join('')||"<p class='muted'>No escalations detected.</p>"}</div><div class="card"><h3>Escalation Summary</h3><div class="row"><b>Critical</b><span>${critical}</span></div><div class="row"><b>High</b><span>${high}</span></div><div class="row"><b>Total Active</b><span>${all.length}</span></div><div class="row"><b>Rule</b><span>No fire without owner + next action</span></div><div class="tile"><b>Next build hook</b><p class="muted">This becomes the notification center for email/SMS/vendor/customer alerts in V2.12.</p></div></div></div>`;
}

// ============================
// V2.12 ACCOUNT MANAGER DASHBOARD + DAILY TOUCH LIST
// ============================
function isOwnedByUser(w,user){
 const u=(user?.name||'').toLowerCase();
 return (w.owner||'').toLowerCase()===u || (w.escalationOwner||'').toLowerCase()===u || user?.access==='Admin';
}
function daysSinceTouch(w){
 if(!w.lastTouch||w.lastTouch==='Today') return 0;
 let d=new Date(w.lastTouch);
 if(isNaN(d.getTime())) return Number(w.age||0)>1?2:0;
 return Math.max(0,Math.floor((Date.now()-d.getTime())/86400000));
}
function isDueToday(w){
 if(!w.dueDate) return false;
 let today=new Date().toISOString().slice(0,10);
 return w.dueDate===today;
}
function isOverdue(w){
 if(!w.dueDate) return false;
 let today=new Date().toISOString().slice(0,10);
 return w.dueDate<today && !['Closed','Completed'].includes(w.status);
}
function needsCustomerUpdate(w){return ['At Risk','Breached'].includes(w.sla)||daysSinceTouch(w)>=1||w.status==='Proposal Needed'}
function needsVendorFollowUp(w){return w.status==='Vendor Dispatched'&&!['Accepted','On Site','Completed'].includes(w.vendorStatus)}
function amQueues(x){
 let user=loggedUser();
 let mine=x.wo.filter(w=>isOwnedByUser(w,user));
 let dueToday=mine.filter(isDueToday);
 let overdue=mine.filter(isOverdue);
 let missing=mine.filter(missingNextAction);
 let sla=mine.filter(w=>['At Risk','Breached'].includes(w.sla));
 let stale=mine.filter(w=>daysSinceTouch(w)>=1);
 let vendor=mine.filter(needsVendorFollowUp);
 let customer=mine.filter(needsCustomerUpdate);
 let proposals=x.ps.filter(p=>p.client===db.activeClient && (Number(p.age||0)>3 || ['Pending','Review','Draft'].includes(p.status)));
 let daily=[...overdue,...dueToday,...sla,...vendor,...missing,...stale].filter((v,i,a)=>a.findIndex(x=>x.id===v.id)===i).slice(0,12);
 let closedWeek=mine.filter(w=>['Closed','Completed'].includes(w.status)).length;
 let avgAge=mine.length?Math.round(mine.reduce((s,w)=>s+Number(w.age||0),0)/mine.length):0;
 return {user,mine,dueToday,overdue,missing,sla,stale,vendor,customer,proposals,daily,closedWeek,avgAge};
}
function amQueueCard(label,count,sub,cls,queue){return `<div class="amQueueCard ${cls}" onclick="showAMQueue('${queue}')"><div class="num">${count}</div><div class="label">${label}</div><div class="sub">${sub}</div></div>`}
function showAMQueue(queue){
 let x=ai(), q=amQueues(x), rows=[];
 if(queue==='mine') rows=q.mine; if(queue==='due') rows=q.dueToday; if(queue==='overdue') rows=q.overdue; if(queue==='missing') rows=q.missing; if(queue==='sla') rows=q.sla; if(queue==='stale') rows=q.stale; if(queue==='vendor') rows=q.vendor; if(queue==='customer') rows=q.customer;
 if(queue==='proposals'){openModal(`<h2>Proposal Follow-Up Queue</h2><p class="muted">Pending, review, draft, or aging proposals tied to this account.</p>${q.proposals.map(p=>`<div class="row"><div><b>${p.id} · ${loc(p.location).site}</b><div class="muted">${p.trade} · ${p.status} · ${p.age} days · ${p.scope}</div></div><b>${money(p.amount)}</b></div>`).join('')||"<p class='muted'>No proposal follow-ups right now.</p>"}`);return;}
 openModal(`<h2>${queueLabel(queue)}</h2><p class="muted">Click any work order to open the full timeline, notes, ownership, and escalation controls.</p>${rows.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id} · ${loc(w.location).site}</b><div class="muted">${w.trade} · ${w.status} · Due ${w.dueDate||'missing'} · Next: ${w.nextAction||'Missing next action'}</div></div>${pill(isOverdue(w)?'Overdue':(w.sla||w.priority))}</div>`).join('')||"<p class='muted'>Queue is clear.</p>"}`);
}
function queueLabel(q){return {mine:'My Work Queue',due:'Due Today',overdue:'Overdue Work',missing:'Missing Next Action',sla:'SLA Risk',stale:'No Touch / Stale Updates',vendor:'Vendor Follow-Up',customer:'Customer Update Needed',proposals:'Proposal Follow-Up'}[q]||'AM Queue'}
function renderAMDashboard(x){
 let q=amQueues(x);
 let spend=x.ls.reduce((s,l)=>s+Number(l.spend||0),0);
 let top=x.risk[0]||{};
 amdashboard.innerHTML=`<div class="amHero"><div class="kicker">V2.12 Account Manager Operating View</div><h1>${q.user.name}'s Daily Command Board</h1><p>What is mine, what is late, what needs a touch today, and what could blow up if nobody owns the next action. Built for account managers, dispatch leads, and internal operators.</p></div>
 <div class="amQueueGrid">
  ${amQueueCard('My Open WOs',q.mine.length,'Assigned or admin-visible','dark','mine')}
  ${amQueueCard('Due Today',q.dueToday.length,'Next action due now','blue','due')}
  ${amQueueCard('Overdue',q.overdue.length,'Past due date','red','overdue')}
  ${amQueueCard('SLA Risk',q.sla.length,'At risk or breached','amber','sla')}
  ${amQueueCard('Missing Next Action',q.missing.length,'Owner/date/action gaps','red','missing')}
 </div>
 <div class="grid2">
  <div class="card"><h3>Daily Touch List</h3><p class="muted">Priority queue for today. Every item needs a documented next action before it leaves the board.</p><div class="amDailyList">${q.daily.map(w=>`<div class="amTouchItem" onclick="woModal('${w.id}')"><div><b>${w.id}</b><div class="muted">${w.dueDate||'No due date'}</div></div><div><b>${loc(w.location).site}</b><div class="muted">${w.trade} · ${w.status} · Owner: ${w.owner||'Missing'}</div><div class="muted">Next: ${w.nextAction||'Missing next action'}</div></div><div>${pill(isOverdue(w)?'Overdue':missingNextAction(w)?'Missing Next Action':w.sla)}</div></div>`).join('')||"<p class='muted'>Daily touch list is clear.</p>"}</div></div>
  <div class="card"><h3>Owner Performance Snapshot</h3><div class="amPerfGrid"><div class="amPerfCard"><div class="muted">Open WOs</div><b>${q.mine.length}</b></div><div class="amPerfCard"><div class="muted">Closed / completed</div><b>${q.closedWeek}</b></div><div class="amPerfCard"><div class="muted">Avg age</div><b>${q.avgAge}d</b></div><div class="amPerfCard"><div class="muted">No-touch items</div><b>${q.stale.length}</b></div></div><br><h3>One-Click Queue Actions</h3><div class="amActionBar"><button class="btn" onclick="showAMQueue('vendor')">Vendor Follow-Ups: ${q.vendor.length}</button><button class="btn" onclick="showAMQueue('customer')">Customer Updates: ${q.customer.length}</button><button class="btn" onclick="showAMQueue('proposals')">Proposal Follow-Up: ${q.proposals.length}</button><button class="btn dark" onclick="openAMQuickUpdate()">Quick Update</button></div><div class="tile"><b>CommandCenter Rule</b><p class="muted">No work order should sit without an owner, next action, due date, and last-touch record.</p></div></div>
 </div>
 <div class="grid2" style="margin-top:16px">
  <div class="card"><h3>Account Portfolio Snapshot</h3><div class="row"><b>Client</b><span>${c().name}</span></div><div class="row"><b>Open WOs</b><span>${x.wo.length}</span></div><div class="row"><b>Pending proposals</b><span>${q.proposals.length}</span></div><div class="row"><b>Visible spend</b><span>${money(spend)}</span></div><div class="row"><b>Top risky site</b><span>${top.site||'None'}</span></div></div>
  <div class="card"><h3>Risk + Follow-Up Tags</h3><span class="amBadge">${q.overdue.length} overdue</span><span class="amBadge">${q.vendor.length} vendor follow-ups</span><span class="amBadge">${q.customer.length} customer updates</span><span class="amBadge">${q.proposals.length} proposal touches</span><span class="amBadge">${q.stale.length} stale updates</span><span class="amBadge">${q.sla.length} SLA fires</span><div class="tile"><b>Next build hook</b><p class="muted">This dashboard becomes the morning email digest and push notification center in the next notification build.</p></div></div>
 </div>`;
}
function openAMQuickUpdate(){
 let x=ai(), q=amQueues(x);
 openModal(`<h2>AM Quick Update</h2><p class="muted">Fast next-action update for anything in your work queue.</p><div class="quickUpdateGrid"><select id="quickWo">${q.mine.map(w=>`<option value="${w.id}">${w.id} · ${loc(w.location).site}</option>`).join('')}</select><input id="quickDue" type="date" value="${new Date().toISOString().slice(0,10)}"/></div><br><input id="quickAction" style="width:100%" placeholder="Next action"/><br><br><textarea id="quickNote" style="width:100%;min-height:90px" placeholder="Internal note"></textarea><br><br><button class="btn dark" onclick="submitAMQuickUpdate()">Save Quick Update</button>`);
}
async function submitAMQuickUpdate(){
 let id=document.getElementById('quickWo')?.value; let action=document.getElementById('quickAction')?.value; let due=document.getElementById('quickDue')?.value; let note=document.getElementById('quickNote')?.value;
 if(!id||!action){toast('Pick a WO and enter a next action');return;}
 let updated=null; db.workOrders=db.workOrders.map(w=>{if(w.id!==id)return w; updated={...w,nextAction:action,dueDate:due||w.dueDate,internalNotes:[w.internalNotes,note].filter(Boolean).join('\n'),lastTouch:new Date().toLocaleString(),timeline:[...(w.timeline||[]),{step:'AM Quick Update',time:new Date().toLocaleString(),by:loggedUser().name,note:action}]}; return updated;});
 save(); if(updated) await cloudUpsert('workOrders',updated); await cloudInsertAudit('AM quick update saved for '+id); closeModal(); render(); toast('Quick update saved');
}

function render(){applyRoleUI();let x=ai(), q=(search.value||"").toLowerCase();metrics.innerHTML=metric("Portfolio Health",x.health+"/100","AI operating score")+metric("Open Work Orders",x.wo.length,x.at.length+" at risk/breached")+metric("Pending Proposal $",money(x.pending),"Awaiting approval")+metric("Replace Reviews",x.repl.length,"Capex candidates");renderWarroom(x);renderAMDashboard(x);renderDashboard(x);renderWO(x,q);renderPMPlanner(x);renderDispatch(x);renderEscalations(x);renderSLA(x);renderLocations(x,q);renderHeatMap(x);renderProposals(x);renderApprovals();renderAssetHistory(x);renderVendorCards();renderCopilot(x);renderExecutive(x);renderCFO(x);renderProjects(x);renderBoardReports(x);renderTenant();renderDocuments();renderUsers();renderSettings()}
function renderWarroom(x){
let user=loggedUser();
let mq=missionQueues(x);
let top=x.risk[0]||{};
let proposalDollars=mq.prop.reduce((s,p)=>s+Number(p.amount||0),0);
warroom.innerHTML=`<div class="card"><div class="missionHero"><div class="kicker">Internal Operations Backbone</div><h1>CC COMMANDCENTER MISSION CONTROL</h1><p>${greeting()}, ${user.name}. Run your portfolio with AI. This is the fire board: emergencies, SLA pressure, proposal aging, vendor response, invoice closeout, and missing next actions across ${c().locations.toLocaleString()} locations.</p></div>
<div class="queueGrid">
${queueCard("Emergency Queue",mq.emergency.length,"Priority = Emergency","🔴","redline","showMissionQueue('Emergency')")}
${queueCard("SLA Risk Queue",mq.sla.length,"At risk or breached","🟠","amberline","showMissionQueue('SLA Risk')")}
${queueCard("Proposal Aging",mq.prop.length,money(proposalDollars)+" over 5 days","🟡","darkline","showMissionQueue('Proposal Aging')")}
${queueCard("Vendor Response",mq.vendor.length,"Dispatched, not accepted","🔵","blueline","showMissionQueue('Vendor Response')")}
${queueCard("Invoice Queue",mq.invoice.length,"Complete, not invoiced","🟢","greenline","showMissionQueue('Invoice')")}
</div>
<div class="missionTabs"><button onclick="showMissionQueue('Missing Next Action')">⚠ Missing Next Action: ${mq.missing.length}</button><button onclick="setPage('workorders')">Open Work Orders</button><button onclick="setPage('dispatch')">Dispatch Center</button><button onclick="setPage('approvals')">Approvals</button><button onclick="setPage('heatmap')">Map</button></div>
</div>
<div class="grid2" style="margin-top:16px">
<div class="card"><h3>Today's Focus</h3>
${mq.focus.map((w,i)=>`<div class="focusItem" onclick="woModal('${w.id}')"><div><b>${w.id}</b><div class="muted">${loc(w.location).market||loc(w.location).region}</div></div><div><b>${loc(w.location).site}</b><div class="muted">${w.trade} · ${w.status} · Owner: ${w.owner||"Missing"}</div><div class="muted">Next: ${w.nextAction||"Missing next action"}</div></div><div>${pill(missingNextAction(w)?"Missing Next Action":(w.sla||w.priority))}</div></div>`).join("")||"<p class='muted'>No priority items in today's focus.</p>"}
</div>
<div class="card"><h3>Operating Snapshot</h3>
<div class="opsFields"><div class="opsField"><b>Portfolio Health</b><div>${x.health}/100</div></div><div class="opsField"><b>Pending Proposal $</b><div>${money(x.pending)}</div></div><div class="opsField"><b>Escalations</b><div>${mq.sla.length+mq.emergency.length}</div></div><div class="opsField"><b>Missing Next Actions</b><div class="${mq.missing.length?'warningText':''}">${mq.missing.length}</div></div></div>
<br><h3>Biggest Portfolio Risk</h3>
${top.site?`<div class="row" onclick="openSiteDrawer('${top.id}')" style="cursor:pointer"><div><b>${top.site}</b><div class="muted">${top.market||top.region} · ${top.district||"Unassigned"} · ${top.trade}</div></div>${pill(top.risk)}</div><div class="row"><b>Open Work Orders</b><span>${top.open}</span></div><div class="row"><b>Repeat Repairs</b><span>${top.repeat}</span></div><div class="row"><b>Visible Spend</b><span>${money(top.spend)}</span></div>`:"<p class='muted'>No location risk data available.</p>"}
</div>
</div>`}
function renderDashboard(x){
let spend=tradeSpendData(x);
let statuses=statusData(x);
let maxSpend=Math.max(...spend.map(i=>i.spend),1);
let maxStatus=Math.max(...statuses.map(i=>i.count),1);
let pct=Math.min(100,Math.round(x.spend/c().budget*100));
dashboard.innerHTML=`<div class="grid2">
<div class="card"><h3>Spend by Trade</h3>${chartBars(spend,i=>i.trade,i=>i.spend,maxSpend)}</div>
<div class="card"><h3>Work Orders by Status</h3>${chartBars(statuses,i=>i.status,i=>i.count,maxStatus)}</div>
</div>
<div class="grid2" style="margin-top:16px">
<div class="card"><h3>Budget Position</h3><div class="big">${money(x.spend)}</div><p class="muted">Visible spend against ${money(c().budget)} annual budget.</p><div class="bar"><span style="width:${pct}%"></span></div></div>
<div class="card"><h3>Client Profile</h3><div class="row"><b>Vertical</b><span>${c().vertical}</span></div><div class="row"><b>Locations</b><span>${c().locations.toLocaleString()}</span></div><div class="row"><b>Executive Owner</b><span>${c().owner}</span></div></div>
</div>`}

function woModal(id){
 let w=db.workOrders.find(x=>x.id===id);
 if(!w){toast("Work order not found");return;}
 let a=db.assets.find(x=>x.id===w.asset);
 let p=db.proposals.filter(x=>x.wo===w.id);
 let v=db.vendors.find(x=>x.name===w.vendor);
 let suggested=typeof bestVendor==="function"?bestVendor(w):{name:w.vendor||"TBD",routeScore:"N/A"};
 let photos=w.photos||[];
 let history=w.dispatchHistory||[];
 openModal(`<h2>${w.id}</h2>
 <p class="muted">${loc(w.location).site} · ${w.trade} · ${w.priority}</p>
 <div class="grid2">
   <div class="tile"><b>Status</b><div>${pill(w.status)} ${pill(w.sla)}</div><p class="muted">Age: ${w.age} days · Owner: ${w.owner}</p></div>
   <div class="tile"><b>Vendor</b><p>${w.vendor}</p><p class="muted">${v?`Score ${v.score} · SLA ${v.sla}% · Response ${v.response} hrs`:"Vendor scorecard not attached yet."}</p></div>
 </div>
 <div class="tile"><b>Scope / Notes</b><p>${w.notes||"No notes entered."}</p></div>
 ${renderLifecycleTimeline(w)}
 <div class="tile"><h3>Move Work Order Forward</h3><p class="muted">Next recommended action: <b>${nextLifecycleAction(w)}</b></p><div class="lifecycleActions">${WO_LIFECYCLE.slice(1).map(st=>`<button class="btn" onclick="advanceWOStage('${w.id}','${st}')">${st}</button>`).join("")}</div></div>
 <div class="tile"><h3>Split Notes</h3><div class="noteSplitGrid"><div class="noteBox"><label>Internal Notes</label><textarea id="noteInternal" placeholder="Private internal ops notes">${w.internalNotes||""}</textarea></div><div class="noteBox"><label>Customer Notes</label><textarea id="noteCustomer" placeholder="Customer-facing update">${w.customerNotes||""}</textarea></div><div class="noteBox"><label>Vendor Notes</label><textarea id="noteVendor" placeholder="Vendor instructions">${w.vendorNotes||""}</textarea></div></div><br><button class="btn dark" onclick="saveSplitNotes('${w.id}')">Save Split Notes</button></div>
 ${renderAuditTrail(w)}
 <div class="tile"><b>Internal Ownership Engine</b>
   <div class="grid2">
    <div><label><b>Owner</b></label><input id="opsOwner" style="width:100%" value="${w.owner||''}"/></div>
    <div><label><b>Due Date</b></label><input id="opsDueDate" type="date" style="width:100%" value="${w.dueDate||''}"/></div>
    <div><label><b>Escalation Status</b></label><select id="opsEscalation" style="width:100%"><option ${w.escalationStatus==='None'?'selected':''}>None</option><option ${w.escalationStatus==='SLA Watch'?'selected':''}>SLA Watch</option><option ${w.escalationStatus==='Vendor Pressure'?'selected':''}>Vendor Pressure</option><option ${w.escalationStatus==='Executive Alert'?'selected':''}>Executive Alert</option></select></div>
    <div><label><b>Last Touch</b></label><input style="width:100%" value="${w.lastTouch||'Not touched'}" disabled/></div>
   </div><br>
   <label><b>Next Action</b></label><input id="opsNextAction" style="width:100%" value="${w.nextAction||''}" placeholder="Required next action"/>
   <br><br><label><b>Internal Notes</b></label><textarea id="opsInternalNotes" style="width:100%;min-height:80px">${w.internalNotes||''}</textarea>
   <br><br><button class="btn dark" onclick="saveOpsFields('${w.id}')">Save Ops Fields</button> ${missingNextAction(w)?'<span class="warningText"> ⚠ Missing owner, next action, or due date</span>':''}
 </div>
 <div class="grid2">
   <div class="tile"><b>Cost / NTE</b><div class="big">${money(w.cost)}</div></div>
   <div class="tile"><b>Attached Asset</b><p>${a?`<button class="btn dark" onclick="assetLifecycleModal('${a.id}')">${a.asset}</button>`:"No asset attached"}</p></div>
 </div>
 <div class="tile"><b>Photo / Document Attachments</b>
   <p class="muted">Prototype saves file metadata locally for review. Production will store images/docs in secure cloud storage.</p>
   <input type="file" id="photo_${w.id}" />
   <button class="btn" onclick="addPhotoToWO('${w.id}')">Attach</button>
   <div class="photoGrid">${photos.length?photos.map(ph=>`<div class="photoThumb">📎 ${ph.name}<br><span class="muted">${Math.round((ph.size||0)/1024)} KB · ${ph.added}</span></div>`).join(""):"<p class='muted'>No attachments yet.</p>"}</div>
 </div>
 <div class="tile"><b>Vendor Dispatch Workflow</b>
   <div class="dispatchStep"><b>Recommended Vendor:</b> ${suggested.name} <span class="badge">Route Score ${suggested.routeScore}</span></div>
   <button class="btn dark" onclick="dispatchToSuggested('${w.id}');closeModal()">Dispatch Suggested Vendor</button>
   <button class="btn green" onclick="acceptDispatch('${w.id}')">Accept</button>
   <button class="btn" onclick="markArrived('${w.id}')">Mark On Site</button>
   <button class="btn red" onclick="declineDispatch('${w.id}')">Decline / Re-route</button>
   <button class="btn" onclick="closeWO('${w.id}')">Close WO</button>
   <div class="timeline" style="margin-top:12px">${history.length?history.map(h=>`<div class="event"><b>${h.event}</b><div class="muted">${h.time}</div></div>`).join(""):"<p class='muted'>No dispatch activity yet.</p>"}</div>
 </div>
 <div class="tile"><b>Related Proposals</b>${p.length?p.map(pr=>`<div class="row"><div><b>${pr.id}</b><div class="muted">${pr.scope}</div></div><b>${money(pr.amount)}</b></div>`).join(""):"<p class='muted'>No related proposal.</p>"}</div>
 <div class="tile"><b>Operator Actions</b><br>
   <button class="btn dark" onclick="routeWO('${w.id}');closeModal()">Auto Route</button>
   <button class="btn red" onclick="escalateWO('${w.id}');closeModal()">Escalate</button>
 </div>`);
}

function renderWO(x,q){
let rows=x.wo.filter(w=>(w.id+w.trade+w.status+w.vendor+w.owner+w.nextAction+loc(w.location).site).toLowerCase().includes(q));
workorders.innerHTML=table("Work Order Operating Queue",["WO","Location","Trade","Priority","Status","SLA","Owner","Next Action","Due","View"],rows.map(w=>`<tr onclick="woModal('${w.id}')" style="cursor:pointer"><td><button class="btn dark" onclick="event.stopPropagation();woModal('${w.id}')">${w.id}</button></td><td>${loc(w.location).site}</td><td>${w.trade}</td><td>${pill(w.priority)}</td><td>${pill(w.status)}</td><td>${pill(w.sla)}</td><td>${w.owner||"Missing"}</td><td>${w.nextAction||"<span class='warningText'>Missing</span>"}</td><td>${w.dueDate||"<span class='warningText'>Missing</span>"}</td><td><button class="btn" onclick="event.stopPropagation();woModal('${w.id}')">Open</button></td></tr>`).join(""))}
function renderLocations(x,q){
let rows=x.ls.filter(l=>(l.site+l.region+l.fm+l.trade+l.risk).toLowerCase().includes(q));
locations.innerHTML=table("Location Intelligence",["Site","Region","Owner","Risk Trade","Risk","Open WO","Spend","CapEx","View"],rows.map(l=>`<tr onclick="locationModal('${l.id}')" style="cursor:pointer"><td><button class="btn dark" onclick="event.stopPropagation();locationModal('${l.id}')">${l.site}</button></td><td>${l.region}</td><td>${l.fm}</td><td>${l.trade}</td><td>${pill(l.risk)}</td><td>${l.open}</td><td><b>${money(l.spend)}</b></td><td>${l.capex?pill("Review"):pill("Stable")}</td><td><button class="btn" onclick="event.stopPropagation();locationModal('${l.id}')">Open</button></td></tr>`).join(""))}
function renderProposals(x){proposals.innerHTML=table("Proposal Workflow",["Proposal","Location","Trade","Amount","Status","Age","Scope","Actions"],x.ps.map((p,i)=>`<tr><td><b>${p.id}</b></td><td>${loc(p.location).site}</td><td>${p.trade}</td><td><b>${money(p.amount)}</b></td><td>${pill(p.status)}</td><td>${p.age} days</td><td>${p.scope}</td><td><button class="btn green" onclick="setProp('${p.id}','Approved')">Approve</button> <button class="btn red" onclick="setProp('${p.id}','Rejected')">Reject</button></td></tr>`).join(""))}
function renderAssets(x){assets.innerHTML=table("Replace-vs-Repair Engine",["Asset","Location","Trade","Age","Repairs","12 Mo Spend","Replacement","Recommendation"],x.as.map(a=>{let r=a.repairs>=5||a.spend12/Math.max(a.replacement,1)>.55;return`<tr><td><b>${a.asset}</b></td><td>${loc(a.location).site}</td><td>${a.trade}</td><td>${a.age}</td><td>${a.repairs}</td><td><b>${money(a.spend12)}</b></td><td>${money(a.replacement)}</td><td>${r?pill("Replace Review"):pill("Repair")}</td></tr>`}).join(""))}
function renderVendors(){vendors.innerHTML=table("Vendor Command",["Vendor","Trades","Regions","Score","Avg Response","SLA","Insurance","Status"],db.vendors.map(v=>`<tr><td><b>${v.name}</b></td><td>${v.trades}</td><td>${v.regions}</td><td><b>${v.score}</b></td><td>${v.response} hrs</td><td>${v.sla}%</td><td>${pill(v.insurance)}</td><td>${pill(v.status)}</td></tr>`).join(""))}
function renderProjects(x){projects.innerHTML=`<div class="grid2"><div class="card"><h3>Refresh / Rollout Tracker</h3><p>Tracks remodels, reimages, capex work, rollout programs, GC packages, owner-procured scopes, and contractor-procured scopes.</p><div class="row"><b>Annual volume question</b><span>Required discovery</span></div><div class="row"><b>Package control</b><span>GC vs trade vs owner-procured</span></div></div><div class="card"><h3>Project Proposals</h3>${x.ps.map(p=>`<div class="row"><div><b>${p.id} · ${loc(p.location).site}</b><div class="muted">${p.scope}</div></div><b>${money(p.amount)}</b></div>`).join("")}</div></div>`}
function renderReports(x){reports.innerHTML=`<div class="card"><h3>Executive Report Generator</h3><div class="aihero"><div class="kicker">Report Draft</div><h1>${c().name}: Portfolio Control Summary</h1><p>Open work orders: ${x.wo.length}. Pending proposal dollars: ${money(x.pending)}. Replace-review assets: ${x.repl.length}. Health score: ${x.health}/100.</p></div><br><button class="btn dark" onclick="copyReport()">Copy Executive Summary</button></div>`}
function renderUsers(){users.innerHTML=table("Users, Roles & Permissions",["User","Role","Access","Client","Status"],db.users.map(u=>`<tr><td><b>${u.name}</b></td><td>${u.role}</td><td>${pill(u.access)}</td><td>${u.client}</td><td>${pill(u.status)}</td></tr>`).join(""))}
function renderSettings(){settings.innerHTML=`<div class="grid2">
<div class="card"><h3>V2.13 Staging / Cloud Foundation</h3>
<div class="cloudStatus"><span class="cloudDot ${cloudDotClass()}"></span>${cloudModeLabel()}</div>
<br><br>
<div class="row"><b>Database</b><span>Supabase / Postgres schema ready</span></div>
<div class="row"><b>Authentication</b><span>Supabase Auth hooks installed</span></div>
<div class="row"><b>Storage Buckets</b><span>${STORAGE_BUCKETS.join(", ")}</span></div>
<div class="row"><b>Fallback</b><span>Local demo remains active</span></div>
<hr style="border:0;border-top:1px solid var(--line);margin:16px 0">
<label><b>Supabase Email</b></label><input id="cloudEmail" style="width:100%" placeholder="admin@company.com"/>
<br><br><label><b>Password</b></label><input id="cloudPassword" type="password" style="width:100%" placeholder="••••••••"/>
<br><br><button class="btn dark" onclick="cloudSignIn()">Sign In</button> <button class="btn" onclick="cloudSignOut()">Sign Out</button> <button class="btn green" onclick="syncDemoToSupabase()">Sync Demo Data</button> <button class="btn" onclick="refreshFromCloud()">Refresh From Cloud</button> <button class="btn" onclick="forceLocalDemoMode()">Use Local Demo</button>
<p class="muted">V2.9 upgrade: Mission Control internal ops backbone added. Work orders now enforce owner, next action, due date, last touch, escalation status, invoice status, and timeline data while preserving Supabase/local fallback.</p>
</div>
<div class="card"><h3>Current Data Snapshot</h3><pre>${JSON.stringify({clients:db.clients.length,locations:db.locations.length,workOrders:db.workOrders.length,proposals:db.proposals.length,assets:db.assets.length,vendors:db.vendors.length,users:db.users.length},null,2)}</pre><button class="btn red" onclick="resetDemo()">Reset Demo Data</button></div>
</div>
<div class="card" style="margin-top:16px"><h3>Supabase SQL Schema</h3><p class="muted">Run this in Supabase SQL Editor to create Sprint 1 tables, policies, and private storage buckets.</p><button class="btn dark" onclick="downloadSchema()">Download SQL Schema</button><div id="schemaText" class="codebox" style="margin-top:12px">${SUPABASE_SCHEMA_SQL.replace(/</g,"&lt;")}</div></div>`}
function table(title,heads,body){return`<div class="card"><h3>${title}</h3><div class="scroll"><table><thead><tr>${heads.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${body}</tbody></table></div></div>`}

function optionList(arr,labelFn,valFn){
 return arr.map(x=>`<option value="${valFn(x)}">${labelFn(x)}</option>`).join("");
}

function openWOForm(){if(!hasPermission("create_work_order")){toast("Your role cannot create work orders");return;}
 let ls=scope(db.locations), as=scope(db.assets);
 openModal(`<h2>Create Work Order</h2>
 <p class="muted">Operator intake form. This creates an actual ticket in the queue.</p>
 <div class="grid2">
  <div><label><b>Location</b></label><select id="woLocation" style="width:100%">${optionList(ls,x=>x.site,x=>x.id)}</select></div>
  <div><label><b>Asset</b></label><select id="woAsset" style="width:100%"><option value="">No asset / General site issue</option>${optionList(as,x=>x.asset+" · "+loc(x.location).site,x=>x.id)}</select></div>
  <div><label><b>Trade</b></label><select id="woTrade" style="width:100%"><option>HVAC</option><option>Plumbing</option><option>Electrical</option><option>Lighting</option><option>Doors/Locks</option><option>Roofing</option><option>Refresh</option><option>General Repairs</option></select></div>
  <div><label><b>Priority</b></label><select id="woPriority" style="width:100%"><option>Normal</option><option>Urgent</option><option>Emergency</option></select></div>
  <div><label><b>Requested By</b></label><input id="woOwner" style="width:100%" value="${loggedUser().name}"/></div>
  <div><label><b>Estimated Cost / NTE</b></label><input id="woCost" type="number" style="width:100%" placeholder="0"/></div>
  <div><label><b>Due Date</b></label><input id="woDueDate" type="date" style="width:100%" value="${defaultDueDate({priority:'Normal'})}"/></div>
  <div><label><b>Next Action</b></label><input id="woNextAction" style="width:100%" placeholder="Required before save" value="Assign owner, vendor, and next step"/></div>
 </div>
 <br><label><b>Issue Description / Scope</b></label>
 <textarea id="woNotes" style="width:100%;min-height:110px" placeholder="Describe the issue, access notes, symptoms, photos needed, store impact, and any vendor instructions."></textarea>
 <br><br>
 <button class="btn dark" onclick="submitWOForm()">Create Ticket</button>
 <button class="btn" onclick="closeModal()">Cancel</button>`);
}

async function submitWOForm(){
 let location=document.getElementById("woLocation").value;
 let asset=document.getElementById("woAsset").value;
 let assetObj=db.assets.find(a=>a.id===asset);
 let trade=document.getElementById("woTrade").value;
 let priority=document.getElementById("woPriority").value;
 let owner=document.getElementById("woOwner").value||loggedUser().name;
 let cost=Number(document.getElementById("woCost").value||0);
 let notes=document.getElementById("woNotes").value||"New ticket created from operator intake form.";
 let dueDate=document.getElementById("woDueDate").value;
 let nextAction=document.getElementById("woNextAction").value;
 if(!owner||!dueDate||!nextAction){toast("Owner, due date, and next action are required");return;}
 let wo={id:"WO-"+Math.floor(90000+Math.random()*9999),client:db.activeClient,asset:asset,location:assetObj?assetObj.location:location,trade:assetObj?assetObj.trade:trade,priority,status:"New",owner,vendor:"TBD",age:0,cost,sla:"On Track",notes,photos:[],dispatchHistory:[],vendorStatus:"Not Dispatched",nextAction,dueDate,lastTouch:new Date().toLocaleString(),escalationStatus:"None",invoiceStatus:"Not Ready",internalNotes:"",customerNotes:"",vendorNotes:"",timeline:[{step:"Created",time:new Date().toLocaleString(),by:owner,note:nextAction}]};
 db.workOrders.unshift(wo);
 await cloudUpsert("workOrders",wo);
 await cloudInsertAudit("Created work order "+wo.id+" from intake form");
 save();closeModal();render();toast(cloudReady?"Work order created + synced":"Work order created locally");
}

function openProposalForm(){if(!hasPermission("create_proposal")){toast("Your role cannot create proposals");return;}
 let ls=scope(db.locations), wos=scope(db.workOrders);
 openModal(`<h2>Create Proposal</h2>
 <p class="muted">Proposal intake form. This adds a proposal into the approval workflow.</p>
 <div class="grid2">
  <div><label><b>Location</b></label><select id="propLocation" style="width:100%">${optionList(ls,x=>x.site,x=>x.id)}</select></div>
  <div><label><b>Related Work Order</b></label><select id="propWO" style="width:100%"><option value="">No related WO</option>${optionList(wos,x=>x.id+" · "+loc(x.location).site+" · "+x.trade,x=>x.id)}</select></div>
  <div><label><b>Trade / Scope Type</b></label><select id="propTrade" style="width:100%"><option>HVAC</option><option>Plumbing</option><option>Electrical</option><option>Lighting</option><option>Refresh</option><option>Millwork</option><option>General Repairs</option><option>CapEx Replacement</option></select></div>
  <div><label><b>Amount</b></label><input id="propAmount" type="number" style="width:100%" placeholder="0"/></div>
  <div><label><b>Status</b></label><select id="propStatus" style="width:100%"><option>Draft</option><option>Review</option><option>Pending</option></select></div>
  <div><label><b>Approval Owner</b></label><input id="propOwner" style="width:100%" value="${loggedUser().name}"/></div>
 </div>
 <br><label><b>Proposal Scope</b></label>
 <textarea id="propScope" style="width:100%;min-height:110px" placeholder="Enter proposal scope, reason, vendor, exclusions, urgency, and business impact."></textarea>
 <br><br>
 <button class="btn dark" onclick="submitProposalForm()">Create Proposal</button>
 <button class="btn" onclick="closeModal()">Cancel</button>`);
}

function submitProposalForm(){
 let location=document.getElementById("propLocation").value;
 let wo=document.getElementById("propWO").value;
 let trade=document.getElementById("propTrade").value;
 let amount=Number(document.getElementById("propAmount").value||0);
 let status=document.getElementById("propStatus").value;
 let owner=document.getElementById("propOwner").value||loggedUser().name;
 let scopeText=document.getElementById("propScope").value||"New proposal created from operator intake form.";
 let prop={id:"P-"+Math.floor(5000+Math.random()*999),client:db.activeClient,location,wo,trade,amount,status,age:0,scope:scopeText};
 db.proposals.unshift(prop);
 db.approvals.unshift({id:"APR-"+Math.floor(900+Math.random()*999),client:db.activeClient,item:prop.id+" "+trade,amount,status:"Needs Review",risk:amount>25000?"High":"Medium",owner});
 db.audit.unshift({id:"LOG-"+Date.now(),event:"Created proposal "+prop.id+" from intake form",time:"Just now"});
 save();closeModal();render();toast("Proposal created");
}

function addWO(){let l=scope(db.locations)[0]||db.locations[0];let a=scope(db.assets).find(x=>x.location===l.id)||scope(db.assets)[0];db.workOrders.unshift({id:"WO-"+Math.floor(90000+Math.random()*9999),client:db.activeClient,asset:a?a.id:"",location:l.id,trade:a?a.trade:"HVAC",priority:"Normal",status:"New",owner:"Unassigned",vendor:"TBD",age:0,cost:0,sla:"On Track",notes:"New ticket created."});save();render();toast("Work order created")}
function addProposal(){let l=scope(db.locations)[0]||db.locations[0];db.proposals.unshift({id:"P-"+Math.floor(5000+Math.random()*999),client:db.activeClient,location:l.id,wo:"",trade:"HVAC",amount:0,status:"Draft",age:0,scope:"New proposal draft."});save();render();toast("Proposal created")}
async function setProp(id,status){let updated=null;db.proposals=db.proposals.map(p=>{if(p.id!==id)return p;updated={...p,status};return updated;});await cloudUpsert("proposals",updated);await cloudInsertAudit("Proposal "+id+" marked "+status);save();render();toast("Proposal "+status+(cloudReady?" + synced":""))}
function exportData(){if(!hasPermission("export_data")){toast("Your role cannot export data");return;}let blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="commandcenter-enterprise-data.json";a.click()}
function copyReport(){navigator.clipboard.writeText(`${c().name}: Portfolio Control Summary\nOpen work orders: ${ai().wo.length}\nPending proposal dollars: ${money(ai().pending)}\nReplace-review assets: ${ai().repl.length}\nHealth score: ${ai().health}/100`);toast("Executive summary copied")}
function resetDemo(){localStorage.removeItem("commandCenterEnterpriseData");db=JSON.parse(JSON.stringify(seed));

function loggedUser(){
 let key=localStorage.getItem("commandCenterLoggedUser")||"April Parker";
 return db.users.find(u=>u.name===key)||{name:key,role:"Portfolio Operator",client:c().name,status:"Active"};
}
function setLoginUser(v){localStorage.setItem("commandCenterLoggedUser",v);render()}
function greeting(){
 let h=new Date().getHours();
 if(h<12)return "Good Morning";
 if(h<17)return "Good Afternoon";
 return "Good Evening";
}

function openModal(content){modalBody.innerHTML=content;modal.style.display="flex"}
function closeModal(){modal.style.display="none"}
function vendorRouteScore(v,wo){let tradeMatch=(v.trades||"").toLowerCase().includes((wo.trade||"").toLowerCase().split("/")[0])?15:0;return Math.round((v.score||0)*.40+(v.sla||0)*.25+(100-Math.min((v.response||0)*10,100))*.20+tradeMatch)}
function bestVendor(wo){let ranked=db.vendors.map(v=>({...v,routeScore:vendorRouteScore(v,wo)})).sort((a,b)=>b.routeScore-a.routeScore);return ranked[0]||{name:"National Backstop",routeScore:75}}
async function routeWO(id){let updated=null;db.workOrders=db.workOrders.map(w=>{if(w.id!==id)return w;let v=bestVendor(w);updated={...w,vendor:v.name,status:"Vendor Dispatched",notes:(w.notes||"")+" Auto-routed."};return updated;});await cloudUpsert("workOrders",updated);await cloudInsertAudit("Auto-routed "+id+" using routing engine");save();render();toast("Work order routed"+(cloudReady?" + synced":""))}
async function escalateWO(id){let updated=null;db.workOrders=db.workOrders.map(w=>{if(w.id!==id)return w;updated={...w,status:"Escalated",sla:"Breached",owner:"Executive Alert"};return updated;});await cloudUpsert("workOrders",updated);await cloudInsertAudit("Escalated "+id+" to executive alert");save();render();toast("Escalation created"+(cloudReady?" + synced":""))}
function forecast(x){let runRate=x.spend*4,variance=runRate-c().budget,capex=x.repl.reduce((s,a)=>s+a.replacement,0),savings=Math.round(x.repl.reduce((s,a)=>s+Math.max(0,a.spend12*.55),0)+x.at.length*1800);return{runRate,variance,capex,savings}}
function riskScore(l){return Number.isFinite(Number(l.risk_score))?Number(l.risk_score):Math.min(100,Math.round(((l.open||0)*6)+((l.repeat||0)*14)+((l.spend||0)/2000)+(l.capex?15:0)))}
function predictedFailure(a){return Math.min(99,Math.round(a.age*3+a.repairs*9+(a.spend12/Math.max(a.replacement,1))*45))}
function renderDispatch(x){
 let lanes=["New","Vendor Dispatched","In Progress","Escalated"];
 let body=lanes.map(lane=>`<div class="lane"><h4>${lane}</h4>`+
 x.wo.filter(w=> lane==="New"?["New","Proposal Needed","Scoping","Scheduled"].includes(w.status):w.status===lane).map(w=>{
 let v=bestVendor(w);
 return `<div class="woCard" onclick="woModal('${w.id}')" style="cursor:pointer"><b>${w.id}</b><div class="muted">${loc(w.location).site}</div><div>${pill(w.priority)} ${pill(w.sla)}</div><div class="muted">Vendor Status: ${w.vendorStatus||"Not Dispatched"}</div><b>${v.name}</b> <span class="badge">${v.routeScore}</span><br><button class="btn" onclick="event.stopPropagation();woModal('${w.id}')">View</button> <button class="btn dark" onclick="event.stopPropagation();dispatchToSuggested('${w.id}')">Dispatch</button> <button class="btn red" onclick="event.stopPropagation();escalateWO('${w.id}')">Escalate</button></div>`
 }).join("")+`</div>`).join("");
 dispatch.innerHTML=`<div class="card"><h3>Vendor Dispatch Workflow</h3><p class="muted">Route, dispatch, accept, re-route, mark on site, and close work orders.</p><div class="kanban">${body}</div></div>`;
}
function renderSLA(x){let breached=x.wo.filter(w=>w.sla==="Breached"), risk=x.wo.filter(w=>w.sla==="At Risk");let compliance=Math.max(0,100-(breached.length*12+risk.length*6));sla.innerHTML=`<div class="grid2"><div class="card"><h3>SLA Command</h3><div class="big">${compliance}%</div><div class="row"><b>At Risk</b><span>${risk.length}</span></div><div class="row"><b>Breached</b><span>${breached.length}</span></div><div class="row"><b>Escalation Rule</b><span>Emergency 30m / Urgent 60m / Normal 240m</span></div></div><div class="card"><h3>Escalation Queue</h3>${[...breached,...risk].map(w=>`<div class="row"><div><b>${w.id}</b><div class="muted">${loc(w.location).site} · ${w.trade} · ${w.vendor}</div></div><button class="btn red" onclick="escalateWO('${w.id}')">Escalate</button></div>`).join("")||"<p class='muted'>No SLA fires right now.</p>"}</div></div>`}
function renderHeatMap(x){
 const regions=["Northeast","Southeast","Texas","Midwest","West","Other"];
 const classMap={Northeast:"regionEast",Southeast:"regionSoutheast",Texas:"regionTexas",Midwest:"regionMidwest",West:"regionWest",Other:"regionOther"};
 const cleanRegion=r=>regions.includes(r)?r:(String(r||"").includes("East")?"Northeast":String(r||"").includes("South")?"Southeast":String(r||"").includes("Texas")?"Texas":String(r||"").includes("Mid")?"Midwest":String(r||"").includes("West")?"West":"Other");
 const grouped=regions.map(region=>{let sites=x.ls.filter(l=>cleanRegion(l.region)===region);let open=sites.reduce((s,l)=>s+(l.open||0),0);let repeat=sites.reduce((s,l)=>s+(l.repeat||0),0);let spend=sites.reduce((s,l)=>s+(l.spend||0),0);let score=sites.length?Math.round(sites.reduce((s,l)=>s+riskScore(l),0)/sites.length):0;let tier=score>=90?"critical":score>=65?"high":score>=35?"medium":"low";return{region,sites,open,repeat,spend,score,tier};});
 let sorted=[...x.ls].sort((a,b)=>riskScore(b)-riskScore(a));
 let top=sorted[0]||{};
 heatmap.innerHTML=`<div class="card"><div class="mapToolbar"><div><h3>Portfolio Map Visualization</h3><p class="muted">Clickable regional risk command layer. Each region and site opens the location drilldown; production can replace this schematic with Mapbox/Google Maps without changing the data model.</p></div><button class="btn dark" onclick="renderHeatMap(ai())">Refresh Map</button></div>
 <div class="mapLegend"><span>🟥 Critical 90+</span><span>🟧 High 65-89</span><span>🟨 Medium 35-64</span><span>🟩 Low 0-34</span></div>
 <div class="mapStatGrid"><div class="mapStat"><div class="muted">Portfolio sites</div><b>${x.ls.length}</b></div><div class="mapStat"><div class="muted">Open WOs</div><b>${x.ls.reduce((s,l)=>s+(l.open||0),0)}</b></div><div class="mapStat"><div class="muted">Regional spend</div><b>${money(x.ls.reduce((s,l)=>s+(l.spend||0),0))}</b></div></div>
 <div class="portfolioMapShell"><div class="regionRiskMap">${grouped.map(g=>`<div class="regionCell ${classMap[g.region]} ${g.tier}" onclick="openRegionMap('${g.region}')"><div class="regionName">${g.region}</div><div class="regionMeta">${g.sites.length} sites · ${g.open} open · ${g.repeat} repeat</div><div class="regionMeta">${money(g.spend)} visible spend</div><div class="regionBadge">${pill(g.tier==='critical'?'Critical':g.tier==='high'?'High':g.tier==='medium'?'Medium':'Low')}</div><div class="regionScore">${g.score}</div></div>`).join("")}</div>
 <div><div class="tile"><b>Highest Risk Site</b>${top.site?`<div class="siteRiskCard" onclick="locationModal('${top.id}')"><b>${top.site}</b><div class="muted">${top.market||top.region} · ${top.district||"Unassigned"} · ${top.trade}</div><br>${pill(top.risk)} <span class="badge">Risk ${riskScore(top)}</span><div class="muted">${top.open} open · ${top.repeat} repeat · ${money(top.spend)}</div></div>`:"<p class='muted'>No site risk data available.</p>"}</div>
 <div class="tile"><b>Top Risk Locations</b><div class="regionList">${sorted.slice(0,6).map(l=>`<div class="siteRiskCard" onclick="locationModal('${l.id}')"><div style="display:flex;justify-content:space-between;gap:10px"><div><b>${l.site}</b><div class="muted">${l.market||l.region} · ${l.district||"Unassigned"} · ${l.trade}</div></div><span class="badge">${riskScore(l)}</span></div></div>`).join("")}</div></div></div></div></div>`;
}
function openRegionMap(region){
 let x=ai();
 const cleanRegion=r=>["Northeast","Southeast","Texas","Midwest","West","Other"].includes(r)?r:(String(r||"").includes("East")?"Northeast":String(r||"").includes("South")?"Southeast":String(r||"").includes("Texas")?"Texas":String(r||"").includes("Mid")?"Midwest":String(r||"").includes("West")?"West":"Other");
 let sites=x.ls.filter(l=>cleanRegion(l.region)===region).sort((a,b)=>riskScore(b)-riskScore(a));
 let open=sites.reduce((s,l)=>s+(l.open||0),0), repeat=sites.reduce((s,l)=>s+(l.repeat||0),0), spend=sites.reduce((s,l)=>s+(l.spend||0),0);
 openModal(`<h2>${region} Region Risk Map</h2><p class="muted">${sites.length} sites · ${open} open work orders · ${repeat} repeat issues · ${money(spend)} visible spend</p><div class="grid3"><div class="tile"><b>Sites</b><div class="big">${sites.length}</div></div><div class="tile"><b>Open WOs</b><div class="big">${open}</div></div><div class="tile"><b>Spend</b><div class="big">${money(spend)}</div></div></div><div class="tile"><b>Sites Ranked by Risk</b>${sites.length?sites.map(l=>`<div class="row" onclick="locationModal('${l.id}')" style="cursor:pointer"><div><b>${l.site}</b><div class="muted">${l.trade} · ${l.open} open · ${l.repeat} repeat</div></div><div>${pill(l.risk)} <span class="badge">${riskScore(l)}</span></div></div>`).join(""):"<p class='muted'>No locations in this region yet.</p>"}</div>`);
}
function assetModal(id){
 let a=db.assets.find(x=>x.id===id); if(!a)return;
 let fail=predictedFailure(a); let rec=fail>70?"Replace / Capital Review":fail>45?"Monitor + quote replacement":"Repair acceptable";
 let attached=db.workOrders.filter(w=>w.asset===a.id || (w.location===a.location && (w.trade||"").toLowerCase().includes((a.trade||"").toLowerCase().split("/")[0])));
 openModal(`<h2>${a.asset}</h2><p class="muted">${loc(a.location).site} · ${a.trade}</p>
 <div class="grid2"><div class="tile"><b>Age</b><div class="big">${a.age}</div></div><div class="tile"><b>Failure Risk</b><div class="big">${fail}%</div></div></div>
 <div class="tile"><b>Service History</b><p>Repairs: ${a.repairs}<br>12-month spend: ${money(a.spend12)}<br>Replacement estimate: ${money(a.replacement)}</p></div>
 <div class="tile"><b>Attached Work Orders</b>${attached.length?attached.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id}</b><div class="muted">${w.trade} · ${w.status} · ${w.vendor}</div></div><div>${pill(w.priority)} ${pill(w.sla)}</div></div>`).join(""):"<p class='muted'>No work orders attached to this asset yet.</p>"}</div>
 <div class="aihero"><div class="kicker">AI Recommendation</div><h1>${rec}</h1><p>Operator view: decide whether to keep repairing, quote replacement, or move this asset into capital review.</p></div>`);
}

function renderAssetHistory(x){
 assets.innerHTML=table("Asset Lifecycle History",["Asset","Location","Make / Model","Trade","Age","Failure Risk","12 Mo Spend","Lifecycle"],x.as.map(a=>{let fail=predictedFailure(a);let rec=fail>70?"Replace Cycle":fail>45?"Monitor":"Maintain";return`<tr onclick="assetLifecycleModal('${a.id}')" style="cursor:pointer"><td><b>${a.asset}</b></td><td>${loc(a.location).site}</td><td>${a.manufacturer||"Make"} ${a.model||"Model"}</td><td>${a.trade}</td><td>${a.age}</td><td>${pill(fail>70?"High":fail>45?"Medium":"Low")} ${fail}%</td><td><b>${money(a.spend12)}</b></td><td>${pill(rec)}</td></tr>`}).join(""));
}
function vendorModal(name){let v=db.vendors.find(x=>x.name===name);if(!v)return;openModal(`<h2>${v.name}</h2><p class="muted">${v.trades} · ${v.regions}</p><div class="grid3"><div class="tile"><b>Score</b><div class="big">${v.score}</div></div><div class="tile"><b>SLA</b><div class="big">${v.sla}%</div></div><div class="tile"><b>Response</b><div class="big">${v.response}h</div></div></div><div class="tile"><b>Recommendation</b><p>${v.score<70?"Pressure vendor, limit routing, and source backup coverage.":v.score<82?"Keep approved but monitor SLA/response trends.":"Preferred vendor candidate for expanded routing."}</p></div>`)}
function renderVendorCards(){vendors.innerHTML=table("Vendor Scorecards",["Vendor","Trades","Regions","Score","Avg Response","SLA","Insurance","Status"],db.vendors.map(v=>`<tr onclick="vendorModal('${v.name}')" style="cursor:pointer"><td><b>${v.name}</b></td><td>${v.trades}</td><td>${v.regions}</td><td><b>${v.score}</b></td><td>${v.response} hrs</td><td>${v.sla}%</td><td>${pill(v.insurance)}</td><td>${pill(v.status)}</td></tr>`).join(""))}
function renderExecutive(x){let f=forecast(x);executive.innerHTML=`<div class="grid2"><div class="card"><h3>Executive Action Center</h3><div class="aihero"><div class="kicker">Monday Morning Brief</div><h1>${x.health}/100 Portfolio Health</h1><p>${x.at.length} SLA fires, ${x.repl.length} asset replacement reviews, ${money(x.pending)} pending proposals, and estimated savings opportunity of ${money(f.savings)}.</p></div></div><div class="card"><h3>Top Actions</h3><div class="row"><b>Approve aging proposals</b><span>${money(x.pending)}</span></div><div class="row"><b>Escalate SLA risks</b><span>${x.at.length}</span></div><div class="row"><b>Launch CAPEX review</b><span>${x.repl.length} assets</span></div></div></div>`}
function renderCFO(x){let f=forecast(x),pct=Math.round((x.spend/c().budget)*100);cfo.innerHTML=`<div class="grid2"><div class="card"><h3>CFO Dashboard</h3><div class="row"><b>Annual Budget</b><span>${money(c().budget)}</span></div><div class="row"><b>Visible Spend</b><span>${money(x.spend)}</span></div><div class="row"><b>Budget Used</b><span>${pct}%</span></div><div class="row"><b>Annualized Run Rate</b><span>${money(f.runRate)}</span></div><div class="row"><b>Forecast Variance</b><span>${money(f.variance)}</span></div></div><div class="card"><h3>Capital Planning</h3><div class="row"><b>Replacement Exposure</b><span>${money(f.capex)}</span></div><div class="row"><b>Potential Savings</b><span>${money(f.savings)}</span></div><div class="row"><b>Budget Signal</b><span>${pill(f.variance>0?"Overrun Risk":"Stable")}</span></div></div></div>`}
function renderApprovals(){
 approvals.innerHTML=table("Proposal Approval Routing",["ID","Item","Amount","Risk","Assigned To","Status","Actions"],scope(db.approvals).map(a=>`<tr onclick="approvalModal('${a.id}')" style="cursor:pointer"><td><b>${a.id}</b></td><td>${a.item}</td><td><b>${money(a.amount)}</b></td><td>${pill(a.risk)}</td><td>${a.assignedTo||a.owner}</td><td>${pill(a.status)}</td><td><button class="btn green" onclick="event.stopPropagation();approveRoute('${a.id}','Approved')">Approve</button> <button class="btn red" onclick="event.stopPropagation();approveRoute('${a.id}','Rejected')">Reject</button> <button class="btn" onclick="event.stopPropagation();requestRevision('${a.id}')">Revise</button></td></tr>`).join(""));
}
function approveItem(id){db.approvals=db.approvals.map(a=>a.id===id?{...a,status:"Approved"}:a);save();render();toast("Approved")}
function renderTenant(){tenant.innerHTML=`<div class="grid2"><div class="card"><h3>Multi-Tenant SaaS Admin</h3>${db.tenants.map(t=>`<div class="row"><div><b>${t.name}</b><div class="muted">${t.plan} · ${t.roles} · ${t.storage}</div></div>${pill(t.status)}</div>`).join("")}</div><div class="card"><h3>Audit Trail</h3>${db.audit.slice(0,8).map(a=>`<div class="row"><div><b>${a.event}</b><div class="muted">${a.time}</div></div></div>`).join("")}</div></div>`}
function renderDocuments(){documents.innerHTML=table("Documents / COIs Repository",["ID","Type","Name","Status","Expires","Owner"],scope(db.documents).map(d=>`<tr><td><b>${d.id}</b></td><td>${d.type}</td><td>${d.name}</td><td>${pill(d.status)}</td><td>${d.expires}</td><td>${d.owner}</td></tr>`).join(""))}
function renderBoardReports(x){
let f=forecast(x);
reports.innerHTML=`<div class="reportPage"><h3>Executive PDF-Style Report Generator</h3><div class="aihero"><div class="kicker">Executive Report</div><h1>${c().name}: Facilities Portfolio Brief</h1><p>Portfolio health is ${x.health}/100. Open work orders: ${x.wo.length}. SLA-sensitive work orders: ${x.at.length}. Pending proposal dollars: ${money(x.pending)}. Replacement review exposure: ${money(f.capex)}. Potential savings identified: ${money(f.savings)}.</p></div>
<br><div class="grid2">
<div class="tile"><b>Operational Risk</b><p>${x.at.length} SLA-sensitive tickets and ${x.repl.length} replace-review assets require action.</p></div>
<div class="tile"><b>Financial Signal</b><p>${money(x.pending)} in pending approvals. Annualized spend projection: ${money(f.runRate)}.</p></div>
</div>
<br><button class="btn dark" onclick="downloadExecutiveReport()">Download Report</button> <button class="btn" onclick="copyBoardReport()">Copy Board Report</button></div>`;
}
function copyBoardReport(){let x=ai(),f=forecast(x);navigator.clipboard.writeText(`${c().name} Board Report\nHealth: ${x.health}/100\nOpen WOs: ${x.wo.length}\nSLA Risk: ${x.at.length}\nPending Proposal Dollars: ${money(x.pending)}\nReplacement Exposure: ${money(f.capex)}\nPotential Savings: ${money(f.savings)}`);toast("Board report copied")}

toast("Demo reset")}


function loggedUser(){
 let key=localStorage.getItem("commandCenterLoggedUser")||"April Parker";
 return db.users.find(u=>u.name===key)||{name:key,role:"Portfolio Operator",client:c().name,status:"Active"};
}
function setLoginUser(v){localStorage.setItem("commandCenterLoggedUser",v);render()}
function greeting(){
 let h=new Date().getHours();
 if(h<12)return "Good Morning";
 if(h<17)return "Good Afternoon";
 return "Good Evening";
}

function openModal(content){modalBody.innerHTML=content;modal.style.display="flex"}
function closeModal(){modal.style.display="none"}
function vendorRouteScore(v,wo){let tradeMatch=(v.trades||"").toLowerCase().includes((wo.trade||"").toLowerCase().split("/")[0])?15:0;return Math.round((v.score||0)*.40+(v.sla||0)*.25+(100-Math.min((v.response||0)*10,100))*.20+tradeMatch)}
function bestVendor(wo){let ranked=db.vendors.map(v=>({...v,routeScore:vendorRouteScore(v,wo)})).sort((a,b)=>b.routeScore-a.routeScore);return ranked[0]||{name:"National Backstop",routeScore:75}}
async function routeWO(id){let updated=null;db.workOrders=db.workOrders.map(w=>{if(w.id!==id)return w;let v=bestVendor(w);updated={...w,vendor:v.name,status:"Vendor Dispatched",notes:(w.notes||"")+" Auto-routed."};return updated;});await cloudUpsert("workOrders",updated);await cloudInsertAudit("Auto-routed "+id+" using routing engine");save();render();toast("Work order routed"+(cloudReady?" + synced":""))}
async function escalateWO(id){let updated=null;db.workOrders=db.workOrders.map(w=>{if(w.id!==id)return w;updated={...w,status:"Escalated",sla:"Breached",owner:"Executive Alert"};return updated;});await cloudUpsert("workOrders",updated);await cloudInsertAudit("Escalated "+id+" to executive alert");save();render();toast("Escalation created"+(cloudReady?" + synced":""))}
function forecast(x){let runRate=x.spend*4,variance=runRate-c().budget,capex=x.repl.reduce((s,a)=>s+a.replacement,0),savings=Math.round(x.repl.reduce((s,a)=>s+Math.max(0,a.spend12*.55),0)+x.at.length*1800);return{runRate,variance,capex,savings}}
function riskScore(l){return Number.isFinite(Number(l.risk_score))?Number(l.risk_score):Math.min(100,Math.round(((l.open||0)*6)+((l.repeat||0)*14)+((l.spend||0)/2000)+(l.capex?15:0)))}
function predictedFailure(a){return Math.min(99,Math.round(a.age*3+a.repairs*9+(a.spend12/Math.max(a.replacement,1))*45))}
function renderDispatch(x){
 let lanes=["New","Vendor Dispatched","In Progress","Escalated"];
 let body=lanes.map(lane=>`<div class="lane"><h4>${lane}</h4>`+
 x.wo.filter(w=> lane==="New"?["New","Proposal Needed","Scoping","Scheduled"].includes(w.status):w.status===lane).map(w=>{
 let v=bestVendor(w);
 return `<div class="woCard" onclick="woModal('${w.id}')" style="cursor:pointer"><b>${w.id}</b><div class="muted">${loc(w.location).site}</div><div>${pill(w.priority)} ${pill(w.sla)}</div><div class="muted">Vendor Status: ${w.vendorStatus||"Not Dispatched"}</div><b>${v.name}</b> <span class="badge">${v.routeScore}</span><br><button class="btn" onclick="event.stopPropagation();woModal('${w.id}')">View</button> <button class="btn dark" onclick="event.stopPropagation();dispatchToSuggested('${w.id}')">Dispatch</button> <button class="btn red" onclick="event.stopPropagation();escalateWO('${w.id}')">Escalate</button></div>`
 }).join("")+`</div>`).join("");
 dispatch.innerHTML=`<div class="card"><h3>Vendor Dispatch Workflow</h3><p class="muted">Route, dispatch, accept, re-route, mark on site, and close work orders.</p><div class="kanban">${body}</div></div>`;
}
function renderSLA(x){let breached=x.wo.filter(w=>w.sla==="Breached"), risk=x.wo.filter(w=>w.sla==="At Risk");let compliance=Math.max(0,100-(breached.length*12+risk.length*6));sla.innerHTML=`<div class="grid2"><div class="card"><h3>SLA Command</h3><div class="big">${compliance}%</div><div class="row"><b>At Risk</b><span>${risk.length}</span></div><div class="row"><b>Breached</b><span>${breached.length}</span></div><div class="row"><b>Escalation Rule</b><span>Emergency 30m / Urgent 60m / Normal 240m</span></div></div><div class="card"><h3>Escalation Queue</h3>${[...breached,...risk].map(w=>`<div class="row"><div><b>${w.id}</b><div class="muted">${loc(w.location).site} · ${w.trade} · ${w.vendor}</div></div><button class="btn red" onclick="escalateWO('${w.id}')">Escalate</button></div>`).join("")||"<p class='muted'>No SLA fires right now.</p>"}</div></div>`}
let mapFilters={risk:"All",trade:"All",sla:"All",capex:"All"};
let geoMap=null;
let geoMarkers=[];
function formatCoord(v){return Number.isFinite(Number(v))?Number(v).toFixed(4):"Pending"}
function hasGeo(l){return Number.isFinite(Number(l.latitude))&&Number.isFinite(Number(l.longitude))}
function geoReadyCount(sites){return sites.filter(hasGeo).length}
function mapRegionName(r){const regions=["Northeast","Southeast","Texas","Midwest","West","Other"];return regions.includes(r)?r:(String(r||"").includes("East")?"Northeast":String(r||"").includes("South")?"Southeast":String(r||"").includes("Texas")?"Texas":String(r||"").includes("Mid")?"Midwest":String(r||"").includes("West")?"West":"Other")}
function mapRiskTier(score){return score>=90?"critical":score>=65?"high":score>=35?"medium":"low"}
function siteWOList(siteId){return db.workOrders.filter(w=>w.location===siteId)}
function siteMatchesMapFilters(l){
 let wos=siteWOList(l.id);
 if(mapFilters.risk!=="All" && String(l.risk)!==mapFilters.risk)return false;
 if(mapFilters.trade!=="All" && String(l.trade)!==mapFilters.trade)return false;
 if(mapFilters.sla!=="All" && !wos.some(w=>w.sla===mapFilters.sla))return false;
 if(mapFilters.capex!=="All" && String(Boolean(l.capex))!==mapFilters.capex)return false;
 return true;
}
function setMapFilter(key,val){mapFilters[key]=val;renderHeatMap(ai())}
function resetMapFilters(){mapFilters={risk:"All",trade:"All",sla:"All",capex:"All"};renderHeatMap(ai());toast("Map filters reset")}
function markerIconForSite(l){
 let tier=mapRiskTier(riskScore(l));
 return L.divIcon({className:"",html:`<div class="ccDivMarker ${tier}">${riskScore(l)}</div>`,iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]});
}
function initRealMap(filteredSites){
 const el=document.getElementById("geoPortfolioMap");
 if(!el)return;
 if(!window.L){
  el.innerHTML=`<div style="padding:18px;height:100%;overflow:auto;background:#f8fafc"><h3 style="margin-top:0">Map layer fallback</h3><p class="muted">Leaflet/OpenStreetMap did not load from the CDN, so CommandCenter is showing clickable map-ready locations instead of a blank screen.</p><div class="mapGrid">${filteredSites.map(l=>`<div class="mapSite" onclick="openSiteDrawer('${l.id}')"><b>${l.site}</b><div class="muted">${l.address||"Address pending"}<br>${formatCoord(l.latitude)}, ${formatCoord(l.longitude)} · ${l.trade}</div><br>${pill(l.risk)} <span class="badge">Risk ${riskScore(l)}</span></div>`).join("")||"<p class='muted'>No map-ready locations match current filters.</p>"}</div></div>`;
  return;
 }
 el.innerHTML="";
 if(!geoMap){
  geoMap=L.map("geoPortfolioMap",{scrollWheelZoom:false});
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(geoMap);
 }
 geoMarkers.forEach(m=>m.remove());geoMarkers=[];
 let bounds=[];
 filteredSites.filter(hasGeo).forEach(l=>{
  let marker=L.marker([Number(l.latitude),Number(l.longitude)],{icon:markerIconForSite(l)}).addTo(geoMap);
  marker.bindPopup(`<div class="ccPopup"><b>${l.site}</b><div class="muted">${l.address||"Address pending"}<br>${l.market||l.region} · ${l.district||"Unassigned"}<br>${l.trade} · ${pill(l.risk)} · Risk ${riskScore(l)}</div><button onclick="openSiteDrawer('${l.id}')">Open Location Drawer</button></div>`);
  marker.on("click",()=>{setTimeout(()=>openSiteDrawer(l.id),60)});
  geoMarkers.push(marker);bounds.push([Number(l.latitude),Number(l.longitude)]);
 });
 setTimeout(()=>{
  geoMap.invalidateSize();
  if(bounds.length>1)geoMap.fitBounds(bounds,{padding:[34,34],maxZoom:7});
  else if(bounds.length===1)geoMap.setView(bounds[0],8);
  else geoMap.setView([39.5,-98.35],4);
 },120);
}
function renderHeatMap(x){
 const regions=["Northeast","Southeast","Texas","Midwest","West","Other"];
 const allSites=x.ls;
 const filteredSites=allSites.filter(siteMatchesMapFilters);
 const trades=["All",...Array.from(new Set(allSites.map(l=>l.trade).filter(Boolean))).sort()];
 const risks=["All","Critical","High","Medium","Low"];
 const slas=["All","Breached","At Risk","On Track"];
 const grouped=regions.map(region=>{let sites=filteredSites.filter(l=>mapRegionName(l.region)===region);let open=sites.reduce((s,l)=>s+(l.open||0),0);let repeat=sites.reduce((s,l)=>s+(l.repeat||0),0);let spend=sites.reduce((s,l)=>s+(l.spend||0),0);let score=sites.length?Math.round(sites.reduce((s,l)=>s+riskScore(l),0)/sites.length):0;let tier=mapRiskTier(score);return{region,sites,open,repeat,spend,score,tier};});
 let sorted=[...filteredSites].sort((a,b)=>riskScore(b)-riskScore(a));
 let top=sorted[0]||{};
 let active=Object.entries(mapFilters).filter(([k,v])=>v!=="All").map(([k,v])=>`<span class="filterChip">${k.toUpperCase()}: ${v==="true"?"CapEx review":v==="false"?"No CapEx":v}</span>`).join("") || `<span class="filterChip">All sites visible</span>`;
 heatmap.innerHTML=`<div class="card"><div class="mapToolbar"><div><h3>True Geographic Portfolio Map — Hardened</h3><p class="muted">Live pin-based map layer using each location's latitude, longitude, address, market, district, and normalized risk_score. Pins open the same location drawer, so the grid has now been swapped for true geographic visibility.</p></div><div><button class="btn" onclick="resetMapFilters()">Reset Filters</button> <button class="btn dark" onclick="renderHeatMap(ai())">Refresh Map</button></div></div>
 <div class="mapFilters">
  <select onchange="setMapFilter('risk',this.value)">${risks.map(r=>`<option value="${r}" ${mapFilters.risk===r?'selected':''}>Risk: ${r}</option>`).join("")}</select>
  <select onchange="setMapFilter('trade',this.value)">${trades.map(t=>`<option value="${t}" ${mapFilters.trade===t?'selected':''}>Trade: ${t}</option>`).join("")}</select>
  <select onchange="setMapFilter('sla',this.value)">${slas.map(s=>`<option value="${s}" ${mapFilters.sla===s?'selected':''}>SLA: ${s}</option>`).join("")}</select>
  <select onchange="setMapFilter('capex',this.value)"><option value="All" ${mapFilters.capex==='All'?'selected':''}>CapEx: All</option><option value="true" ${mapFilters.capex==='true'?'selected':''}>CapEx: Review</option><option value="false" ${mapFilters.capex==='false'?'selected':''}>CapEx: Stable</option></select>
 </div>
 <div class="activeFilterBar">${active}</div>
 <div class="mapPinLegend"><span>🔴 Critical 90+</span><span>🟠 High 65-89</span><span>🟡 Medium 35-64</span><span>🟢 Low 0-34</span><span>Click pin = location drawer</span></div>
 <div class="mapStatGrid"><div class="mapStat"><div class="muted">Visible sites</div><b>${filteredSites.length}/${allSites.length}</b></div><div class="mapStat"><div class="muted">Live map pins</div><b>${geoReadyCount(filteredSites)}/${filteredSites.length}</b></div><div class="mapStat"><div class="muted">Visible spend</div><b>${money(filteredSites.reduce((s,l)=>s+(l.spend||0),0))}</b></div></div>
 <div class="realMapWrap"><div class="realMapCard"><div id="geoPortfolioMap"></div></div>
 <div class="mapSidePanel"><div class="tile"><b>Highest Risk Site</b>${top.site?`<div class="siteRiskCard" onclick="openSiteDrawer('${top.id}')"><b>${top.site}</b><div class="muted">${top.address||"Address pending"}<br>${top.market||top.region} · ${top.district||"Unassigned"} · ${top.trade}</div><br>${pill(top.risk)} <span class="badge">Risk ${riskScore(top)}</span><div class="muted">${top.open} open · ${top.repeat} repeat · ${money(top.spend)}</div></div>`:"<p class='muted'>No site risk data matches current filters.</p>"}</div>
 <div class="tile"><b>Regional Rollup</b>${grouped.map(g=>`<div class="row" onclick="openRegionMap('${g.region}')" style="cursor:pointer"><div><b>${g.region}</b><div class="muted">${g.sites.length} sites · ${g.open} open · ${money(g.spend)}</div></div><span class="badge">${g.score}</span></div>`).join("")}</div>
 <div class="tile"><b>Top Risk Locations</b><div class="regionList">${sorted.slice(0,8).map(l=>`<div class="siteRiskCard" onclick="openSiteDrawer('${l.id}')"><div style="display:flex;justify-content:space-between;gap:10px"><div><b>${l.site}</b><div class="muted">${l.market||l.region} · ${l.district||"Unassigned"} · ${l.trade}</div></div><span class="badge">${riskScore(l)}</span></div></div>`).join("")||"<p class='muted'>No locations match current filters.</p>"}</div></div></div></div></div>`;
 setTimeout(()=>initRealMap(filteredSites),80);
}
function openRegionMap(region){
 let x=ai();
 let sites=x.ls.filter(l=>mapRegionName(l.region)===region && siteMatchesMapFilters(l)).sort((a,b)=>riskScore(b)-riskScore(a));
 let open=sites.reduce((s,l)=>s+(l.open||0),0), repeat=sites.reduce((s,l)=>s+(l.repeat||0),0), spend=sites.reduce((s,l)=>s+(l.spend||0),0);
 openModal(`<h2>${region} Region Risk Map</h2><p class="muted">Filtered view: ${sites.length} sites · ${open} open work orders · ${repeat} repeat issues · ${money(spend)} visible spend</p><div class="grid3"><div class="tile"><b>Sites</b><div class="big">${sites.length}</div></div><div class="tile"><b>Open WOs</b><div class="big">${open}</div></div><div class="tile"><b>Spend</b><div class="big">${money(spend)}</div></div></div><div class="tile"><b>Sites Ranked by Risk</b>${sites.length?sites.map(l=>`<div class="row" onclick="openSiteDrawer('${l.id}');closeModal()" style="cursor:pointer"><div><b>${l.site}</b><div class="muted">${l.trade} · ${l.open} open · ${l.repeat} repeat</div></div><div>${pill(l.risk)} <span class="badge">${riskScore(l)}</span></div></div>`).join(""):"<p class='muted'>No locations in this region match current filters.</p>"}</div>`);
}
function closeSiteDrawer(){let d=document.getElementById("siteDrawer");if(d)d.style.display="none"}
function openSiteDrawer(id){
 let l=db.locations.find(x=>x.id===id); if(!l){toast("Location not found");return;}
 let wos=siteWOList(id).sort((a,b)=>(b.priority==="Emergency")-(a.priority==="Emergency") || b.age-a.age);
 let assets=db.assets.filter(a=>a.location===id).sort((a,b)=>predictedFailure(b)-predictedFailure(a));
 let props=db.proposals.filter(p=>p.location===id);
 let vendors=Array.from(new Set(wos.map(w=>w.vendor).filter(Boolean))).join(", ")||"No vendor assigned";
 let breached=wos.filter(w=>w.sla==="Breached").length, atRisk=wos.filter(w=>w.sla==="At Risk").length;
 let body=document.getElementById("siteDrawerBody");
 body.innerHTML=`<div class="drawerHeader"><div><div class="kicker">Location detail drawer</div><h2>${l.site}</h2><p class="muted">${l.address||"Address pending"}<br>${l.market||l.region} · ${l.district||"Unassigned"} · ${l.fm} · ${l.trade}</p></div><button class="drawerClose" onclick="closeSiteDrawer()">Close</button></div>
 <div>${pill(l.risk)} <span class="badge">Risk ${riskScore(l)}</span> <span class="badge">${hasGeo(l)?"Pin Ready":"Geo Pending"}</span> ${l.capex?pill("CapEx Review"):pill("Stable")}</div>
 <div class="miniGrid"><div class="miniStat"><div class="muted">Open WOs</div><b>${wos.length||l.open||0}</b></div><div class="miniStat"><div class="muted">SLA fires</div><b>${breached+atRisk}</b></div><div class="miniStat"><div class="muted">Spend</div><b>${money(l.spend)}</b></div></div>
 <div class="drawerSection"><b>Operating Snapshot</b><p class="muted">Repeat issues: ${l.repeat||0}<br>Primary vendor coverage: ${vendors}<br>Facilities owner: ${l.fm}<br>Coordinates: ${formatCoord(l.latitude)}, ${formatCoord(l.longitude)}</p><div class="siteActionBar"><button class="btn dark" onclick="openWOForm()">+ Work Order</button><button class="btn" onclick="locationModal('${l.id}')">Full Modal</button><button class="btn red" onclick="closeSiteDrawer();setPage('sla')">View SLA</button></div></div>
 <div class="drawerSection"><b>Open Work Orders</b>${wos.length?wos.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id}</b><div class="muted">${w.trade} · ${w.status} · ${w.vendor}</div></div><div>${pill(w.priority)} ${pill(w.sla)}</div></div>`).join(""):"<p class='muted'>No work orders attached.</p>"}</div>
 <div class="drawerSection"><b>Assets</b>${assets.length?assets.map(a=>`<div class="row" onclick="assetLifecycleModal('${a.id}')" style="cursor:pointer"><div><b>${a.asset}</b><div class="muted">${a.trade} · ${a.age} yrs · ${money(a.spend12)} 12-mo spend</div></div><span class="badge">${predictedFailure(a)}%</span></div>`).join(""):"<p class='muted'>No assets attached.</p>"}</div>
 <div class="drawerSection"><b>Related Proposals</b>${props.length?props.map(p=>`<div class="row"><div><b>${p.id}</b><div class="muted">${p.scope}</div></div><b>${money(p.amount)}</b></div>`).join(""):"<p class='muted'>No proposals attached.</p>"}</div>
 <div class="drawerSection"><b>Real Map Layer Complete</b><p class="muted">This location carries address, market, district, latitude, longitude, and normalized risk_score. The same drawer is now launched from true geographic map pins.</p><div class="miniGrid"><div class="miniStat"><div class="muted">Latitude</div><b>${formatCoord(l.latitude)}</b></div><div class="miniStat"><div class="muted">Longitude</div><b>${formatCoord(l.longitude)}</b></div><div class="miniStat"><div class="muted">Risk score</div><b>${riskScore(l)}</b></div></div></div>`;
 document.getElementById("siteDrawer").style.display="flex";
}
function assetModal(id){
 let a=db.assets.find(x=>x.id===id); if(!a)return;
 let fail=predictedFailure(a); let rec=fail>70?"Replace / Capital Review":fail>45?"Monitor + quote replacement":"Repair acceptable";
 let attached=db.workOrders.filter(w=>w.asset===a.id || (w.location===a.location && (w.trade||"").toLowerCase().includes((a.trade||"").toLowerCase().split("/")[0])));
 openModal(`<h2>${a.asset}</h2><p class="muted">${loc(a.location).site} · ${a.trade}</p>
 <div class="grid2"><div class="tile"><b>Age</b><div class="big">${a.age}</div></div><div class="tile"><b>Failure Risk</b><div class="big">${fail}%</div></div></div>
 <div class="tile"><b>Service History</b><p>Repairs: ${a.repairs}<br>12-month spend: ${money(a.spend12)}<br>Replacement estimate: ${money(a.replacement)}</p></div>
 <div class="tile"><b>Attached Work Orders</b>${attached.length?attached.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id}</b><div class="muted">${w.trade} · ${w.status} · ${w.vendor}</div></div><div>${pill(w.priority)} ${pill(w.sla)}</div></div>`).join(""):"<p class='muted'>No work orders attached to this asset yet.</p>"}</div>
 <div class="aihero"><div class="kicker">AI Recommendation</div><h1>${rec}</h1><p>Operator view: decide whether to keep repairing, quote replacement, or move this asset into capital review.</p></div>`);
}

function renderAssetHistory(x){
 assets.innerHTML=table("Asset Lifecycle History",["Asset","Location","Make / Model","Trade","Age","Failure Risk","12 Mo Spend","Lifecycle"],x.as.map(a=>{let fail=predictedFailure(a);let rec=fail>70?"Replace Cycle":fail>45?"Monitor":"Maintain";return`<tr onclick="assetLifecycleModal('${a.id}')" style="cursor:pointer"><td><b>${a.asset}</b></td><td>${loc(a.location).site}</td><td>${a.manufacturer||"Make"} ${a.model||"Model"}</td><td>${a.trade}</td><td>${a.age}</td><td>${pill(fail>70?"High":fail>45?"Medium":"Low")} ${fail}%</td><td><b>${money(a.spend12)}</b></td><td>${pill(rec)}</td></tr>`}).join(""));
}
function vendorModal(name){let v=db.vendors.find(x=>x.name===name);if(!v)return;openModal(`<h2>${v.name}</h2><p class="muted">${v.trades} · ${v.regions}</p><div class="grid3"><div class="tile"><b>Score</b><div class="big">${v.score}</div></div><div class="tile"><b>SLA</b><div class="big">${v.sla}%</div></div><div class="tile"><b>Response</b><div class="big">${v.response}h</div></div></div><div class="tile"><b>Recommendation</b><p>${v.score<70?"Pressure vendor, limit routing, and source backup coverage.":v.score<82?"Keep approved but monitor SLA/response trends.":"Preferred vendor candidate for expanded routing."}</p></div>`)}
function renderVendorCards(){vendors.innerHTML=table("Vendor Scorecards",["Vendor","Trades","Regions","Score","Avg Response","SLA","Insurance","Status"],db.vendors.map(v=>`<tr onclick="vendorModal('${v.name}')" style="cursor:pointer"><td><b>${v.name}</b></td><td>${v.trades}</td><td>${v.regions}</td><td><b>${v.score}</b></td><td>${v.response} hrs</td><td>${v.sla}%</td><td>${pill(v.insurance)}</td><td>${pill(v.status)}</td></tr>`).join(""))}
let copilotHistory=[];
function buildPortfolioContext(){
 let x=ai(),f=forecast(x);
 return JSON.stringify({
  client:c().name,vertical:c().vertical,budget:c().budget,
  portfolioHealth:x.health,
  openWorkOrders:x.wo.map(w=>({id:w.id,location:loc(w.location).site,trade:w.trade,priority:w.priority,status:w.status,sla:w.sla,vendor:w.vendor,age:w.age,cost:w.cost,notes:w.notes})),
  proposals:x.ps.map(p=>({id:p.id,location:loc(p.location).site,trade:p.trade,amount:p.amount,status:p.status,age:p.age,scope:p.scope})),
  replaceReviewAssets:x.repl.map(a=>({asset:a.asset,location:loc(a.location).site,age:a.age,repairs:a.repairs,spend12:a.spend12,replacement:a.replacement})),
  locations:x.ls.map(l=>({site:l.site,region:l.region,market:l.market,risk:l.risk,riskScore:riskScore(l),open:l.open,repeat:l.repeat,spend:l.spend,trade:l.trade,capex:l.capex})),
  vendors:db.vendors,
  forecast:{runRate:f.runRate,variance:f.variance,capexExposure:f.capex,potentialSavings:f.savings,visibleSpend:x.spend}
 });
}
async function askCopilot(){
 let input=document.getElementById("copilotQ");
 let q=(input&&input.value||"").trim();
 if(!q){toast("Type a question for the Copilot");return;}
 copilotHistory.push({role:"user",content:q});
 renderCopilotThread(true);
 if(input)input.value="";
 try{
  let sys="You are CommandCenter AI, an embedded facilities operations copilot for "+c().name+" ("+c().vertical+"). You have live access to the portfolio's work orders, proposals, assets, vendors, locations, and financial forecast as JSON context below. Answer the user's question using ONLY this data. Be sharp, specific, and operational — reference real IDs, site names, dollar amounts, and vendor names. Use short paragraphs and bullet points. Keep responses under 180 words unless asked for detail.\n\nPORTFOLIO DATA:\n"+buildPortfolioContext();
  const response=await fetch("https://api.anthropic.com/v1/messages",{
   method:"POST",headers:{"Content-Type":"application/json"},
   body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000,system:sys,messages:copilotHistory.map(m=>({role:m.role,content:m.content}))})
  });
  const data=await response.json();
  let text=(data.content||[]).map(b=>b.text||"").join("\n").trim()||"No response generated.";
  copilotHistory.push({role:"assistant",content:text});
 }catch(e){
  copilotHistory.push({role:"assistant",content:"Copilot connection error. Check network/API availability and try again."});
 }
 renderCopilotThread(false);
}
function copilotMarkdownToHtml(t){
 return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
  .replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")
  .replace(/^- (.+)$/gm,"• $1")
  .replace(/\n/g,"<br>");
}
function renderCopilotThread(loading){
 let body=document.getElementById("copilotAnswer");
 if(!body)return;
 let html=copilotHistory.map(m=>m.role==="user"
  ?`<div class="bubble"><b>You:</b> ${copilotMarkdownToHtml(m.content)}</div>`
  :`<div class="bubble ai"><b>AI Copilot:</b><div class="muted">${copilotMarkdownToHtml(m.content)}</div></div>`
 ).join("");
 if(loading)html+=`<div class="bubble ai"><b>AI Copilot:</b><div class="muted">Thinking…</div></div>`;
 body.innerHTML=html||`<div class="bubble ai"><b>AI Copilot:</b><div class="muted">Ready. Ask anything about this portfolio — live data, real answers.</div></div>`;
 body.scrollTop=body.scrollHeight;
}
function copilotPrompt(q){let input=document.getElementById("copilotQ");if(input){input.value=q;askCopilot();}}
function renderCopilot(x){copilot.innerHTML=`<div class="grid2"><div class="card"><h3>AI Facilities Copilot</h3><p class="muted">Live, portfolio-aware AI. Ask about spend, vendors, CAPEX, SLA, assets, or risk — it reasons over real ${c().name} data.</p><div id="copilotAnswer" class="chat" style="margin-bottom:14px;max-height:360px;overflow:auto"></div><div style="display:flex;gap:8px"><input id="copilotQ" style="flex:1" placeholder="Ask Copilot anything about this portfolio..." onkeydown="if(event.key==='Enter')askCopilot()"/><button class="btn dark" onclick="askCopilot()">Ask</button></div></div><div class="card"><h3>Suggested Prompts</h3><div class="row" onclick="copilotPrompt('Which vendors are hurting SLA performance and what should we do about it?')" style="cursor:pointer">Which vendors are hurting SLA performance?</div><div class="row" onclick="copilotPrompt('What should go to CAPEX review and why?')" style="cursor:pointer">What should go to CAPEX review?</div><div class="row" onclick="copilotPrompt('Where is budget risk and how big is the exposure?')" style="cursor:pointer">Where is budget risk?</div><div class="row" onclick="copilotPrompt('Summarize the top 3 priorities for this portfolio this week.')" style="cursor:pointer">Top 3 priorities this week?</div></div></div>`;renderCopilotThread(false);}
function renderExecutive(x){let f=forecast(x);executive.innerHTML=`<div class="grid2"><div class="card"><h3>Executive Action Center</h3><div class="aihero"><div class="kicker">Monday Morning Brief</div><h1>${x.health}/100 Portfolio Health</h1><p>${x.at.length} SLA fires, ${x.repl.length} asset replacement reviews, ${money(x.pending)} pending proposals, and estimated savings opportunity of ${money(f.savings)}.</p></div></div><div class="card"><h3>Top Actions</h3><div class="row"><b>Approve aging proposals</b><span>${money(x.pending)}</span></div><div class="row"><b>Escalate SLA risks</b><span>${x.at.length}</span></div><div class="row"><b>Launch CAPEX review</b><span>${x.repl.length} assets</span></div></div></div>`}
function renderCFO(x){let f=forecast(x),pct=Math.round((x.spend/c().budget)*100);cfo.innerHTML=`<div class="grid2"><div class="card"><h3>CFO Dashboard</h3><div class="row"><b>Annual Budget</b><span>${money(c().budget)}</span></div><div class="row"><b>Visible Spend</b><span>${money(x.spend)}</span></div><div class="row"><b>Budget Used</b><span>${pct}%</span></div><div class="row"><b>Annualized Run Rate</b><span>${money(f.runRate)}</span></div><div class="row"><b>Forecast Variance</b><span>${money(f.variance)}</span></div></div><div class="card"><h3>Capital Planning</h3><div class="row"><b>Replacement Exposure</b><span>${money(f.capex)}</span></div><div class="row"><b>Potential Savings</b><span>${money(f.savings)}</span></div><div class="row"><b>Budget Signal</b><span>${pill(f.variance>0?"Overrun Risk":"Stable")}</span></div></div></div>`}
function renderApprovals(){
 approvals.innerHTML=table("Proposal Approval Routing",["ID","Item","Amount","Risk","Assigned To","Status","Actions"],scope(db.approvals).map(a=>`<tr onclick="approvalModal('${a.id}')" style="cursor:pointer"><td><b>${a.id}</b></td><td>${a.item}</td><td><b>${money(a.amount)}</b></td><td>${pill(a.risk)}</td><td>${a.assignedTo||a.owner}</td><td>${pill(a.status)}</td><td><button class="btn green" onclick="event.stopPropagation();approveRoute('${a.id}','Approved')">Approve</button> <button class="btn red" onclick="event.stopPropagation();approveRoute('${a.id}','Rejected')">Reject</button> <button class="btn" onclick="event.stopPropagation();requestRevision('${a.id}')">Revise</button></td></tr>`).join(""));
}
function approveItem(id){db.approvals=db.approvals.map(a=>a.id===id?{...a,status:"Approved"}:a);save();render();toast("Approved")}
function renderTenant(){tenant.innerHTML=`<div class="grid2"><div class="card"><h3>Multi-Tenant SaaS Admin</h3>${db.tenants.map(t=>`<div class="row"><div><b>${t.name}</b><div class="muted">${t.plan} · ${t.roles} · ${t.storage}</div></div>${pill(t.status)}</div>`).join("")}</div><div class="card"><h3>Audit Trail</h3>${db.audit.slice(0,8).map(a=>`<div class="row"><div><b>${a.event}</b><div class="muted">${a.time}</div></div></div>`).join("")}</div></div>`}
function renderDocuments(){documents.innerHTML=table("Documents / COIs Repository",["ID","Type","Name","Status","Expires","Owner"],scope(db.documents).map(d=>`<tr><td><b>${d.id}</b></td><td>${d.type}</td><td>${d.name}</td><td>${pill(d.status)}</td><td>${d.expires}</td><td>${d.owner}</td></tr>`).join(""))}
function renderBoardReports(x){
let f=forecast(x);
reports.innerHTML=`<div class="reportPage"><h3>Executive PDF-Style Report Generator</h3><div class="aihero"><div class="kicker">Executive Report</div><h1>${c().name}: Facilities Portfolio Brief</h1><p>Portfolio health is ${x.health}/100. Open work orders: ${x.wo.length}. SLA-sensitive work orders: ${x.at.length}. Pending proposal dollars: ${money(x.pending)}. Replacement review exposure: ${money(f.capex)}. Potential savings identified: ${money(f.savings)}.</p></div>
<br><div class="grid2">
<div class="tile"><b>Operational Risk</b><p>${x.at.length} SLA-sensitive tickets and ${x.repl.length} replace-review assets require action.</p></div>
<div class="tile"><b>Financial Signal</b><p>${money(x.pending)} in pending approvals. Annualized spend projection: ${money(f.runRate)}.</p></div>
</div>
<br><button class="btn dark" onclick="downloadExecutiveReport()">Download Report</button> <button class="btn" onclick="copyBoardReport()">Copy Board Report</button></div>`;
}
function copyBoardReport(){let x=ai(),f=forecast(x);navigator.clipboard.writeText(`${c().name} Board Report\nHealth: ${x.health}/100\nOpen WOs: ${x.wo.length}\nSLA Risk: ${x.at.length}\nPending Proposal Dollars: ${money(x.pending)}\nReplacement Exposure: ${money(f.capex)}\nPotential Savings: ${money(f.savings)}`);toast("Board report copied")}


// ============================
// V2.8D HARD PATCH: REAL USA MAP TILE BACKDROP + ACTIVE REFRESH
// Uses a real OpenStreetMap USA iframe behind the pins. No fake vector squiggle map.
// The pin projection stays lat/lon based and the location drawer remains unchanged.
// ============================
function projectSiteToMap(l){
 const lat=Number(l.latitude), lon=Number(l.longitude);
 const minLat=23, maxLat=51, minLon=-127, maxLon=-65;
 if(!Number.isFinite(lat)||!Number.isFinite(lon)) return null;
 const x=Math.max(2.5,Math.min(97.5,((lon-minLon)/(maxLon-minLon))*100));
 const y=Math.max(4,Math.min(96,((maxLat-lat)/(maxLat-minLat))*100));
 return {x,y};
}
function realUsaMapFrame(){
 const bbox='-127,23,-65,51';
 const src=`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik`;
 return `<iframe class="ccRealMapFrame" src="${src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Real USA map"></iframe><div class="ccMapShade"></div>`;
}
function initRealMap(filteredSites){
 const el=document.getElementById('geoPortfolioMap');
 if(!el) return;
 const geoSites=filteredSites.filter(hasGeo);
 if(!geoSites.length){
  el.innerHTML=`<div class="ccGeoCanvas">${realUsaMapFrame()}<div class="ccMapEmpty"><h3>No map-ready pins</h3><p class="muted">No visible locations have latitude/longitude under the current filters. Reset filters or add coordinates.</p></div></div>`;
  return;
 }
 el.innerHTML=`<div class="ccGeoCanvas">${realUsaMapFrame()}${geoSites.map(l=>{
  const pt=projectSiteToMap(l); if(!pt) return '';
  const tier=mapRiskTier(riskScore(l));
  const label=String(l.site||'Site').replace(/'/g,'&#39;');
  return `<button class="ccMapPin ${tier}" style="left:${pt.x}%;top:${pt.y}%" title="${label}" onclick="openSiteDrawer('${l.id}')">${riskScore(l)}</button><div class="ccMapLabel" style="left:${pt.x}%;top:${pt.y}%">${label}</div>`;
 }).join('')}</div>`;
}
function refreshPortfolioMap(){
 renderHeatMap(ai());
 toast('Real USA map refreshed');
}
function renderHeatMap(x){
 const regions=['Northeast','Southeast','Texas','Midwest','West','Other'];
 const allSites=x.ls;
 const filteredSites=allSites.filter(siteMatchesMapFilters);
 const trades=['All',...Array.from(new Set(allSites.map(l=>l.trade).filter(Boolean))).sort()];
 const risks=['All','Critical','High','Medium','Low'];
 const slas=['All','Breached','At Risk','On Track'];
 const grouped=regions.map(region=>{let sites=filteredSites.filter(l=>mapRegionName(l.region)===region);let open=sites.reduce((s,l)=>s+(l.open||0),0);let repeat=sites.reduce((s,l)=>s+(l.repeat||0),0);let spend=sites.reduce((s,l)=>s+(l.spend||0),0);let score=sites.length?Math.round(sites.reduce((s,l)=>s+riskScore(l),0)/sites.length):0;let tier=mapRiskTier(score);return{region,sites,open,repeat,spend,score,tier};});
 let sorted=[...filteredSites].sort((a,b)=>riskScore(b)-riskScore(a));
 let top=sorted[0]||{};
 let active=Object.entries(mapFilters).filter(([k,v])=>v!=='All').map(([k,v])=>`<span class="filterChip">${k.toUpperCase()}: ${v==='true'?'CapEx review':v==='false'?'No CapEx':v}</span>`).join('') || `<span class="filterChip">All sites visible</span>`;
 heatmap.innerHTML=`<div class="card"><div class="mapToolbar"><div><h3>Real USA Portfolio Map</h3><p class="muted">Actual OpenStreetMap USA layer behind CommandCenter risk pins. Uses each location's latitude, longitude, address, market, district, and normalized risk_score. Pins open the same location drawer.</p></div><div><button class="btn" type="button" onclick="resetMapFilters()">Reset Filters</button> <button class="btn dark" type="button" onclick="refreshPortfolioMap()">Refresh Map</button></div></div>
 <div class="mapFilters">
  <select onchange="setMapFilter('risk',this.value)">${risks.map(r=>`<option value="${r}" ${mapFilters.risk===r?'selected':''}>Risk: ${r}</option>`).join('')}</select>
  <select onchange="setMapFilter('trade',this.value)">${trades.map(t=>`<option value="${t}" ${mapFilters.trade===t?'selected':''}>Trade: ${t}</option>`).join('')}</select>
  <select onchange="setMapFilter('sla',this.value)">${slas.map(s=>`<option value="${s}" ${mapFilters.sla===s?'selected':''}>SLA: ${s}</option>`).join('')}</select>
  <select onchange="setMapFilter('capex',this.value)"><option value="All" ${mapFilters.capex==='All'?'selected':''}>CapEx: All</option><option value="true" ${mapFilters.capex==='true'?'selected':''}>CapEx: Review</option><option value="false" ${mapFilters.capex==='false'?'selected':''}>CapEx: Stable</option></select>
 </div>
 <div class="activeFilterBar">${active}</div>
 <div class="mapPinLegend"><span>🔴 Critical 90+</span><span>🟠 High 65-89</span><span>🟡 Medium 35-64</span><span>🟢 Low 0-34</span><span>Real USA map layer</span><span>Click pin = location drawer</span></div>
 <div class="mapStatGrid"><div class="mapStat"><div class="muted">Visible sites</div><b>${filteredSites.length}/${allSites.length}</b></div><div class="mapStat"><div class="muted">Live map pins</div><b>${geoReadyCount(filteredSites)}/${filteredSites.length}</b></div><div class="mapStat"><div class="muted">Visible spend</div><b>${money(filteredSites.reduce((s,l)=>s+(l.spend||0),0))}</b></div></div>
 <div class="realMapWrap"><div class="realMapCard"><div id="geoPortfolioMap"></div></div>
 <div class="mapSidePanel"><div class="tile"><b>Highest Risk Site</b>${top.site?`<div class="siteRiskCard" onclick="openSiteDrawer('${top.id}')"><b>${top.site}</b><div class="muted">${top.address||'Address pending'}<br>${top.market||top.region} · ${top.district||'Unassigned'} · ${top.trade}</div><br>${pill(top.risk)} <span class="badge">Risk ${riskScore(top)}</span><div class="muted">${top.open} open · ${top.repeat} repeat · ${money(top.spend)}</div></div>`:"<p class='muted'>No site risk data matches current filters.</p>"}</div>
 <div class="tile"><b>Regional Rollup</b>${grouped.map(g=>`<div class="row" onclick="openRegionMap('${g.region}')" style="cursor:pointer"><div><b>${g.region}</b><div class="muted">${g.sites.length} sites · ${g.open} open · ${money(g.spend)}</div></div><span class="badge">${g.score}</span></div>`).join('')}</div>
 <div class="tile"><b>Top Risk Locations</b><div class="regionList">${sorted.slice(0,8).map(l=>`<div class="siteRiskCard" onclick="openSiteDrawer('${l.id}')"><div style="display:flex;justify-content:space-between;gap:10px"><div><b>${l.site}</b><div class="muted">${l.market||l.region} · ${l.district||'Unassigned'} · ${l.trade}</div></div><span class="badge">${riskScore(l)}</span></div></div>`).join('')||"<p class='muted'>No locations match current filters.</p>"}</div></div></div></div></div>`;
 setTimeout(()=>initRealMap(filteredSites),40);
}
function openRegionMap(region){
 let x=ai();
 let sites=x.ls.filter(l=>mapRegionName(l.region)===region && siteMatchesMapFilters(l)).sort((a,b)=>riskScore(b)-riskScore(a));
 let open=sites.reduce((s,l)=>s+(l.open||0),0), repeat=sites.reduce((s,l)=>s+(l.repeat||0),0), spend=sites.reduce((s,l)=>s+(l.spend||0),0);
 openModal(`<h2>${region} Region Risk Map</h2><p class="muted">Filtered view: ${sites.length} sites · ${open} open work orders · ${repeat} repeat issues · ${money(spend)} visible spend</p><div class="grid3"><div class="tile"><b>Sites</b><div class="big">${sites.length}</div></div><div class="tile"><b>Open WOs</b><div class="big">${open}</div></div><div class="tile"><b>Spend</b><div class="big">${money(spend)}</div></div></div><div class="tile"><b>Sites Ranked by Risk</b>${sites.length?sites.map(l=>`<div class="row" onclick="openSiteDrawer('${l.id}');closeModal()" style="cursor:pointer"><div><b>${l.site}</b><div class="muted">${l.trade} · ${l.open} open · ${l.repeat} repeat</div></div><div>${pill(l.risk)} <span class="badge">${riskScore(l)}</span></div></div>`).join(''):"<p class='muted'>No locations in this region match current filters.</p>"}</div>`);
}


// ============================
// V2.15.4 HOT PATCH: CLICKABLE ASSETS + LOCATION WORK ORDER DRILLDOWN
// Every asset row now opens the location work-order cockpit. From there, all work orders
// attached to that location are clickable into the full WO modal.
// ============================
function openAssetLocationWorkOrders(assetId){
 let a=db.assets.find(x=>x.id===assetId);
 if(!a){toast("Asset not found");return;}
 let l=db.locations.find(x=>x.id===a.location)||{id:a.location,site:a.location,region:"Unknown",fm:"Unassigned",spend:0,open:0,repeat:0,risk:"Unknown"};
 let wos=db.workOrders.filter(w=>w.location===a.location).sort((x,y)=>(y.sla==='Breached')-(x.sla==='Breached') || (y.priority==='Emergency')-(x.priority==='Emergency') || (y.age||0)-(x.age||0));
 let assetSpecific=wos.filter(w=>w.asset===a.id);
 let siblingAssets=db.assets.filter(x=>x.location===a.location && x.id!==a.id);
 let fail=predictedFailure(a);
 openModal(`<h2>${a.asset}</h2><p class="muted">${l.site} · ${a.trade} · asset ${a.id}</p>
 <div class="grid3"><div class="tile"><b>Asset Failure Risk</b><div class="big">${fail}%</div></div><div class="tile"><b>Location WOs</b><div class="big">${wos.length}</div></div><div class="tile"><b>Location Spend</b><div class="big">${money(l.spend||0)}</div></div></div>
 <div class="tile"><b>Asset Snapshot</b><p class="muted">Age: ${a.age||'N/A'} years<br>Repairs: ${a.repairs||0}<br>12-month spend: ${money(a.spend12||0)}<br>Replacement estimate: ${money(a.replacement||0)}</p><button class="btn dark" onclick="openSiteDrawer('${l.id}');closeModal()">Open Location Drawer</button> <button class="btn" onclick="assetLifecycleModal('${a.id}')">Asset Lifecycle</button></div>
 <div class="tile"><b>Work Orders Directly Attached to This Asset</b>${assetSpecific.length?assetSpecific.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id}</b><div class="muted">${w.trade} · ${w.status} · ${w.vendor}</div></div><div>${pill(w.priority)} ${pill(w.sla)}</div></div>`).join(''):"<p class='muted'>No work orders are directly tied to this asset ID yet.</p>"}</div>
 <div class="tile"><b>All Work Orders at ${l.site}</b>${wos.length?wos.map(w=>`<div class="row" onclick="woModal('${w.id}')" style="cursor:pointer"><div><b>${w.id}</b><div class="muted">Asset: ${w.asset||'Unassigned'} · ${w.trade} · ${w.status} · ${w.vendor}</div></div><div>${pill(w.priority)} ${pill(w.sla)}</div></div>`).join(''):"<p class='muted'>No work orders attached to this location yet.</p>"}</div>
 <div class="tile"><b>Other Assets at This Location</b>${siblingAssets.length?siblingAssets.map(x=>`<div class="row" onclick="openAssetLocationWorkOrders('${x.id}')" style="cursor:pointer"><div><b>${x.asset}</b><div class="muted">${x.trade} · ${x.age||'N/A'} yrs · ${money(x.spend12||0)} 12-mo spend</div></div><span class="badge">${predictedFailure(x)}%</span></div>`).join(''):"<p class='muted'>No other assets at this location.</p>"}</div>`);
}
function renderAssetHistory(x){
 assets.innerHTML=table("Asset Lifecycle History — Click Asset for Location WOs",["Asset","Location","Trade","Age","Failure Risk","12 Mo Spend","Attached WOs","Open"],x.as.map(a=>{
  let fail=predictedFailure(a);let wos=db.workOrders.filter(w=>w.location===a.location);let direct=wos.filter(w=>w.asset===a.id).length;
  return `<tr onclick="openAssetLocationWorkOrders('${a.id}')" style="cursor:pointer"><td><button class="btn dark" onclick="event.stopPropagation();openAssetLocationWorkOrders('${a.id}')">${a.asset}</button></td><td>${loc(a.location).site}</td><td>${a.trade}</td><td>${a.age||'N/A'}</td><td>${pill(fail>70?"High":fail>45?"Medium":"Low")} ${fail}%</td><td><b>${money(a.spend12||0)}</b></td><td><b>${wos.length}</b> location / ${direct} direct</td><td><button class="btn" onclick="event.stopPropagation();openAssetLocationWorkOrders('${a.id}')">View WOs</button></td></tr>`
 }).join(""));
}

init();

// =====================================================
// V2.16.34 FINAL SAFE PORTFOLIO HEAT MAP PATCH
// Scope: Portfolio Heat Map only. No Leaflet/CDN. No iframe.
// Renders a visible USA SVG map first, then overlays heat pins from db.locations.
// Pin number = attached work order count. Pin click = existing site drawer + attached WOs.
// =====================================================
function ccSafeHtml(v){return String(v??'').replace(/[&<>"]/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch];});}
function ccHeatLocations(){
 const active=Number(db?.activeClient??0);
 const sites=Array.isArray(db?.locations)?db.locations:[];
 const filtered=sites.filter(l=>Number(l.client)===active);
 return filtered.length?filtered:sites;
}
function ccWorkOrdersForLocation(locationId){return (Array.isArray(db?.workOrders)?db.workOrders:[]).filter(w=>w.location===locationId);}
function ccRiskValue(site){
 if(typeof riskScore==='function') return Number(riskScore(site)||0);
 return Number(site?.risk_score||site?.riskScore||site?.open*7+site?.repeat*12||0);
}
function ccRiskClass(score){return score>=90?'critical':score>=65?'high':score>=35?'medium':'low';}
function ccProjectUsaPin(site){
 const lat=Number(site.latitude), lon=Number(site.longitude);
 if(!Number.isFinite(lat)||!Number.isFinite(lon)) return null;
 // Lower 48 projection tuned for the dashboard panel.
 const minLon=-125, maxLon=-66, minLat=24, maxLat=50;
 const x=((lon-minLon)/(maxLon-minLon))*100;
 const y=((maxLat-lat)/(maxLat-minLat))*100;
 if(x<-5||x>105||y<-8||y>108) return null;
 return {x:Math.max(4,Math.min(96,x)),y:Math.max(7,Math.min(93,y))};
}
function ccUsaSvgMap(){
 return `<svg class="ccUsaSvg" viewBox="0 0 1000 600" role="img" aria-label="USA portfolio heat map">
  <defs>
   <linearGradient id="ccUsaLand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f8fafc"/><stop offset="1" stop-color="#dbeafe"/></linearGradient>
   <filter id="ccGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="1000" height="600" rx="26" fill="#07111f"/>
  <g opacity=".2" stroke="#38bdf8" stroke-width="1">
   <path d="M85 110 H930 M85 190 H930 M85 270 H930 M85 350 H930 M85 430 H930 M85 510 H930"/>
   <path d="M130 70 V535 M250 70 V535 M370 70 V535 M490 70 V535 M610 70 V535 M730 70 V535 M850 70 V535"/>
  </g>
  <path filter="url(#ccGlow)" fill="url(#ccUsaLand)" stroke="#60a5fa" stroke-width="4" d="M138 242 L176 190 L258 164 L350 126 L475 108 L585 126 L690 150 L800 190 L870 247 L850 302 L788 330 L746 378 L694 405 L625 427 L570 456 L495 450 L433 423 L356 430 L292 392 L238 375 L202 330 L145 305 Z"/>
  <path fill="#bfdbfe" opacity=".75" stroke="#60a5fa" stroke-width="3" d="M195 405 L238 420 L285 462 L330 508 L305 528 L247 492 L197 455 Z"/>
  <path fill="#bfdbfe" opacity=".75" stroke="#60a5fa" stroke-width="3" d="M794 394 L836 420 L858 468 L840 520 L800 490 L780 440 Z"/>
  <text x="58" y="60" fill="#93c5fd" font-size="18" font-weight="800">CC CommandCenter USA Portfolio Heat Map</text>
  <text x="58" y="548" fill="#bae6fd" font-size="13" font-weight="700">Self-contained SVG layer • no CDN • no external map dependency</text>
 </svg>`;
}
function ccRenderUsaPins(sites){
 return sites.map(site=>{
  const pt=ccProjectUsaPin(site); if(!pt) return '';
  const wos=ccWorkOrdersForLocation(site.id);
  const score=ccRiskValue(site); const cls=ccRiskClass(score);
  const label=ccSafeHtml(site.site||site.id||'Site');
  return `<button class="ccUsaPin ${cls}" style="left:${pt.x}%;top:${pt.y}%" title="${label}: ${wos.length} WOs" onclick="openSiteDrawer('${ccSafeHtml(site.id)}')"><span>${wos.length}</span></button><div class="ccUsaPinLabel" style="left:${pt.x}%;top:${pt.y}%">${label}</div>`;
 }).join('');
}
function ccRenderSiteRows(sites){
 const ranked=[...sites].sort((a,b)=>ccRiskValue(b)-ccRiskValue(a));
 return ranked.map(site=>{
  const wos=ccWorkOrdersForLocation(site.id); const score=ccRiskValue(site);
  return `<div class="ccMapSiteRow" onclick="openSiteDrawer('${ccSafeHtml(site.id)}')"><div><b>${ccSafeHtml(site.site||site.id)}</b><div class="muted">${ccSafeHtml(site.market||site.region||'Market pending')} · ${ccSafeHtml(site.trade||'Trade pending')}</div></div><div><span class="badge">${wos.length} WO</span> <span class="badge">Risk ${score}</span></div></div>`;
 }).join('') || `<p class="muted">No locations loaded for this client yet.</p>`;
}
function renderHeatMap(x){
 const panel=document.getElementById('heatmap');
 if(!panel) return;
 const sites=ccHeatLocations();
 const mapReady=sites.filter(ccProjectUsaPin);
 const openWos=sites.reduce((n,l)=>n+ccWorkOrdersForLocation(l.id).length,0);
 const spend=sites.reduce((n,l)=>n+Number(l.spend||0),0);
 panel.innerHTML=`<div class="card ccHeatMapCard"><div class="mapToolbar"><div><h3>Portfolio Heat Map</h3><p class="muted">USA map and heat pins rebuilt inside the existing dashboard. Pin number equals attached work orders. Click any pin or site row to open the location drawer.</p></div><button class="btn dark" type="button" onclick="renderHeatMap(ai())">Refresh Map</button></div>
 <div class="mapStatGrid"><div class="mapStat"><div class="muted">Locations</div><b>${sites.length}</b></div><div class="mapStat"><div class="muted">Pins</div><b>${mapReady.length}</b></div><div class="mapStat"><div class="muted">Attached WOs</div><b>${openWos}</b></div><div class="mapStat"><div class="muted">Spend</div><b>${typeof money==='function'?money(spend):spend}</b></div></div>
 <div class="ccUsaMapLayout"><div class="ccUsaMapBox">${ccUsaSvgMap()}<div class="ccUsaPinLayer">${ccRenderUsaPins(mapReady)}</div></div><div class="ccUsaSide"><h3>Location Drilldown</h3><p class="muted">These rows use the same location/work-order links as the pins.</p>${ccRenderSiteRows(sites)}</div></div></div>`;
}
function refreshPortfolioMap(){renderHeatMap(ai()); if(typeof toast==='function') toast('USA heat map refreshed');}
