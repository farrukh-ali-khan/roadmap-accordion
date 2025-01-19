// script.js
document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentlyActiveAccordionHeader = document.querySelector(
        ".accordion-header.active"
      );
      if (
        currentlyActiveAccordionHeader &&
        currentlyActiveAccordionHeader !== header
      ) {
        currentlyActiveAccordionHeader.classList.toggle("active");
        const currentlyActiveContent =
          currentlyActiveAccordionHeader.nextElementSibling;
        currentlyActiveContent.style.maxHeight = null;
        currentlyActiveContent.style.display = "none";
      }

      header.classList.toggle("active");
      const accordionContent = header.nextElementSibling;
      if (header.classList.contains("active")) {
        accordionContent.style.display = "block";
        // Set the maxHeight to the scrollHeight to animate the opening
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        // Set the maxHeight to null to animate the closing
        accordionContent.style.maxHeight = null;
        accordionContent.style.display = "none";
      }
    });
  });
});
