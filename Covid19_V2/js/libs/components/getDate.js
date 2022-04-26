const currentDate = new Date();

const days = ["Chủ nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"];
const currentDay = days[currentDate.getDay()];
const date = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

const dateTime = document.querySelector(".date-time");
console.log(dateTime);
console.log(month);

function addZero(date) {
    if (date < 10){
        date = '0' + date;
    }
}

addZero(date); 
addZero(month); 

dateTime.innerHTML = `${currentDay}, ${date} / ${month} / ${year}`;
console.log(dateTime)

