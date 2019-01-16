/* global $ */

$(document).ready(function() {
	if (document.location.href.includes("/payments/dd_v2/dates", true)) {
		$("input").on("change", function() {
			var dates = document.getElementById("dob-day");

			sessionStorage.dd = dates.value;
		})
	}

	if (document.location.href.includes("/payments/dd_v2/summary", true)) {
		var ddSpan = $(".capturedDd");

		$(".review-row div p")[4].innerHTML = sessionStorage.getItem("dd")

		for (a = 0; a <= ddSpan.length; a++) {
		    ddSpan[a].innerHTML = sessionStorage.getItem("dd");
		}
	}

	// if (document.location.href.includes("/payments/dd_v2/pcnPage", true)) {
	// 	sessionStorage.clear();
	// }
});
