$(function(){
	var userText = $('#text'), 
	submit = $('#submit'),
	$results = $('.results'),
	$msg = $('.msg');

	
	submit.on('click', getVowels);
	
	function getVowels() {
		
		var vowels = ['a', 'e', 'i', 'o', 'u'],
		 splitText = userText.val().toLowerCase().split(""),
		 matched = [];

		for (var i = 0; i < splitText.length; i++) {
			for (var j = 0; j < vowels.length; j++) {
				if (vowels[j] === splitText[i]) {
					matched.push(splitText[i]);
				}
			}
		}

		for (var v = 0; v < matched.length; v++) {
			$results.append('<p>' + 'Vowel matched ' + matched[v] + '</p>');
		}

		$msg.append('There are ' + matched.length + ' vowels in this string.');
	}
});