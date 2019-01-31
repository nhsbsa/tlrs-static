/* global $ */

/*
$(document).ready(function() {
	if (document.location.href.includes("/payments/dd_v2/dates", true)) {
		$("input").on("change", function() {
			var dates = document.getElementById("dob-day");

			sessionStorage.dd = dates.value;
		})
	}
*/


$(document).ready(function() {
	if (document.location.href.includes("/payments/dd_v2/dates", true)) {
		$("select").on("change", function() {
			var dates = document.getElementById("dob-month");

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

	if 
	   (document.location.href.includes("/payments/dd_v2/summaryV2", true)) {
		var ddSpan = $(".capturedDd");

		$(".review-row div p")[4].innerHTML = sessionStorage.getItem("dd")

		for (a = 0; a <= ddSpan.length; a++) {
		    ddSpan[a].innerHTML = sessionStorage.getItem("dd");
		}
	}

	if 
	   (document.location.href.includes("/payments/dd_decs/summary", true)) {
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
