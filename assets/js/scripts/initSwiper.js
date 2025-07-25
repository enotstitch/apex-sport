import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initSwiper(selector = '.swiper') {
	return new Swiper(selector, {
		modules: [Navigation],
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
		},
	});
}
