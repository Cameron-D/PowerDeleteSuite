javascript:(function () {$.ajax({url: 'https://raw.githubusercontent.com/j0be/PowerDeleteSuite/master/powerdeletesuite.js' }).then(function(data) {var str = '<script id="pd-script">'+data+'</script>'; if ($('#pd-script').length === 0) {$('head').append(str); } else {$('#pd-script').replaceWith(str); } }, function() {alert('Error retreiving PowerDeleteSuite from github'); }); })();
