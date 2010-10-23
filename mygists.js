/*
  mygists.js — Handles Github API request to populate extension
*/

$(document).ready(function() {
    
    if(localStorage.prefs) {
        var prefs = JSON.parse(localStorage.prefs);
        var github_username = prefs.github_username;
    }
    else {
        var github_username = "";
    }
    
    
    $.getJSON('http://gist.github.com/api/v1/json/gists/' + github_username, {}, function(data) {
        
        $.each(data.gists, function(i, v) {
            
            
            $("#content").append('<a href="http://gist.github.com/' + v.repo + '" title="'+ v.description + '">' + v.description + '</a><br />');
        });
    });
    
    $("a").live('click', function() {
        console.log("here");
        chrome.tabs.create({url: $(this).attr("href"), selected: true});
    });
});
