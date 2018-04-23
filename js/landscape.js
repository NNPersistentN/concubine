var width = document.documentElement.clientWidth;
var height =  document.documentElement.clientHeight;
if( width < height ){
    $print =  $('div');
    $print.width(height);
    $print.height(width);
    $print.css('top',  (height-width)/2 );
    $print.css('left',  0-(height-width)/2 );
    $print.css('transform' , 'rotate(90deg)');
    $print.css('transform-origin' , '50% 50%');
}