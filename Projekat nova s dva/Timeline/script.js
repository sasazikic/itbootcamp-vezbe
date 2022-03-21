let timelineWrapper = document.querySelector("[data-timeline-wrapper");

// let currentTime = new Date().getTime()/1000;
// console.log(date)
let date1 = new Date("march 19, 2022 10:16:00");
// console.log(date1.getTime())
// console.log(date.getTime())

let arrayOfObjects = [
    {
        title: "Prva vest koja mora da ima malo duzi tekst",
        image: "plane",
        time: new Date("march 18, 2022 22:16:00").getTime()
    },
    {
        title: "Druga vest koja mora da ima malo duzi tekst",
        image: "plane",
        time: new Date("march 19, 2022 22:10:00").getTime()
    },
    {
        title: "Treca vest koja mora da ima malo duzi tekst",
        image: "plane",
        time: new Date("march 19, 2022 21:16:00").getTime()
    },
    {
        title: "Cetvrta vest koja mora da ima malo duzi tekst",
        image: "plane",
        time: new Date("march 20, 2022 00:12:00").getTime()
    }
]

window.onload = creatingTimelineNews(arrayOfObjects);

function passedTimeInSeconds(timeOfPublishing) {
    let currentTimeSeconds = new Date().getTime()/1000;
    return Math.floor(currentTimeSeconds-(timeOfPublishing/1000));
}

function dataForTime (passedTimeInSeconds) {
    if(passedTimeInSeconds >= 86400) {
        let dataForTimeObject = {
            timeValue: Math.floor(passedTimeInSeconds/60/60/24),
            unitOfTime: "dan"
        }
        return  dataForTimeObject
    }
    if(passedTimeInSeconds >= 3600) {
        let dataForTimeObject = {
            timeValue: Math.floor(passedTimeInSeconds/60/60),
            unitOfTime: "h"
        }
        return dataForTimeObject;
    }
    if(passedTimeInSeconds >= 60) {
        let dataForTimeObject = {
            timeValue: Math.floor(passedTimeInSeconds/60),
            unitOfTime: "min"
        }
        return dataForTimeObject;
    }
    if(passedTimeInSeconds < 60) {
        let dataForTimeObject = {
            timeValue: Math.floor(passedTimeInSeconds),
            unitOfTime: "sek"
        }
        return dataForTimeObject;
    }
}




function creatingTimelineNews (object) {
    let timelineContentWrapper = document.createElement("div");
    timelineContentWrapper.classList.add("timeline-content-wrapper");
    

    for(let key in object) {
        let timeValue = "";
        let unitOfTime = "";
        let divTimelineNews = document.createElement("div");
        divTimelineNews.classList.add("timeline-news");

        let wtf = dataForTime(passedTimeInSeconds(object[key].time))
        console.log(wtf)
        divTimelineNews.setAttribute("data-before", `${wtf.timeValue}`)
        divTimelineNews.setAttribute("data-after", `${wtf.unitOfTime}`)
    
        let aForImg = document.createElement("a");
        aForImg.href = "";
        let imgTag = document.createElement("img");
        imgTag.src = `images/${object[key].image}.png`;
    
        let divTimelineText = document.createElement("div");
        divTimelineText.classList.add("timeline-text");
    
        let aForTimelineText = document.createElement("a");
        aForTimelineText.href = "";
        aForTimelineText.textContent = object[key].title;
    
        let spanCathegory = document.createElement("span");
        spanCathegory.classList.add("span-cathegory");
        spanCathegory.textContent = "KATEGORIJA";
    
        aForImg.appendChild(imgTag);
    
        divTimelineText.appendChild(aForTimelineText);
        divTimelineText.appendChild(spanCathegory);
    
        divTimelineNews.appendChild(aForImg);
        divTimelineNews.append(divTimelineText);
    
        timelineContentWrapper.appendChild(divTimelineNews)

        console.log(passedTimeInSeconds(object[key].time))
    }
    timelineWrapper.appendChild(timelineContentWrapper)
}










