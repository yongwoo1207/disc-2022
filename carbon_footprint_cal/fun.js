var output = document.getElementById("output")

//데이터
tr_carbon = ['과기대 - 석계 (버스) : 89g', "과기대 - 공릉역 (버스) : 38.64g", "과기대 - 석계 (택시) : 672g", "과기대 - 공릉역 (택시) : 294g"];
ea_carbon = ["아메리카노 1잔 : 550g (플라스틱 컵 50g)", "과자 1봉 : 250g ", "피자 : 1970g ", "맥주 1캔 : 600g ", "치킨 1마리 : 2100g ", "햄버거 세트 : 3700g ", "학식 1끼 : 3526g "]
li_carbon = ["샤워 15분 : 86g", "에어컨 1시간 : 211g", "컴퓨터 1시간 : 90g", "청바지 1벌 : 3300g", "배달 1회 : 330.4g"]

//함수생성
//옵션버튼 입력처리1 (클릭하면 탄소 얼마나 나오는지 출력)
function click_tr1(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(tr_carbon[0]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}
function click_tr2(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(tr_carbon[1]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}
function click_tr3(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(tr_carbon[2]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}
function click_tr4(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(tr_carbon[3]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}



//eat 처리함수
function click_ea1(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(ea_carbon[0]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}function click_ea2(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(ea_carbon[1]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}function click_ea3(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(ea_carbon[2]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}function click_ea4(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(ea_carbon[3]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}
function click_ea5(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(ea_carbon[4]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}
function click_ea6(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(ea_carbon[5]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}
function click_ea7(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(ea_carbon[6]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}


//life 함수
function click_li1(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(li_carbon[0]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}function click_li2(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(li_carbon[1]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}function click_li3(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(li_carbon[2]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}function click_li4(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(li_carbon[3]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}function click_li5(){
    var newdiv = document.createElement("div");  //element 생성
    var textNode = document.createTextNode(li_carbon[4]);  //textNode 생성

    newdiv.appendChild(textNode);  //element에 textNode 자식노드로 연결
    document.getElementById("output").appendChild(newdiv);  //output div창에 자식노드로 element인 newp를 연결
}
