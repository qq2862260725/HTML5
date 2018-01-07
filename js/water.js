var box = document.getElementById('box');
var items = box.children;
var gap = 10;
var max = 0;
window.onload = function() {
	waterfall();

	function waterfall() {
		var boxWidth = box.offsetWidth;
		var itemWidth = items[0].offsetWidth;
		var columns = parseInt(boxWidth / (itemWidth + gap));

		var arr = [];
		for (var i = 0; i < items.length; i++) {
			if ( i < columns ) {
				items[i].style.top = 0;
				items[i].style.left = (itemWidth + gap)*i + 'px';
				arr.push(items[i].offsetHeight);
				max = Math.max.apply(null, arr);
				box.style.height = max + 'px';
			} else {
				var minHeight = arr[0];
				var index = 0;
				for (var j = 0; j < arr.length; j++) {
					if (minHeight > arr[j]) {
						minHeight = arr[j];
						index = j;
					}
				}
				items[i].style.top = arr[index] + gap + 'px';
				items[i].style.left = items[index].offsetLeft + 'px';
				arr[index] = arr[index] + items[i].offsetHeight + gap;
				max = Math.max.apply(null, arr);
				box.style.height = max + 'px';
			}
			console.log(minHeight);
		}
	}
}