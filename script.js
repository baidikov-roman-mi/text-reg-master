const wordRes = document.querySelector(".word-res");
const wordResHtml = document.querySelector(".word-res-html");
const simbRes = document.querySelector(".simb-res");
const htmlRes = document.querySelector(".html-res");
const textarea = document.querySelector(".textarea");
let reg = /[\s{2}]+/g;
textarea.value =
  "Я HTML элемент и меня не остановить. Я <div> и я захвачу этот мир. Нет ни одного проекта без меня. Да, я шикарен, но достоин ли ты быть таким же? Увидимся позже, дорогуша JS. Буду ждать того момента, когда ты исправишь свой [Object object] на что-то другое. Увидимся";
textarea.oninput = check;
function check() {
  let val = textarea.value;
  let res = val.replace(reg, " ");
  textarea.value = res;
  // val = tval.trim(); // NO SPACES
  wordResWithnoHtml = res.replace(/(\<(\/?[^>]+)>)/g, ""); //delete html elements
  wordResWithnoHtmlDone = wordResWithnoHtml.match(/\S+?\s|\S+?$/g);
  wordRes.innerHTML = wordResWithnoHtmlDone.length;
  wordResHtml.innerHTML = res.match(/\S+?\s|\S+?$/g).length; // For words
  simbRes.innerHTML = res.length; //For simbols(eazy)
  htmlRes.innerHTML = res.match(/<[^<A-Z>]+>/gm).length; // For html tags
}
check();
// let paragraph = `<p>Кажется, сюда случайно попал HTML </p>`;
// let section = `<section>, сюда случайно попал HTML </section>`;
// let case1 = "тут нет никакого < HTML >";
// let case2 = "<table>Кажется, <b>сюда</b> случайно попал HTML </table>";
// let case3 = "<input />Кажется, случайно попал HTML";
// let checker = /<[^<A-Z>]+>/gm;
// let string =
//   section.match(checker) +
//   "," +
//   paragraph.match(checker) +
//   "," +
//   case1.match(checker) +
//   "," +
//   case2.match(checker) +
//   "," +
//   case3.match(checker);
// let res = string.split(",");
// if (res[4] = "null") {
//   res[4] = "ТУТ НЕТ НИКАКОГО HTML ТВОЮ Ж МАТЬ"
// }
// console.log("Итак, мы нашли теги: ", res);
//
// Text.match(/\S+?\s|\S+?$/g).length;
// For words
