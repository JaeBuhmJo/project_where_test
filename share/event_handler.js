function MarkerClickHandler (){
    let key = this.getPosition().getLat() +"," + this.getPosition().getLng()
    console.log("클릭", key)
    // 마커에 오버레이가 나타나고
    showOverlay()
    // 폴리라인이 강조된다 - 함수명 바꿔서 쓰시면 됩니다
    setPolyLineHighlight()
}
function MarkerMouseOverHandler (){
    let key = this.getPosition().getLat() +"," + this.getPosition().getLng()
    console.log("마우스 들어옴", key)
    // 마커 하이라이트
    setMarkerHighlight()
}
function MarkerMouseOutHandler (){
    let key = this.getPosition().getLat() +"," + this.getPosition().getLng()
    console.log("마우스 나감", key)
    // 마커 하이라이트 해제
    removeMarkerHighlight()
}

function showOverlay(){
    console.log("showOverlay called")
}

function closeOverlay() {
    console.log("closeOverlay called")
    // 오버레이가 닫힐 떄는 폴리라인도 꺼진다
    removePolyLineHighlights()
}

function setPolyLineHighlight(){
    // 폴리라인을 하이라이트 하는 함수
    console.log("setPolyLineHighlight called")
}

function removePolyLineHighlights(){
    // 폴리라인을 이전 상태로 되돌리는 함수
    console.log("removePolyLineHighlights called")
}

function setMarkerHighlight(){
    // 마커의 하이라이트를 설정하는 함수
    console.log("마커 하이라이트 설정")
}

function removeMarkerHighlight(){
    // 마커의 하이라이트를 제거하는 함수
    console.log("마커 하이라이트 해제")
}


// 경로, 마커가 아닌 모달맵을 클릭하면
document.getElementById("modal_map").addEventListener("click", (e) =>{
    console.log(e.target.tagName)
    if (e.target.tagName == "path" || e.target.tagName == "IMG"){ // 경로나 마커 클릭은 무시한다
        return``
    }
        // 마커의 오버레이가 지워지고, 폴리라인도 따라서 지워진다
        closeOverlay()
    }
)