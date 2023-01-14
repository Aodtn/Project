const d_day = document.getElementById("watch");
const time_div = document.createElement("div");
const date_div = document.createElement("div");

d_day.appendChild(time_div);
d_day.appendChild(date_div);

time_div.className = "time";
date_div.className = "date";

function time_function() {
  const D = new Date();
  const year = D.getFullYear();
  const Month = D.getMonth() + 1;
  const date = D.getDate();
  const day_ = ["일", "월", "화", "수", "목", "금", "토"];
  const day = day_[D.getDay()];
  const Hour = String(D.getHours()).padStart(2, "0");
  const min = String(D.getMinutes()).padStart(2, "0");
  const sec = String(D.getSeconds()).padStart(2, "0");

  console.log("d");

  time_div.innerHTML = `${Hour} : ${min} : ${sec}`;
  date_div.innerHTML = `${year}년 ${Month}월 ${date}일 ${day}`;
}
time_function();
setInterval(time_function, 1000);
