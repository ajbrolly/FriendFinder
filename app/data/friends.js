var friendData = [];

var waitlist = [
    {
        name: 'Loser',
        phoneNumber: '1234567890',
        email: 'hungry@waitlist.com',
        username: 'feedme101'
    },
];



// In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
// In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
// In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file
$(".submit").on("click", function (event) {
    event.preventDefault();
    // Here we grab the form elements
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        Q1: $('input[name=Q1]:checked').val(),
        Q2: $('input[name=Q2]:checked').val(),
        Q3: $('input[name=Q3]:checked').val(),
        Q4: $('input[name=Q4]:checked').val(),
        Q5: $('input[name=Q5]:checked').val(),
        Q6: $('input[name=Q6]:checked').val(),
        Q7: $('input[name=Q7]:checked').val(),
        Q8: $('input[name=Q8]:checked').val(),
        Q9: $('input[name=Q9]:checked').val(),
        Q10: $('input[name=Q10]:checked').val()
    };
    console.log(newFriend);
    friendData.push(newFriend);
    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.
    $.post("/api/friends", friendData,
        function (data) {
            // If a table is available... tell user they are booked.
            if (data) {
                console.log(friendData);
            }
            // If a table is available... tell user they on the waiting list.
            else {
                alert("Something went wrong. Please try again.");
            }
            // Clear the form when submitting
            $("#name").val("");
            $("#photo").val("");
            $('input[name=Q1]').prop('checked', false),
            $('input[name=Q2]').prop('checked', false),
            $('input[name=Q3]').prop('checked', false),
            $('input[name=Q4]').prop('checked', false),
            $('input[name=Q5]').prop('checked', false),
            $('input[name=Q6]').prop('checked', false),
            $('input[name=Q7]').prop('checked', false),
            $('input[name=Q8]').prop('checked', false),
            $('input[name=Q9]').prop('checked', false),
            $('input[name=Q10]').prop('checked', false)
        });
});



module.exports = {
    friendData: friendData,
    waitlist: waitlist
};