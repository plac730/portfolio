import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
new RevealOnScroll($('.block-content-1'),"reveal-item-fast", "75%");
new RevealOnScroll($('.block-content-2'),"reveal-item-normal", "75%");
new RevealOnScroll($('.block-content-3'),"reveal-item-slow", "75%");
new RevealOnScroll($('.block-content'),"reveal-item-fast", "75%");
new RevealOnScroll($('.block-content__screenshot'), "reveal-item-fast", "75%");
new RevealOnScroll($('.social-icons__icon'), "reveal-item-fast", "75%");
