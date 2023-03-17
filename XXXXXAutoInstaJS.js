

/**
    AUTOINSTA
*/

/**
 * Arquivo que contém as funções js a serem realizadas no navegador.
 */


/**
 * Foca no input de inserir o username no login.
 */
function focusOnInputUserLogin() {

    document.querySelectorAll("[name ^= 'username']")[0].focus();
}

/**
 * Foca no input de inserir o passaword no login.
 */
function focusOnInputPasLogin() {
    document.querySelectorAll("[name ^= 'password']")[0].focus();
}

/**
 * Clica no botão de realizar o login.
 */
function clickOnLogin() {
    document.getElementsByClassName('sqdOP  L3NKy   y3zKF')[0].click();
}

/**
 * Captura o username do usuário e retorna-o como uma string.
 */
function getUsername() {
    return window._sharedData.config.viewer.username;
}

/**
 * Clica no botão de seguir o usuário desejado, quando o mesmo não é privado.
 */
function followUserNotPrivate() {
    document.getElementsByClassName("_5f5mN       jIbKX  _6VtSN     yZn4P")[0].click(); 
}

/**
 * Clica no botão de seguir o usuário desejado, quando o usuário é privado.
 */
function followUserPrivate() {
    document.getElementsByClassName("sqdOP  L3NKy   y3zKF")[0].click();
}

/**
 * Clica nos botões de deixar de seguir o usuário.
 */
function unfollowUser() {
    document.getElementsByClassName("_5f5mN    -fzfL     _6VtSN     yZn4P")[0].click();
    document.getElementsByClassName("aOOlW -Cab_")[0].click();
}

/**
 * Clica nos botões de cancelar solicitação de seguir usuário
 */
function cancelFollowRequest() {
    document.getElementsByClassName("sqdOP  L3NKy    _8A5w5")[0].click();
    document.getElementsByClassName("aOOlW -Cab_")[0].click();
}

/**
 * Clica no campo de busca de chat.
 */
function clickOnSearchChat() {
    document.getElementsByClassName('wpO6b ZQScA')[0].click();
}

/**
 * Foca no text-area que pesquisa por um chat.
 */
function focusOnChat() {
        document.getElementsByName("queryBox")[0].focus()
}



/**
 * Inicia o chat com o usuário pesquisado.
 */
function startChat() {

    // clica no primeiro usuário que foi pesquisado
    document.getElementsByClassName('glyphsSpriteCircle__outline__24__grey_2 u-__7')[0].click()

    // clica no botão de Next, para abrir o chat
    document.getElementsByClassName('rIacr')[0].click();
}




/**
 * Foca no textarea de escrever a mensagem do direct.
 */
function focusOnTextMessage() {
    document.getElementsByTagName("textarea")[0].focus();
}

/**
 * Clica no botão de curtir o post.
 */
function likePost() {
	var arialabel = document.getElementsByClassName("ltpMr Slqrh")[0].firstElementChild.firstElementChild.children[0].children[0].children[0].getAttribute("aria-label");
	if(arialabel == "Like" || arialabel == "Curtir"){
			document.getElementsByClassName("ltpMr Slqrh")[0].firstElementChild.firstElementChild.click();
	}
}

/**
 * Verifica se o post já foi curtido manualmente pelo usuário.
 */
function isLiked() {
    return document.getElementsByClassName("fr66n")[0].children[0].children[0].outerHTML.includes("Unlike");
}

/**
 * Clica no botão de enviar a mensagem no direct.
 */
function clickOnSendButton() {
    document.getElementsByClassName("Igw0E     IwRSH      eGOV_  vwCYk  ItkAi ")[0].nextElementSibling.children[0].click();
}

/**
 * Foca no text-area de comentário no post.
 */
function focusOnComment() {
    document.getElementsByClassName("Ypffh")[0].focus();
}

/**
 * Clica no botão de enviar comentário.
 */
function clickOnCommentButton() {
    document.getElementsByClassName("RxpZH")[0].lastElementChild.lastElementChild.click()
}

/**
 * Clica no Storie que está na tela, a fim de iniciar sua reprodução.
 */
function clickOnStorie() {
    document.getElementsByClassName("sqdOP  L3NKy     y1rQx cB_4K  ")[0].click();
}

/**
 * Foca no text-area que escreve um comentário no Status.
 */
function focusOnCommentStatus() {
    document.getElementsByClassName("Xuckn")[0].focus();
}

/**
 * Clica no botão de enviar o comentário do Status.
 */
function clickOnCommentStatusButton() {
    document.getElementsByClassName("sqdOP yWX7d y1rQx")[0].click();
}

/**
 * Verifica se apareceu a tela de login suspeito.
 */
function checkSuspiciousLogin() {
    if (document.getElementById("choice_1") != null || typeof(document.getElementsByClassName("NXVPg Szr5J coreSpriteLock")[0]) != "undefined")
        return true;
    else
        return false;
}

function getUserImage(){
	var src = "";
	try{
		return document.getElementsByClassName("_47KiJ")[0].lastElementChild.children[1].children[0].src;
	}catch(e){
		return "";
	}
}

function clickOnNextToPost(){
	document.getElementsByClassName('UP43G')[0].click();
}

function clickOnWriteCaptionPost(){
	focusOnCaptionPost();
	document.querySelectorAll('[aria-label ^= "Write a caption"]')[0].click();
}

function focusOnCaptionPost(){
	document.querySelectorAll('[aria-label ^= "Write a caption"]')[0].focus();
}

function clickOnPublish(){
	document.getElementsByClassName('UP43G')[0].click();
}

function clickOnFollowers(){
	document.getElementsByClassName("k9GMp ")[0].children[1].children[0].click();
}

function getCountOfFollowers(){
	var qtd = document.getElementsByClassName("k9GMp ")[0].children[1].children[0].children[0].title;
	qtd = qtd.replace(",","");
	qtd = qtd.replace(".","");
	return qtd;
}

function getCountOfFollowings(){
	var el = document.getElementsByClassName("k9GMp ")[0].children[2].children[0].children[0];
	
	var qtd = el.title;
	
	if(qtd == "" || typeof(qtd) == "undefined"){
		qtd = el.textContent;
	}
	
	qtd = qtd.replace(",","");
	qtd = qtd.replace(".","");
	return qtd;
}

function clickOnFollowings(){
	document.getElementsByClassName("k9GMp ")[0].children[2].children[0].click();
}

function getNameOfFollower(indFollower){
	var namefollower = "";
	
	try{
		namefollower = document.getElementsByClassName("PZuss")[0].children[indFollower].children[0].children[1].children[0].children[0].children[0].children[0].textContent;
	}catch(e){
		namefollower = "";
	}
	
	return namefollower;
}

function windowScroll(value){
	window.scrollBy(0, value);
}

function scrollToFollower(indFollower){
	var el = document.getElementsByClassName("PZuss")[0].children[indFollower];
	el.scrollIntoView();
}

function clickOnButtonPost(){
	document.querySelectorAll('[data-testid ^= "new-post-button"]')[0].click();
}

function clickOnButtonPost2(){
	document.getElementsByClassName("q02Nz _0TPg")[0].click();
}

function getPosterName(){
	return document.getElementsByClassName("sqdOP yWX7d     _8A5w5   ZIAjV ")[0].textContent;
}

function clickToLoadMoreComments(){
	document.getElementsByClassName('glyphsSpriteCircle_add__outline__24__grey_9 u-__7')[0].click();
}

function clickOnPoster(){
	return document.getElementsByClassName("sqdOP yWX7d     _8A5w5   ZIAjV ")[0].click();
}


function followInPost(){
	var elFollowPost = document.getElementsByClassName("PQo_0 RqtMr")[0].lastElementChild.lastElementChild;
	if(elFollowPost.textContent == "Follow" || elFollowPost.textContent == "Seguir"){
		elFollowPost.click();
	}
}

function getCountOfComments(){
	
	var qtdComments = "";
	
	try{
		
	var qtdInDiv = document.getElementsByClassName("Mr508 ").length;
	qtdComments = ""+qtdInDiv;
	qtdComments = qtdComments.replace(",","");
	qtdComments = qtdComments.replace(".","");
		
	}catch(e){
	
	}
	
	return qtdComments;
}

function getCommenterName(indCommenter){
	
	var commenterName = "";
	
	try{
		commenterName = document.getElementsByClassName("Mr508 ")[indCommenter].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].textContent;
	}catch(e){
	}
	
	return commenterName;
}

function scrollToCommenter(indCommenter){
	var elView = "";
	var elListComments = "";
	
	try{
		document.getElementsByClassName("Mr508 ")[indCommenter].scrollIntoView();
	}catch(e){
	}
}
