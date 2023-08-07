<script setup lang="ts">
import SideBarItem from '../components/sidebar/SideBarItem.vue'
import SideBarItemDot from '../components/sidebar/SideBarItemDot.vue'
import RowLoaded from '../components/home/row/RowLoaded.vue'
import RowLoading from '../components/home/row/RowLoading.vue'
import RowContinue from '../components/home/row/RowContinue.vue'
</script>

<template>
	<tp-yt-app-drawer id="guide" align="start" role="navigation" class="style-scope ytd-app" style="transition-duration: 0ms; touch-action: pan-y" position="left" swipe-open="" opened="" persistent="">
		<div id="scrim" class="style-scope tp-yt-app-drawer" style="transition-duration: 0ms"></div>
		<div id="contentContainer" class="style-scope tp-yt-app-drawer" style="transition-duration: 0ms" position="left" swipe-open="" opened="" persistent="">
			<div id="guide-wrapper" class="style-scope ytd-app">
				<div id="guide-spacer" class="style-scope ytd-app"></div>
				<div id="guide-content" class="style-scope ytd-app">
					<div id="header" class="style-scope ytd-app" hidden="">
						<yt-icon-button id="guide-button" pressed="true" toggleable="true" class="style-scope ytd-app" aria-label="Guide"><button id="button" class="style-scope yt-icon-button" aria-pressed="true">
								<yt-icon id="guide-icon" icon="yt-icons:menu" class="style-scope ytd-app"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
											<div style="width: 100%; height: 100%; fill: currentcolor">
												<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%">
													<path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
												</svg>
											</div>
										</icon-shape></yt-icon-shape></yt-icon></button><yt-interaction id="interaction" class="circular style-scope yt-icon-button">
								<div class="stroke style-scope yt-interaction"></div>
								<div class="fill style-scope yt-interaction"></div>
							</yt-interaction></yt-icon-button>
						<ytd-topbar-logo-renderer class="style-scope ytd-app">
							<a class="yt-simple-endpoint style-scope ytd-topbar-logo-renderer" id="logo" aria-label="" href="/" title="YouTube Home">
								<div class="style-scope ytd-topbar-logo-renderer">
									<ytd-logo class="style-scope ytd-topbar-logo-renderer"><yt-icon id="logo-icon" class="style-scope ytd-logo"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
													<div style="width: 100%; height: 100%; fill: currentcolor">
														<svg class="external-icon" viewBox="0 0 90 20" focusable="false" style="
                                pointer-events: none;
                                display: block;
                                width: 100%;
                                height: 100%;
                              ">
															<svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
																<g>
																	<path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
																	<path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
																</g>
																<g>
																	<g>
																		<path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
																		<path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
																		<path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
																		<path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
																		<path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
																		<path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
																		<path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
																	</g>
																</g>
															</svg>
														</svg>
													</div>
												</icon-shape></yt-icon-shape></yt-icon></ytd-logo>
								</div>
								<ytd-yoodle-renderer class="style-scope ytd-topbar-logo-renderer" hidden="">
									<picture class="style-scope ytd-yoodle-renderer">
										<source type="image/webp" class="style-scope ytd-yoodle-renderer" srcset="" />
										<img class="style-scope ytd-yoodle-renderer" src="" />
									</picture>
									<ytd-logo class="style-scope ytd-yoodle-renderer" hidden=""><yt-icon id="logo-icon" class="style-scope ytd-logo"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
													<div style="width: 100%; height: 100%; fill: currentcolor">
														<svg class="external-icon" viewBox="0 0 90 20" focusable="false" style="
                                pointer-events: none;
                                display: block;
                                width: 100%;
                                height: 100%;
                              ">
															<svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
																<g>
																	<path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
																	<path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
																</g>
																<g>
																	<g>
																		<path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
																		<path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
																		<path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
																		<path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
																		<path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
																		<path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
																		<path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
																	</g>
																</g>
															</svg>
														</svg>
													</div>
												</icon-shape></yt-icon-shape></yt-icon></ytd-logo>
									<ytd-lottie-player class="style-scope ytd-yoodle-renderer" hidden=""></ytd-lottie-player>
								</ytd-yoodle-renderer>
							</a>
							<span id="country-code" class="style-scope ytd-topbar-logo-renderer"> VN </span>
						</ytd-topbar-logo-renderer>
					</div>
					<div id="guide-inner-content" class="style-scope ytd-app">
						<ytd-guide-renderer id="guide-renderer" class="style-scope ytd-app">
							<div id="sections" class="style-scope ytd-guide-renderer">
								<ytd-guide-section-renderer class="style-scope ytd-guide-renderer" guide-persistent-and-visible="">
									<h3 class="style-scope ytd-guide-section-renderer" hidden="">
										<yt-formatted-string id="guide-section-title" link-inherit-color="" class="style-scope ytd-guide-section-renderer" is-empty=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
									</h3>
									<div id="items" class="style-scope ytd-guide-section-renderer">
										<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" active="" is-primary="" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Home" href="/">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<g>
																			<path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
																		</g>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Home</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Shorts">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Shorts</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Subscriptions" href="/feed/subscriptions">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Subscriptions</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-collapsible-section-entry-renderer class="style-scope ytd-guide-section-renderer">
											<div id="header" class="style-scope ytd-guide-collapsible-section-entry-renderer">
												<ytd-guide-entry-renderer id="header-entry" class="style-scope ytd-guide-collapsible-section-entry-renderer" is-primary="" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Library" href="/feed/library">
														<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
															<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																		<div style="width: 100%; height: 100%; fill: currentcolor">
																			<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                          pointer-events: none;
                                          display: block;
                                          width: 100%;
                                          height: 100%;
                                        ">
																				<path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
																			</svg>
																		</div>
																	</icon-shape></yt-icon-shape></yt-icon>
															<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
															</yt-img-shadow>
															<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Library</yt-formatted-string>
															<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
															</yt-icon>
															<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
															</span>
															<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
															</yt-icon>
															<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
														</tp-yt-paper-item>
													</a>
													<yt-interaction class="style-scope ytd-guide-entry-renderer">
														<div class="stroke style-scope yt-interaction"></div>
														<div class="fill style-scope yt-interaction"></div>
													</yt-interaction>
												</ytd-guide-entry-renderer>
											</div>
											<div id="section-items" class="style-scope ytd-guide-collapsible-section-entry-renderer">
												<ytd-guide-entry-renderer class="style-scope ytd-guide-collapsible-section-entry-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="History" href="/feed/history">
														<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
															<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																		<div style="width: 100%; height: 100%; fill: currentcolor">
																			<svg height="24" style="
                                          pointer-events: none;
                                          display: block;
                                          width: 100%;
                                          height: 100%;
                                        " viewBox="0 0 24 24" width="24" focusable="false">
																				<g>
																					<path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
																				</g>
																			</svg>
																		</div>
																	</icon-shape></yt-icon-shape></yt-icon>
															<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
															</yt-img-shadow>
															<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">History</yt-formatted-string>
															<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
															</yt-icon>
															<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
															</span>
															<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
															</yt-icon>
															<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
														</tp-yt-paper-item>
													</a>
													<yt-interaction class="style-scope ytd-guide-entry-renderer">
														<div class="stroke style-scope yt-interaction"></div>
														<div class="fill style-scope yt-interaction"></div>
													</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-collapsible-section-entry-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Your videos" href="https://studio.youtube.com/channel/UCZHyg92Fu_7KQIwGS3A0_2w/videos">
														<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
															<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																		<div style="width: 100%; height: 100%; fill: currentcolor">
																			<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                          pointer-events: none;
                                          display: block;
                                          width: 100%;
                                          height: 100%;
                                        ">
																				<path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
																			</svg>
																		</div>
																	</icon-shape></yt-icon-shape></yt-icon>
															<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
															</yt-img-shadow>
															<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Your videos</yt-formatted-string>
															<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
															</yt-icon>
															<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
															</span>
															<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
															</yt-icon>
															<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
														</tp-yt-paper-item>
													</a>
													<yt-interaction class="style-scope ytd-guide-entry-renderer">
														<div class="stroke style-scope yt-interaction"></div>
														<div class="fill style-scope yt-interaction"></div>
													</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-collapsible-section-entry-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Watch later" href="/playlist?list=WL">
														<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
															<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																		<div style="width: 100%; height: 100%; fill: currentcolor">
																			<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                          pointer-events: none;
                                          display: block;
                                          width: 100%;
                                          height: 100%;
                                        ">
																				<path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
																			</svg>
																		</div>
																	</icon-shape></yt-icon-shape></yt-icon>
															<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
															</yt-img-shadow>
															<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Watch later</yt-formatted-string>
															<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
															</yt-icon>
															<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
															</span>
															<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
															</yt-icon>
															<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
														</tp-yt-paper-item>
													</a>
													<yt-interaction class="style-scope ytd-guide-entry-renderer">
														<div class="stroke style-scope yt-interaction"></div>
														<div class="fill style-scope yt-interaction"></div>
													</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-downloads-entry-renderer class="style-scope ytd-guide-collapsible-section-entry-renderer">
													<ytd-guide-entry-renderer id="downloads-entry" class="style-scope ytd-guide-downloads-entry-renderer" hidden="" is-primary="" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Downloads" href="/feed/downloads">
															<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
																<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																			<div style="width: 100%; height: 100%; fill: currentcolor">
																				<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                            pointer-events: none;
                                            display: block;
                                            width: 100%;
                                            height: 100%;
                                          ">
																					<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
																				</svg>
																			</div>
																		</icon-shape></yt-icon-shape></yt-icon>
																<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
																</yt-img-shadow>
																<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Downloads</yt-formatted-string>
																<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
																</yt-icon>
																<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
																</span>
																<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
																</yt-icon>
																<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
															</tp-yt-paper-item>
														</a>
														<yt-interaction class="style-scope ytd-guide-entry-renderer">
															<div class="stroke style-scope yt-interaction"></div>
															<div class="fill style-scope yt-interaction"></div>
														</yt-interaction>
													</ytd-guide-entry-renderer> </ytd-guide-downloads-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-collapsible-section-entry-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Nhạc Việt mới" href="/playlist?list=PLa95TXKN_969sbj_Rg7Fi8QqeQm3xcl7l">
														<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
															<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																		<div style="width: 100%; height: 100%; fill: currentcolor">
																			<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                          pointer-events: none;
                                          display: block;
                                          width: 100%;
                                          height: 100%;
                                        ">
																				<path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path>
																			</svg>
																		</div>
																	</icon-shape></yt-icon-shape></yt-icon>
															<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
															</yt-img-shadow>
															<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Nhạc Việt mới</yt-formatted-string>
															<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
															</yt-icon>
															<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
															</span>
															<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
															</yt-icon>
															<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
														</tp-yt-paper-item>
													</a>
													<yt-interaction class="style-scope ytd-guide-entry-renderer">
														<div class="stroke style-scope yt-interaction"></div>
														<div class="fill style-scope yt-interaction"></div>
													</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-collapsible-entry-renderer class="style-scope ytd-guide-collapsible-section-entry-renderer" can-show-more=""><ytd-guide-entry-renderer id="expander-item" class="style-scope ytd-guide-collapsible-entry-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Show more">
															<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
																<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																			<div style="width: 100%; height: 100%; fill: currentcolor">
																				<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                            pointer-events: none;
                                            display: block;
                                            width: 100%;
                                            height: 100%;
                                          ">
																					<path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
																				</svg>
																			</div>
																		</icon-shape></yt-icon-shape></yt-icon>
																<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
																</yt-img-shadow>
																<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Show more</yt-formatted-string>
																<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
																</yt-icon>
																<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
																</span>
																<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
																</yt-icon>
																<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
															</tp-yt-paper-item>
														</a>
														<yt-interaction class="style-scope ytd-guide-entry-renderer">
															<div class="stroke style-scope yt-interaction"></div>
															<div class="fill style-scope yt-interaction"></div>
														</yt-interaction>
													</ytd-guide-entry-renderer>
													<div id="expanded" class="style-scope ytd-guide-collapsible-entry-renderer">
														<div id="expandable-items" class="style-scope ytd-guide-collapsible-entry-renderer"></div>
														<ytd-guide-entry-renderer id="collapser-item" class="style-scope ytd-guide-collapsible-entry-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Show less">
																<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
																	<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																				<div style="width: 100%; height: 100%; fill: currentcolor">
																					<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                              pointer-events: none;
                                              display: block;
                                              width: 100%;
                                              height: 100%;
                                            ">
																						<path d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z"></path>
																					</svg>
																				</div>
																			</icon-shape></yt-icon-shape></yt-icon>
																	<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
																	</yt-img-shadow>
																	<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Show less</yt-formatted-string>
																	<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
																	</yt-icon>
																	<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
																	</span>
																	<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
																	</yt-icon>
																	<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
																</tp-yt-paper-item>
															</a>
															<yt-interaction class="style-scope ytd-guide-entry-renderer">
																<div class="stroke style-scope yt-interaction"></div>
																<div class="fill style-scope yt-interaction"></div>
															</yt-interaction>
														</ytd-guide-entry-renderer>
													</div>
												</ytd-guide-collapsible-entry-renderer>
											</div>
										</ytd-guide-collapsible-section-entry-renderer>
									</div>
								</ytd-guide-section-renderer><ytd-guide-section-renderer class="style-scope ytd-guide-renderer" guide-persistent-and-visible="">
									<h3 class="style-scope ytd-guide-section-renderer">
										<yt-formatted-string id="guide-section-title" link-inherit-color="" class="style-scope ytd-guide-section-renderer">Subscriptions</yt-formatted-string>
									</h3>
									<div id="items" class="style-scope ytd-guide-section-renderer">
											<SideBarItemDot />
											<SideBarItem />
										<ytd-guide-collapsible-entry-renderer class="style-scope ytd-guide-section-renderer" can-show-more=""><ytd-guide-entry-renderer id="expander-item" class="style-scope ytd-guide-collapsible-entry-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Show 180 more">
													<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
														<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																	<div style="width: 100%; height: 100%; fill: currentcolor">
																		<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                        pointer-events: none;
                                        display: block;
                                        width: 100%;
                                        height: 100%;
                                      ">
																			<path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
																		</svg>
																	</div>
																</icon-shape></yt-icon-shape></yt-icon>
														<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
														</yt-img-shadow>
														<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Show 180 more</yt-formatted-string>
														<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
														</yt-icon>
														<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
														</span>
														<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
														</yt-icon>
														<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
													</tp-yt-paper-item>
												</a>
												<yt-interaction class="style-scope ytd-guide-entry-renderer">
													<div class="stroke style-scope yt-interaction"></div>
													<div class="fill style-scope yt-interaction"></div>
												</yt-interaction>
											</ytd-guide-entry-renderer>
											<div id="expanded" class="style-scope ytd-guide-collapsible-entry-renderer">
												<div id="expandable-items" class="style-scope ytd-guide-collapsible-entry-renderer"></div>
												<ytd-guide-entry-renderer id="collapser-item" class="style-scope ytd-guide-collapsible-entry-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Show less">
														<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
															<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																		<div style="width: 100%; height: 100%; fill: currentcolor">
																			<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                          pointer-events: none;
                                          display: block;
                                          width: 100%;
                                          height: 100%;
                                        ">
																				<path d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z"></path>
																			</svg>
																		</div>
																	</icon-shape></yt-icon-shape></yt-icon>
															<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
															</yt-img-shadow>
															<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Show less</yt-formatted-string>
															<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
															</yt-icon>
															<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
															</span>
															<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
															</yt-icon>
															<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
														</tp-yt-paper-item>
													</a>
													<yt-interaction class="style-scope ytd-guide-entry-renderer">
														<div class="stroke style-scope yt-interaction"></div>
														<div class="fill style-scope yt-interaction"></div>
													</yt-interaction>
												</ytd-guide-entry-renderer>
											</div>
										</ytd-guide-collapsible-entry-renderer>
									</div>
								</ytd-guide-section-renderer><ytd-guide-section-renderer class="style-scope ytd-guide-renderer" guide-persistent-and-visible="">
									<h3 class="style-scope ytd-guide-section-renderer">
										<yt-formatted-string id="guide-section-title" link-inherit-color="" class="style-scope ytd-guide-section-renderer">Explore</yt-formatted-string>
									</h3>
									<div id="items" class="style-scope ytd-guide-section-renderer">
										<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Trending" href="/feed/trending?bp=6gQJRkVleHBsb3Jl">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Trending</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Music" href="/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Music</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Gaming" href="/gaming">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Gaming</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="News" href="/channel/UCYfdidRxbB8Qhf0Nx7ioOYw">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">News</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Sports" href="/channel/UCEgdi0XIXXZ-qJOFPf4JSKw">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Sports</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction>
										</ytd-guide-entry-renderer>
									</div>
								</ytd-guide-section-renderer><ytd-guide-section-renderer class="style-scope ytd-guide-renderer" guide-persistent-and-visible="">
									<h3 class="style-scope ytd-guide-section-renderer">
										<yt-formatted-string id="guide-section-title" link-inherit-color="" class="style-scope ytd-guide-section-renderer">More from YouTube</yt-formatted-string>
									</h3>
									<div id="items" class="style-scope ytd-guide-section-renderer">
										<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="YouTube Premium" href="/premium">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg viewBox="0 0 24 24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<defs>
																			<radialGradient cx="5.4%" cy="7.11%" r="107.93%" fx="5.4%" fy="7.11%" gradientTransform="matrix(.70653 0 0 1 .016 0)">
																				<stop offset="0%" stop-color="#FFF"></stop>
																				<stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
																			</radialGradient>
																		</defs>
																		<g fill="none" fill-rule="evenodd">
																			<path d="M1 1h21.77v22H1z"></path>
																			<g fill-rule="nonzero">
																				<path fill="#F00" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"></path>
																				<path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
																				<path fill="#000" fill-opacity=".12" d="M9.68 8.88l5.13 3.48.73-.38"></path>
																				<path fill="#FFF" fill-opacity=".2" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"></path>
																				<path fill="#3E2723" fill-opacity=".2" d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"></path>
																				<path fill="#FFF" fill-opacity=".2" d="M9.68 15.08v.1l5.84-3.08v-.12"></path>
																				<path fill="#3E2723" fill-opacity=".2" d="M9.68 8.9v-.13l5.84 3.1v.1"></path>
																				<path fill="url(#a)" fill-opacity=".1" d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z" transform="translate(1 4.208)"></path>
																			</g>
																		</g>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">YouTube Premium</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="YouTube Studio" href="https://studio.youtube.com/">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg viewBox="0 0 24 24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path fill="red" d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"></path>
																		<path fill="#fff" d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"></path>
																		<path fill="red" d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"></path>
																		<path fill="#fff" d="M9.88 15.25 15.5 12 9.88 8.75z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">YouTube Studio</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="YouTube Music" href="https://music.youtube.com/">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg viewBox="0 0 24 24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
																		<polygon fill="#FFFFFF" points="10,14.65 10,9.35 15,12 "></polygon>
																		<path fill="#FFFFFF" d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">YouTube Music</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="YouTube Kids" href="https://www.youtubekids.com/?source=youtube_web">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg viewBox="0 0 24 24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path fill="#FF0000" d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"></path>
																		<path fill="#000" d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"></path>
																		<path fill="#000" d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"></path>
																		<path fill="#FFF" d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">YouTube Kids</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction>
										</ytd-guide-entry-renderer>
									</div>
								</ytd-guide-section-renderer><ytd-guide-section-renderer class="style-scope ytd-guide-renderer" guide-persistent-and-visible="">
									<h3 class="style-scope ytd-guide-section-renderer" hidden="">
										<yt-formatted-string id="guide-section-title" link-inherit-color="" class="style-scope ytd-guide-section-renderer" is-empty=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
									</h3>
									<div id="items" class="style-scope ytd-guide-section-renderer">
										<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Settings" href="/account">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Settings</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Report history" href="/reporthistory">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Report history</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Help">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Help</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction> </ytd-guide-entry-renderer><ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" line-end-style="none"><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="" title="Send feedback">
												<tp-yt-paper-item class="style-scope ytd-guide-entry-renderer" role="link" style-target="host" tabindex="0" aria-disabled="false">
													<yt-icon class="guide-icon style-scope ytd-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
													<yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade="" hidden="">
													</yt-img-shadow>
													<yt-formatted-string class="title style-scope ytd-guide-entry-renderer">Send feedback</yt-formatted-string>
													<yt-icon class="arrow-icon style-scope ytd-guide-entry-renderer" icon="chevron_right" size="16" disable-upgrade="" hidden="">
													</yt-icon>
													<span class="guide-entry-count style-scope ytd-guide-entry-renderer">
													</span>
													<yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" size="16" disable-upgrade="">
													</yt-icon>
													<div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div>
												</tp-yt-paper-item>
											</a>
											<yt-interaction class="style-scope ytd-guide-entry-renderer">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction>
										</ytd-guide-entry-renderer>
									</div>
								</ytd-guide-section-renderer>
							</div>
							<div id="footer" class="style-scope ytd-guide-renderer">
								<div id="guide-links-primary" class="style-scope ytd-guide-renderer">
									<a slot="guide-links-primary" href="https://www.youtube.com/about/" style="display: none">About</a><a slot="guide-links-primary" href="https://www.youtube.com/about/press/" style="display: none">Press</a><a slot="guide-links-primary" href="https://www.youtube.com/about/copyright/" style="display: none">Copyright</a><a slot="guide-links-primary" href="/t/contact_us/" style="display: none">Contact us</a><a slot="guide-links-primary" href="https://www.youtube.com/creators/" style="display: none">Creators</a><a slot="guide-links-primary" href="https://www.youtube.com/ads/" style="display: none">Advertise</a><a slot="guide-links-primary" href="https://developers.google.com/youtube" style="display: none">Developers</a>
								</div>
								<div id="guide-links-secondary" class="style-scope ytd-guide-renderer">
									<a slot="guide-links-secondary" href="/t/terms" style="display: none">Terms</a><a slot="guide-links-secondary" href="/t/privacy" style="display: none">Privacy</a><a slot="guide-links-secondary" href="https://www.youtube.com/about/policies/" style="display: none">Policy &amp; Safety</a><a slot="guide-links-secondary" href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&amp;utm_source=ythp&amp;utm_medium=LeftNav&amp;utm_content=txt&amp;u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen" style="display: none">How YouTube works</a><a slot="guide-links-secondary" href="/new" style="display: none">Test new features</a>
								</div>
								<div id="copyright" slot="copyright" style="display: none">
									<div dir="ltr" style="display: inline">© 2023 Google LLC</div>
								</div>
							</div>
						</ytd-guide-renderer>
						<dom-if class="style-scope ytd-app"><template is="dom-if"></template></dom-if>
					</div>
				</div>
			</div>
		</div>
	</tp-yt-app-drawer>
	<ytd-mini-guide-renderer class="style-scope ytd-app" role="navigation" guide-persistent-and-visible="" hidden="" disable-upgrade="">
		<div id="items" class="style-scope ytd-mini-guide-renderer">
			<ytd-mini-guide-entry-renderer class="style-scope ytd-mini-guide-renderer" system-icons="" role="tab" tabindex="0" aria-selected="true" is-active="" aria-label="Home"><a id="endpoint" tabindex="-1" class="yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer" title="Home" href="/">
					<yt-icon id="icon" class="guide-icon style-scope ytd-mini-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
								<div style="width: 100%; height: 100%; fill: currentcolor">
									<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%">
										<g>
											<path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
										</g>
									</svg>
								</div>
							</icon-shape></yt-icon-shape></yt-icon>
					<span class="title style-scope ytd-mini-guide-entry-renderer">Home</span>
					<tp-yt-paper-tooltip animation-delay="0" offset="4" position="right" class="style-scope ytd-mini-guide-entry-renderer" role="tooltip" tabindex="-1" hidden="" style="--paper-tooltip-delay-in: 0ms">
						<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip">
							Home
						</div>
					</tp-yt-paper-tooltip>
					<yt-interaction class="style-scope ytd-mini-guide-entry-renderer">
						<div class="stroke style-scope yt-interaction"></div>
						<div class="fill style-scope yt-interaction"></div>
					</yt-interaction>
				</a> </ytd-mini-guide-entry-renderer><ytd-mini-guide-entry-renderer class="style-scope ytd-mini-guide-renderer" system-icons="" role="tab" tabindex="0" aria-selected="false" aria-label="Shorts"><a id="endpoint" tabindex="-1" class="yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer" title="Shorts">
					<yt-icon id="icon" class="guide-icon style-scope ytd-mini-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
								<div style="width: 100%; height: 100%; fill: currentcolor">
									<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%">
										<path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
									</svg>
								</div>
							</icon-shape></yt-icon-shape></yt-icon>
					<span class="title style-scope ytd-mini-guide-entry-renderer">Shorts</span>
					<tp-yt-paper-tooltip animation-delay="0" offset="4" position="right" class="style-scope ytd-mini-guide-entry-renderer" role="tooltip" tabindex="-1" hidden="" style="--paper-tooltip-delay-in: 0ms">
						<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip">
							Shorts
						</div>
					</tp-yt-paper-tooltip>
					<yt-interaction class="style-scope ytd-mini-guide-entry-renderer">
						<div class="stroke style-scope yt-interaction"></div>
						<div class="fill style-scope yt-interaction"></div>
					</yt-interaction>
				</a> </ytd-mini-guide-entry-renderer><ytd-mini-guide-entry-renderer class="style-scope ytd-mini-guide-renderer" system-icons="" role="tab" tabindex="0" aria-selected="false" aria-label="Subscriptions"><a id="endpoint" tabindex="-1" class="yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer" title="Subscriptions" href="/feed/subscriptions">
					<yt-icon id="icon" class="guide-icon style-scope ytd-mini-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
								<div style="width: 100%; height: 100%; fill: currentcolor">
									<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%">
										<path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
									</svg>
								</div>
							</icon-shape></yt-icon-shape></yt-icon>
					<span class="title style-scope ytd-mini-guide-entry-renderer">Subscriptions</span>
					<tp-yt-paper-tooltip animation-delay="0" offset="4" position="right" class="style-scope ytd-mini-guide-entry-renderer" role="tooltip" tabindex="-1" hidden="" style="--paper-tooltip-delay-in: 0ms">
						<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip">
							Subscriptions
						</div>
					</tp-yt-paper-tooltip>
					<yt-interaction class="style-scope ytd-mini-guide-entry-renderer">
						<div class="stroke style-scope yt-interaction"></div>
						<div class="fill style-scope yt-interaction"></div>
					</yt-interaction>
				</a> </ytd-mini-guide-entry-renderer><ytd-mini-guide-entry-renderer class="style-scope ytd-mini-guide-renderer" system-icons="" role="tab" tabindex="0" aria-selected="false" aria-label="Library"><a id="endpoint" tabindex="-1" class="yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer" title="Library" href="/feed/library">
					<yt-icon id="icon" class="guide-icon style-scope ytd-mini-guide-entry-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
								<div style="width: 100%; height: 100%; fill: currentcolor">
									<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%">
										<path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
									</svg>
								</div>
							</icon-shape></yt-icon-shape></yt-icon>
					<span class="title style-scope ytd-mini-guide-entry-renderer">Library</span>
					<tp-yt-paper-tooltip animation-delay="0" offset="4" position="right" class="style-scope ytd-mini-guide-entry-renderer" role="tooltip" tabindex="-1" hidden="" style="--paper-tooltip-delay-in: 0ms">
						<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip">
							Library
						</div>
					</tp-yt-paper-tooltip>
					<yt-interaction class="style-scope ytd-mini-guide-entry-renderer">
						<div class="stroke style-scope yt-interaction"></div>
						<div class="fill style-scope yt-interaction"></div>
					</yt-interaction>
				</a>
			</ytd-mini-guide-entry-renderer>
		</div>
	</ytd-mini-guide-renderer>
	<ytd-page-manager id="page-manager" class="style-scope ytd-app"><ytd-browse class="style-scope ytd-page-manager" rounded-container="" darker-dark-theme="" page-subtype="home" rich-grid-watch-status="inactive" role="main" amsterdam="" has-sidebar="" guide-persistent-and-visible="">
			<div id="alert-banner" class="style-scope ytd-browse"></div>
			<div id="masthead-ad" class="style-scope ytd-browse"></div>
			<div id="header" class="style-scope ytd-browse"></div>
			<div id="alerts" class="style-scope ytd-browse"></div>
			<ytd-channel-legal-info-renderer class="style-scope ytd-browse" disable-upgrade="" hidden="">
			</ytd-channel-legal-info-renderer>
			<ytd-playlist-sidebar-renderer class="style-scope ytd-browse" disable-upgrade="" hidden="">
			</ytd-playlist-sidebar-renderer>
			<ytd-playlist-header-renderer class="style-scope ytd-browse" disable-upgrade="" hidden="">
			</ytd-playlist-header-renderer>
			<ytd-settings-sidebar-renderer class="style-scope ytd-browse" disable-upgrade="" hidden="">
			</ytd-settings-sidebar-renderer>
			<ytd-two-column-browse-results-renderer class="style-scope ytd-browse grid grid-disabled" page-subtype="home" disable-grid-state-aware="" style="touch-action: pan-down">
				<div id="primary" class="style-scope ytd-two-column-browse-results-renderer">
					<ytd-rich-grid-renderer class="style-scope ytd-two-column-browse-results-renderer" style="
              --ytd-rich-grid-item-max-width: 500px;
              --ytd-rich-grid-item-min-width: 310px;
              --ytd-rich-grid-items-per-row: 4;
              --ytd-rich-grid-posts-per-row: 4;
              --ytd-rich-grid-slim-items-per-row: 6;
              --ytd-rich-grid-game-cards-per-row: 6;
            ">
						<div id="header" class="style-scope ytd-rich-grid-renderer">
							<ytd-feed-filter-chip-bar-renderer class="style-scope ytd-rich-grid-renderer" at-start="" component-style="FEED_FILTER_CHIP_BAR_STYLE_TYPE_DEFAULT" style="--ytd-rich-grid-chips-bar-width: 1609px; --ytd-rich-grid-chips-bar-top: 56px">
								<div id="chips-wrapper" class="style-scope ytd-feed-filter-chip-bar-renderer">
									<div id="left-arrow" class="style-scope ytd-feed-filter-chip-bar-renderer">
										<div id="left-arrow-button" class="style-scope ytd-feed-filter-chip-bar-renderer">
											<ytd-button-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" button-renderer="" button-next=""><yt-button-shape><button class="yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default" aria-label="Previous" style="">
														<div class="yt-spec-button-shape-next__icon" aria-hidden="true">
															<yt-icon style="width: 24px; height: 24px"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																		<div style="width: 100%; height: 100%; fill: currentcolor">
																			<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                          pointer-events: none;
                                          display: block;
                                          width: 100%;
                                          height: 100%;
                                        ">
																				<path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path>
																			</svg>
																		</div>
																	</icon-shape></yt-icon-shape></yt-icon>
														</div>
														<yt-touch-feedback-shape style="border-radius: inherit">
															<div class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response" aria-hidden="true">
																<div class="yt-spec-touch-feedback-shape__stroke" style=""></div>
																<div class="yt-spec-touch-feedback-shape__fill" style=""></div>
															</div>
														</yt-touch-feedback-shape>
													</button></yt-button-shape><tp-yt-paper-tooltip fit-to-visible-bounds="" offset="8" role="tooltip" tabindex="-1">
													<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip">
														Previous
													</div>
												</tp-yt-paper-tooltip></ytd-button-renderer>
										</div>
									</div>
									<div id="filter" class="style-scope ytd-feed-filter-chip-bar-renderer"></div>
									<div id="scroll-container" class="style-scope ytd-feed-filter-chip-bar-renderer" style="touch-action: pan-y">
										<iron-selector id="chips" activate-event="" role="tablist" selected-attribute="selected" class="style-scope ytd-feed-filter-chip-bar-renderer" style="transform: translateX(0px)">
											<yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer iron-selected" aria-selected="true" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER" selected=""><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="All">All</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Music">Music</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Gaming">Gaming</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Mixes">Mixes</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Youth music">Youth music</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Pokémon Scarlet and Violet">Pokémon Scarlet and Violet</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Superheroes">Superheroes</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Thrillers">Thrillers</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Live">Live</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Manga">Manga</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Role-Playing Games">Role-Playing Games</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Comedy">Comedy</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Asian music">Asian music</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Consumer Electronics">Consumer Electronics</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Recently uploaded">Recently uploaded</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_HOME_FILTER"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="Watched">Watched</yt-formatted-string> </yt-chip-cloud-chip-renderer><yt-chip-cloud-chip-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" aria-selected="false" role="tab" tabindex="0" chip-style="STYLE_REFRESH_TO_NOVEL_CHIP"><yt-formatted-string id="text" ellipsis-truncate="" class="style-scope yt-chip-cloud-chip-renderer" ellipsis-truncate-styling="" title="New to you">New to you</yt-formatted-string>
											</yt-chip-cloud-chip-renderer></iron-selector>
									</div>
									<div id="right-arrow" class="style-scope ytd-feed-filter-chip-bar-renderer">
										<div id="right-arrow-button" class="style-scope ytd-feed-filter-chip-bar-renderer">
											<ytd-button-renderer class="style-scope ytd-feed-filter-chip-bar-renderer" button-renderer="" button-next=""><yt-button-shape><button class="yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default" aria-label="Next" style="">
														<div class="yt-spec-button-shape-next__icon" aria-hidden="true">
															<yt-icon style="width: 24px; height: 24px"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																		<div style="width: 100%; height: 100%; fill: currentcolor">
																			<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                          pointer-events: none;
                                          display: block;
                                          width: 100%;
                                          height: 100%;
                                        ">
																				<path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
																			</svg>
																		</div>
																	</icon-shape></yt-icon-shape></yt-icon>
														</div>
														<yt-touch-feedback-shape style="border-radius: inherit">
															<div class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response" aria-hidden="true">
																<div class="yt-spec-touch-feedback-shape__stroke" style=""></div>
																<div class="yt-spec-touch-feedback-shape__fill" style=""></div>
															</div>
														</yt-touch-feedback-shape>
													</button></yt-button-shape><tp-yt-paper-tooltip fit-to-visible-bounds="" offset="8" role="tooltip" tabindex="-1">
													<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip">
														Next
													</div>
												</tp-yt-paper-tooltip></ytd-button-renderer>
										</div>
									</div>
								</div>
							</ytd-feed-filter-chip-bar-renderer>
						</div>
						<div id="big-yoodle" class="style-scope ytd-rich-grid-renderer"></div>
						<div id="masthead-ad" class="style-scope ytd-rich-grid-renderer">
							<ytd-banner-promo-renderer class="style-scope ytd-rich-grid-renderer" button-update="" style="
                  --yt-basic-background-color: rgba(255, 255, 255, 1);
                  --yt-basic-foreground-body-color: rgba(24, 24, 24, 1);
                  --yt-basic-foreground-activated-color: rgba(24, 24, 24, 1);
                " guide-persistent-and-visible="">
								<div class="ytd-banner-promo-renderer-background style-scope ytd-banner-promo-renderer">
									<ytd-button-renderer id="dismiss-button" class="style-scope ytd-banner-promo-renderer" button-renderer="" button-next=""><yt-button-shape><button class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--overlay-dark yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-button" aria-label="Close" style="">
												<div class="yt-spec-button-shape-next__icon" aria-hidden="true">
													<yt-icon style="width: 24px; height: 24px"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon>
												</div>
												<yt-touch-feedback-shape style="border-radius: inherit">
													<div class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--overlay-touch-response-inverse" aria-hidden="true">
														<div class="yt-spec-touch-feedback-shape__stroke" style=""></div>
														<div class="yt-spec-touch-feedback-shape__fill" style=""></div>
													</div>
												</yt-touch-feedback-shape>
											</button></yt-button-shape><tp-yt-paper-tooltip fit-to-visible-bounds="" offset="8" disable-upgrade=""></tp-yt-paper-tooltip></ytd-button-renderer>
									<div class="ytd-banner-promo-renderer-layout-container style-scope ytd-banner-promo-renderer">
										<div class="ytd-banner-promo-renderer-layout style-scope ytd-banner-promo-renderer">
											<img alt="" class="ytd-banner-promo-renderer-inline-image style-scope ytd-banner-promo-renderer" src="https://www.gstatic.com/youtube/img/promos/growth/3e5a02221ef0984521f64b2c3c664064a5067aecc3ec8de1c89319ae47193d91_2560x520.jpeg" />
											<h1 class="ytd-banner-promo-renderer-logo style-scope ytd-banner-promo-renderer">
												<yt-img-shadow height="24" class="style-scope ytd-banner-promo-renderer no-transition empty" style="background-color: transparent"><img id="img" draggable="false" class="style-scope yt-img-shadow" alt="" height="24" /></yt-img-shadow>
											</h1>
											<dom-if class="style-scope ytd-banner-promo-renderer"><template is="dom-if"></template></dom-if>
											<div class="ytd-banner-promo-renderer-content style-scope ytd-banner-promo-renderer">
												<div class="dynamic-text-container style-scope ytd-banner-promo-renderer">
													<yt-dynamic-sizing-formatted-string class="dynamic-title-short style-scope ytd-banner-promo-renderer" max-font-size="64" max-height="94" max-lines="2" max-width="440" min-font-size="20" hidden="">
														<div id="container" class="dynamic-text-container style-scope yt-dynamic-sizing-formatted-string" style="max-width: 440px; max-height: 94px">
															<yt-formatted-string id="text" disable-attributed-string="" class="style-scope yt-dynamic-sizing-formatted-string" is-empty="" style="font-weight: 700"><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
														</div>
													</yt-dynamic-sizing-formatted-string>
													<yt-dynamic-sizing-formatted-string class="dynamic-title-long style-scope ytd-banner-promo-renderer" max-font-size="64" max-height="94" max-lines="2" max-width="440" min-font-size="20">
														<div id="container" class="dynamic-text-container style-scope yt-dynamic-sizing-formatted-string" style="max-width: 440px; max-height: 94px">
															<yt-formatted-string id="text" disable-attributed-string="" class="style-scope yt-dynamic-sizing-formatted-string" style="font-weight: 700">Get more from your favorite creators by purchasing a channel
																membership</yt-formatted-string>
														</div>
													</yt-dynamic-sizing-formatted-string>
												</div>
												<ytd-button-renderer id="action-button" class="style-scope ytd-banner-promo-renderer" button-renderer="" button-next=""><yt-button-shape><a class="yt-spec-button-shape-next yt-spec-button-shape-next--outline yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m" aria-label="Browse memberships" href="/channel_memberships" rel="nofollow" target="" force-new-state="true" style="color: rgb(19, 19, 19); border-color: rgb(19, 19, 19)">
															<div class="cbox yt-spec-button-shape-next__button-text-content">
																<span class="yt-core-attributed-string yt-core-attributed-string--white-space-no-wrap" role="text">Browse memberships</span>
															</div>
															<yt-touch-feedback-shape style="border-radius: inherit">
																<div class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response" aria-hidden="true">
																	<div class="yt-spec-touch-feedback-shape__stroke" style=""></div>
																	<div class="yt-spec-touch-feedback-shape__fill" style=""></div>
																</div>
															</yt-touch-feedback-shape>
														</a></yt-button-shape><tp-yt-paper-tooltip fit-to-visible-bounds="" offset="8" disable-upgrade=""></tp-yt-paper-tooltip></ytd-button-renderer>
											</div>
										</div>
									</div>
								</div>
								<dom-if class="style-scope ytd-banner-promo-renderer"><template is="dom-if"></template></dom-if>
							</ytd-banner-promo-renderer>
						</div>
						<div id="title-container" class="style-scope ytd-rich-grid-renderer" hidden="">
							<div id="title" class="style-scope ytd-rich-grid-renderer"></div>
						</div>
						<div id="spinner-container" class="style-scope ytd-rich-grid-renderer">
							<tp-yt-paper-spinner-lite class="style-scope ytd-rich-grid-renderer" aria-hidden="true">
								<div id="spinnerContainer" class="style-scope tp-yt-paper-spinner-lite">
									<div class="spinner-layer style-scope tp-yt-paper-spinner-lite">
										<div class="circle-clipper left style-scope tp-yt-paper-spinner-lite">
											<div class="circle style-scope tp-yt-paper-spinner-lite"></div>
										</div>
										<div class="circle-clipper right style-scope tp-yt-paper-spinner-lite">
											<div class="circle style-scope tp-yt-paper-spinner-lite"></div>
										</div>
									</div>
								</div>
							</tp-yt-paper-spinner-lite>
						</div>
						<div id="contents" class="style-scope ytd-rich-grid-renderer">
							<RowLoaded />
							<RowLoading />
							<RowContinue />
						</div>
					</ytd-rich-grid-renderer>
				</div>
				<div id="secondary" class="style-scope ytd-two-column-browse-results-renderer"></div>
			</ytd-two-column-browse-results-renderer>
			<div id="survey" class="style-scope ytd-browse"></div>
			<div id="metadata" class="style-scope ytd-browse"></div>
			<div id="footer" class="style-scope ytd-browse"></div>
			<ytd-refresh id="refresh" class="style-scope ytd-browse"><yt-icon id="icon" icon="refresh" class="style-scope ytd-refresh" style="transform: rotate(180deg); opacity: 0.3"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
							<div style="width: 100%; height: 100%; fill: currentcolor">
								<svg viewBox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%">
									<path d="M13 9v2h7V4h-2v2.74C16.53 5.07 14.4 4 12 4c-2.21 0-4.21.9-5.66 2.34S4 9.79 4 12c0 4.42 3.58 8 8 8 2.21 0 4.21-.9 5.66-2.34l-1.42-1.42C15.15 17.33 13.65 18 12 18c-3.31 0-6-2.69-6-6 0-1.65.67-3.15 1.76-4.24C8.85 6.67 10.35 6 12 6c2.21 0 4.15 1.21 5.19 3H13z"></path>
								</svg>
							</div>
						</icon-shape></yt-icon-shape></yt-icon>
				<tp-yt-paper-spinner-lite class="style-scope ytd-refresh" hidden="" aria-hidden="true">
					<div id="spinnerContainer" class="style-scope tp-yt-paper-spinner-lite">
						<div class="spinner-layer style-scope tp-yt-paper-spinner-lite">
							<div class="circle-clipper left style-scope tp-yt-paper-spinner-lite">
								<div class="circle style-scope tp-yt-paper-spinner-lite"></div>
							</div>
							<div class="circle-clipper right style-scope tp-yt-paper-spinner-lite">
								<div class="circle style-scope tp-yt-paper-spinner-lite"></div>
							</div>
						</div>
					</div>
				</tp-yt-paper-spinner-lite>
			</ytd-refresh>
		</ytd-browse><ytd-watch-flexy class="style-scope ytd-page-manager" hidden="" js-panel-height_="" flexy-enable-small-window-sizing="" flexy-enable-large-window-sizing="" cinematics-enabled="" flexy="" rounded-info-panel="" is-four-three-to-sixteen-nine-video_="" watch-metadata-refresh="" is-two-columns_="" style="--ytd-watch-flexy-scrollbar-width: 15px; --ytd-watch-flexy-space-below-player: 136px" flexy-large-window_="">
			<iron-media-query id="two-column-query" class="style-scope ytd-watch-flexy" style="display: none"></iron-media-query>
			<iron-media-query id="small-window-query" class="style-scope ytd-watch-flexy" style="display: none">
			</iron-media-query>
			<iron-media-query id="large-window-query" class="style-scope ytd-watch-flexy" style="display: none">
			</iron-media-query>
			<div id="microformat" class="style-scope ytd-watch-flexy"></div>
			<div id="miniplayer-bar" class="style-scope ytd-watch-flexy"></div>
			<div id="player-wide-container" class="style-scope ytd-watch-flexy">
				<div id="cinematics-wide-container" class="style-scope ytd-watch-flexy"></div>
			</div>
			<div id="single-column-container" class="style-scope ytd-watch-flexy"></div>
			<div id="columns" class="style-scope ytd-watch-flexy">
				<div id="primary" class="style-scope ytd-watch-flexy">
					<div id="primary-inner" class="style-scope ytd-watch-flexy">
						<div id="player" class="style-scope ytd-watch-flexy">
							<div id="cinematics-container" class="style-scope ytd-watch-flexy">
								<div id="cinematics" class="style-scope ytd-watch-flexy"></div>
							</div>
							<div id="player-container-outer" class="style-scope ytd-watch-flexy">
								<div id="player-container-inner" class="style-scope ytd-watch-flexy">
									<div id="player-container" role="complementary" class="style-scope ytd-watch-flexy" style="touch-action: auto">
										<ytd-player id="ytd-player" context="WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH" class="style-scope ytd-watch-flexy" style="touch-action: pan-down">
											<div id="container" class="style-scope ytd-player">
												<div class="html5-video-player ytp-transparent ytp-exp-bottom-control-flexbox ytp-exp-ppp-update unstarted-mode ytp-hide-controls ytp-hide-info-bar ytp-small-mode ytp-tiny-mode" tabindex="-1" id="movie_player" data-version="/s/player/f98908d1/player_ias.vflset/en_US/base.js" aria-label="YouTube Video Player">
													<div class="html5-video-container" data-layer="0">
														<video tabindex="-1" class="video-stream html5-main-video" controlslist="nodownload"></video>
													</div>
													<div class="ytp-gradient-top" data-layer="1"></div>
													<div class="ytp-chrome-top" data-layer="1">
														<button class="ytp-playlist-menu-button ytp-button ytp-playlist-menu-button-tiny" aria-owns="ytp-id-23" aria-haspopup="true" aria-label="Playlist" style="display: none">
															<div class="ytp-playlist-menu-button-icon">
																<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																	<use class="ytp-svg-shadow" xlink:href="#ytp-id-24"></use>
																	<path d="m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z" fill="#fff" id="ytp-id-24"></path>
																</svg>
															</div>
															<div class="ytp-playlist-menu-button-text"></div>
														</button>
														<div class="ytp-title-channel">
															<div class="ytp-title-beacon"></div>
															<a class="ytp-title-channel-logo" target="_blank"></a>
															<div class="ytp-title-expanded-overlay">
																<div class="ytp-title-expanded-heading">
																	<div class="ytp-title-expanded-title">
																		<a target="_blank"></a>
																	</div>
																	<div class="ytp-title-expanded-subtitle"></div>
																</div>
															</div>
														</div>
														<div class="ytp-title">
															<div class="ytp-title-text">
																<a class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link" target="_blank" data-sessionlink="feature=player-title" tabindex="-1"></a>
																<div class="ytp-title-subtext">
																	<a class="ytp-title-channel-name" target="_blank" href=""></a>
																</div>
															</div>
														</div>
														<div class="ytp-chrome-top-buttons">
															<button class="ytp-button ytp-cards-button" aria-label="Show cards" aria-owns="iv-drawer" aria-haspopup="true" data-tooltip-opaque="false" style="display: none">
																<span class="ytp-cards-button-icon-default">
																	<div class="ytp-cards-button-icon">
																		<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-2"></use>
																			<path class="ytp-svg-fill" d="M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z" id="ytp-id-2"></path>
																		</svg>
																	</div>
																	<div class="ytp-cards-button-title">Info</div>
																</span><span class="ytp-cards-button-icon-shopping">
																	<div class="ytp-cards-button-icon">
																		<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																			<path class="ytp-svg-shadow" d="M 27.99,18 A 9.99,9.99 0 1 1 8.00,18 9.99,9.99 0 1 1 27.99,18 z"></path>
																			<path class="ytp-svg-fill" d="M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 z m -4.68,4 4.53,0 c .35,0 .70,.14 .93,.37 l 5.84,5.84 c .23,.23 .37,.58 .37,.93 0,.35 -0.13,.67 -0.37,.90 L 20.06,24.62 C 19.82,24.86 19.51,25 19.15,25 c -0.35,0 -0.70,-0.14 -0.93,-0.37 L 12.37,18.78 C 12.13,18.54 12,18.20 12,17.84 L 12,13.31 C 12,12.59 12.59,12 13.31,12 z m .96,1.31 c -0.53,0 -0.96,.42 -0.96,.96 0,.53 .42,.96 .96,.96 .53,0 .96,-0.42 .96,-0.96 0,-0.53 -0.42,-0.96 -0.96,-0.96 z" fill-opacity="1"></path>
																			<path class="ytp-svg-shadow-fill" d="M 24.61,18.22 18.76,12.37 C 18.53,12.14 18.20,12 17.85,12 H 13.30 C 12.58,12 12,12.58 12,13.30 V 17.85 c 0,.35 .14,.68 .38,.92 l 5.84,5.85 c .23,.23 .55,.37 .91,.37 .35,0 .68,-0.14 .91,-0.38 L 24.61,20.06 C 24.85,19.83 25,19.50 25,19.15 25,18.79 24.85,18.46 24.61,18.22 z M 14.27,15.25 c -0.53,0 -0.97,-0.43 -0.97,-0.97 0,-0.53 .43,-0.97 .97,-0.97 .53,0 .97,.43 .97,.97 0,.53 -0.43,.97 -0.97,.97 z" fill="#000" fill-opacity="0.15"></path>
																		</svg>
																	</div>
																	<div class="ytp-cards-button-title">Shopping</div>
																</span>
															</button>
															<div class="ytp-cards-teaser" style="display: none">
																<div class="ytp-cards-teaser-box"></div>
																<div class="ytp-cards-teaser-text">
																	<span class="ytp-cards-teaser-label"></span>
																</div>
															</div>
															<button class="ytp-button ytp-overflow-button" title="More" aria-haspopup="true" aria-owns="ytp-id-30" aria-label="More">
																<div class="ytp-overflow-icon">
																	<svg height="100%" viewBox="-5 -5 36 36" width="100%">
																		<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#fff"></path>
																	</svg>
																</div>
															</button>
														</div>
													</div>
													<button class="ytp-unmute ytp-popup ytp-button ytp-unmute-animated ytp-unmute-shrink" data-layer="2" style="display: none">
														<div class="ytp-unmute-inner">
															<div class="ytp-unmute-icon">
																<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																	<use class="ytp-svg-shadow" xlink:href="#ytp-id-1"></use>
																	<path class="ytp-svg-fill" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z" id="ytp-id-1"></path>
																</svg>
															</div>
															<div class="ytp-unmute-text">Tap to unmute</div>
															<div class="ytp-unmute-box"></div>
														</div>
													</button>
													<div class="ytp-cued-thumbnail-overlay" data-layer="4" style="">
														<div class="ytp-cued-thumbnail-overlay-image"></div>
														<button class="ytp-large-play-button ytp-button" aria-label="Play">
															<svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
																<path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
																<path d="M 45,24 27,14 27,34" fill="#fff"></path>
															</svg>
														</button>
													</div>
													<div class="ytp-spinner" data-layer="4" style="display: none">
														<div class="ytp-spinner-container">
															<div class="ytp-spinner-rotator">
																<div class="ytp-spinner-left">
																	<div class="ytp-spinner-circle"></div>
																</div>
																<div class="ytp-spinner-right">
																	<div class="ytp-spinner-circle"></div>
																</div>
															</div>
														</div>
														<div class="ytp-spinner-message" style="display: none">
															If playback doesn't begin shortly, try restarting your device.
														</div>
													</div>
													<div class="ytp-paid-content-overlay" aria-live="assertive" aria-atomic="true" data-layer="4">
														<a class="ytp-paid-content-overlay-link" target="_blank" style="display: none">
															<div class="ytp-paid-content-overlay-icon"></div>
															<div class="ytp-paid-content-overlay-text"></div>
															<div class="ytp-paid-content-overlay-chevron"></div>
														</a>
													</div>
													<div class="ytp-storyboard-framepreview" data-layer="4" style="display: none">
														<div class="ytp-storyboard-framepreview-timestamp"></div>
														<div class="ytp-storyboard-framepreview-img"></div>
													</div>
													<div data-layer="4" style="display: none">
														<div class="ytp-bezel-text-wrapper">
															<div class="ytp-bezel-text"></div>
														</div>
														<div class="ytp-bezel" role="status">
															<div class="ytp-bezel-icon"></div>
														</div>
													</div>
													<div class="ytp-doubletap-ui-legacy" data-layer="4" style="display: none">
														<div class="ytp-doubletap-fast-forward-ve"></div>
														<div class="ytp-doubletap-rewind-ve"></div>
														<div class="ytp-doubletap-static-circle">
															<div class="ytp-doubletap-ripple"></div>
														</div>
														<div class="ytp-doubletap-overlay-a11y"></div>
														<div class="ytp-doubletap-seek-info-container">
															<div class="ytp-doubletap-arrows-container">
																<span class="ytp-doubletap-base-arrow"></span><span class="ytp-doubletap-base-arrow"></span><span class="ytp-doubletap-base-arrow"></span>
															</div>
															<div class="ytp-doubletap-tooltip">
																<div class="ytp-chapter-seek-text-legacy"></div>
																<div class="ytp-doubletap-tooltip-label"></div>
															</div>
														</div>
													</div>
													<div aria-live="polite" data-layer="4" style="display: none">
														<div class="ytp-tooltip-text-wrapper">
															<div class="ytp-tooltip-edu">
																<svg height="100%" viewBox="0 0 36 36" width="100%">
																	<path d="M14.1 36.75 12 34.65 24 22.65 36 34.65 33.9 36.75 24 26.85ZM14.1 24.1 12 22 24 10 36 22 33.9 24.1 24 14.2Z"></path>
																</svg><span></span>
															</div>
															<div class="ytp-tooltip-image"></div>
															<div class="ytp-tooltip-title"><span></span></div>
															<span class="ytp-tooltip-text"></span>
														</div>
														<div class="ytp-tooltip-bg">
															<div class="ytp-tooltip-duration"></div>
														</div>
													</div>
													<div class="ytp-ad-persistent-progress-bar-container" data-layer="4" style="display: none">
														<div class="ytp-ad-persistent-progress-bar"></div>
													</div>
													<div class="ytp-suggested-action" data-layer="4">
														<button class="ytp-button ytp-suggested-action-badge ytp-suggested-action-badge-with-controls ytp-featured-product" style="display: none">
															<div class="ytp-suggested-action-badge-icon-container"></div>
															<div class="ytp-suggested-action-badge-expanded-content-container" style="display: none">
																<label class="ytp-suggested-action-badge-title"></label><a class="ytp-featured-product-container" target="_blank">
																	<div class="ytp-featured-product-thumbnail">
																		<img />
																		<div class="ytp-featured-product-open-in-new"></div>
																	</div>
																	<div class="ytp-featured-product-details">
																		<text class="ytp-featured-product-title"></text><text class="ytp-featured-product-countdown" style="display: none"></text><text class="ytp-featured-product-vendor"></text><text class="ytp-featured-product-price"></text>
																	</div>
																	<button class="ytp-suggested-action-badge-dismiss-button-icon ytp-button"></button>
																</a>
															</div>
														</button>
													</div>
													<div class="ytp-suggested-action" data-layer="4">
														<button class="ytp-button ytp-suggested-action-badge ytp-suggested-action-badge-with-controls ytp-suggested-action-badge-expanded" aria-label="" style="display: none">
															<div class="ytp-suggested-action-badge-icon-container">
																<div class="ytp-suggested-action-badge-icon"></div>
															</div>
															<div class="ytp-suggested-action-badge-expanded-content-container" style="">
																<label class="ytp-suggested-action-badge-title"></label><button class="ytp-suggested-action-badge-dismiss-button-icon ytp-button" aria-label=""></button>
															</div>
														</button>
													</div>
													<div class="ytp-suggested-action" data-layer="4">
														<button class="ytp-button ytp-suggested-action-badge ytp-suggested-action-badge-with-controls" style="display: none">
															<div class="ytp-suggested-action-badge-icon-container"></div>
															<div class="ytp-suggested-action-badge-expanded-content-container" style="display: none">
																<label class="ytp-suggested-action-badge-title"></label><button class="ytp-suggested-action-badge-dismiss-button-icon ytp-button"></button>
															</div>
														</button>
													</div>
													<div class="ytp-remote" data-layer="4" style="display: none">
														<div class="ytp-remote-display-status">
															<div class="ytp-remote-display-status-icon">
																<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																	<use class="ytp-svg-shadow" xlink:href="#ytp-id-34"></use>
																	<path d="M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z" fill="#fff" id="ytp-id-34"></path>
																</svg>
															</div>
															<div class="ytp-remote-display-status-text"></div>
														</div>
													</div>
													<div class="ytp-mdx-popup-dialog" role="dialog" data-layer="4" style="display: none">
														<div class="ytp-mdx-popup-dialog-inner-content">
															<div class="ytp-mdx-popup-title">You're signed out</div>
															<div class="ytp-mdx-popup-description">
																Videos you watch may be added to the TV's watch history and
																influence TV recommendations. To avoid this, cancel and sign in to
																YouTube on your computer.
															</div>
															<div class="ytp-mdx-privacy-popup-buttons">
																<button class="ytp-button ytp-mdx-privacy-popup-cancel">
																	Cancel</button><button class="ytp-button ytp-mdx-privacy-popup-confirm">
																	Confirm
																</button>
															</div>
														</div>
													</div>
													<div class="ytp-miniplayer-ui" data-layer="4" style="display: none"></div>
													<div class="ytp-multicam-menu" role="dialog" data-layer="5" style="display: none">
														<div class="ytp-multicam-menu-header">
															<div class="ytp-multicam-menu-title">
																Switch camera<button class="ytp-multicam-menu-close ytp-button" aria-label="Close">
																	<svg height="100%" viewBox="0 0 24 24" width="100%">
																		<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div class="ytp-multicam-menu-items"></div>
													</div>
													<div class="ytp-playlist-menu" role="dialog" id="ytp-id-23" data-layer="5" style="display: none">
														<div class="ytp-playlist-menu-header">
															<div class="ytp-playlist-menu-title">
																<a class="ytp-playlist-menu-title-name"></a><button class="ytp-playlist-menu-close ytp-button" aria-label="Close">
																	<svg height="100%" viewBox="0 0 24 24" width="100%">
																		<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path>
																	</svg>
																</button>
															</div>
															<div class="ytp-playlist-menu-subtitle"></div>
														</div>
														<div class="ytp-playlist-menu-items" role="menu"></div>
													</div>
													<div class="ytp-share-panel" id="ytp-id-26" role="dialog" aria-labelledby="ytp-id-25" data-layer="5" style="display: none">
														<div class="ytp-share-panel-inner-content">
															<div class="ytp-share-panel-title" id="ytp-id-25">Share</div>
															<a class="ytp-share-panel-link ytp-no-contextmenu" target="_blank" title="Share link" aria-label="Share link"></a><label class="ytp-share-panel-include-playlist"><input class="ytp-share-panel-include-playlist-checkbox" type="checkbox" checked="true" />Include playlist</label>
															<div class="ytp-share-panel-loading-spinner">
																<div class="ytp-spinner-container">
																	<div class="ytp-spinner-rotator">
																		<div class="ytp-spinner-left">
																			<div class="ytp-spinner-circle"></div>
																		</div>
																		<div class="ytp-spinner-right">
																			<div class="ytp-spinner-circle"></div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="ytp-share-panel-service-buttons"></div>
															<div class="ytp-share-panel-error">
																An error occurred while retrieving sharing information. Please try
																again later.
															</div>
														</div>
														<button class="ytp-share-panel-close ytp-button" title="Close" aria-label="Close">
															<svg height="100%" viewBox="0 0 24 24" width="100%">
																<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path>
															</svg>
														</button>
													</div>
													<div class="ytp-overflow-panel" id="ytp-id-30" role="dialog" data-layer="5" style="display: none">
														<div class="ytp-overflow-panel-content">
															<div class="ytp-overflow-panel-action-buttons">
																<button class="ytp-watch-later-button ytp-button" data-tooltip-opaque="false" title="Watch later" aria-label="Watch later" style="display: none">
																	<div class="ytp-watch-later-icon">
																		<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-27"></use>
																			<path class="ytp-svg-fill" d="M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M16,19.02 L16,12.00 L18,12.00 L18,17.86 L23.10,20.81 L22.10,22.54 L16,19.02 Z" id="ytp-id-27"></path>
																		</svg>
																	</div>
																	<div class="ytp-watch-later-title">Watch later</div>
																</button><button class="ytp-button ytp-share-button" title="Share" aria-haspopup="true" aria-owns="ytp-id-26" data-tooltip-opaque="false" aria-label="Share" style="display: none">
																	<div class="ytp-share-icon">
																		<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-32"></use>
																			<path class="ytp-svg-fill" d="m 20.20,14.19 0,-4.45 7.79,7.79 -7.79,7.79 0,-4.56 C 16.27,20.69 12.10,21.81 9.34,24.76 8.80,25.13 7.60,27.29 8.12,25.65 9.08,21.32 11.80,17.18 15.98,15.38 c 1.33,-0.60 2.76,-0.98 4.21,-1.19 z" id="ytp-id-32"></path>
																		</svg>
																	</div>
																	<div class="ytp-share-title">Share</div>
																</button><button class="ytp-button ytp-copylink-button" data-tooltip-opaque="false" title="Copy link" aria-label="Copy link" style="display: none">
																	<div class="ytp-copylink-icon">
																		<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-33"></use>
																			<path class="ytp-svg-fill" d="M21.9,8.3H11.3c-0.9,0-1.7,.8-1.7,1.7v12.3h1.7V10h10.6V8.3z M24.6,11.8h-9.7c-1,0-1.8,.8-1.8,1.8v12.3  c0,1,.8,1.8,1.8,1.8h9.7c1,0,1.8-0.8,1.8-1.8V13.5C26.3,12.6,25.5,11.8,24.6,11.8z M24.6,25.9h-9.7V13.5h9.7V25.9z" id="ytp-id-33"></path>
																		</svg>
																	</div>
																	<div class="ytp-copylink-title" aria-hidden="true">Copy link</div>
																</button>
															</div>
														</div>
														<button class="ytp-overflow-panel-close ytp-button" title="Close" aria-label="Close">
															<svg height="100%" viewBox="0 0 24 24" width="100%">
																<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path>
															</svg>
														</button>
													</div>
													<div class="ytp-popup ytp-settings-menu" data-layer="6" id="ytp-id-18" style="display: none">
														<div class="ytp-panel">
															<div class="ytp-panel-menu" role="menu"></div>
														</div>
													</div>
													<div class="ytp-gradient-bottom" data-layer="9" style="
                              height: 49px;
                              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAxCAYAAAAbb8MkAAAAAXNSR0IArs4c6QAAAG9JREFUGFdNx1EGwgAAgOE9doNusCN0g14zZiKTmIkkIxlJIhmTRDKSjCTSIfO99T98/EHwX8d0EaKHPgaIECPBECOkGGOCDDmmmGGOBQossUKJNTbYYoc9DqhQ44gTzrjgigY33PFAiydeeOOD7w/a/BVDZcQykwAAAABJRU5ErkJggg==');
                              display: none;
                            "></div>
													<div class="ytp-chrome-bottom" data-layer="9" style="display: none; width: 100px; left: 12px">
														<div class="ytp-progress-bar-container" aria-disabled="true">
															<div class="ytp-heat-map-container">
																<div class="ytp-heat-map-edu"></div>
															</div>
															<div class="ytp-progress-bar" tabindex="0" role="slider" aria-label="Seek slider" aria-valuemin="0" aria-valuemax="0" aria-valuenow="0" aria-valuetext="0 Minutes 0 Seconds of 0 Minutes 0 Seconds">
																<div class="ytp-chapters-container">
																	<div class="ytp-chapter-hover-container" style="width: 100%">
																		<div class="ytp-progress-bar-padding"></div>
																		<div class="ytp-progress-list">
																			<div class="ytp-play-progress ytp-swatch-background-color" style="left: 0px; transform: scaleX(0)"></div>
																			<div class="ytp-progress-linear-live-buffer"></div>
																			<div class="ytp-load-progress" style="left: 0px; transform: scaleX(0)"></div>
																			<div class="ytp-hover-progress" style="left: 0px; transform: scaleX(0)"></div>
																			<div class="ytp-ad-progress-list"></div>
																		</div>
																	</div>
																</div>
																<div class="ytp-timed-markers-container"></div>
																<div class="ytp-clip-start-exclude" style="width: 0%"></div>
																<div class="ytp-clip-end-exclude" style="left: 100%; width: 0%"></div>
																<div class="ytp-scrubber-container" style="transform: translateX(0px)">
																	<div class="ytp-scrubber-button ytp-swatch-background-color">
																		<div class="ytp-scrubber-pull-indicator"></div>
																	</div>
																</div>
															</div>
															<div class="ytp-fine-scrubbing-container">
																<div class="ytp-fine-scrubbing-edu"></div>
																<div class="ytp-fine-scrubbing">
																	<div class="ytp-fine-scrubbing-draggable" draggable="true" style="touch-action: none; padding: 0px">
																		<div class="ytp-fine-scrubbing-thumbnails" tabindex="0" role="slider" type="range" aria-label="Click or scroll the panel for the precise seeking." aria-valuemin="0" aria-valuemax="0" aria-valuenow="0" aria-valuetext="Seek to 0 Minutes 0 Seconds" style="position: relative"></div>
																	</div>
																	<div class="ytp-fine-scrubbing-cursor" aria-hidden="true"></div>
																	<div class="ytp-fine-scrubbing-seek-time" aria-hidden="true">
																		0:00
																	</div>
																	<div class="ytp-fine-scrubbing-play" title="Play from this position" role="button" aria-label="Play from this position">
																		<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-5"></use>
																			<path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-5"></path>
																		</svg>
																	</div>
																	<div class="ytp-fine-scrubbing-dismiss" title="Exit precise seeking" role="button" aria-label="Exit precise seeking">
																		<svg height="100%" viewBox="0 0 24 24" width="100%">
																			<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path>
																		</svg>
																	</div>
																</div>
															</div>
															<div class="ytp-bound-time-left"></div>
															<div class="ytp-bound-time-right"></div>
															<div class="ytp-clip-start" draggable="true" title="Watch full video" style="touch-action: none; left: 0%">
																<svg height="100%" version="1.1" viewBox="0 0 14 14" width="100%">
																	<use class="ytp-svg-shadow" xlink:href="#ytp-id-3"></use>
																	<path d="M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z" fill="#eaeaea" id="ytp-id-3"></path>
																</svg>
															</div>
															<div class="ytp-clip-end" draggable="true" title="Watch full video" style="touch-action: none; left: 100%">
																<svg height="100%" version="1.1" viewBox="0 0 14 14" width="100%">
																	<use class="ytp-svg-shadow" xlink:href="#ytp-id-4"></use>
																	<path d="M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z" fill="#eaeaea" id="ytp-id-4"></path>
																</svg>
															</div>
														</div>
														<div class="ytp-chrome-controls">
															<div class="ytp-left-controls">
																<a class="ytp-prev-button ytp-button" role="button" aria-disabled="true" style="display: none"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-11"></use>
																		<path class="ytp-svg-fill" d="m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z" id="ytp-id-11"></path>
																	</svg></a><button class="ytp-play-button ytp-button" aria-keyshortcuts="k" data-title-no-tooltip="Play" title="Play (k)" aria-label="Play (k)">
																	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-12"></use>
																		<path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-12"></path>
																	</svg></button><a class="ytp-next-button ytp-button" role="button" title="Next (SHIFT+n)" data-title-no-tooltip="Next" aria-keyshortcuts="SHIFT+n" aria-disabled="false" aria-label="Next (SHIFT+n)"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-13"></use>
																		<path class="ytp-svg-fill" d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z" id="ytp-id-13"></path>
																	</svg></a><span class="ytp-volume-area"><button class="ytp-mute-button ytp-button" aria-keyshortcuts="m" title="Mute (m)" data-title-no-tooltip="Mute" style="display: none">
																		<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-15"></use>
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-16"></use>
																			<defs>
																				<clipPath id="ytp-svg-volume-animation-mask">
																					<path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
																					<path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
																					<path class="ytp-svg-volume-animation-mover" d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)"></path>
																				</clipPath>
																				<clipPath id="ytp-svg-volume-animation-slash-mask">
																					<path class="ytp-svg-volume-animation-mover" d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path>
																				</clipPath>
																			</defs>
																			<path class="ytp-svg-fill ytp-svg-volume-animation-speaker" clip-path="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="ytp-id-15"></path>
																			<path class="ytp-svg-fill ytp-svg-volume-animation-hider" clip-path="url(#ytp-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="ytp-id-16" style="display: none"></path>
																		</svg>
																	</button>
																	<div class="ytp-volume-panel" title="Volume" role="slider" aria-valuemin="0" aria-valuemax="100" tabindex="0" aria-valuenow="100" aria-valuetext="100% volume" aria-label="Volume" style="display: none">
																		<div class="ytp-volume-slider" draggable="true" style="touch-action: none">
																			<div class="ytp-volume-slider-handle" style="left: 40px"></div>
																		</div>
																	</div>
																</span>
																<div class="ytp-time-display notranslate" style="display: none">
																	<span class="ytp-time-clip-icon"><svg height="100%" version="1.1" viewBox="0 0 24 24" width="100%">
																			<path d="M22,3h-4l-5,5l3,3l6-6V3L22,3z M10.79,7.79C10.91,7.38,11,6.95,11,6.5C11,4.01,8.99,2,6.5,2S2,4.01,2,6.5S4.01,11,6.5,11 c0.45,0,.88-0.09,1.29-0.21L9,12l-1.21,1.21C7.38,13.09,6.95,13,6.5,13C4.01,13,2,15.01,2,17.5S4.01,22,6.5,22s4.5-2.01,4.5-4.5 c0-0.45-0.09-0.88-0.21-1.29L12,15l6,6h4v-2L10.79,7.79z M6.5,8C5.67,8,5,7.33,5,6.5S5.67,5,6.5,5S8,5.67,8,6.5S7.33,8,6.5,8z M6.5,19C5.67,19,5,18.33,5,17.5S5.67,16,6.5,16S8,16.67,8,17.5S7.33,19,6.5,19z"></path>
																		</svg></span><span><span class="ytp-time-current"></span><span class="ytp-time-separator"> / </span><span class="ytp-time-duration"></span></span><span class="ytp-clip-watch-full-video-button-separator">•</span><span class="ytp-clip-watch-full-video-button">Watch full video</span><button class="ytp-live-badge ytp-button" disabled="true">
																		Live
																	</button>
																</div>
																<div class="ytp-chapter-container" style="display: none">
																	<button class="ytp-chapter-title ytp-button ytp-chapter-container-disabled" disabled="">
																		<span class="ytp-chapter-title-prefix" aria-hidden="true">•</span>
																		<div class="ytp-chapter-title-content" title="View chapter" aria-label="View chapter"></div>
																		<div class="ytp-chapter-title-chevron">
																			<svg height="100%" viewBox="0 0 24 24" width="100%">
																				<path d="M9.71 18.71l-1.42-1.42 5.3-5.29-5.3-5.29 1.42-1.42 6.7 6.71z" fill="#fff"></path>
																			</svg>
																		</div>
																	</button>
																</div>
																<div class="ytp-chapter-container" style="display: none">
																	<button class="ytp-chapter-title ytp-button ytp-chapter-container-disabled" disabled="">
																		<span class="ytp-chapter-title-prefix" aria-hidden="true">•</span>
																		<div class="ytp-chapter-title-content" title="View key moments" aria-label="View key moments"></div>
																		<div class="ytp-chapter-title-chevron">
																			<svg height="100%" viewBox="0 0 24 24" width="100%">
																				<path d="M9.71 18.71l-1.42-1.42 5.3-5.29-5.3-5.29 1.42-1.42 6.7 6.71z" fill="#fff"></path>
																			</svg>
																		</div>
																	</button>
																</div>
															</div>
															<div class="ytp-right-controls">
																<button class="ytp-fullerscreen-edu-button ytp-button" data-priority="1" style="display: none">
																	<div class="ytp-fullerscreen-edu-text">Scroll for details</div>
																	<div class="ytp-fullerscreen-edu-chevron">
																		<svg height="100%" viewBox="0 0 24 24" width="100%">
																			<path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" fill="#fff"></path>
																		</svg>
																	</div>
																</button><button class="ytp-button" data-priority="2" data-tooltip-target-id="ytp-autonav-toggle-button" style="display: none">
																	<div class="ytp-autonav-toggle-button-container">
																		<div class="ytp-autonav-toggle-button" aria-checked="true"></div>
																	</div>
																</button><button class="ytp-subtitles-button ytp-button" aria-keyshortcuts="c" data-priority="3" title="Subtitles/closed captions unavailable" data-title-no-tooltip="Subtitles/closed captions unavailable" aria-pressed="false" aria-label="Subtitles/closed captions unavailable" style="display: none">
																	<svg class="ytp-subtitles-button-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%" fill-opacity="0.3">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-17"></use>
																		<path d="M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z" fill="#fff" id="ytp-id-17"></path>
																	</svg></button><button class="ytp-button ytp-settings-button" aria-expanded="false" aria-haspopup="true" aria-controls="ytp-id-18" title="Settings" data-tooltip-target-id="ytp-settings-button" aria-label="Settings" style="display: none">
																	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-19"></use>
																		<path d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z" fill="#fff" id="ytp-id-19"></path>
																	</svg></button><button class="ytp-multicam-button ytp-button" title="Switch camera" aria-haspopup="true" data-priority="4" aria-label="Switch camera" style="display: none">
																	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-20"></use>
																		<path d="M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z" fill="#fff" id="ytp-id-20"></path>
																	</svg></button><button class="ytp-miniplayer-button ytp-button" aria-keyshortcuts="i" data-priority="6" data-tooltip-target-id="ytp-miniplayer-button" title="Miniplayer (i)" data-title-no-tooltip="Miniplayer" aria-label="Miniplayer (i)">
																	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-21"></use>
																		<path d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z" fill="#fff" id="ytp-id-21"></path>
																	</svg></button><button class="ytp-pip-button ytp-button" data-priority="7" data-tooltip-target-id="ytp-pip-button" title="Picture in Picture" aria-label="Picture in Picture" style="display: none">
																	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-6"></use>
																		<path d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z" fill="#fff" id="ytp-id-6"></path>
																	</svg></button><button class="ytp-size-button ytp-button" aria-keyshortcuts="t" data-priority="8" title="Theater mode (t)" data-title-no-tooltip="Theater mode" aria-label="Theater mode (t)">
																	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-31"></use>
																		<path d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill="#fff" fill-rule="evenodd" id="ytp-id-31"></path>
																	</svg></button><button class="ytp-remote-button ytp-button" title="Play on TV" aria-haspopup="true" data-priority="9" aria-label="Play on TV" style="display: none">
																	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<use class="ytp-svg-shadow" xlink:href="#ytp-id-22"></use>
																		<path d="M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z" fill="#fff" id="ytp-id-22"></path>
																	</svg></button><button class="ytp-fullscreen-button ytp-button" aria-keyshortcuts="f" data-priority="11" data-title-no-tooltip="Full screen" title="Full screen (f)">
																	<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
																		<g class="ytp-fullscreen-button-corner-0">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-7"></use>
																			<path class="ytp-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="ytp-id-7"></path>
																		</g>
																		<g class="ytp-fullscreen-button-corner-1">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-8"></use>
																			<path class="ytp-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="ytp-id-8"></path>
																		</g>
																		<g class="ytp-fullscreen-button-corner-2">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-9"></use>
																			<path class="ytp-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="ytp-id-9"></path>
																		</g>
																		<g class="ytp-fullscreen-button-corner-3">
																			<use class="ytp-svg-shadow" xlink:href="#ytp-id-10"></use>
																			<path class="ytp-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="ytp-id-10"></path>
																		</g>
																	</svg>
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</ytd-player>
									</div>
								</div>
							</div>
							<yt-playability-error-supported-renderers id="error-screen" class="style-scope ytd-watch-flexy" disable-upgrade="" hidden="">
							</yt-playability-error-supported-renderers>
						</div>
						<div id="below" class="style-scope ytd-watch-flexy">
							<div id="alerts" class="style-scope ytd-watch-flexy"></div>
							<div id="messages" class="style-scope ytd-watch-flexy"></div>
							<div id="clarify-box" class="attached-message style-scope ytd-watch-flexy"></div>
							<div id="limited-state" class="attached-message style-scope ytd-watch-flexy"></div>
							<ytd-watch-metadata is-watch-flexy="" class="watch-active-metadata style-scope ytd-watch-flexy style-scope ytd-watch-flexy" description-collapsed="" video-id="">
								<div id="above-the-fold" class="style-scope ytd-watch-metadata">
									<div id="title" class="style-scope ytd-watch-metadata">
										<ytd-badge-supported-renderer class="style-scope ytd-watch-metadata" disable-upgrade="" hidden="">
										</ytd-badge-supported-renderer>
										<h1 class="style-scope ytd-watch-metadata">
											<yt-formatted-string force-default-style="" class="style-scope ytd-watch-metadata" is-empty=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
										</h1>
										<ytd-badge-supported-renderer class="style-scope ytd-watch-metadata" disable-upgrade="" hidden="">
										</ytd-badge-supported-renderer>
									</div>
									<div id="top-row" class="style-scope ytd-watch-metadata">
										<div id="owner" class="item style-scope ytd-watch-metadata">
											<ytd-video-owner-renderer watch-metadata-refresh="" class="style-scope ytd-watch-metadata"><a class="yt-simple-endpoint style-scope ytd-video-owner-renderer" tabindex="-1"><yt-img-shadow id="avatar" width="40" class="style-scope ytd-video-owner-renderer no-transition"><img id="img" draggable="false" class="style-scope yt-img-shadow" alt="" width="40" /></yt-img-shadow></a>
												<div id="upload-info" class="style-scope ytd-video-owner-renderer">
													<ytd-channel-name id="channel-name" class="style-scope ytd-video-owner-renderer">
														<div id="container" class="style-scope ytd-channel-name">
															<div id="text-container" class="style-scope ytd-channel-name">
																<yt-formatted-string id="text" link-inherit-color="" title="" class="style-scope ytd-channel-name" is-empty="" ellipsis-truncate="" ellipsis-truncate-styling=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
															</div>
															<tp-yt-paper-tooltip fit-to-visible-bounds="" class="style-scope ytd-channel-name" role="tooltip" tabindex="-1">
																<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip"></div>
															</tp-yt-paper-tooltip>
														</div>
														<ytd-badge-supported-renderer class="style-scope ytd-channel-name" disable-upgrade="" hidden="">
														</ytd-badge-supported-renderer>
													</ytd-channel-name><yt-formatted-string id="owner-sub-count" class="style-scope ytd-video-owner-renderer" is-empty=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
												</div>
												<div id="purchase-button" class="style-scope ytd-video-owner-renderer"></div>
												<div id="sponsor-button" class="style-scope ytd-video-owner-renderer"></div>
												<div id="analytics-button" class="style-scope ytd-video-owner-renderer"></div>
											</ytd-video-owner-renderer>
											<div id="subscribe-button" class="style-scope ytd-watch-metadata"></div>
										</div>
										<div id="actions" class="item style-scope ytd-watch-metadata">
											<div id="actions-inner" class="style-scope ytd-watch-metadata">
												<div id="menu" class="style-scope ytd-watch-metadata"></div>
											</div>
										</div>
									</div>
									<div id="middle-row" class="style-scope ytd-watch-metadata"></div>
									<div id="bottom-row" class="style-scope ytd-watch-metadata">
										<div id="description" class="item style-scope ytd-watch-metadata">
											<div id="description-inner" class="style-scope ytd-watch-metadata">
												<ytd-watch-info-text id="ytd-watch-info-text" class="style-scope ytd-watch-metadata" disable-upgrade="" hidden=""></ytd-watch-info-text>
												<div id="info-container" class="style-scope ytd-watch-metadata">
													<yt-formatted-string id="info" class="style-scope ytd-watch-metadata" is-empty=""></yt-formatted-string>
													<dom-if class="style-scope ytd-watch-metadata"><template is="dom-if"></template></dom-if>
												</div>
												<dom-if restamp="" id="product-shelf" class="style-scope ytd-watch-metadata"><template is="dom-if"></template></dom-if>
												<yt-formatted-string id="description-placeholder" class="style-scope ytd-watch-metadata" disable-upgrade="">
												</yt-formatted-string>
												<div id="description-text-container" class="style-scope ytd-watch-metadata" hidden="">
													<yt-attributed-string id="attributed-description-text" class="style-scope ytd-watch-metadata" disable-upgrade="">
													</yt-attributed-string>
													<yt-formatted-string id="formatted-description-text" class="style-scope ytd-watch-metadata" disable-upgrade="">
													</yt-formatted-string>
													<ytd-structured-description-content-renderer id="faded-structured-description" inline-structured-description="" class="style-scope ytd-watch-metadata" disable-upgrade="" hidden="">
													</ytd-structured-description-content-renderer>
													<ytd-metadata-row-container-renderer class="style-scope ytd-watch-metadata" disable-upgrade="">
													</ytd-metadata-row-container-renderer>
													<tp-yt-paper-button id="collapse-button" class="button style-scope ytd-watch-metadata" hidden="" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">
													</tp-yt-paper-button>
												</div>
												<ytd-text-inline-expander id="description-inline-expander" always-show-expand-button="" class="style-scope ytd-watch-metadata"><yt-attributed-string class="style-scope ytd-text-inline-expander" disable-upgrade="" hidden=""></yt-attributed-string><yt-formatted-string disable-attributed-string="" class="style-scope ytd-text-inline-expander" disable-upgrade="" hidden=""></yt-formatted-string>
													<div id="snippet" class="style-scope ytd-text-inline-expander" style="overflow: hidden; max-height: 6rem">
														<span id="snippet-text" class="style-scope ytd-text-inline-expander"><span id="plain-snippet-text" class="style-scope ytd-text-inline-expander"></span><yt-attributed-string id="attributed-snippet-text" class="style-scope ytd-text-inline-expander" disable-upgrade="" hidden=""></yt-attributed-string><yt-formatted-string id="formatted-snippet-text" disable-attributed-string="" class="style-scope ytd-text-inline-expander" disable-upgrade="" hidden=""></yt-formatted-string></span><span class="style-scope ytd-text-inline-expander">&nbsp;</span><span id="ellipsis" class="style-scope ytd-text-inline-expander" hidden="">…</span><tp-yt-paper-button id="expand-sizer" class="button style-scope ytd-text-inline-expander" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">
														</tp-yt-paper-button>
													</div>
													<tp-yt-paper-button id="expand" class="button style-scope ytd-text-inline-expander" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" style="left: 0px">
													</tp-yt-paper-button>
													<div slot="extra-content" class="style-scope ytd-watch-metadata">
														<ytd-structured-description-content-renderer id="structured-description" inline-structured-description="" class="style-scope ytd-watch-metadata" disable-upgrade="">
														</ytd-structured-description-content-renderer>
														<ytd-metadata-row-container-renderer class="style-scope ytd-watch-metadata" disable-upgrade="">
														</ytd-metadata-row-container-renderer>
													</div>
													<tp-yt-paper-button id="collapse" class="button style-scope ytd-text-inline-expander" hidden="" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">
													</tp-yt-paper-button>
												</ytd-text-inline-expander>
											</div>
											<tp-yt-paper-tooltip for="info" class="style-scope ytd-watch-metadata" role="tooltip" tabindex="-1">
												<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip"></div>
											</tp-yt-paper-tooltip>
											<yt-interaction id="description-interaction" class="rounded-large style-scope ytd-watch-metadata">
												<div class="stroke style-scope yt-interaction"></div>
												<div class="fill style-scope yt-interaction"></div>
											</yt-interaction>
										</div>
										<div id="bottom-actions" class="style-scope ytd-watch-metadata"></div>
										<div id="comment-teaser" class="item style-scope ytd-watch-metadata" hidden=""></div>
									</div>
								</div>
								<ytd-metadata-row-container-renderer class="style-scope ytd-watch-metadata">
									<div id="always-shown" class="style-scope ytd-metadata-row-container-renderer"></div>
									<div id="collapsible" class="style-scope ytd-metadata-row-container-renderer"></div>
								</ytd-metadata-row-container-renderer>
							</ytd-watch-metadata>
							<div class="style-scope ytd-watch-flexy style-scope ytd-watch-flexy">
								<div id="info" class="style-scope ytd-watch-flexy">
									<div id="info-skeleton" class="watch-skeleton style-scope ytd-watch-flexy">
										<div id="primary-info" class="skeleton-light-border-bottom">
											<div id="title" class="text-shell skeleton-bg-color"></div>
											<div id="info">
												<div id="count" class="text-shell skeleton-bg-color"></div>
												<div class="flex-1"></div>
												<div id="menu">
													<div class="menu-button skeleton-bg-color"></div>
													<div class="menu-button skeleton-bg-color"></div>
													<div class="menu-button skeleton-bg-color"></div>
													<div class="menu-button skeleton-bg-color"></div>
													<div class="menu-button skeleton-bg-color"></div>
												</div>
											</div>
										</div>
									</div>
									<div id="info-contents" class="style-scope ytd-watch-flexy" hidden="">
										<ytd-video-primary-info-renderer class="style-scope ytd-watch-flexy">
											<div id="container" class="style-scope ytd-video-primary-info-renderer">
												<ytd-badge-supported-renderer class="style-scope ytd-video-primary-info-renderer" disable-upgrade="" hidden=""></ytd-badge-supported-renderer><a class="yt-simple-endpoint style-scope ytd-video-primary-info-renderer" hidden=""><yt-icon class="super-title-icon style-scope ytd-video-primary-info-renderer" icon="yt-icons:location_pin"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="M12 3c3.31 0 6 2.69 6 6 0 3.83-4.25 9.36-6 11.47C9.82 17.86 6 12.54 6 9c0-3.31 2.69-6 6-6m0-1C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon></a><yt-formatted-string class="super-title style-scope ytd-video-primary-info-renderer" force-default-style="" is-empty=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
												<h1 class="title style-scope ytd-video-primary-info-renderer">
													<yt-formatted-string force-default-style="" class="style-scope ytd-video-primary-info-renderer" is-empty=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
												</h1>
												<ytd-badge-supported-renderer class="style-scope ytd-video-primary-info-renderer" disable-upgrade="" hidden=""></ytd-badge-supported-renderer>
												<div id="info" class="style-scope ytd-video-primary-info-renderer">
													<div id="info-text" class="style-scope ytd-video-primary-info-renderer">
														<div id="count" class="style-scope ytd-video-primary-info-renderer" hidden=""></div>
														<div id="info-strings" class="style-scope ytd-video-primary-info-renderer" hidden="">
															<span id="dot" class="style-scope ytd-video-primary-info-renderer" hidden=""></span><dom-repeat class="style-scope ytd-video-primary-info-renderer"><template is="dom-repeat"></template></dom-repeat>
														</div>
													</div>
													<div id="flex" class="style-scope ytd-video-primary-info-renderer"></div>
													<div id="menu-container" class="style-scope ytd-video-primary-info-renderer">
														<div id="menu" class="style-scope ytd-video-primary-info-renderer"></div>
														<ytd-sentiment-bar-renderer id="sentiment" class="style-scope ytd-video-primary-info-renderer" system-icons="" hidden="">
															<div id="container" class="style-scope ytd-sentiment-bar-renderer">
																<div id="like-bar" class="style-scope ytd-sentiment-bar-renderer"></div>
															</div>
															<tp-yt-paper-tooltip position="top" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1">
																<div id="tooltip" class="hidden style-scope tp-yt-paper-tooltip" style-target="tooltip"></div>
															</tp-yt-paper-tooltip>
														</ytd-sentiment-bar-renderer>
													</div>
												</div>
											</div>
										</ytd-video-primary-info-renderer>
									</div>
								</div>
								<div id="meta" class="style-scope ytd-watch-flexy">
									<div id="meta-skeleton" class="watch-skeleton style-scope ytd-watch-flexy">
										<div id="secondary-info" class="skeleton-light-border-bottom">
											<div id="top-row">
												<div id="video-owner" class="flex-1">
													<div id="channel-icon" class="skeleton-bg-color"></div>
													<div id="upload-info" class="flex-1">
														<div id="owner-name" class="text-shell skeleton-bg-color"></div>
														<div id="published-date" class="text-shell skeleton-bg-color"></div>
													</div>
												</div>
												<div id="subscribe-button" class="skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div id="meta-contents" class="style-scope ytd-watch-flexy" hidden=""></div>
								</div>
							</div>
							<div id="expandable-metadata" class="style-scope ytd-watch-flexy"></div>
							<div id="ticket-shelf" class="style-scope ytd-watch-flexy"></div>
							<dom-if restamp="" id="merch-shelf" class="style-scope ytd-watch-flexy"><template is="dom-if"></template></dom-if>
							<ytd-comments id="comments" class="style-scope ytd-watch-flexy" disable-upgrade="" hidden="">
							</ytd-comments>
						</div>
					</div>
				</div>
				<div id="secondary" class="style-scope ytd-watch-flexy">
					<div id="secondary-inner" class="style-scope ytd-watch-flexy">
						<div id="panels" class="style-scope ytd-watch-flexy">
							<ytd-watch-engagement-panels class="style-scope ytd-watch-flexy" disable-upgrade="" hidden="">
							</ytd-watch-engagement-panels>
						</div>
						<ytd-playlist-panel-renderer id="playlist" class="style-scope ytd-watch-flexy" js-panel-height="" modern-panels="" hidden="" collapsible="">
							<div id="container" class="style-scope ytd-playlist-panel-renderer">
								<div class="header style-scope ytd-playlist-panel-renderer">
									<div id="header-contents" class="style-scope ytd-playlist-panel-renderer">
										<div id="header-top-row" class="style-scope ytd-playlist-panel-renderer">
											<div id="header-description" class="style-scope ytd-playlist-panel-renderer">
												<h3 class="style-scope ytd-playlist-panel-renderer">
													<yt-formatted-string class="title style-scope ytd-playlist-panel-renderer" ellipsis-truncate="" link-inherit-color="" is-empty="" ellipsis-truncate-styling="" title=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
												</h3>
												<h3 id="next-video-title" class="style-scope ytd-playlist-panel-renderer" hidden="">
													<span id="next-label" class="style-scope ytd-playlist-panel-renderer"></span><yt-formatted-string ellipsis-truncate="" class="style-scope ytd-playlist-panel-renderer" is-empty="" ellipsis-truncate-styling="" title=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
												</h3>
												<div id="publisher-container" class="style-scope ytd-playlist-panel-renderer">
													<yt-formatted-string class="byline-title style-scope ytd-playlist-panel-renderer" ellipsis-truncate="" hidden="" is-empty="" ellipsis-truncate-styling="" title=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string><ytd-badge-supported-renderer class="style-scope ytd-playlist-panel-renderer" disable-upgrade="" hidden=""></ytd-badge-supported-renderer><yt-formatted-string class="publisher style-scope ytd-playlist-panel-renderer" ellipsis-truncate="" link-inherit-color="" is-empty="" ellipsis-truncate-styling="" title=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
													<div class="index-message-wrapper style-scope ytd-playlist-panel-renderer">
														<span class="index-message style-scope ytd-playlist-panel-renderer">NaN / NaN</span><yt-formatted-string class="index-message style-scope ytd-playlist-panel-renderer" respecthtmldir="" hidden="" is-empty=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
													</div>
												</div>
											</div>
											<div id="top-row-buttons" class="style-scope ytd-playlist-panel-renderer"></div>
											<yt-icon-button id="expand-button" toggleable="" class="style-scope ytd-playlist-panel-renderer"><button id="button" class="style-scope yt-icon-button" aria-label="Expand">
													<yt-icon id="expand-icon" class="style-scope ytd-playlist-panel-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
																<div style="width: 100%; height: 100%; fill: currentcolor">
																	<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="
                                      pointer-events: none;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                    ">
																		<path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path>
																	</svg>
																</div>
															</icon-shape></yt-icon-shape></yt-icon></button><yt-interaction id="interaction" class="circular style-scope yt-icon-button">
													<div class="stroke style-scope yt-interaction"></div>
													<div class="fill style-scope yt-interaction"></div>
												</yt-interaction></yt-icon-button>
										</div>
										<div id="playlist-actions" class="style-scope ytd-playlist-panel-renderer">
											<div id="start-actions" class="style-scope ytd-playlist-panel-renderer">
												<div id="playlist-action-menu" class="style-scope ytd-playlist-panel-renderer"></div>
												<div id="save-button" class="style-scope ytd-playlist-panel-renderer"></div>
											</div>
											<div id="end-actions" class="style-scope ytd-playlist-panel-renderer">
												<div id="overflow-menu" class="style-scope ytd-playlist-panel-renderer"></div>
											</div>
										</div>
									</div>
								</div>
								<div id="content-header" class="style-scope ytd-playlist-panel-renderer" hidden=""></div>
								<div id="items" class="playlist-items style-scope ytd-playlist-panel-renderer"></div>
							</div>
						</ytd-playlist-panel-renderer>
						<div id="chat-container" class="style-scope ytd-watch-flexy">
							<dom-if restamp="" id="chat-template" class="style-scope ytd-watch-flexy"><template is="dom-if"></template></dom-if>
						</div>
						<div id="donation-shelf" class="style-scope ytd-watch-flexy"></div>
						<div id="related" class="style-scope ytd-watch-flexy">
							<div id="player-ads" class="style-scope ytd-watch-flexy"></div>
							<ytd-watch-next-secondary-results-renderer class="style-scope ytd-watch-flexy" is-two-columns="" style="
                  --yt-img-shadow-placeholder-color: var(--yt-spec-10-percent-layer);
                  --yt-img-shadow-min-height: 100%;
                  --yt-img-shadow-min-width: 100%;
                ">
								<div id="offer-module" class="style-scope ytd-watch-next-secondary-results-renderer"></div>
								<div id="items" class="style-scope ytd-watch-next-secondary-results-renderer"></div>
								<div id="continuations" class="style-scope ytd-watch-next-secondary-results-renderer"></div>
							</ytd-watch-next-secondary-results-renderer>
							<div id="related-skeleton" class="watch-skeleton style-scope ytd-watch-flexy">
								<div id="related">
									<div class="autoplay skeleton-light-border-bottom">
										<div id="upnext" class="skeleton-bg-color"></div>
										<div class="video-skeleton">
											<div class="video-details">
												<div class="thumbnail skeleton-bg-color"></div>
												<div class="details flex-1">
													<div class="video-title text-shell skeleton-bg-color"></div>
													<div class="video-meta text-shell skeleton-bg-color"></div>
												</div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
									<div class="video-skeleton">
										<div class="video-details">
											<div class="thumbnail skeleton-bg-color"></div>
											<div class="details flex-1">
												<div class="video-title text-shell skeleton-bg-color"></div>
												<div class="video-meta text-shell skeleton-bg-color"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ytd-video-quality-promo-renderer id="speedyg" class="style-scope ytd-watch-flexy" disable-upgrade="" hidden="">
			</ytd-video-quality-promo-renderer>
			<div id="survey" class="style-scope ytd-watch-flexy"></div>
			<div id="engagement-panel-scrim" class="style-scope ytd-watch-flexy" hidden=""></div>
		</ytd-watch-flexy></ytd-page-manager>
</template>
