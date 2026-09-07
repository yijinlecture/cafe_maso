// 영업시간(09:00 - 22:00) 기준으로 영업 상태 배지를 표시합니다.
var OPEN_HOUR = 9;
var CLOSE_HOUR = 22;

function updateBadge() {
  var badge = document.getElementById("status-badge");
  if (!badge) return;
  var hour = new Date().getHours();
  if (hour >= OPEN_HOUR && hour < CLOSE_HOUR) {
    badge.textContent = "영업 중";
    badge.style.backgroundColor = "#2e7d32";
  } else {
    badge.textContent = "준비 중";
    badge.style.backgroundColor = "#8b5e3c";
  }
}

updateBadge();
