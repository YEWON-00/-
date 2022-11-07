/* sign-up input에 마우스 올리면 기본 텍스트 없애기 */ 
function clearInput(){
    let el = document.getElementsByClassName('input-text');
        
    for(let i=0; i<el.length; i++){
        el[i].value = '';
    }
}