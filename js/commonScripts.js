function checkMobMenu() {
  var mobMenuState = document.getElementById('mobMenuOpen').checked;
  if (!mobMenuState) {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
  } else {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
  }
}
function checkMobGallery() {
  var mobPropertyGalleryState = document.getElementById('propertyGalleryMobTrig').checked;
  if (!mobPropertyGalleryState) {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    document.getElementsByClassName('spr__headerIconWrap')[0].style.display = "none";
    document.getElementById('mobGalleryBack').style.display = "block";

  } else {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    document.getElementsByClassName('spr__headerIconWrap')[0].style.display = "inline-block";
    document.getElementById('mobGalleryBack').style.display = "none";
  }
}

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

function scrollToTop() {
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
}


// $().ready(function(e) {
//   document.getElementById('mobGalleryBack').style.display = "none";
// });

var aboutEmp = [
  {
    id: 0,
    empName: "Chetan Bohra",
    empDesig: "Director",
    empAbout:
      "<p>Chetan is a Director on Board with the SPR Group and has been involved since the early stages of conceiving and conceptualizing the 15 Million Sq. Ft of Mixed-Use Project at Binny Mills Land.</p><p>He plays a key role in financial structuring, fund raising and managing day-to-day finances of the company.  Apart from managing finances, he also looks after day-to-day business operations of the company.</p><p>He is a Chartered Accountant and a CA Final rank holder. Mr. Bohra comes from a very distinguished background of Private Equity, Tax Planning, Deal Structuring and Real Estate Transaction Advisory. Earlier he was an entrepreneur running a consulting firm named RB & Partners LLP, he was also an associate with Urban Infra VC Fund. He has also been a successful angel investor with start-ups like Grabhouse.com and Wheelstreet.in from which he took a partial exit by hiving off his part of the stake to the US based VC Funds. Prior to that, Mr. Bohra was also involved in Real Estate Assurances Services at KPMG.</p>"
  },
  {
    id: 1,
    empName: "Desigan AGV",
    empDesig: "Vice President – Designs & Coordination",
    empAbout:
      "<p>Desigan is the Vice President of Designs and Coordination in SPR construction Pvt Ltd. He has done his Post graduate in Structural Engineering & Management education programme from IIM-Ahmedabad.  He has specialized experience & expertise in structural design, multi disciplinary interfacing & execution of projects including residential, commercial spaces, IT offices, institutional buildings and airports. Prior to SPR, Desigan has held a senior position at L&T’s design team and handled more than 15 million sq ft of constructed spaces.</p>"
  },
  {
    id: 2,
    empName: "Gunasekaran Kannan",
    empDesig: "Head – HR & Admin",
    empAbout:
      "<p>Gunasekaran Kannan, is a senior professional and a seasoned executive with rich experience in Banking, HR and Administration.  He is a Certified Associate of Indian Institute of Bankers.</p><p>His areas of specialisation include Mass Banking and Class Banking, Marketing, Sales and Customer Relationship Management, Administration besides Selection, Recruitment, Training and Placement of Human Resources. He has held various covetable positions in Punjab National Bank for 35 Years at various locations of the Country and was also an Advisor Faculty for Indian Overseas Bank at Chennai for 2 Years.  He is the recipient of the Silver Jubilee Award from PNB for his unblemished Banking service.</p>"
  },
  {
    id: 3,
    empName: "Hitesh P Kawad",
    empDesig: "Managing Director",
    empAbout:
      "<p>As a forward-thinking leader, Hitesh brings with him a wealth of experience and knowledge of the Real Estate industry. His valuable experience, strong convictions and thorough understanding based on the foundations of professionalism, integrity and expertise has driven SPR Group to reach greater heights.</p><p>As the real estate sector surpasses its traditional role as a builder towards offering a holistic package of end to end solutions for a home buyer, Hitesh has propelled SPR in adapting to the changing dynamics through a turn-around in corporate strategy by instilling a sense of purpose, unerring focus and conviction to strive for the best in every way.</p><p>One of his greatest strengths is his ability to understand exactly the customer’s wants, to view things from their perspective, and also anticipate their needs. This combination of intuition, insight and innovation has helped SPR deliver consistently in line with the changing needs by adopting the Customer First philosophy.</p>"
  },
  {
    id: 4,
    empName: "Karthikeyan K",
    empDesig: "Chief Design Officer",
    empAbout:
      "<p>Karthikeyan is the Chief Design Officer (CDO) of SPR construction Pvt Ltd. He has done his Post graduate in Architecture & Management education programme from IIM-Ahmedabad. Has rich experience & expertise in architectural design, multi-disciplinary interfacing & execution on projects including IT offices, Malls, commercial spaces and infrastructure . Prior to SPR, Karthikeyan has held a senior position at L&T where he has handled a cumulative built-up area of more than 20 million sq ft.</p>"
  },
  {
    id: 5,
    empName: "Manish Goenka",
    empDesig: "Vice President - Sales",
    empAbout:
      "<p>An Engineering graduate with MBA in Marketing. A seasoned and experienced professional with 14 years of enriched experience in MNC’s like Xerox, Sharp, Tata Motors & Lodha Group. His previous assignment was with Lodha Group wherein he was heading the Sales for Pune & Hyderabad.</p>"
  },
  {
    id: 6,
    empName: "Navin Ranka",
    empDesig: "Director",
    empAbout:
      "<p>Navin is a Director on Board with  the SPR Group and has been involved since the early stages of conceiving and conceptualizing the 15 Million Sq. Ft of Mixed-Use Project at Binny Mills Land.</p><p>He plays an instrumental role in business expansion, product strategy, product design and project commercials.  He has also been involved in setting up the core team at SPR Group and initiating many other strategic initiatives of the Group.  He is also in charge of SPR Group’s upcoming education initiative of setting up world class school at Binny.</p><p>A Chartered Accountant by profession,  He brings variety of experience from domain of PE, Tax Planning and Transaction Advisory.  Prior SPR, he was an entrepreneur running a consulting firm named RB & Partners LLP. He was also an Associate with Urban Infra VC Fund. He has been a successful angel investor with start-ups like Wheelstreet.in and Grabhouse.com where he hived off his stake to US based VC Funds.  Apart from above, he also had brief exposure in Corporate Law and International Taxes during his earlier stints with Ernst and Young, RSM & Co (now PWC).</p>"
  },
  {
    id: 7,
    empName: "P Sakthivel",
    empDesig: "Senior Vice President",
    empAbout:
      "<p>An enterprising Engineer with more than 27 years of rich experience on Commercial, Residential and Industrial projects. His previous assignments were with L & T Ltd (ECC Division) for more than 15 years in various capacities with expertise in construction of Greenfield Cement Plant with Residential township for MCL, ICICI Office building at Mumbai, Tidel Park, Nurses Quarters, Women's & children block for CMC hospital, VIT staff Quarters and IT Facilities for Cognizant and L&T Techno park. With the hands-on knowledge of the whole construction processes he provides strong support to the field functionaries including value-engineering, client and contract administration, pre-construction services, procurement & stores and daily supervision of project start-up and close-out.</p>"
  },
  {
    id: 8,
    empName: "Prateek K Shukla",
    empDesig: "Head - Business Strategy",
    empAbout:
      "<p>An enterprising entrepreneur from IIT-Kanpur and is the founder of Grabhouse.com. He is a talented Business Strategist and a Computer savvy who has extended his business acumen and his expertise in raising venture capital for the benefit of several organizations.</p>"
  },
  {
    id: 9,
    empName: "Praveen Darda",
    empDesig: "Head – Project Interface",
    empAbout:
      "<p>Praveen Darda, is the Head – Project Interface of the Organization.  He has been associated with SPR Group in Osian One, Osian Chlorophyll and now the Binny Project.</p><p>His multi-dimensional role brings edge to various functions like Day-to-Day Site Operations, Procurement, Industrial Relations, Investor Relations and Resource Management.</p><p>Prior joining SPR, Praveen was involved in setting up and running auto finance business since early age of 17.</p>"
  },
  {
    id: 10,
    empName: "Ramanathan B",
    empDesig: "Asst. Vice President - Projects",
    empAbout:
      "<p>Ramanathan is the Assistant Vice President of the project team of SPR construction Pvt Ltd. He has done his graduation in Civil Engineering & Post graduation in Management. He has more than 30 years of rich experience and expertise in project management for large construction projects including a significant time in the middle east.  His Core competence is in the execution of multidimensional projects including residential townships, commercial spaces etc.</p>"
  },
  {
    id: 11,
    empName: "Shantraj Kattimani",
    empDesig: "Chief Project Officer",
    empAbout:
      "<p>A seasoned professional with 28 Years of rich experience in Residential, Retail, IT Parks and Infrastructure with proficiency in Project Planning & Management, Contracts administration & Management, Site & Construction Management, Resource planning, Team Management, etc.</p><p>His previous assignments were with K Raheja Universal - Mumbai as CPO, Lodha - Hyderabad as Senior V P (CM) & Alsara trading LLC-Doha Quatar. Prestigious projects completed and handed over by him includes Raheja Vihar, Mindspace , IT Park- Mumbai, Pocharam & Hardware Park - Hyderabad, Lodha Bellezza, Casa Paradiso, Lodha Meridian, Raheja Ridgewood, Reflections, Exotica, Waterfront, Raheja District-II Mumbai.</p>"
  },
  {
    id: 12,
    empName: "Suresh Thugiti",
    empDesig: "Asst. Vice President - Projects",
    empAbout:
      "<p>Suresh is the Assistant Vice President of the project team of SPR construction Pvt Ltd . He is a B-Tech (Civil).  He carries with him 25 years of rich and diverse experience  in Project Management with exposure in various construction sectors like Hospitality ventures, Institutions, Residential, Commercial and Infrastructure.  Prior  to SPR, he has delivered large projects for Marvel Realtors, Kanakia , IHHR Hospitality, Club Mahindra, Lintas, etc. Quality Control and Finishes are his passion and focus.</p>"
  },
  {
    id: 13,
    empName: "Syed Mansoor Hussain",
    empDesig: "Head – Facility Management",
    empAbout:
      "<p>Syed, is an Engineering Professional with B. E. (Mechanical) from Bharathidasan University.</p><p>He brings edge to Facility Management department of the Organization owing to his 23 years of diverse experience with various real estate giants in India and Abroad.</p>"
  }
];


function changeAboutEmp(position) {
  document.getElementById('spr__aboutTxtContainerName').innerHTML = aboutEmp[position].empName;
  document.getElementById('spr__aboutTxtContainerDesg').innerHTML = aboutEmp[position].empDesig;
  document.getElementById('spr__aboutTxtContainerDesc').innerHTML = aboutEmp[position].empAbout;
};


$(document).ready(function() {

    // process the form
  //   $('form').submit(function(event) {
  //
  //       // get the form data
  //       // there are many ways to get this data using jQuery (you can use the class or id also)
  //       var formData = {
  //           'name'              : $('input[name=name]').val(),
  //           'email'             : $('input[name=email]').val(),
  //           'mobile'            : $('input[name=mobile]').val(),
  //           'message'           : $('textarea[name=message]').val()
  //       };
  //
  //       // process the form
  //       $.ajax({
  //           type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
  //           url         : 'http://website.codehive.in/site/save-contact-data', // the url where we want to POST
  //           data        : 'formData', // our data object
  //           dataType    : 'json', // what type of data do we expect back from the server
  //           encode      : true
  //       })
  //
  //       .done(function(data) {
  //
  //           console.log(data);
  //
  //           // here we will handle errors and validation messages
  //           if ( ! data.success) {
  //
  //               // handle errors for name ---------------
  //               if (data.errors.name) {
  //                   $('#name-group').addClass('has-error'); // add the error class to show red input
  //                   $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
  //               }
  //
  //               // handle errors for email ---------------
  //               if (data.errors.email) {
  //                   $('#email-group').addClass('has-error'); // add the error class to show red input
  //                   $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
  //               }
  //
  //               // handle errors for superhero alias ---------------
  //               if (data.errors.superheroAlias) {
  //                   $('#superhero-group').addClass('has-error'); // add the error class to show red input
  //                   $('#superhero-group').append('<div class="help-block">' + data.errors.superheroAlias + '</div>'); // add the actual error message under our input
  //               }
  //
  //           } else {
  //
  //               // ALL GOOD! just show the success message!
  //               $('form').append('<div class="alert alert-success">' + data.message + '</div>');
  //
  //               // usually after form submission, you'll want to redirect
  //               // window.location = '/thank-you'; // redirect a user to another page
  //               alert('success'); // for now we'll just alert the user
  //
  //           }
  //
  //       // stop the form from submitting the normal way and refreshing the page
  //       event.preventDefault();
  //   });
  //
  // });





  $("form").submit(function(event) {

      /* stop form from submitting normally */
      event.preventDefault();

      /* get the action attribute from the <form action=""> element */
      var $form = $( this ),
      url = '';

      /* Send the data using post with element id name and name2*/
      // var posting = $.post( url, { name: $('input[name=name]').val(), email: $('input[name=email]').val(), mobile: $('input[name=mobile]').val(), message: $('textarea[name=message]').val() } );


      // posting.then(function( data ) {
      //   alert(data);
      // }), function(error) {
      //   if (error.status == 422) {
      //
      //   } else if (error.status == 401) {
      //
      //   }
      // };
    });


  if (!localStorage.getItem("termsAgreed")) {
    localStorage.setItem("termsAgreed", true);
    $("#footerTermsModal").modal({
      backdrop: 'static',
      keyboard: false
    });
  } else {
    localStorage.setItem("termsAgreed", true);
  }


});


function termModalTriggerFunc() {
  $("#footerTermsModal").modal({
    backdrop: 'static',
    keyboard: false
  });
}

function sovereignTermModalTrig() {
  $("#footerSovereignTermsModal").modal();
}

document.addEventListener("scroll", fixHeader);

function fixHeader() {
  //spr__propertyDetailsStripList
  if (window.location.pathname != '/index' && window.location.pathname != '/about' && window.location.pathname != '/contact' && window.location.pathname != '/sovereign') {
    console.log(window.location.pathname);
    var scrollTop = $(window).scrollTop(),
    elementOffset = $('.spr__propertyDetailsStripListWrap').offset().top,
    distance = (elementOffset - scrollTop);

    if (distance <= 0) {
    $(".spr__propertyDetailsStripList").addClass("affix");
    } else {
    $(".spr__propertyDetailsStripList").removeClass("affix");
    };
  }

}
// $document.bind('scroll', function() {
//   //spr__propertyDetailsStripList
//   var scrollTop     = $(window).scrollTop(),
//   elementOffset = $('.spr__propertyDetailsStripList').offset().top,
//   distance      = (elementOffset - scrollTop);
//
//   if (distance <= 0) {
//   $(".spr__propertyDetailsStripList").addClass("affix");
//   } else {
//   $(".spr__propertyDetailsStripList").removeClass("affix");
//   };
// });
