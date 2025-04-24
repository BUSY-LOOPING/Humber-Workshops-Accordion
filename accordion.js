function accordion_toggle(sectionId) {
    console.log("open");
    const section = document.getElementById(sectionId);
    console.log("open: " + sectionId);
    const isOpen  = section.classList.contains('active');
  
    document.querySelectorAll('.accordion-section').forEach(sec => {
      sec.classList.remove('active');
    });
  
    // If statement
    if (!isOpen) {
      section.classList.add('active');
    }
  }