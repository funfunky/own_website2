$(document).ready(function(){
    // bind all docHits as bookbag item
	// on click switch from add to remove or from remove to add
	$('i[id*="addto_"]').click(function(e){
		e.preventDefault();
		if ($(this).hasClass('fa-square-o')) {
	    	var url= "search?smode=addToBag;identifier="+$(this).data('identifier');
			var self = $(this);
           	$.ajax({url: url, success: function(result){
				self.removeClass('fa-square-o').addClass('fa-check-square-o');
				self.attr('title', 'remove from my selection');
			}});
		}
		else {
			var url= "search?smode=removeFromBag;identifier="+$(this).data('identifier');
			var self = $(this);
           	$.ajax({url: url, success: function(result){
			self.removeClass('fa-check-square-o').addClass('fa-square-o');
			self.attr('title', 'add to my selection');
			// if smode is showBag then decrement counter on remove
			if (self.data('smode')==='showBag') {
				self.parent().parent().remove();
				var itemCount = $(".itemCount").first().text();
				itemCount--;
				$(".itemCount").text(itemCount);
			}}});
	    }
    })
});	
