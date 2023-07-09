Q.1 What is a Media Query in CSS, and what is its purpose?

  Whenever we want to make website responsive then we use media queries. These are nothing but dealing with breakpoints of various devices.

  Ex: @media (max-width: 768px) {
  /* Styles applied when the viewport width is 768 pixels or less */
  body {
    font-size: 14px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Styles applied when the viewport width is between 769 and 1024 pixels */
  body {
    font-size: 16px;
  }
}
