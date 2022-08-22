var output = document.getElementById("output")

//데이터
tr_carbon = [["과기대 - 석계 (버스)",89],["과기대 - 공릉역 (버스)",38.64],["과기대 - 석계 (택시)",672],["과기대 - 공릉역 (택시)",294]];
ea_carbon = [["아메리카노 1잔",550],["플라스틱 컵",50],["과자 1봉",250],["피자",1970],["맥주 1캔",600],["치킨 1마리",2100],["햄버거 세트",3700],["학식 1끼",3526]];
li_carbon = [["샤워 15분",86],["에어컨 1시간",211],["컴퓨터 1시간",90],["청바지 1벌",3300],["배달 1회",330.4]];

day_total = 0

//tr 클릭 함수
tr = document.querySelectorAll(".transport")[0]
for ( let i=0 ; i<tr_carbon.length ; i++ ) {
  tr.innerHTML += " <button>" + tr_carbon[i][0]+ "</button>"
}
tr.addEventListener("click", function(e) {
      for ( let i=0 ; i<tr_carbon.length ; i++ ) {
        if ( tr_carbon[i][0] == e.target.innerHTML ) {
            document.getElementById("output").innerHTML += "<br>" + tr_carbon[i][0] + " : " + tr_carbon[i][1] + "g"
            day_total += tr_carbon[i][1]
            document.getElementById("res").innerHTML = day_total
        }
      }
})

//ea 처리 함수
ea = document.querySelectorAll(".eat")[0]
for ( let i=0 ; i<ea_carbon.length ; i++ ) {
  ea.innerHTML += " <button>" + ea_carbon[i][0]+ "</button>"
}
ea.addEventListener("click", function(e) {
      for ( let i=0 ; i<ea_carbon.length ; i++ ) {
        if ( ea_carbon[i][0] == e.target.innerHTML ) {
            document.getElementById("output").innerHTML += "<br>" + ea_carbon[i][0] + " : " + ea_carbon[i][1] + "g"
            day_total += ea_carbon[i][1]
            document.getElementById("res").innerHTML = day_total
        }
      }
})

//li 처리 함수
li = document.querySelectorAll(".life")[0]
for ( let i=0 ; i<li_carbon.length ; i++ ) {
  li.innerHTML += " <button>" + li_carbon[i][0]+ "</button>"
}
li.addEventListener("click", function(e) {
      for ( let i=0 ; i<li_carbon.length ; i++ ) {
        if ( li_carbon[i][0] == e.target.innerHTML ) {
            document.getElementById("output").innerHTML += "<br>" + li_carbon[i][0] + " : " + li_carbon[i][1] + "g"
            day_total += li_carbon[i][1]
            document.getElementById("res").innerHTML = day_total
        }
      }
})
