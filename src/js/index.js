
    const listItems = document.querySelectorAll("ul li[data-target]");
    const contentDivs = document.querySelectorAll("div[id]");
  //departement section
    listItems.forEach(item => {
      item.addEventListener("click", () => {
        const target = item.getAttribute("data-target");
  
        // Hide all content divs
        contentDivs.forEach(div => div.classList.add("hidden"));
  
        // Remove active styles from all list items
        listItems.forEach(li => {
          li.classList.remove("text-blue-500");
          li.classList.add("text-gray-700" );
        });
  
        // Show the targeted div
        document.getElementById(target).classList.remove("hidden");
  
        // Highlight the active list item
        item.classList.add("text-blue-500");
        item.classList.remove("text-gray-700");
      });
    });


    // question section

  
    document.querySelectorAll('.content').forEach((item) => {
      const heading = item.querySelector('h3');
      const paragraph = item.querySelector('p');
    
      heading.addEventListener('click', () => {
        const isOpen = !paragraph.classList.contains('hidden');
        
        // Close all other items
        document.querySelectorAll('.content').forEach((el) => {
          const elHeading = el.querySelector('h3'); // Correctly reference each heading
          const elParagraph = el.querySelector('p'); // Correctly reference each paragraph
          
          elParagraph.classList.add('hidden'); // Hide all paragraphs
          el.classList.remove('bg-blue-600');
          el.classList.add('bg-white');
          elHeading.classList.remove('text-white');
          elHeading.classList.add('text-slate-700');
        });
    
        // Toggle the current item
        if (!isOpen) {
          paragraph.classList.remove('hidden'); // Show current paragraph
          item.classList.add('bg-blue-600');
          item.classList.remove('bg-white');
          heading.classList.remove('text-slate-700');
          heading.classList.add('text-white');
        }
      });
    });


 const aboutOffset = $("#about").offset().top
$(window).on("scroll" , function(){
    if($(window).scrollTop() > aboutOffset){
        $("#navbar").addClass("fixed")
        $(".scroll-to-top").fadeIn(1000)

    }else{
        $("#navbar").removeClass("fixed")
        $(".scroll-to-top").fadeOut(500)
    }
})
  //  scroll to top icon


$(".scroll-to-top").on("click" , function(){
    $("html , body").animate({scrollTop : 0} , 500);
})


$("#navbar ul a").on("click" , function(){
    const currentSection = $(this).attr("href")
    const currentSectionOffsetTop = currentSection.offset().top
    $("html , body").animate({screenTop : currentSectionOffsetTop} ,500 )
})

// dropdown menun

  const menuButton = document.querySelector('.fa-bars'); // The bars icon
  const dropdownMenu = document.getElementById('dropdownmenun'); // The dropdown menu
  const menuLinks = dropdownMenu.querySelectorAll('a'); // Links inside the dropdown menu

  // Initially hide the dropdown menu
  dropdownMenu.classList.add('hidden');

  // Toggle the dropdown menu on bars icon click
  menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });

  // Close the dropdown menu when any link is clicked
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      dropdownMenu.classList.add('hidden');
    });
  });


    
 
 
  