let filterVideos = (value) => {
  if (value == "all") {
    $(".card").show();
  } else {
    $(".card").each((i, card) => {
      let cardType = $(card).find("iframe").data("type");
      if (value == cardType) $(card).show();
      else $(card).hide();
    });
  }
};
