/* =====================================================================
   인사이드바디랩 몸속 테스트 — 엔진 + 테스트 내용
   ▶ 테스트 추가/수정은 이 파일만 고치면 됨 (아임웹 재게시 불필요)
   ▶ 수정 후 jsDelivr 캐시 갱신: https://purge.jsdelivr.net/gh/<USER>/<REPO>@main/ibl-tests.js
   ===================================================================== */
(function(){

/* ===== ① 설정 ===== */
var IBL_SITE_URL    = "https://www.insidebodylab.kr/selfcheck";    /* 이 테스트가 올라간 페이지 주소 (공유 링크 = 이 주소) */
var IBL_KAKAO_KEY   = "10b36dd895bcbb506adf63ebd909c845";          /* 카카오 JavaScript 키 */
var IBL_CONTENT_URL = "https://www.insidebodylab.kr/lab";          /* '더 알아보기' → 성분 연구소 */
var IBL_OG_IMAGE    = "https://www.insidebodylab.kr/og.png";       /* 카톡 공유 카드 썸네일 */

/* ===== ② 이미지 주소 (폴더 바뀌면 IBL_IMG_BASE만 교체) ===== */
var IBL_IMG_BASE = "https://gi.esmplus.com/acorn2021/%EC%9D%B8%EB%B0%94%EB%9E%A9%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%9E%90%EB%A3%8C/";
var IBL_IMAGES = {
  cheetah:  IBL_IMG_BASE+"cheetah.jpeg",
  dolphin:  IBL_IMG_BASE+"dolphin.jpeg",
  rabbit:   IBL_IMG_BASE+"rabbit.jpeg",
  cat:      IBL_IMG_BASE+"cat.jpeg",
  turtle:   IBL_IMG_BASE+"turtle.jpeg",
  bear:     IBL_IMG_BASE+"bear.jpeg",
  squirrel: IBL_IMG_BASE+"squirrel.jpeg",
  sloth:    IBL_IMG_BASE+"sloth.jpeg"
};

/* ===== ②-1 제품 (결과 CTA 연결) ===== */
var IBL_PRODUCTS = {
  leucine:  { name:"류신",    full:"라휘 류신 프리미엄 정",        img:"https://cdn-optimized.imweb.me/thumbnail/20250417/c1f613c92600b.jpg?w=750", url:"https://www.insidebodylab.kr/solution/?idx=11", article:"https://www.insidebodylab.kr/magazine/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=172505051&t=board" },
  albumin:  { name:"활부민",  full:"라휘 활부민 고함량 난백 알부민", img:"https://cdn-optimized.imweb.me/thumbnail/20251228/b355f8cca53e9.jpg?w=750", url:"https://www.insidebodylab.kr/solution/?idx=22", article:"https://www.insidebodylab.kr/magazine/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=172570383&t=board" },
  melatonin:{ name:"멜라토닌", full:"라휘 식물성 멜라토닌 무드멜라",  img:"https://cdn-optimized.imweb.me/thumbnail/20240715/57defa0942df6.jpg?w=750", url:"https://www.insidebodylab.kr/solution/?idx=19", article:"https://www.insidebodylab.kr/magazine/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=172580940&t=board" }
};
/* 공통 오퍼 문구 (바꾸려면 여기만 수정) */
var IBL_OFFER = [ "첫 구매 <b>5,000원 할인</b>", "불만족 시 <b>100% 환불</b>", "신규 가입 시 <b>110,000원 쿠폰팩</b> 증정" ];

/* ===== ③ 테스트 정의 ===== */
var IBL_TESTS = {
  metabolism:{
    status:"active",
    icon:'<img src="'+IBL_IMAGES.cheetah+'" alt="">',
    menuDesc:"먹어도 안 찌는 사람 vs 물만 먹어도 찌는 사람, 그 차이는?",
    title:"내 몸속 대사 동물 테스트",
    lead:"먹어도 안 찌는 사람, 물만 먹어도 찌는 사람.<br>그 차이는 몸속 '<b>대사 엔진</b>'에 있습니다.",
    meta:"12문항 · 약 40초 · 8가지 대사 동물 중 내 유형은?",
    heroImg:IBL_IMAGES.cheetah,
    quizName:"대사 동물 테스트",
    othersLabel:"대사 동물 8유형",
    pre:"당신의 대사 동물은",
    questions:[
      {t:"먹는 양에 비해 살이 잘 안 찌는 편이다", axis:"speed", o:+1},
      {t:"추위를 많이 타고 손발이 차가운 편이다", axis:"speed", o:-1},
      {t:"가만히 있어도 몸에 열이 많고 더위를 잘 탄다", axis:"speed", o:+1},
      {t:"물만 먹어도 살이 찌는 느낌이다", axis:"speed", o:-1},
      {t:"하루 종일 에너지가 비교적 일정하게 유지된다", axis:"stable", o:+1},
      {t:"오후만 되면 갑자기 졸리고 집중이 확 떨어진다", axis:"stable", o:-1},
      {t:"하루에 단 게 당기는 순간이 꼭 찾아온다", axis:"stable", o:-1},
      {t:"스트레스를 받으면 폭식하거나 입맛이 확 변한다", axis:"stable", o:-1},
      {t:"평소 몸을 부지런히 움직이는 편이다", axis:"active", o:+1},
      {t:"앉아있거나 누워있는 시간이 긴 편이다", axis:"active", o:-1},
      {t:"계단·걷기 같은 일상 속 움직임을 즐긴다", axis:"active", o:+1},
      {t:"주말엔 주로 집에서 쉬는 걸 좋아한다", axis:"active", o:-1}
    ],
    resolve:function(answers){
      var s=0,st=0,a=0,qs=this.questions;
      for(var i=0;i<qs.length;i++){ var v=(answers[i]?1:-1)*qs[i].o;
        if(qs[i].axis==='speed') s+=v; else if(qs[i].axis==='stable') st+=v; else a+=v; }
      var fast=s>=0, stab=st>=0, act=a>=0;
      if(fast&&stab&&act) return 'cheetah';
      if(fast&&stab&&!act) return 'dolphin';
      if(fast&&!stab&&act) return 'rabbit';
      if(fast&&!stab&&!act) return 'cat';
      if(!fast&&stab&&act) return 'turtle';
      if(!fast&&stab&&!act) return 'bear';
      if(!fast&&!stab&&act) return 'squirrel';
      return 'sloth';
    },
    order:["cheetah","dolphin","rabbit","cat","turtle","bear","squirrel","sloth"],
    img:function(key){ return IBL_IMAGES[key]; },
    types:{
      cheetah:{ name:"치타형", sub:"완벽 연소 엔진", pct:"전체의 약 9%",
        tags:["빠른 대사","안정적 에너지","활발한 활동"],
        desc:"먹는 족족 태우는 부러운 체질. 활동적이고 회복도 빠릅니다. 단 하나, 이 모든 게 '근육'이라는 엔진 덕분이라는 걸 잊으면 어느 순간 급격히 무너집니다.",
        inbody:"미토콘드리아(세포 속 발전소)가 풀가동 중이고 혈당도 안정적입니다. 근육이 연료를 태우는 엔진 역할을 제대로 하고 있는 상태.",
        fix:["<b>근육부터 사수</b> — 지금이 좋은 건 근육 덕분. 주 2회 근력운동으로 엔진을 지키세요","<b>단백질은 매 끼니</b> — 빨리 타는 만큼 재료를 끊기지 않게 공급","<b>방심 금지</b> — 대사는 30대 후반부터 자연 감소. 좋을 때 습관을 굳혀두세요"],
        cta:"지금이 가장 좋을 때. 이 속도를 오래 유지하는 법을<br><b class='pt'>인사이드바디랩</b>에서 확인해보세요.",
        rec:"leucine",
        gap:"같은 치타형이라도 5년 뒤 몸은 갈립니다. 지금의 고연비는 근육이 만든 것 — 그 근육 합성을 켜는 스위치가 <b class='pt'>류신</b>입니다.",
        urgency:"근육은 30대 후반부터 매년 줄어듭니다. 좋을 때 지키는 게 가장 쉽습니다." },
      dolphin:{ name:"돌고래형", sub:"똑똑한 균형러", pct:"전체의 약 11%",
        tags:["빠른 대사","안정적 에너지","정적인 편"],
        desc:"대사도 좋고 컨디션도 안정적인데, 많이 움직이지 않아도 잘 유지되는 효율형입니다. 머리 좋고 균형 잡힌 타입. 다만 활동량이 적어 근육이 '소리 없이' 줄고 있을 수 있습니다.",
        inbody:"에너지를 효율적으로 쓰고 혈당도 안정적입니다. 단, 움직임이 적어 근육에 가는 자극이 부족한 상태.",
        fix:["<b>움직임 추가</b> — 효율이 좋아도 근육은 안 쓰면 줄어듭니다. 일상 활동을 의식적으로 늘리세요","<b>앉은 시간 쪼개기</b> — 1시간에 한 번은 일어나 움직이기","<b>가벼운 유산소</b> — 주 2~3회 빠르게 걷기로 엔진에 시동"],
        cta:"안 보이는 근육 감소, 그 신호를<br><b class='pt'>인사이드바디랩</b>에서 미리 확인해보세요.",
        rec:"leucine",
        gap:"효율 좋은 돌고래형의 약점은 '소리 없이 주는 근육'. 그 감소를 막는 첫 단추가 근육 합성 스위치, <b class='pt'>류신</b>입니다.",
        urgency:"안 쓰는 근육은 지금도 줄고 있습니다. 늦출수록 되돌리기 어렵습니다." },
      rabbit:{ name:"토끼형", sub:"잘 놀라는 폭주러", pct:"전체의 약 14%",
        tags:["빠른 대사","출렁이는 에너지","활발한 활동"],
        desc:"에너지를 빠르게 태우고 활발한데, 혈당이 출렁여서 텐션이 롤러코스터입니다. 잘 나가다 갑자기 방전되고, 예민하게 잘 놀라는 타입. 혈당만 잡아도 폭주가 잦아듭니다.",
        inbody:"혈당이 급하게 올랐다 꺼지기를 반복하며 인슐린이 바쁘게 출동 중. 활동량이 많아 바닥나는 속도도 빠릅니다.",
        fix:["<b>혈당 완충 먼저</b> — 빵·과자 같은 정제탄수보다 단백질·식이섬유를 먼저 드세요","<b>끼니 거르지 않기</b> — 빈속 폭주가 출렁임을 키웁니다","<b>카페인 과다 주의</b> — 텐션 출렁임을 더 증폭시킵니다"],
        cta:"롤러코스터 컨디션의 진짜 이유를<br><b class='pt'>인사이드바디랩</b>에서 몸속으로 확인해보세요.",
        rec:"albumin",
        gap:"빠르게 태우고 방전되는 토끼형에게 필요한 건 '버텨주는 바탕'. <b class='pt'>활부민</b>은 간이 스스로 회복 단백질(알부민)을 만드는 환경을 설계합니다.",
        urgency:"방전이 반복될수록 회복은 더뎌집니다. 바탕부터 채우는 게 먼저예요." },
      cat:{ name:"고양이형", sub:"예민한 변덕쟁이", pct:"전체의 약 15%",
        tags:["빠른 대사","출렁이는 에너지","정적인 편"],
        desc:"대사는 빠른데 컨디션과 입맛이 그날그날 다른 변덕형입니다. 스트레스에 민감하고 많이 움직이지 않는 타입. 까다롭지만, 리듬만 잡아주면 누구보다 안정됩니다.",
        inbody:"혈당 출렁임에 스트레스 호르몬까지 더해져 식욕이 들쭉날쭉한 상태. 움직임이 적어 출렁임이 더 길게 갑니다.",
        fix:["<b>식사 시간 고정</b> — 같은 시간에 먹는 것만으로도 컨디션이 안정됩니다","<b>스트레스 트리거 파악</b> — 폭식·식욕저하의 방아쇠를 기록해보세요","<b>가벼운 산책</b> — 정적일수록 출렁이니, 짧은 활동으로 완충"],
        cta:"변덕스러운 컨디션, 그 안쪽을<br><b class='pt'>인사이드바디랩</b>에서 들여다보세요.",
        rec:"melatonin",
        gap:"예민한 고양이형의 컨디션 열쇠는 '수면'입니다. <b class='pt'>멜라토닌</b>은 무너진 수면 리듬을 제자리로 돌리는 신호예요.",
        urgency:"리듬은 하루만 어긋나도 다음 날이 무너집니다. 오늘 밤부터 잡으세요." },
      turtle:{ name:"거북이형", sub:"느려도 꾸준한 장수러", pct:"전체의 약 12%",
        tags:["느린 대사","안정적 에너지","활발한 활동"],
        desc:"대사는 느리지만 에너지가 안정적이고 꾸준히 움직이는 성실형입니다. 폭발력은 없어도 오래 가는 타입. 강도만 살짝 올리면 느린 대사를 깨울 수 있습니다.",
        inbody:"저장 경향은 있지만 꾸준한 활동이 균형을 잡아주는 중. 근육이 받쳐주고 있어 안정적입니다.",
        fix:["<b>강도 살짝 올리기</b> — 꾸준함에 근력운동을 더하면 느린 대사가 깨어납니다","<b>단백질로 근육 보강</b> — 느린 대사를 보완하는 핵심","<b>정체기 대비</b> — 같은 루틴 반복보다 가끔 변화를 주세요"],
        cta:"느린 대사를 깨우는 법을<br><b class='pt'>인사이드바디랩</b>에서 확인해보세요.",
        rec:"leucine",
        gap:"느린 대사를 깨우는 건 유산소가 아니라 근육입니다. 그 근육을 채우는 재료의 핵심이 <b class='pt'>류신</b>이에요.",
        urgency:"느린 대사일수록 근육 한 줌이 더 큰 차이를 만듭니다. 지금 시작하세요." },
      bear:{ name:"곰형", sub:"느긋한 비축러", pct:"전체의 약 16%",
        tags:["느린 대사","안정적 에너지","정적인 편"],
        desc:"느긋하고 안정적이지만, 잘 안 움직이고 저장은 잘하는 절약형입니다. 적게 먹어도 잘 버티지만 그만큼 살이 잘 안 빠지는 타입. 연소 스위치만 켜면 됩니다.",
        inbody:"남는 에너지를 지방으로 알뜰하게 저장하는 중. 활동이 적어 '연소 스위치'가 좀처럼 켜지지 않는 상태.",
        fix:["<b>연소 스위치 켜기</b> — 가벼운 운동부터 활동량을 조금씩 늘리세요","<b>근육 늘리기</b> — 근육이 곧 기초대사. 저장 모드를 연소 모드로 바꿉니다","<b>저녁 탄수 줄이기</b> — 안 움직이는 시간대의 저장을 최소화"],
        cta:"저장 모드를 연소 모드로 바꾸는 법을<br><b class='pt'>인사이드바디랩</b>에서 확인해보세요.",
        rec:"leucine",
        gap:"저장 모드를 연소 모드로 바꾸는 스위치는 근육입니다. 그 근육 합성을 켜는 신호가 <b class='pt'>류신</b>이에요.",
        urgency:"근육이 줄면 저장 모드는 더 강해집니다. 악순환은 빠를수록 끊기 쉽습니다." },
      squirrel:{ name:"다람쥐형", sub:"부지런한 저장러", pct:"전체의 약 10%",
        tags:["느린 대사","출렁이는 에너지","활발한 활동"],
        desc:"부지런히 움직이는데 대사는 느리고, 당 떨어짐을 자주 느낍니다. 자꾸 뭔가 챙겨 먹고 비축하려는 본능이 강한 타입. 간식의 질만 바꿔도 확 달라집니다.",
        inbody:"활동은 많지만 혈당이 출렁이고 저장 경향이 겹친 상태. 당·간식에 의존하는 패턴이 자리 잡기 쉽습니다.",
        fix:["<b>간식의 질 바꾸기</b> — 당 대신 단백질 간식으로 교체","<b>혈당 안정 식사</b> — 식이섬유·단백질을 먼저 먹어 출렁임 완화","<b>활동을 근육으로</b> — 유산소 위주라면 근력운동을 추가하세요"],
        cta:"자꾸 당이 당기는 진짜 이유를<br><b class='pt'>인사이드바디랩</b>에서 확인해보세요.",
        rec:"albumin",
        gap:"당 떨어짐이 잦은 다람쥐형의 진짜 문제는 '바닥난 회복력'. <b class='pt'>활부민</b>은 그 회복의 바탕이 되는 알부민 합성 환경을 받쳐줍니다.",
        urgency:"간식으로 메우는 에너지는 오래 못 갑니다. 바탕을 바꾸세요." },
      sloth:{ name:"나무늘보형", sub:"저전력 방전러", pct:"전체의 약 13%",
        tags:["느린 대사","자주 방전","정적인 편"],
        desc:"대사도 느리고 에너지도 자주 바닥납니다. 자도 피곤하고 오후엔 방전. 가장 먼저 회복이 필요한 타입이지만, 작은 루틴 하나가 가장 큰 변화를 만드는 타입이기도 합니다.",
        inbody:"세포의 에너지 공장(미토콘드리아)이 풀가동을 못 하는 중. 연료는 들어오는데 태우질 못해 피로가 쌓입니다.",
        fix:["<b>아주 작게 시작</b> — 5분 걷기부터. 방전형은 '작게 시작'이 핵심입니다","<b>수면의 질 먼저</b> — 회복이 안 되면 대사도 깨어나지 않습니다","<b>끼니·단백질 규칙화</b> — 출렁임부터 잡아야 에너지가 올라옵니다"],
        cta:"늘 피곤한 진짜 이유를<br><b class='pt'>인사이드바디랩</b>에서 몸속으로 확인해보세요.",
        rec:"melatonin",
        gap:"자도 피곤한 나무늘보형의 시작점은 '깊은 잠'입니다. <b class='pt'>멜라토닌</b>은 잠드는 리듬 자체를 되돌립니다.",
        urgency:"회복이 없으면 대사도 깨어나지 않습니다. 잠부터가 먼저예요." }
    }
  },
  fatgain:{
    status:"active",
    icon:"🍔",
    menuDesc:"덜 먹어도 안 빠지는 진짜 이유, 내 유형은?",
    title:"나는 왜 살이 안 빠질까",
    lead:"덜 먹어도, 운동해도 안 빠진다면 이유가 따로 있습니다.<br>당신이 살찌는 진짜 '<b>패턴</b>'을 찾아보세요.",
    meta:"16문항 · 약 50초 · 8가지 살찌는 유형 중 내 유형은?",
    quizName:"살찌는 유형 테스트",
    othersLabel:"살찌는 유형 8종",
    pre:"당신의 살찌는 유형은",
    heroImg:"https://gi.esmplus.com/acorn2021/%EC%9D%B8%EB%B0%94%EB%9E%A9%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%9E%90%EB%A3%8C/%EC%82%B4%EC%B0%8C%EB%8A%94%20%EC%9C%A0%ED%98%95/musclequit.jpeg",
    img:function(key){ return "https://gi.esmplus.com/acorn2021/%EC%9D%B8%EB%B0%94%EB%9E%A9%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%9E%90%EB%A3%8C/%EC%82%B4%EC%B0%8C%EB%8A%94%20%EC%9C%A0%ED%98%95/"+key+".jpeg"; },
    questions:[
      {t:"예전과 똑같이 먹는데 살이 잘 안 빠진다", pat:"musclequit"},
      {t:"예전보다 근육이 빠지고 몸이 물러진 느낌이다", pat:"musclequit"},
      {t:"하루 대부분을 앉아서 보낸다", pat:"chairbody"},
      {t:"따로 운동하는 시간이 거의 없다", pat:"chairbody"},
      {t:"'예전엔 이렇게 안 쪘는데'라는 말을 자주 한다", pat:"wasfit"},
      {t:"나이가 들면서 살 붙는 속도가 빨라졌다", pat:"wasfit"},
      {t:"밥·빵·면 같은 탄수화물을 특히 좋아한다", pat:"carbmagnet"},
      {t:"식사 후에도 금방 단 게 당긴다", pat:"carbmagnet"},
      {t:"스트레스를 받으면 먹는 걸로 푼다", pat:"stresseat"},
      {t:"배가 안 고파도 기분 때문에 먹을 때가 많다", pat:"stresseat"},
      {t:"바쁘면 끼니를 자주 거른다", pat:"starvebinge"},
      {t:"굶다가 한 번에 몰아서 많이 먹는다", pat:"starvebinge"},
      {t:"하루 먹는 양이 저녁·야식에 몰려 있다", pat:"nighteat"},
      {t:"자기 전에 뭔가 먹어야 마음이 편하다", pat:"nighteat"},
      {t:"평소 잠이 부족한 편이다", pat:"sleepdebt"},
      {t:"잠을 못 잔 다음 날은 유독 많이 먹는다", pat:"sleepdebt"}
    ],
    resolve:function(answers){
      var qs=this.questions, sc={};
      for(var i=0;i<qs.length;i++){ if(answers[i]){ sc[qs[i].pat]=(sc[qs[i].pat]||0)+1; } }
      var best=this.order[0], bestn=-1;
      for(var j=0;j<this.order.length;j++){ var k=this.order[j]; var n=sc[k]||0; if(n>bestn){ bestn=n; best=k; } }
      return best;
    },
    order:["musclequit","chairbody","wasfit","carbmagnet","stresseat","starvebinge","nighteat","sleepdebt"],
    types:{
      musclequit:{ emoji:"🏋️", name:"근육 퇴사형", sub:"대사 엔진이 파업 중", pct:"전체의 약 13%",
        tags:["저대사","근손실","나이"],
        desc:"먹는 양은 그대론데 살이 안 빠진다면, 범인은 식탐이 아니라 '퇴사한 근육'입니다. 근육이 줄면 가만히 있어도 태우는 에너지가 줄어, 같은 식사에도 살이 쌓입니다.",
        inbody:"대사 엔진인 근육이 줄어 기초 소비가 떨어진 상태. 덜 먹어도 남는 에너지가 지방으로 갑니다.",
        fix:["<b>근력운동 주 2회</b> — 퇴사한 근육을 재고용하세요","<b>끼니마다 단백질</b> — 근육 만들 재료 확보","<b>극단적 굶기 금지</b> — 굶으면 근육부터 빠져 악순환"],
        gap:"같은 근육 퇴사형이라도 갈립니다. 차이는 줄어드는 근육을 붙잡았는가 — 그 근육 합성의 스위치가 <b class='pt'>류신</b>입니다.",
        urgency:"근육은 30대 후반부터 매년 줄어듭니다. 늦출수록 되돌리기 어렵습니다.",
        rec:"leucine" },
      chairbody:{ emoji:"🪑", name:"의자와 한몸형", sub:"엉덩이가 의자에 붙은", pct:"전체의 약 14%",
        tags:["좌식","활동부족","근육정체"],
        desc:"앉아 있는 시간이 길수록 근육은 조용히 굳고 대사는 가라앉습니다. 운동을 해도 정체라면, 나머지 23시간의 '앉아있음'이 원인일 수 있습니다.",
        inbody:"활동이 적어 근육 자극이 부족하고, 남는 에너지는 저장 모드로. 연소 스위치가 잘 안 켜집니다.",
        fix:["<b>1시간에 한 번 일어나기</b> — 앉은 시간을 쪼개세요","<b>일상 속 움직임 늘리기</b> — 계단·걷기부터","<b>근력 자극 추가</b> — 근육에 '쓰인다'는 신호를"],
        gap:"차이는 굳어가는 근육에 다시 시동을 걸었는가입니다. 그 재료의 핵심이 <b class='pt'>류신</b>이에요.",
        urgency:"안 쓰는 근육은 지금도 줄고 있습니다.",
        rec:"leucine" },
      wasfit:{ emoji:"📉", name:"왕년엔 날씬형", sub:"20대 방식이 안 통하는", pct:"전체의 약 12%",
        tags:["나이","대사저하","예전방식"],
        desc:"'예전엔 이렇게 안 쪘는데'가 입버릇이라면, 몸이 변한 게 아니라 대사가 변한 겁니다. 20대의 방식은 40대의 몸에 더는 통하지 않습니다.",
        inbody:"나이가 들며 근육과 기초대사가 함께 내려간 상태. 예전과 같은 식사가 이제는 '초과'가 됩니다.",
        fix:["<b>예전 방식 버리기</b> — 굶기 다이어트는 근육만 깎습니다","<b>근육 지키기 우선</b> — 대사의 바닥을 올리는 게 먼저","<b>단백질 챙기기</b> — 나이 들수록 더 필요"],
        gap:"차이는 떨어진 대사를 방치했는가입니다. 근육 합성을 켜는 <b class='pt'>류신</b>이 그 바닥을 받쳐줍니다.",
        urgency:"지금이 가장 빠릅니다. 대사는 미룰수록 더 내려갑니다.",
        rec:"leucine" },
      carbmagnet:{ emoji:"🧲", name:"탄수 자석형", sub:"밥·빵·면이 손에 붙는", pct:"전체의 약 14%",
        tags:["탄수당김","혈당출렁","식후허기"],
        desc:"밥·빵·면이 자석처럼 손에 붙는다면, 혈당이 올랐다 꺼지는 롤러코스터에 올라탄 상태입니다. 먹고 나면 금방 또 당기는 건 의지가 아니라 혈당의 문제입니다.",
        inbody:"혈당이 급하게 오르내리며 식후에도 허기가 빨리 찾아옵니다. 그 낙차가 단 것 갈망을 만듭니다.",
        fix:["<b>단백질·채소 먼저</b> — 탄수는 나중에 먹어 완충","<b>정제탄수 줄이기</b> — 흰빵·과자부터","<b>끼니 거르지 않기</b> — 빈속 폭주 방지"],
        gap:"차이는 출렁임 위에서 버틸 '바탕'이 있는가입니다. <b class='pt'>활부민</b>은 간이 회복 단백질(알부민)을 만드는 환경을 받쳐줍니다.",
        urgency:"출렁임이 반복될수록 갈망도 습관이 됩니다.",
        rec:"albumin" },
      stresseat:{ emoji:"😮‍💨", name:"현타 폭식형", sub:"현타 오면 일단 입에", pct:"전체의 약 13%",
        tags:["감정식사","스트레스","회복부족"],
        desc:"배가 고프지 않은데도 현타가 오면 일단 입에 넣는 타입. 문제는 음식이 아니라, 지치고 회복이 안 된 몸이 자꾸 보상을 찾는다는 데 있습니다.",
        inbody:"피로와 스트레스가 쌓이면 몸은 빠른 보상(단 것·기름진 것)을 원합니다. 회복이 안 되면 이 패턴이 굳습니다.",
        fix:["<b>트리거 기록</b> — 언제 먹게 되는지 패턴 찾기","<b>대체 행동</b> — 산책·물 한 잔으로 텀 두기","<b>회복의 바탕 채우기</b> — 지친 몸부터 돌보기"],
        gap:"차이는 지친 몸을 받쳐줄 바탕이 있는가입니다. <b class='pt'>활부민</b>은 회복의 토대가 되는 알부민 합성 환경을 돕습니다.",
        urgency:"지칠수록 폭식은 잦아집니다. 바탕부터 바꾸세요.",
        rec:"albumin" },
      starvebinge:{ emoji:"⏰", name:"굶다 몰아먹기형", sub:"굶다가 저녁에 폭발", pct:"전체의 약 11%",
        tags:["결식","폭식","혈당급등"],
        desc:"바쁘다고 굶다가 저녁에 몰아서 폭발하는 타입. 하루 총량은 적어 보여도, 한 번에 쏟아부으면 몸은 그걸 지방으로 저장하기 딱 좋은 상태가 됩니다.",
        inbody:"오래 굶은 뒤의 폭식은 혈당을 급격히 올리고, 남는 에너지를 저장으로 돌립니다.",
        fix:["<b>끼니 규칙화</b> — 조금씩이라도 거르지 않기","<b>단백질 먼저</b> — 폭식 충동 줄이기","<b>'굶기=다이어트' 착각 버리기</b>"],
        gap:"차이는 출렁임을 버틸 바탕이 있는가입니다. <b class='pt'>활부민</b>이 회복의 토대를 받쳐줍니다.",
        urgency:"굶고 폭식하는 리듬은 오래갈수록 살로 갑니다.",
        rec:"albumin" },
      nighteat:{ emoji:"🌙", name:"달밤의 먹방형", sub:"밤이 되면 각성하는", pct:"전체의 약 12%",
        tags:["야식","밤몰림","리듬"],
        desc:"낮엔 잘 참다가 밤이 되면 각성하는 타입. 같은 음식도 밤에 먹으면 몸이 저장 쪽으로 기울기 쉬워, 늦은 시간의 한 끼가 유독 크게 남습니다.",
        inbody:"밤에는 몸이 쉴 준비를 하는 시간. 이때 들어온 에너지는 낮보다 저장으로 가기 쉽습니다.",
        fix:["<b>먹는 시간 앞당기기</b> — 저녁을 조금 일찍","<b>밤의 빛 줄이기</b> — 야식 신호를 끄는 첫 단추","<b>수면 리듬 잡기</b> — 밤 각성부터 다스리기"],
        gap:"차이는 밤의 리듬을 되돌렸는가입니다. <b class='pt'>멜라토닌</b>은 어긋난 밤 신호를 제자리로 돌립니다.",
        urgency:"밤 각성이 반복되면 야식은 습관이 됩니다.",
        rec:"melatonin" },
      sleepdebt:{ emoji:"🍗", name:"잠 대신 치킨형", sub:"못 잔 다음 날 폭주", pct:"전체의 약 11%",
        tags:["수면부족","식욕폭발","다음날보상"],
        desc:"못 잔 다음 날 유독 많이 먹는 타입. 수면이 부족하면 식욕과 섭취량이 늘어나는 경향이 보고됩니다 — 부족한 잠을 몸이 음식으로 메우려는 셈입니다.",
        inbody:"수면이 부족하면 다음 날 허기와 고칼로리 음식에 대한 욕구가 커지는 경향이 있습니다.",
        fix:["<b>수면 시간 확보</b> — 다이어트보다 잠이 먼저","<b>취침 리듬 고정</b> — 잠의 질부터","<b>밤의 빛·카페인 관리</b>"],
        gap:"차이는 부족한 잠을 되찾았는가입니다. <b class='pt'>멜라토닌</b>이 어긋난 수면 리듬을 다듬어줍니다.",
        urgency:"수면빚이 쌓일수록 식욕은 더 폭발합니다.",
        rec:"melatonin" }
    }
  },
  fatigue:{ status:"soon", icon:"😴", title:"내 피로 유형 테스트", menuDesc:"늘 피곤한 이유, 내 번아웃 유형은? (준비중)" },
  supplement:{ status:"soon", icon:"💊", title:"나에게 필요한 영양제 테스트", menuDesc:"내 몸에 진짜 필요한 영양제는? (준비중)" },
  selfcare:{ status:"soon", icon:"🏆", title:"내 자기관리 레벨 테스트", menuDesc:"내 자기관리, 상위 몇 %일까? (준비중)" }
};
var IBL_MENU_ORDER = ["metabolism","fatgain","fatigue","supplement","selfcare"];

/* ===== ④ 화면 마크업 ===== */
var MARKUP =
'<div id="ibl-test"><div class="wrap">'
+'<div class="brand">INSIDEBODY LAB</div>'
+'<section id="ibl-menu" class="screen on"><div class="menu-h">내 몸속 테스트</div><div class="menu-s">궁금한 테스트를 골라보세요</div><div id="ibl-test-list"></div></section>'
+'<section id="ibl-intro" class="screen"><div class="hero" id="ibl-intro-hero"></div><h1 id="ibl-intro-title"></h1><p class="lead" id="ibl-intro-lead"></p><div class="friend-note" id="ibl-friend-note" style="display:none;"></div><p class="meta" id="ibl-intro-meta"></p><button class="btn btn-primary" onclick="iblStartTest()">테스트 시작하기</button><button class="btn-text" style="display:block;margin:12px auto 0;" onclick="iblOpenMenu()">← 다른 테스트 보기</button></section>'
+'<section id="ibl-quiz" class="screen"><div class="qtop"><span id="ibl-counter"></span><span id="ibl-quiz-name"></span></div><div class="bar"><i id="ibl-bar"></i></div><div class="qtext" id="ibl-qtext"></div><div class="ox"><button class="btn o" onclick="iblAnswer(true)">⭕ 그렇다</button><button class="btn x" onclick="iblAnswer(false)">❌ 아니다</button></div></section>'
+'<section id="ibl-result" class="screen"><div class="card"><div class="hero" id="ibl-r-hero"></div><div class="pre" id="ibl-r-pre">당신의 유형은</div><div class="tname" id="ibl-r-name"></div><div class="tsub" id="ibl-r-sub"></div><div class="pct" id="ibl-r-pct"></div><div class="axis" id="ibl-r-tags"></div><div class="desc" id="ibl-r-desc"></div><div class="block inbody"><div class="h">지금 내 몸속에서는</div><p id="ibl-r-inbody"></p></div><div class="block fix"><div class="h">이렇게 보완하세요</div><ul id="ibl-r-fix"></ul></div><div class="share-h">내 결과 공유하기</div><div class="share-s">친구는 무슨 유형일까? 보내서 같이 해보세요.</div><div class="share-row"><button class="btn btn-primary" onclick="iblShareKakao()">카톡 공유</button><button class="btn btn-ghost" onclick="iblCopyLink()">링크 복사</button></div><div class="toast" id="ibl-toast"></div><div class="others" id="ibl-others"></div><div id="ibl-others-label" style="font-size:11px;color:var(--txt-dimmer);margin-top:4px;"></div><div class="footer-cta"><p class="gap" id="ibl-r-gap"></p><div class="prodcard" onclick="iblGoProduct()"><div class="prodcard-img"><img id="ibl-r-prodimg" src="" alt=""></div><div class="prodcard-info"><div class="prodcard-tag">내 유형 맞춤 추천</div><div class="prodcard-nm" id="ibl-r-prodname"></div></div></div><div class="offer"><div class="offer-h">지금 시작하면</div><div class="offer-list" id="ibl-r-offer"></div></div><p class="urgency" id="ibl-r-urgency"></p><button class="btn btn-primary" id="ibl-r-prodbtn" onclick="iblGoProduct()">제품 보러가기</button><button class="btn btn-ghost" style="margin-top:10px;" onclick="iblGoContent()">내 유형 맞춤 가이드 보기</button></div></div><div style="display:flex;gap:10px;margin-top:14px;"><button class="btn-text" style="flex:1;" onclick="iblRestart()">↺ 다시 진단</button><button class="btn-text" style="flex:1;" onclick="iblOpenMenu()">다른 테스트 하기</button></div></section>'
+'</div></div>';

/* ===== 엔진 ===== */
var cur=null, idx=0, answers=[], curKey=null, curId=null;
function el(id){ return document.getElementById(id); }
function show(id){ var ss=document.querySelectorAll('#ibl-test .screen'); for(var i=0;i<ss.length;i++) ss[i].classList.remove('on'); el(id).classList.add('on'); var t=el('ibl-test'); if(t) t.scrollIntoView({block:'start'}); }

window.iblOpenMenu=function(){ el('ibl-friend-note').style.display='none'; show('ibl-menu'); };
window.iblOpenIntro=function(id, friendKey){
  cur=IBL_TESTS[id]; curId=id;
  el('ibl-intro-hero').innerHTML = cur.heroImg ? '<img src="'+cur.heroImg+'" alt="">' : (cur.icon||'');
  el('ibl-intro-title').textContent = cur.title;
  el('ibl-intro-lead').innerHTML = cur.lead;
  el('ibl-intro-meta').textContent = cur.meta;
  var fn=el('ibl-friend-note');
  if(friendKey && cur.types[friendKey]){ fn.style.display='block'; fn.innerHTML='친구는 <b>'+cur.types[friendKey].name+'</b> ('+cur.types[friendKey].sub+')!<br>당신의 유형은?'; }
  else fn.style.display='none';
  show('ibl-intro');
};
window.iblStartTest=function(){ idx=0; answers=[]; renderQ(); el('ibl-quiz-name').textContent=cur.quizName; show('ibl-quiz'); };
function renderQ(){ var qq=cur.questions[idx];
  el('ibl-qtext').textContent=qq.t;
  el('ibl-counter').textContent=(idx+1)+' / '+cur.questions.length;
  el('ibl-bar').style.width=Math.round((idx+1)/cur.questions.length*100)+'%';
}
window.iblAnswer=function(isO){ answers.push(!!isO); idx++;
  if(idx>=cur.questions.length){ paint(cur.resolve(answers)); show('ibl-result'); } else renderQ();
};
function paint(key){ curKey=key; var t=cur.types[key];
  var hv=cur.img&&cur.img(key);
  el('ibl-r-hero').innerHTML=hv?('<img src="'+hv+'" alt="'+t.name+'">'):(t.emoji||'');
  el('ibl-r-pre').textContent=cur.pre;
  el('ibl-r-name').textContent=t.name;
  el('ibl-r-sub').textContent=t.sub;
  el('ibl-r-pct').textContent=t.pct;
  el('ibl-r-tags').innerHTML=t.tags.map(function(x){return '<span class="tag">'+x+'</span>';}).join('');
  el('ibl-r-desc').textContent=t.desc;
  el('ibl-r-inbody').textContent=t.inbody;
  el('ibl-r-fix').innerHTML=t.fix.map(function(x){return '<li>'+x+'</li>';}).join('');
  el('ibl-r-gap').innerHTML=t.gap||'';
  el('ibl-r-urgency').textContent=t.urgency||'';
  el('ibl-r-offer').innerHTML=IBL_OFFER.map(function(x){return '<div class="offer-i">'+x+'</div>';}).join('');
  var prod=IBL_PRODUCTS[t.rec];
  if(prod){ el('ibl-r-prodimg').src=prod.img; el('ibl-r-prodname').textContent=prod.full; }
  el('ibl-r-prodbtn').textContent=(prod?prod.name:'제품')+' 보러가기';
  el('ibl-others-label').textContent=cur.othersLabel;
  el('ibl-others').innerHTML=cur.order.map(function(k){
    var ov=cur.img&&cur.img(k);
    var inner=ov?('<img src="'+ov+'" alt="'+cur.types[k].name+'">'):(cur.types[k].emoji||'');
    return '<div class="o-item'+(k===key?' cur':'')+'"><div class="o-ic">'+inner+'</div><div class="o-nm">'+cur.types[k].name+'</div></div>';
  }).join('');
}
window.iblRestart=function(){ iblStartTest(); };

function curUrl(){ return IBL_SITE_URL + (IBL_SITE_URL.indexOf('?')>=0?'&':'?') + 'test=' + (curId||'') + '&type=' + (curKey||''); }
function curName(){ return (cur && cur.types[curKey]) ? cur.types[curKey].name : ''; }
function toast(m){ var e=el('ibl-toast'); e.textContent=m; clearTimeout(window._ibltt); window._ibltt=setTimeout(function(){e.textContent='';},3000); }
function fallbackCopy(url){ try{ var ta=document.createElement('textarea'); ta.value=url; ta.style.position='fixed'; ta.style.top='0'; ta.style.opacity='0'; document.body.appendChild(ta); ta.focus(); ta.select(); var ok=document.execCommand('copy'); document.body.removeChild(ta); toast(ok?'링크 복사 완료! 친구에게 붙여넣기 하세요':url); }catch(e){ toast(url); } }
function doCopy(url){ if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(url).then(function(){toast('링크 복사 완료! 친구에게 붙여넣기 하세요');}).catch(function(){fallbackCopy(url);}); } else fallbackCopy(url); }
window.iblCopyLink=function(){ doCopy(curUrl()); };
window.iblShareKakao=function(){ var url=curUrl();
  if(window.Kakao && Kakao.isInitialized && Kakao.isInitialized()){
    try{ Kakao.Share.sendDefault({ objectType:'feed',
      content:{ title:'나는 '+curName()+'!', description:(cur?cur.title:'')+' · 너는 무슨 유형일까?', imageUrl:((cur&&cur.img&&cur.img(curKey))||IBL_OG_IMAGE), link:{mobileWebUrl:url, webUrl:url} },
      buttons:[{title:'나도 테스트하기', link:{mobileWebUrl:url, webUrl:url}}] }); return; }catch(e){}
  }
  doCopy(url); toast('카톡 공유가 안 되는 환경이라 링크를 복사했어요');
};
window.iblGoContent=function(){ var t=cur&&cur.types[curKey]; var p=t?IBL_PRODUCTS[t.rec]:null; var url=(p&&p.article)?p.article:IBL_CONTENT_URL; var w=window.open(url,'_blank'); if(!w){ location.href=url; } };
window.iblGoProduct=function(){ var t=cur&&cur.types[curKey]; var p=t?IBL_PRODUCTS[t.rec]:null; var url=p?p.url:IBL_CONTENT_URL; var w=window.open(url,'_blank'); if(!w){ location.href=url; } };

function buildMenu(){
  el('ibl-test-list').innerHTML = IBL_MENU_ORDER.map(function(id){
    var t=IBL_TESTS[id], soon=t.status!=='active';
    return '<div class="test-card '+(soon?'soon':'active')+'" '+(soon?'':'onclick="iblOpenIntro(\''+id+'\')"')+'>'
      +'<div class="test-ic">'+t.icon+'</div>'
      +'<div class="test-info"><div class="test-tt">'+t.title+'</div><div class="test-ds">'+t.menuDesc+'</div></div>'
      +'<div class="test-badge'+(soon?' soon':'')+'">'+(soon?'준비중':'시작')+'</div></div>';
  }).join('');
}

function init(){
  var root=document.getElementById('ibl-root');
  if(!root){ root=document.createElement('div'); root.id='ibl-root'; document.body.appendChild(root); }
  root.innerHTML = MARKUP;
  buildMenu();
  var p=new URLSearchParams(location.search); var test=p.get('test'), type=p.get('type');
  if(test && IBL_TESTS[test] && IBL_TESTS[test].status==='active') iblOpenIntro(test, type); else iblOpenMenu();
  if(IBL_KAKAO_KEY){ var s=document.createElement('script'); s.src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js'; s.onload=function(){ try{ Kakao.init(IBL_KAKAO_KEY); }catch(e){} }; document.head.appendChild(s); }
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();

})();
