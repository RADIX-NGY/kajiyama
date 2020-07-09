$(function () {
	if (!isPhone()) {
		return;
	}
	$('span[data-action=call]').each(function () {
		var $ele = $(this);
		$ele.wrap('<a href="tel:' + $ele.data('tel') + '"></a>');
	});
});
function isPhone() {
	// Edgeを弾く
	if (navigator.userAgent.indexOf('Edge') >= 0) {
		return false;
	}
	// Android且つMobileだった場合、電話機とみなす
	if (navigator.userAgent.indexOf('Android') >= 0 && navigator.userAgent.indexOf('Mobile') >= 0) {
		return true;
	}
	// 最後はiPhoneかどうかを判定し、結果を返す
	return (navigator.userAgent.indexOf('iPhone') >= 0);
}