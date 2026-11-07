const P    = "https://images.pexels.com/photos";
const POPT = "auto=compress&cs=tinysrgb";
const px = (id, w = 1920) => `${P}/${id}/pexels-photo-${id}.jpeg?${POPT}&w=${w}`;

export const THEME_C = {
  hero:          px(8431471),
  grapes:        px(45209,    900),
  tasting:       px(15880509, 900),
  estate:        px(19061857, 900),
  aboutHero:     px(31447951),
  values:        px(17765439, 900),
  wineClose:     px(391213,   900),
  contactHero:   px(5690802),
  teamHero:      px(5690802),
  producersHero: px(8431471),
};

export const TEAM = {
  thomas: px(30767572, 600),
};

// Hero video — grapes on vine (Coverr, Pexels 853754)
// Replace with real harvest footage when available from a partner winery shoot
export const VIDEOS = {
  themeC: 853754,
};
