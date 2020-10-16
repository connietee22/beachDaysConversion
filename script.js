const app = {};
$aside = $('aside');
// to shrink
app.addWrapper = () => {
	$(window)
		.bind('resize', function () {
			if ($(this).width() < 1024) {
				$aside.addClass('article-text-wrapper');
			} else {
				$aside.removeClass('article-text-wrapper');
			}
		})
		.trigger('resize');
};

app.init = () => {
	app.addWrapper();
};

$(function () {
	app.init();
});
