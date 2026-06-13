
:root{--bg:#f4f4f5;--card:#fff;--ink:#09090b;--muted:#71717a;--line:#e4e4e7;--dark:#111827;--red:#dc2626;--amber:#d97706;--green:#16a34a;--blue:#2563eb}
*{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;background:var(--bg);color:var(--ink)}
.app{display:grid;grid-template-columns:280px 1fr;min-height:100vh}
.side{background:#fff;border-right:1px solid var(--line);padding:22px;position:sticky;top:0;height:100vh;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:#a1a1aa #f4f4f5}
.brand{background:#09090b;color:white;border-radius:24px;padding:22px;box-shadow:0 18px 50px rgba(0,0,0,.18);position:sticky;top:0;z-index:100}
.brandMark{display:flex;align-items:center;gap:12px;margin-bottom:14px}.brandLogo{width:43px;height:43px;border-radius:14px;border:2px solid rgba(255,255,255,.92);display:grid;place-items:center;font-weight:1000;font-size:24px;letter-spacing:-2px}.brandWord{font-size:12px;color:#a1a1aa;text-transform:uppercase;font-weight:950;letter-spacing:2px}.brand h1{margin:0 0 6px;font-size:29px;letter-spacing:-1px}.brand p{margin:0;color:#d4d4d8;line-height:1.35}.brandTag{display:inline-flex;margin-top:14px;border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:7px 10px;color:#fff;font-size:12px;font-weight:950;background:rgba(255,255,255,.06)}
.nav{margin-top:18px;display:grid;gap:7px;padding-bottom:110px}.nav button{border:0;background:transparent;color:#52525b;text-align:left;padding:13px 14px;border-radius:17px;font-weight:900;cursor:pointer}
.nav button.active,.nav button:hover{background:#09090b;color:#fff}
.side::-webkit-scrollbar{width:8px}
.side::-webkit-scrollbar-track{background:#f4f4f5;border-radius:999px}
.side::-webkit-scrollbar-thumb{background:#a1a1aa;border-radius:999px}
.side::-webkit-scrollbar-thumb:hover{background:#71717a}

.main{padding:22px}.top{display:flex;justify-content:space-between;gap:14px;align-items:flex-start;margin-bottom:18px}
.kicker{font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:2px;color:#71717a}.title h2{font-size:34px;margin:4px 0}.title p{margin:0;color:#71717a}
.controls{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}select,input,textarea{border:1px solid var(--line);border-radius:15px;padding:12px 13px;background:white;font-weight:750}
.btn{border:0;border-radius:15px;padding:12px 14px;font-weight:950;cursor:pointer;background:#fff;border:1px solid var(--line)}.btn.dark{background:#09090b;color:white}.btn.red{background:#dc2626;color:white}.btn.green{background:#16a34a;color:white}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:18px}.card{background:white;border:1px solid var(--line);border-radius:24px;padding:20px;box-shadow:0 10px 30px rgba(0,0,0,.045)}
.metric .label{font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#71717a;font-weight:950}.metric .value{font-size:30px;font-weight:1000;margin-top:5px}.metric .sub{font-size:13px;color:#71717a}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.page{display:none}.page.active{display:block}
h3{margin:0 0 14px;font-size:19px}.aihero{background:#09090b;color:white;border-radius:28px;padding:25px}.aihero h1{font-size:34px;margin:8px 0}.aihero p{color:#d4d4d8;line-height:1.45}
table{width:100%;border-collapse:collapse;font-size:14px}th{text-align:left;color:#71717a;text-transform:uppercase;font-size:11px;letter-spacing:1px;padding:11px;border-bottom:1px solid var(--line)}td{padding:12px;border-bottom:1px solid var(--line);vertical-align:top}.scroll{overflow:auto;border:1px solid var(--line);border-radius:20px}
.pill{display:inline-flex;border-radius:999px;padding:5px 9px;font-size:12px;font-weight:950;border:1px solid}.red{background:#fef2f2;color:#b91c1c;border-color:#fecaca}.amber{background:#fffbeb;color:#b45309;border-color:#fde68a}.green{background:#f0fdf4;color:#15803d;border-color:#bbf7d0}.blue{background:#eff6ff;color:#1d4ed8;border-color:#bfdbfe}
.row{display:flex;justify-content:space-between;gap:12px;align-items:center;background:#fafafa;border:1px solid var(--line);border-radius:18px;padding:13px;margin-bottom:10px}.muted{color:#71717a}.big{font-size:42px;font-weight:1000}.bar{height:12px;background:#e5e7eb;border-radius:999px;overflow:hidden}.bar span{display:block;height:100%;background:#09090b;border-radius:999px}.toast{position:fixed;right:18px;bottom:18px;background:#09090b;color:white;padding:14px 16px;border-radius:18px;font-weight:950;display:none}
@media(max-width:1000px){.app{grid-template-columns:1fr}.side{position:relative;height:auto}.metrics,.grid2,.grid3{grid-template-columns:1fr}.top{display:block}.controls{justify-content:flex-start;margin-top:12px}}

.modal{position:fixed;inset:0;background:rgba(0,0,0,.45);display:none;align-items:center;justify-content:center;padding:22px;z-index:10}
.modal .box{background:#fff;border-radius:26px;padding:22px;max-width:920px;width:100%;max-height:86vh;overflow:auto;box-shadow:0 30px 90px rgba(0,0,0,.35)}
.close{float:right;border:0;background:#09090b;color:white;border-radius:12px;padding:8px 11px;font-weight:950;cursor:pointer}
.tile{border:1px solid var(--line);background:#fafafa;border-radius:20px;padding:16px;margin:10px 0}
.kanban{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.lane{background:#fafafa;border:1px solid var(--line);border-radius:20px;padding:12px;min-height:210px}.lane h4{margin:0 0 10px}.woCard{background:white;border:1px solid var(--line);border-radius:16px;padding:12px;margin-bottom:10px;box-shadow:0 8px 20px rgba(0,0,0,.035)}
.chat{display:grid;gap:10px}.bubble{padding:13px 14px;border-radius:18px;background:#f4f4f5}.bubble.ai{background:#09090b;color:white}.bubble.ai .muted{color:#d4d4d8}
.badge{display:inline-block;border-radius:10px;background:#f4f4f5;padding:4px 8px;margin:2px;font-weight:900;font-size:12px}
@media(max-width:1100px){.kanban{grid-template-columns:1fr}}


.chartbox{height:220px;border:1px solid var(--line);border-radius:20px;padding:16px;background:#fafafa;display:flex;align-items:flex-end;gap:12px}
.barcol{flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:8px;height:100%}
.barfill{width:100%;border-radius:12px 12px 4px 4px;background:#09090b;min-height:8px}
.barlabel{font-size:11px;color:#71717a;font-weight:900;text-align:center}
.photoGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px}
.photoThumb{border:1px solid var(--line);border-radius:14px;background:#fafafa;padding:10px;font-size:12px;font-weight:800}
.dispatchStep{border:1px solid var(--line);border-radius:16px;padding:12px;margin:8px 0;background:#fff}
.timeline{border-left:3px solid #09090b;margin-left:10px;padding-left:14px}
.timeline .event{margin-bottom:12px}


.mapGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.mapSite{border:1px solid var(--line);border-radius:18px;padding:14px;background:#fafafa;cursor:pointer}
.mapSite:hover{background:#fff;box-shadow:0 10px 25px rgba(0,0,0,.06)}
.portfolioMapShell{display:grid;grid-template-columns:1.15fr .85fr;gap:16px;align-items:stretch}
.regionRiskMap{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,122px);gap:12px;min-height:390px}
.regionCell{border:1px solid var(--line);border-radius:24px;padding:16px;background:#fafafa;cursor:pointer;position:relative;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,.035)}
.regionCell:hover{background:#fff;transform:translateY(-1px);box-shadow:0 14px 34px rgba(0,0,0,.07)}
.regionCell .regionName{font-weight:1000;font-size:18px}.regionCell .regionMeta{font-size:12px;color:#71717a;font-weight:850;margin-top:5px}
.regionCell .regionScore{position:absolute;right:14px;bottom:12px;font-size:32px;font-weight:1000;color:#09090b;opacity:.9}
.regionCell .regionBadge{position:absolute;left:14px;bottom:14px}
.regionCell.critical{box-shadow:inset 0 0 0 2px #fecaca;background:#fff7f7}
.regionCell.high{box-shadow:inset 0 0 0 2px #fed7aa;background:#fffbf4}
.regionCell.medium{box-shadow:inset 0 0 0 2px #fde68a;background:#fffdf0}
.regionCell.low{box-shadow:inset 0 0 0 2px #bbf7d0;background:#f7fff9}
.regionEast{grid-column:4;grid-row:1 / span 2}.regionSoutheast{grid-column:3;grid-row:2}.regionTexas{grid-column:2;grid-row:3}.regionWest{grid-column:1;grid-row:2}.regionMidwest{grid-column:2 / span 2;grid-row:1}.regionOther{grid-column:1;grid-row:1}
.mapLegend{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.mapLegend span{border:1px solid var(--line);border-radius:999px;padding:6px 9px;background:#fafafa;font-size:12px;font-weight:950}
.regionList{display:grid;gap:10px}.siteRiskCard{border:1px solid var(--line);border-radius:18px;padding:13px;background:#fafafa;cursor:pointer}.siteRiskCard:hover{background:#fff;box-shadow:0 10px 25px rgba(0,0,0,.06)}
.mapToolbar{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}.mapStatGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:12px 0}.mapStat{border:1px solid var(--line);border-radius:18px;background:#fafafa;padding:12px}.mapStat b{font-size:22px}
.mapFilters{display:grid;grid-template-columns:repeat(4,minmax(150px,1fr));gap:10px;margin:14px 0}.mapFilters select{width:100%}.activeFilterBar{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}.filterChip{border:1px solid var(--line);border-radius:999px;padding:6px 9px;background:#fff;font-size:12px;font-weight:950}.drawerOverlay{position:fixed;inset:0;background:rgba(0,0,0,.32);display:none;justify-content:flex-end;z-index:20}.drawerPanel{background:#fff;width:min(560px,96vw);height:100vh;overflow:auto;padding:22px;box-shadow:-20px 0 60px rgba(0,0,0,.28)}.drawerHeader{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:14px}.drawerClose{border:0;background:#09090b;color:white;border-radius:12px;padding:9px 12px;font-weight:950;cursor:pointer}.drawerSection{border:1px solid var(--line);border-radius:20px;padding:14px;background:#fafafa;margin:12px 0}.miniGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.miniStat{border:1px solid var(--line);border-radius:16px;background:#fff;padding:12px}.miniStat b{font-size:20px}.siteActionBar{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}@media(max-width:1100px){.mapFilters,.miniGrid{grid-template-columns:1fr 1fr}.drawerPanel{width:100vw}}
@media(max-width:1100px){.portfolioMapShell{grid-template-columns:1fr}.regionRiskMap{grid-template-columns:1fr;grid-template-rows:auto}.regionEast,.regionSoutheast,.regionTexas,.regionWest,.regionMidwest,.regionOther{grid-column:auto;grid-row:auto}}
.reportPage{background:white;border:1px solid var(--line);border-radius:20px;padding:22px}
.approvalTrail{border-left:3px solid #09090b;margin-left:10px;padding-left:14px}
.lifecycleGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.lifecycleCard{border:1px solid var(--line);border-radius:18px;padding:14px;background:#fafafa}
@media(max-width:1100px){.mapGrid,.lifecycleGrid{grid-template-columns:1fr}}

.cloudStatus{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:7px 10px;font-size:12px;font-weight:950;border:1px solid var(--line);background:#fafafa}
.cloudDot{width:9px;height:9px;border-radius:999px;background:#d97706}.cloudDot.live{background:#16a34a}.cloudDot.off{background:#71717a}
.codebox{white-space:pre-wrap;background:#09090b;color:#fff;border-radius:18px;padding:14px;max-height:320px;overflow:auto;font-size:12px;line-height:1.45}


.realMapWrap{display:grid;grid-template-columns:1.35fr .65fr;gap:16px;margin-top:14px}
.realMapCard{border:1px solid var(--line);border-radius:24px;overflow:hidden;background:#fff;box-shadow:0 10px 30px rgba(0,0,0,.045)}
#geoPortfolioMap{height:560px;width:100%;background:#e5e7eb}
.mapSidePanel{display:grid;gap:12px}
.mapPinLegend{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.mapPinLegend span{border:1px solid var(--line);border-radius:999px;padding:6px 9px;background:#fafafa;font-size:12px;font-weight:950}
.leaflet-popup-content-wrapper{border-radius:16px}.ccPopup b{font-size:14px}.ccPopup .muted{font-size:12px}.ccPopup button{margin-top:8px;border:0;background:#09090b;color:#fff;border-radius:10px;padding:8px 10px;font-weight:900;cursor:pointer}
.ccDivMarker{width:22px;height:22px;border-radius:999px;border:3px solid #fff;box-shadow:0 6px 16px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:1000;color:white}
.ccDivMarker.critical{background:#dc2626}.ccDivMarker.high{background:#d97706}.ccDivMarker.medium{background:#eab308;color:#111827}.ccDivMarker.low{background:#16a34a}
@media(max-width:1100px){.realMapWrap{grid-template-columns:1fr}#geoPortfolioMap{height:460px}}


/* V2.8D crisp vector geographic map patch */
.ccGeoCanvas{position:relative;height:560px;border-radius:24px;overflow:hidden;background:#f8fafc;border:1px solid var(--line);isolation:isolate}
.ccGeoCanvas:after{content:"Crisp vector map • lat/lon pin projection";position:absolute;left:16px;bottom:12px;color:#334155;font-size:12px;font-weight:950;background:rgba(255,255,255,.92);border:1px solid #cbd5e1;border-radius:999px;padding:7px 10px;z-index:4}
.ccGeoMapSvg{position:absolute;inset:0;width:100%;height:100%;z-index:0;background:linear-gradient(180deg,#f8fafc 0%,#eef2f7 100%)}
.ccMapPin{position:absolute;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:999px;border:3px solid #fff;box-shadow:0 12px 26px rgba(15,23,42,.35);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:1000;color:#fff;cursor:pointer;z-index:5}
.ccMapPin:hover{transform:translate(-50%,-50%) scale(1.14);z-index:8}.ccMapPin.critical{background:#dc2626}.ccMapPin.high{background:#d97706}.ccMapPin.medium{background:#eab308;color:#111827}.ccMapPin.low{background:#16a34a}
.ccMapLabel{position:absolute;transform:translate(-50%,0);margin-top:20px;white-space:nowrap;background:rgba(255,255,255,.96);border:1px solid #cbd5e1;border-radius:999px;padding:4px 7px;font-size:11px;font-weight:950;color:#111827;box-shadow:0 6px 16px rgba(15,23,42,.12);pointer-events:none;z-index:6}.ccMapEmpty{padding:22px;background:#fff;border-radius:18px;margin:16px;position:relative;z-index:3}
@media(max-width:1100px){.ccGeoCanvas{height:460px}.ccMapLabel{display:none}}

/* V2.8D REAL USA MAP TILE LAYER */
.ccGeoCanvas{position:relative;height:620px;border-radius:24px;overflow:hidden;background:#dbeafe;border:1px solid var(--line);isolation:isolate;box-shadow:inset 0 0 0 1px rgba(15,23,42,.05)}
.ccGeoCanvas:after{content:"Real OpenStreetMap USA layer • lat/lon pins";position:absolute;left:16px;bottom:12px;color:#111827;font-size:12px;font-weight:950;background:rgba(255,255,255,.94);border:1px solid #cbd5e1;border-radius:999px;padding:7px 10px;z-index:7;box-shadow:0 8px 20px rgba(15,23,42,.12)}
.ccRealMapFrame{position:absolute;inset:0;width:100%;height:100%;border:0;z-index:0;filter:saturate(.95) contrast(1.02);background:#dbeafe;pointer-events:none}
.ccMapShade{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.02));}
.ccMapPin{position:absolute;transform:translate(-50%,-50%);width:38px;height:38px;border-radius:999px;border:3px solid #fff;box-shadow:0 14px 30px rgba(15,23,42,.42);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:1000;color:#fff;cursor:pointer;z-index:6}
.ccMapPin:hover{transform:translate(-50%,-50%) scale(1.16);z-index:9}.ccMapPin.critical{background:#dc2626}.ccMapPin.high{background:#d97706}.ccMapPin.medium{background:#eab308;color:#111827}.ccMapPin.low{background:#16a34a}
.ccMapLabel{position:absolute;transform:translate(-50%,0);margin-top:22px;white-space:nowrap;background:rgba(255,255,255,.96);border:1px solid #cbd5e1;border-radius:999px;padding:4px 8px;font-size:11px;font-weight:950;color:#111827;box-shadow:0 7px 18px rgba(15,23,42,.16);pointer-events:none;z-index:6}.ccMapEmpty{padding:22px;background:#fff;border-radius:18px;margin:16px;position:relative;z-index:3}
@media(max-width:1100px){.ccGeoCanvas{height:480px}.ccMapLabel{display:none}}


/* V2.9 Mission Control / Internal Ops Backbone */
.missionHero{background:#09090b;color:#fff;border-radius:30px;padding:24px;box-shadow:0 24px 70px rgba(0,0,0,.18);position:relative;overflow:hidden}
.missionHero:after{content:"";position:absolute;right:-70px;top:-70px;width:210px;height:210px;border-radius:999px;background:rgba(255,255,255,.08)}
.missionHero h1{font-size:36px;margin:8px 0 8px;letter-spacing:-.03em}.missionHero p{color:#d4d4d8;line-height:1.45;margin:0;max-width:780px}
.queueGrid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:16px 0}.queueCard{border:1px solid var(--line);background:#fff;border-radius:24px;padding:16px;cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.05);transition:.15s transform,.15s box-shadow}.queueCard:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(0,0,0,.08)}
.queueIcon{font-size:22px}.queueCount{font-size:34px;font-weight:1000;margin-top:4px}.queueTitle{font-weight:1000;margin-top:3px}.queueSub{font-size:12px;color:#71717a;margin-top:3px}.queueCard.redline{border-top:5px solid #dc2626}.queueCard.amberline{border-top:5px solid #d97706}.queueCard.blueline{border-top:5px solid #2563eb}.queueCard.greenline{border-top:5px solid #16a34a}.queueCard.darkline{border-top:5px solid #09090b}
.focusItem{display:grid;grid-template-columns:110px 1fr auto;gap:12px;align-items:center;background:#fafafa;border:1px solid var(--line);border-radius:18px;padding:13px;margin-bottom:10px;cursor:pointer}.focusItem:hover{background:white;box-shadow:0 10px 26px rgba(0,0,0,.06)}
.opsFields{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.opsField{border:1px solid var(--line);background:#fafafa;border-radius:18px;padding:12px}.opsField b{display:block;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#71717a;margin-bottom:6px}.opsField div{font-weight:950}
.warningText{color:#b91c1c;font-weight:1000}.missionTabs{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.missionTabs button{border:1px solid var(--line);border-radius:999px;background:#fff;padding:9px 11px;font-weight:950;cursor:pointer}.missionTabs button:hover{background:#09090b;color:#fff}
@media(max-width:1200px){.queueGrid{grid-template-columns:repeat(2,1fr)}.opsFields{grid-template-columns:1fr}.focusItem{grid-template-columns:1fr}}


/* V2.10 Work Order Timeline Engine */
.woTimelineWrap{border:1px solid var(--line);border-radius:22px;background:#fff;padding:16px;margin:12px 0}
.woTimeline{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:12px}
.timelineStep{border:1px solid var(--line);border-radius:18px;background:#fafafa;padding:12px;min-height:86px;position:relative}
.timelineStep.done{background:#f0fdf4;border-color:#bbf7d0}
.timelineStep.current{background:#eff6ff;border-color:#bfdbfe;box-shadow:inset 0 0 0 2px #bfdbfe}
.timelineStep .stepName{font-weight:1000;font-size:13px}.timelineStep .stepMeta{font-size:11px;color:#71717a;margin-top:5px;line-height:1.35}.timelineDot{width:14px;height:14px;border-radius:999px;background:#d4d4d8;margin-bottom:8px}.timelineStep.done .timelineDot{background:#16a34a}.timelineStep.current .timelineDot{background:#2563eb}
.noteSplitGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.noteBox{border:1px solid var(--line);border-radius:18px;background:#fafafa;padding:12px}.noteBox label{display:block;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#71717a;font-weight:1000;margin-bottom:7px}.noteBox textarea{width:100%;min-height:92px;background:#fff}
.lifecycleActions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.auditEvent{border-left:4px solid #09090b;background:#fafafa;border-radius:14px;padding:10px 12px;margin:8px 0}.auditEvent b{display:block}.auditEvent span{font-size:12px;color:#71717a}.timelineControls{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px}
@media(max-width:1200px){.woTimeline{grid-template-columns:repeat(2,1fr)}.noteSplitGrid{grid-template-columns:1fr}}


/* V2.11 Escalation Center */
.escalationHero{background:#111827;color:#fff;border-radius:30px;padding:24px;box-shadow:0 24px 70px rgba(0,0,0,.16);position:relative;overflow:hidden}
.escalationHero h1{font-size:36px;margin:8px 0;letter-spacing:-.03em}.escalationHero p{color:#d4d4d8;line-height:1.45;margin:0;max-width:860px}
.escalationGrid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:16px 0}.escalationCard{border:1px solid var(--line);background:#fff;border-radius:24px;padding:16px;cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.05);transition:.15s transform,.15s box-shadow}.escalationCard:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(0,0,0,.08)}
.escalationCard .count{font-size:34px;font-weight:1000;margin-top:4px}.escalationCard .label{font-weight:1000}.escalationCard .sub{font-size:12px;color:#71717a;margin-top:4px}.severityRail{border-left:6px solid #09090b}.severityRail.critical{border-left-color:#dc2626}.severityRail.high{border-left-color:#d97706}.severityRail.medium{border-left-color:#eab308}.severityRail.low{border-left-color:#16a34a}
.fireRow{display:grid;grid-template-columns:130px 1fr 150px 150px;gap:12px;align-items:center;background:#fafafa;border:1px solid var(--line);border-radius:18px;padding:13px;margin-bottom:10px;cursor:pointer}.fireRow:hover{background:#fff;box-shadow:0 10px 26px rgba(0,0,0,.06)}
.escalationActions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.escalationActions .btn{padding:9px 11px;border-radius:12px}.escalationOwnerGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.escalationOwnerGrid input,.escalationOwnerGrid select{width:100%}
@media(max-width:1200px){.escalationGrid{grid-template-columns:repeat(2,1fr)}.fireRow{grid-template-columns:1fr}.escalationOwnerGrid{grid-template-columns:1fr}}

/* V2.9A Navigation Scroll Upgrade */
.side::-webkit-scrollbar{width:8px}
.side::-webkit-scrollbar-track{background:#f4f4f5;border-radius:999px}
.side::-webkit-scrollbar-thumb{background:#d4d4d8;border-radius:999px}
.side::-webkit-scrollbar-thumb:hover{background:#a1a1aa}

/* V2.12 Account Manager Dashboard */
.amHero{background:#09090b;color:#fff;border-radius:30px;padding:24px;box-shadow:0 24px 70px rgba(0,0,0,.18);position:relative;overflow:hidden}
.amHero h1{font-size:36px;margin:8px 0;letter-spacing:-.03em}.amHero p{color:#d4d4d8;line-height:1.45;margin:0;max-width:840px}
.amQueueGrid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:16px 0}.amQueueCard{border:1px solid var(--line);background:#fff;border-radius:24px;padding:16px;cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.05);border-top:5px solid #09090b}.amQueueCard:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(0,0,0,.08)}
.amQueueCard.red{border-top-color:#dc2626}.amQueueCard.amber{border-top-color:#d97706}.amQueueCard.blue{border-top-color:#2563eb}.amQueueCard.green{border-top-color:#16a34a}.amQueueCard.dark{border-top-color:#09090b}
.amQueueCard .num{font-size:34px;font-weight:1000}.amQueueCard .label{font-weight:1000}.amQueueCard .sub{font-size:12px;color:#71717a;margin-top:4px}.amDailyList{display:grid;gap:10px}.amTouchItem{display:grid;grid-template-columns:110px 1fr auto;gap:12px;align-items:center;border:1px solid var(--line);background:#fafafa;border-radius:18px;padding:13px;cursor:pointer}.amTouchItem:hover{background:#fff;box-shadow:0 10px 26px rgba(0,0,0,.06)}
.amPerfGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.amPerfCard{border:1px solid var(--line);background:#fafafa;border-radius:18px;padding:13px}.amPerfCard b{font-size:24px}.amActionBar{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.amBadge{display:inline-flex;border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 9px;font-size:12px;font-weight:950;margin:2px}.quickUpdateGrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
@media(max-width:1200px){.amQueueGrid{grid-template-columns:repeat(2,1fr)}.amPerfGrid{grid-template-columns:repeat(2,1fr)}.amTouchItem{grid-template-columns:1fr}.quickUpdateGrid{grid-template-columns:1fr}}



/* V2.13 Vercel staging prep */
.side{overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;}
.side::-webkit-scrollbar{width:8px;}
.side::-webkit-scrollbar-track{background:#f4f4f5;}
.side::-webkit-scrollbar-thumb{background:#d4d4d8;border-radius:999px;}
.side::-webkit-scrollbar-thumb:hover{background:#a1a1aa;}
.nav{padding-bottom:96px;}
.brand{position:sticky;top:0;z-index:100;}
.deployBadge{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:7px 10px;font-weight:950;font-size:12px;color:#52525b}
