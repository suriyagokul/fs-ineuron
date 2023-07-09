The orientation media feature can be useful for adapting the layout and design of a web page to better suit the user's device orientation. 
  For example, you might want to adjust the positioning of elements or change the arrangement of content based on whether the user 
  is viewing the web page in landscape mode (horizontal orientation) or portrait mode (vertical orientation).

    @media (orientation: landscape) {
  /* Styles applied when the device is in landscape orientation */
  .header {
    height: 80px;
  }
}

@media (orientation: portrait) {
  /* Styles applied when the device is in portrait orientation */
  .header {
    height: 120px;
  }
}
