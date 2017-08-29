import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.pageSections = $(".large-hero, .page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints(this.headerLinks);
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll({speed:1500});
  }

  createPageSectionWaypoints(links) {
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            links.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }

        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            links.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }

        },
        offset: "-60%"
      });
    });
  }
}

export default StickyHeader;
