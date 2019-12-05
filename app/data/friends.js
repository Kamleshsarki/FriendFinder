const friends = [
    {
name : "Tom Hardey",
photo :" https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lookslikefilm.com%2Fwp-content%2Fuploads%2F2019%2F09%2FChristinEidePhotography_VSCO_www.christineide.com_.jpg&imgrefurl=https%3A%2F%2Fwww.lookslikefilm.com%2F2019%2F09%2F20%2Felopement-pictures%2F&docid=6hfX7J0n9wdW2M&tbnid=yzO4ug3pTi8xTM%3A&vet=10ahUKEwju35e60pjmAhXiN30KHevLAp4QMwiIASgQMBA..i&w=900&h=600&safe=active&bih=657&biw=1366&q=pictures&ved=0ahUKEwju35e60pjmAhXiN30KHevLAp4QMwiIASgQMBA&iact=mrc&uact=8",
scores : [5,1,4,4,5,1,2,5,4,4,]

},
{
    name: "kam",
    photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2FRIZm0eFxFSjBHkZAtac6BGYqsEI%2Ffit-in%2F1024x1024%2Ffilters%3Aformat_auto-!!-%3Astrip_icc-!!-%3Awatermark-!popsugar-watermark.png%2C-5%2C-5%2C0!-%2F2019%2F07%2F29%2F963%2Fn%2F1922398%2F004ba45817b1d2a9_SPL5106592_021%2Fi%2FCamila-Cabello-Shawn-Mendes-Kissing-Miami-Pictures.jpg&imgrefurl=https%3A%2F%2Fwww.popsugar.com%2Fcelebrity%2FCamila-Cabello-Shawn-Mendes-Kissing-Miami-Pictures-46433507&docid=IeZMj_MSVD3LRM&tbnid=Hly2Mift8gd8hM%3A&vet=10ahUKEwju35e60pjmAhXiN30KHevLAp4QMwjjASheMF4..i&w=680&h=1024&safe=active&bih=657&biw=1366&q=pictures&ved=0ahUKEwju35e60pjmAhXiN30KHevLAp4QMwjjASheMF4&iact=mrc&uact=8",
    scores : [2,3,4,4,5,1,2,4,4,2]
},

{
    name : "ram",
    photo : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F12%2F08%2F11%2F49%2Flove-560783__340.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flove%2F&docid=OFHImkFIm6orKM&tbnid=EQoekxNthyma3M%3A&vet=10ahUKEwju35e60pjmAhXiN30KHevLAp4QMwjiAShdMF0..i&w=604&h=340&safe=active&bih=657&biw=1366&q=pictures&ved=0ahUKEwju35e60pjmAhXiN30KHevLAp4QMwjiAShdMF0&iact=mrc&uact=8",
    scores : [2,3,4,5,4,2,4,5,1,4]
},

{

    name : "sim",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpmcvariety.files.wordpress.com%2F2017%2F01%2Fryan.jpg%3Fw%3D1000&imgrefurl=https%3A%2F%2Fvariety.com%2F2019%2Ffilm%2Fnews%2Fjoy-pictures-american-film-market-1203399684%2F&docid=SD-qT5IDtVvEKM&tbnid=hwPaweH8HMSh-M%3A&vet=12ahUKEwi_rvXR05jmAhUSIjQIHTt2A604ZBAzKAcwB3oECAEQCA..i&w=1000&h=563&safe=active&bih=657&biw=1366&q=pictures&ved=2ahUKEwi_rvXR05jmAhUSIjQIHTt2A604ZBAzKAcwB3oECAEQCA&iact=mrc&uact=8",
    scores : [2,2,4,5,2,4,5,3,2,1]
},

{

    name : "rim",
    photo : "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftheplanetd.com%2Fimages%2Fpictures-of-sweden-trolleholm.jpg&imgrefurl=https%3A%2F%2Ftheplanetd.com%2F25-pictures-of-sweden-south%2F&docid=SInSvz0jw7FlpM&tbnid=7Fjvmiju40vJZM%3A&vet=12ahUKEwi_rvXR05jmAhUSIjQIHTt2A604ZBAzKAEwAXoECAEQAg..i&w=800&h=533&safe=active&bih=657&biw=1366&q=pictures&ved=2ahUKEwi_rvXR05jmAhUSIjQIHTt2A604ZBAzKAEwAXoECAEQAg&iact=mrc&uact=8",
    scores: [2,3,4,5,4,4,2,3,4,5]

},

{

    name: "jim",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.videostudiopro.com%2Fstatic%2Fvsp%2Fimages%2Fpages%2Fseo%2Ftips%2Fslideshow%2Fmake-a-video-with-pictures-and-music.jpg&imgrefurl=https%3A%2F%2Fwww.videostudiopro.com%2Fen%2Ftips%2Fslideshow%2Fmake-a-video-with-pictures-and-music%2F&docid=WvaNkbkDcZke_M&tbnid=_Zu--5AhbFW-FM%3A&vet=12ahUKEwi_rvXR05jmAhUSIjQIHTt2A604ZBAzKCswK3oECAEQLA..i&w=900&h=540&safe=active&bih=657&biw=1366&q=pictures&ved=2ahUKEwi_rvXR05jmAhUSIjQIHTt2A604ZBAzKCswK3oECAEQLA&iact=mrc&uact=8",
    scores:[2,3,4,5,4,4,5,2,1,2]
},


];