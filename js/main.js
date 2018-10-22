
    lightbox.option({
      'resizeDuration': 100,
      'wrapAround': true,
      'showImageNumberLabel' : false,
      'fadeDuration':200,
      'maxWidth':1000,
    });

const $search = $('#searchbox');
const $result = $('.containerItems a');

$search.keyup(function(){

  const $searchVal = $search.val().toLowerCase();

$result.each(function (){
    const $caption = $(this).attr('data-title').toLowerCase();

    if ($caption.indexOf($searchVal) < 0){
        $(this).hide()
        } else {
          $(this).show()
        };

    });

});
