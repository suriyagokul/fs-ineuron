 The purpose of using media queries for print media is to apply specific styles when a web page is being printed or viewed in print preview mode. 
 When users choose to print a web page, it's important to optimize the content and layout for the printed medium, as it often differs from the screen display. 
   Media queries for print allow you to target the print medium and customize the appearance of the printed document.
   
Here's an example of a media query for print:

@media print {
  /* Styles for print media */
  body {
    font-size: 12pt;
    line-height: 1.5;
    color: black;
  }
  /* Additional print-specific styles... */
}
