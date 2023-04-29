const divThongTin = document.getElementById("thongtin");
const divNhap = document.getElementById("nhap");

const buttonKiemTra = document.getElementById("bt-kiemtra");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var email = "nkh07102000@gmail.com";

buttonKiemTra.addEventListener("click", function () {
  const inputNhap = document.getElementById("input-nhap");
  const data = inputNhap.value;

  if (data === "") {
    alert("Vui lòng nhập lại email.");
    return;
  }
  if (regex.test(data)) {
    divThongTin.style.display = "block";
    divNhap.style.display = "none";
  } else {
    alert("Vui lòng nhập lại email.");
  }
});

// Chức năng ẩn thông tin nghề nghiệp
// 1.kinh nghiệm
const viewMoreBtn1 = document.querySelector(".view-more1");
const viewLessBtn1 = document.querySelector(".view-less1");
const jobInfo1 = document.querySelector(".job-info1");
const showHidden1 = document.getElementById("show-hidden1");

showHidden1.onmouseover = function () {
  mouseOver1();
};
showHidden1.onmouseout = function () {
  mouseOut1();
};
function mouseOver1() {
  viewMoreBtn1.style.display = "block";
}

function mouseOut1() {
  viewMoreBtn1.style.display = "none";
}

viewMoreBtn1.addEventListener("click", function () {
  jobInfo1.style.display = "block";
  viewMoreBtn1.classList.add("hidden");
  viewLessBtn1.classList.remove("hidden");
});
viewLessBtn1.addEventListener("click", function () {
  jobInfo1.style.display = "none";
  viewLessBtn1.classList.add("hidden");
  viewMoreBtn1.classList.remove("hidden");
});
// 2. học vấn
const viewMoreBtn2 = document.querySelector(".view-more2");
const viewLessBtn2 = document.querySelector(".view-less2");
const jobInfo2 = document.querySelector(".job-info2");
const showHidden2 = document.getElementById("show-hidden2");

showHidden2.onmouseover = function () {
  mouseOver2();
};
showHidden2.onmouseout = function () {
  mouseOut2();
};
function mouseOver2() {
  viewMoreBtn2.style.display = "block";
}

function mouseOut2() {
  viewMoreBtn2.style.display = "none";
}

viewMoreBtn2.addEventListener("click", function () {
  jobInfo2.style.display = "block";
  viewMoreBtn2.classList.add("hidden");
  viewLessBtn2.classList.remove("hidden");
});
viewLessBtn2.addEventListener("click", function () {
  jobInfo2.style.display = "none";
  viewLessBtn2.classList.add("hidden");
  viewMoreBtn2.classList.remove("hidden");
});
// 3. hoạt động
const viewMoreBtn3 = document.querySelector(".view-more3");
const viewLessBtn3 = document.querySelector(".view-less3");
const jobInfo3 = document.querySelector(".job-info3");
const showHidden3 = document.getElementById("show-hidden3");

showHidden3.onmouseover = function () {
  mouseOver3();
};
showHidden3.onmouseout = function () {
  mouseOut3();
};
function mouseOver3() {
  viewMoreBtn3.style.display = "block";
}

function mouseOut3() {
  viewMoreBtn3.style.display = "none";
}

viewMoreBtn3.addEventListener("click", function () {
  jobInfo3.style.display = "block";
  viewMoreBtn3.classList.add("hidden");
  viewLessBtn3.classList.remove("hidden");
});
viewLessBtn3.addEventListener("click", function () {
  jobInfo3.style.display = "none";
  viewLessBtn3.classList.add("hidden");
  viewMoreBtn3.classList.remove("hidden");
});
// 4. sở thích
const viewMoreBtn4 = document.querySelector(".view-more4");
const viewLessBtn4 = document.querySelector(".view-less4");
const jobInfo4 = document.querySelector(".job-info4");
const showHidden4 = document.getElementById("show-hidden4");

showHidden4.onmouseover = function () {
  mouseOver4();
};
showHidden4.onmouseout = function () {
  mouseOut4();
};
function mouseOver4() {
  viewMoreBtn4.style.display = "block";
}

function mouseOut4() {
  viewMoreBtn4.style.display = "none";
}

viewMoreBtn4.addEventListener("click", function () {
  jobInfo4.style.display = "block";
  viewMoreBtn4.classList.add("hidden");
  viewLessBtn4.classList.remove("hidden");
});
viewLessBtn4.addEventListener("click", function () {
  jobInfo4.style.display = "none";
  viewLessBtn4.classList.add("hidden");
  viewMoreBtn4.classList.remove("hidden");
});
// 5. ngôn ngữ
const viewMoreBtn5 = document.querySelector(".view-more5");
const viewLessBtn5 = document.querySelector(".view-less5");
const jobInfo5 = document.querySelector(".job-info5");
const showHidden5 = document.getElementById("show-hidden5");

showHidden5.onmouseover = function () {
  mouseOver5();
};
showHidden5.onmouseout = function () {
  mouseOut5();
};
function mouseOver5() {
  viewMoreBtn5.style.display = "block";
}

function mouseOut5() {
  viewMoreBtn5.style.display = "none";
}

viewMoreBtn5.addEventListener("click", function () {
  jobInfo5.style.display = "block";
  viewMoreBtn5.classList.add("hidden");
  viewLessBtn5.classList.remove("hidden");
});
viewLessBtn5.addEventListener("click", function () {
  jobInfo5.style.display = "none";
  viewLessBtn5.classList.add("hidden");
  viewMoreBtn5.classList.remove("hidden");
});
// 6. kỹ năng
const viewMoreBtn6 = document.querySelector(".view-more6");
const viewLessBtn6 = document.querySelector(".view-less6");
const jobInfo6 = document.querySelector(".job-info6");
const showHidden6 = document.getElementById("show-hidden6");

showHidden6.onmouseover = function () {
  mouseOver6();
};
showHidden6.onmouseout = function () {
  mouseOut6();
};
function mouseOver6() {
  viewMoreBtn6.style.display = "block";
}

function mouseOut6() {
  viewMoreBtn6.style.display = "none";
}

viewMoreBtn6.addEventListener("click", function () {
  jobInfo6.style.display = "block";
  viewMoreBtn6.classList.add("hidden");
  viewLessBtn6.classList.remove("hidden");
});
viewLessBtn6.addEventListener("click", function () {
  jobInfo6.style.display = "none";
  viewLessBtn6.classList.add("hidden");
  viewMoreBtn6.classList.remove("hidden");
});
