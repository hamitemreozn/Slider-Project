var models = [
    {
        name : "Bmw 418d",
        image : "media/bmw.jpg",
        link : "https://www.bmw.com.tr/tr/index.html",
        text : "Bu araç BMW tarafından üretildi."
    },
    {
        name : "Mazda CX-3",
        image : "media/mazda.jpg",
        link : "https://www.mazda.com.tr/",
        text : "Bu araç Mazda tarafından üretildi."
    },
    {
        name : "Volvo S6",
        image : "media/volvo.jpg",
        link : "https://www.volvocars.com/tr/",
        text : "Bu araç Volvo tarafından üretildi."
    },
    {
        name : "Skoda Superb",
        image : "media/skoda.jpg",
        link : "https://www.skoda.com.tr/",
        text : "Bu araç Skoda tarafından üretildi."
    },
    {
        name : "Honda Civic",
        image : "media/honda.jpg",
        link : "https://www.honda.com.tr/",
        text : "Bu araç Honda tarafından üretildi."
    },
];

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '1000',
    random : true,
};

init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click', function(){
    index--;
    if (index < 0){
        index = slaytCount - 1;
    }
    showSlide(index);
    console.log(index);
});


document.querySelector('.fa-arrow-right').addEventListener('click', function(){
    index++;
    if (index > slaytCount - 1) {
        index = 0;
    }
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
})

function init (settings){
    var prev;
    interval = setInterval(function(){
        
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount)
            }
            while(index == prev)
            prev = index;
        }
        else {
            if(slaytCount == index){
                index = 0;
            }
            showSlide(index)
        }
        showSlide(index);
        console.log(index);
        index++;

    },settings.duration)
}

function showSlide(index){
    
    
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-link').setAttribute('href', models[index].link);

    document.querySelector('.card-text').textContent = models[index].text;

}


