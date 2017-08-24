import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, speed, offset) {
    this.itemsToReveal = els;

    this.hideInitially();
    this.createWaypoints(speed, offset);
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints(speed, offset) {
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
          $(currentItem).addClass(speed);
        },
        offset: offset
      });
    });
  }
}

export default RevealOnScroll;
