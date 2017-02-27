$(document).ready(function() {

    var player = 1;



    $('.box').on('click', function(event) {


        alert('add symbol here');
        var boxSelected = $(this);


        $("#goAgain").click(function(event) {
            location.reload();
        });



        if (boxSelected.hasClass('exes') || boxSelected.hasClass('ohs')) {
            alert('Sorry, that has already been taken!');
        } else {
            if (player === 1) {
                boxSelected.addClass('exes');
                if (checkIfPlayerWon('exes')) {
                    alert('Congrats! Player ' + player + 'wins the game!'); {
                    }
                } else {
                    player = 2;

                }
            } else {
                boxSelected.addClass('ohs');
                if (checkIfPlayerWon('ohs')) {
                    alert('Congrats! Player ' + player + 'wins the game!'); {
                    }
                } else {
                    player = 1;

                }

            }

        }
    });











    function checkIfPlayerWon(symbol) {
        if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
            return true;

        } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
            return true;

        } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;

        } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
            return true;

        } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
            return true;

        } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;

        } else {
            return false;




        }
    }
});
