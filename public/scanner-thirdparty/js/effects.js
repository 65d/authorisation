
$(document).ready(function () {

	Webcam.attach('#example');

	// $('#button').click(function () {
	// 	take_snapshot();
	// });

	// qrcode.callback = showInfo;
		let takingSnapshots = false;
        let snapshotInterval;

		
        $('#button').click(function () {
            takingSnapshots = !takingSnapshots;  // Toggle the state

            if (takingSnapshots) {
				Webcam.attach('#example');
                snapshotInterval = setInterval(take_snapshot, 100);  // Take snapshot every second
				$("#qrContent p").text("Result will be here");

				document.getElementById("button").textContent="Stop scanning QR code";
				qrcode.callback = validateInfo;
            } else {
                clearInterval(snapshotInterval);  // Stop taking snapshots
				document.getElementById("button").textContent="Scan QR code";
				Webcam.reset();
            }
        });

});

function take_snapshot() {
	console.log("take_snapshot")
	Webcam.snap(function (dataUrl) {
		qrCodeDecoder(dataUrl);
	});
}

// decode the img
function qrCodeDecoder(dataUrl) {
	qrcode.decode(dataUrl);
}


function validateInfo(str) {
	// let str = "YourExampleString";

	// Get the first 4 characters
	let firstFour = str.slice(0, 4);

	// Get the last 5 characters
	let lastFive = str.slice(-5);

	let middlePart = str.slice(4, -5);

	if (firstFour+lastFive == 'QN341READ') {
		showInfo(middlePart)
	}

}
// show info from qr code
function showInfo(data) {
	$("#qrContent p").text(data);
	document.getElementById("button").click();
}
