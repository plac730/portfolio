import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.primary-nav__menu-content');
    this.homeLink = $('.primary-nav__home');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.siteHeader.toggleClass('site-header--expanded');
    this.menuContent.toggleClass('primary-nav__menu-content--visible');
    this.homeLink.toggleClass('primary-nav__home--visible');
  }
}

export default MobileMenu;
