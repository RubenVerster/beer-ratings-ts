enum TRating {
  EW = "Ew, no. You call this beer?",
  BAD = "If there was really nothing else to drink...",
  GOOD = "Better if it's cold",
  GREAT = "Great",
  EXCELLENT = "Buy these in packets",
  FUCKYEAH = "Set money aside for these ;)",
}

interface IBeer {
  blackLabel: {
    rating: TRating;
  };
  heineken: {
    rating: TRating;
  };
  bitBurger: {
    rating: TRating;
  };
  bavaria: {
    rating: TRating;
  };
  budweiser: {
    rating: TRating;
  };
  corona: {
    rating: TRating;
  };
  erdinger: {
    rating: TRating;
  };
  guinness: {
    rating: TRating;
  };
  loxtonia: {
    rating: TRating;
  };
  radler: {
    rating: TRating;
  };
  heinekenZero: {
    rating: TRating;
  };
}

let ratings: IBeer = {
  blackLabel: {
    rating: TRating.EW,
  },
  heineken: {
    rating: TRating.GOOD,
  },
  bitBurger: {
    rating: TRating.EXCELLENT,
  },
  bavaria: {
    rating: TRating.GOOD,
  },
  budweiser: {
    rating: TRating.EW,
  },
  corona: {
    rating: TRating.GOOD,
  },
  erdinger: {
    rating: TRating.FUCKYEAH,
  },
  guinness: {
    rating: TRating.GOOD,
  },
  loxtonia: {
    rating: TRating.FUCKYEAH,
  },
  radler: {
    rating: TRating.FUCKYEAH,
  },
  heinekenZero: {
    rating: TRating.GREAT,
  },
};
