/**
 * Update Info Box Data
 */
function update_info_box() {

  let innerWidth, outerWidth, innerHeight, outerHeight;

  innerWidth = document.getElementById( 'inner-width' );
  outerWidth = document.getElementById( 'outer-width' );
  innerHeight = document.getElementById( 'inner-height' );
  outerHeight = document.getElementById( 'outer-height' );

  innerWidth.innerText = `${window.innerWidth}px`;
  outerWidth.innerText = `${window.outerWidth}px`;
  innerHeight.innerText = `${window.innerHeight}px`;
  outerHeight.innerText = `${window.outerHeight}px`;

}



/**
 * Do something after window loaded
 */
window.onload = function() {

  update_info_box();

  console.log('-Ready to Rock-');
}



/**
 * Do something when window resize
 */
window.onresize = function() {

  update_info_box();

  console.log('Window Resized');
}