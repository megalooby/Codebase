$(document).ready(function(){

    $.getJSON('./model/data.json', function(jsonObj){
        console.log(jsonObj);
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
        $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');

        $('#title_centre1').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
        $('#subTitle_centre1').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
        $('#description_centre1').html('<p>' + jsonObj.pageTextData[2].description + '</p>');

        $('#title_centre2').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
        $('#subTitle_centre2').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
        $('#description_centre2').html('<p>' + jsonObj.pageTextData[3].description + '</p>');

        $('#title_right').html('<h2>' + jsonObj.pageTextData[4].title + '</h2>');
        $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

        $('#heartx3d_title').html('<h3>' + jsonObj.pageTextData[5].x3dModelTitle + '</h3>');
        $('#heartx3d_description').html('<h3>' + jsonObj.pageTextData[5].description + '</h3>');

        $('#flowerx3d_title').html('<h3>' + jsonObj.pageTextData[6].x3dModelTitle + '</h3>');
        $('#flowerx3d_description').html('<h3>' + jsonObj.pageTextData[6].description + '</h3>');

        $('#knifex3d_title').html('<h3>' + jsonObj.pageTextData[7].x3dModelTitle + '</h3>');
        $('#knifex3d_description').html('<h3>' + jsonObj.pageTextData[7].description + '</h3>');

        $('#shovelx3d_title').html('<h3>' + jsonObj.pageTextData[8].x3dModelTitle + '</h3>');
        $('#shovelx3d_description').html('<h3>' + jsonObj.pageTextData[8].description + '</h3>');

        $('#gallerytitle').html('<h3>' + jsonObj.pageTextData[9].galleryTitle + '</h3>');
        $('#gallerydescription').html('<h3>' + jsonObj.pageTextData[9].galleryDescription + '</h3>');  
        
        $('#gallerytitle1').html('<h3>' + jsonObj.pageTextData[10].galleryTitle + '</h3>');
        $('#gallerydescription1').html('<h3>' + jsonObj.pageTextData[10].galleryDescription + '</h3>'); 

        $('#gallerytitle2').html('<h3>' + jsonObj.pageTextData[11].galleryTitle + '</h3>');
        $('#gallerydescription2').html('<h3>' + jsonObj.pageTextData[11].galleryDescription + '</h3>'); 

        $('#gallerytitle3').html('<h3>' + jsonObj.pageTextData[12].galleryTitle + '</h3>');
        $('#gallerydescription3').html('<h3>' + jsonObj.pageTextData[12].galleryDescription + '</h3>'); 
    })
})