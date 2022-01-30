enum TRating {
  ewNo = 'ewNo',
  bad = 'Bad',
  good = 'Good',
  great = 'Great',
  excellent = 'Excellent',
  fuckYeah = 'Fuck Yeah',
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
}

let ratings: IBeer = {
    blackLabel: {
        rating: TRating.bad,
    },
    heineken: {
        rating: TRating.good,
    },
    bitBurger: {
        rating: TRating.excellent,
    },
    bavaria: {
        rating: TRating.good,
    },
    budweiser: {
        rating: TRating.ewNo,
    },
    corona: {
        rating: TRating.good,
    },
    erdinger: {
        rating: TRating.fuckYeah,
    },
    guinness: {
        rating: TRating.excellent,
    },
};
